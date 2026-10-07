import {Vec,zones} from './data';
export type Collider={id:string,x:number,z:number,w:number,d:number,wall?:boolean,zone?:string};
export const distance=(a:Vec,b:Vec)=>Math.hypot(a.x-b.x,a.z-b.z);
export const norm=(x:number,z:number):Vec=>{let l=Math.hypot(x,z)||1;return {x:x/l,z:z/l}};
export class World{
 walls:Collider[]=[];dynamic:Collider[]=[];cell=.75; pathCalls=0;
 constructor(){
 for(const z of zones.filter(z=>['classroom','music_room','staff_room','principal_room','infirmary'].includes(z.id))){
 const mid=(z.z1+z.z2)/2;const side=z.x2<0?z.x2:z.x1;
 this.walls.push({id:z.id+'-back',x:(z.x1+z.x2)/2,z:z.z1,w:z.x2-z.x1,d:.35,wall:true,zone:z.id});
 this.walls.push({id:z.id+'-front',x:(z.x1+z.x2)/2,z:z.z2,w:z.x2-z.x1,d:.35,wall:true,zone:z.id});
 if(z.id==='infirmary'){
 this.walls.push({id:'inf-left',x:z.x1,z:mid,w:.35,d:z.z2-z.z1,wall:true,zone:z.id},{id:'inf-right',x:z.x2,z:mid,w:.35,d:z.z2-z.z1,wall:true,zone:z.id});
 this.walls=this.walls.filter(w=>w.id!=='infirmary-front');
 this.walls.push({id:'inf-door-l',x:-4,z:-14,w:4,d:.35,wall:true,zone:z.id},{id:'inf-door-r',x:4,z:-14,w:4,d:.35,wall:true,zone:z.id});
 }else{
 const outer=side===z.x1?z.x2:z.x1;
 this.walls.push({id:z.id+'-outer',x:outer,z:mid,w:.35,d:z.z2-z.z1,wall:true,zone:z.id});
 const len=(z.z2-z.z1-3)/2;
 this.walls.push({id:z.id+'-door-a',x:side,z:z.z1+len/2,w:.35,d:len,wall:true,zone:z.id},{id:z.id+'-door-b',x:side,z:z.z2-len/2,w:.35,d:len,wall:true,zone:z.id});
 }
 }
 }
 colliders(){return [...this.walls,...this.dynamic]}
 blocked(p:Vec,r=.32,ignore=''){if(Math.abs(p.x)>31-r||p.z< -25+r||p.z>25-r)return true;return this.colliders().some(c=>c.id!==ignore&&Math.abs(p.x-c.x)<c.w/2+r&&Math.abs(p.z-c.z)<c.d/2+r)}
 move(p:Vec,dx:number,dz:number,r=.32,ignore=''):Vec{let o={...p};let steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.15));for(let i=0;i<steps;i++){if(!this.blocked({x:o.x+dx/steps,z:o.z},r,ignore))o.x+=dx/steps;if(!this.blocked({x:o.x,z:o.z+dz/steps},r,ignore))o.z+=dz/steps;}return o}
 visible(a:Vec,b:Vec){let d=distance(a,b);for(let t=.15;t<d;t+=.2){let p={x:a.x+(b.x-a.x)*t/d,z:a.z+(b.z-a.z)*t/d};if(this.walls.some(c=>Math.abs(p.x-c.x)<c.w/2&&Math.abs(p.z-c.z)<c.d/2))return false;}return true}
 path(a:Vec,b:Vec,ignore=''):Vec[]{this.pathCalls++;if(distance(a,b)<.5)return [b];const c=this.cell;const key=(x:number,z:number)=>`${x},${z}`;let start=[Math.round(a.x/c),Math.round(a.z/c)],end=[Math.round(b.x/c),Math.round(b.z/c)];let open=[{x:start[0],z:start[1],g:0,f:0}];let parents=new Map<string,string>(),cost=new Map<string,number>();cost.set(key(...start as [number,number]),0);let visited=0,found='';while(open.length&&visited++<7000){open.sort((a,b)=>a.f-b.f);let n=open.shift()!;let k=key(n.x,n.z);if(Math.hypot(n.x-end[0],n.z-end[1])<1.6){found=k;break;}for(let [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){let x=n.x+dx,z=n.z+dz,kk=key(x,z);if(this.blocked({x:x*c,z:z*c},.38,ignore))continue;let g=n.g+1;if(g>=(cost.get(kk)??Infinity))continue;cost.set(kk,g);parents.set(kk,k);open.push({x,z,g,f:g+Math.hypot(x-end[0],z-end[1])});}}if(!found)return [];let result:Vec[]=[];let k=found;while(parents.has(k)){let [x,z]=k.split(',').map(Number);result.unshift({x:x*c,z:z*c});k=parents.get(k)!;}result.push(b);return result;}
}
