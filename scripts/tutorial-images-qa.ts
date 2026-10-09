import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
const site=process.env.QA_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:800}}),errors:string[]=[],checks:any[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(new URL('tutorial.html',site).href);
 for(const size of [{width:1280,height:800},{width:390,height:844},{width:320,height:700}]){await page.setViewportSize(size);const images=await page.locator('figure img').all();assert.equal(images.length,3);for(const [k,img]of images.entries()){const name=['hud-mobile','meeting','dog-card'][k];await img.scrollIntoViewIfNeeded();await img.evaluate(img=>(img as HTMLImageElement).decode());const info=await img.evaluate(img=>{const i=img as HTMLImageElement,r=i.getBoundingClientRect();return{url:i.currentSrc,width:i.naturalWidth,height:i.naturalHeight,displayWidth:r.width}});assert.equal(info.width,k===0?390:1280);assert.equal(info.height,k===0?844:800);assert.ok(info.displayWidth<=size.width);const response=await page.request.get(info.url);assert.equal(response.status(),200);const hash=createHash('sha256').update(await response.body()).digest('hex');assert.equal(hash,createHash('sha256').update(fs.readFileSync(`tutorial-assets/${name}.png`)).digest('hex'));checks.push({size,name,...info,sha256:hash})}assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))}
 assert.deepEqual(errors,[]);fs.writeFileSync(process.env.QA_OUT||'artifacts/tutorial-images-qa.json',JSON.stringify({date:'2026-10-09',status:'pass',site,browser:await browser.version(),checks,errors,limitations:['Chromium only; no physical phone or Safari.']},null,2));console.log(JSON.stringify({status:'pass',site,checks:checks.length}));
}finally{await browser.close()}
