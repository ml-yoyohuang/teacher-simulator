# 規格覆蓋與驗證層級

日期：2026-10-08。完整內容已登錄並接入共用機制；這份報告不把資料登錄當成實際通關。

| registry | 數量 | 證據 |
|---|---:|---|
| zone | 10 | 格網通路／碰撞測試；真實3D模型 |
| item | 27 | 每種portable/pushable/fixed/wearable操作實測狀態 |
| student | 12 | 性格反應FSM測試、部分真實NPC互動 |
| parent | 19 | 有效入場／預算／ability測試及逐型3D生成 |
| staff | 8 | 場景角色與各服務/查詢/巡查路徑 |
| normal mission | 24 | 完成鏈、第一獎勵ledger、取消與重試 |
| chapter | 4 | 固定順序、自由選與清場 |
| event mission | 16 | 獨立完成鏈，代表活動實際操作 |

## 驗收矩陣

| 項目 | 狀態 | 證據／限制 |
|---|---|---|
|十區功能佈局／四活動／桌面拾取／合法導航|pass (規則＋實際輸入)|tests/scene.test.ts、artifacts/scene-browser-qa.json、十區與四活動真實截圖；實機未測|
|手機2.2倍鏡頭／擊倒圖鑑／提示收合|pass (模擬)|tests/mobile-codex.test.ts、artifacts/mobile-codex-qa.json；保留本次更新前功能|
|校園無線麥克風／擴音點名／落地誘餌|pass (規則＋實際輸入)|tests/microphone.test.ts、artifacts/microphone-qa.json與真實演示影片；真機及人工聽感未驗證|
|真正3D／原創主角|pass|artifacts/courtyard.png、office.png；WebGLRenderer/角色幾何|
|固定斜俯視／屏幕方向／室內牆切低|pass|桌機W方向及真實室內截圖；render.ts固定正交相機|
|10區連續地圖／三種路線|pass (規則)|World格網各區可達與動態障礙；非人工逐區長時間調查|
|27道具全部允許操作|pass (規則＋代表輸入)|全操作test；掃把/球/假髮/椅/三角鐵/咖啡真實輸入|
|十二性格／十九家長／八教職員|pass (機制)|FSM與逐型生成測試；尚無19型各自人工完整交戰|
|通知因果／警戒池／預告／3家長2教師|pass|聯絡中斷與完成測試、預算測試、真實壓力場景|
|警戒／視線／搜尋／藏點|pass (規則＋代表輸入)|未目擊/目擊藏入測試、拍攝打斷、自然降級|
|持有／頭槽／投擲／暈眩|pass|ID不變／拾投佩戴／實際球命中／救援|
|24+16任務與4活動|pass (事件/機制鏈)|40項完成鏈；實際输入子集另列QA_REPORT|
|教學可跳／重看／活動自由選|pass|skip/重看入口、全章切換測試|
|點數／6外觀／12稱號／事件報告|pass (規則)|ledger與經濟、稱號各自任務可達、真實倒地報告|
|重置／questPins／身分|pass|持有排除、不可見恢復、20次切換、原ID回復|
|合成聲音／節拍／靜音|pass (程式)|AudioContext建立、32拍實際按鍵；聽感not tested|
|存檔／匯出匯入／多頁|pass|實際JSON下載/損壞檔/租約接管/儲存失敗|
|Low/Standard／資源／壓力|見 PERFORMANCE_REPORT|rAF與render.info；真機not tested|
|靜態生產build／本地執行|pass|tsc+vite、dist實際瀏覽器smoke；無CDN|

## 全內容逐ID

| 類別 | ID | 名称 | 規則／機制測試 |
|---|---|---|
|zone|courtyard|中庭|pass|
|zone|classroom|一般教室|pass|
|zone|music_room|音樂教室|pass|
|zone|staff_room|導師辦公室|pass|
|zone|principal_room|校長室|pass|
|zone|corridor|共用走廊|pass|
|zone|playground|操場一角|pass|
|zone|gate|校門與警衛室|pass|
|zone|co_op|合作社|pass|
|zone|infirmary|保健室|pass|
|item|chalk_eraser|粉筆擦|pass|
|item|basketball|籃球|pass|
|item|toy_mallet|玩具槌|pass|
|item|drumstick|鼓棒|pass|
|item|folder|資料夾|pass|
|item|trophy|獎盃|pass|
|item|textbook|課本|pass|
|item|broom|掃把|pass|
|item|spinning_top|陀螺|pass|
|item|trash_bin|垃圾桶|pass|
|item|badminton_racket|羽球拍|pass|
|item|table_tennis_racket|桌球拍|pass|
|item|stopwatch|碼錶|pass|
|item|traffic_cone|三角錐|pass|
|item|recorder|直笛|pass|
|item|music_stand|譜架|pass|
|item|piano|鋼琴|pass|
|item|triangle|三角鐵|pass|
|item|castanets|響板|pass|
|item|coffee_machine|咖啡機|pass|
|item|wall_clock|時鐘|pass|
|item|office_chair|辦公椅|pass|
|item|exam_papers|考卷（3份）|pass|
|item|principal_wig|校長假髮|pass|
|item|principal_glasses|眼鏡|pass|
|item|laptop|筆電|pass|
|item|wireless_microphone|校園無線麥克風|pass|
|student|timid|膽小|pass|
|student|fighter|反擊|pass|
|student|tattletale|告狀|pass|
|student|spectator|圍觀|pass|
|student|filmer|拍片|pass|
|student|friend|朋友助陣|pass|
|student|mediator|勸架|pass|
|student|scavenger|撿道具|pass|
|student|prankster|惡作劇|pass|
|student|guardian|護寶|pass|
|student|athlete|體育健將|pass|
|student|reader|冷靜旁觀|pass|
|parent|spatula|鍋鏟|pass|
|parent|sports|運動|pass|
|parent|briefcase|公事包|pass|
|parent|shopping_bag|購物袋|pass|
|parent|nagging|碎念|pass|
|parent|protective|護子|pass|
|parent|pta_leader|家長會代表|pass|
|parent|umbrella|雨傘|pass|
|parent|gardener|園藝|pass|
|parent|yoga|瑜伽|pass|
|parent|courier|快遞|pass|
|parent|photographer|攝影|pass|
|parent|whistle|哨子|pass|
|parent|camper|露營|pass|
|parent|runner|路跑|pass|
|parent|neat|潔癖|pass|
|parent|armored|護具|pass|
|parent|drama|戲劇社|pass|
|parent|duo|雙人默契|pass|
|staff|patrol_teacher|校安老師|pass|
|staff|pe_teacher|體育老師|pass|
|staff|dean|教務主任|pass|
|staff|principal|校長|pass|
|staff|nurse|校護|pass|
|staff|shop_aunt|合作社阿姨|pass|
|staff|guard_uncle|警衛伯伯|pass|
|staff|science_teacher|理化老師|pass|
|chapter|parent_day|親師日|pass|
|chapter|anniversary|校慶|pass|
|chapter|choir_contest|合唱團比賽|pass|
|chapter|final_exam|期末考|pass|
|mission|q01|請交回考卷|pass|
|mission|q02|樂器請歸位|pass|
|mission|q03|維持環境整潔|pass|
|mission|q04|代理校長巡堂|pass|
|mission|q05|節奏感測驗|pass|
|mission|q06|校園保齡球|pass|
|mission|q07|老師沒有在逃跑|pass|
|mission|q08|辦公室借用程式|pass|
|mission|q09|請保持安靜|pass|
|mission|q10|上課鐘還沒響|pass|
|mission|q11|老師需要一杯咖啡|pass|
|mission|q12|失物招領|pass|
|mission|q13|體育器材盤點|pass|
|mission|q14|校長今天髮量驚人|pass|
|mission|q15|辦公室人體工學|pass|
|mission|q16|三角鐵獨奏會|pass|
|mission|q17|禁止奔跑示範|pass|
|mission|q18|這球算妳的|pass|
|mission|q19|整潔也是一種戰術|pass|
|mission|q20|請勿拍攝上課內容|pass|
|mission|q21|老師只是來購物|pass|
|mission|q22|公開觀課日|pass|
|mission|q23|校長的筆電去哪了|pass|
|mission|q24|一場非常正常的運動會|pass|
|mission|pd01|家長請這邊坐|pass|
|mission|pd02|老師的桌面管理|pass|
|mission|pd03|學生說了什麼？|pass|
|mission|pd04|合照前請整理儀容|pass|
|mission|an01|攤位佈置大師|pass|
|mission|an02|合作社救援|pass|
|mission|an03|校長致詞中|pass|
|mission|an04|校慶保齡球|pass|
|mission|cc01|譜架少了一個|pass|
|mission|cc02|團員請集合|pass|
|mission|cc03|不要帶陀螺上臺|pass|
|mission|cc04|指揮老師準備好了|pass|
|mission|fe01|考卷不是傳單|pass|
|mission|fe02|時間到了嗎？|pass|
|mission|fe03|走廊禁止喧嘩|pass|
|mission|fe04|監考老師去哪了|pass|

## 實際操作驗收

- pass: desktop keyboard screen-relative movement + pause clears input
- pass: q01 real UI task select, pick papers, drop at delivery
- pass: broom swing, ball throw and recover same id
- pass: wear original wig via action menu, retain yellow dress
- pass: push office chair has actual displacement
- pass: triangle instrument + coffee cup unique derived instance
- pass: parent day dialog choices have different effects, photo physical gathering
- pass: anniversary deliver three goods via E/R, original IDs
- pass: choir 32-beat visual timeline complete using actual conduct keys
- pass: final exam clock question actual selection completes
- pass: save export/import, invalid import preserves existing points
- pass: two tabs lease has one writer, explicit takeover
- pass: storage failure continues play and export remains available
- pass: stress parent and teacher caps, fixed seed, recovery report
- pass: 20 actual mode switches GPU geometry/textures return to baseline
- pass: 390×844 two finger pointer capture, cancel, no stuck input + rotation
- pass: q04 wear, three zones observed by actual simulation, original wig return
- pass: q06 bowling hit detection from actual thrown balls
- pass: q14 original wig on trophy, leave room, principal delayed discovery
- pass: q23 real NPC dialogue traces laptop owner chain, return same instance
- pass: q20 interrupted filmer sight three times with actual LOS wall
- pass: q09 natural decay uses live simulation, no reset reward
- pass: all 19 parent model factories render and global slots observed
- pass: WebGL context lost pauses and restores, no background combat catchup

人工從出生點逐項完整通關、實體手機GPU、Safari、音訊聽感均為not tested。詳見QA_REPORT.md及原始JSON，不能把這些當成pass。

## 校事會議新增規格

SCHOOL_MEETING_SPEC.md完整15種橋段全部接入；正式每場2／3種、兩組互斥、四名可擊打NPC、家長來源觸發、四散場原因、300秒冷卻、物品唯一移交、事件與紀錄冊、八稱號、活動文案及安全讀檔均已實作。對照表在MEETING_GUIDE.md，驗證層級與限制在MEETING_QA_REPORT.md；實際畫面在MEETING_SCREENSHOTS.md。手機實機與Safari不列為通過。

## v1.2增補覆蓋

第16橋段dog_observer、兩個免傷狗角色、理化老師、獨立關係／收益冷卻、唯一軟球及任務物品、六任務、一次夥伴／一次協助、共享20秒、六趣味收藏及100好感評語，均已接入既有存檔和操作。85項測試零失敗。兩狗12狀態×全部道具揮打及全部portable投擲驗證；理化老師實際5狀態×3方式、旁聽4委員×3方式，原六種委員16狀態規則矩陣仍通過。六校狗任務全部沿原桌椅／牆體導航完成；16橋段實際操作與清理通過。

介面七項：可讀名牌含HUD／其他名牌避讓；按鈕小字margin-top:0；手機收合172px；箭頭上下中心誤差0px；三圖鑑附真實模型PNG縮圖；顯示全面校安老師；歡迎頁v1.2與友善介紹。實際畫面与各驗收層級見DOGS_QA_REPORT.md。手機實機、Safari及音效人工聽感未驗證。
