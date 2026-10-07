# 原創資源指南

## 來源與識別

全部可執行資源由 `src/render.ts`、`src/audio.ts` 產生，不含圖像素材供應鏈或遠端字型。img1.jpeg/img2.jpeg只作低多邊形／色塊／固定斜俯視参考，未作紋理或模型重製。

| stableId | 生成入口 | 用途 |
|---|---|---|
| player_music_teacher | humanParts(player=true) | 黃色有領長裙、鮑伯頭、平底鞋、無表情教師 |
| student:<0..35> | humanParts(role=student) | 十二性格的共用程式骨架 |
| 七個 staff ID | humanParts(role=staff) | 護士帽、警衛帽、阿姨圍裙、主任／校長裝束 |
| 十九 parent ID | humanParts(role=parent) | 各型髮型、道具、護具、帽、包、傘等輪廓差異 |
| 目前27種基礎 itemDefs.modelKey（另8種衍生物） | itemModel(typeId) | 真正Box/Cylinder/Sphere/Cone/Torus組合 |
| prop:<zone>:<index> | propModel(type) | 家具、練習假人、講臺、工具間、活動攤位 |
| zone:<id> | Renderer.rebuild / World.walls | 地面、門、分組牆、標示 |
| sfx:<eventType> | AudioEngine.event | 拾取、落地、戰鬥、任務等合成聲音 |
| music:<explore/chase/choir> | AudioEngine.schedule | 原創音符序列與活動變奏 |

## 模型基準與掛點

Y向上、XZ地面，單位公尺。物件pivot是底面中心；人體約1.7m，學生縮至0.85倍。人物正面為local +Z，朝向為atan2(face.x, face.z)。手部掛點約local(0.36,0.88,0.18)，頭部假髮掛點Y=1.6m，眼鏡Y=1.38m且正面偏移0.23m。主角裙身從小腿到腰，以剛性幾何搖擺／姿勢轉換，無布料模擬。

幾何與材質共用，一個形狀一個InstancedMesh；每個instance仍保留獨立 gameplay ID 與碰撞。色彩以C palette／instanceColor表達；標示使用本地512×128canvas纹理，模式重建時dispose獨佔材質和紋理。

## 替換模型

1. 保留 `typeId` 與 `instanceId`，不要在更換模型時新增道具。
2. 以相同尺寸、底面中心pivot及+Z正面製作本地GLB，放在public/assets；可用本地GLTFLoader載入並缓存。
3. 只替换 `itemModel`／`humanParts` 的渲染入口，失敗時回退原幾何。玩法碰撞、攻擊距離、home座標與所有權仍由data/game/world控制。
4. GLB的碰撞不可由視覺網格直接取代；角色圓半徑0.32、固定家具AABB由World/refreshColliders決定。
5. 頭髮與黃色小腿裙保留；永久飾品只用徽章、眼鏡與鞋配色，不改主角身份。
6. 單人物約≤1200triangles為起點；新增貼圖盡量512、最大1024，先在Low／Standard實測。

## 動作與特效

共用簡化骨架部位以位置／旋轉表達站立、整理衣領、步行、快跑、攻擊、投擲、拾取、放下、佩戴、閃避、跌坐、恢復、點名、演奏／教學。打電話與拍攝舉機、暈眩星星、家長前搖圈、校長驚訝、哨子等屬狀態驅動。無血、真人傷勢或寫實碎片。

家具破損採翻倒外觀，碰撞保留。紙張、音符與泡沫等短暫decor池2.6秒消退，上限Low48／Standard96。lowMotion減少飄移，仍保留提示。考卷散頁是bundle子部件，三張拾取完才回成一包；其原ID不變。

## 音訊替換／試聽

遊戲 → 設定 → 試聽。首次開始由手勢建立AudioContext，失敗仍可靜音玩。音效頻率表與原創音符序列在audio.ts，不引用歌曲。需要替換時使用本地短音檔，保持事件映射、主音量壓縮、聲部限制（音效12／音樂6）、pause時停止未來聲音以及音量設定。

合唱為80BPM、32拍、8提示，聲畫都由同一simulation songTime對映到AudioContext排程，暫停不推进。不是真人合唱。人工聽感與手機音訊延遲尚待實測。

## 校園無線麥克風

`itemModel('wireless_microphone')`：0.7m內的低分段深灰握柄、灰藍球形網罩／深色橫網線與黃色環帶，全部使用既有cylinder/sphere/box與共享材質，不新增貼圖或光源。一般手持沿原anchor，擴音點名時右手與麥克風抬到臉旁約1秒。地面可回收道具不是decor，拋物線與判定依game資料、碰撞不依網罩外形。聲波重用torus实例，正常至多2動態圈+1靜態圈，lowMotion仅靜態；一個DOM氣泡跟隨有效聲源，取消當下由runtime狀態清除。

新增`microphoneBroadcast`（520Hz起音）與`microphonePulse`（740Hz短提示）；與普通點名共用650Hz提示。均在AudioEngine內合成，廣播source標籤供取消即stop，使用既有音量、mute、12聲部。soundtest.html逐項可試聽，目前32音效、5音樂。沒有任何裝置麥克風／錄音／語音辨識API。
