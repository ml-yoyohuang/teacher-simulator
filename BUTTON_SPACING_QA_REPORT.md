# 按鈕間距驗收（2026-10-09）

修正確認視窗、商店、答題與其他相鄰按鈕沒有群組間距的問題。鬆散相鄰按鈕使用可換行群組，水平與垂直間距均為12px，群組上下亦保留12px；保留原有按鈕與事件。既有選單、圖鑑分頁及歡迎頁同步使用12px間距，長標題可換行。遊戲操作鍵一般12px，手機頂部8px、側邊10px；投擲與指揮鍵分開，手機指揮鍵也避開「動作」。

實際 Chromium 桌面與觸控模擬通過105組版面檢查：1280×900、844×390、390×844、320×700各23種選單，以及空手／手持／手持合唱三種HUD狀態，另含320px試聽頁。檢查所有可見按鈕矩形之間至少8px距離（0.5px像素捨入容差），面板沒有橫向溢出。實際觸控「取消」及鍵盤Enter答題通過，沒有頁面例外。場景由既有開發入口準備；未點擊清除存檔等破壞性確認。

檢查程式：scripts/button-spacing-qa.ts；結果：artifacts/button-spacing-qa.json。

![手機確認視窗](artifacts/button-spacing-resetConfirm.png)
![手機商店](artifacts/button-spacing-shop.png)

實體手機、Safari及所有玩家自訂字體／縮放組合尚未驗證。

正式發布：功能提交9f2feff；GitHub Pages流程37918774237成功。公開站24組檢查通過，含三種尺寸的空手HUD、暫停／設定／存檔／行事曆／重開確認，以及實際觸控取消。公開JS/CSS的SHA-256與已測成品一致，沒有頁面例外。詳細手持／合唱及其他選單驗證仍以本地105組結果為準。見artifacts/button-spacing-production-qa.json及artifacts/button-spacing-production-mobile.png。
