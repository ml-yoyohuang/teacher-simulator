import {itemDefs,ItemDef} from './data';
export const dogIds=['dog_lion','dog_mani'] as const;
export type DogId=typeof dogIds[number];
export const dogNames={dog_lion:'LION',dog_mani:'馬尼'};
export const dogStages=['認識你了','看到你會過來','願意跟著散步','可以請牠幫忙'];
export const stage=(v:number)=>dogStages[v>=75?3:v>=45?2:v>=20?1:0];
export const dogAchievements=['校園有兩位新朋友','巡邏隊長批准了','馬尼認為你應該停下來摸牠','理化老師其實很溫柔','我們可以坐下來談','本次會議有旁聽席'];
export const dogQuests=[
 {id:'lion_bowl',dog:'dog_lion',label:'LION 的碗放反了',item:'dog_lion_bowl',home:{x:7,z:14},goal:{x:7,z:11},gain:8,treats:2},
 {id:'lion_mat',dog:'dog_lion',label:'巡邏隊長的休息站',item:'dog_mat',home:{x:6,z:18},goal:{x:8,z:12},gain:10,treats:2},
 {id:'lion_patrol',dog:'dog_lion',label:'巡邏不是走兩步',goal:{x:-15,z:13},gain:12,treats:0},
 {id:'mani_toy',dog:'dog_mani',label:'馬尼把玩具藏哪了',item:'dog_toy',home:{x:10,z:7},goal:{x:9,z:11},gain:8,treats:2},
 {id:'mani_water',dog:'dog_mani',label:'白色小狗的水碗',item:'dog_water_bowl',home:{x:10,z:12},goal:{x:9,z:11},gain:10,treats:2},
 {id:'mani_music_walk',dog:'dog_mani',label:'音樂教室外散步',goal:{x:-12,z:0},gain:12,treats:0}
] as const;
export type DogProgress={affinity:number,completed:string[],cooldowns:{pet:number,treat:number,ball:number,walk:number},collected:boolean};
export type DogsProgress={dogs:Record<DogId,DogProgress>,introduced:boolean,treats:number,companion:DogId|null,assistCooldown:number,clock:number,serial:number,ledger:string[],achievements:string[],feedingSeen:boolean,transfer:DogId|null,activeQuest:string|null};
export const emptyDogs=():DogsProgress=>({dogs:Object.fromEntries(dogIds.map(id=>[id,{affinity:0,completed:[],cooldowns:{pet:0,treat:0,ball:0,walk:0},collected:false}])) as Record<DogId,DogProgress>,introduced:false,treats:0,companion:null,assistCooldown:0,clock:0,serial:0,ledger:[],achievements:[],feedingSeen:false,transfer:null,activeQuest:null});
export function validateDogs(v:any):DogsProgress{
 if(!v)return emptyDogs();const p=structuredClone(v);
 if(!p.dogs||Object.keys(p.dogs).length!==2||typeof p.introduced!=='boolean'||typeof p.feedingSeen!=='boolean'||!Number.isInteger(p.treats)||p.treats<0||p.treats>20||!Number.isFinite(p.clock)||p.clock<0||!Number.isSafeInteger(p.serial)||p.serial<0||!Number.isFinite(p.assistCooldown)||p.assistCooldown<0||p.assistCooldown>20||!Array.isArray(p.ledger)||p.ledger.length>100||p.ledger.some(x=>typeof x!=='string'||x.length>180)||new Set(p.achievements).size!==p.achievements.length||!Array.isArray(p.achievements)||p.achievements.some(x=>!dogAchievements.includes(x))||p.companion!==null&&!dogIds.includes(p.companion)||p.transfer!==null&&!dogIds.includes(p.transfer)||p.activeQuest!==null&&!dogQuests.some(q=>q.id===p.activeQuest))throw Error('校狗存檔無效');
 for(const id of dogIds){const d=p.dogs[id];if(!d||!Number.isFinite(d.affinity)||d.affinity<0||d.affinity>100||!Array.isArray(d.completed)||new Set(d.completed).size!==d.completed.length||d.completed.some(x=>!dogQuests.some(q=>q.id===x&&q.dog===id))||!d.cooldowns||Object.keys(d.cooldowns).length!==4||['pet','treat','ball','walk'].some(k=>!Number.isFinite(d.cooldowns[k])||d.cooldowns[k]<0||d.cooldowns[k]>180)||typeof d.collected!=='boolean')throw Error('校狗關係無效');}
 return p;
}
for(const [id,label] of Object.entries({dog_soft_ball:'校狗專用軟球',dog_lion_bowl:'LION 標記碗',dog_mat:'LION 睡墊',dog_toy:'馬尼遺失玩具',dog_water_bowl:'馬尼任務水碗'}))itemDefs[id]={id,label,category:['portable'],zone:'courtyard',damage:0,throwDamage:0,reach:1.2,cooldown:.45,heavy:false,actions:['take','drop','throw','return'],modelKey:id} as ItemDef;
export const dogCapabilities=Object.freeze({damageable:false,attackTarget:false,blocksActors:false,interactable:true});
export const humanCapabilities=Object.freeze({damageable:true,attackTarget:true,blocksActors:false,interactable:true});
