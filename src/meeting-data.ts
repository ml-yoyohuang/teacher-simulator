import {itemDefs,ItemDef} from './data';
export const meetingTitles=['議程粉碎機','全票透過離席','紀錄追不上本人','教學從未停止','主席請訂正','空調由我決定','證據飛走了','全員暫時離席'];
export const modules=[
 ['projector','荒謬事蹟簡報',['meeting_remote']],['reenactment','請現場重演',['folder']],['bell','議事鈴與三角鐵',['meeting_bell','triangle']],['voting','荒謬表決',['meeting_vote']],['printer','追不上事件的紀錄',['meeting_paper']],['cross_talk','委員互相打斷',[]],['tea_spill','茶水連鎖小災難',['coffee_cup']],['guest_mediator','熟人來協調',[]],['conducting','女導師開始指揮',['drumstick']],['musical_chairs','開會變音樂椅',['meeting_music']],['stamps','委員也有評語',['meeting_stamp']],['aircon','冷氣遙控器爭奪',['meeting_aircon']],['sleepy_member','一位委員在睡覺',['castanets']],['paper_planes','報告變紙飛機',['meeting_report']],['whiteboard','議程變音樂課',[]],['dog_observer','校狗旁聽',[]]
].map(([id,label,tools])=>({id:id as string,label:label as string,tools:tools as string[],weight:1}));
export const incompatible=(ids:string[])=>ids.includes('conducting')&&ids.includes('musical_chairs')||ids.includes('tea_spill')&&ids.includes('aircon');
export function selectModules(seed:number,history:string[][]=[],seen:string[]=[],dogEligible=false){let s=seed>>>0;const next=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296};const count=next()<.7?2:3;const combinations:string[][]=[];function visit(from:number,list:string[]){if(list.length===count){if(!incompatible(list))combinations.push(list);return}for(let k=from;k<modules.length;k++){if(modules[k].id==='dog_observer'&&!dogEligible)continue;visit(k+1,[...list,modules[k].id]);}}visit(0,[]);const previous=history.at(-1)||[];let pool=combinations.filter(c=>c.join()!==[...previous].sort((a,b)=>modules.findIndex(m=>m.id===a)-modules.findIndex(m=>m.id===b)).join());if(!pool.length)pool=combinations;const weights=pool.map(c=>c.reduce((w,id)=>w*(seen.includes(id)?1:1.8)*(history.slice(-2).some(h=>h.includes(id))?.35:1),1));let r=next()*weights.reduce((a,b)=>a+b,0);return pool.find((_,i)=>(r-=weights[i])<0)||pool.at(-1)!;}
const names:Record<string,string>={meeting_report:'事件報告',meeting_gavel:'小木槌',meeting_name:'姓名立牌',meeting_remote:'投影遙控器',meeting_bell:'議事鈴',meeting_vote:'表決牌',meeting_paper:'紙疊',meeting_music:'音樂椅播放鍵',meeting_stamp:'評語印章',meeting_aircon:'冷氣遙控器'};
for(const [id,label] of Object.entries(names))itemDefs[id]={id,label,category:['portable'],zone:'meeting_room',damage:6,throwDamage:8,reach:1.2,cooldown:.45,heavy:false,actions:['take','drop','throw','use'],modelKey:id} as ItemDef;
export type MeetingArchive={id:string,seed:number,modules:string[],cast:string[],seconds:number,reason:string,chaos:number,interruptions:number,downed:number,lines:string[]};
export type MeetingProgress={serial:number,campusClock:number,cooldown:number,history:string[][],seen:string[],titles:string[],records:MeetingArchive[],campusEvents:any[],pending:any|null};
export const emptyMeeting=():MeetingProgress=>({serial:0,campusClock:0,cooldown:0,history:[],seen:[],titles:[],records:[],campusEvents:[],pending:null});
export function validateMeeting(v:any):MeetingProgress{
 if(!v)return emptyMeeting();
 if(!Number.isFinite(v.cooldown)||v.cooldown<0||v.cooldown>300||!Array.isArray(v.history)||v.history.length>3||!Array.isArray(v.seen)||!Array.isArray(v.titles)||!Array.isArray(v.records)||v.records.length>20||!Array.isArray(v.campusEvents)||v.campusEvents.length>40||JSON.stringify(v).length>150000)throw Error('會議存檔無效');
 for(const ids of [...v.history,v.seen])if(!Array.isArray(ids)||ids.some(id=>!modules.some(m=>m.id===id)))throw Error('會議橋段 ID 無效');
 if(v.titles.some(t=>!meetingTitles.includes(t)))throw Error('會議稱號無效');
 const pending=v.pending;
 if(pending){
  if(typeof pending.id!=='string'||pending.id.length>100||!Number.isInteger(pending.seed)||pending.seed<0||pending.seed>4294967295||!Array.isArray(pending.selected)||pending.selected.length>3||pending.selected.some(id=>!modules.some(m=>m.id===id))||!Number.isFinite(pending.elapsed)||pending.elapsed<0||pending.elapsed>3600||!Number.isFinite(pending.chaos)||pending.chaos<0||pending.chaos>100||!pending.origin||!Array.isArray(pending.origin.items)||pending.origin.items.length>3)throw Error('會議中斷資料無效');
  const ids=new Set<string>();
  for(const i of pending.origin.items){if(!i||typeof i.id!=='string'||i.id.length>180||ids.has(i.id)||!itemDefs[i.type]||!['held','worn'].includes(i.state)||!i.home||!Number.isFinite(i.home.x)||!Number.isFinite(i.home.z)||!Array.isArray(i.hit)||i.hit.length>60||!Array.isArray(i.pins)||i.pins.length>20)throw Error('會議原物品移交無效');ids.add(i.id);}
  for(const slot of ['item','wig','glasses'])if(pending.origin[slot]&&!ids.has(pending.origin[slot]))throw Error('會議原物品身分不一致');
 }
 return {...structuredClone(v),serial:Number.isSafeInteger(v.serial)&&v.serial>=0?v.serial:0,campusClock:Number.isFinite(v.campusClock)&&v.campusClock>=0?v.campusClock:0};
}
