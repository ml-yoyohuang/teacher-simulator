import {Game,Event} from './game';
export type MusicTheme='explore'|'chase'|'choir';
export const SOUND_EFFECTS=[
 {id:'move',label:'走路腳步',event:'move',frequency:120,instrument:''},
 {id:'swing',label:'揮打',event:'swing',frequency:240,instrument:''},
 {id:'CombatResolved',label:'攻擊命中',event:'CombatResolved',frequency:180,instrument:''},
 {id:'playerHit',label:'導師受擊',event:'playerHit',frequency:110,instrument:''},
 {id:'throw',label:'投擲',event:'throw',frequency:360,instrument:''},
 {id:'land',label:'落地',event:'land',frequency:150,instrument:''},
 {id:'take',label:'拿取',event:'take',frequency:580,instrument:''},
 {id:'drop',label:'放下',event:'drop',frequency:300,instrument:''},
 {id:'propDamaged',label:'道具損壞',event:'propDamaged',frequency:90,instrument:''},
 {id:'notice',label:'被注意／警戒上升',event:'notice',frequency:440,instrument:''},
 {id:'alertFall',label:'警戒下降',event:'alertFall',frequency:330,instrument:''},
 {id:'contactComplete',label:'家長通知完成',event:'contactComplete',frequency:680,instrument:''},
 {id:'familyArrived',label:'家長抵達',event:'familyArrived',frequency:220,instrument:''},
 {id:'NPCDowned',label:'人物倒地',event:'NPCDowned',frequency:160,instrument:''},
 {id:'recover',label:'導師恢復',event:'recover',frequency:520,instrument:''},
 {id:'npcRecovered',label:'人物起身',event:'npcRecovered',frequency:520,instrument:''},
 {id:'missionComplete',label:'任務完成（三音）',event:'missionComplete',frequency:784,instrument:''},
 {id:'rollCall',label:'點名',event:'rollCall',frequency:650,instrument:''},
 {id:'dodge',label:'閃避',event:'dodge',frequency:420,instrument:''},
 {id:'coffee',label:'咖啡沖泡',event:'coffee',frequency:260,instrument:''},
 {id:'purchase',label:'購買成功',event:'purchase',frequency:800,instrument:''},
 {id:'drink',label:'喝飲料',event:'drink',frequency:540,instrument:''},
 {id:'raceStart',label:'賽跑開始',event:'raceStart',frequency:900,instrument:''},
 {id:'reflect',label:'反彈',event:'reflect',frequency:1200,instrument:''},
 {id:'conduct',label:'指揮節拍',event:'conduct',frequency:660,instrument:''},
 {id:'instrument-piano',label:'鋼琴',event:'instrument',frequency:440,instrument:'piano'},
 {id:'instrument-recorder',label:'直笛',event:'instrument',frequency:587,instrument:'recorder'},
 {id:'instrument-triangle',label:'三角鐵',event:'instrument',frequency:1320,instrument:'triangle'},
 {id:'instrument-castanets',label:'響板',event:'instrument',frequency:320,instrument:'castanets'},
 {id:'instrument-drumstick',label:'鼓棒',event:'instrument',frequency:180,instrument:'drumstick'},
] as const;
export const MUSIC_TRACKS=[
 {id:'explore',label:'日常探索',theme:'explore',anniversary:false,bpm:90},
 {id:'chase',label:'追逐',theme:'chase',anniversary:false,bpm:120},
 {id:'anniversary-explore',label:'校慶探索（升調）',theme:'explore',anniversary:true,bpm:90},
 {id:'anniversary-chase',label:'校慶追逐（升調）',theme:'chase',anniversary:true,bpm:120},
 {id:'choir',label:'合唱曲段（32拍）',theme:'choir',anniversary:false,bpm:80},
] as const;
export class AudioEngine{
 ctx:AudioContext|null=null;master:GainNode|null=null;musicGain:GainNode|null=null;sfxGain:GainNode|null=null;voices=new Set<OscillatorNode>();musicVoices=new Set<OscillatorNode>();paused=true;timer:any;nextTime=0;beat=0;theme='';songOffset=0;fail='';lastSfx=new Map<string,number>();
 previewTheme:MusicTheme|null=null;previewAnniversary=false;previewStarted=0;
 constructor(public game:Game,public previewOnly=false){game.listeners.push(e=>this.event(e))}
 async unlock(){try{if(!this.ctx){this.ctx=new AudioContext();this.master=this.ctx.createGain();let compressor=this.ctx.createDynamicsCompressor();compressor.threshold.value=-16;compressor.ratio.value=8;this.master.gain.value=.3;this.master.connect(compressor);compressor.connect(this.ctx.destination);this.musicGain=this.ctx.createGain();this.sfxGain=this.ctx.createGain();this.musicGain.connect(this.master);this.sfxGain.connect(this.master);this.timer=setInterval(()=>this.schedule(),25)}await this.ctx.resume();this.configure();this.paused=false;this.nextTime=this.ctx.currentTime+.03;return true}catch(e){this.fail='音訊未啟用，靜音仍可遊玩';return false}}
 configure(){if(!this.ctx)return;let s=this.game.profile.settings;this.musicGain.gain.setTargetAtTime(s.mute?0:s.music,this.ctx.currentTime,.2);this.sfxGain.gain.setTargetAtTime(s.mute?0:s.sfx,this.ctx.currentTime,.05)}
 note(freq:number,time:number,length=.12,music=false,type:OscillatorType='sine',gain=.25){if(!this.ctx||this.paused)return;let pool=music?this.musicVoices:this.voices,limit=music?6:12;if(pool.size>=limit)return;let o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,time);g.gain.setValueAtTime(0,time);g.gain.linearRampToValueAtTime(gain,time+.012);g.gain.exponentialRampToValueAtTime(.001,time+length);o.connect(g);g.connect(music?this.musicGain:this.sfxGain);pool.add(o);o.start(time);o.stop(time+length+.02);o.onended=()=>{pool.delete(o);o.disconnect();g.disconnect()}}
 event(e:Event){if(!this.ctx||this.paused)return;let t=this.ctx.currentTime,key=e.type;let sound=SOUND_EFFECTS.find(s=>s.event===key&&(key!=='instrument'||s.instrument===e.data.item));let f=sound?.frequency;if(!f)return;let last=this.lastSfx.get(key)||-100;if(t-last<(key==='move'?.125:.08))return;this.lastSfx.set(key,t);this.note(f,t,key==='missionComplete'?.35:.12,false,['propDamaged','swing'].includes(key)?'triangle':'sine',key==='move'?.05:.3);if(key==='missionComplete'){this.note(f*1.25,t+.12,.3);this.note(f*1.5,t+.24,.35)}}
 previewMusic(theme:MusicTheme,anniversary=false){this.pause();this.previewTheme=theme;this.previewAnniversary=anniversary;this.theme='';this.beat=-1;this.previewStarted=this.ctx?.currentTime||0;this.paused=false;this.configure()}
 stopPreview(){this.pause();this.previewTheme=null}
 schedule(){if(!this.ctx||this.paused||(this.previewOnly&&!this.previewTheme))return;const theme=this.previewTheme||(this.game.choir?'choir':this.game.chase.some(n=>n.state==='Chase'||n.state==='Attack')?'chase':'explore');if(theme!==this.theme){this.theme=theme;this.musicGain.gain.setTargetAtTime(this.game.profile.settings.mute?0:this.game.profile.settings.music,this.ctx.currentTime,.8);this.nextTime=this.ctx.currentTime+.03;this.beat=0;if(theme==='choir')this.note(261.63,this.ctx.currentTime+.03,.35,true,'triangle',.17)}let bpm=theme==='choir'?80:theme==='chase'?120:90,step=60/bpm;
 if(theme==='choir'){let song=this.previewTheme?this.ctx.currentTime-this.previewStarted:this.game.time-this.game.choir.start;let index=Math.ceil(song/step);if(index!==this.beat&&index<32){let delay=index*step-song;if(delay<.11){this.beat=index;let sequence=[261.63,329.63,392,329.63,293.66,349.23,440,392];this.note(sequence[index%8],this.ctx.currentTime+delay,.35,true,'triangle',.17)}}return}
 while(this.nextTime<this.ctx.currentTime+.1){let sequence=[261.63,329.63,392,329.63,293.66,349.23,440,392,261.63,392,493.88,440,349.23,329.63,293.66,392];let f=sequence[this.beat%16]*((this.previewTheme?this.previewAnniversary:this.game.mode==='anniversary')?1.25:1);this.note(f,this.nextTime,.24,true,'triangle',.18);if(this.beat%2===0)this.note(f/2,this.nextTime,.3,true,'sine',.22);this.beat++;this.nextTime+=step;}}
 pause(){this.paused=true;for(let o of [...this.voices,...this.musicVoices]){try{o.stop()}catch{}}this.voices.clear();this.musicVoices.clear();this.songOffset=this.beat;}
 resume(){if(!this.ctx)return;this.paused=false;this.nextTime=this.ctx.currentTime+.03;this.beat=this.songOffset;this.configure()}
}
