// 產生新手說明書分享圖：沿用 og-image.png 左側的真實中庭畫面，右側改排說明書標題。
import {chromium} from '@playwright/test';
import {readFile} from 'node:fs/promises';

const bg=(await readFile(new URL('../public/og-image.png',import.meta.url))).toString('base64');
const html=`<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;position:relative;overflow:hidden;font-family:"PingFang TC","Noto Sans TC",sans-serif;background:url(data:image/png;base64,${bg}) left top/1200px 630px no-repeat}
.panel{position:absolute;left:770px;top:0;width:430px;height:630px;background:#f8f1dc;display:flex;flex-direction:column;justify-content:center;padding:0 46px}
.game{font-size:30px;font-weight:800;letter-spacing:.12em;color:#234c42}
.title{font-size:92px;line-height:1.08;font-weight:900;color:#234c42;margin:18px 0 6px}
.title em{font-style:normal;color:#b8901f}
hr{border:0;height:4px;background:#234c42;margin:26px 0 22px}
.sub{font-size:27px;font-weight:700;letter-spacing:.14em;color:#234c42}
</style></head><body><div class="panel"><div class="game">東山校園大騷動</div><div class="title">新手<br><em>操作</em><br>說明書</div><hr><div class="sub">第一次來就看這篇</div></div></body></html>`;

const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1200,height:630}});
await page.setContent(html);
await page.screenshot({path:new URL('../public/og-tutorial.png',import.meta.url).pathname});
await browser.close();
console.log('public/og-tutorial.png 1200×630');
