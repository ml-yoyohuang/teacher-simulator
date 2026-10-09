import {Game} from './game';
import {destination,locations} from './data';
import {dogQuests} from './dogs-data';
export function healthState(hp:number){return hp<=10?'critical':hp<=25?'low':'normal'}
export function goalMarkers(g:Game){
 const out:{x:number,z:number,label:string}[]=[];if(g.meeting.running)return out;
 const step=g.step,q=dogQuests.find(q=>q.id===g.profile.dogs.activeQuest);
 if(q)out.push({...q.goal,label:'校狗任務'});
 if(step&&['place','deliver'].includes(step.kind))for(let k=0;k<(step.count||1);k++)out.push({...destination(step,k),label:step.kind==='place'?'定位':'交付'});
 if(g.held?.type==='exam_papers'&&(g.tutorial===2||!step))out.push({...locations.podium,label:'放下考卷'});
 if(step?.kind==='return'){const i=[...g.objects.values()].find(i=>i.type===step.item&&i.owner===g.player.id);if(i)out.push({...i.home,label:'歸還'})}
 if(g.race){const points=[[-25,15],[-25,21],[-18,21],[-18,15],[-21,15]],p=points[g.race.checkpoint];if(p)out.push({x:p[0],z:p[1],label:'路點'})}
 return out.filter((p,i)=>out.findIndex(v=>v.x===p.x&&v.z===p.z)===i).slice(0,24);
}
