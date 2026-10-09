/** Local, streamed music. Only two media elements exist, sharing the game mixer. */
export type MusicTheme='explore'|'chase'|'choir';
export type MusicTrack={id:string,label:string,theme:MusicTheme,anniversary:boolean,bpm:number,file?:string};
export const MUSIC_TRACKS:readonly MusicTrack[]=[
 {id:'explore-01',label:'日常探索・快板校歌 1',theme:'explore',anniversary:false,bpm:130.25,file:'explore-01.mp3'},
 {id:'explore-02',label:'日常探索・快板校歌 2',theme:'explore',anniversary:false,bpm:130.25,file:'explore-02.mp3'},
 {id:'explore-03',label:'日常探索・快板校歌 3',theme:'explore',anniversary:false,bpm:131,file:'explore-03.mp3'},
 {id:'explore-04',label:'日常探索・快板校歌 4',theme:'explore',anniversary:false,bpm:132.5,file:'explore-04.mp3'},
 {id:'chase',label:'追逐・急促快板變奏',theme:'chase',anniversary:false,bpm:150,file:'chase.mp3'},
 {id:'anniversary-explore',label:'校慶日常・歡慶變奏',theme:'explore',anniversary:true,bpm:140,file:'anniversary-explore.mp3'},
 {id:'anniversary-chase',label:'校慶追逐・歡慶急行變奏',theme:'chase',anniversary:true,bpm:160,file:'anniversary-chase.mp3'},
 {id:'choir',label:'合唱曲段（32拍）',theme:'choir',anniversary:false,bpm:80},
];
const daily=MUSIC_TRACKS.filter(t=>t.theme==='explore'&&!t.anniversary);
type Deck={element:HTMLAudioElement,source:MediaElementAudioSourceNode,gain:GainNode,track:MusicTrack|null,offset:number};
export class StreamMusic{
 decks:Deck[];active:Deck|null=null;pending:Deck|null=null;retiring:Deck|null=null;fadeEnd=0;
 paused=true;generation=0;index=0;positions=new Map<string,number>();failed=new Set<string>();error='';
 loadTimer:ReturnType<typeof setTimeout>|undefined;
 constructor(private ctx:AudioContext,destination:GainNode){
  this.decks=[0,1].map(()=>{const element=new Audio();element.preload='none';const source=ctx.createMediaElementSource(element),gain=ctx.createGain();gain.gain.value=0;source.connect(gain);gain.connect(destination);return {element,source,gain,track:null,offset:0}});
 }
 desired(theme:MusicTheme,anniversary:boolean,previewId=''):MusicTrack|undefined{
  if(previewId)return MUSIC_TRACKS.find(t=>t.id===previewId);
  if(theme==='choir')return undefined;
  if(theme==='explore'&&!anniversary){for(let k=0;k<daily.length;k++){const t=daily[this.index%daily.length];if(!this.failed.has(t.id))return t;this.index=(this.index+1)%daily.length}return daily[this.index]}
  return MUSIC_TRACKS.find(t=>t.theme===theme&&t.anniversary===anniversary);
 }
 tick(theme:MusicTheme,anniversary:boolean,previewId=''){
  if(this.paused)return false;
  if(this.retiring&&this.ctx.currentTime>=this.fadeEnd){this.stopDeck(this.retiring);this.retiring=null}
  let track=this.desired(theme,anniversary,previewId);
  if(!track?.file){if(this.active||this.pending)this.stop();this.paused=false;return true}
  // Advance only the ordinary exploration playlist. Variants and previews loop.
  if(this.active?.track?.id===track.id&&!this.pending&&Number.isFinite(this.active.element.duration)&&(this.active.element.ended||this.active.element.currentTime>=this.active.element.duration-.9)){
   this.positions.set(track.id,0);
   if(!previewId&&theme==='explore'&&!anniversary){this.index=(this.index+1)%daily.length;track=this.desired(theme,anniversary)!}
   this.switchTrack(track,true);
  }else if(this.active?.track?.id!==track.id&&this.pending?.track?.id!==track.id)this.switchTrack(track);
  return !this.failed.has(track.id);
 }
 private remember(deck:Deck){if(deck.track&&!deck.element.ended)this.positions.set(deck.track.id,deck.element.currentTime)}
 private stopDeck(deck:Deck){deck.element.pause();deck.gain.gain.cancelScheduledValues(this.ctx.currentTime);deck.gain.gain.value=0}
 private switchTrack(track:MusicTrack,loop=false){
  if(!track.file||this.failed.has(track.id))return;
  const token=++this.generation;clearTimeout(this.loadTimer);
  if(this.pending){this.stopDeck(this.pending);this.pending=null}
  if(this.retiring){this.stopDeck(this.retiring);this.retiring=null}
  const deck=this.decks.find(d=>d!==this.active)!;this.stopDeck(deck);this.pending=deck;
  deck.track=track;deck.offset=loop?0:(this.positions.get(track.id)||0);
  const seek=()=>{if(deck.track?.id!==track.id)return;const duration=deck.element.duration;try{deck.element.currentTime=Number.isFinite(duration)&&deck.offset<duration-.9?deck.offset:0}catch{}};
  const url=new URL(`./music/${track.file}`,document.baseURI).href;
  if(deck.element.src!==url){deck.element.onloadedmetadata=seek;deck.element.src=url;deck.element.load()}else seek();
  let settled=false;
  const failed=(message:string)=>{if(settled||token!==this.generation)return;settled=true;clearTimeout(this.loadTimer);this.stopDeck(deck);this.pending=null;this.failed.add(track.id);if(this.active){this.remember(this.active);this.stopDeck(this.active);this.active=null}this.error=message};
  this.loadTimer=setTimeout(()=>failed('配樂載入逾時，已保留合成配樂'),12000);
  void deck.element.play().then(()=>{
   if(settled||token!==this.generation||this.paused){if(deck!==this.active&&deck!==this.pending)this.stopDeck(deck);return}
   settled=true;clearTimeout(this.loadTimer);this.error='';const now=this.ctx.currentTime;
   if(this.active){this.remember(this.active);const old=this.active;old.gain.gain.cancelAndHoldAtTime(now);old.gain.gain.linearRampToValueAtTime(0,now+1);this.retiring=old;this.fadeEnd=now+1}
   deck.gain.gain.cancelScheduledValues(now);deck.gain.gain.setValueAtTime(0,now);deck.gain.gain.linearRampToValueAtTime(1,now+1);this.active=deck;this.pending=null;
  }).catch(()=>failed('配樂未能播放，已保留合成配樂'));
 }
 pause(){this.paused=true;this.generation++;clearTimeout(this.loadTimer);if(this.active)this.remember(this.active);for(const d of this.decks)this.stopDeck(d);this.active=null;this.pending=null;this.retiring=null}
 stop(){this.pause()}
 resume(){this.paused=false}
 reset(){this.pause();this.positions.clear();this.index=0;this.failed.clear();this.error=''}
 snapshot(){return {active:this.active?.track?.id||null,pending:this.pending?.track?.id||null,paused:this.paused,index:this.index,error:this.error,positions:Object.fromEntries(this.positions),playing:this.decks.filter(d=>!d.element.paused).length,decks:this.decks.map(d=>({id:d.track?.id,time:d.element.currentTime,duration:d.element.duration,paused:d.element.paused,gain:d.gain.gain.value,ready:d.element.readyState}))}}
 dispose(){this.pause();for(const d of this.decks){d.element.onloadedmetadata=null;d.element.removeAttribute('src');d.element.load();d.source.disconnect();d.gain.disconnect()}}
}
