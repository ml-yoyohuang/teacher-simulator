import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser=await chromium.launch({headless:false});
try{
const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});
const page=await context.newPage();const errors:string[]=[],requests:string[]=[],evidence:any[]=[];
page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(r.url().includes('/music/')&&r.url().endsWith('.mp3'))requests.push(r.url())});
await page.addInitScript(()=>{(window as any).__media=[];const original=AudioContext.prototype.createMediaElementSource;AudioContext.prototype.createMediaElementSource=function(el){(window as any).__media.push(el);return original.call(this,el)}});
await page.goto(process.env.QA_URL||'http://127.0.0.1:5173');await page.waitForTimeout(250);
assert.equal(requests.length,0,'No music download before first gesture');
await page.locator('[data-action=start]').tap();await page.locator('#skip').tap();
const snap=()=>page.evaluate(()=>(window as any).__dongshan.audio.music.snapshot());
async function track(id:string){await page.waitForFunction(id=>{const m=(window as any).__dongshan.audio.music;return m.active?.track.id===id&&!m.pending&&m.active.element.currentTime>.15},id);await page.waitForTimeout(1150);const s=await snap();assert.equal(s.playing,1);evidence.push(s);return s}
await track('explore-01');assert.ok(requests.every(r=>r.includes('explore-01')),'Other tracks stay lazy');
// Real Web Audio output samples, not an audible quality review.
await page.evaluate(()=>{const a=(window as any).__dongshan.audio;(window as any).__musicAnalyser=a.ctx.createAnalyser();a.master.connect((window as any).__musicAnalyser)});
await page.waitForTimeout(300);
const energy=await page.evaluate(()=>{const a=(window as any).__musicAnalyser;const data=new Float32Array(a.fftSize);a.getFloatTimeDomainData(data);return Math.sqrt(data.reduce((n,v)=>n+v*v,0)/data.length)});assert.ok(energy>1e-5,'Decoded stream reaches shared mixer');
for(const id of ['explore-02','explore-03','explore-04','explore-01']){await page.evaluate(()=>{const m=(window as any).__dongshan.audio.music;m.active.element.currentTime=m.active.element.duration-.5});await track(id)}
await page.waitForTimeout(600);await page.locator('#menu').tap();const paused=await snap();assert.equal(paused.playing,0);const offset=paused.positions['explore-01'];await page.waitForTimeout(500);assert.deepEqual((await snap()).positions,paused.positions);
await page.locator('[data-action=close]').first().tap();const resumed=await track('explore-01');assert.ok(resumed.decks.find(d=>!d.paused).time>offset&&resumed.decks.find(d=>!d.paused).time<offset+3);
await page.evaluate(()=>{const d=(window as any).__dongshan;d.game.profile.settings.mute=true;d.audio.configure()});await page.waitForTimeout(1500);
const muted=await page.evaluate(()=>{const d=(window as any).__dongshan,a=(window as any).__musicAnalyser,data=new Float32Array(a.fftSize);a.getFloatTimeDomainData(data);return {gain:d.audio.musicGain.gain.value,rms:Math.sqrt(data.reduce((n,v)=>n+v*v,0)/data.length),playing:d.audio.music.snapshot().playing}});assert.ok(muted.gain<.001);assert.ok(muted.rms<1e-5);assert.equal(muted.playing,1);
await page.evaluate(()=>{const d=(window as any).__dongshan;d.game.profile.settings.mute=false;d.game.profile.settings.music=.25;d.audio.configure()});await page.waitForTimeout(1500);assert.ok(Math.abs(await page.evaluate(()=>(window as any).__dongshan.audio.musicGain.gain.value)-.25)<.001);
async function chase(){await page.evaluate(()=>{const g=(window as any).__dongshan.game;g.player.x=0;g.player.z=10;g.player.inv=100;g.alert=90;g.lastTrouble=g.time;g.spawnParent('sports');const n=g.npcs.find(n=>n.role==='parent');Object.assign(n,{x:0,z:14,state:'Chase',lastSeen:{...g.player},timer:0,active:true})})}
await chase();await track('chase');
await page.evaluate(()=>{const g=(window as any).__dongshan.game;for(const n of g.chase){n.state='Idle';n.x=35;n.z=28}g.alert=0;g.lastTrouble=-100});await track('explore-01');
await page.evaluate(()=>(window as any).__dongshan.game.reset('anniversary'));await track('anniversary-explore');await chase();await track('anniversary-chase');
// Rapid scene changes while playing/loading retain exactly two stream sources.
for(let i=0;i<20;i++)await page.evaluate(i=>(window as any).__dongshan.game.reset(i%2?'normal':'anniversary'),i);
await track('explore-01');assert.equal(await page.evaluate(()=>(window as any).__media.length),2);
await page.evaluate(()=>(window as any).__dongshan.game.startChoir());await page.waitForTimeout(800);assert.equal((await snap()).playing,0);assert.equal(await page.evaluate(()=>(window as any).__dongshan.audio.theme),'choir');
await page.locator('#menu').tap();const choirTime=await page.evaluate(()=>(window as any).__dongshan.game.time);await page.waitForTimeout(400);assert.equal(await page.evaluate(()=>(window as any).__dongshan.game.time),choirTime);await page.locator('[data-action=close]').first().tap();
await page.evaluate(()=>(window as any).__dongshan.game.cancelMission());await track('explore-01');
// Use a real native minimized browser, with Playwright's focus emulation disabled.
const primary=(page as any)._connection.toImpl(page).delegate._mainFrameSession._client;await primary.send('Emulation.setFocusEmulationEnabled',{enabled:false});
const cdp=await context.newCDPSession(page);const {windowId}=await cdp.send('Browser.getWindowForTarget');await cdp.send('Browser.setWindowBounds',{windowId,bounds:{windowState:'minimized'}});
await page.waitForFunction(()=>document.hidden);await page.waitForTimeout(300);const hidden=await snap();assert.equal(hidden.playing,0);const hiddenTime=await page.evaluate(()=>(window as any).__dongshan.game.time);await page.waitForTimeout(300);assert.equal(await page.evaluate(()=>(window as any).__dongshan.game.time),hiddenTime);
await cdp.send('Browser.setWindowBounds',{windowId,bounds:{windowState:'normal'}});await cdp.send('Page.bringToFront');await primary.send('Emulation.setFocusEmulationEnabled',{enabled:true});await page.waitForTimeout(300);assert.equal((await snap()).playing,0);await page.locator('[data-action=close]').first().tap();await track('explore-01');
const frames=await page.evaluate(async()=>{let prev=performance.now();const samples:number[]=[];for(let i=0;i<180;i++)await new Promise<void>(r=>requestAnimationFrame(now=>{samples.push(now-prev);prev=now;r()}));samples.sort((a,b)=>a-b);return {samples:samples.length,p50:samples[90],p95:samples[171]}});
await page.screenshot({path:'artifacts/music-mobile-game.png'});
// A missing track uses the bounded synthesized fallback, not repeated downloads.
await context.route('**/music/anniversary-explore.mp3',route=>route.fulfill({status:404,body:'Missing audio QA probe'}));
// Remove cached src through a fresh context/page to ensure the failure is genuine.
const failure=await browser.newPage();await failure.route('**/music/explore-01.mp3',r=>r.fulfill({status:404,body:'Missing audio QA probe'}));await failure.goto(process.env.QA_URL||'http://127.0.0.1:5173');await failure.locator('[data-action=start]').click();await failure.locator('#skip').click();
await failure.waitForFunction(()=>(window as any).__dongshan.audio.music.failed.has('explore-01'));await failure.waitForFunction(()=>(window as any).__dongshan.audio.music.active?.track.id==='explore-02');await failure.route('**/music/anniversary-explore.mp3',r=>r.fulfill({status:404,body:'Missing variation QA probe'}));await failure.evaluate(()=>(window as any).__dongshan.game.reset('anniversary'));await failure.waitForFunction(()=>(window as any).__dongshan.audio.music.failed.has('anniversary-explore'));await failure.waitForFunction(()=>(window as any).__dongshan.audio.musicVoices.size>0);assert.equal(await failure.evaluate(()=>(window as any).__dongshan.audio.music.snapshot().playing),0);await failure.close();
assert.deepEqual(errors,[]);const result={date:'2026-10-09',status:'pass',browser:await browser.version(),environment:'macOS native Chromium, 390×844 touch emulation, DPR1; not physical phone',energy,muted,paused,resumed,hidden,frames,evidence,requests,streamSources:2,errors,checks:['no music network before gesture','all four originals rotate in order','shared mixer produces nonzero PCM','mute suppresses output but continues playlist','independent music gain','pause keeps offset and resume continues','actual Chase state selects chase mix','anniversary explore/chase mixes','20 mode changes keep 2 stream sources','choir takes priority; pause stops game beat clock','native background pauses; return waits for touch resume','404 daily track skips to next available original','404 variant uses synthesized fallback without overlapping streams'],limitations:['No human listening review, real iOS/Android/Safari or long thermal performance test.','Track ending is accelerated by seeking actual HTMLMediaElement to its tail; chase NPC state is prepared through the existing development interface.']};fs.writeFileSync('artifacts/music-browser-qa.json',JSON.stringify(result,null,2));console.log(JSON.stringify({status:'pass',checks:result.checks.length,frames,errors}));}finally{await browser.close()}
