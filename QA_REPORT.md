# 驗收報告

測試日期：2026-10-07至2026-10-08（Asia/Taipei）。遊戲為真正可執行Three.js 3D沙盒，非影片、模型展示或示意圖。全部生產資源本地生成；source、dist、原始規格及證據均一併交付。

## 方法與證據層級

1. 純核心測試：`tests/core.test.ts`，固定seed6477，以真實Game/World交易與FSM、部分測試驅動底層事件驗證任務契約。22組通過（原始結果 artifacts/core-tests.tap）。
2. 真正瀏覽器操作：Playwright + Chromium 141.0.7390.37，在實際WebGL頁面用鍵盤、滑鼠按鈕與CDP雙觸控操作。透過dev傳送或合法情境準備，縮短從出生點走路的時間；完成仍透過實際輸入／模擬條件，未直接填completed。
3. 長時間自動運行：20分鐘Low模式，記錄真實rAF呈現間隔及render.info，另做滿投擲物壓力測試。這不等於人工連玩20分鐘或手機熱測。
4. 手機viewport僅為觸控、safe-area布局與旋屏验证，不宣稱手機GPU通過。

## 核心測試

- 精確10/26/12/19/7/24/4/16數量、ID引用合法與唯一。
- 物件拿／投／NPC拾／佩戴／歸還／救援後同一ID唯一持有；拆散考卷三張需逐張拾回成原bundle。
- 一次攻擊單目標一次、暈眩事件去重、校護保護、NPC人物無永久傷亡。
- 警戒五級閾值、cooldown、NPC惡作劇不歸玩家、牆視線、藏入目擊差異。
- 家長通知中斷不完成、两秒有效完成、一次incident、六秒預告、duo2/PTA3／三人總預算。
- 房間通路、動態家具繞行、分段閃避不穿牆。
- questPins與持有排除恢復，模式清pending／queue與原物件回復。
- 40項任務的事件／機制完成鏈；首通ledger去重、取消重開不給重複點、四章自由選、已完成保存。
- 不足點數不能買、存檔round-trip、非法版本／ID／數值拒绝。
- 32拍80BPM、八次指揮窗口、暫停不推进、無聲也可完成。
- 30次家長波次的有界投擲池與指定任務物件檢查；20次模式切換內容基線、全部portable/pushable/fixed/wearable操作、十二性格FSM與十九ability生成。

其中任務完成鏈有使用事件驅動測試，例如strikeProps/audience、逃離／搜尋條件、seat等；這證明目標契約和完成條件，不能代替從出生點人工逐項通關或每種家長完整交戰。

## 真正輸入主驗收

16組結果見 `artifacts/browser-qa.json`：

- 屏幕方向W移動、暫停清輸入且世界停止。
- 待辦UI選q01，E拿考卷，R送指定盤，任務完成。
- 掃把揮打、球實際投出／落地、原ID恢復。
- 動作選單戴原假髮，頭槽與手持分離。
- 推辦公椅的座標真實改變。
- 三角鐵演奏事件、咖啡杯唯一衍生物。
- 親師日三位不同性格對話，三種答覆影響不同。
- 校慶三個商品箱以E/R實際交付完成。
- 合唱完整32拍，用Enter實際指揮，曲段完成才通關。
- 期末考原時鐘歸還，再由講臺回答可見時間資訊。
- 真實JSON下載、有效匯入、損壞匯入保護。
- 兩分頁租約只能一頁寫、明確接管。
- 模擬Storage寫失敗，遊戲繼續並提示可匯出。
- 三家長／兩教師上限，體力耗盡後100HP救援與真實報告。
- 20次实际場景切換，WebGL geometry/texture回合理基線。
- 390×844兩指同時移動／揮打，單次攻擊、不重複；cancel後無卡鍵；轉844×390不重置，選單可捲動。

補充流程見 `artifacts/extended-qa.json`，另含巡堂、保齡球、假髮獎盃、筆電持有鏈、拍摄中斷、自然降警戒、十九模型、context lost。八組全部通過，最終狀態以原始JSON為準。

## 修正紀錄

- 修正樣式載入錯誤，真正WebGL畫面與主選單可啟動。
- 修正空手時交付marker抢走道具互動。
- 修正家長從校門尚未走到最後受害位置就超時搜尋；新增Enter沿路入場。
- 修正Enter指揮同時觸發焦點HUD按鈕；遊戲動作鍵阻止瀏覽器預設點擊。
- 修正講臺與粉筆擦接近時，考程目標選到道具；當前任務互動優先。
- 補上考卷三張子部件拾回、區域離開時間與相機可見性恢復條件。
- 修正警戒0級仍有分數時自然降到0沒有发任務事件；以45秒真實模擬回歸。
- 修正NPC包裹／箱子生成不該複製人物ID/type；只取XZ座標並驗證投擲。
- 修正家長等必要人物的活躍排序，預算優先保留追逐人物。
- 補上指定合唱團員、合作社服務時再驗證狀態／距離、props任務保留解除。

## 未驗證（不宣稱通過）

- 真實iPhone/Android的GPU、10分鐘發熱／省電模式、手機Safari。
- 人工耳機／喇叭聽感、手機AudioContext延遲與各瀏覽器音量舒適度。
- 人工從出生點完整玩完40個任務與19型家長每個招式／弱點的體驗。
- 使用者Chrome/Safari瀏覽器擴充、私密模式與各系統儲存策略。
- 無視覺輔助者完成3D戰鬥（不做可及性完整宣稱）。

初次交付已確認source build與靜態載入，當時未公開發布或購買任何服務。真機複查方法見PERFORMANCE_REPORT.md。原始證據保留，未以生成圖片充當遊戲截圖。

## 2026-10-08 試聽頁、更名與分享圖更新

新增獨立 `soundtest.html`，30 種事件／樂器音效、5 段背景音樂直接使用遊戲的共用音訊引擎。人工聽感仍由使用者逐一試聽；自動驗收記錄實際 Web Audio 節點、頻率及排程，不以呼叫按鈕當作聲音已聽過。結果見 `artifacts/soundtest-qa.json`：全部通過，包括合唱32個音符、90／120BPM、校慶升調、停止後無新音符、無存檔寫入、390px排版、最新HUD名稱、OG圖片實際1200×630。22 組核心規則測試重新通過。另以 SITE_URL 含子路徑的 build 確認 OG／Twitter 兩處皆使用正確完整圖片網址。

名稱依使用者要求統一更名為「開心導師」，包含程式、README、規格及重新建置的部署成品。既有歷史驗收截圖保留原樣，並非當前名稱的證據。

`public/og-image.png` 是以真正中庭畫面製作的 1200×630 分享宣傳圖，經 imagegen 編排與 HUD 移除，屬分享素材；原始遊戲驗收截圖仍在 artifacts 中。分享爬蟲尚未在公開網域測試；部署時以 SITE_URL 建置完整圖片網址。

## 2026-10-08 GitHub Pages 正式發布

依使用者授權，儲存庫預設分支與部署分支均為 main，Pages Source 改為 GitHub Actions。工作流程執行 locked install、22組核心測試、正式建置、成品及OG網址检查，再發布dist。第一次Linux安裝因pnpm 11未核准esbuild腳本而停止，補上僅允許esbuild的pnpm-workspace.yaml後重新部署成功。

成功執行：[Actions 37654572022](https://github.com/ml-yoyohuang/teacher-simulator/actions/runs/37654572022)。公開網站：[東山校園大騷動](https://ml-yoyohuang.github.io/teacher-simulator/)、[聲音試聽頁](https://ml-yoyohuang.github.io/teacher-simulator/soundtest.html)。

公開Chromium驗收通過：真正WebGL頁面啟動、鍵盤移動輸入、24任務選單、開心導師HUD、30音效／5音樂試聽入口、實際播放觸發與停止、1200×630圖片與完整HTTPS OG網址。pageerror與HTTP失敗回應均0，dev API未包含於正式版。證據見artifacts/pages-live-qa.json、pages-deployment.json、pages-settings.json與兩張pages-live真實截圖。人工聽感、實體手機效能及社群實際分享爬蟲仍未驗證。

## 2026-10-08 考卷／講臺教學修正

修正教學寫「E放下」卻未提供講臺交付互動、走近反而自動放下的矛盾。拿考卷靠近講臺時提供最高優先級的E放置目標，放到講臺頂部，旁邊粉筆擦與人物不會搶走互動；一般模式也可使用，不會因此完成應送辦公室的q01任務。教學只在實際交付後進下一步，走近不自動放下；R在正確位置放下仍可完成。教學新增黃色目標圈。

核心回歸共25組通過；新增三組驗證明確E、R位置／類型限制與跳過教學後的E放置。artifacts/tutorial-qa.json另記錄實際W/E鍵盤操作、同一考卷身份與講臺高度；使用dev情境調整位置及附近粉筆擦，未直接寫入教學完成狀態或假造交付事件。

## 2026-10-08 手機鏡頭、擊倒圖鑑與可收合提示

30組核心測試通過（原25組加5組），含12種學生與19種家長實際傷害至HP0的紀錄、HP0後不重複計數、恢復後再次擊倒、家具真實揮打與修復再破壞、投擲落地破損、籃球碰撞三角錐、NPC箱子投擲排除、活動預設破損排除、跨活動保留，以及舊存檔遷移／匯出匯入與無效資料拒絕。證據：`artifacts/mobile-codex-core-tests.tap`。

Chromium觸控模擬驗收：390×844與844×390人物1.75m投影高度分別75.85px與39.62px，原值34.48px與18.01px，比率均2.2；1440×900桌面比率1.0。以同一攝影機姿態對照原投影範圍計算，沒有用生成圖片當證據。旋轉同一分頁仍保留手機鏡頭與收合狀態。幾何仍為6組，觀測draw calls為6／8／10；此數據不是實體手機FPS或發熱效能宣稱。

以實際觸控揮打、投擲取得膽小學生、快遞家長、桌子及粉筆擦的圖鑑紀錄，確認重新載入後仍保留；學生未解鎖標示、家長／物品頁籤及次數正確。僅用開發API準備目標位置／HP與任務內容，沒有直接寫圖鑑或合成擊倒事件。提示卡點擊、鍵盤操作、走動不展開、任務步驟變更自動展開皆通過。證據：`artifacts/mobile-codex-qa.json`與實際截圖。

正式dist成品使用真實UI、無開發API的觸控验收通過：12學生、19家長、空物品狀態、收合／展開／轉向、沒有水平溢出，pageerror與HTTP錯誤均0。證據：`artifacts/mobile-production-release-qa.json`。TypeScript、Vite build與Pages成品／OG檢查通過。公開版驗收另記於`artifacts/mobile-pages-release-qa.json`（僅在成功發布後產生）。

限制：舊存檔只有擊倒總數，無法還原個別種類，更新後才開始收集。未使用實體iPhone／Android，手機Safari、GPU效能、耗電及長時間發熱仍未實測。

公開部署與驗收已完成：[Actions 37659948059](https://github.com/ml-yoyohuang/teacher-simulator/actions/runs/37659948059)成功。公開頁面載入的game-dmSxQZht.js與本地測過成品一致，手機觸控收合／展開、走動保留狀態、12學生與19家長條目、物品空狀態、轉向及無開發API皆通過，HTTP錯誤與pageerror均0；證據：`artifacts/mobile-pages-release-qa.json`與實際公開畫面截圖。

## 2026-10-08 校園無線麥克風

新增後共27種基本道具（另有8種衍生／配件），試聽頁32種音效／5段音樂逐項實際Web Audio節點、頻率與排程驗證通過。TypeScript、Vite與Pages成品檢查通過。40組核心測試全部通過（原30組與新增10組），原始輸出：artifacts/microphone-core-tests.tap。涵蓋五模式各一支唯一身份、揮打／拾取／投擲／放下／歸還、10m遮擋與共用12秒冷卻、反擊者不受控制、首次落地單次廣播、可見追逐者及目擊投擲者排除、合法尋路／不可達取消、30秒實際調查冷卻、拿回／移除／重置／救援／模式切換清理與遊戲計時。

實際Chromium鍵盤演示完成「家長追逐→繞遮擋投擲→失去視線→家長搜索→沿合法路徑調查廣播→玩家離開」，另測親眼看見投擲後不調查。開發API只準備起始位置、家長狀態及拿取位置，其後使用真正鍵盤移動／Q投擲，搜索與調查由遊戲更新自然產生，沒有合成AI事件或直接完成脫離。逐幀軌跡未穿越碰撞，脫離仍經原搜索規則判定。證據：artifacts/microphone-desktop-qa.json、microphone-qa.json、microphone-demo.webm與真實截圖。不是從出生點自然引發家長入場的完整人工流程。

390×844觸控測試通過：E拿取、動作選單點名、平靜学生先轉頭而反擊者仍反擊、觸控投擲、靜音／減少動畫、暫停期限不變、拿回立即取消廣播／特效／聲部。有視窗Chromium實際最小化使document.hidden=true，自動暫停並清空聲部；恢復需按繼續，沒有再次啟動落地事件。QA關閉Playwright 1.56.0主CDP連線強制前景設定，沒有改遊戲或偽造visibility事件。拿回聲部取消另於真實廣播期間手動觸發共用AudioEngine提示音，確認实际振盪器停止；此音訊探針不是AI吸引事件。

未驗證：實體iPhone／Android、Safari、長時間發熱／耗電、人工喇叭聽感。本版沒有重跑先前20分鐘效能測量，舊數據不能當成本版實測。遊戲不申請裝置麥克風權限、不錄音、不使用語音辨識。

重現麥克風瀏覽器驗收：先啟動5173開發伺服器，再執行 `QA_HEADED=1 pnpm exec tsx scripts/microphone-qa.ts`；此腳本需可顯示及最小化的Chromium視窗以測真實背景。只重測手機部分可加 `QA_PART=mobile`，會沿用先前實測桌面JSON。正式成品回歸使用 `pnpm exec tsx scripts/mobile-release-qa.ts`，公開版加 `QA_URL=https://ml-yoyohuang.github.io/teacher-simulator/`。

正式公開發布通過：[Actions 37667242101](https://github.com/ml-yoyohuang/teacher-simulator/actions/runs/37667242101)，功能提交65c78c7。發布完成後重新使用公開網址驗證，本地與公開的game-DF68QNW-.js一致；27種道具說明含麥克風、原手機提示／圖鑑／轉向、32音效／5音樂入口、24一般任務與1200×630 OG正常，pageerror及HTTP錯誤皆0。證據：artifacts/mobile-pages-release-qa.json、pages-live-qa.json。第一次部署尚進行中的探測看到舊30音效而停止，待Actions成功後重測才列為通過。

## 2026-10-08 校園場景完整佈置改版

已閱讀附件及現有程式，以同一遊戲完成十區功能家具、真實道具支撐、四活動變體與合法通路。48組核心測試全部通過：原40組保留，新增8組涵蓋全部模式的十區入口及每件道具桌邊路徑（每段掃掠碰撞檢查）、玩家／NPC／家長／復活不在家具內、拿投歸位與原身份、桌面放下及落地、20次切換家具碰撞不累積且手持物保留、舊v1永久進度遷移、全部任務交付／定位點及服務路徑。原40任務仍有可執行事件／機制完成鏈，不代表人工逐項完整通關。證據：artifacts/scene-core-tests.tap。

實際Chromium WebGL驗收通過：十區與四活動截圖；課本／直笛／筆電／麥克風真實E、J、Q、回收及動作選單歸還，原身份與桌面高度一致；咖啡機／鋼琴、阿姨購物、警衛與護士恢復；兩條真正鍵盤路線從門口繞過課桌／排練椅到道具；家長在教室家具間透過原AI追逐移動，逐次位置未在碰撞體內。390×844觸控拿桌上課本與投擲通過。證據：artifacts/scene-browser-qa.json。開發API只準備情境、起點與服務目標，沒有寫入任務完成或合成AI到達事件。

最終截圖由 scripts/scene-screenshots.ts 在真正遊戲中切換佈局、將玩家放到可達觀看位置、以實際按鈕收合TODAY，再擷取現有HUD畫面。十區及四活動共14張主截圖，索引SCENE_SCREENSHOTS.md／artifacts/scene-screenshots.json；不是示意圖。遊戲近牆切低，門牌獨立；校門梁及身旁標牌避免遮住老師，商店／警衛亭局部後棚不罩住互動位。

此次發現並修正：辦公室左座位被舊桌封路；桌邊導航端點不適合格網；原尋路近似終點最後一段可能跨碰撞；桌面麥克風與鋼琴位置重疊；原病床／課桌重複擺設；校門橫梁／標牌遮住人物。修正後重新跑全核心、操作與最終截圖。

舊存檔保存永久進度與設定／圖鑑，不保存世界或即時手持資訊；保留原重新載入開場規則。活動切換額外保留玩家當下手持／佩戴同一物件，明確重置與救援仍清場。靜音／暫停／背景邏輯沿用原系統；本版沒有重新跑先前麥克風原生最小化演示，規則回歸與原清理測試通過。實體手機、Safari、長時間熱效能、人工聽感及40任務人工完整通关仍未驗證。

正式成品實測補充發現辦公桌前「只能推的辦公椅」與桌上考卷同優先級，E會先推近椅；已修正空手優先選可拿物、固定設備次之，當前任務指定物件優先，保留推椅任務操作。新增真實桌邊／近椅競爭回歸，48組全數通過後重建成品。

實際WebGL連續20次切換通過：同模式家具／碰撞／身份／NPC數一致，geometry維持7，已上傳標牌texture在2–4間，沒有累積增長。artifacts/scene-resource-switches.json。正式dist另以無開發API實際從出生點沿桌側走近、手機E拿考卷、行事曆切親師日，手持考卷保留且4活動任務正常；原圖鑑／TODAY／旋轉驗收亦通過。artifacts/scene-production-release-qa.json、mobile-production-release-qa.json。

桌面NPC整合另外以真實模擬tick回歸：撿道具學生可在桌邊取得同一課本並放回支撐高度，集合／入座等抵達狀態使用已解析的可達桌邊目標，避免停在桌邊卻永遠未判定到達。已納入48組核心測試。

場景新版公開部署完成：[Actions 37717393100](https://github.com/ml-yoyohuang/teacher-simulator/actions/runs/37717393100)，功能提交2a3b503。公開Chromium載入game-Ct0nF8qt.js與本地測試成品一致；真正从出生點走到桌旁、手機拿考卷、行事曆切親師日保留手持物及4活動任務通過。原手機圖鑑／TODAY／旋轉、27道具說明、24一般任務、32音效／5音樂與OG亦通過，pageerror與HTTP錯誤均0。證據：artifacts/scene-pages-release-qa.json、mobile-pages-release-qa.json、pages-live-qa.json。

## 校事會議驗收（2026-10-08）

最終 66 項核心／回歸測試通過，型別與正式建置通過。六角色 ×16狀態 ×3攻擊方法 =288 組，在合法無碰撞站位按 J／Q、執行原30Hz戰鬥與渲染，命中、白閃與位移全數通過。另測15橋段特色互動、恢復與清理、真實鍵盤繞桌、觸控模擬離席與正式成品不暴露開發入口。

原始結果：artifacts/meeting-core-tests.tap、meeting-browser-qa.json、meeting-modules-qa.json、meeting-production-qa.json。截圖索引 MEETING_SCREENSHOTS.md；完整逐角色／逐狀態、驗證方法與未驗證界線在 MEETING_QA_REPORT.md。沒有宣稱手機實機通過。

## v1.2最新驗收

完整85項測試零失敗；兩狗全12狀態與全部手持／投擲物免傷，鄰近成人有效命中；理化老師5狀態×3方式實際鍵盤命中；旁聽4委員×3方式實測，原六種委員16狀態規則測試通過。原場景、麥克風、任務、商店、保健室、存檔與會議測試保留。六狗任務原導航完整操作、16橋段逐一功能／清理、手機名牌與圖鑑圖片、正式dist無開發入口／404／pageerror通過。原始結果、畫面、方法、效能及未實機驗證界線見DOGS_QA_REPORT.md。

## v1.3 校園生活事件（2026-10-08）

六種事件已實作並整合場景、會議、兩狗與理化老師；新增洗手區、儲藏間與六項一次性紀念。操作、排程、預約、警戒來源、讀檔安全清理與擴充方法見 [LIFE_EVENTS_GUIDE.md](LIFE_EVENTS_GUIDE.md)，实际六種事件畫面見 [LIFE_EVENTS_SCREENSHOTS.md](LIFE_EVENTS_SCREENSHOTS.md)，驗收見 [LIFE_EVENTS_QA_REPORT.md](LIFE_EVENTS_QA_REPORT.md)。本節是目前本地 v1.3 的紀錄，前文 v1.1/v1.2 為既有發布歷史。

## 2026-10-09 配樂驗收

112項既有規則測試通過（artifacts/music-core-tests.tap）；41音效與8音樂實際瀏覽器试聽觸發、32拍合唱、停止及不寫存檔通過（artifacts/soundtest-qa.json）。原生Chromium手機觸控模擬13項音樂检查通過：四首依序輪播、共享混音器有非零PCM、靜音、音量、暫停續播、一般／校慶追逐變奏、20次模式切換仍僅兩個串流節點、合唱優先、原生背景暂停等待觸控繼續、音檔404跳過／備援。見artifacts/music-browser-qa.json。曲尾測試以實際media element定位到尾段加速，追逐人物起始狀態由開發入口準備，不宣稱人工從出生點完整遊玩。人工聽感、實體手機、Safari、弱網及長時間熱效能未驗證。

正式發布驗證：功能提交e643dac，GitHub Pages部署37909485781成功。公開站七首MP3的SHA-256與本地清單一致，七首實際解碼播放、390×844觸控试聽、遊戲開始／暫停／續播通過，無頁面例外；见artifacts/music-production-qa.json、artifacts/music-production-soundtest.png与scripts/music-production-qa.ts。這不代表人工聽感或實體手機測試。

## 2026-10-09 介面、移動與回饋

完成動態HUD排版、4/5.5m/s步行／跑步、家具前高亮任務標記與跳過教學的考卷提示、真實傷害浮字／短白閃／輕震動、25/10HP低血量提示與減少動態模式。114規則測試、24組版面與真實E／J輸入通過，詳見FEEDBACK_QA_REPORT.md及artifacts/feedback-browser-qa.json。實體手機、Safari及真人舒適度未測。

## 2026-10-09 按鈕間距

相鄰選單按鈕統一12px間距與換行，手機操作鍵至少8px，修正手持合唱時指揮／投擲／動作鍵重疊。105組實際瀏覽器版面與觸控取消／鍵盤答題通過，見[BUTTON_SPACING_QA_REPORT.md](BUTTON_SPACING_QA_REPORT.md)。真機及Safari未驗證。
