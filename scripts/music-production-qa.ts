import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {MUSIC_TRACKS,SOUND_EFFECTS} from '../src/audio';
const site=process.env.SITE_URL||'https://ml-yoyohuang.github.io/teacher-simulator/';
const manifest=JSON.parse(fs.readFileSync('public/music/manifest.json','utf8'));
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const errors:string[]=[],files:any[]=[],played:any[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{(window as any).__media=[];const original=AudioContext.prototype.createMediaElementSource;AudioContext.prototype.createMediaElementSource=function(el){(window as any).__media.push(el);return original.call(this,el)}});
 await page.goto(new URL('soundtest.html',site).href);
 assert.equal(await page.locator('[data-music]').count(),MUSIC_TRACKS.length);
 assert.equal(await page.locator('[data-sfx]').count(),SOUND_EFFECTS.length);
 for(const track of MUSIC_TRACKS.filter(t=>t.file)){
  const response=await page.request.get(new URL('music/'+track.file,site).href);assert.equal(response.status(),200);
  const data=await response.body(),record=manifest.outputs.find(t=>t.id===track.id);assert.equal(createHash('sha256').update(data).digest('hex'),record.sha256);files.push({id:track.id,bytes:data.length,sha256:record.sha256});
  await page.locator(`[data-music="${track.id}"]`).tap();await page.waitForFunction(file=>(window as any).__media.some((el:HTMLAudioElement)=>el.src.endsWith(file)&&!el.paused&&el.currentTime>.3),track.file);
  played.push(await page.evaluate(file=>{const el=(window as any).__media.find((el:HTMLAudioElement)=>el.src.endsWith(file)&&!el.paused);return {file,duration:el.duration,time:el.currentTime,readyState:el.readyState}},track.file));
  await page.locator('#stop').tap();assert.equal(await page.evaluate(()=>(window as any).__media.every((el:HTMLAudioElement)=>el.paused)),true);
 }
 assert.equal(await page.evaluate(()=>localStorage.length),0);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.locator('[data-music=anniversary-chase]').scrollIntoViewIfNeeded();await page.screenshot({path:'artifacts/music-production-soundtest.png'});
 await page.goto(site);assert.equal(await page.evaluate(()=>typeof(window as any).__dongshan),'undefined');await page.locator('[data-action=start]').tap();await page.locator('#skip').tap();
 await page.waitForFunction(()=>(window as any).__media.some((el:HTMLAudioElement)=>el.src.endsWith('explore-01.mp3')&&!el.paused&&el.currentTime>.2));
 await page.locator('#menu').tap();assert.equal(await page.evaluate(()=>(window as any).__media.every((el:HTMLAudioElement)=>el.paused)),true);await page.locator('[data-action=close]').first().tap();await page.waitForFunction(()=>(window as any).__media.some((el:HTMLAudioElement)=>!el.paused&&el.currentTime>.2));
 assert.deepEqual(errors,[]);fs.writeFileSync('artifacts/music-production-qa.json',JSON.stringify({date:'2026-10-09',status:'pass',site,browser:await browser.version(),deployment:'37909485781',codeCommit:'e643dac',files,played,noSaveWrites:true,mobileLayout:true,gameStartsAndResumes:true,errors,limitations:['Public-site Chromium touch emulation, not physical mobile/Safari or human listening.']},null,2));console.log(JSON.stringify({status:'pass',site,files:files.length,played:played.length,errors}));
}finally{await browser.close()}
