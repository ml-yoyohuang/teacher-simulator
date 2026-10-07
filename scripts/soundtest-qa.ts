import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SOUND_EFFECTS,MUSIC_TRACKS} from '../src/audio';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1280,height:900}});
const page=await context.newPage();const errors:string[]=[];
page.on('pageerror',e=>errors.push(e.message));
await page.addInitScript(()=>{
 (window as any).__notes=[];
 const original=AudioContext.prototype.createOscillator;
 AudioContext.prototype.createOscillator=function(){
  const o=original.call(this);const start=o.start.bind(o);const ctx=this;
  let frequency=440;const set=o.frequency.setValueAtTime.bind(o.frequency);
  o.frequency.setValueAtTime=function(value,time){frequency=value;return set(value,time)};
  o.start=function(time=0){(window as any).__notes.push({frequency,type:o.type,time,contextState:ctx.state});start(time)};
  return o;
 };
});
await page.goto('http://127.0.0.1:4173/soundtest.html');
assert.equal(await page.locator('[data-sfx]').count(),SOUND_EFFECTS.length);
assert.equal(await page.locator('[data-music]').count(),MUSIC_TRACKS.length);
const sounds=[];
for(const sound of SOUND_EFFECTS){
 const before=await page.evaluate(()=>(window as any).__notes.length);
 await page.locator(`[data-sfx="${sound.id}"]`).click();
 await page.waitForFunction(n=>(window as any).__notes.length>n,before);
 const notes=await page.evaluate(n=>(window as any).__notes.slice(n),before);
 assert.equal(notes.length,sound.event==='missionComplete'?3:1,sound.id);
 assert.ok(Math.abs(notes[0].frequency-sound.frequency)<.02,sound.id);
 assert.ok(notes.every(n=>n.contextState==='running'),sound.id);
 sounds.push({id:sound.id,notes,status:'pass'});
}
const music=[];
for(const track of MUSIC_TRACKS){
 const before=await page.evaluate(()=>(window as any).__notes.length);
 await page.locator(`[data-music="${track.id}"]`).click();
 await page.waitForTimeout(track.theme==='choir'?24200:900);
 const notes=await page.evaluate(n=>(window as any).__notes.slice(n),before);
 assert.ok(Math.abs(notes[0].frequency-261.63*(track.anniversary?1.25:1))<.02,track.id);
 if(track.theme==='choir'){assert.equal(notes.length,32);assert.match(await page.locator('#status').innerText(),/播放完畢/)}
 else{assert.ok(notes.length>=3);const melody=notes.filter(n=>n.type==='triangle');assert.ok(Math.abs(melody[1].time-melody[0].time-60/track.bpm)<.01)}
 await page.locator('#stop').click();const count=await page.evaluate(()=>(window as any).__notes.length);
 await page.waitForTimeout(200);assert.equal(await page.evaluate(()=>(window as any).__notes.length),count);
 music.push({id:track.id,notes:notes.length,status:'pass'});
}
assert.equal(await page.evaluate(()=>localStorage.length),0);
await page.locator('#music-volume').fill('25');await page.locator('#sfx-volume').fill('35');
await page.setViewportSize({width:390,height:844});
assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
await page.locator('[data-sfx="instrument-drumstick"]').scrollIntoViewIfNeeded();
await page.screenshot({path:'artifacts/soundtest-mobile.png',fullPage:true});
await page.goto('http://127.0.0.1:4173/');
assert.equal(await page.locator('meta[property="og:image:width"]').getAttribute('content'),'1200');
assert.equal(await page.locator('meta[property="og:image:height"]').getAttribute('content'),'630');
const image=await page.locator('meta[property="og:image"]').getAttribute('content');
const dimensions=await page.evaluate(async src=>{const image=new Image();image.src=src!;await image.decode();return [image.naturalWidth,image.naturalHeight]},image);
assert.deepEqual(dimensions,[1200,630]);
await page.locator('[data-action=start]').click();await page.locator('#skip').click();
assert.match(await page.locator('.hp-line').innerText(),/開心導師/);
assert.equal(errors.length,0);
fs.writeFileSync('artifacts/soundtest-qa.json',JSON.stringify({date:'2026-10-08',status:'pass',sounds,music,dimensions,noSaveWrites:true,mobileLayout:true,errors,note:'驗證實際 Web Audio 節點與排程；人工聽感仍待使用者試聽。'},null,2));
console.log(`PASS: ${SOUND_EFFECTS.length} sound effects, ${MUSIC_TRACKS.length} music tracks including 32 choir notes, stop, no save writes, mobile layout, renamed HUD and 1200×630 OG image.`);
await browser.close();
