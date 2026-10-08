import {itemDefs,ItemDef} from './data';
export const lifeKinds=['lunch','milk','baseball','theft','patrol','assembly'] as const;
export type LifeKind=typeof lifeKinds[number];
export const lifeNames:Record<LifeKind,string>={lunch:'營養午餐',milk:'牛奶不是放越久越好',baseball:'橘子與掃把棒球',theft:'陀螺失物風波',patrol:'校安老師巡查',assembly:'升旗與手機排位'};
export const lifeAwards=['午餐提出書面意見','牛奶不是放越久越好','本校棒球隊尚未成立','原來只是借一下','科展先暫停一下','排位不能缺席，升旗也不能'];
export const lifeRules={cycle:360,flag:60,free:180,lunch:90,closing:30,mainGap:30,mainCooldown:180,sideGap:60,sideCooldown:120,students:5,puddles:3,mealCooldown:90,stomach:15};
export type LifeProgress={clock:number,serial:number,mealSerial:number,mealCooldown:number,stomach:number,pendingMeal:null|{seed:number,abnormal:boolean},cooldowns:Partial<Record<LifeKind,number>>,nextMain:number,nextSide:number,recent:LifeKind[],achievements:string[],active:any[],ledger:any[]};
export const emptyLife=():LifeProgress=>({clock:0,serial:0,mealSerial:0,mealCooldown:0,stomach:0,pendingMeal:null,cooldowns:{},nextMain:30,nextSide:60,recent:[],achievements:[],active:[],ledger:[]});
export function validateLife(raw:any):LifeProgress{
 if(raw===undefined)return emptyLife();
 const p=structuredClone(raw);for(const k of ['clock','serial','mealSerial','mealCooldown','stomach','nextMain','nextSide'])if(!Number.isFinite(p[k])||p[k]<0||p[k]>1e9)throw Error('校園生活存檔數值無效');
 if(p.mealCooldown>90||p.stomach>15||!Array.isArray(p.achievements)||p.achievements.some((x:string)=>!lifeAwards.includes(x))||new Set(p.achievements).size!==p.achievements.length||!Array.isArray(p.active)||p.active.length>3||!Array.isArray(p.ledger)||p.ledger.length>100||!Array.isArray(p.recent)||p.recent.length>3||p.recent.some((x:string)=>!lifeKinds.includes(x as LifeKind)))throw Error('校園生活存檔清單無效');
 if(!p.cooldowns||Object.entries(p.cooldowns).some(([k,v])=>!lifeKinds.includes(k as LifeKind)||typeof v!=='number'||!Number.isFinite(v)||v<0))throw Error('事件冷卻無效');
 if(p.pendingMeal&&(!Number.isInteger(p.pendingMeal.seed)||typeof p.pendingMeal.abnormal!=='boolean'))throw Error('午餐結果無效');
 if(p.active.some((e:any)=>!lifeKinds.includes(e.kind)||typeof e.id!=='string'||!Number.isInteger(e.seed)||!Array.isArray(e.actors)||e.actors.length>6||e.actors.some((x:any)=>typeof x!=='string')||!Array.isArray(e.items)||e.items.length>3))throw Error('事件預約無效');
 return p;
}
const defs:[string,string,string[],number,number,string][]=[['lunch_cart','營養午餐餐車',['fixed'],0,0,'classroom'],['milk_carton','牛奶紙盒',['portable'],2,3,'classroom'],['orange','橘子',['portable'],2,3,'playground'],['mop','拖把',['portable'],8,7,'corridor'],['event_spinning_top','失物陀螺',['portable'],3,5,'classroom']];
for(const [id,label,category,damage,throwDamage,zone] of defs)itemDefs[id]={id,label,category,zone,damage,throwDamage,reach:id==='mop'?2:1.2,cooldown:.7,heavy:false,actions:[],modelKey:id} as ItemDef;
