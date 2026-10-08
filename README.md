# 東山校園大騷動

原創 low-poly 3D、固定斜俯視、單人離線進度的虛構校園沙盒。主角是棕色鮑伯頭、黃色有領小腿長洋裝的成年「開心導師」。無後端、帳號、廣告或 CDN。音樂與音效均為程式合成，並非真人演奏／合唱。

## 直接遊玩部署成品

在這個目錄啟動：

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

在瀏覽器開啟 `http://127.0.0.1:4173`。需要 WebGL 2；不要直接以 file:// 開啟 HTML。`dist/` 可整個放到任意静態主機與子路徑（base='./'），不需要 Node 伺服器執行遊戲。已發布至 [GitHub Pages 正式遊戲](https://ml-yoyohuang.github.io/teacher-simulator/)，也可使用本地預覽。

亦可執行 `node scripts/serve.mjs` 啟動相同靜態成品。macOS 可雙擊 `start-local.command`（第一次可能需由終端機執行）。

完整試聽頁為 `soundtest.html`（本地預覽：http://127.0.0.1:4173/soundtest.html），可逐一播放 32 種事件／樂器音效與 5 段背景音樂。共用遊戲音訊引擎，含音量調整、停止播放；不讀寫遊戲存檔。遊戲設定頁也提供入口。

分享圖位於 `public/og-image.png`，build 後複製到 `dist/og-image.png`，尺寸 1200×630。以真實中庭截圖經 imagegen 內建工具移除 HUD、重排標題製作，生成提示與來源記錄於 `artifacts/og-image-generation.json`。本地預覽使用相對圖片路徑；正式發布時請用 `SITE_URL=https://你的網域/遊戲子路徑/ pnpm build`，自動將 OG／Twitter 圖片網址改為完整網址供分享爬蟲讀取。

## 校園無線麥克風

一般校園在音樂教室器材架旁；活動日在中庭舞臺右側器材位置。靠近按E／互動拿取，沿用J揮打（6）、Q投擲（8）、R放下／「動作」放下與歸還，只有一個手持位置。

拿著時「動作」→「擴音點名」，或按F：10m可聽見的平靜學生先轉頭再集合，與一般6m點名共用12秒冷卻。反擊、暈眩、逃跑或重要工作不被控制，麥克風不召集家長／訪客。

Q／投擲第一次落地播放3秒廣播，附近空閒人物、已失去老師視線的搜索者可沿合法路徑調查。聲響10m且牆壁阻擋；目擊該次投擲、仍看見老師的追逐者、護子或重要工作會忽略。同人物同支麥克風30秒調查冷卻，不洗警戒、不直接完成甩開。拿回、移除或重置即停止；普通放下不觸發，落地仍可回收使用。靜音效果相同，不使用真正麥克風／錄音權限。

暫停選單「道具說明」可查看目前27件基礎道具；試聽頁有麥克風的合成起音與提示音。真實操作演示見`artifacts/microphone-demo.webm`，驗證詳見QA_REPORT。

## 手機鏡頭與擊倒圖鑑

手機直式、橫式的固定斜俯視鏡頭預設拉近，人物投影尺寸為原本的 2.2 倍。窄螢幕（寬度≤600px）或短邊≤600px的觸控裝置使用此設定；一般桌面維持原視野，旋轉裝置會重新計算。

暫停選單 →「擊倒圖鑑」分為學生、家長、物品，保存實際造成的暈眩／破損種類與次數。學生與家長有未解鎖條目，物品只顯示已記錄種類。人物恢復、家具扶好或切換活動不會清除圖鑑。沿用既有本地存檔與匯出／匯入；舊存檔沒有各種類歷史，從本次更新起記錄，不推測過往紀錄。

點 TODAY AT DONGSHAN 標題或內容可收合／展開；鍵盤也可在標題按 Enter／空白鍵。教學步驟、任務／計數更新或重開場景時會自動展開，移動換區及時間流逝不會打開已收合提示。收合後的手機待辦按鈕會跟著上移。

## 原始碼開發

GitHub Pages 使用 `.github/workflows/pages.yml`：推送到 `main` 或手動執行 Actions，會安裝鎖定依賴、跑核心測試、建置並發布 `dist`。儲存庫 Settings → Pages → Source 設為 **GitHub Actions**，不用選資料夾。正式分享圖網址取自 Pages 設定，支援專案子路徑與自訂網域。部署成品只包含遊戲、試聽頁與素材，不發布測試紀錄或原始碼。

workflow 的 Actions 頁面會顯示發布結果；只有 build 成功且成品檢查通過才部署。遠端 `main` 必須包含工作流程；單純在本機 commit 不會觸發發布。

Node.js 22.12+（本次實測24.19.0）、pnpm 11。確切依賴版本在 package.json 與 pnpm-lock.yaml。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build
pnpm preview
```

npm 對應命令也可用：`npm install`、`npm run dev`、`npm test`、`npm run build`。交付的正式 lockfile 為 pnpm-lock.yaml，驗證使用 pnpm 工具鏈。

自動驗收：

```sh
pnpm exec playwright install chromium
# 先開啟開發伺服器；預設腳本測試 5174，可用 QA_URL 指定
QA_URL=http://127.0.0.1:5173 pnpm qa
QA_URL=http://127.0.0.1:5173 pnpm exec tsx scripts/stress.ts
pnpm coverage
```

開發伺服器禁用熱重載，以免重載中斷長時間驗收；修改後手動刷新。生產成品沒有開發驗證面板與 window.__dongshan。

## 遊玩

首次由辦公室出發，可跳過／重看教學。所有任務與四活動立即可選，無章節解鎖。任務一次追蹤一項；取消與重試免費。首次普通任務30點、長任務60點、活動40點、章完成80點，重玩不再給點。

手機：左下搖桿推深快跑，右下揮打、閃避、互動；長按互動／按「動作」選取使用、放下、戴上、歸還；拿物後才顯示投擲鍵。合唱時顯示指揮鍵。橫豎屏皆可，不強制旋屏。

桌機：WASD／方向鍵移動、Shift快跑、J／滑鼠左鍵揮打、K／Space閃避、E互動、Q投擲、R放下、F點名、Enter指揮、Esc暫停。滑鼠面向使用地面射線。

黃色圈是交付／定位點。原物件歸還需回到其原位置。考卷是一包三份，投撒後需拾回三張才再成包。一次手持一件，假髮與眼鏡各有獨立頭部位。大型鋼琴、咖啡機不能拿起；辦公椅只能推。

家長必須由有效通知或技巧任務準備安排，六秒預告後從校門沿路進場。最多三具家長、兩位積極追逐教職員。失去視線後搜尋，工具間／講臺後可以藏身；被看見躲入仍會被查。警戒未解除時進保健室不能洗掉追逐。平靜時校護免費恢復；倒地救援重置當次事件並提供真實統計。

遇任務物件卡住：待辦 → 重置任務物件（保留既有 instanceId）。長期紀錄自動存於 localStorage，可匯出／匯入JSON；重開從平靜校園100HP開始，不存瞬時戰鬥。一個分頁寫入，多分頁可明確接管。

## 文件與證據

- SPEC_COVERAGE.md：內容數量、項目與驗證層級。
- QA_REPORT.md：實際操作、純規則測試及未驗證範圍。
- PERFORMANCE_REPORT.md：實際 rAF 測量、持續運行、資源回收。
- ASSET_GUIDE.md：原創幾何／掛點與替換方式。
- BALANCE.md：單一平衡設定、各道具與家長差異。
- DECISIONS.md、KNOWN_ISSUES.md、PROGRESS.md：決策、限制與製作紀錄。
- artifacts/：真實遊戲截圖、JSON測量與測試結果。
- dongshan_campus_spec/：原始規格，沒有以畫面取代驗收。

`QA_REPORT.md` 區分「真實輸入」「合法情境準備」「事件／規則鏈」。40項規則測試不代表40項都由人工從出生点完整通關。真機手機效能、Safari與音訊聽感未宣稱通過。

## 架構

`data.ts` 為全部內容與平衡資料；`game.ts` 是30Hz模擬、身份交易、事件、AI、任務與重置；`world.ts` 是牆、碰撞與格網導航；`render.ts` 是原創3D幾何、固定鏡頭、共用InstancedMesh與動畫；`input.ts` 是雙指／鍵鼠；`audio.ts` 是合成聲部與25ms音樂排程；`save.ts` 是驗證、ledger與分頁租約；`ui.ts` 是HUD、可鍵盤操作的選單與功能入口。

可重現 seed：6477。開發暫停頁 → 驗證面板可查看型別、傳送、生成家長、警戒、效能與事件追蹤；不能直接標任務完成。

## 來源

場景、角色、道具、音符序列、UI為本地原創程式生成。img1.jpeg/img2.jpeg僅作美術方向參考，不在遊戲載入、不複製圖中角色。第三方依賴保留在 LICENSES/，程式未另行宣告整包開放授權。

製作核對：[Three.js官方文件](https://threejs.org/docs/)、[Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)、[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)。

## 校園場景改版

十區新增實際功能家具、收納區與通行路線：六組教室桌椅、音樂排練席、四個導師工作位、校長展示區、花圃环路、體育器材架、警衛亭、合作社窗口與兩張病床。課本／樂器／筆電等改放桌面或架子，拿放投擲、歸位與任務一併同步。活動切換保留手持／佩戴身份，四活動附加物不累積。

佈局與擴充方法見 SCENE_GUIDE.md，十區及活動實際遊戲截圖見 SCENE_SCREENSHOTS.md；測試與效能比較見 QA_REPORT.md、PERFORMANCE_REPORT.md。

## 校事會議大混亂

家長來源造成倒地後進入四人會議室。所有人物（含阿姨、警衛、代理主持與暈眩角色）可被徒手、手持揮打與投擲命中，具白閃、擊退、跌坐及恢復。完整 15 種橋段每場抽 2／3 種；F／會議情境鍵特殊互動，J 繼續揮打，HUD／门口可隨時離席。

散場後回原校園，保留物品身份、穿戴、任務與校園場景；300 秒可操作校園時間冷卻。會議中重載採安全散場，保留永久進度與原物品。暫停選單可開「會議紀錄冊」，八個稱號純收藏。

完整橋段、架構、存檔與擴充方法見 [MEETING_GUIDE.md](MEETING_GUIDE.md)，驗收與限制見 [MEETING_QA_REPORT.md](MEETING_QA_REPORT.md)，實際畫面見 [MEETING_SCREENSHOTS.md](MEETING_SCREENSHOTS.md)。最終 66 項測試與建置通過；瀏覽器 288 組受擊與 15 種橋段操作通過。手機實機／Safari／音訊聽感尚未實機驗證。