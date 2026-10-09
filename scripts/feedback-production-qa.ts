import {chromium} from '@playwright/test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const site=process.env.SITE_URL||'https://ml-yoyohuang.github.io/teacher-simulator/';
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},hasTouch:true});const errors:string[]=[],layouts:any[]=[],assets:any[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript('window.__name=v=>v');await page.goto(site);const html=await page.content();
 for(const name of ['game-DHBYBDRF.js','game-B3rnr5-K.css']){assert.ok(html.includes(name),'Current release is live');const response=await page.request.get(new URL('assets/'+name,site).href);assert.equal(response.status(),200);const data=await response.body();assert.equal(createHash('sha256').update(data).digest('hex'),createHash('sha256').update(fs.readFileSync('dist/assets/'+name)).digest('hex'));assets.push(name)}
 assert.equal(await page.evaluate(()=>typeof(window as any).__dongshan),'undefined');await page.locator('[data-action=start]').tap();await page.locator('#skip').tap();
 assert.equal(await page.locator('.status-card').getAttribute('data-health'),'normal');assert.equal(await page.locator('#health-vignette').isVisible(),false);assert.equal(await page.locator('#hit-feedback').count(),1);
 for(const size of [{width:390,height:844},{width:844,height:390},{width:1440,height:900}]){
  await page.setViewportSize(size);await page.waitForTimeout(300);
  for(let k=0;k<2;k++){await page.locator('#quest-toggle').tap();await page.waitForTimeout(150);const r=await page.evaluate(()=>{const rect=(s:string)=>{const r=document.querySelector(s)!.getBoundingClientRect();return {y:r.y,bottom:r.bottom}};return {panel:rect('.top-left'),quest:rect('.quest'),nav:rect('.side-nav'),collapsed:document.querySelector('.quest')!.classList.contains('is-collapsed')}});assert.ok(r.nav.y>=r.panel.bottom+9);if(size.width<=900&&size.height>500){assert.ok(r.quest.y>=r.panel.bottom+9);assert.ok(r.nav.y>=r.quest.bottom+9)}layouts.push({size,...r})}
 }
 await page.setViewportSize({width:390,height:844});await page.keyboard.down('w');await page.waitForTimeout(250);await page.keyboard.up('w');await page.locator('#attack').tap();await page.waitForTimeout(200);await page.locator('#menu').tap();assert.equal(await page.locator('[data-action=close]').count()>0,true);await page.locator('[data-action=close]').first().tap();await page.waitForTimeout(250);await page.screenshot({path:'artifacts/feedback-production-mobile.png'});assert.deepEqual(errors,[]);
 fs.writeFileSync('artifacts/feedback-production-qa.json',JSON.stringify({date:'2026-10-09',site,codeCommit:'09ae8e9',status:'pass',browser:await browser.version(),assets,layouts,errors,checks:['public JS/CSS match tested deployment hashes','real touch expand/collapse reflows layout','real movement/attack/pause/resume inputs without errors','production debug interface excluded'],limitations:['Public smoke test does not reproduce combat/critical HP scenarios; detailed feature checks are in feedback-browser-qa.json.','Physical phone and Safari not tested.']},null,2));console.log(JSON.stringify({status:'pass',assets,layouts:layouts.length,errors}));
}finally{await browser.close()}
