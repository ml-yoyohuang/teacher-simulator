import {students,parents,itemDefs} from './data';
export type CodexGroup='students'|'parents'|'objects';
export type KnockdownCodex=Record<CodexGroup,Record<string,number>>;
export const emptyCodex=():KnockdownCodex=>({students:{},parents:{},objects:{}});
const furniture:Record<string,string>={table:'桌子',desk:'課桌',chair:'椅子',planter:'盆栽',bench:'長椅',bed:'病床',cabinet:'櫃子',podium:'講臺',shelter:'工具間',stall:'攤位'};
export const codexEntries={students,parents,objects:[...Object.values(itemDefs).map(d=>({id:'item:'+d.id,label:d.label,description:'物品破損／散落'})),...Object.entries(furniture).map(([id,label])=>({id:'prop:'+id,label,description:'家具翻倒／破損'}))]};
export function validateCodex(value:any):KnockdownCodex{
 if(value===undefined)return emptyCodex();
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).some(k=>!['students','parents','objects'].includes(k)))throw Error('擊倒圖鑑無效');
 const result=emptyCodex();
 for(const group of ['students','parents','objects'] as const){
  const records=value[group];
  if(!records||typeof records!=='object'||Array.isArray(records))throw Error('擊倒圖鑑分類無效');
  for(const [id,count] of Object.entries(records)){
   if(!codexEntries[group].some(e=>e.id===id)||!Number.isSafeInteger(count)||Number(count)<1||Number(count)>1e9)throw Error('擊倒圖鑑紀錄無效');
   result[group][id]=Number(count);
  }
 }
 return result;
}
export function recordKnockdown(codex:KnockdownCodex,group:CodexGroup,id:string){
 if(!codexEntries[group].some(e=>e.id===id))return false;
 codex[group][id]=Math.min(1e9,(codex[group][id]||0)+1);return true;
}
