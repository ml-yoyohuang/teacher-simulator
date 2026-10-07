import {AudioEngine, MUSIC_TRACKS, SOUND_EFFECTS} from './audio';
import {Game} from './game';
import './soundtest.css';

const game=new Game();
const audio=new AudioEngine(game,true);
const status=document.querySelector<HTMLElement>('#status')!;
let stopTimer:ReturnType<typeof setTimeout>|undefined;
let selection=0;
function stop(){selection++;clearTimeout(stopTimer);audio.stopPreview();document.querySelectorAll('[aria-pressed=true]').forEach(b=>b.setAttribute('aria-pressed','false'));status.textContent='已停止播放'}
document.querySelector('#music-count')!.textContent=`${MUSIC_TRACKS.length} 段`;
document.querySelector('#sfx-count')!.textContent=`${SOUND_EFFECTS.length} 種（含 5 種樂器）`;
document.querySelector('#music-list')!.innerHTML=MUSIC_TRACKS.map(t=>`<button class="sound" data-music="${t.id}" aria-pressed="false"><span>▶ ${t.label}</span><small>${t.bpm} BPM · ${t.theme==='choir'?'24 秒':'循環播放'}</small></button>`).join('');
document.querySelector('#sfx-list')!.innerHTML=SOUND_EFFECTS.map(s=>`<button class="sound" data-sfx="${s.id}" aria-pressed="false"><span>▶ ${s.label}</span><small>${s.instrument?'樂器':'事件音效'} · ${s.id}</small></button>`).join('');
document.querySelector('#stop')!.addEventListener('click',stop);
for(const kind of ['music','sfx'] as const){
 document.querySelector<HTMLInputElement>(`#${kind}-volume`)!.addEventListener('input',e=>{game.profile.settings[kind]=Number((e.target as HTMLInputElement).value)/100;audio.configure()});
 game.profile.settings[kind]=Number(document.querySelector<HTMLInputElement>(`#${kind}-volume`)!.value)/100;
}
document.querySelectorAll<HTMLButtonElement>('.sound').forEach(button=>button.addEventListener('click',async()=>{
 stop();const token=selection;
 if(!await audio.unlock()){status.textContent=audio.fail;return}
 if(token!==selection)return;
 button.setAttribute('aria-pressed','true');
 if(button.dataset.music){
  const track=MUSIC_TRACKS.find(t=>t.id===button.dataset.music)!;
  audio.previewMusic(track.theme,track.anniversary);status.textContent=`正在播放：${track.label}`;
  if(track.theme==='choir')stopTimer=setTimeout(()=>{stop();status.textContent='合唱曲段播放完畢'},24050);
 }else{
  const sound=SOUND_EFFECTS.find(s=>s.id===button.dataset.sfx)!;
  audio.lastSfx.clear();audio.event({type:sound.event,data:{item:sound.instrument}} as Parameters<AudioEngine['event']>[0]);status.textContent=`正在試聽：${sound.label}`;
  stopTimer=setTimeout(()=>{button.setAttribute('aria-pressed','false');status.textContent=`試聽完畢：${sound.label}`},sound.event==='missionComplete'?650:200);
 }
}));
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
window.addEventListener('pagehide',()=>{stop();clearInterval(audio.timer);void audio.ctx?.close()});
