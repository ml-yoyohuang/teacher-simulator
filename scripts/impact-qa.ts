import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const browser=await chromium.launch({headless:true});
const checks:string[]=[];
try{
 const page=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,deviceScaleFactor:1});
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.QA_URL||'http://127.0.0.1:5173');
 await page.locator('[data-action=start]').click();await page.locator('#skip').click();
 await page.evaluate(()=>{const d=(window as any).__dongshan,g=d.game;g.reset();g.finishTutorial();g.profile.life.nextMain=g.profile.life.nextSide=1e8;g.player.x=0;g.player.z=8;g.player.face={x:0,z:1};g.player.inv=999;g.profile.settings.lowMotion=false;for(const n of g.npcs){n.x=35;n.z=27}const n=g.npcs.find(n=>n.role==='student');Object.assign(n,{x:0,z:9,hp:100,state:'Idle',active:true,timer:30});(window as any).__impactTarget=n.id;(window as any).__impactCount=0;const original=d.audio.impact.bind(d.audio);d.audio.impact=(t:number)=>{(window as any).__impactCount++;original(t)};d.render.target.set(0,0,8)});
 await page.locator('#attack').click();await page.waitForSelector('.hit-label');
 const hit=await page.evaluate(()=>{const d=(window as any).__dongshan,g=d.game,n=g.npcs.find((n:any)=>n.id===(window as any).__impactTarget);return {hp:n.hp,damage:g.eventLog.findLast((e:any)=>e.type==='CombatResolved')?.data.damage,labels:document.querySelector('#hit-feedback')?.textContent,impacts:d.render.impacts.length,shakeUntil:d.render.shakeUntil,impactUntil:n.impactUntil,soundCount:(window as any).__impactCount,voiceCount:d.audio.voices.size}});
 assert.equal(hit.hp,90);assert.match(hit.labels,/命中 −10/);assert.equal(hit.impacts,1);assert.ok(hit.shakeUntil>0&&hit.impactUntil>0);assert.equal(hit.soundCount,1);checks.push('手機觸控揮打真正命中：傷害、浮字、光圈、鏡頭、合成命中音各觸發一次');
 await page.screenshot({path:'artifacts/impact-mobile.png'});
 await page.locator('.hit-label').waitFor({state:'detached'});assert.equal(await page.locator('.hit-label').count(),0);assert.equal(await page.evaluate(()=>(window as any).__dongshan.render.impacts.length),0);
 await page.evaluate(()=>{const d=(window as any).__dongshan;for(const n of d.game.npcs){n.x=35;n.z=27}d.game.player.attackCooldown=0});await page.locator('#attack').click();await page.waitForTimeout(220);
 assert.equal(await page.locator('.hit-label').count(),0);assert.equal(await page.evaluate(()=>(window as any).__dongshan.render.impacts.length),0);assert.equal(await page.evaluate(()=>(window as any).__impactCount),1);checks.push('空揮不產生命中回饋');
 await page.evaluate(()=>{const d=(window as any).__dongshan,g=d.game;g.profile.settings.lowMotion=true;g.player.attackCooldown=0;const n=g.npcs.find((n:any)=>n.id===(window as any).__impactTarget);Object.assign(n,{x:g.player.x,z:g.player.z+.8,hp:100,state:'Idle',active:true});g.player.face={x:0,z:1}});await page.locator('#attack').click();await page.waitForSelector('.hit-label');
 const reduced=await page.evaluate(()=>{const d=(window as any).__dongshan;return {shake:d.render.shakeOffset,labels:document.querySelector('#hit-feedback')?.textContent,soundCount:(window as any).__impactCount}});assert.equal(Math.abs(reduced.shake.x)+Math.abs(reduced.shake.z),0);assert.match(reduced.labels,/命中 −10/);assert.equal(reduced.soundCount,2);checks.push('減少動畫關閉鏡頭震動，但保留傷害文字和音效');
 await page.evaluate(()=>{const d=(window as any).__dongshan;d.game.reset();d.ui.update(.2)});await page.waitForTimeout(120);assert.equal(await page.evaluate(()=>(window as any).__dongshan.render.impacts.length),0);assert.equal(await page.locator('.hit-label').count(),0);checks.push('場景重置清除暫存效果');
 assert.deepEqual(errors,[]);fs.writeFileSync('artifacts/impact-qa.json',JSON.stringify({date:'2026-10-23',status:'pass',browser:await browser.version(),checks,hit,reduced,errors,limitations:['Chromium 的手機觸控模擬；未在實體手機與 Safari 量測。','音效確認經遊戲 Web Audio 引擎排程，主觀聽感仍需人工試聽。']},null,2));console.log(JSON.stringify({status:'pass',checks,hit,errors}));
}finally{await browser.close()}
