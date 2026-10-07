# 06｜技術架構、資料契約、手機效能

## 1. 建議技術與自主取捨

首選Three.js+TypeScript+Vite（建置後純靜態HTML/CSS/JS，無執行時後端），DOM負責選單/HUD，WebGL負責真正3D。使用開源依賴，具體版本在開發時核對官方文件並pin到lockfile，不猜不存在的API。已有專案框架時保留，不為技術偏好推倒整個專案。

Three.js為MIT，可用原創程式幾何完成所有資產。不開WebGPU-only路線，優先當前Three支援的WebGLRenderer與目標瀏覽器。無法支援WebGL時顯示實際相容訊息，不能切2D後宣稱完成3D。

碰撞首選簡單XZ圓形角色+牆傢俱AABB/OBB、投擲運動分段掃掠。模型看起來3D，但gameplay採用2.5D導航與簡單拋物線是合理最佳化。道具Y高度用於飛行和視覺，不要求真複雜剛體。如果確實需更多物理，只引入一個開源引擎並使用簡化collider/睡眠，不為幾十張考卷啟用剛體。Three.js本身不是完整遊戲/物理引擎。

技術參考（製作時再核對當前文件）：
- https://threejs.org/license/ ：MIT許可。
- https://threejs.org/manual/pages/optimize-lots-of-objects.html ：合併和共享物件思路。
- https://threejs.org/manual/pages/shadows.html ：shadow map需要額外渲染，預設簡單陰影。
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API ：音訊與使用者手勢限制。
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events ：觸控、capture/cancel。

不需要線上服務、使用者賬號、資料庫、付費美術、Unity匯出或大型遊戲伺服器。啟動npm開發伺服器只是開發階段，不是生產後臺。

## 2. 單一排程與核心架構

固定simulation timestep=1/30s，渲染按requestAnimationFrame插值；有動作視窗使用simulationTime而不是渲染frame。max catchup=4步，超大delta棄掉多餘並記日誌，避免background回來追算戰鬥。低頻AI/路徑規劃分佈到不同tick。真實時間只用於存檔冷卻等持久化，不讓現實時間推進暫停中的敵人攻擊。

模組建議（具體檔名可調整）：
- app：bootstrap、模式、暫停、可恢復錯誤。
- config/data：角色/道具/家長/任務/活動/場景/平衡。
- core：entity registry、事件匯流排、clock、seeded random、transactions。
- world：zone manager、layout、colliders、spatial grid、pathfinding、恢復。
- player：input、movement、facing、carry/wear、combat。
- ai：FSM、perception、personality、family spawner、attack abilities。
- systems：警戒、物件身份、戰鬥damage、任務、經濟、存檔、活動。
- render：renderer、camera、original model factories、animation、effects、materials。
- audio：voices、sfx、music sequencer、beat clock。
- ui：HUD、menus、dialogs、map、shop、reports。
- tests：核心規則與真實互動測試。

事件含eventId、sessionId、actorId、targetId、sourceId、zoneId、timestamp和causeId。mission透過事件訂閱，避免NPC直接修改任務UI或DOM。CombatResolved與NPCDowned等事件區別；任務/警戒/統計分別消費同一個去重事實。重置時先取消pending事件再銷燬引用，不能舊timer把新場景改回去。

## 3. 資料表契約

使用TypeScript型別或JSON schema，所有registry引用啟動時驗證。

```ts
type ItemDef = {
 id: string; label: string; category: ('portable'|'pushable'|'fixed'|'wearable')[];
 modelKey: string; collider: {shape: string; size: number[]};
 attacks?: {swingDamage: number; throwDamage: number; cooldown: number; reach: number};
 actions: string[]; weightClass: 'light'|'medium'|'heavy';
};
type ItemInstance = {
 instanceId: string; typeId: string; zoneId: string; ownerId: string|null;
 state: 'home'|'held'|'worn'|'airborne'|'settled'|'damaged'|'reserved';
 homeTransform: number[]; questPins: string[];
};
type ParentDef = {
 id: string; label: string; tier: 'normal'|'advanced'|'special'; slotCost: number;
 modelKey: string; abilities: string[]; hp: number; speed: number; recoverySeconds: number;
};
type MissionDef = {
 id: string; label: string; modeId: string; category: string;
 objectiveSteps: {type: string; params: Record<string, unknown>}[];
 requiredEntityTags: string[]; firstReward: number; resetPolicy: string;
};
```

所有名稱和id來自各表，程式可定強型別但不能少內容。必須有10zone、26item def、12student personality、19parent、7staff、24normal mission、4chapter與16event mission。衍生coffee_cup/parcel等另列輔助registry不覆蓋這些數字。

內容覆蓋報告自動輸出：id→資料已註冊→模型生成成功→行為/操作實現→測試/體驗證據。沒有使用的id不應標已完成。複雜NPC以ability組合可接受，但每型的差異必須能實際表現。

## 4. 效能預算（起始工程目標，不是保證）

目標：中階/較舊手機低畫質真實場景穩定30FPS，較強裝置60FPS。不限制只支援使用者當下最新手機。瀏覽器桌面裝置模擬不等於真機GPU/溫度驗證。

| 專案 | Low | Standard |
|---|---:|---:|
| devicePixelRatio上限 | 1.0 | 1.5 |
| 每幀draw calls目標 | ≤90 | ≤140 |
| 可見triangles目標 | ≤70k | ≤120k |
| 高/中頻活躍NPC總數 | ≤16 | ≤20 |
| 其中活躍學生 | ≤10 | ≤12 |
| 追逐/搜尋/入場家長 | ≤3 | ≤3 |
| 積極追逐教師 | ≤2 | ≤2 |
| 同時運動投擲物 | ≤6 | ≤8 |
| 有碰撞移動大物件 | ≤3 | ≤4 |
| 裝飾碎片/粒子 | ≤48 | ≤96 |
| 同時傷害浮字 | ≤8 | ≤12 |
| 即時陰影光源 | 0 | 預設0，可選1限主角附近 |
| 模擬更新 | 30Hz | 30Hz |
| 普通AI思考 | 5Hz | 8Hz |
| 遠景群眾 | 不碰撞/低頻動畫 | 同左 |

同預算是疊加的總量，不每區域各有20NPC。需要滿足任務的場景保留人物，讓普通路人主動離視野後輪換；新人物不憑空在鏡頭中跳出。邏輯NPC身份比視覺例項多，儲存不可視狀態。

靜態牆地與同材質傢俱合批，重複錐/椅/遠景用instancing；不同interaction entity仍保留簡化collider，渲染合批不抹除ID。幾何/材質快取共享，destroy時釋放僅獨佔資源。

nav靜態格網cell約0.6–0.8m，動態傢俱區域性佔用，空間雜湊避免全實體兩兩碰撞；重算路徑最多2次/s/agent且錯峰，總budget限制。投擲物運動靜止後睡眠，不跑反彈到永遠。

LOD距離建議近0–12m、中12–24m、遠>24m；螢幕/區外並不真正完成任務狀態動作。被追逐NPC即使遠也保留搜尋狀態，降頻而非刪除追逐因果。

## 5. 效能實測與降級策略

開發HUD（預設關閉）顯示fps、frameTime p50/p95、drawCalls、triangles、active NPC、物理/AI tick耗時、voice數、save錯誤。測量UI不進入產品主流程。

若連續3s frameTime超33ms：逐級減少粒子→降低DPR→關閉動態陰影→降遠景LOD/AI頻率。不得降到玩家攻擊判定失效、任務NPC消失或取消十九類家長。連續20s充足餘量才升回一級，避免來回抖。使用者手動鎖畫質時保持選擇並提示建議，不能每秒覆蓋設定。

效能報告至少列實際裝置、瀏覽器、畫質、場景、測試時長、幀時間方法與結果。FPS由rAF呈現間隔測，不把固定30Hz模擬宣稱30FPS。無真機標「待真機驗證」，提供10分鐘指令碼，不聲稱已滿足所有手機。

20次模式切換後entity/geometry/listener/音聲數回到合理基線。WebGL context lost暫停、儲存、恢復/提示過載，不能繼續在背景白屏計算。背景暫停，在回到頁面時要求繼續，不無限catchup。

## 6. 預設選擇矩陣

未定義物件：先輕型P/重型M/大型F，優先已有動作，記錄原因。未定義攻擊：共用扇形/投射/衝刺/光環四類，避免為名字加新系統。未定義任務失敗：讓本次目標可免費重試，不擦掉長程進度。未定義美術：本地程式原創幾何。未定義NPC對話：短句繁體中文、身份正確、冷卻。未定義恢復：保持唯一身份與questPins。技術版本不明：查官方文件或已裝版本，不等待使用者選擇。

不能默默換成2D、雲端付費服務、多人遊戲、刷等級、槍械或大型寫實開放世界。可以調整範圍內數字/地圖位置/動作時長，不刪明確內容。
