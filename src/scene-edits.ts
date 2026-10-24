import type {CampusLayout} from './scene';
import {zones} from './data';

export const SCENE_EDIT_KEY='dongshan-scene-edits-v1';
export const sceneModes=['normal','parent_day','anniversary','choir_contest','final_exam'] as const;
export type SceneMode=typeof sceneModes[number];
export type ScenePosition={x:number,z:number,y?:number,angle?:number};
export type SceneEdits={version:1,modes:Partial<Record<SceneMode,Record<string,ScenePosition>>>};
export const emptySceneEdits=():SceneEdits=>({version:1,modes:{}});

export function readSceneEdits():SceneEdits{
 try{const raw=JSON.parse(localStorage.getItem(SCENE_EDIT_KEY)||'null');return raw?.version===1&&raw.modes&&typeof raw.modes==='object'?raw:emptySceneEdits()}catch{return emptySceneEdits()}
}
export function writeSceneEdits(edits:SceneEdits){localStorage.setItem(SCENE_EDIT_KEY,JSON.stringify(edits))}

export function sceneEntry(layout:CampusLayout,key:string){
 if(key.startsWith('f:'))return layout.furniture.find(v=>v.id===key.slice(2));
 if(key.startsWith('i:'))return layout.placements[key.slice(2)];
 if(key.startsWith('p:'))return layout.propPositions[key.slice(2)];
 if(key.startsWith('s:')){const n=Number(key.slice(2));return Number.isInteger(n)?layout.signs[n]:undefined}
}

export function validScenePosition(layout:CampusLayout,key:string,p:ScenePosition){
 const base=sceneEntry(layout,key);
 if(!base||!p||!Number.isFinite(p.x)||!Number.isFinite(p.z)||Math.abs(p.x)>30.5||p.z< -24.5||p.z>25.5)return false;
 if(p.y!==undefined&&(!key.startsWith('i:')||!Number.isFinite(p.y)||p.y<0||p.y>4))return false;
 if(p.angle!==undefined&&(!['f:','i:'].some(prefix=>key.startsWith(prefix))||!Number.isFinite(p.angle)||Math.abs(p.angle)>Math.PI*2))return false;
 const zone=zones.find(z=>base.x>=z.x1&&base.x<=z.x2&&base.z>=z.z1&&base.z<=z.z2);
 return zone? p.x>=zone.x1+.25&&p.x<=zone.x2-.25&&p.z>=zone.z1+.25&&p.z<=zone.z2-.25:Math.hypot(p.x-base.x,p.z-base.z)<=6;
}

export function applyScenePositions(layout:CampusLayout,positions:Record<string,ScenePosition>|undefined){
 if(!positions||typeof positions!=='object')return layout;
 for(const [key,p] of Object.entries(positions)){
  if(!validScenePosition(layout,key,p))continue;
  const entry=sceneEntry(layout,key)!;entry.x=p.x;entry.z=p.z;
  if(p.y!==undefined&&'y'in entry)entry.y=p.y;
  if(p.angle!==undefined&&'angle'in entry)entry.angle=p.angle;
 }
 return layout;
}

export function validateSceneEdits(raw:any,baselines:Record<SceneMode,CampusLayout>):SceneEdits{
 if(!raw||raw.version!==1||!raw.modes||typeof raw.modes!=='object'||Array.isArray(raw.modes))throw Error('不是可使用的場景設定檔');
 const result=emptySceneEdits();
 for(const [mode,positions] of Object.entries(raw.modes)){
  if(!sceneModes.includes(mode as SceneMode)||!positions||typeof positions!=='object'||Array.isArray(positions))throw Error('包含未知場景');
  result.modes[mode as SceneMode]={};
  for(const [key,p] of Object.entries(positions)){
   if(!validScenePosition(baselines[mode as SceneMode],key,p as ScenePosition))throw Error(`位置無效：${mode} / ${key}`);
   result.modes[mode as SceneMode]![key]={x:(p as ScenePosition).x,z:(p as ScenePosition).z,...((p as ScenePosition).y===undefined?{}:{y:(p as ScenePosition).y}),...((p as ScenePosition).angle===undefined?{}:{angle:(p as ScenePosition).angle})};
  }
 }
 return result;
}
