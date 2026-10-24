import './editor.css';
import {Game} from './game';
import {Renderer} from './render';
import {campusLayout,entrances,CampusLayout} from './scene';
import {center,itemDefs,zones} from './data';
import {applyScenePositions,emptySceneEdits,readSceneEdits,sceneEntry,sceneModes,SceneEdits,SceneMode,ScenePosition,validScenePosition,validateSceneEdits,writeSceneEdits} from './scene-edits';

const $=<T extends Element=HTMLElement>(id:string)=>document.getElementById(id) as unknown as T;
const esc=(v:string)=>v.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]!));
const modeNames:Record<SceneMode,string>={normal:'平常校園',parent_day:'親師日',anniversary:'校慶',choir_contest:'合唱團比賽',final_exam:'期末考'};
const furnitureNames:Record<string,string>={blackboard:'黑板',student_desk:'學生課桌',student_chair:'學生椅',books:'裝飾書本',low_shelf:'低矮置物架',notice:'公告欄',cleaning_rack:'清潔工具掛架',wastebasket:'垃圾簍',music_board:'音樂白板',instrument_shelf:'樂器收納架',counter:'置物臺',drums:'鼓組',triangle_rack:'三角鐵吊架',poster:'海報',rehearsal_mat:'地面鋪墊',piano_bench:'鋼琴椅',work_desk:'教師辦公桌',paper_tray:'文件盤',pencil_cup:'筆筒',file_cabinet:'文件櫃',office_seat:'固定辦公座椅',principal_desk:'校長辦公桌',high_chair:'高背椅',visitor_chair:'訪客椅',trophy_shelf:'獎盃展示架',wig_stand:'假髮展示臺',formal_rug:'正式地毯',honor:'榮譽展示板',water_station:'飲水機',short_bench:'固定長椅',garden:'花圃',tree:'樹木',plant:'裝飾盆栽',direction_post:'校園指示牌',basketball_hoop:'籃球架',equipment_rack:'體育器材架',ball_crate:'球類收納箱',guard_booth:'警衛亭',lost_found:'失物招領架',visitor_board:'訪客登記牌',shop_counter:'販售櫃臺',stock_shelf:'商品貨架',fridge:'冰箱',awning:'遮雨棚',crate:'收納木箱',queue_mark:'排隊地面標記',nurse_desk:'校護辦公桌',medical_bed:'固定病床',medical_cabinet:'醫療置物櫃',screen:'屏風',life_wall:'低隔牆',life_partition:'廁所隔板',flag_pole:'旗桿',stage:'活動舞臺',stage_steps:'舞臺階梯',stage_backdrop:'舞臺背板',bunting:'三角彩旗'};
const propNames:Record<string,string>={desk:'課桌',chair:'椅子',table:'桌子',planter:'花盆',bench:'長椅',bed:'休息床',cabinet:'藥櫃'};
type Descriptor={key:string,label:string,zone:string,kind:'f'|'i'|'p'|'s',type:string,w:number,d:number};
const baselines=Object.fromEntries(sceneModes.map(mode=>[mode,campusLayout(mode,null)])) as Record<SceneMode,CampusLayout>;
let edits:SceneEdits;try{edits=validateSceneEdits(readSceneEdits(),baselines)}catch{edits=emptySceneEdits()}
let saved=JSON.stringify(edits),mode:SceneMode='normal',zone='classroom',selected='',history:string[]=[],future:string[]=[],dragging=false,dragMoved=false;
const game=new Game(),renderer=new Renderer($<HTMLCanvasElement>('world'),game);
const map=$<SVGSVGElement>('map'),modeSelect=$<HTMLSelectElement>('mode'),zoneSelect=$<HTMLSelectElement>('zone');
let previewQueued=false;
function schedulePreview(){if(previewQueued)return;previewQueued=true;requestAnimationFrame(()=>{previewQueued=false;renderer.frame(1/60,false,1)})}
modeSelect.innerHTML=sceneModes.map(m=>`<option value="${m}">${modeNames[m]}</option>`).join('');
zoneSelect.innerHTML=zones.map(z=>`<option value="${z.id}">${z.label}</option>`).join('');
modeSelect.value=mode;zoneSelect.value=zone;
let activeLayout=applyScenePositions(structuredClone(baselines[mode]),edits.modes[mode]);
const currentLayout=()=>activeLayout;
const position=(key:string)=>sceneEntry(currentLayout(),key)! as ScenePosition;
const xy=(x:number,z:number)=>({x:(x+31)*10,y:(z+25)*10});
function descriptors():Descriptor[]{
 const layout=baselines[mode],list:Descriptor[]=[];
 for(const f of layout.furniture)list.push({key:'f:'+f.id,label:furnitureNames[f.type]||f.type,zone:f.zone,kind:'f',type:f.type,w:f.w,d:f.d});
 for(const [id,p] of Object.entries(layout.placements)){const type=id.split(':')[0];list.push({key:'i:'+id,label:itemDefs[type]?.label||type,zone:zones.find(z=>p.x>=z.x1&&p.x<=z.x2&&p.z>=z.z1&&p.z<=z.z2)?.id||itemDefs[type]?.zone||'corridor',kind:'i',type,w:.55,d:.55})}
 for(const [id,p] of Object.entries(layout.propPositions)){const type=game.props.find(v=>v.id===id)?.type||'table';list.push({key:'p:'+id,label:propNames[type]||type,zone:id.split(':')[1],kind:'p',type,w:type==='bed'?1.5:type==='planter'?.7:1.6,d:type==='bed'?2.6:type==='planter'?.7:.8})}
 layout.signs.forEach((s,i)=>list.push({key:'s:'+i,label:'文字招牌：'+s.text,zone:zones.find(z=>s.x>=z.x1&&s.x<=z.x2&&s.z>=z.z1&&s.z<=z.z2)?.id||'courtyard',kind:'s',type:'sign',w:1,d:.4}));
 return list;
}
function filtered(){const q=$<HTMLInputElement>('search').value.trim().toLowerCase();return descriptors().filter(d=>d.zone===zone&&(!q||d.label.toLowerCase().includes(q)||d.key.toLowerCase().includes(q)))}
function notify(message:string,error=false){const el=$('message');el.textContent=message;el.className=error?'error':'ok'}
function status(){const dirty=JSON.stringify(edits)!==saved;$('save-state').textContent=dirty?'● 有尚未儲存的調整':'✓ 已儲存於此瀏覽器';$<HTMLButtonElement>('undo').disabled=!history.length;$<HTMLButtonElement>('redo').disabled=!future.length}
function remember(){history.push(JSON.stringify(edits));if(history.length>60)history.shift();future=[]}
function refreshPreview(reset=false){
 if(reset)game.reset(mode);
 const layout=currentLayout();game.layout=layout;
 for(const [id,p] of Object.entries(layout.placements)){const item=game.objects.get(id);if(item){Object.assign(item,{x:p.x,z:p.z,y:p.y,homeY:p.y,angle:p.angle||0,homeAngle:p.angle||0,home:{x:p.x,z:p.z}})}}
 for(const [id,p] of Object.entries(layout.propPositions)){const prop=game.props.find(v=>v.id===id);if(prop)Object.assign(prop,{x:p.x,z:p.z,home:{...p}})}
 game.refreshColliders();renderer.lastSession=-1;
 const focus=selected?position(selected):center(zone),anchor=selected?{x:focus.x+2,z:focus.z+2}:focus;
 game.player.x=Math.max(-29,Math.min(29,anchor.x));game.player.z=Math.max(-23,Math.min(24,anchor.z));renderer.target.set(game.player.x,0,game.player.z);schedulePreview();
}
function drawMap(){
 const boxes=zones.map(z=>{const a=xy(z.x1,z.z1),b=xy(z.x2,z.z2);return `<rect class="zone-box ${z.id===zone?'current':''}" x="${a.x}" y="${a.y}" width="${b.x-a.x}" height="${b.y-a.y}" rx="3"/><text class="zone-title" x="${(a.x+b.x)/2}" y="${(a.y+b.y)/2}">${esc(z.label)}</text>`}).join('');
 const dots=filtered().map(d=>{const p=position(d.key),v=xy(p.x,p.z),r=d.key===selected?9:d.kind==='f'?5:6;return `<circle data-key="${esc(d.key)}" class="obj-dot ${d.kind} ${d.key===selected?'selected':''}" cx="${v.x}" cy="${v.y}" r="${r}"><title>${esc(d.label)} · ${p.x.toFixed(1)}, ${p.z.toFixed(1)}</title></circle>`}).join('');
 map.innerHTML=`<rect width="620" height="510" fill="#d1dfc9"/>${boxes}${dots}`;
 $('count').textContent=`${filtered().length} 件可調整`;
}
function drawList(){const list=filtered();$('object-count').textContent=`${list.length} 件`;$('objects').innerHTML=list.map(d=>{const p=position(d.key);return `<button data-key="${esc(d.key)}" aria-current="${d.key===selected}"><span>${esc(d.label)}</span><small>${p.x.toFixed(1)}, ${p.z.toFixed(1)}</small></button>`}).join('')||'<p class="hint">這個區域沒有符合搜尋的物件。</p>'}
function drawSelection(){const panel=$('selection');if(!selected){panel.innerHTML='<p>先選一件物件。</p>';return}const d=descriptors().find(v=>v.key===selected);if(!d){selected='';panel.innerHTML='<p>先選一件物件。</p>';return}const p=position(selected),base=sceneEntry(baselines[mode],selected)!;panel.innerHTML=`<strong>${esc(d.label)}</strong><p class="hint">${esc(d.key)} · ${esc(modeNames[mode])}</p><div class="selection-fields"><label>X 左右<input id="edit-x" type="number" step="0.1" value="${p.x.toFixed(2)}"></label><label>Z 前後<input id="edit-z" type="number" step="0.1" value="${p.z.toFixed(2)}"></label>${d.kind==='i'?`<label>離地高度<input id="edit-y" type="number" min="0" max="4" step="0.05" value="${('y'in p?p.y:0).toFixed(2)}"></label>`:''}${['f','i'].includes(d.kind)?`<label>旋轉角度<input id="edit-angle" type="number" min="-360" max="360" step="5" value="${Math.round((('angle'in p?p.angle:0)||0)*180/Math.PI)}"></label>`:''}</div><div class="selection-actions"><button id="restore-one">還原這件</button><button id="copy-modes">套用到五種場景</button></div><p class="hint">原位置：${base.x.toFixed(1)}, ${base.z.toFixed(1)}。桌上物品移位時可調整離地高度。</p>`;
 for(const id of ['edit-x','edit-z','edit-y','edit-angle'])document.getElementById(id)?.addEventListener('change',()=>{
  const next:ScenePosition={x:Number($<HTMLInputElement>('edit-x').value),z:Number($<HTMLInputElement>('edit-z').value)};
  if(document.getElementById('edit-y'))next.y=Number($<HTMLInputElement>('edit-y').value);
  if(document.getElementById('edit-angle'))next.angle=Number($<HTMLInputElement>('edit-angle').value)*Math.PI/180;
  if(!validScenePosition(baselines[mode],selected,next)){notify('位置不在可調整範圍；請留在原校園區域內。',true);drawSelection();return}
  remember();setPosition(selected,next);renderAll();notify('已預覽；按「儲存並套用」才會寫入此瀏覽器。');
 });
 $('restore-one').addEventListener('click',()=>{remember();delete edits.modes[mode]?.[selected];renderAll();notify('已還原這件物件的原始位置。')});
 $('copy-modes').addEventListener('click',()=>{const value={...p};remember();let count=0;for(const m of sceneModes)if(sceneEntry(baselines[m],selected)&&validScenePosition(baselines[m],selected,value)){edits.modes[m]??={};edits.modes[m]![selected]=value;count++}renderAll();notify(`已將位置套用到 ${count} 種場景；尚未儲存。`)});
}
function setPosition(key:string,next:ScenePosition){edits.modes[mode]??={};edits.modes[mode]![key]={x:+next.x.toFixed(2),z:+next.z.toFixed(2),...(next.y===undefined?{}:{y:+next.y.toFixed(2)}),...(next.angle===undefined?{}:{angle:+next.angle.toFixed(4)})}}
function renderAll(){activeLayout=applyScenePositions(structuredClone(baselines[mode]),edits.modes[mode]);drawMap();drawList();drawSelection();refreshPreview();status()}
function select(key:string){const d=descriptors().find(v=>v.key===key);if(!d)return;selected=key;if(d.zone!==zone){zone=d.zone;zoneSelect.value=zone}renderAll()}
function screenToWorld(e:PointerEvent){const point=map.createSVGPoint();point.x=e.clientX;point.y=e.clientY;const out=point.matrixTransform(map.getScreenCTM()!.inverse());return {x:+(out.x/10-31).toFixed(2),z:+(out.y/10-25).toFixed(2)}}
map.addEventListener('pointerdown',e=>{const hit=(e.target as Element).closest('[data-key]') as SVGElement|null;if(!hit)return;const point=screenToWorld(e),active=selected?position(selected):null;const key=active&&Math.hypot((active.x-point.x)*10,(active.z-point.z)*10)<12?selected:hit.dataset.key!;select(key);dragging=true;dragMoved=false;map.setPointerCapture(e.pointerId)});
map.addEventListener('pointermove',e=>{if(!dragging||!selected)return;const original=position(selected),point=screenToWorld(e),next={...original,x:point.x,z:point.z};if(!validScenePosition(baselines[mode],selected,next))return;if(!dragMoved){remember();dragMoved=true}setPosition(selected,next);renderAll()});
map.addEventListener('pointerup',()=>{dragging=false;if(dragMoved)notify('位置已預覽；按「儲存並套用」保存。')});
map.addEventListener('pointercancel',()=>{dragging=false});
$('objects').addEventListener('click',e=>{const hit=(e.target as Element).closest('[data-key]') as HTMLElement|null;if(hit)select(hit.dataset.key!)});
modeSelect.addEventListener('change',()=>{mode=modeSelect.value as SceneMode;selected='';game.reset(mode);renderAll()});
zoneSelect.addEventListener('change',()=>{zone=zoneSelect.value;selected='';renderAll()});
$<HTMLInputElement>('search').addEventListener('input',()=>{drawMap();drawList()});
$('undo').addEventListener('click',()=>{if(!history.length)return;future.push(JSON.stringify(edits));edits=JSON.parse(history.pop()!);renderAll();notify('已復原上一個動作。')});
$('redo').addEventListener('click',()=>{if(!future.length)return;history.push(JSON.stringify(edits));edits=JSON.parse(future.pop()!);renderAll();notify('已重做。')});
$('reset-mode').addEventListener('click',()=>{remember();delete edits.modes[mode];renderAll();notify('本活動的修改已清除；按儲存才會套用。')});
function checkSceneSafety(mode:SceneMode,layout:CampusLayout){
 const probe=new Game();probe.reset(mode);probe.layout=layout;
 for(const [id,p] of Object.entries(layout.placements)){const i=probe.objects.get(id);if(i)Object.assign(i,{x:p.x,z:p.z,y:p.y,home:{x:p.x,z:p.z},homeY:p.y})}
 for(const [id,p] of Object.entries(layout.propPositions)){const prop=probe.props.find(v=>v.id===id);if(prop)Object.assign(prop,{x:p.x,z:p.z})}
 probe.refreshColliders();const world=probe.world;
 for(const [name,p] of Object.entries({...entrances,player:{x:21,z:-14},rescue:{x:0,z:-19}}))if(world.blocked(p,.32)||name!=='player'&&name!=='rescue'&&!world.path({x:0,z:0},p).length)throw Error(`新位置擋住${name}的必要通道；請移開附近物件。`);
 for(const n of probe.npcs)if(world.blocked(n,.31))throw Error(`新位置擋住${n.label}的起點；請移開附近物件。`);
 for(const i of probe.objects.values()){const entry=entrances[i.zone];if(!entry)continue;const approach=world.approach(i.home,entry);if(world.blocked(approach,.32)||!world.path(entry,approach).length||Math.hypot(i.home.x-approach.x,i.home.z-approach.z)>2.5)throw Error(`${itemDefs[i.type]?.label||i.id}無法從入口取得；請調整位置。`)}
}
$('save').addEventListener('click',()=>{try{edits=validateSceneEdits(edits,baselines);for(const m of sceneModes)if(Object.keys(edits.modes[m]||{}).length)checkSceneSafety(m,campusLayout(m,edits.modes[m]));writeSceneEdits(edits);saved=JSON.stringify(edits);status();notify('已儲存！重新開啟遊戲即可在這個瀏覽器使用新佈置。')}catch(e){notify((e as Error).message,true)}});
$('export').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(edits,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='dongshan-scene-layout.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('已匯出設定檔。')});
$('import').addEventListener('click',()=>$<HTMLInputElement>('import-file').click());
$<HTMLInputElement>('import-file').addEventListener('change',async e=>{const input=e.target as HTMLInputElement,file=input.files?.[0];if(!file)return;try{if(file.size>150000)throw Error('檔案過大');const next=validateSceneEdits(JSON.parse(await file.text()),baselines);remember();edits=next;selected='';renderAll();notify('已匯入並預覽；按「儲存並套用」才會寫入此瀏覽器。')}catch(err){notify('匯入失敗：'+(err as Error).message,true)}finally{input.value=''}});
window.addEventListener('beforeunload',e=>{if(JSON.stringify(edits)!==saved){e.preventDefault();e.returnValue=''}});
window.addEventListener('resize',()=>{renderer.resize();schedulePreview()});
game.reset(mode);renderAll();
