import{d as vi,a as dl,l as Zl,z as wn,b as Vt,c as xi,p as Cr,e as $a,f as Jl,s as qs,g as Ql,h as qa,i as Ya,j as ja,k as Ka,m as ec,n as Ui,o as Za,q as Pr,r as Ja,t as tc,v as nc,u as ic,S as sc,G as rc,A as ac}from"./audio-B0tuBmSV.js";const q={wood:"#ae9476",lightWood:"#c4ae8d",dark:"#3d4c4e",white:"#f4efdd",green:"#446e60",blue:"#7e969e",brick:"#b97059",yellow:"#e5bd4a",grass:"#71987a"},ie=(s,e,t,n=[0,0,0])=>({shape:"box",p:s,s:e,color:t,r:n}),bt=(s,e,t,n=[0,0,0])=>({shape:"cyl",p:s,s:e,color:t,r:n}),Jn=(s,e,t)=>({shape:"sphere",p:s,s:e,color:t});function Lr(s){const{w:e,d:t,h:n,type:i}=s,r=(l=q.lightWood)=>[ie([0,n-.06,0],[e,.12,t],l),...[-1,1].flatMap(c=>[-1,1].map(u=>ie([c*(e/2-.12),(n-.12)/2,u*(t/2-.1)],[.09,n-.12,.09],q.dark)))],a=(l=q.blue)=>[ie([0,.46,0],[e,.1,t],l),ie([0,n*.75,-t*.45],[e,n*.5,.08],l),...[-1,1].flatMap(c=>[-1,1].map(u=>ie([c*e*.36,.23,u*t*.36],[.065,.46,.065],q.dark)))],o=(l=q.wood)=>[ie([-e/2+.06,n/2,0],[.12,n,t],l),ie([e/2-.06,n/2,0],[.12,n,t],l),ie([0,n/2,-t*.44],[e,n,.08],l),...Array.from({length:3},(c,u)=>ie([0,.12+u*(n-.18)/2,0],[e,.08,t],l))];switch(i){case"life_wall":return[ie([0,.5,0],[e,1,t],q.white),ie([0,1,0],[e+.02,.06,t],q.blue)];case"life_partition":return[ie([0,.55,0],[e,1.1,t],q.blue),ie([e*.3,.5,t*.6],[.08,.05,.04],q.dark)];case"flag_pole":return[bt([0,2,0],[.08,4,.08],q.white),ie([.45,3.6,0],[.85,.5,.04],q.brick),ie([.12,3.72,.03],[.25,.25,.02],q.blue)];case"student_desk":case"work_desk":case"principal_desk":case"nurse_desk":return[...r(),...i==="principal_desk"?[ie([0,n*.5,-t*.25],[e*.9,n*.85,.12],q.wood)]:[]];case"student_chair":case"visitor_chair":case"office_seat":case"high_chair":return a(i==="high_chair"?q.dark:i==="visitor_chair"?q.wood:q.blue);case"piano_bench":return[ie([0,.46,0],[e,.12,t],q.dark),ie([-e*.35,.23,0],[.09,.46,t*.8],q.dark),ie([e*.35,.23,0],[.09,.46,t*.8],q.dark)];case"short_bench":return[ie([0,.45,0],[e,.12,t],q.wood),ie([0,.72,-t*.45],[e,.45,.06],q.wood),ie([-e*.35,.22,0],[.12,.44,t*.8],q.dark),ie([e*.35,.22,0],[.12,.44,t*.8],q.dark)];case"counter":case"shop_counter":return[ie([0,n/2,0],[e,n,t],q.blue),ie([0,n,0],[e+.08,.08,t+.08],q.lightWood),ie([0,n*.5,t*.51],[e*.8,.09,.02],q.white)];case"low_shelf":case"instrument_shelf":case"equipment_rack":case"lost_found":return[...o(),ie([0,n,0],[e+.06,.08,t+.06],q.lightWood),...[-.3,.3].map(l=>ie([l*e,n*.48,.05],[.07,n*.8,t*.8],q.wood))];case"file_cabinet":return[ie([0,n/2,0],[e,n,t],q.blue),...Array.from({length:3},(l,c)=>ie([0,.3+c*.45,t*.51],[e*.8,.34,.03],q.white)),...Array.from({length:3},(l,c)=>ie([0,.35+c*.45,t*.55],[.2,.035,.04],q.dark))];case"trophy_shelf":return[...o(),...[-.55,.55].flatMap(l=>[bt([l,.76,-.18],[.16,.2,.16],q.yellow),{shape:"cone",p:[l,1,-.18],s:[.35,.32,.35],color:q.yellow}])];case"stock_shelf":return[...o(),...[-.55,0,.55].flatMap((l,c)=>[ie([l,.4,0],[.3,.35,.3],[q.brick,q.yellow,q.green][c]),ie([l,1,0],[.26,.4,.26],[q.blue,q.white,q.brick][c])])];case"fridge":return[ie([0,n/2,0],[e,n,t],q.white),ie([0,n*.55,t*.51],[e*.8,n*.7,.04],q.blue),ie([e*.32,n*.6,t*.55],[.05,.32,.05],q.dark),...[-.22,.22].map(l=>ie([l,.4,t*.54],[.18,.28,.04],q.green))];case"blackboard":case"music_board":return[ie([0,1.55,0],[e,.95,.12],q.wood),ie([0,1.55,.075],[e-.2,.8,.025],i==="music_board"?q.white:"#234c42"),ie([0,1.04,.15],[e,.065,.18],q.wood),...Array.from({length:i==="music_board"?5:3},(l,c)=>ie([-.5,1.35+c*.1,.096],[e*.45,.013,.012],i==="music_board"?q.dark:q.white)),...i==="music_board"?[Jn([.8,1.45,.12],[.1,.07,.04],q.dark),ie([.85,1.58,.12],[.02,.25,.015],q.dark)]:[]];case"notice":case"poster":case"honor":case"visitor_board":return[ie([0,1.5,0],[e,.9,.1],q.wood),...[-.3,0,.3].map((l,c)=>ie([l*e,1.5,.07],[e*.23,.5,.025],[q.yellow,q.blue,q.white][c]))];case"books":return[ie([0,.07,0],[.45,.1,.32],q.blue),ie([-.2,.07,0],[.035,.1,.32],q.dark),ie([.02,.11,0],[.38,.025,.28],q.white)];case"paper_tray":return[ie([0,1,0],[e,.06,t],q.blue),ie([0,1.07,0],[e*.9,.08,t*.9],q.white),ie([0,1.13,0],[e*.65,.02,t*.6],q.yellow)];case"pencil_cup":return[bt([0,1.03,0],[.18,.22,.18],q.blue),...[-.04,.04].map(l=>bt([l,1.2,0],[.02,.3,.02],q.dark))];case"cleaning_rack":return[ie([0,1.25,0],[e,.1,.2],q.wood),...[-.4,.4].map(l=>ie([l,1.05,.1],[.05,.35,.05],q.dark))];case"wig_stand":return[bt([0,1.04,0],[.1,.26,.1],q.dark),Jn([0,1.2,0],[.36,.4,.34],q.white)];case"triangle_rack":return[bt([-.4,.75,0],[.06,1.5,.06],q.dark),bt([.4,.75,0],[.06,1.5,.06],q.dark),ie([0,1.5,0],[1,.06,.06],q.dark),ie([0,.03,0],[1,.06,.5],q.dark)];case"drums":return[bt([0,.46,0],[.7,.75,.7],q.brick),bt([0,.85,0],[.72,.035,.72],q.white),bt([-.5,.75,.3],[.38,.4,.38],q.blue),bt([.55,1,0],[.62,.04,.62],q.yellow),bt([.55,.5,0],[.04,1,.04],q.dark)];case"formal_rug":case"rehearsal_mat":return[ie([0,.06,0],[e,.025,t],i==="formal_rug"?"#9b7370":"#a8bdb0")];case"garden":return[ie([0,.15,0],[e,.3,t],q.wood),ie([0,.32,0],[e-.2,.05,t-.2],q.grass),...[-.6,.6].map(l=>Jn([l,.5,.3],[.7,.45,.7],q.green))];case"tree":return[bt([0,1.1,0],[.25,2.2,.25],q.wood),Jn([0,2.35,0],[2.3,1.6,2.3],q.grass),Jn([.55,2.6,.25],[1.5,1.2,1.5],"#86a486")];case"plant":return[bt([0,.22,0],[.45,.45,.45],q.brick),Jn([0,.65,0],[.65,.7,.65],q.grass)];case"direction_post":return[bt([0,.9,0],[.08,1.8,.08],q.wood),ie([0,1.5,0],[1.5,.32,.1],q.green),ie([.2,1.12,0],[1.1,.26,.1],q.blue)];case"water_station":return[ie([0,.7,0],[e,1.4,t],q.blue),ie([0,1.08,t*.52],[e*.75,.33,.05],q.white),ie([0,.8,t*.58],[.13,.04,.17],q.dark)];case"wastebasket":return[bt([0,n/2,0],[e,n,t],q.blue),bt([0,n,0],[e*.8,.025,t*.8],q.dark)];case"basketball_hoop":return[ie([0,1.5,0],[.12,3,.12],q.dark),ie([0,2.8,.3],[1.5,.85,.09],q.white),ie([0,2.8,.36],[.45,.33,.015],q.blue),{shape:"torus",p:[0,2.45,.7],s:[.6,.6,.6],color:q.brick,r:[Math.PI/2,0,0]}];case"ball_crate":case"crate":return[ie([0,.1,0],[e,.2,t],q.wood),...[-1,1].map(l=>ie([l*e*.48,.3,0],[.05,.4,t],q.wood)),ie([0,.3,-t*.48],[e,.4,.05],q.wood)];case"guard_booth":return[ie([0,.05,0],[e,.1,t],"#c8c6b0"),ie([0,2,-t*.3],[e,.1,t*.45],q.blue),...[-1,1].map(l=>ie([l*e*.45,1,-t*.3],[.12,2,.12],q.blue)),ie([0,1.1,-t*.45],[e,.8,.08],q.white),ie([0,1.6,-t*.4],[e*.75,.35,.04],q.blue)];case"awning":return[ie([0,2.3,-.6],[e,.12,t*.4],q.brick),...[-1,1].map(l=>ie([l*e*.48,1.15,-t*.45],[.08,2.3,.08],q.wood))];case"queue_mark":return[ie([0,.035,0],[e,.015,t],q.yellow)];case"medical_bed":return[ie([0,.38,0],[e,.55,t],q.white),ie([0,.68,0],[e,.12,t],q.blue),ie([0,.79,-t*.35],[e*.8,.15,.45],q.white),ie([0,.76,t*.15],[e,.1,t*.55],"#a7bdb8"),...[-1,1].map(l=>ie([l*e*.45,.3,0],[.07,.6,t*.8],q.dark))];case"medical_cabinet":return[ie([0,n/2,0],[e,n,t],q.white),ie([0,n*.65,t*.51],[.38,.3,.03],q.green),ie([-.05,n*.68,t*.54],[.18,.03,.02],q.white),ie([.1,n*.75,t*.54],[.025,.18,.02],q.white)];case"screen":return[ie([0,.8,0],[.08,1.25,t],q.blue),ie([0,.05,0],[.45,.1,t],q.dark)];case"stage":return[ie([0,.12,0],[e,.24,t],q.wood)];case"stage_steps":return[ie([0,.06,0],[e,.12,t],q.wood)];case"stage_backdrop":return[ie([0,1,0],[e,1.6,.08],q.green)];case"bunting":return Array.from({length:8},(l,c)=>({shape:"cone",p:[-e/2+c*e/7,2.1,0],s:[.5,.55,.035],color:c%2?q.brick:q.yellow,r:[0,0,Math.PI]}));default:return r()}}function oc(s){return s<=10?"critical":s<=25?"low":"normal"}function lc(s){const e=[];if(s.meeting.running)return e;const t=s.step,n=vi.find(i=>i.id===s.profile.dogs.activeQuest);if(n&&e.push({...n.goal,label:"校狗任務"}),t&&["place","deliver"].includes(t.kind))for(let i=0;i<(t.count||1);i++)e.push({...dl(t,i),label:t.kind==="place"?"定位":"交付"});if(s.held?.type==="exam_papers"&&(s.tutorial===2||!t)&&e.push({...Zl.podium,label:"放下考卷"}),t?.kind==="return"){const i=[...s.objects.values()].find(r=>r.type===t.item&&r.owner===s.player.id);i&&e.push({...i.home,label:"歸還"})}if(s.race){const i=[[-25,15],[-25,21],[-18,21],[-18,15],[-21,15]],r=i[s.race.checkpoint];r&&e.push({x:r[0],z:r[1],label:"路點"})}return e.filter((i,r)=>e.findIndex(a=>a.x===i.x&&a.z===i.z)===r).slice(0,24)}function cc(s,e,t){const n=s/e<1?13:11.5,i=s<=600||t&&Math.min(s,e)<=600;return n/(i?2.2:1)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="180",hc=0,Qa=1,uc=2,fl=1,dc=2,gn=3,Ln=0,Dt=1,_n=2,Rn=0,Si=1,eo=2,to=3,no=4,fc=5,Xn=100,pc=101,mc=102,gc=103,_c=104,vc=200,xc=201,Mc=202,Sc=203,Dr=204,Ir=205,yc=206,bc=207,Ec=208,Tc=209,wc=210,Ac=211,Rc=212,Cc=213,Pc=214,Ur=0,Nr=1,Fr=2,bi=3,Or=4,Br=5,kr=6,zr=7,Ea=0,Lc=1,Dc=2,Cn=0,Ic=1,Uc=2,Nc=3,Fc=4,Oc=5,Bc=6,kc=7,pl=300,Ei=301,Ti=302,Hr=303,Vr=304,zs=306,Gr=1e3,qn=1001,Wr=1002,kt=1003,zc=1004,ns=1005,rn=1006,Ys=1007,Yn=1008,ln=1009,ml=1010,gl=1011,$i=1012,Ta=1013,jn=1014,an=1015,Zi=1016,wa=1017,Aa=1018,qi=1020,_l=35902,vl=35899,xl=1021,Ml=1022,Jt=1023,Yi=1026,ji=1027,Ra=1028,Ca=1029,Sl=1030,Pa=1031,La=1033,Rs=33776,Cs=33777,Ps=33778,Ls=33779,Xr=35840,$r=35841,qr=35842,Yr=35843,jr=36196,Kr=37492,Zr=37496,Jr=37808,Qr=37809,ea=37810,ta=37811,na=37812,ia=37813,sa=37814,ra=37815,aa=37816,oa=37817,la=37818,ca=37819,ha=37820,ua=37821,da=36492,fa=36494,pa=36495,ma=36283,ga=36284,_a=36285,va=36286,Hc=3200,Vc=3201,yl=0,Gc=1,An="",Ot="srgb",wi="srgb-linear",Is="linear",tt="srgb",Qn=7680,io=519,Wc=512,Xc=513,$c=514,bl=515,qc=516,Yc=517,jc=518,Kc=519,xa=35044,so=35048,ro="300 es",on=2e3,Us=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,Ma=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[s&255]+Tt[s>>8&255]+Tt[s>>16&255]+Tt[s>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Zc(s,e){return(s%e+e)%e}function Ks(s,e,t){return(1-t)*s+t*e}function nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],g=r[a+1],p=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==f||c!==g||u!==p){let m=1-o;const d=l*f+c*g+u*p+h*x,w=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const C=Math.sqrt(T),R=Math.atan2(C,d*w);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const S=o*w;if(l=l*m+f*S,c=c*m+g*S,u=u*m+p*S,h=h*m+x*S,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],g=r[a+2],p=r[a+3];return e[t]=o*p+u*h+l*g-c*f,e[t+1]=l*p+u*f+c*h-o*g,e[t+2]=c*p+u*g+o*f-l*h,e[t+3]=u*p-o*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),g=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*g*p,this._y=c*g*h-f*u*p,this._z=c*u*p+f*g*h,this._w=c*u*h-f*g*p;break;case"YXZ":this._x=f*u*h+c*g*p,this._y=c*g*h-f*u*p,this._z=c*u*p-f*g*h,this._w=c*u*h+f*g*p;break;case"ZXY":this._x=f*u*h-c*g*p,this._y=c*g*h+f*u*p,this._z=c*u*p+f*g*h,this._w=c*u*h-f*g*p;break;case"ZYX":this._x=f*u*h-c*g*p,this._y=c*g*h+f*u*p,this._z=c*u*p-f*g*h,this._w=c*u*h+f*g*p;break;case"YZX":this._x=f*u*h+c*g*p,this._y=c*g*h+f*u*p,this._z=c*u*p-f*g*h,this._w=c*u*h-f*g*p;break;case"XZY":this._x=f*u*h-c*g*p,this._y=c*g*h-f*u*p,this._z=c*u*p+f*g*h,this._w=c*u*h+f*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-i)*g}else if(n>o&&n>h){const g=2*Math.sqrt(1+n-o-h);this._w=(u-l)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-n-h);this._w=(r-c)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-n-o);this._w=(a-i)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new F,ao=new Ji;class ke{constructor(e,t,n,i,r,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],g=n[5],p=n[8],x=i[0],m=i[3],d=i[6],w=i[1],T=i[4],S=i[7],C=i[2],R=i[5],I=i[8];return r[0]=a*x+o*w+l*C,r[3]=a*m+o*T+l*R,r[6]=a*d+o*S+l*I,r[1]=c*x+u*w+h*C,r[4]=c*m+u*T+h*R,r[7]=c*d+u*S+h*I,r[2]=f*x+g*w+p*C,r[5]=f*m+g*T+p*R,r[8]=f*d+g*S+p*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,g=c*r-a*l,p=t*h+n*f+i*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=g*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new ke;function El(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jc(){const s=Ns("canvas");return s.style.display="block",s}const oo={};function Ki(s){s in oo||(oo[s]=!0,console.warn(s))}function Qc(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const lo=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eh(){const s={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?Is:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wi]:{primaries:e,whitePoint:n,transfer:Is,toXYZ:lo,fromXYZ:co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:lo,fromXYZ:co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),s}const Ke=eh();function vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ei;class th{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=Ns("canvas")),ei.width=e.width,ei.height=e.height;const i=ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nh=0;class Da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Qs(i[a].image)):r.push(Qs(i[a]))}else r=Qs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?th.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ih=0;const er=new F;class At extends Ci{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=qn,i=qn,r=rn,a=Yn,o=Jt,l=ln,c=At.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Pn(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=pl;At.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],g=l[5],p=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(g+1)/2,C=(d+1)/2,R=(u+f)/4,I=(h+x)/4,O=(p+m)/4;return T>S&&T>C?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=R/n,r=I/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=O/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=I/r,i=O/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-p)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sh extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new At(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Da(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tl extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rh extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),ss.subVectors(this.max,Ni),ti.subVectors(e.a,Ni),ni.subVectors(e.b,Ni),ii.subVectors(e.c,Ni),xn.subVectors(ni,ti),Mn.subVectors(ii,ni),On.subVectors(ti,ii);let t=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-On.z,On.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,On.z,0,-On.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-On.y,On.x,0];return!tr(t,ti,ni,ii,ss)||(t=[1,0,0,0,1,0,0,0,1],!tr(t,ti,ni,ii,ss))?!1:(rs.crossVectors(xn,Mn),t=[rs.x,rs.y,rs.z],tr(t,ti,ni,ii,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new F,new F,new F,new F,new F,new F,new F,new F],Yt=new F,is=new Un,ti=new F,ni=new F,ii=new F,xn=new F,Mn=new F,On=new F,Ni=new F,ss=new F,rs=new F,Bn=new F;function tr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ah=new Un,Fi=new F,nr=new F;class Qi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ah.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(nr)),this.expandByPoint(Fi.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dn=new F,ir=new F,as=new F,Sn=new F,sr=new F,os=new F,rr=new F;class wl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ir.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(ir);const r=e.distanceTo(t)*.5,a=-this.direction.dot(as),o=Sn.dot(this.direction),l=-Sn.dot(as),c=Sn.lengthSq(),u=Math.abs(1-a*a);let h,f,g,p;if(u>0)if(h=a*l-o,f=a*o-l,p=r*u,h>=0)if(f>=-p)if(f<=p){const x=1/u;h*=x,f*=x,g=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ir).addScaledVector(as,f),g}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,r){sr.subVectors(t,e),os.subVectors(n,e),rr.crossVectors(sr,os);let a=this.direction.dot(rr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const l=o*this.direction.dot(os.crossVectors(Sn,os));if(l<0)return null;const c=o*this.direction.dot(sr.cross(Sn));if(c<0||l+c>a)return null;const u=-o*Sn.dot(rr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,a,o,l,c,u,h,f,g,p,x,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,g,p,x,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,g,p,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=g,d[7]=p,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,g=a*h,p=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+p*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=p+g*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,g=l*h,p=c*u,x=c*h;t[0]=f+x*o,t[4]=p*o-g,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=g*o-p,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,g=l*h,p=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=p+g*o,t[1]=g+p*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,g=a*h,p=o*u,x=o*h;t[0]=l*u,t[4]=p*c-g,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=g*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*c,p=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=p*h+g,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*h+p,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,g=a*c,p=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=g*h-p,t[2]=p*h-g,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oh,e,lh)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),yn.crossVectors(n,Nt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),yn.crossVectors(n,Nt)),yn.normalize(),ls.crossVectors(Nt,yn),i[0]=yn.x,i[4]=ls.x,i[8]=Nt.x,i[1]=yn.y,i[5]=ls.y,i[9]=Nt.y,i[2]=yn.z,i[6]=ls.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],g=n[13],p=n[2],x=n[6],m=n[10],d=n[14],w=n[3],T=n[7],S=n[11],C=n[15],R=i[0],I=i[4],O=i[8],y=i[12],M=i[1],D=i[5],k=i[9],V=i[13],X=i[2],j=i[6],$=i[10],ae=i[14],G=i[3],he=i[7],pe=i[11],Ae=i[15];return r[0]=a*R+o*M+l*X+c*G,r[4]=a*I+o*D+l*j+c*he,r[8]=a*O+o*k+l*$+c*pe,r[12]=a*y+o*V+l*ae+c*Ae,r[1]=u*R+h*M+f*X+g*G,r[5]=u*I+h*D+f*j+g*he,r[9]=u*O+h*k+f*$+g*pe,r[13]=u*y+h*V+f*ae+g*Ae,r[2]=p*R+x*M+m*X+d*G,r[6]=p*I+x*D+m*j+d*he,r[10]=p*O+x*k+m*$+d*pe,r[14]=p*y+x*V+m*ae+d*Ae,r[3]=w*R+T*M+S*X+C*G,r[7]=w*I+T*D+S*j+C*he,r[11]=w*O+T*k+S*$+C*pe,r[15]=w*y+T*V+S*ae+C*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],g=e[14],p=e[3],x=e[7],m=e[11],d=e[15];return p*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*g-n*l*g)+x*(+t*l*g-t*c*f+r*a*f-i*a*g+i*c*u-r*l*u)+m*(+t*c*h-t*o*g-r*a*h+n*a*g+r*o*u-n*c*u)+d*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],g=e[11],p=e[12],x=e[13],m=e[14],d=e[15],w=h*m*c-x*f*c+x*l*g-o*m*g-h*l*d+o*f*d,T=p*f*c-u*m*c-p*l*g+a*m*g+u*l*d-a*f*d,S=u*x*c-p*h*c+p*o*g-a*x*g-u*o*d+a*h*d,C=p*h*l-u*x*l-p*o*f+a*x*f+u*o*m-a*h*m,R=t*w+n*T+i*S+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=w*I,e[1]=(x*f*r-h*m*r-x*i*g+n*m*g+h*i*d-n*f*d)*I,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*d+n*l*d)*I,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*g-n*l*g)*I,e[4]=T*I,e[5]=(u*m*r-p*f*r+p*i*g-t*m*g-u*i*d+t*f*d)*I,e[6]=(p*l*r-a*m*r-p*i*c+t*m*c+a*i*d-t*l*d)*I,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*g+t*l*g)*I,e[8]=S*I,e[9]=(p*h*r-u*x*r-p*n*g+t*x*g+u*n*d-t*h*d)*I,e[10]=(a*x*r-p*o*r+p*n*c-t*x*c-a*n*d+t*o*d)*I,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*g-t*o*g)*I,e[12]=C*I,e[13]=(u*x*i-p*h*i+p*n*f-t*x*f-u*n*m+t*h*m)*I,e[14]=(p*o*i-a*x*i-p*n*l+t*x*l+a*n*m-t*o*m)*I,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,g=r*u,p=r*h,x=a*u,m=a*h,d=o*h,w=l*c,T=l*u,S=l*h,C=n.x,R=n.y,I=n.z;return i[0]=(1-(x+d))*C,i[1]=(g+S)*C,i[2]=(p-T)*C,i[3]=0,i[4]=(g-S)*R,i[5]=(1-(f+d))*R,i[6]=(m+w)*R,i[7]=0,i[8]=(p+T)*I,i[9]=(m-w)*I,i[10]=(1-(f+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),o=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jt.copy(this);const c=1/r,u=1/a,h=1/o;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=on,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),g=(n+i)/(n-i);let p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===on)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Us)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=on,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),g=-(n+i)/(n-i);let p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===on)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Us)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new F,jt=new at,oh=new F(0,0,0),lh=new F(1,1,1),yn=new F,ls=new F,Nt=new F,ho=new at,uo=new Ji;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ho,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Ia{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ch=0;const fo=new F,ri=new Ji,fn=new at,cs=new F,Oi=new F,hh=new F,uh=new Ji,po=new F(1,0,0),mo=new F(0,1,0),go=new F(0,0,1),_o={type:"added"},dh={type:"removed"},ai={type:"childadded",child:null},ar={type:"childremoved",child:null};class _t extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new F,t=new cn,n=new Ji,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(go,e)}translateOnAxis(e,t){return fo.copy(e).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Oi,cs,this.up):fn.lookAt(cs,Oi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(fn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_o),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dh),ar.child=e,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_o),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),g=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new F(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new F,pn=new F,or=new F,mn=new F,oi=new F,li=new F,vo=new F,lr=new F,cr=new F,hr=new F,ur=new pt,dr=new pt,fr=new pt;class Wt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kt.subVectors(i,t),pn.subVectors(n,t),or.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(pn),l=Kt.dot(or),c=pn.dot(pn),u=pn.dot(or),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,g=(c*l-o*u)*f,p=(a*u-o*l)*f;return r.set(1-g-p,p,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ur.setScalar(0),dr.setScalar(0),fr.setScalar(0),ur.fromBufferAttribute(e,t),dr.fromBufferAttribute(e,n),fr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ur,r.x),a.addScaledVector(dr,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),pn.subVectors(e,t),Kt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Kt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;oi.subVectors(i,n),li.subVectors(r,n),lr.subVectors(e,n);const l=oi.dot(lr),c=li.dot(lr);if(l<=0&&c<=0)return t.copy(n);cr.subVectors(e,i);const u=oi.dot(cr),h=li.dot(cr);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(oi,a);hr.subVectors(e,r);const g=oi.dot(hr),p=li.dot(hr);if(p>=0&&g<=p)return t.copy(r);const x=g*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(li,o);const m=u*p-g*h;if(m<=0&&h-u>=0&&g-p>=0)return vo.subVectors(r,i),o=(h-u)/(h-u+(g-p)),t.copy(i).addScaledVector(vo,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function pr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Zc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.workingToColorSpace(wt.copy(this),e),Math.round($e(wt.r*255,0,255))*65536+Math.round($e(wt.g*255,0,255))*256+Math.round($e(wt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ot){Ke.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(hs);const n=Ks(bn.h,hs.h,t),i=Ks(bn.s,hs.s,t),r=Ks(bn.l,hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new qe;qe.NAMES=Al;let fh=0;class Pi extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Si,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dr,this.blendDst=Ir,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ua extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new F,us=new ze;let ph=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ph++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xa,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xa&&(e.usage=this.usage),e}}class Rl extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cl extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mh=0;const Gt=new at,mr=new _t,ci=new F,Ft=new Un,Bi=new Un,yt=new F;class qt extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Cl:Rl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return mr.lookAt(e),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ft.min,Bi.min),Ft.expandByPoint(yt),yt.addVectors(Ft.max,Bi.max),Ft.expandByPoint(yt)):(Ft.expandByPoint(Bi.min),Ft.expandByPoint(Bi.max))}Ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),yt.add(ci)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new F,l[O]=new F;const c=new F,u=new F,h=new F,f=new ze,g=new ze,p=new ze,x=new F,m=new F;function d(O,y,M){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,y),p.fromBufferAttribute(r,M),u.sub(c),h.sub(c),g.sub(f),p.sub(f);const D=1/(g.x*p.y-p.x*g.y);isFinite(D)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-g.y).multiplyScalar(D),m.copy(h).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(D),o[O].add(x),o[y].add(x),o[M].add(x),l[O].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,y=w.length;O<y;++O){const M=w[O],D=M.start,k=M.count;for(let V=D,X=D+k;V<X;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new F,S=new F,C=new F,R=new F;function I(O){C.fromBufferAttribute(i,O),R.copy(C);const y=o[O];T.copy(y),T.sub(C.multiplyScalar(C.dot(y))).normalize(),S.crossVectors(R,y);const D=S.dot(l[O])<0?-1:1;a.setXYZW(O,T.x,T.y,T.z,D)}for(let O=0,y=w.length;O<y;++O){const M=w[O],D=M.start,k=M.count;for(let V=D,X=D+k;V<X;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,g=e.count;f<g;f+=3){const p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let g=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?g=l[x]*o.data.stride+o.offset:g=l[x]*u;for(let d=0;d<u;d++)f[p++]=c[g++]}return new $t(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],g=e(f,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new at,kn=new wl,ds=new Qi,Mo=new F,fs=new F,ps=new F,ms=new F,gr=new F,gs=new F,So=new F,_s=new F;class Xt extends _t{constructor(e=new qt,t=new Ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(gr.fromBufferAttribute(h,e),a?gs.addScaledVector(gr,u):gs.addScaledVector(gr.sub(t),u))}t.add(gs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),kn.copy(e.ray).recast(e.near),!(ds.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ds,Mo)===null||kn.origin.distanceToSquared(Mo)>(e.far-e.near)**2))&&(xo.copy(r).invert(),kn.copy(e.ray).applyMatrix4(xo),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){const m=f[p],d=a[m.materialIndex],w=Math.max(m.start,g.start),T=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,C=T;S<C;S+=3){const R=o.getX(S),I=o.getX(S+1),O=o.getX(S+2);i=vs(this,d,e,n,c,u,h,R,I,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=p,d=x;m<d;m+=3){const w=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);i=vs(this,a,e,n,c,u,h,w,T,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){const m=f[p],d=a[m.materialIndex],w=Math.max(m.start,g.start),T=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,C=T;S<C;S+=3){const R=S,I=S+1,O=S+2;i=vs(this,d,e,n,c,u,h,R,I,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=p,d=x;m<d;m+=3){const w=m,T=m+1,S=m+2;i=vs(this,a,e,n,c,u,h,w,T,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function gh(s,e,t,n,i,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ln,o),l===null)return null;_s.copy(o),_s.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:s}}function vs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,fs),s.getVertexPosition(l,ps),s.getVertexPosition(c,ms);const u=gh(s,e,t,n,fs,ps,ms,So);if(u){const h=new F;Wt.getBarycoord(So,fs,ps,ms,h),i&&(u.uv=Wt.getInterpolatedAttribute(i,o,l,c,h,new ze)),r&&(u.uv1=Wt.getInterpolatedAttribute(r,o,l,c,h,new ze)),a&&(u.normal=Wt.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Wt.getNormal(fs,ps,ms,f.normal),u.face=f,u.barycoord=h}return u}class Li extends qt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,g=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function p(x,m,d,w,T,S,C,R,I,O,y){const M=S/I,D=C/O,k=S/2,V=C/2,X=R/2,j=I+1,$=O+1;let ae=0,G=0;const he=new F;for(let pe=0;pe<$;pe++){const Ae=pe*D-V;for(let We=0;We<j;We++){const st=We*M-k;he[x]=st*w,he[m]=Ae*T,he[d]=X,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[d]=R>0?1:-1,u.push(he.x,he.y,he.z),h.push(We/I),h.push(1-pe/O),ae+=1}}for(let pe=0;pe<O;pe++)for(let Ae=0;Ae<I;Ae++){const We=f+Ae+j*pe,st=f+Ae+j*(pe+1),lt=f+(Ae+1)+j*(pe+1),Ze=f+(Ae+1)+j*pe;l.push(We,st,Ze),l.push(st,lt,Ze),G+=6}o.addGroup(g,G,y),g+=G,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const n=Ai(s[t]);for(const i in n)e[i]=n[i]}return e}function _h(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const vh={clone:Ai,merge:Pt};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=Mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=_h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ll extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new F,yo=new ze,bo=new ze;class Zt extends Ll{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,yo,bo),t.subVectors(bo,yo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class Sh extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(hi,ui,e,t);i.layers=this.layers,this.add(i);const r=new Zt(hi,ui,e,t);r.layers=this.layers,this.add(r);const a=new Zt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Zt(hi,ui,e,t);o.layers=this.layers,this.add(o);const l=new Zt(hi,ui,e,t);l.layers=this.layers,this.add(l);const c=new Zt(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,g),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Dl extends At{constructor(e=[],t=Ei,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yh extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Dl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Li(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Rn});r.uniforms.tEquirect.value=t;const a=new Xt(i,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=rn),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class xs extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bh={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,p=.005;c.inputState.pinching&&f>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Eo extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xa,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new F;class Fs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Il extends Pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let di;const ki=new F,fi=new F,pi=new F,mi=new ze,zi=new ze,Ul=new at,Ms=new F,Hi=new F,Ss=new F,To=new ze,vr=new ze,wo=new ze;class Th extends _t{constructor(e=new Il){if(super(),this.isSprite=!0,this.type="Sprite",di===void 0){di=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eh(t,5);di.setIndex([0,1,2,0,2,3]),di.setAttribute("position",new Fs(n,3,0,!1)),di.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=di,this.material=e,this.center=new ze(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),Ul.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-pi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ys(Ms.set(-.5,-.5,0),pi,a,fi,i,r),ys(Hi.set(.5,-.5,0),pi,a,fi,i,r),ys(Ss.set(.5,.5,0),pi,a,fi,i,r),To.set(0,0),vr.set(1,0),wo.set(1,1);let o=e.ray.intersectTriangle(Ms,Hi,Ss,!1,ki);if(o===null&&(ys(Hi.set(-.5,.5,0),pi,a,fi,i,r),vr.set(0,1),o=e.ray.intersectTriangle(Ms,Ss,Hi,!1,ki),o===null))return;const l=e.ray.origin.distanceTo(ki);l<e.near||l>e.far||t.push({distance:l,point:ki.clone(),uv:Wt.getInterpolation(ki,Ms,Hi,Ss,To,vr,wo,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ys(s,e,t,n,i,r){mi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(zi.x=r*mi.x-i*mi.y,zi.y=i*mi.x+r*mi.y):zi.copy(mi),s.copy(e),s.x+=zi.x,s.y+=zi.y,s.applyMatrix4(Ul)}class wh extends At{constructor(e=null,t=1,n=1,i,r,a,o,l,c=kt,u=kt,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new at,Ro=new at,bs=[],Co=new Un,Ah=new at,Vi=new Xt,Gi=new Qi;class Po extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ah)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Co.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(Co)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Gi.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Gi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),e.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gi),Ro.multiplyMatrices(n,gi),Vi.matrixWorld=Ro,Vi.raycast(e,bs);for(let a=0,o=bs.length;a<o;a++){const l=bs[a];l.instanceId=r,l.object=this,t.push(l)}bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wh(new Float32Array(i*this.count),i,this.count,Ra,an));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xr=new F,Rh=new F,Ch=new ke;class Tn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xr.subVectors(n,t).cross(Rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ch.getNormalMatrix(e),i=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Qi,Ph=new ze(.5,.5),Es=new F;class Na{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],g=r[7],p=r[8],x=r[9],m=r[10],d=r[11],w=r[12],T=r[13],S=r[14],C=r[15];if(i[0].setComponents(c-a,g-u,d-p,C-w).normalize(),i[1].setComponents(c+a,g+u,d+p,C+w).normalize(),i[2].setComponents(c+o,g+h,d+x,C+T).normalize(),i[3].setComponents(c-o,g-h,d-x,C-T).normalize(),n)i[4].setComponents(l,f,m,S).normalize(),i[5].setComponents(c-l,g-f,d-m,C-S).normalize();else if(i[4].setComponents(c-l,g-f,d-m,C-S).normalize(),t===on)i[5].setComponents(c+l,g+f,d+m,C+S).normalize();else if(t===Us)i[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=Ph.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Es.x=i.normal.x>0?e.max.x:e.min.x,Es.y=i.normal.y>0?e.max.y:e.min.y,Es.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lh extends At{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nl extends At{constructor(e,t,n=jn,i,r,a,o=kt,l=kt,c,u=Yi,h=1){if(u!==Yi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fa extends qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new F,u=new ze;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const g=n+h/t*i;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hs extends qt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],g=[];let p=0;const x=[],m=n/2;let d=0;w(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(g,2));function w(){const S=new F,C=new F;let R=0;const I=(t-e)/n;for(let O=0;O<=r;O++){const y=[],M=O/r,D=M*(t-e)+e;for(let k=0;k<=i;k++){const V=k/i,X=V*l+o,j=Math.sin(X),$=Math.cos(X);C.x=D*j,C.y=-M*n+m,C.z=D*$,h.push(C.x,C.y,C.z),S.set(j,I,$).normalize(),f.push(S.x,S.y,S.z),g.push(V,1-M),y.push(p++)}x.push(y)}for(let O=0;O<i;O++)for(let y=0;y<r;y++){const M=x[y][O],D=x[y+1][O],k=x[y+1][O+1],V=x[y][O+1];(e>0||y!==0)&&(u.push(M,D,V),R+=3),(t>0||y!==r-1)&&(u.push(D,k,V),R+=3)}c.addGroup(d,R,0),d+=R}function T(S){const C=p,R=new ze,I=new F;let O=0;const y=S===!0?e:t,M=S===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,m*M,0),f.push(0,M,0),g.push(.5,.5),p++;const D=p;for(let k=0;k<=i;k++){const X=k/i*l+o,j=Math.cos(X),$=Math.sin(X);I.x=y*$,I.y=m*M,I.z=y*j,h.push(I.x,I.y,I.z),f.push(0,M,0),R.x=j*.5+.5,R.y=$*.5*M+.5,g.push(R.x,R.y),p++}for(let k=0;k<i;k++){const V=C+k,X=D+k;S===!0?u.push(X,X+1,V):u.push(X+1,X,V),O+=3}c.addGroup(d,O,S===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Os extends Hs{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Os(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vs extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,g=[],p=[],x=[],m=[];for(let d=0;d<u;d++){const w=d*f-a;for(let T=0;T<c;T++){const S=T*h-r;p.push(S,-w,0),x.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const T=w+c*d,S=w+c*(d+1),C=w+1+c*(d+1),R=w+1+c*d;g.push(T,S,R),g.push(S,C,R)}this.setIndex(g),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oa extends qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new F,f=new F,g=[],p=[],x=[],m=[];for(let d=0;d<=n;d++){const w=[],T=d/n;let S=0;d===0&&a===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const R=C/t;h.x=-e*Math.cos(i+R*r)*Math.sin(a+T*o),h.y=e*Math.cos(a+T*o),h.z=e*Math.sin(i+R*r)*Math.sin(a+T*o),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(R+S,1-T),w.push(c++)}u.push(w)}for(let d=0;d<n;d++)for(let w=0;w<t;w++){const T=u[d][w+1],S=u[d][w],C=u[d+1][w],R=u[d+1][w+1];(d!==0||a>0)&&g.push(T,S,R),(d!==n-1||l<Math.PI)&&g.push(S,C,R)}this.setIndex(g),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xi extends qt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new F,h=new F,f=new F;for(let g=0;g<=n;g++)for(let p=0;p<=i;p++){const x=p/i*r,m=g/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(g/n)}for(let g=1;g<=n;g++)for(let p=1;p<=i;p++){const x=(i+1)*g+p-1,m=(i+1)*(g-1)+p-1,d=(i+1)*(g-1)+p,w=(i+1)*g+p;a.push(x,m,w),a.push(m,d,w)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lo extends Pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dh extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ih extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ba extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Uh extends Ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Mr=new at,Do=new F,Io=new F;class Nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Do.setFromMatrixPosition(e.matrixWorld),t.position.copy(Do),Io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Io),t.updateMatrixWorld(),Mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bs extends Ll{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fh extends Nh{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uo extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Oh extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bh extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const No=new at;class kh{constructor(e,t,n=0,i=1/0){this.ray=new wl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return No.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(No),this}intersectObject(e,t=!0,n=[]){return Sa(e,this,n,t),n.sort(Fo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Sa(e[i],this,n,t);return n.sort(Fo),n}}function Fo(s,e){return s.distance-e.distance}function Sa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Sa(r[a],e,t,!0)}}function Oo(s,e,t,n){const i=zh(n);switch(t){case xl:return s*e;case Ra:return s*e/i.components*i.byteLength;case Ca:return s*e/i.components*i.byteLength;case Sl:return s*e*2/i.components*i.byteLength;case Pa:return s*e*2/i.components*i.byteLength;case Ml:return s*e*3/i.components*i.byteLength;case Jt:return s*e*4/i.components*i.byteLength;case La:return s*e*4/i.components*i.byteLength;case Rs:case Cs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ls:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $r:case Yr:return Math.max(s,16)*Math.max(e,8)/4;case Xr:case qr:return Math.max(s,8)*Math.max(e,8)/2;case jr:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case na:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case aa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case la:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ca:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case da:case fa:case pa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ma:case ga:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _a:case va:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zh(s){switch(s){case ln:case ml:return{byteLength:1,components:1};case $i:case gl:case Zi:return{byteLength:2,components:1};case wa:case Aa:return{byteLength:2,components:4};case jn:case Ta:case an:return{byteLength:4,components:1};case _l:case vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ol(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hh(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=s.SHORT;else if(c instanceof Uint32Array)g=s.UNSIGNED_INT;else if(c instanceof Int32Array)g=s.INT;else if(c instanceof Int8Array)g=s.BYTE;else if(c instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((g,p)=>g.start-p.start);let f=0;for(let g=1;g<h.length;g++){const p=h[f],x=h[g];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let g=0,p=h.length;g<p;g++){const x=h[g];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,of=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ff=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Vh,alphahash_pars_fragment:Gh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:$h,alphatest_pars_fragment:qh,aomap_fragment:Yh,aomap_pars_fragment:jh,batching_pars_vertex:Kh,batching_vertex:Zh,begin_vertex:Jh,beginnormal_vertex:Qh,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ru,clipping_planes_vertex:au,color_fragment:ou,color_pars_fragment:lu,color_pars_vertex:cu,color_vertex:hu,common:uu,cube_uv_reflection_fragment:du,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:_u,colorspace_fragment:vu,colorspace_pars_fragment:xu,envmap_fragment:Mu,envmap_common_pars_fragment:Su,envmap_pars_fragment:yu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Uu,envmap_vertex:Eu,fog_vertex:Tu,fog_pars_vertex:wu,fog_fragment:Au,fog_pars_fragment:Ru,gradientmap_pars_fragment:Cu,lightmap_pars_fragment:Pu,lights_lambert_fragment:Lu,lights_lambert_pars_fragment:Du,lights_pars_begin:Iu,lights_toon_fragment:Nu,lights_toon_pars_fragment:Fu,lights_phong_fragment:Ou,lights_phong_pars_fragment:Bu,lights_physical_fragment:ku,lights_physical_pars_fragment:zu,lights_fragment_begin:Hu,lights_fragment_maps:Vu,lights_fragment_end:Gu,logdepthbuf_fragment:Wu,logdepthbuf_pars_fragment:Xu,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:qu,map_fragment:Yu,map_pars_fragment:ju,map_particle_fragment:Ku,map_particle_pars_fragment:Zu,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:Qu,morphinstance_vertex:ed,morphcolor_vertex:td,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:sd,normal_fragment_begin:rd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:ld,normal_vertex:cd,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:vd,dithering_fragment:xd,dithering_pars_fragment:Md,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Ed,shadowmap_vertex:Td,shadowmask_pars_fragment:wd,skinbase_vertex:Ad,skinning_pars_vertex:Rd,skinning_vertex:Cd,skinnormal_vertex:Pd,specularmap_fragment:Ld,specularmap_pars_fragment:Dd,tonemapping_fragment:Id,tonemapping_pars_fragment:Ud,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:Bd,uv_vertex:kd,worldpos_vertex:zd,background_vert:Hd,background_frag:Vd,backgroundCube_vert:Gd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:$d,depth_vert:qd,depth_frag:Yd,distanceRGBA_vert:jd,distanceRGBA_frag:Kd,equirect_vert:Zd,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:rf,meshmatcap_vert:af,meshmatcap_frag:of,meshnormal_vert:lf,meshnormal_frag:cf,meshphong_vert:hf,meshphong_frag:uf,meshphysical_vert:df,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:_f,shadow_vert:vf,shadow_frag:xf,sprite_vert:Mf,sprite_frag:Sf},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},tn={basic:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Pt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Pt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Pt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Pt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Pt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};tn.physical={uniforms:Pt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ts={r:0,b:0,g:0},Hn=new cn,yf=new at;function bf(s,e,t,n,i,r,a){const o=new qe(0);let l=r===!0?0:1,c,u,h=null,f=0,g=null;function p(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const C=p(T);C===null?d(o,l):C&&C.isColor&&(d(C,1),S=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,S){const C=p(S);C&&(C.isCubeTexture||C.mapping===zs)?(u===void 0&&(u=new Xt(new Li(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ai(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hn.copy(S.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yf.makeRotationFromEuler(Hn)),u.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,(h!==C||f!==C.version||g!==s.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,g=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Xt(new Vs(2,2),new In({name:"BackgroundMaterial",uniforms:Ai(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||g!==s.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,g=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,S){T.getRGB(Ts,Pl(s)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,S,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:x,addToRenderList:m,dispose:w}}function Ef(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,D,k,V,X){let j=!1;const $=h(V,k,D);r!==$&&(r=$,c(r.object)),j=g(M,V,k,X),j&&p(M,V,k,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(M,D,k,V),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,D,k){const V=k.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let $=j[V];return $===void 0&&($=f(l()),j[V]=$),$}function f(M){const D=[],k=[],V=[];for(let X=0;X<t;X++)D[X]=0,k[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:V,object:M,attributes:{},index:null}}function g(M,D,k,V){const X=r.attributes,j=D.attributes;let $=0;const ae=k.getAttributes();for(const G in ae)if(ae[G].location>=0){const pe=X[G];let Ae=j[G];if(Ae===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),pe===void 0||pe.attribute!==Ae||Ae&&pe.data!==Ae.data)return!0;$++}return r.attributesNum!==$||r.index!==V}function p(M,D,k,V){const X={},j=D.attributes;let $=0;const ae=k.getAttributes();for(const G in ae)if(ae[G].location>=0){let pe=j[G];pe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const Ae={};Ae.attribute=pe,pe&&pe.data&&(Ae.data=pe.data),X[G]=Ae,$++}r.attributes=X,r.attributesNum=$,r.index=V}function x(){const M=r.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const k=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;k[M]=1,V[M]===0&&(s.enableVertexAttribArray(M),V[M]=1),X[M]!==D&&(s.vertexAttribDivisor(M,D),X[M]=D)}function w(){const M=r.newAttributes,D=r.enabledAttributes;for(let k=0,V=D.length;k<V;k++)D[k]!==M[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function T(M,D,k,V,X,j,$){$===!0?s.vertexAttribIPointer(M,D,k,X,j):s.vertexAttribPointer(M,D,k,V,X,j)}function S(M,D,k,V){x();const X=V.attributes,j=k.getAttributes(),$=D.defaultAttributeValues;for(const ae in j){const G=j[ae];if(G.location>=0){let he=X[ae];if(he===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const pe=he.normalized,Ae=he.itemSize,We=e.get(he);if(We===void 0)continue;const st=We.buffer,lt=We.type,Ze=We.bytesPerElement,K=lt===s.INT||lt===s.UNSIGNED_INT||he.gpuType===Ta;if(he.isInterleavedBufferAttribute){const ee=he.data,_e=ee.stride,Ne=he.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<G.locationSize;we++)d(G.location+we,ee.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<G.locationSize;we++)m(G.location+we);s.bindBuffer(s.ARRAY_BUFFER,st);for(let we=0;we<G.locationSize;we++)T(G.location+we,Ae/G.locationSize,lt,pe,_e*Ze,(Ne+Ae/G.locationSize*we)*Ze,K)}else{if(he.isInstancedBufferAttribute){for(let ee=0;ee<G.locationSize;ee++)d(G.location+ee,he.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<G.locationSize;ee++)m(G.location+ee);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ee=0;ee<G.locationSize;ee++)T(G.location+ee,Ae/G.locationSize,lt,pe,Ae*Ze,Ae/G.locationSize*ee*Ze,K)}}else if($!==void 0){const pe=$[ae];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(G.location,pe);break;case 3:s.vertexAttrib3fv(G.location,pe);break;case 4:s.vertexAttrib4fv(G.location,pe);break;default:s.vertexAttrib1fv(G.location,pe)}}}}w()}function C(){O();for(const M in n){const D=n[M];for(const k in D){const V=D[k];for(const X in V)u(V[X].object),delete V[X];delete D[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const k in D){const V=D[k];for(const X in V)u(V[X].object),delete V[X];delete D[k]}delete n[M.id]}function I(M){for(const D in n){const k=n[D];if(k[M.id]===void 0)continue;const V=k[M.id];for(const X in V)u(V[X].object),delete V[X];delete k[M.id]}}function O(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Tf(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let p=0;p<h;p++)g+=u[p];t.update(g,n,1)}function l(c,u,h,f){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)a(c[p],u[p],f[p]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*f[x];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(I){return!(I!==Jt&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const O=I===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ln&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==an&&!O)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:C,maxSamples:R}}function Af(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Tn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||n!==0||i;return i=f,n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,g){const p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||p===null||p.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,T=w*4;let S=d.clippingState||null;l.value=S,S=u(p,f,T,g);for(let C=0;C!==T;++C)S[C]=t[C];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,g,p){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const d=g+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=g;T!==x;++T,S+=4)a.copy(h[T]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rf(s){let e=new WeakMap;function t(a,o){return o===Hr?a.mapping=Ei:o===Vr&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hr||o===Vr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Mi=4,Bo=[.125,.215,.35,.446,.526,.582],$n=20,Sr=new Bs,ko=new qe;let yr=null,br=0,Er=0,Tr=!1;const Gn=(1+Math.sqrt(5))/2,_i=1/Gn,zo=[new F(-Gn,_i,0),new F(Gn,_i,0),new F(-_i,0,Gn),new F(_i,0,Gn),new F(0,Gn,-_i),new F(0,Gn,_i),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Cf=new F;class Ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Cf}=r;yr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,br,Er),this._renderer.xr.enabled=Tr,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Zi,format:Jt,colorSpace:wi,depthBuffer:!1},i=Vo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pf(r)),this._blurMaterial=Lf(r,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,i,r){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,g=h.toneMapping;h.getClearColor(ko),h.toneMapping=Cn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const x=new Ua({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new Xt(new Li,x);let d=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,d=!0):(x.color.copy(ko),d=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const C=this._cubeSize;ws(i,S*C,T>2?C:0,C,C),h.setRenderTarget(i),d&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=g,h.autoClear=f,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zo[(i-r-1)%zo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[i],c),f=c.uniforms,g=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*$n-1),x=r/p,m=isFinite(r)?1+Math.floor(u*x):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const d=[];let w=0;for(let I=0;I<$n;++I){const O=I/x,y=Math.exp(-O*O/2);d.push(y),I===0?w+=y:I<m&&(w+=2*y)}for(let I=0;I<d.length;I++)d[I]=d[I]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=p,f.mipInt.value=T-n;const S=this._sizeLods[i],C=3*S*(i>T-Mi?i-T+Mi:0),R=4*(this._cubeSize-S);ws(t,C,R,3*S,2*S),l.setRenderTarget(t),l.render(h,Sr)}}function Pf(s){const e=[],t=[],n=[];let i=s;const r=s-Mi+1+Bo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Mi?l=Bo[a-s+Mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,p=6,x=3,m=2,d=1,w=new Float32Array(x*p*g),T=new Float32Array(m*p*g),S=new Float32Array(d*p*g);for(let R=0;R<g;R++){const I=R%3*2/3-1,O=R>2?0:-1,y=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];w.set(y,x*p*R),T.set(f,m*p*R);const M=[R,R,R,R,R,R];S.set(M,d*p*R)}const C=new qt;C.setAttribute("position",new $t(w,x)),C.setAttribute("uv",new $t(T,m)),C.setAttribute("faceIndex",new $t(S,d)),e.push(C),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vo(s,e,t){const n=new Dn(s,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Lf(s,e,t){const n=new Float32Array($n),i=new F(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Go(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wo(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Df(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hr||l===Vr,u=l===Ei||l===Ti;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ho(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const g=o.image;return c&&g&&g.height>0||u&&g&&i(g)?(t===null&&(t=new Ho(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function If(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Uf(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];const g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER)}function c(h){const f=[],g=h.index,p=h.attributes.position;let x=0;if(g!==null){const w=g.array;x=g.version;for(let T=0,S=w.length;T<S;T+=3){const C=w[T+0],R=w[T+1],I=w[T+2];f.push(C,R,R,I,I,C)}}else if(p!==void 0){const w=p.array;x=p.version;for(let T=0,S=w.length/3-1;T<S;T+=3){const C=T+0,R=T+1,I=T+2;f.push(C,R,R,I,I,C)}}else return;const m=new(El(f)?Cl:Rl)(f,1);m.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Nf(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,g){s.drawElements(n,g,r,f*a),t.update(g,n,1)}function c(f,g,p){p!==0&&(s.drawElementsInstanced(n,g,r,f*a,p),t.update(g,n,p))}function u(f,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,p);let m=0;for(let d=0;d<p;d++)m+=g[d];t.update(m,n,1)}function h(f,g,p,x){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,g[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,x,0,p);let d=0;for(let w=0;w<p;w++)d+=g[w]*x[w];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ff(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Of(s,e,t){const n=new WeakMap,i=new pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*C*4*h),I=new Tl(R,S,C,h);I.type=an,I.needsUpdate=!0;const O=T*4;for(let M=0;M<h;M++){const D=m[M],k=d[M],V=w[M],X=S*C*4*M;for(let j=0;j<D.count;j++){const $=j*O;g===!0&&(i.fromBufferAttribute(D,j),R[X+$+0]=i.x,R[X+$+1]=i.y,R[X+$+2]=i.z,R[X+$+3]=0),p===!0&&(i.fromBufferAttribute(k,j),R[X+$+4]=i.x,R[X+$+5]=i.y,R[X+$+6]=i.z,R[X+$+7]=0),x===!0&&(i.fromBufferAttribute(V,j),R[X+$+8]=i.x,R[X+$+9]=i.y,R[X+$+10]=i.z,R[X+$+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:I,size:new ze(S,C)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const p=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Bf(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Bl=new At,Xo=new Nl(1,1),kl=new Tl,zl=new rh,Hl=new Dl,$o=[],qo=[],Yo=new Float32Array(16),jo=new Float32Array(9),Ko=new Float32Array(4);function Di(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$o[i];if(r===void 0&&(r=new Float32Array(i),$o[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gs(s,e){let t=qo[e];t===void 0&&(t=new Int32Array(e),qo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function Vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function Gf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Ko.set(n),s.uniformMatrix2fv(this.addr,!1,Ko),Mt(t,n)}}function Wf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;jo.set(n),s.uniformMatrix3fv(this.addr,!1,jo),Mt(t,n)}}function Xf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Yo.set(n),s.uniformMatrix4fv(this.addr,!1,Yo),Mt(t,n)}}function $f(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function Kf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function Qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xo.compareFunction=bl,r=Xo):r=Bl,t.setTexture2D(e||r,i)}function tp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zl,i)}function np(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hl,i)}function ip(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kl,i)}function sp(s){switch(s){case 5126:return kf;case 35664:return zf;case 35665:return Hf;case 35666:return Vf;case 35674:return Gf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return $f;case 35667:case 35671:return qf;case 35668:case 35672:return Yf;case 35669:case 35673:return jf;case 5125:return Kf;case 36294:return Zf;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}function rp(s,e){s.uniform1fv(this.addr,e)}function ap(s,e){const t=Di(e,this.size,2);s.uniform2fv(this.addr,t)}function op(s,e){const t=Di(e,this.size,3);s.uniform3fv(this.addr,t)}function lp(s,e){const t=Di(e,this.size,4);s.uniform4fv(this.addr,t)}function cp(s,e){const t=Di(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hp(s,e){const t=Di(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function up(s,e){const t=Di(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dp(s,e){s.uniform1iv(this.addr,e)}function fp(s,e){s.uniform2iv(this.addr,e)}function pp(s,e){s.uniform3iv(this.addr,e)}function mp(s,e){s.uniform4iv(this.addr,e)}function gp(s,e){s.uniform1uiv(this.addr,e)}function _p(s,e){s.uniform2uiv(this.addr,e)}function vp(s,e){s.uniform3uiv(this.addr,e)}function xp(s,e){s.uniform4uiv(this.addr,e)}function Mp(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Bl,r[a])}function Sp(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zl,r[a])}function yp(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Hl,r[a])}function bp(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||kl,r[a])}function Ep(s){switch(s){case 5126:return rp;case 35664:return ap;case 35665:return op;case 35666:return lp;case 35674:return cp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return _p;case 36295:return vp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return bp}}class Tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sp(t.type)}}class wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ep(t.type)}}class Ap{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Zo(s,e){s.seq.push(e),s.map[e.id]=e}function Rp(s,e,t){const n=s.name,i=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zo(t,c===void 0?new Tp(o,s,e):new wp(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Ap(o),Zo(t,h)),t=h}}}class Ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Rp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Jo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Cp=37297;let Pp=0;function Lp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Qo=new ke;function Dp(s){Ke._getMatrix(Qo,Ke.workingColorSpace,s);const e=`mat3( ${Qo.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Is:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function el(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Lp(s.getShaderSource(e),o)}else return r}function Ip(s,e){const t=Dp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Up(s,e){let t;switch(e){case Ic:t="Linear";break;case Uc:t="Reinhard";break;case Nc:t="Cineon";break;case Fc:t="ACESFilmic";break;case Bc:t="AgX";break;case kc:t="Neutral";break;case Oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const As=new F;function Np(){Ke.getLuminanceCoefficients(As);const s=As.x.toFixed(4),e=As.y.toFixed(4),t=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Op(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Wi(s){return s!==""}function tl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(s){return s.replace(kp,Hp)}const zp=new Map;function Hp(s,e){let t=Ve[e];if(t===void 0){const n=zp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ya(t)}const Vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(s){return s.replace(Vp,Gp)}function Gp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case Ti:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $p(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function qp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ea:e="ENVMAP_BLENDING_MULTIPLY";break;case Lc:e="ENVMAP_BLENDING_MIX";break;case Dc:e="ENVMAP_BLENDING_ADD";break}return e}function Yp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wp(t),c=Xp(t),u=$p(t),h=qp(t),f=Yp(t),g=Fp(t),p=Op(r),x=i.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wi).join(`
`),d.length>0&&(d+=`
`)):(m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),d=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ip("linearToOutputTexel",t.outputColorSpace),Np(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),a=ya(a),a=tl(a,t),a=nl(a,t),o=ya(o),o=tl(o,t),o=nl(o,t),a=il(a),o=il(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=w+m+a,S=w+d+o,C=Jo(i,i.VERTEX_SHADER,T),R=Jo(i,i.FRAGMENT_SHADER,S);i.attachShader(x,C),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(D){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(x)||"",V=i.getShaderInfoLog(C)||"",X=i.getShaderInfoLog(R)||"",j=k.trim(),$=V.trim(),ae=X.trim();let G=!0,he=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,R);else{const pe=el(i,C,"vertex"),Ae=el(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+pe+`
`+Ae)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||ae==="")&&(he=!1);he&&(D.diagnostics={runnable:G,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:ae,prefix:d}})}i.deleteShader(C),i.deleteShader(R),O=new Ds(i,x),y=Bp(i,x)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Cp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let Kp=0;class Zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jp(e),t.set(e,n)),n}}class Jp{constructor(e){this.id=Kp++,this.code=e,this.usedTimes=0}}function Qp(s,e,t,n,i,r,a){const o=new Ia,l=new Zp,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,k,V){const X=k.fog,j=V.geometry,$=y.isMeshStandardMaterial?k.environment:null,ae=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),G=ae&&ae.mapping===zs?ae.image.height:null,he=p[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ae=pe!==void 0?pe.length:0;let We=0;j.morphAttributes.position!==void 0&&(We=1),j.morphAttributes.normal!==void 0&&(We=2),j.morphAttributes.color!==void 0&&(We=3);let st,lt,Ze,K;if(he){const Je=tn[he];st=Je.vertexShader,lt=Je.fragmentShader}else st=y.vertexShader,lt=y.fragmentShader,l.update(y),Ze=l.getVertexShaderID(y),K=l.getFragmentShaderID(y);const ee=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ne=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,Ye=!!y.map,Et=!!y.matcap,A=!!ae,ct=!!y.aoMap,Oe=!!y.lightMap,Ie=!!y.bumpMap,Me=!!y.normalMap,ht=!!y.displacementMap,Se=!!y.emissiveMap,He=!!y.metalnessMap,St=!!y.roughnessMap,mt=y.anisotropy>0,E=y.clearcoat>0,_=y.dispersion>0,B=y.iridescence>0,Y=y.sheen>0,J=y.transmission>0,W=mt&&!!y.anisotropyMap,Te=E&&!!y.clearcoatMap,oe=E&&!!y.clearcoatNormalMap,ye=E&&!!y.clearcoatRoughnessMap,be=B&&!!y.iridescenceMap,se=B&&!!y.iridescenceThicknessMap,fe=Y&&!!y.sheenColorMap,De=Y&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,ue=!!y.specularColorMap,Be=!!y.specularIntensityMap,L=J&&!!y.transmissionMap,re=J&&!!y.thicknessMap,le=!!y.gradientMap,ge=!!y.alphaMap,te=y.alphaTest>0,Z=!!y.alphaHash,xe=!!y.extensions;let Fe=Cn;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const rt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:lt,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,instancingMorph:Ne&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:wi,alphaToCoverage:!!y.alphaToCoverage,map:Ye,matcap:Et,envMap:A,envMapMode:A&&ae.mapping,envMapCubeUVHeight:G,aoMap:ct,lightMap:Oe,bumpMap:Ie,normalMap:Me,displacementMap:f&&ht,emissiveMap:Se,normalMapObjectSpace:Me&&y.normalMapType===Gc,normalMapTangentSpace:Me&&y.normalMapType===yl,metalnessMap:He,roughnessMap:St,anisotropy:mt,anisotropyMap:W,clearcoat:E,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:_,iridescence:B,iridescenceMap:be,iridescenceThicknessMap:se,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:ue,specularIntensityMap:Be,transmission:J,transmissionMap:L,thicknessMap:re,gradientMap:le,opaque:y.transparent===!1&&y.blending===Si&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:Z,combine:y.combine,mapUv:Ye&&x(y.map.channel),aoMapUv:ct&&x(y.aoMap.channel),lightMapUv:Oe&&x(y.lightMap.channel),bumpMapUv:Ie&&x(y.bumpMap.channel),normalMapUv:Me&&x(y.normalMap.channel),displacementMapUv:ht&&x(y.displacementMap.channel),emissiveMapUv:Se&&x(y.emissiveMap.channel),metalnessMapUv:He&&x(y.metalnessMap.channel),roughnessMapUv:St&&x(y.roughnessMap.channel),anisotropyMapUv:W&&x(y.anisotropyMap.channel),clearcoatMapUv:Te&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(y.sheenRoughnessMap.channel),specularMapUv:Ee&&x(y.specularMap.channel),specularColorMapUv:ue&&x(y.specularColorMap.channel),specularIntensityMapUv:Be&&x(y.specularIntensityMap.channel),transmissionMapUv:L&&x(y.transmissionMap.channel),thicknessMapUv:re&&x(y.thicknessMap.channel),alphaMapUv:ge&&x(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Me||mt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Ye||ge),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===tt,decodeVideoTextureEmissive:Se&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Dt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(w(M,y),T(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=p[y.type];let D;if(M){const k=tn[M];D=vh.clone(k.uniforms)}else D=y.uniforms;return D}function C(y,M){let D;for(let k=0,V=u.length;k<V;k++){const X=u[k];if(X.cacheKey===M){D=X,++D.usedTimes;break}}return D===void 0&&(D=new jp(s,M,y,r),u.push(D)),D}function R(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:O}}function em(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function tm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function al(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,g,p,x,m){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:g,groupOrder:p,renderOrder:h.renderOrder,z:x,group:m},s[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=g,d.groupOrder=p,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,g,p,x,m){const d=a(h,f,g,p,x,m);g.transmission>0?n.push(d):g.transparent===!0?i.push(d):t.push(d)}function l(h,f,g,p,x,m){const d=a(h,f,g,p,x,m);g.transmission>0?n.unshift(d):g.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||tm),n.length>1&&n.sort(f||rl),i.length>1&&i.sort(f||rl)}function u(){for(let h=e,f=s.length;h<f;h++){const g=s[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function nm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new al,s.set(n,[a])):i>=r.length?(a=new al,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function im(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new qe};break;case"SpotLight":t={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function sm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rm=0;function am(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function om(s){const e=new im,t=sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,r=new at,a=new at;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,p=0,x=0,m=0,d=0,w=0,T=0,S=0,C=0,R=0,I=0;c.sort(am);for(let y=0,M=c.length;y<M;y++){const D=c[y],k=D.color,V=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*V,h+=k.g*V,f+=k.b*V;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],V);I++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ae=D.shadow,G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=$,g++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(k).multiplyScalar(V),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[x]=$;const ae=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,ae.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[x]=ae.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=j,S++}x++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(k).multiplyScalar(V),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const ae=D.shadow,G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,G.shadowCameraNear=ae.camera.near,G.shadowCameraFar=ae.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=D.shadow.matrix,T++}n.point[p]=$,p++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(V),$.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[d]=$,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==g||O.pointLength!==p||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==w||O.numPointShadows!==T||O.numSpotShadows!==S||O.numSpotMaps!==C||O.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,O.directionalLength=g,O.pointLength=p,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=w,O.numPointShadows=T,O.numSpotShadows=S,O.numSpotMaps=C,O.numLightProbes=I,n.version=rm++)}function l(c,u){let h=0,f=0,g=0,p=0,x=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const T=c[d];if(T.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(T.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const S=n.rectArea[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function ol(s){const e=new om(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function lm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new ol(s),e.set(i,[o])):r>=a.length?(o=new ol(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(s,e,t){let n=new Na;const i=new ze,r=new ze,a=new pt,o=new Dh({depthPacking:Vc}),l=new Ih,c={},u=t.maxTextureSize,h={[Ln]:Dt,[Dt]:Ln,[_n]:_n},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:cm,fragmentShader:hm}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const p=new qt;p.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let d=this.type;this.render=function(R,I,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Rn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=d!==gn&&this.type===gn,X=d===gn&&this.type!==gn;for(let j=0,$=R.length;j<$;j++){const ae=R[j],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const he=G.getFrameExtents();if(i.multiply(he),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/he.x),i.x=r.x*he.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/he.y),i.y=r.y*he.y,G.mapSize.y=r.y)),G.map===null||V===!0||X===!0){const Ae=this.type!==gn?{minFilter:kt,magFilter:kt}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(i.x,i.y,Ae),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const pe=G.getViewportCount();for(let Ae=0;Ae<pe;Ae++){const We=G.getViewport(Ae);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),k.viewport(a),G.updateMatrices(ae,Ae),n=G.getFrustum(),S(I,O,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&w(G,O),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,D)};function w(R,I){const O=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Dn(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(I,null,O,f,x,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(I,null,O,g,x,null)}function T(R,I,O,y){let M=null;const D=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=O.isPointLight===!0?l:o,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=M.uuid,V=I.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let j=X[V];j===void 0&&(j=M.clone(),X[V]=j,I.addEventListener("dispose",C)),M=j}if(M.visible=I.visible,M.wireframe=I.wireframe,y===gn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:h[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=s.properties.get(M);k.light=O}return M}function S(R,I,O,y,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===gn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const V=e.update(R),X=R.material;if(Array.isArray(X)){const j=V.groups;for(let $=0,ae=j.length;$<ae;$++){const G=j[$],he=X[G.materialIndex];if(he&&he.visible){const pe=T(R,he,y,M);R.onBeforeShadow(s,R,I,O,V,pe,G),s.renderBufferDirect(O,null,V,pe,R,G),R.onAfterShadow(s,R,I,O,V,pe,G)}}}else if(X.visible){const j=T(R,X,y,M);R.onBeforeShadow(s,R,I,O,V,j,null),s.renderBufferDirect(O,null,V,j,R,null),R.onAfterShadow(s,R,I,O,V,j,null)}}const k=R.children;for(let V=0,X=k.length;V<X;V++)S(k[V],I,O,y,M)}function C(R){R.target.removeEventListener("dispose",C);for(const O in c){const y=c[O],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const dm={[Ur]:Nr,[Fr]:kr,[Or]:zr,[bi]:Br,[Nr]:Ur,[kr]:Fr,[zr]:Or,[Br]:bi};function fm(s,e){function t(){let L=!1;const re=new pt;let le=null;const ge=new pt(0,0,0,0);return{setMask:function(te){le!==te&&!L&&(s.colorMask(te,te,te,te),le=te)},setLocked:function(te){L=te},setClear:function(te,Z,xe,Fe,rt){rt===!0&&(te*=Fe,Z*=Fe,xe*=Fe),re.set(te,Z,xe,Fe),ge.equals(re)===!1&&(s.clearColor(te,Z,xe,Fe),ge.copy(re))},reset:function(){L=!1,le=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,le=null,ge=null,te=null;return{setReversed:function(Z){if(re!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return re},setTest:function(Z){Z?ee(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(Z){le!==Z&&!L&&(s.depthMask(Z),le=Z)},setFunc:function(Z){if(re&&(Z=dm[Z]),ge!==Z){switch(Z){case Ur:s.depthFunc(s.NEVER);break;case Nr:s.depthFunc(s.ALWAYS);break;case Fr:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case Or:s.depthFunc(s.EQUAL);break;case Br:s.depthFunc(s.GEQUAL);break;case kr:s.depthFunc(s.GREATER);break;case zr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Z}},setLocked:function(Z){L=Z},setClear:function(Z){te!==Z&&(re&&(Z=1-Z),s.clearDepth(Z),te=Z)},reset:function(){L=!1,le=null,ge=null,te=null,re=!1}}}function i(){let L=!1,re=null,le=null,ge=null,te=null,Z=null,xe=null,Fe=null,rt=null;return{setTest:function(Je){L||(Je?ee(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Je){re!==Je&&!L&&(s.stencilMask(Je),re=Je)},setFunc:function(Je,hn,en){(le!==Je||ge!==hn||te!==en)&&(s.stencilFunc(Je,hn,en),le=Je,ge=hn,te=en)},setOp:function(Je,hn,en){(Z!==Je||xe!==hn||Fe!==en)&&(s.stencilOp(Je,hn,en),Z=Je,xe=hn,Fe=en)},setLocked:function(Je){L=Je},setClear:function(Je){rt!==Je&&(s.clearStencil(Je),rt=Je)},reset:function(){L=!1,re=null,le=null,ge=null,te=null,Z=null,xe=null,Fe=null,rt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,g=[],p=null,x=!1,m=null,d=null,w=null,T=null,S=null,C=null,R=null,I=new qe(0,0,0),O=0,y=!1,M=null,D=null,k=null,V=null,X=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ae=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=ae>=1):G.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=ae>=2);let he=null,pe={};const Ae=s.getParameter(s.SCISSOR_BOX),We=s.getParameter(s.VIEWPORT),st=new pt().fromArray(Ae),lt=new pt().fromArray(We);function Ze(L,re,le,ge){const te=new Uint8Array(4),Z=s.createTexture();s.bindTexture(L,Z),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<le;xe++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(re+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return Z}const K={};K[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(bi),Ie(!1),Me(Qa),ee(s.CULL_FACE),ct(Rn);function ee(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function _e(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function Ne(L,re){return h[L]!==re?(s.bindFramebuffer(L,re),h[L]=re,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=re),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=re),!0):!1}function we(L,re){let le=g,ge=!1;if(L){le=f.get(re),le===void 0&&(le=[],f.set(re,le));const te=L.textures;if(le.length!==te.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,xe=te.length;Z<xe;Z++)le[Z]=s.COLOR_ATTACHMENT0+Z;le.length=te.length,ge=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,ge=!0);ge&&s.drawBuffers(le)}function Ye(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Et={[Xn]:s.FUNC_ADD,[pc]:s.FUNC_SUBTRACT,[mc]:s.FUNC_REVERSE_SUBTRACT};Et[gc]=s.MIN,Et[_c]=s.MAX;const A={[vc]:s.ZERO,[xc]:s.ONE,[Mc]:s.SRC_COLOR,[Dr]:s.SRC_ALPHA,[wc]:s.SRC_ALPHA_SATURATE,[Ec]:s.DST_COLOR,[yc]:s.DST_ALPHA,[Sc]:s.ONE_MINUS_SRC_COLOR,[Ir]:s.ONE_MINUS_SRC_ALPHA,[Tc]:s.ONE_MINUS_DST_COLOR,[bc]:s.ONE_MINUS_DST_ALPHA,[Ac]:s.CONSTANT_COLOR,[Rc]:s.ONE_MINUS_CONSTANT_COLOR,[Cc]:s.CONSTANT_ALPHA,[Pc]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(L,re,le,ge,te,Z,xe,Fe,rt,Je){if(L===Rn){x===!0&&(_e(s.BLEND),x=!1);return}if(x===!1&&(ee(s.BLEND),x=!0),L!==fc){if(L!==m||Je!==y){if((d!==Xn||S!==Xn)&&(s.blendEquation(s.FUNC_ADD),d=Xn,S=Xn),Je)switch(L){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFunc(s.ONE,s.ONE);break;case to:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case to:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case no:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,T=null,C=null,R=null,I.set(0,0,0),O=0,m=L,y=Je}return}te=te||re,Z=Z||le,xe=xe||ge,(re!==d||te!==S)&&(s.blendEquationSeparate(Et[re],Et[te]),d=re,S=te),(le!==w||ge!==T||Z!==C||xe!==R)&&(s.blendFuncSeparate(A[le],A[ge],A[Z],A[xe]),w=le,T=ge,C=Z,R=xe),(Fe.equals(I)===!1||rt!==O)&&(s.blendColor(Fe.r,Fe.g,Fe.b,rt),I.copy(Fe),O=rt),m=L,y=!1}function Oe(L,re){L.side===_n?_e(s.CULL_FACE):ee(s.CULL_FACE);let le=L.side===Dt;re&&(le=!le),Ie(le),L.blending===Si&&L.transparent===!1?ct(Rn):ct(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){M!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),M=L)}function Me(L){L!==hc?(ee(s.CULL_FACE),L!==D&&(L===Qa?s.cullFace(s.BACK):L===uc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),D=L}function ht(L){L!==k&&($&&s.lineWidth(L),k=L)}function Se(L,re,le){L?(ee(s.POLYGON_OFFSET_FILL),(V!==re||X!==le)&&(s.polygonOffset(re,le),V=re,X=le)):_e(s.POLYGON_OFFSET_FILL)}function He(L){L?ee(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function St(L){L===void 0&&(L=s.TEXTURE0+j-1),he!==L&&(s.activeTexture(L),he=L)}function mt(L,re,le){le===void 0&&(he===null?le=s.TEXTURE0+j-1:le=he);let ge=pe[le];ge===void 0&&(ge={type:void 0,texture:void 0},pe[le]=ge),(ge.type!==L||ge.texture!==re)&&(he!==le&&(s.activeTexture(le),he=le),s.bindTexture(L,re||K[L]),ge.type=L,ge.texture=re)}function E(){const L=pe[he];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){st.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function De(L){lt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),lt.copy(L))}function Ee(L,re){let le=c.get(re);le===void 0&&(le=new WeakMap,c.set(re,le));let ge=le.get(L);ge===void 0&&(ge=s.getUniformBlockIndex(re,L.name),le.set(L,ge))}function ue(L,re){const ge=c.get(re).get(L);l.get(re)!==ge&&(s.uniformBlockBinding(re,ge,L.__bindingPointIndex),l.set(re,ge))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},he=null,pe={},h={},f=new WeakMap,g=[],p=null,x=!1,m=null,d=null,w=null,T=null,S=null,C=null,R=null,I=new qe(0,0,0),O=0,y=!1,M=null,D=null,k=null,V=null,X=null,st.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Ne,drawBuffers:we,useProgram:Ye,setBlending:ct,setMaterial:Oe,setFlipSided:Ie,setCullFace:Me,setLineWidth:ht,setPolygonOffset:Se,setScissorTest:He,activeTexture:St,bindTexture:mt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:be,texImage3D:se,updateUBOMapping:Ee,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:ye,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Te,scissor:fe,viewport:De,reset:Be}}function pm(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,_){return g?new OffscreenCanvas(E,_):Ns("canvas")}function x(E,_,B){let Y=1;const J=mt(E);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(Y*J.width),Te=Math.floor(Y*J.height);h===void 0&&(h=p(W,Te));const oe=_?p(W,Te):h;return oe.width=W,oe.height=Te,oe.getContext("2d").drawImage(E,0,0,W,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Te+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){s.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(E,_,B,Y,J=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=_;if(_===s.RED&&(B===s.FLOAT&&(W=s.R32F),B===s.HALF_FLOAT&&(W=s.R16F),B===s.UNSIGNED_BYTE&&(W=s.R8)),_===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.R8UI),B===s.UNSIGNED_SHORT&&(W=s.R16UI),B===s.UNSIGNED_INT&&(W=s.R32UI),B===s.BYTE&&(W=s.R8I),B===s.SHORT&&(W=s.R16I),B===s.INT&&(W=s.R32I)),_===s.RG&&(B===s.FLOAT&&(W=s.RG32F),B===s.HALF_FLOAT&&(W=s.RG16F),B===s.UNSIGNED_BYTE&&(W=s.RG8)),_===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RG8UI),B===s.UNSIGNED_SHORT&&(W=s.RG16UI),B===s.UNSIGNED_INT&&(W=s.RG32UI),B===s.BYTE&&(W=s.RG8I),B===s.SHORT&&(W=s.RG16I),B===s.INT&&(W=s.RG32I)),_===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGB8UI),B===s.UNSIGNED_SHORT&&(W=s.RGB16UI),B===s.UNSIGNED_INT&&(W=s.RGB32UI),B===s.BYTE&&(W=s.RGB8I),B===s.SHORT&&(W=s.RGB16I),B===s.INT&&(W=s.RGB32I)),_===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),B===s.UNSIGNED_INT&&(W=s.RGBA32UI),B===s.BYTE&&(W=s.RGBA8I),B===s.SHORT&&(W=s.RGBA16I),B===s.INT&&(W=s.RGBA32I)),_===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),_===s.RGBA){const Te=J?Is:Ke.getTransfer(Y);B===s.FLOAT&&(W=s.RGBA32F),B===s.HALF_FLOAT&&(W=s.RGBA16F),B===s.UNSIGNED_BYTE&&(W=Te===tt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(E,_){let B;return E?_===null||_===jn||_===qi?B=s.DEPTH24_STENCIL8:_===an?B=s.DEPTH32F_STENCIL8:_===$i&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===qi?B=s.DEPTH_COMPONENT24:_===an?B=s.DEPTH_COMPONENT32F:_===$i&&(B=s.DEPTH_COMPONENT16),B}function C(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==kt&&E.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),O(_),_.isVideoTexture&&u.delete(_)}function I(E){const _=E.target;_.removeEventListener("dispose",I),M(_)}function O(E){const _=n.get(E);if(_.__webglInit===void 0)return;const B=E.source,Y=f.get(B);if(Y){const J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(E),Object.keys(Y).length===0&&f.delete(B)}n.remove(E)}function y(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const B=E.source,Y=f.get(B);delete Y[_.__cacheKey],a.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[Y]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=E.textures;for(let Y=0,J=B.length;Y<J;Y++){const W=n.get(B[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(E)}let D=0;function k(){D=0}function V(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function X(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function j(E,_){const B=n.get(E);if(E.isVideoTexture&&He(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,E,_);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+_)}function $(E,_){const B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){K(B,E,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+_)}function ae(E,_){const B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){K(B,E,_);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+_)}function G(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){ee(B,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+_)}const he={[Gr]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},pe={[kt]:s.NEAREST,[zc]:s.NEAREST_MIPMAP_NEAREST,[ns]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[Ys]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},Ae={[Wc]:s.NEVER,[Kc]:s.ALWAYS,[Xc]:s.LESS,[bl]:s.LEQUAL,[$c]:s.EQUAL,[jc]:s.GEQUAL,[qc]:s.GREATER,[Yc]:s.NOTEQUAL};function We(E,_){if(_.type===an&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===Ys||_.magFilter===ns||_.magFilter===Yn||_.minFilter===rn||_.minFilter===Ys||_.minFilter===ns||_.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,he[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,he[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,he[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,pe[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kt||_.minFilter!==ns&&_.minFilter!==Yn||_.type===an&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function st(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const Y=_.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const W=X(_);if(W!==E.__cacheKey){J[W]===void 0&&(J[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[W].usedTimes++;const Te=J[E.__cacheKey];Te!==void 0&&(J[E.__cacheKey].usedTimes--,Te.usedTimes===0&&y(_)),E.__cacheKey=W,E.__webglTexture=J[W].texture}return B}function lt(E,_,B){return Math.floor(Math.floor(E/B)/_)}function Ze(E,_,B,Y){const W=E.updateRanges;if(W.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,B,Y,_.data);else{W.sort((se,fe)=>se.start-fe.start);let Te=0;for(let se=1;se<W.length;se++){const fe=W[Te],De=W[se],Ee=fe.start+fe.count,ue=lt(De.start,_.width,4),Be=lt(fe.start,_.width,4);De.start<=Ee+1&&ue===Be&&lt(De.start+De.count-1,_.width,4)===ue?fe.count=Math.max(fe.count,De.start+De.count-fe.start):(++Te,W[Te]=De)}W.length=Te+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),ye=s.getParameter(s.UNPACK_SKIP_PIXELS),be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let se=0,fe=W.length;se<fe;se++){const De=W[se],Ee=Math.floor(De.start/4),ue=Math.ceil(De.count/4),Be=Ee%_.width,L=Math.floor(Ee/_.width),re=ue,le=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Be,L,re,le,B,Y,_.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function K(E,_,B){let Y=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=s.TEXTURE_3D);const J=st(E,_),W=_.source;t.bindTexture(Y,E.__webglTexture,s.TEXTURE0+B);const Te=n.get(W);if(W.version!==Te.__version||J===!0){t.activeTexture(s.TEXTURE0+B);const oe=Ke.getPrimaries(Ke.workingColorSpace),ye=_.colorSpace===An?null:Ke.getPrimaries(_.colorSpace),be=_.colorSpace===An||oe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let se=x(_.image,!1,i.maxTextureSize);se=St(_,se);const fe=r.convert(_.format,_.colorSpace),De=r.convert(_.type);let Ee=T(_.internalFormat,fe,De,_.colorSpace,_.isVideoTexture);We(Y,_);let ue;const Be=_.mipmaps,L=_.isVideoTexture!==!0,re=Te.__version===void 0||J===!0,le=W.dataReady,ge=C(_,se);if(_.isDepthTexture)Ee=S(_.format===ji,_.type),re&&(L?t.texStorage2D(s.TEXTURE_2D,1,Ee,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ee,se.width,se.height,0,fe,De,null));else if(_.isDataTexture)if(Be.length>0){L&&re&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,Be[0].width,Be[0].height);for(let te=0,Z=Be.length;te<Z;te++)ue=Be[te],L?le&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,De,ue.data):t.texImage2D(s.TEXTURE_2D,te,Ee,ue.width,ue.height,0,fe,De,ue.data);_.generateMipmaps=!1}else L?(re&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,se.width,se.height),le&&Ze(_,se,fe,De)):t.texImage2D(s.TEXTURE_2D,0,Ee,se.width,se.height,0,fe,De,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ee,Be[0].width,Be[0].height,se.depth);for(let te=0,Z=Be.length;te<Z;te++)if(ue=Be[te],_.format!==Jt)if(fe!==null)if(L){if(le)if(_.layerUpdates.size>0){const xe=Oo(ue.width,ue.height,_.format,_.type);for(const Fe of _.layerUpdates){const rt=ue.data.subarray(Fe*xe/ue.data.BYTES_PER_ELEMENT,(Fe+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Fe,ue.width,ue.height,1,fe,rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,se.depth,fe,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ee,ue.width,ue.height,se.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,se.depth,fe,De,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ee,ue.width,ue.height,se.depth,0,fe,De,ue.data)}else{L&&re&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,Be[0].width,Be[0].height);for(let te=0,Z=Be.length;te<Z;te++)ue=Be[te],_.format!==Jt?fe!==null?L?le&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,De,ue.data):t.texImage2D(s.TEXTURE_2D,te,Ee,ue.width,ue.height,0,fe,De,ue.data)}else if(_.isDataArrayTexture)if(L){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ee,se.width,se.height,se.depth),le)if(_.layerUpdates.size>0){const te=Oo(se.width,se.height,_.format,_.type);for(const Z of _.layerUpdates){const xe=se.data.subarray(Z*te/se.data.BYTES_PER_ELEMENT,(Z+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,fe,De,xe)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,De,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,fe,De,se.data);else if(_.isData3DTexture)L?(re&&t.texStorage3D(s.TEXTURE_3D,ge,Ee,se.width,se.height,se.depth),le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,De,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,fe,De,se.data);else if(_.isFramebufferTexture){if(re)if(L)t.texStorage2D(s.TEXTURE_2D,ge,Ee,se.width,se.height);else{let te=se.width,Z=se.height;for(let xe=0;xe<ge;xe++)t.texImage2D(s.TEXTURE_2D,xe,Ee,te,Z,0,fe,De,null),te>>=1,Z>>=1}}else if(Be.length>0){if(L&&re){const te=mt(Be[0]);t.texStorage2D(s.TEXTURE_2D,ge,Ee,te.width,te.height)}for(let te=0,Z=Be.length;te<Z;te++)ue=Be[te],L?le&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe,De,ue):t.texImage2D(s.TEXTURE_2D,te,Ee,fe,De,ue);_.generateMipmaps=!1}else if(L){if(re){const te=mt(se);t.texStorage2D(s.TEXTURE_2D,ge,Ee,te.width,te.height)}le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,De,se)}else t.texImage2D(s.TEXTURE_2D,0,Ee,fe,De,se);m(_)&&d(Y),Te.__version=W.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ee(E,_,B){if(_.image.length!==6)return;const Y=st(E,_),J=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+B);const W=n.get(J);if(J.version!==W.__version||Y===!0){t.activeTexture(s.TEXTURE0+B);const Te=Ke.getPrimaries(Ke.workingColorSpace),oe=_.colorSpace===An?null:Ke.getPrimaries(_.colorSpace),ye=_.colorSpace===An||Te===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!be&&!se?fe[Z]=x(_.image[Z],!0,i.maxCubemapSize):fe[Z]=se?_.image[Z].image:_.image[Z],fe[Z]=St(_,fe[Z]);const De=fe[0],Ee=r.convert(_.format,_.colorSpace),ue=r.convert(_.type),Be=T(_.internalFormat,Ee,ue,_.colorSpace),L=_.isVideoTexture!==!0,re=W.__version===void 0||Y===!0,le=J.dataReady;let ge=C(_,De);We(s.TEXTURE_CUBE_MAP,_);let te;if(be){L&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Be,De.width,De.height);for(let Z=0;Z<6;Z++){te=fe[Z].mipmaps;for(let xe=0;xe<te.length;xe++){const Fe=te[xe];_.format!==Jt?Ee!==null?L?le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Fe.width,Fe.height,Ee,ue,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Be,Fe.width,Fe.height,0,Ee,ue,Fe.data)}}}else{if(te=_.mipmaps,L&&re){te.length>0&&ge++;const Z=mt(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){L?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Ee,ue,fe[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,fe[Z].width,fe[Z].height,0,Ee,ue,fe[Z].data);for(let xe=0;xe<te.length;xe++){const rt=te[xe].image[Z].image;L?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,rt.width,rt.height,Ee,ue,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Be,rt.width,rt.height,0,Ee,ue,rt.data)}}else{L?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,ue,fe[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Ee,ue,fe[Z]);for(let xe=0;xe<te.length;xe++){const Fe=te[xe];L?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,Ee,ue,Fe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Be,Ee,ue,Fe.image[Z])}}}m(_)&&d(s.TEXTURE_CUBE_MAP),W.__version=J.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function _e(E,_,B,Y,J,W){const Te=r.convert(B.format,B.colorSpace),oe=r.convert(B.type),ye=T(B.internalFormat,Te,oe,B.colorSpace),be=n.get(_),se=n.get(B);if(se.__renderTarget=_,!be.__hasExternalTextures){const fe=Math.max(1,_.width>>W),De=Math.max(1,_.height>>W);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,W,ye,fe,De,_.depth,0,Te,oe,null):t.texImage2D(J,W,ye,fe,De,0,Te,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),Se(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,se.__webglTexture,0,ht(_)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,se.__webglTexture,W),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(E,_,B){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,W=S(_.stencilBuffer,J),Te=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=ht(_);Se(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,W,_.width,_.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,W,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,W,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,E)}else{const Y=_.textures;for(let J=0;J<Y.length;J++){const W=Y[J],Te=r.convert(W.format,W.colorSpace),oe=r.convert(W.type),ye=T(W.internalFormat,Te,oe,W.colorSpace),be=ht(_);B&&Se(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ye,_.width,_.height):Se(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,ye,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ye,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const J=Y.__webglTexture,W=ht(_);if(_.depthTexture.format===Yi)Se(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(_.depthTexture.format===ji)Se(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ye(E){const _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=E.texture.mipmaps;Y&&Y.length>0?we(_.__webglFramebuffer[0],E):we(_.__webglFramebuffer,E)}else if(B){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ne(_.__webglDepthbuffer[Y],E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,W)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Ne(_.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,W)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(E,_,B){const Y=n.get(E);_!==void 0&&_e(Y.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ye(E)}function A(E){const _=E.texture,B=n.get(E),Y=n.get(_);E.addEventListener("dispose",I);const J=E.textures,W=E.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=_.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let ye=0;ye<_.mipmaps.length;ye++)B.__webglFramebuffer[oe][ye]=s.createFramebuffer()}else B.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)B.__webglFramebuffer[oe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Te)for(let oe=0,ye=J.length;oe<ye;oe++){const be=n.get(J[oe]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Se(E)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const ye=J[oe];B.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const be=r.convert(ye.format,ye.colorSpace),se=r.convert(ye.type),fe=T(ye.internalFormat,be,se,ye.colorSpace,E.isXRRenderTarget===!0),De=ht(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),We(s.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)_e(B.__webglFramebuffer[oe][ye],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye);else _e(B.__webglFramebuffer[oe],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,ye=J.length;oe<ye;oe++){const be=J[oe],se=n.get(be);let fe=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),We(fe,be),_e(B.__webglFramebuffer,E,be,s.COLOR_ATTACHMENT0+oe,fe,0),m(be)&&d(fe)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),We(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)_e(B.__webglFramebuffer[ye],E,_,s.COLOR_ATTACHMENT0,oe,ye);else _e(B.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,oe,0);m(_)&&d(oe),t.unbindTexture()}E.depthBuffer&&Ye(E)}function ct(E){const _=E.textures;for(let B=0,Y=_.length;B<Y;B++){const J=_[B];if(m(J)){const W=w(E),Te=n.get(J).__webglTexture;t.bindTexture(W,Te),d(W),t.unbindTexture()}}}const Oe=[],Ie=[];function Me(E){if(E.samples>0){if(Se(E)===!1){const _=E.textures,B=E.width,Y=E.height;let J=s.COLOR_BUFFER_BIT;const W=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(E),oe=_.length>1;if(oe)for(let be=0;be<_.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const ye=E.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<_.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const se=n.get(_[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,s.NEAREST),l===!0&&(Oe.length=0,Ie.length=0,Oe.push(s.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Oe.push(W),Ie.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let be=0;be<_.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const se=n.get(_[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function ht(E){return Math.min(i.maxSamples,E.samples)}function Se(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function St(E,_){const B=E.colorSpace,Y=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==wi&&B!==An&&(Ke.getTransfer(B)===tt?(Y!==Jt||J!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=G,this.rebindTextures=Et,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se}function mm(s,e){function t(n,i=An){let r;const a=Ke.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===wa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ml)return s.BYTE;if(n===gl)return s.SHORT;if(n===$i)return s.UNSIGNED_SHORT;if(n===Ta)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===Zi)return s.HALF_FLOAT;if(n===xl)return s.ALPHA;if(n===Ml)return s.RGB;if(n===Jt)return s.RGBA;if(n===Yi)return s.DEPTH_COMPONENT;if(n===ji)return s.DEPTH_STENCIL;if(n===Ra)return s.RED;if(n===Ca)return s.RED_INTEGER;if(n===Sl)return s.RG;if(n===Pa)return s.RG_INTEGER;if(n===La)return s.RGBA_INTEGER;if(n===Rs||n===Cs||n===Ps||n===Ls)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xr||n===$r||n===qr||n===Yr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===Kr||n===Zr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jr||n===Kr)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===fa||n===pa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:gm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends Ci{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,g=null,p=null;const x=typeof XRWebGLBinding<"u",m=new vm,d={},w=t.getContextAttributes();let T=null,S=null;const C=[],R=[],I=new ze;let O=null;const y=new Zt;y.viewport=new pt;const M=new Zt;M.viewport=new pt;const D=[y,M],k=new Bh;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=C[K];return ee===void 0&&(ee=new _r,C[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=C[K];return ee===void 0&&(ee=new _r,C[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=C[K];return ee===void 0&&(ee=new _r,C[K]=ee),ee.getHandSpace()};function j(K){const ee=R.indexOf(K.inputSource);if(ee===-1)return;const _e=C[ee];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ae);for(let K=0;K<C.length;K++){const ee=R[K];ee!==null&&(R[K]=null,C[K].disconnect(ee))}V=null,X=null,m.reset();for(const K in d)delete d[K];e.setRenderTarget(T),g=null,f=null,h=null,i=null,S=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ae),w.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,we=null;w.depth&&(we=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=w.stencil?ji:Yi,Ne=w.stencil?qi:jn);const Ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Dn(f.textureWidth,f.textureHeight,{format:Jt,type:ln,depthTexture:new Nl(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new Dn(g.framebufferWidth,g.framebufferHeight,{format:Jt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(K){for(let ee=0;ee<K.removed.length;ee++){const _e=K.removed[ee],Ne=R.indexOf(_e);Ne>=0&&(R[Ne]=null,C[Ne].disconnect(_e))}for(let ee=0;ee<K.added.length;ee++){const _e=K.added[ee];let Ne=R.indexOf(_e);if(Ne===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=R.length){R.push(_e),Ne=Ye;break}else if(R[Ye]===null){R[Ye]=_e,Ne=Ye;break}if(Ne===-1)break}const we=C[Ne];we&&we.connect(_e)}}const G=new F,he=new F;function pe(K,ee,_e){G.setFromMatrixPosition(ee.matrixWorld),he.setFromMatrixPosition(_e.matrixWorld);const Ne=G.distanceTo(he),we=ee.projectionMatrix.elements,Ye=_e.projectionMatrix.elements,Et=we[14]/(we[10]-1),A=we[14]/(we[10]+1),ct=(we[9]+1)/we[5],Oe=(we[9]-1)/we[5],Ie=(we[8]-1)/we[0],Me=(Ye[8]+1)/Ye[0],ht=Et*Ie,Se=Et*Me,He=Ne/(-Ie+Me),St=He*-Ie;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const mt=Et+He,E=A+He,_=ht-St,B=Se+(Ne-St),Y=ct*A/E*mt,J=Oe*A/E*mt;K.projectionMatrix.makePerspective(_,B,Y,J,mt,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ee=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=M.near=y.near=ee,k.far=M.far=y.far=_e,(V!==k.near||X!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,X=k.far),k.layers.mask=K.layers.mask|6,y.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;const Ne=K.parent,we=k.cameras;Ae(k,Ne);for(let Ye=0;Ye<we.length;Ye++)Ae(we[Ye],Ne);we.length===2?pe(k,y,M):k.projectionMatrix.copy(y.projectionMatrix),We(K,k,Ne)};function We(K,ee,_e){_e===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ma*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return d[K]};let st=null;function lt(K,ee){if(u=ee.getViewerPose(c||a),p=ee,u!==null){const _e=u.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Ne=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let A=0;A<_e.length;A++){const ct=_e[A];let Oe=null;if(g!==null)Oe=g.getViewport(ct);else{const Me=h.getViewSubImage(f,ct);Oe=Me.viewport,A===0&&(e.setRenderTargetTextures(S,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(S))}let Ie=D[A];Ie===void 0&&(Ie=new Zt,Ie.layers.enable(A),Ie.viewport=new pt,D[A]=Ie),Ie.matrix.fromArray(ct.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ct.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),A===0&&(k.matrix.copy(Ie.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(Ie)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const A=h.getDepthInformation(_e[0]);A&&A.isValid&&A.texture&&m.init(A,i.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let A=0;A<_e.length;A++){const ct=_e[A].camera;if(ct){let Oe=d[ct];Oe||(Oe=new Fl,d[ct]=Oe);const Ie=h.getCameraImage(ct);Oe.sourceTexture=Ie}}}}for(let _e=0;_e<C.length;_e++){const Ne=R[_e],we=C[_e];Ne!==null&&we!==void 0&&we.update(Ne,ee,c||a)}st&&st(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Ze=new Ol;Ze.setAnimationLoop(lt),this.setAnimationLoop=function(K){st=K},this.dispose=function(){}}}const Vn=new cn,Mm=new at;function Sm(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Pl(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,w,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&g(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,w,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),T=w.envMap,S=w.envMapRotation;T&&(m.envMap.value=T,Vn.copy(S),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Vn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ym(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const S=T.program;n.uniformBlockBinding(w,S)}function c(w,T){let S=i[w.id];S===void 0&&(p(w),S=u(w),i[w.id]=S,w.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(w,C);const R=e.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function u(w){const T=h();w.__bindingPointIndex=T;const S=s.createBuffer(),C=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const T=i[w.id],S=w.uniforms,C=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let R=0,I=S.length;R<I;R++){const O=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,M=O.length;y<M;y++){const D=O[y];if(g(D,R,y,C)===!0){const k=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<V.length;j++){const $=V[j],ae=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,k+X,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,X),X+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(w,T,S,C){const R=w.value,I=T+"_"+S;if(C[I]===void 0)return typeof R=="number"||typeof R=="boolean"?C[I]=R:C[I]=R.clone(),!0;{const O=C[I];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return C[I]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function p(w){const T=w.uniforms;let S=0;const C=16;for(let I=0,O=T.length;I<O;I++){const y=Array.isArray(T[I])?T[I]:[T[I]];for(let M=0,D=y.length;M<D;M++){const k=y[M],V=Array.isArray(k.value)?k.value:[k.value];for(let X=0,j=V.length;X<j;X++){const $=V[X],ae=x($),G=S%C,he=G%ae.boundary,pe=G+he;S+=he,pe!==0&&C-pe<ae.storage&&(S+=C-pe),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=ae.storage}}}const R=S%C;return R>0&&(S+=C-R),w.__size=S,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function d(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}class bm{constructor(e={}){const{canvas:t=Jc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const p=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=Ot;let R=0,I=0,O=null,y=-1,M=null;const D=new pt,k=new pt;let V=null;const X=new qe(0);let j=0,$=t.width,ae=t.height,G=1,he=null,pe=null;const Ae=new pt(0,0,$,ae),We=new pt(0,0,$,ae);let st=!1;const lt=new Na;let Ze=!1,K=!1;const ee=new at,_e=new F,Ne=new pt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Et(){return O===null?G:1}let A=n;function ct(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",te,!1),A===null){const U="webgl2";if(A=ct(U,v),A===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Oe,Ie,Me,ht,Se,He,St,mt,E,_,B,Y,J,W,Te,oe,ye,be,se,fe,De,Ee,ue,Be;function L(){Oe=new If(A),Oe.init(),Ee=new mm(A,Oe),Ie=new wf(A,Oe,e,Ee),Me=new fm(A,Oe),Ie.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),ht=new Ff(A),Se=new em,He=new pm(A,Oe,Me,Se,Ie,Ee,ht),St=new Rf(S),mt=new Df(S),E=new Hh(A),ue=new Ef(A,E),_=new Uf(A,E,ht,ue),B=new Bf(A,_,E,ht),se=new Of(A,Ie,He),oe=new Af(Se),Y=new Qp(S,St,mt,Oe,Ie,ue,oe),J=new Sm(S,Se),W=new nm,Te=new lm(Oe),be=new bf(S,St,mt,Me,B,g,l),ye=new um(S,B,Ie),Be=new ym(A,ht,Ie,Me),fe=new Tf(A,Oe,ht),De=new Nf(A,Oe,ht),ht.programs=Y.programs,S.capabilities=Ie,S.extensions=Oe,S.properties=Se,S.renderLists=W,S.shadowMap=ye,S.state=Me,S.info=ht}L();const re=new xm(S,A);this.xr=re,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize($,ae,!1))},this.getSize=function(v){return v.set($,ae)},this.setSize=function(v,U,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,ae=U,t.width=Math.floor(v*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set($*G,ae*G).floor()},this.setDrawingBufferSize=function(v,U,z){$=v,ae=U,G=z,t.width=Math.floor(v*z),t.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Ae)},this.setViewport=function(v,U,z,H){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,U,z,H),Me.viewport(D.copy(Ae).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(We)},this.setScissor=function(v,U,z,H){v.isVector4?We.set(v.x,v.y,v.z,v.w):We.set(v,U,z,H),Me.scissor(k.copy(We).multiplyScalar(G).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){Me.setScissorTest(st=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){pe=v},this.getClearColor=function(v){return v.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,z=!0){let H=0;if(v){let N=!1;if(O!==null){const ne=O.texture.format;N=ne===La||ne===Pa||ne===Ca}if(N){const ne=O.texture.type,de=ne===ln||ne===jn||ne===$i||ne===qi||ne===wa||ne===Aa,ve=be.getClearColor(),me=be.getClearAlpha(),Pe=ve.r,Ue=ve.g,Re=ve.b;de?(p[0]=Pe,p[1]=Ue,p[2]=Re,p[3]=me,A.clearBufferuiv(A.COLOR,0,p)):(x[0]=Pe,x[1]=Ue,x[2]=Re,x[3]=me,A.clearBufferiv(A.COLOR,0,x))}else H|=A.COLOR_BUFFER_BIT}U&&(H|=A.DEPTH_BUFFER_BIT),z&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",te,!1),be.dispose(),W.dispose(),Te.dispose(),Se.dispose(),St.dispose(),mt.dispose(),B.dispose(),ue.dispose(),Be.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",en),re.removeEventListener("sessionend",za),Nn.stop()};function le(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=ht.autoReset,U=ye.enabled,z=ye.autoUpdate,H=ye.needsUpdate,N=ye.type;L(),ht.autoReset=v,ye.enabled=U,ye.autoUpdate=z,ye.needsUpdate=H,ye.type=N}function te(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Z(v){const U=v.target;U.removeEventListener("dispose",Z),xe(U)}function xe(v){Fe(v),Se.remove(v)}function Fe(v){const U=Se.get(v).programs;U!==void 0&&(U.forEach(function(z){Y.releaseProgram(z)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,z,H,N,ne){U===null&&(U=we);const de=N.isMesh&&N.matrixWorld.determinant()<0,ve=Xl(v,U,z,H,N);Me.setMaterial(H,de);let me=z.index,Pe=1;if(H.wireframe===!0){if(me=_.getWireframeAttribute(z),me===void 0)return;Pe=2}const Ue=z.drawRange,Re=z.attributes.position;let Xe=Ue.start*Pe,et=(Ue.start+Ue.count)*Pe;ne!==null&&(Xe=Math.max(Xe,ne.start*Pe),et=Math.min(et,(ne.start+ne.count)*Pe)),me!==null?(Xe=Math.max(Xe,0),et=Math.min(et,me.count)):Re!=null&&(Xe=Math.max(Xe,0),et=Math.min(et,Re.count));const ft=et-Xe;if(ft<0||ft===1/0)return;ue.setup(N,H,ve,z,me);let ot,it=fe;if(me!==null&&(ot=E.get(me),it=De,it.setIndex(ot)),N.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*Et()),it.setMode(A.LINES)):it.setMode(A.TRIANGLES);else if(N.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*Et()),N.isLineSegments?it.setMode(A.LINES):N.isLineLoop?it.setMode(A.LINE_LOOP):it.setMode(A.LINE_STRIP)}else N.isPoints?it.setMode(A.POINTS):N.isSprite&&it.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,ut=N._multiDrawCounts,je=N._multiDrawCount,It=me?E.get(me).bytesPerElement:1,Zn=Se.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<je;Ut++)Zn.setValue(A,"_gl_DrawID",Ut),it.render(Ce[Ut]/It,ut[Ut])}else if(N.isInstancedMesh)it.renderInstances(Xe,ft,N.count);else if(z.isInstancedBufferGeometry){const Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ut=Math.min(z.instanceCount,Ce);it.renderInstances(Xe,ft,ut)}else it.render(Xe,ft)};function rt(v,U,z){v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=Dt,v.needsUpdate=!0,ts(v,U,z),v.side=Ln,v.needsUpdate=!0,ts(v,U,z),v.side=_n):ts(v,U,z)}this.compile=function(v,U,z=null){z===null&&(z=v),d=Te.get(z),d.init(U),T.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),v!==z&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const H=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const ve=ne[de];rt(ve,z,N),H.add(ve)}else rt(ne,z,N),H.add(ne)}),d=T.pop(),H},this.compileAsync=function(v,U,z=null){const H=this.compile(v,U,z);return new Promise(N=>{function ne(){if(H.forEach(function(de){Se.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){N(v);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Je=null;function hn(v){Je&&Je(v)}function en(){Nn.stop()}function za(){Nn.start()}const Nn=new Ol;Nn.setAnimationLoop(hn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(v){Je=v,re.setAnimationLoop(v),v===null?Nn.stop():Nn.start()},re.addEventListener("sessionstart",en),re.addEventListener("sessionend",za),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,U,O),d=Te.get(v,T.length),d.init(U),T.push(d),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(ee,on,U.reversedDepth),K=this.localClippingEnabled,Ze=oe.init(this.clippingPlanes,K),m=W.get(v,w.length),m.init(),w.push(m),re.enabled===!0&&re.isPresenting===!0){const ne=S.xr.getDepthSensingMesh();ne!==null&&Xs(ne,U,-1/0,S.sortObjects)}Xs(v,U,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(he,pe),Ye=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ye&&be.addToRenderList(m,v),this.info.render.frame++,Ze===!0&&oe.beginShadows();const z=d.state.shadowsArray;ye.render(z,v,U),Ze===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ne=U.cameras;if(N.length>0)for(let de=0,ve=ne.length;de<ve;de++){const me=ne[de];Va(H,N,v,me)}Ye&&be.render(v);for(let de=0,ve=ne.length;de<ve;de++){const me=ne[de];Ha(m,v,me,me.viewport)}}else N.length>0&&Va(H,N,v,U),Ye&&be.render(v),Ha(m,v,U);O!==null&&I===0&&(He.updateMultisampleRenderTarget(O),He.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(S,v,U),ue.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],Ze===!0&&oe.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Xs(v,U,z,H){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||lt.intersectsSprite(v)){H&&Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ee);const de=B.update(v),ve=v.material;ve.visible&&m.push(v,de,ve,z,Ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||lt.intersectsObject(v))){const de=B.update(v),ve=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ne.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ne.copy(de.boundingSphere.center)),Ne.applyMatrix4(v.matrixWorld).applyMatrix4(ee)),Array.isArray(ve)){const me=de.groups;for(let Pe=0,Ue=me.length;Pe<Ue;Pe++){const Re=me[Pe],Xe=ve[Re.materialIndex];Xe&&Xe.visible&&m.push(v,de,Xe,z,Ne.z,Re)}}else ve.visible&&m.push(v,de,ve,z,Ne.z,null)}}const ne=v.children;for(let de=0,ve=ne.length;de<ve;de++)Xs(ne[de],U,z,H)}function Ha(v,U,z,H){const N=v.opaque,ne=v.transmissive,de=v.transparent;d.setupLightsView(z),Ze===!0&&oe.setGlobalState(S.clippingPlanes,z),H&&Me.viewport(D.copy(H)),N.length>0&&es(N,U,z),ne.length>0&&es(ne,U,z),de.length>0&&es(de,U,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Va(v,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Dn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Zi:ln,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=d.state.transmissionRenderTarget[H.id],de=H.viewport||D;ne.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);const ve=S.getRenderTarget(),me=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(ne),S.getClearColor(X),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),Ye&&be.render(z);const Ue=S.toneMapping;S.toneMapping=Cn;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),Ze===!0&&oe.setGlobalState(S.clippingPlanes,H),es(v,z,H),He.updateMultisampleRenderTarget(ne),He.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let et=0,ft=U.length;et<ft;et++){const ot=U[et],it=ot.object,Ce=ot.geometry,ut=ot.material,je=ot.group;if(ut.side===_n&&it.layers.test(H.layers)){const It=ut.side;ut.side=Dt,ut.needsUpdate=!0,Ga(it,z,H,Ce,ut,je),ut.side=It,ut.needsUpdate=!0,Xe=!0}}Xe===!0&&(He.updateMultisampleRenderTarget(ne),He.updateRenderTargetMipmap(ne))}S.setRenderTarget(ve,me,Pe),S.setClearColor(X,j),Re!==void 0&&(H.viewport=Re),S.toneMapping=Ue}function es(v,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ne=v.length;N<ne;N++){const de=v[N],ve=de.object,me=de.geometry,Pe=de.group;let Ue=de.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),ve.layers.test(z.layers)&&Ga(ve,U,z,me,Ue,Pe)}}function Ga(v,U,z,H,N,ne){v.onBeforeRender(S,U,z,H,N,ne),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(S,U,z,H,v,ne),N.transparent===!0&&N.side===_n&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,S.renderBufferDirect(z,U,H,N,v,ne),N.side=Ln,N.needsUpdate=!0,S.renderBufferDirect(z,U,H,N,v,ne),N.side=_n):S.renderBufferDirect(z,U,H,N,v,ne),v.onAfterRender(S,U,z,H,N,ne)}function ts(v,U,z){U.isScene!==!0&&(U=we);const H=Se.get(v),N=d.state.lights,ne=d.state.shadowsArray,de=N.state.version,ve=Y.getParameters(v,N.state,ne,U,z),me=Y.getProgramCacheKey(ve);let Pe=H.programs;H.environment=v.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(v.isMeshStandardMaterial?mt:St).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",Z),Pe=new Map,H.programs=Pe);let Ue=Pe.get(me);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===de)return Xa(v,ve),Ue}else ve.uniforms=Y.getUniforms(v),v.onBeforeCompile(ve,S),Ue=Y.acquireProgram(ve,me),Pe.set(me,Ue),H.uniforms=ve.uniforms;const Re=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Xa(v,ve),H.needsLights=ql(v),H.lightsStateVersion=de,H.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Wa(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Ds.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Xa(v,U){const z=Se.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Xl(v,U,z,H,N){U.isScene!==!0&&(U=we),He.resetTextureUnits();const ne=U.fog,de=H.isMeshStandardMaterial?U.environment:null,ve=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wi,me=(H.isMeshStandardMaterial?mt:St).get(H.envMap||de),Pe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,et=!!z.morphAttributes.color;let ft=Cn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ft=S.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=ot!==void 0?ot.length:0,Ce=Se.get(H),ut=d.state.lights;if(Ze===!0&&(K===!0||v!==M)){const Rt=v===M&&H.id===y;oe.setState(H,v,Rt)}let je=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ut.state.version||Ce.outputColorSpace!==ve||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==me||H.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==Ue||Ce.morphTargets!==Re||Ce.morphNormals!==Xe||Ce.morphColors!==et||Ce.toneMapping!==ft||Ce.morphTargetsCount!==it)&&(je=!0):(je=!0,Ce.__version=H.version);let It=Ce.currentProgram;je===!0&&(It=ts(H,U,N));let Zn=!1,Ut=!1,Ii=!1;const dt=It.getUniforms(),zt=Ce.uniforms;if(Me.useProgram(It.program)&&(Zn=!0,Ut=!0,Ii=!0),H.id!==y&&(y=H.id,Ut=!0),Zn||M!==v){Me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),dt.setValue(A,"projectionMatrix",v.projectionMatrix),dt.setValue(A,"viewMatrix",v.matrixWorldInverse);const Lt=dt.map.cameraPosition;Lt!==void 0&&Lt.setValue(A,_e.setFromMatrixPosition(v.matrixWorld)),Ie.logarithmicDepthBuffer&&dt.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ut=!0,Ii=!0)}if(N.isSkinnedMesh){dt.setOptional(A,N,"bindMatrix"),dt.setOptional(A,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(A,"boneTexture",Rt.boneTexture,He))}N.isBatchedMesh&&(dt.setOptional(A,N,"batchingTexture"),dt.setValue(A,"batchingTexture",N._matricesTexture,He),dt.setOptional(A,N,"batchingIdTexture"),dt.setValue(A,"batchingIdTexture",N._indirectTexture,He),dt.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(A,"batchingColorTexture",N._colorsTexture,He));const Ht=z.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&se.update(N,z,It),(Ut||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,dt.setValue(A,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zt.envMap.value=me,zt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(zt.envMapIntensity.value=U.environmentIntensity),Ut&&(dt.setValue(A,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&$l(zt,Ii),ne&&H.fog===!0&&J.refreshFogUniforms(zt,ne),J.refreshMaterialUniforms(zt,H,G,ae,d.state.transmissionRenderTarget[v.id]),Ds.upload(A,Wa(Ce),zt,He)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ds.upload(A,Wa(Ce),zt,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(A,"center",N.center),dt.setValue(A,"modelViewMatrix",N.modelViewMatrix),dt.setValue(A,"normalMatrix",N.normalMatrix),dt.setValue(A,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Rt=H.uniformsGroups;for(let Lt=0,$s=Rt.length;Lt<$s;Lt++){const Fn=Rt[Lt];Be.update(Fn,It),Be.bind(Fn,It)}}return It}function $l(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function ql(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,U,z){const H=Se.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(v.texture).__webglTexture=U,Se.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const z=Se.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Yl=A.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){O=v,R=U,I=z;let H=!0,N=null,ne=!1,de=!1;if(v){const me=Se.get(v);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(me.__hasExternalTextures)He.rebindTextures(v,Se.get(v.texture).__webglTexture,Se.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Re=v.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&Se.has(Re)&&(v.width!==Re.image.width||v.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(de=!0);const Ue=Se.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][z]:N=Ue[U],ne=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?N=Se.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[z]:N=Ue,D.copy(v.viewport),k.copy(v.scissor),V=v.scissorTest}else D.copy(Ae).multiplyScalar(G).floor(),k.copy(We).multiplyScalar(G).floor(),V=st;if(z!==0&&(N=Yl),Me.bindFramebuffer(A.FRAMEBUFFER,N)&&H&&Me.drawBuffers(v,N),Me.viewport(D),Me.scissor(k),Me.setScissorTest(V),ne){const me=Se.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,z)}else if(de){const me=U;for(let Pe=0;Pe<v.textures.length;Pe++){const Ue=Se.get(v.textures[Pe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,z,me)}}else if(v!==null&&z!==0){const me=Se.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,me.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(v,U,z,H,N,ne,de,ve=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Me.bindFramebuffer(A.FRAMEBUFFER,me);try{const Pe=v.textures[ve],Ue=Pe.format,Re=Pe.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-H&&z>=0&&z<=v.height-N&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),A.readPixels(U,z,H,N,Ee.convert(Ue),Ee.convert(Re),ne))}finally{const Pe=O!==null?Se.get(O).__webglFramebuffer:null;Me.bindFramebuffer(A.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,H,N,ne,de,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(U>=0&&U<=v.width-H&&z>=0&&z<=v.height-N){Me.bindFramebuffer(A.FRAMEBUFFER,me);const Pe=v.textures[ve],Ue=Pe.format,Re=Pe.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.bufferData(A.PIXEL_PACK_BUFFER,ne.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),A.readPixels(U,z,H,N,Ee.convert(Ue),Ee.convert(Re),0);const et=O!==null?Se.get(O).__webglFramebuffer:null;Me.bindFramebuffer(A.FRAMEBUFFER,et);const ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Qc(A,ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ne),A.deleteBuffer(Xe),A.deleteSync(ft),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,z=0){const H=Math.pow(2,-z),N=Math.floor(v.image.width*H),ne=Math.floor(v.image.height*H),de=U!==null?U.x:0,ve=U!==null?U.y:0;He.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,de,ve,N,ne),Me.unbindTexture()};const jl=A.createFramebuffer(),Kl=A.createFramebuffer();this.copyTextureToTexture=function(v,U,z=null,H=null,N=0,ne=null){ne===null&&(N!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let de,ve,me,Pe,Ue,Re,Xe,et,ft;const ot=v.isCompressedTexture?v.mipmaps[ne]:v.image;if(z!==null)de=z.max.x-z.min.x,ve=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,Ue=z.min.y,Re=z.isBox3?z.min.z:0;else{const Ht=Math.pow(2,-N);de=Math.floor(ot.width*Ht),ve=Math.floor(ot.height*Ht),v.isDataArrayTexture?me=ot.depth:v.isData3DTexture?me=Math.floor(ot.depth*Ht):me=1,Pe=0,Ue=0,Re=0}H!==null?(Xe=H.x,et=H.y,ft=H.z):(Xe=0,et=0,ft=0);const it=Ee.convert(U.format),Ce=Ee.convert(U.type);let ut;U.isData3DTexture?(He.setTexture3D(U,0),ut=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),ut=A.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),ut=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const je=A.getParameter(A.UNPACK_ROW_LENGTH),It=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Zn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ut=A.getParameter(A.UNPACK_SKIP_ROWS),Ii=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ot.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ot.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Re);const dt=v.isDataArrayTexture||v.isData3DTexture,zt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const Ht=Se.get(v),Rt=Se.get(U),Lt=Se.get(Ht.__renderTarget),$s=Se.get(Rt.__renderTarget);Me.bindFramebuffer(A.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Fn=0;Fn<me;Fn++)dt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Se.get(v).__webglTexture,N,Re+Fn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,ne,ft+Fn)),A.blitFramebuffer(Pe,Ue,de,ve,Xe,et,de,ve,A.DEPTH_BUFFER_BIT,A.NEAREST);Me.bindFramebuffer(A.READ_FRAMEBUFFER,null),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Se.has(v)){const Ht=Se.get(v),Rt=Se.get(U);Me.bindFramebuffer(A.READ_FRAMEBUFFER,jl),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Kl);for(let Lt=0;Lt<me;Lt++)dt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ht.__webglTexture,N,Re+Lt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ht.__webglTexture,N),zt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rt.__webglTexture,ne,ft+Lt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Rt.__webglTexture,ne),N!==0?A.blitFramebuffer(Pe,Ue,de,ve,Xe,et,de,ve,A.COLOR_BUFFER_BIT,A.NEAREST):zt?A.copyTexSubImage3D(ut,ne,Xe,et,ft+Lt,Pe,Ue,de,ve):A.copyTexSubImage2D(ut,ne,Xe,et,Pe,Ue,de,ve);Me.bindFramebuffer(A.READ_FRAMEBUFFER,null),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else zt?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(ut,ne,Xe,et,ft,de,ve,me,it,Ce,ot.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(ut,ne,Xe,et,ft,de,ve,me,it,ot.data):A.texSubImage3D(ut,ne,Xe,et,ft,de,ve,me,it,Ce,ot):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ne,Xe,et,de,ve,it,Ce,ot.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ne,Xe,et,ot.width,ot.height,it,ot.data):A.texSubImage2D(A.TEXTURE_2D,ne,Xe,et,de,ve,it,Ce,ot);A.pixelStorei(A.UNPACK_ROW_LENGTH,je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,It),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Zn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ut),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ii),ne===0&&U.generateMipmaps&&A.generateMipmap(ut),Me.unbindTexture()},this.initRenderTarget=function(v){Se.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){R=0,I=0,O=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const b={grass:"#71987a",ground:"#c8c6b0",wall:"#e6dfcb",brick:"#b97059",wood:"#ae9476",blue:"#7e969e",green:"#234c42",yellow:"#e5bd4a",hair:"#704a35",skin:"#d8a783",white:"#f4efdd",dark:"#3d4c4e",orange:"#e8904b"},Le=(s,e,t,n,i=[0,0,0])=>({shape:s,p:e,s:t,color:n,r:i}),P=(s,e,t,n=[0,0,0])=>Le("box",s,e,t,n),Ge=(s,e,t,n=[0,0,0])=>Le("cyl",s,e,t,n);function sn(s){switch(s){case"lunch_cart":return[P([0,.8,0],[1.4,.15,.8],b.blue),P([0,.4,0],[1.25,.7,.65],b.white),...[-.45,0,.45].map((e,t)=>Ge([e,.93,0],[.32,.18,.32],[b.white,b.green,b.orange][t])),P([0,1,.32],[1.1,.025,.12],b.yellow),...[-.5,.5].map(e=>Ge([e,.08,0],[.15,.16,.15],b.dark))];case"mop":return[Ge([0,.8,0],[.065,1.5,.065],b.blue),P([0,.08,0],[.6,.15,.27],b.white)];case"orange":return[Le("sphere",[0,.12,0],[.25,.25,.25],b.orange),P([0,.25,0],[.03,.06,.03],b.green)];case"milk_carton":return[P([0,.18,0],[.22,.36,.22],b.white),P([0,.22,.115],[.17,.12,.02],b.blue),P([0,.39,0],[.22,.06,.12],b.white)];case"event_spinning_top":return sn("spinning_top");case"milk_fresh":case"milk_sour":case"milk_stinky":return[Ge([0,0,0],[1.8,.025,1.3],s==="milk_stinky"?"#a6b88c":"#ffffff"),...s==="milk_fresh"?[]:[0,1].map(e=>P([e*.3-.15,.3+e*.15,0],[.065,.4,.065],b.green,[0,0,.3]))];case"broken_broom_parts":return[Ge([0,.05,0],[.06,.65,.06],b.wood,[0,0,1.2]),P([.3,.05,0],[.25,.08,.2],b.yellow)];case"student_phone_win":return[...sn("student_phone"),P([0,.05,.05],[.15,.02,.01],b.green),P([0,.07,.05],[.02,.18,.01],b.green)];case"student_phone":return[P([0,0,0],[.3,.46,.06],b.dark),P([0,.01,.03],[.24,.34,.01],b.blue),P([0,.04,.04],[.1,.07,.01],b.yellow)];case"restricted_item_evidence":return[P([0,0,0],[.12,.16,.12],b.dark),P([0,.09,0],[.05,.03,.05],b.white)];case"life_smoke":return[Le("sphere",[0,0,0],[.23,.25,.23],"#ced5cb")];case"stomach_icon":return[Le("sphere",[0,0,0],[.35,.28,.08],b.yellow),P([0,0,.05],[.04,.13,.02],b.dark)];case"dog_soft_ball":case"dog_toy":return[Le("sphere",[0,.16,0],[.32,.32,.32],b.orange),P([0,.16,0],[.33,.05,.05],b.blue)];case"dog_mat":return[P([0,.025,0],[.9,.05,.65],b.blue)];case"dog_lion_bowl":case"dog_water_bowl":return[Ge([0,.08,0],[.4,.16,.4],s==="dog_lion_bowl"?b.orange:b.blue),Ge([0,.165,0],[.32,.02,.32],b.white)];case"meeting_bell":return[Le("cone",[0,.22,0],[.3,.32,.3],b.yellow),Ge([0,.36,0],[.06,.14,.06],b.dark)];case"meeting_gavel":return[Ge([0,.18,0],[.05,.35,.05],b.wood),P([0,.36,0],[.3,.13,.13],b.wood)];case"meeting_stamp":return[P([0,.04,0],[.22,.08,.18],b.blue),Ge([0,.19,0],[.1,.24,.1],b.hair)];case"meeting_vote":return[P([0,.19,0],[.32,.38,.04],b.green)];case"meeting_remote":case"meeting_aircon":case"meeting_music":return[P([0,.05,0],[.13,.08,.3],b.dark),P([0,.096,-.04],[.06,.02,.04],b.yellow)];case"wireless_microphone":return[Ge([0,.23,0],[.12,.46,.12],b.dark),Ge([0,.46,0],[.16,.055,.16],b.yellow),Le("sphere",[0,.57,0],[.24,.25,.24],b.blue),P([0,.56,.115],[.16,.025,.018],b.dark),P([0,.56,-.115],[.16,.025,.018],b.dark),P([.115,.56,0],[.018,.025,.16],b.dark)];case"basketball":return[Le("sphere",[0,.25,0],[.5,.5,.5],b.orange),P([0,.25,0],[.51,.035,.035],b.dark),P([0,.25,0],[.035,.035,.51],b.dark)];case"traffic_cone":return[Le("cone",[0,.4,0],[.6,.8,.6],b.orange),P([0,.04,0],[.75,.08,.75],b.orange),Ge([0,.3,0],[.48,.12,.48],b.white)];case"broom":return[Ge([0,.8,0],[.065,1.5,.065],b.wood),P([0,.1,0],[.5,.22,.15],b.yellow)];case"toy_mallet":return[Ge([0,.5,0],[.08,1,.08],b.wood),P([0,1,0],[.65,.32,.35],"#bd6d77")];case"drumstick":return[Ge([0,.35,0],[.045,.7,.045],b.wood),Le("sphere",[0,.72,0],[.08,.09,.08],b.wood)];case"recorder":return[Ge([0,.3,0],[.09,.6,.09],b.white),P([0,.42,.055],[.025,.26,.025],b.dark)];case"spinning_top":return[Le("cone",[0,.18,0],[.32,.3,.32],"#bc7084",[Math.PI,0,0]),Ge([0,.35,0],[.08,.16,.08],b.yellow)];case"trophy":return[P([0,.04,0],[.45,.08,.32],b.wood),Ge([0,.2,0],[.1,.3,.1],b.yellow),Le("cone",[0,.5,0],[.45,.4,.45],b.yellow),Le("torus",[0,.5,0],[.5,.5,.5],b.yellow)];case"principal_wig":return[Le("sphere",[0,.1,0],[.5,.25,.45],b.hair),P([0,0,-.05],[.45,.18,.32],b.hair)];case"principal_glasses":return[Le("torus",[-.1,.1,0],[.17,.17,.17],b.dark),Le("torus",[.1,.1,0],[.17,.17,.17],b.dark),P([0,.1,0],[.09,.025,.025],b.dark)];case"wall_clock":return[Ge([0,.35,0],[.62,.06,.62],b.white,[Math.PI/2,0,0]),P([0,.42,.05],[.025,.2,.025],b.dark),P([.09,.35,.05],[.2,.025,.025],b.dark)];case"laptop":return[P([0,.05,0],[.6,.07,.4],b.blue),P([0,.24,-.18],[.6,.4,.035],b.dark),P([0,.24,-.155],[.5,.28,.012],b.green)];case"piano":return[P([0,.75,0],[2,.85,.8],b.dark),P([0,.75,.55],[1.8,.1,.45],b.white),P([0,1.22,-.1],[2.1,.08,.8],b.dark),...[-.8,.8].map(e=>P([e,.35,0],[.14,.7,.14],b.dark)),...Array.from({length:10},(e,t)=>P([-.78+t*.17,.82,.47],[.05,.06,.18],b.dark))];case"music_stand":return[Ge([0,.65,0],[.05,1.2,.05],b.dark),P([0,1.2,0],[.6,.4,.035],b.dark,[-.25,0,0]),P([0,.04,0],[.55,.05,.06],b.dark),P([0,.04,0],[.06,.05,.55],b.dark)];case"coffee_machine":return[P([0,.4,0],[.65,.8,.5],b.dark),P([0,.56,.26],[.42,.2,.03],b.blue),P([0,.1,.3],[.6,.06,.3],b.dark),Ge([.2,.58,.3],[.08,.08,.08],b.yellow,[Math.PI/2,0,0])];case"coffee_cup":return[Ge([0,.13,0],[.22,.26,.22],b.white),Le("torus",[.14,.12,0],[.16,.16,.16],b.white),Ge([0,.265,0],[.18,.012,.18],b.hair)];case"office_chair":return[P([0,.5,0],[.7,.15,.65],b.blue),P([0,.85,-.27],[.7,.65,.12],b.blue),Ge([0,.25,0],[.06,.5,.06],b.dark),P([0,.05,0],[.9,.05,.06],b.dark),P([0,.05,0],[.06,.05,.9],b.dark)];case"trash_bin":return[Ge([0,.4,0],[.65,.8,.65],b.blue),Ge([0,.82,0],[.55,.04,.55],b.dark)];case"badminton_racket":case"table_tennis_racket":return[Ge([0,.3,0],[.06,.6,.06],b.wood),Le(s==="badminton_racket"?"torus":"sphere",[0,.7,0],s==="badminton_racket"?[.48,.6,.15]:[.32,.4,.06],s==="badminton_racket"?b.white:b.brick),P([0,.7,0],[.015,.4,.02],b.white)];case"triangle":return[P([-.15,.3,0],[.035,.5,.035],b.blue,[0,0,-.55]),P([.15,.3,0],[.035,.5,.035],b.blue,[0,0,.55]),P([0,.08,0],[.5,.035,.035],b.blue)];case"castanets":return[Le("sphere",[-.1,.08,0],[.18,.1,.2],b.hair),Le("sphere",[.1,.08,0],[.18,.1,.2],b.hair)];case"stopwatch":return[Ge([0,.15,0],[.22,.06,.22],b.blue,[Math.PI/2,0,0]),P([0,.28,0],[.065,.065,.065],b.dark)];case"chalk_eraser":return[P([0,.06,0],[.3,.12,.14],b.wood),P([0,.13,0],[.3,.04,.14],b.dark)];case"soft_parcel":case"cardboard_box":return[P([0,.23,0],[.55,.46,.45],s==="soft_parcel"?"#ba7785":b.wood),P([0,.465,0],[.12,.01,.45],b.white)];default:{let e={folder:b.brick,textbook:b.blue,exam_a:"#b8d7cd",exam_b:"#ead893"};return[P([0,.035,0],[.42,.07,.32],e[s]||b.white),P([-.1,.08,0],[.18,.01,.2],s==="folder"?b.white:b.blue)]}}}function ll(s,e=!1){const t=[P([0,.8,0],[1.6,.14,.85],b.wood),...[-.65,.65].flatMap(n=>[-.28,.28].map(i=>P([n,.4,i],[.09,.8,.09],b.dark)))];switch(s){case"tray":return[P([0,.74,0],[.6,.08,.4],b.blue),P([0,.8,0],[.48,.04,.3],b.white)];case"table":case"desk":return t;case"bench":return[P([0,.5,0],[1.6,.12,.55],b.wood),P([0,.85,-.28],[1.6,.55,.08],b.wood),P([-.6,.25,0],[.1,.5,.45],b.dark),P([.6,.25,0],[.1,.5,.45],b.dark)];case"chair":return sn("office_chair");case"planter":return[Ge([0,.3,0],[.6,.6,.6],b.brick),Le("sphere",[0,.7,0],[.6,.7,.6],b.grass)];case"dummy":return[Ge([0,.6,0],[.1,1.2,.1],b.wood),Le("sphere",[0,1.2,0],[.45,.45,.45],b.yellow),P([0,.8,0],[.6,.5,.22],b.brick),P([0,.03,0],[.7,.06,.7],b.wood)];case"podium":return[P([0,.5,0],[1.4,1,.8],b.wood),P([0,1,0],[1.55,.09,.9],b.green)];case"shelter":return[P([0,1,0],[1.3,2,1.5],b.blue),P([0,1,.77],[.55,1.8,.03],b.dark)];case"bed":return Lr({type:"medical_bed",w:1.5,d:2.6,h:.65});case"cabinet":return[P([0,.75,0],[1.2,1.5,.6],b.white),P([0,1,.31],[.3,.09,.02],b.brick),P([0,1,.31],[.09,.3,.02],b.brick)];case"stall":return[...t,P([0,2,0],[2.8,.15,1.5],b.brick),P([-1.2,1,0],[.09,2,.09],b.wood),P([1.2,1,0],[.09,2,.09],b.wood)];default:return t}}function Ar(s,e,t=!1,n=[]){const i=["Walk","Flee","Chase","Tattle","SoundInvestigate","Gather","Seat","Leave","ReturnItem","ScienceWalk","LifeWalk","LifeEscort","LifePatrol","LifeInspect","walk","run","dodge"].includes(s.state||s.action),r=s.dogControl?.remaining>0?"DogHeld":s.state||s.action,a=i?Math.sin(e*(r==="run"?14:9))*.45:0;let o=b.skin,l=t?b.yellow:s.role==="student"?b.white:s.role==="staff"?b.blue:b.brick;s.role==="staff"&&(l={nurse:b.white,shop_aunt:b.brick,guard_uncle:b.blue,pe_teacher:b.green,principal:b.dark,dean:"#626c82",science_teacher:b.white}[s.type]||l),(s.role==="parent"||s.role==="visitor")&&(l={yoga:"#ad83a8",sports:"#547b92",runner:"#8b9b54",neat:"#e6dfcb",armored:"#717b81",drama:"#bc7084",gardener:"#829b64",courier:"#ae9476",photographer:"#465a67",whistle:"#bd8e55",duo:"#7e969e"}[s.type]||l);let c=[Le("sphere",[0,1.48,0],[.42,.46,.4],o),P([0,1.01,0],[.42,.56,.27],l)];t?(c.push(Le("cyl",[0,.53,0],[.69,.81,.6],b.yellow),P([-.11,1.26,.16],[.12,.14,.045],b.white,[0,0,-.3]),P([.11,1.26,.16],[.12,.14,.045],b.white,[0,0,.3])),c.push(Le("sphere",[0,1.64,-.02],[.46,.28,.44],b.hair),P([-.18,1.48,-.01],[.12,.36,.3],b.hair),P([.18,1.48,-.01],[.12,.36,.3],b.hair),P([0,1.46,-.18],[.4,.34,.09],b.hair))):(s.type!=="science_teacher"&&c.push(P([0,1.65,-.03],[.44,.16,.35],s.type==="principal"?"#726250":b.hair)),s.role!=="student"&&c.push(P([0,.72,0],[.46,.1,.27],b.dark))),s.type==="patrol_teacher"&&c.push(P([0,1.04,.145],[.34,.48,.035],"#31445b"),P([.3,.9,.17],[.25,.35,.04],b.wood)),s.type==="science_teacher"&&c.push(P([0,1.47,.05],[.43,.3,.32],o),P([-.1,1.57,.215],[.14,.04,.025],b.dark),P([.1,1.57,.215],[.14,.04,.025],b.dark),P([0,1.05,0],[.6,.5,.28],b.white),P([-.18,1.14,.18],[.05,.16,.025],b.blue),...sn("principal_glasses").map(h=>({...h,p:[h.p[0]*1.25,h.p[1]+1.4,h.p[2]+.24]})));let u=n.includes("shoes_red")?b.brick:n.includes("shoes_teal")?b.green:b.hair;for(let h of[-1,1]){let f=h*.14;c.push(P([f,t?.18:.38,Math.sin(a*h)*.13],[.13,t?.22:.6,.14],t?o:b.dark,[a*h,0,0]),P([f,.065,.07+Math.sin(a*h)*.18],[.18,.13,.29],u));let g=-a*h;["Attack","attack","conduct","LifeSwing"].includes(r)&&(g=h===1?-1.25-Math.sin(e*20)*.25:0),["Call","Film","Surprise","Gate","roll","teach","piano","play","LifePhone","LifeHide","LifeThrow","LifePoint","LifeCover","LifeUrgent","LifeWord","LifeLate","eat"].includes(r)&&(g=-1.2),r==="Clean"&&(g=-.7),["pet","ScienceFeed"].includes(r)&&(g=-1.1),["throw","wear"].includes(r)&&(g=h===1?-2:0),["pickup","drop","leaveHide"].includes(r)&&(g=-.5),r==="idle"&&Math.floor(e)%18===0&&(g=h===1?-1.1:0),c.push(P([h*.31,1.01,Math.sin(g)*-.15],[.14,.5,.15],l,[g,0,h*.08]),Le("sphere",[h*.32,.76,Math.sin(g)*-.3],[.14,.14,.14],o))}if(r==="LifeLate"&&c.push(P([-.23,1.5,0],[.08,.2,.14],b.dark),P([.23,1.5,0],[.08,.2,.14],b.dark),P([0,1.73,0],[.46,.06,.07],b.dark)),s.lifeOdor&&c.push(P([-.09,1.54,.21],[.12,.025,.025],b.dark,[0,0,-.25]),P([.09,1.54,.21],[.12,.025,.025],b.dark,[0,0,.25])),c.push(P([-.09,1.49,.196],[.035,.035,.012],b.dark),P([.09,1.49,.196],[.035,.035,.012],b.dark)),(r==="Film"||r==="Call")&&c.push(P([.32,1.43,.18],[.1,.17,.035],b.dark)),s.type==="nurse"&&c.push(P([0,1.73,0],[.36,.1,.32],b.white),P([0,1.74,.17],[.13,.025,.015],b.brick),P([0,1.74,.17],[.025,.08,.015],b.brick)),s.type==="guard_uncle"&&c.push(P([0,1.73,0],[.5,.1,.48],b.blue)),s.type==="shop_aunt"&&c.push(P([0,.87,.17],[.35,.4,.03],b.white)),s.type==="principal"&&c.push(P([0,1.2,.15],[.05,.28,.025],b.brick)),s.role==="parent"||s.role==="visitor")switch(s.type){case"spatula":c.push(Ge([.37,.85,.2],[.05,.5,.05],b.dark),P([.37,1.12,.2],[.18,.2,.04],b.blue));break;case"briefcase":c.push(P([.43,.55,0],[.35,.3,.12],b.hair));break;case"shopping_bag":c.push(P([.4,.6,0],[.35,.45,.22],b.green));break;case"umbrella":c.push(Le("cone",[.35,1.8,.1],[1,.25,1],b.blue),Ge([.35,1.1,.1],[.03,1.4,.03],b.wood));break;case"gardener":c.push(Ge([.4,.9,0],[.05,1.6,.05],b.wood),P([.4,.12,0],[.45,.24,.13],b.yellow));break;case"yoga":c.push(P([0,1.64,.17],[.43,.06,.04],"#dbb4d7"));break;case"courier":c.push(P([0,1.71,0],[.5,.08,.5],b.yellow),P([.38,.7,.1],[.4,.3,.3],b.wood));break;case"photographer":c.push(P([0,1.18,.2],[.25,.16,.13],b.dark),Ge([0,1.18,.29],[.1,.08,.1],b.blue,[Math.PI/2,0,0]));break;case"whistle":c.push(Le("sphere",[0,1.12,.2],[.09,.09,.09],b.yellow));break;case"camper":c.push(P([0,1.72,0],[.7,.05,.65],b.wood));break;case"runner":case"sports":c.push(P([0,1.62,.2],[.43,.055,.025],b.white));break;case"neat":c.push(P([0,.93,.155],[.34,.45,.025],b.white));break;case"armored":c.push(P([0,1.05,.16],[.45,.45,.07],b.dark),P([-.14,.35,.1],[.2,.18,.08],b.blue),P([.14,.35,.1],[.2,.18,.08],b.blue));break;case"drama":c.push(P([0,1.1,-.23],[.5,.9,.05],"#844968"));break;case"pta_leader":c.push(P([0,1.1,.16],[.42,.12,.035],b.yellow));break;case"duo":c.push(P([0,1.65,.18],[.43,.06,.025],b.yellow));break;case"protective":c.push(P([.4,.7,0],[.4,.6,.4],b.yellow));break;case"nagging":c.push(P([0,1.71,0],[.2,.12,.2],b.hair));break}return n.some(h=>h.startsWith("badge"))&&c.push(Le("sphere",[-.13,1.18,.16],[.08,.08,.035],b.green)),n.some(h=>h.startsWith("glasses"))&&c.push(...sn("principal_glasses").map(h=>({...h,p:[h.p[0],h.p[1]+1.38,h.p[2]+.22],color:n.includes("glasses_blue")?b.blue:h.color}))),["pet","ScienceFeed"].includes(r)&&(c=c.map(h=>({...h,p:[h.p[0],h.p[1]*.62,h.p[2]+h.p[1]*.18]}))),["pickup","drop"].includes(r)&&(c=c.map(h=>({...h,p:[h.p[0],h.p[1]*.85,h.p[2]+h.p[1]*.12]}))),["hit","ScienceHit"].includes(r)&&(c=c.map(h=>({...h,p:[h.p[0],h.p[1]*.8,h.p[2]-.1]}))),["DogHeld","Following","Hot","Recording","Protecting","Coordinating","Voting","Speaking"].includes(r)&&(c=c.map(h=>({...h,r:[(h.r?.[0]||0)+Math.sin(e*5)*.08,h.r?.[1]||0,h.r?.[2]||0]}))),(r==="Sleeping"||r==="Seated")&&(c=c.map(h=>({...h,p:[h.p[0],h.p[1]*.78,h.p[2]]}))),(s.hp===0||r==="Recover")&&(c=c.map(h=>({...h,p:[h.p[0],h.p[1]*.4,h.p[2]+h.p[1]*.15]}))),c}function cl(s,e){const t=s.id==="dog_mani",n=t?"#f4f0e6":"#b77540",i=t?"#e2ded1":"#f3d7ac",r=["Rest","Idle","Petting"].includes(s.state),a=["Roam","Greet","Following","Fetching","Returning","AssistApproach","Relocating","Feeding"].includes(s.state),o=Math.sin(e*(s.state==="Petting"?15:7))*.35,l=r?.3:.42,c=[P([0,l,-.03],[.4,.32,.64],n),Le("sphere",[0,l+.14,.33],[.34,.34,.32],n),Le("cone",[0,l+.08,.56],[.23,.23,.3],i,[Math.PI/2,0,0]),P([0,l+.07,.69],[.09,.07,.05],b.dark),P([-.085,l+.2,.48],[.035,.035,.025],b.dark),P([.085,l+.2,.48],[.035,.035,.025],b.dark),...[-1,1].map(u=>Le("cone",[u*.12,l+.38,.3],[.15,.23,.14],n)),P([0,l-.03,.2],[.32,.24,.09],i),Le("torus",[Math.sin(o)*.12,l+.16,-.4],t?[.35,.35,.23]:[.24,.24,.16],n,[0,o,0])];for(const u of[-.14,.14])for(const h of[-.24,.2])c.push(P([u,r?.1:.18,h+(a?Math.sin(e*11+(u*h>0?0:Math.PI))*.08:0)],[.09,r?.16:.32,.1],n));if(t)for(const u of[-.17,0,.17])c.push(Le("cone",[u,l+.01,.23],[.18,.28,.2],i,[Math.PI,0,u]));return s.state==="Feeding"||s.state==="AssistContact"?c.map(u=>({...u,p:[u.p[0],u.p[1]-(u.p[2]>.25?.12:0),u.p[2]]})):c}class Em{constructor(e,t){this.canvas=e,this.game=t,this.renderer=new bm({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor("#9cae97"),this.renderer.outputColorSpace=Ot,this.scene.add(new Uh("#fff6de","#a4b6a5",1.6));const n=new Uo("#fff3d6",1.7);n.position.set(-20,35,10),this.scene.add(n);const i=new Lo({color:"white",flatShading:!0});let r={box:new Li(1,1,1),cyl:new Hs(.43,.5,1,8),sphere:new Oa(.5,8,6),cone:new Os(.5,1,8),torus:new Xi(.4,.055,4,12),disc:new Fa(.5,12)};for(let[a,o]of Object.entries(r)){let l=new Po(o,i,6e3);l.instanceMatrix.setUsage(so),l.frustumCulled=!1,this.batches.set(a,{mesh:l,count:0,staticCount:0}),this.scene.add(l)}for(const[a,o]of[[new Xi(1,.12,6,32),"#67471e"],[new Xi(1,.075,6,32),"#ffda35"],[new Os(.24,.6,5),"#ffda35"]]){const l=new Ua({color:o,depthTest:!1,depthWrite:!1}),c=new Po(a,l,24);c.frustumCulled=!1,c.renderOrder=80+this.goalMeshes.length,c.instanceMatrix.setUsage(so),this.goalMeshes.push(c),this.scene.add(c)}this.geometryCount=Object.keys(r).length+3,this.resize(),t.listeners.push(a=>{if(a.type==="reset"){this.effects=[],this.shakeUntil=0;return}if(a.type==="CombatResolved"&&a.actorId===t.player.id){this.shakeUntil=t.time+.16;const o=t.npcs.find(l=>l.id===a.targetId);o&&(o.flashUntil=(t.meeting.running?t.meeting.elapsed:t.time)+.13)}if(["CombatResolved","propDamaged","spill","mess","instrument","paperCollected"].includes(a.type)){let o=t.npcs.find(l=>l.id===a.targetId)||t.props.find(l=>l.id===a.data.id)||t.objects.get(a.data.id)||t.player;for(let l=0;l<4;l++)this.effects.length<(t.meeting.running?Math.max(0,12-t.meeting.papers.length-(t.meeting.airMode===2?3:0)):t.profile.settings.quality==="low"?48:96)&&this.effects.push({x:o.x,z:o.z,start:t.time,index:l,type:a.type})}}),window.addEventListener("resize",()=>this.resize())}scene=new Eo;camera=new Bs(-15,15,12,-12,.1,200);renderer;batches=new Map;staticParts=[];dummy=new _t;color=new qe;ray=new kh;plane=new Tn(new F(0,1,0),0);pointer=new ze;target=new F;lastSession=-1;fps=0;frames=[];calls=0;triangles=0;quality="standard";autoLow=!1;slow=0;fast=0;labels=[];geometryCount=0;ctxLost=!1;alpha=1;effects=[];goalMeshes=[];visibleGoals=[];shakeUntil=0;shakeOffset={x:0,z:0};resize(){let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight,n=e/t,i=cc(e,t,matchMedia("(pointer:coarse)").matches);this.camera.left=-i*n,this.camera.right=i*n,this.camera.top=i,this.camera.bottom=-i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.setDPR()}setDPR(){let e=this.game.profile.settings.quality;this.quality=e==="low"||e==="auto"&&this.autoLow?"low":"standard",this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality==="low"?1:1.5))}add(e,t,n=0,i=1,r=0){for(let a of e){if(a.hidden)continue;let o=a.p[0]*i,l=a.p[1]*i,c=a.p[2]*i,u=Math.cos(n),h=Math.sin(n);this.dummy.position.set(t[0]+o*u+c*h,t[1]+l,t[2]-o*h+c*u),this.dummy.rotation.set((a.r?.[0]||0)+r,n+(a.r?.[1]||0),a.r?.[2]||0),this.dummy.scale.set(a.s[0]*i,a.s[1]*i,a.s[2]*i),this.dummy.updateMatrix();let f=this.batches.get(a.shape);f.count>=6e3||(f.mesh.setMatrixAt(f.count,this.dummy.matrix),f.mesh.setColorAt(f.count,this.color.set(a.color)),f.count++)}}label(e,t,n=2.7,i=.18){let r=document.createElement("canvas");r.width=512,r.height=128;let a=r.getContext("2d");a.fillStyle="#f4efdd",a.fillRect(0,0,512,128),a.fillStyle=b.green,a.font="bold 48px system-ui";const o=Math.min(48,48*460/Math.max(1,a.measureText(e).width));a.font=`bold ${o}px system-ui`,a.textAlign="center",a.fillText(e,256,81);let l=new Lh(r),c=new Il({map:l,depthTest:!1,depthWrite:!1}),u=new Th(c);u.position.set(t.x,Math.max(i,3),t.z),u.renderOrder=100,u.userData.text=e,u.userData.anchor={x:t.x,z:t.z},u.userData.baseSize=n,u.userData.minPixels=Math.min(270,Math.max(130,e.length*13+24)),u.scale.set(n,n/4,1),this.scene.add(u),this.labels.push(u)}rebuild(){this.effects=[],this.staticParts=[];for(let t of this.labels)this.scene.remove(t),t.material.map?.dispose(),t.material.dispose();this.labels=[];let e=(t,n=[0,0,0])=>this.staticParts.push({parts:t,p:n});if(this.game.meeting.running){e([P([0,-.06,5],[12,.12,10],b.white)]);for(const t of this.game.layout.furniture)this.staticParts.push({parts:Lr(t),p:[t.x,0,t.z],angle:t.angle});for(const t of this.game.layout.signs)this.label(t.text,t,t.size||2.7,t.y||.18);this.lastSession=this.game.session;for(const t of this.batches.values())t.count=0;for(const t of this.staticParts)this.add(t.parts,t.p,t.angle||0);for(const t of this.batches.values())t.staticCount=t.count;return}e([P([0,-.2,0],[64,.35,52],b.grass),P([0,-.03,4],[24,.06,27],b.ground),P([0,-.02,-11],[60,.06,6],b.ground),P([-12,-.02,-1],[4,.06,24],b.ground),P([12,-.02,-1],[4,.06,24],b.ground)]);for(let t of wn){let n={x:(t.x1+t.x2)/2,z:(t.z1+t.z2)/2};if(["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id)&&e([P([n.x,0,n.z],[t.x2-t.x1,.08,t.z2-t.z1],b.white)]),t.id==="playground"){e([P([n.x,.005,n.z],[15,.06,15],b.brick),P([n.x,.05,n.z],[.05,.03,14],b.white),P([n.x,.05,11],[13,.03,.06],b.white),P([n.x,.05,23],[13,.03,.06],b.white)]);for(let i of[-28,-26,-24,-22,-20,-18,-16])e([P([i,.05,19],[.06,.03,8],b.white)])}["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id)||this.label(t.label,{x:n.x,z:t.z1+.9},t.id==="courtyard"?4:3)}e([P([20.5,.025,12],[10,.045,6],b.ground),P([0,.025,22],[14,.045,7],b.ground),P([-18,.075,17],[8,.035,11],"#879f91"),P([-18,.1,17],[7,.015,.04],b.white),P([-18,.1,17],[.04,.015,10],b.white),P([-21.5,.1,17],[.04,.015,10],b.white),P([-14.5,.1,17],[.04,.015,10],b.white)]);for(let t of[-30,30])for(let n of[-20,-8,6,20])e([Ge([t,.8,n],[.35,1.6,.35],b.wood),Le("sphere",[t,2.2,n],[2.6,3,2.6],b.grass),Le("sphere",[t+.7,2.7,n],[2.1,2.1,2.1],"#86a486")]);for(let t=-30;t<=30;t+=3)e([P([t,.55,25],[.1,1.1,.1],b.blue)]);e([P([-5,1.5,23],[.35,3,.35],b.brick),P([5,1.5,23],[.35,3,.35],b.brick)]),this.label("東山・虛構校園",{x:0,z:24},4);for(const t of this.game.layout.furniture)this.staticParts.push({parts:Lr(t),p:[t.x,0,t.z],angle:t.angle});for(const t of this.game.layout.signs)this.label(t.text,t,t.size||2.7,t.y||.18);for(const t of wn.filter(n=>["classroom","music_room","staff_room","principal_room","infirmary"].includes(n.id))){const n=t.x2<0?t.x2:t.x1,i=(t.z1+t.z2)/2;t.id!=="infirmary"&&(e([P([n,.85,i-1.65],[.5,1.7,.15],b.blue),P([n,.85,i+1.65],[.5,1.7,.15],b.blue),P([n,1.75,i],[.5,.12,3.45],b.blue)]),this.label(t.label,{x:n+(n<0?.15:-.15),z:i-2.3},2.1,1.55))}for(let t of[-11,-5,5,11])e([P([t,.5,-13.8],[.25,1,.25],b.blue)]);this.lastSession=this.game.session;for(const t of this.batches.values())t.count=0;for(const t of this.staticParts)this.add(t.parts,t.p,t.angle||0);for(const t of this.batches.values())t.staticCount=t.count}position(e,t){let n=this.game.previous.get(e);return!n||Vt(n,t)>4?t:{x:n.x+(t.x-n.x)*this.alpha,z:n.z+(t.z-n.z)*this.alpha}}frame(e,t=!0,n=1){if(this.alpha=n,this.ctxLost)return;this.lastSession!==this.game.session&&this.rebuild();for(let p of this.batches.values())p.count=p.staticCount;let i=this.game;for(const p of this.labels){p.visible=Vt(i.player,p.userData.anchor)<22;const x=Math.max(p.userData.baseSize,p.userData.minPixels*(this.camera.right-this.camera.left)/this.canvas.clientWidth);p.scale.set(x,x/4,1)}!i.meeting.running&&Vt(i.player,{x:0,z:23})>5&&this.add([P([0,2.8,23],[10.3,.5,.45],b.green)],[0,0,0]);for(let p of i.world.walls){let x=xi(i.player)===p.zone,m=i.meeting.running&&(p.id.includes("front")||p.id.includes("right"))||x&&(p.id.endsWith("front")||p.id.endsWith("door-b")||p.id.endsWith("outer")&&p.x>0||p.id==="inf-door-r");this.add([P([0,m?.2:1.25,0],[p.w,m?.4:2.5,p.d],b.wall),P([0,m?.18:.45,0],[p.w+.02,m?.3:.9,p.d+.02],"#aabbb0"),P([0,m?.42:2.55,0],[p.w+.05,.08,p.d+.05],b.brick)],[p.x,0,p.z])}for(const p of i.world.walls.filter(x=>x.id.endsWith("back"))){xi(i.player),p.zone;for(const x of[-p.w*.3,p.w*.3])this.add([P([x,1.6,0],[1.8,.75,p.d+.05],b.blue),P([x,1.6,.2],[.055,.75,.035],b.dark),P([x,1.6,.2],[1.8,.055,.035],b.dark)],[p.x,0,p.z])}for(let p of i.props)this.add(ll(p.type),[p.x,p.broken?.1:0,p.z],p.broken?.65:0,1,p.broken?Math.PI/2:0);for(let p of i.objects.values()){if(p.state==="reserved")continue;if(p.papers?.some(T=>!T.taken)){for(let T of p.papers)T.taken||this.add(sn("exam_papers"),[T.x,.02,T.z]);continue}let x=this.position(p.id,p),m=[x.x,p.y,x.z],d=p.angle||0;if(p.state==="held"){let T=p.owner===i.player.id?i.player:i.npcs.find(S=>S.id===p.owner);if(T){let S=Math.atan2(T.face.x,T.face.z),C=this.position(T.id,T);m=[C.x+.36*Math.cos(S)+.18*Math.sin(S),.88,C.z-.36*Math.sin(S)+.18*Math.cos(S)],d=S,p.type==="wireless_microphone"&&T===i.player&&i.microphoneCall&&(m[1]=1.12,m[0]=C.x+.22*Math.cos(S)+.24*Math.sin(S),m[2]=C.z-.22*Math.sin(S)+.24*Math.cos(S))}}p.state==="worn"&&(m=[i.player.x,1.6,i.player.z],d=Math.atan2(i.player.face.x,i.player.face.z),p.type==="principal_glasses"&&(m[1]=1.38,m[0]+=i.player.face.x*.23,m[2]+=i.player.face.z*.23));let w=p.plane?[P([0,.08,0],[.55,.02,.15],b.white,[0,.5,0]),P([0,.08,0],[.15,.02,.55],b.white,[0,.5,0])]:sn(p.type);p.type==="piano"&&i.player.action==="piano"&&Vt(p,i.player)<3&&(w[2]={...w[2],r:[Math.sin(i.time*5)*.2,0,0]}),this.add(w,m,d,p.type==="principal_wig"&&p.state==="worn"?1.1:1,p.broken&&p.type!=="principal_wig"?.6:0),p.state==="airborne"&&this.add([Le("disc",[0,.03,0],[.5,.5,.5],"#97a28c",[-Math.PI/2,0,0])],[p.x,0,p.z])}if(!i.meeting.running)for(const p of i.life.visuals())this.add(sn(p.type),[p.x,p.y,p.z],p.angle||0);let r=i.player,a=this.position(r.id,r);this.add(Ar(r,i.time,!0,i.profile.equipped),[a.x,r.hidden?-.9:0,a.z],Math.atan2(r.face.x,r.face.z)),this.add([Le("disc",[0,.025,0],[.72,.72,.72],"#a4a387",[-Math.PI/2,0,0])],[a.x,0,a.z]);for(let p of i.npcs){if(!p.active&&Vt(p,r)>26)continue;let x=this.position(p.id,p);if(this.add(Ar(p,i.time,!1).map(m=>p.flashUntil>(i.meeting.running?i.meeting.elapsed:i.time)?{...m,color:b.white}:m),[x.x,0,x.z],Math.atan2(p.face.x,p.face.z),p.role==="student"?.85:1),p.state==="Attack"&&this.add([Le("torus",[0,.04,0],[1.5,1.5,1.5],b.orange,[Math.PI/2,0,0])],[p.x,0,p.z]),i.meeting.running&&p.stampUntil>i.meeting.elapsed&&this.add([P([0,1.15,.19],[.22,.12,.04],b.yellow)],[p.x,0,p.z],Math.atan2(p.face.x,p.face.z)),p.state==="Recover")for(let m=0;m<3;m++)this.add([Le("sphere",[Math.cos(i.time*2+m*2)*.4,1.2,Math.sin(i.time*2+m*2)*.4],[.1,.1,.1],b.yellow)],[p.x,0,p.z])}for(const p of i.dogs.visible)p.state==="Relocating"&&p.timer>1.6||!p.active&&Vt(p,i.player)>26||(this.add(cl(p,i.time),[p.x,0,p.z],Math.atan2(p.face.x,p.face.z),p.id==="dog_mani"?.9:1),i.dogs.heart?.id===p.id&&i.dogs.heart.until>i.profile.dogs.clock&&this.add([Le("sphere",[-.07,1,0],[.14,.15,.08],"#c77d90"),Le("sphere",[.07,1,0],[.14,.15,.08],"#c77d90"),Le("cone",[0,.9,0],[.24,.2,.08],"#c77d90",[Math.PI,0,0])],[p.x,0,p.z]));i.meeting.running||(this.add([P([0,.12,0],[.7,.24,.6],b.wood),Ge([-1,.1,0],[.5,.2,.5],b.orange),Ge([1,.1,0],[.5,.2,.5],b.blue),Ge([1,.21,0],[.4,.02,.4],"#8db8c6"),P([-.4,.02,1],[.85,.04,.65],b.blue),P([1.2,.02,-1],[.85,.04,.65],b.white)],[8,0,11]),vi.find(p=>p.id===i.profile.dogs.activeQuest));const o=i.npcs.find(p=>p.id===i.dogs.selectedTarget);o&&i.dogs.validTarget(o)&&this.add([Le("torus",[0,.05,0],[1.1,1.1,1.1],b.yellow,[Math.PI/2,0,0])],[o.x,0,o.z]),this.drawGoals();for(const p of i.microphoneSignals()){const x=i.time-p.start;if(this.add([Le("torus",[0,.08,0],[.75,.75,.75],b.yellow,[Math.PI/2,0,0])],[p.x,0,p.z]),!i.profile.settings.lowMotion)for(let m=0;m<2;m++){const d=.8+(x*1.4+m*.7)%1.5;this.add([Le("torus",[0,.15,0],[d,d,d],b.blue,[Math.PI/2,0,0])],[p.x,0,p.z])}}if(i.meeting.running){if(i.meeting.airMode===2)for(let p=0;p<3;p++)this.add([P([0,0,0],[.24,.01,.16],b.white)],[Math.sin(i.meeting.elapsed*2+p)*.6,1.05,3+p*.6]);i.meeting.selected.includes("printer")&&this.add([P([0,.85,0],[.65,.3,.45],b.white),P([0,.99,.1],[.35,.02,.1],b.dark)],[4.4,0,4.8]);for(const p of i.meeting.water)this.add([Le("disc",[0,.025,0],[1,.5,1],b.blue,[-Math.PI/2,0,0])],[p.x,0,p.z]);for(let p=0;p<i.meeting.papers.length;p++)this.add(sn("folder"),[4.25,.76,4+p*.18]);i.meeting.selected.includes("projector")&&this.add([P([0,1.65,0],[3,.95,.08],b.blue)],[0,0,.3]),i.meeting.selected.includes("whiteboard")&&this.add([P([0,1.1,0],[1.6,1.4,.08],i.meeting.boardMusic?b.green:b.white),P([-.5,.5,0],[.05,1,.08],b.dark),P([.5,.5,0],[.05,1,.08],b.dark)],[4.5,0,7.8])}let l=i.nearest();l&&Vt(l,r)<2.5&&this.add([Le("cone",[0,2.5+Math.sin(i.time*3)*.06,0],[.4,.6,.4],b.yellow,[Math.PI,0,0])],[l.x,0,l.z]),this.effects=this.effects.filter(p=>i.time-p.start<2.6&&i.time>=p.start),i.meeting.running&&(this.effects=this.effects.slice(-Math.max(1,12-i.meeting.papers.length-(i.meeting.airMode===2?3:0))));for(let p of this.effects){let x=i.time-p.start,m=i.profile.settings.lowMotion?.08:.25;this.add([P([Math.sin(p.index*2)*x*m,1+x*.25,Math.cos(p.index*2)*x*m],[.05,.025,.08],p.type==="instrument"?b.yellow:b.white,[x,0,x])],[p.x,0,p.z])}for(let p of this.batches.values())p.mesh.count=p.count,p.mesh.instanceMatrix.needsUpdate=!0,p.mesh.instanceColor&&(p.mesh.instanceColor.needsUpdate=!0);this.target.lerp(new F(r.x,0,r.z),Math.min(1,e*7));let c=25,u=13.5;this.camera.position.copy(this.target).add(new F(u,c,u));const h=this.shakeUntil-i.time,f=(this.camera.top-this.camera.bottom)/this.canvas.clientHeight,g=t&&!i.profile.settings.lowMotion&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&h>0?2.8*Math.min(1,h/.16)*f:0;this.shakeOffset={x:Math.sin(i.time*113)*g,z:Math.cos(i.time*97)*g},this.camera.position.x+=this.shakeOffset.x,this.camera.position.z+=this.shakeOffset.z,this.camera.lookAt(this.target.clone().add(new F(this.shakeOffset.x,0,this.shakeOffset.z))),this.camera.updateMatrixWorld(!0),this.layoutLabels(),this.renderer.render(this.scene,this.camera),this.calls=this.renderer.info.render.calls,this.triangles=this.renderer.info.render.triangles,e>0&&t&&(this.frames.push(e*1e3),this.frames.length>1200&&this.frames.shift(),this.fps=1/e,i.profile.settings.quality==="auto"&&(e>.033?(this.slow+=e,this.fast=0):(this.fast+=e,this.slow=Math.max(0,this.slow-e)),this.slow>3&&!this.autoLow&&(this.autoLow=!0,this.setDPR()),this.fast>20&&this.autoLow&&(this.autoLow=!1,this.setDPR())))}drawGoals(){this.visibleGoals=lc(this.game);const e=Math.max(1.65,28*(this.camera.right-this.camera.left)/this.canvas.clientWidth);for(let t=0;t<this.visibleGoals.length;t++){const n=this.visibleGoals[t],i=this.game.supportHeight(n)+.12;for(let r=0;r<3;r++)this.dummy.position.set(n.x,i+(r===2?1:0),n.z),this.dummy.rotation.set(r===2?Math.PI:Math.PI/2,0,0),this.dummy.scale.setScalar(r===2?1.4:e),this.dummy.updateMatrix(),this.goalMeshes[r].setMatrixAt(t,this.dummy.matrix)}for(const t of this.goalMeshes)t.count=this.visibleGoals.length,t.instanceMatrix.needsUpdate=!0}labelRects=[];labelUIAt=0;layoutLabels(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight,n=performance.now();n>=this.labelUIAt&&(this.labelUIAt=n+200,this.labelRects=[...document.querySelectorAll(".top-left,.top-right,.quest,.side-nav,.bottom-info,.action-cluster,#joystick,#meeting-controls")].filter(l=>l.getClientRects().length>0).map(l=>{const c=l.getBoundingClientRect();return{x:c.x,y:c.y,w:c.width,h:c.height}}));const i=[...this.labelRects],r=(l,c)=>l.x<c.x+c.w+4&&l.x+l.w+4>c.x&&l.y<c.y+c.h+4&&l.y+l.h+4>c.y,a=new Set(wn.map(l=>l.label)),o=[...this.labels].sort((l,c)=>+!a.has(l.userData.text)-+!a.has(c.userData.text)||Vt(l.userData.anchor,this.game.player)-Vt(c.userData.anchor,this.game.player));for(const l of o){if(!l.visible)continue;const c=l.position.clone().project(this.camera),u=l.scale.x/(this.camera.right-this.camera.left)*e,h=l.scale.y/(this.camera.top-this.camera.bottom)*t,f={x:(c.x+1)/2*e-u/2,y:(1-c.y)/2*t-h/2,w:u,h};l.visible=c.z>=-1&&c.z<=1&&f.x>=4&&f.y>=4&&f.x+u<=e-4&&f.y+h<=t-4&&!i.some(g=>r(f,g)),l.visible&&i.push(f)}}thumbs=new Map;thumbnail(e,t){const n=t+":"+e;if(this.thumbs.has(n))return this.thumbs.get(n);const i=new Eo;i.background=new qe("#dbe4d0"),i.add(new Oh(16777215,2));const r=new Uo(16777215,2);r.position.set(3,5,4),i.add(r);const a=new Bs(-1.2,1.2,1.15,-1.15,.1,20);a.position.set(2,2.2,4),a.lookAt(0,.8,0);const o=t==="dog"?cl({id:e,state:"Rest"},0):t==="item"?e.startsWith("prop:")?ll(e.slice(5)):sn(e.replace("item:","")):Ar({type:e,role:t,hp:60,state:"Idle"},0),l=[];for(const w of o){const T=this.batches.get(w.shape)?.mesh.geometry;if(!T)continue;const S=new Lo({color:w.color});l.push(S);const C=new Xt(T,S);C.position.set(...w.p),C.scale.set(...w.s),C.rotation.set(...w.r||[0,0,0]),i.add(C)}const c=new Un().setFromObject(i),u=c.getCenter(new F);a.position.copy(u).add(new F(2,2,4)),a.lookAt(u);const h=new Dn(192,160),f=this.renderer.getRenderTarget();this.renderer.setRenderTarget(h),this.renderer.render(i,a);const g=new Uint8Array(30720*4);this.renderer.readRenderTargetPixels(h,0,0,192,160,g),this.renderer.setRenderTarget(f);const p=document.createElement("canvas");p.width=192,p.height=160;const x=p.getContext("2d"),m=x.createImageData(192,160);for(let w=0;w<160;w++)m.data.set(g.subarray((159-w)*192*4,(160-w)*192*4),w*192*4);x.putImageData(m,0,0);const d=p.toDataURL();return h.dispose(),l.forEach(w=>w.dispose()),this.thumbs.set(n,d),d}aim(e,t,n=!1){let i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);let r=new F;if(this.ray.ray.intersectPlane(this.plane,r)){let a=this.game.player;const o=this.game.npcs.filter(h=>this.game.dogs.validTarget(h)&&Vt(h,{x:r.x,z:r.z})<1&&this.inView(h)).sort((h,f)=>Vt(h,{x:r.x,z:r.z})-Vt(f,{x:r.x,z:r.z}))[0];o&&n&&this.game.dogs.select(o.id);let l=r.x-a.x,c=r.z-a.z,u=Math.hypot(l,c);u>.1&&(a.face={x:l/u,z:c/u})}}inView(e){let t=new F(e.x,1,e.z).project(this.camera);return Math.abs(t.x)<1.2&&Math.abs(t.y)<1.2&&t.z>-1&&t.z<1}project(e,t=2.4){let n=new F(e.x,t,e.z).project(this.camera);return{x:(n.x+1)/2*this.canvas.clientWidth,y:(1-n.y)/2*this.canvas.clientHeight}}measure(){let e=[...this.frames].sort((t,n)=>t-n);return{fps:this.fps,p50:e[Math.floor(e.length*.5)]||0,p95:e[Math.floor(e.length*.95)]||0,drawCalls:this.calls,triangles:this.triangles,geometry:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,activeNPC:this.game.npcs.filter(t=>t.active).length,aiMs:this.game.aiMs,simulationMs:this.game.tickMs,quality:this.quality,samples:e.length}}}class Tm{keys=new Set;stick={x:0,z:0};pointer=null;actionPointers=new Set;enabled=!1;onAction=()=>{};onPause=()=>{};onAim=()=>{};onSelect=()=>{};knob;constructor(e,t,n){this.knob=n,window.addEventListener("keydown",a=>{if(a.code==="Escape"){this.clear(),this.onPause();return}if(!this.enabled||a.target instanceof HTMLInputElement||a.target instanceof HTMLSelectElement||a.target instanceof HTMLTextAreaElement||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault(),a.repeat))return;this.keys.add(a.code);let o={KeyJ:"attack",KeyK:"dodge",Space:"dodge",KeyE:"interact",KeyQ:"throw",KeyR:"drop",KeyF:"roll",Enter:"conduct"}[a.code];o&&(a.preventDefault(),this.onAction(o))}),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>this.clear()),e.addEventListener("pointermove",a=>{this.enabled&&a.pointerType==="mouse"&&this.onAim(a.clientX,a.clientY)}),e.addEventListener("pointerdown",a=>{this.enabled&&this.onSelect(a.clientX,a.clientY),this.enabled&&a.pointerType==="mouse"&&a.button===0&&(this.onAim(a.clientX,a.clientY),this.onAction("attack"))});const i=a=>{let o=t.getBoundingClientRect(),l=43,c=(a.clientX-o.left-o.width/2)/l,u=(a.clientY-o.top-o.height/2)/l,h=Math.max(1,Math.hypot(c,u));this.stick={x:c/h,z:u/h},n.style.transform=`translate(${c/h*30}px,${u/h*30}px)`};t.addEventListener("pointerdown",a=>{!this.enabled||this.pointer!==null||this.actionPointers.size>1||(a.preventDefault(),this.pointer=a.pointerId,t.setPointerCapture(a.pointerId),i(a))}),t.addEventListener("pointermove",a=>{a.pointerId===this.pointer&&i(a)});const r=a=>{a.pointerId===this.pointer&&(this.pointer=null,this.stick={x:0,z:0},n.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r)}bindButton(e,t,n){let i=0,r;e.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),!(!this.enabled||this.actionPointers.size>=1)&&(this.actionPointers.add(o.pointerId),e.setPointerCapture(o.pointerId),i=performance.now(),n?r=setTimeout(n,420):this.onAction(t))});let a=(o,l=!1)=>{this.actionPointers.has(o.pointerId)&&(this.actionPointers.delete(o.pointerId),clearTimeout(r),n&&!l&&performance.now()-i<420&&this.enabled&&this.onAction(t))};e.addEventListener("pointerup",o=>a(o)),e.addEventListener("pointercancel",o=>a(o,!0)),e.addEventListener("lostpointercapture",o=>a(o,!0)),e.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.enabled&&this.onAction(t))})}clear(){this.knob&&(this.knob.style.transform=""),this.keys.clear(),this.pointer=null,this.actionPointers.clear(),this.stick={x:0,z:0}}movement(){if(!this.enabled)return{x:0,z:0,run:!1};let e=this.stick.x,t=this.stick.z;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t=-1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e=-1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e=1);let n=Math.hypot(e,t),i=Math.max(1,n);return e/=i,t/=i,{x:(e+t)*Math.SQRT1_2,z:(t-e)*Math.SQRT1_2,run:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||Math.hypot(this.stick.x,this.stick.z)>.8}}}function wm(s){const e=s==="dog_mani",t=e?"#f4f0e6":"#b77540",n=e?"#ffffff":"#f3d7ac",i=e?"#c7cbbb":"#925e36";return`<svg viewBox="0 0 64 64" role="img" aria-label="${e?"馬尼":"LION"}的笑臉頭像" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#dbe4d0"/><path d="M13 29 11 8 26 20M38 20 53 8 51 29" fill="${t}" stroke="${i}" stroke-width="2" stroke-linejoin="round"/><path d="m15 21-1-8 8 8m20 0 8-8-1 8" fill="#d8ad9c"/><path d="M13 25 21 18 43 18 51 25 54 40 47 52 32 57 17 52 10 40Z" fill="${t}" stroke="${i}" stroke-width="1.5"/>${e?'<path d="m12 34-4 6 7 2-2 7 8-1 3 7 8-2 8 2 3-7 8 1-2-7 7-2-4-6" fill="#ffffff"/>':""}<path d="M16 39Q18 32 26 36L32 40 38 36Q46 32 48 39L44 49Q32 58 20 49Z" fill="${n}"/><g fill="none" stroke="#3d4c4e" stroke-width="2.4" stroke-linecap="round"><path d="M20 30q4-5 8 0m8 0q4-5 8 0"/><path d="M24 43q8 10 16 0"/></g><path d="M28 38Q32 35 36 38L32 42Z" fill="#3d4c4e"/><path d="M29 47h6v4q-3 4-6 0Z" fill="#c77d90"/><circle cx="18" cy="38" r="3" fill="#cf9286" opacity=".65"/><circle cx="46" cy="38" r="3" fill="#cf9286" opacity=".65"/></svg>`}function Am(s){const e=new Set([...s.querySelectorAll("button")].map(t=>t.parentElement));for(const t of e){const n=getComputedStyle(t).display;if(n.includes("flex")||n.includes("grid"))continue;const i=[...t.children];for(let r=0;r<i.length;r++){if(i[r].tagName!=="BUTTON")continue;const a=[i[r]];for(;r+1<i.length&&i[r+1].tagName==="BUTTON";){let l=i[r].nextSibling,c=!1;for(;l&&l!==i[r+1];)l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()&&(c=!0),l=l.nextSibling;if(c)break;a.push(i[++r])}if(a.length<2)continue;const o=document.createElement("div");o.className="button-row",t.insertBefore(o,a[0]),o.append(...a)}}}const Q=s=>document.querySelector(s),Qe=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class Rm{constructor(e,t,n,i,r){this.game=e,this.render=t,this.input=n,this.audio=i,this.store=r,e.onToast=(l,c)=>this.toast(l,c),e.onSave=()=>r.save(e.profile),e.listeners.push(l=>{if(l.type==="CombatResolved"&&l.actorId===e.player.id){const c=e.npcs.find(u=>u.id===l.targetId||u.id===l.data.npc);c&&(this.hitLabels.push({x:c.x,z:c.z,start:e.time,damage:l.data.damage}),this.hitLabels=this.hitLabels.slice(-8))}l.type==="reset"&&(this.hitLabels=[],this.toastUntil=0,Q("#speech").hidden=!0,Q("#toast").classList.remove("visible")),l.type==="rescue"&&setTimeout(()=>this.open("report"),0)}),this.input.onAction=l=>this.action(l),this.input.onPause=()=>this.paused?this.close():this.open("pause"),this.input.onAim=(l,c)=>t.aim(l,c),this.input.onSelect=(l,c)=>t.aim(l,c,!0),Q("#quest-toggle").addEventListener("click",()=>this.setQuestCollapsed(!this.questCollapsed)),Q("#quest-toggle").addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&l.stopPropagation()}),Q(".quest").addEventListener("click",l=>{l.target.closest("button")||this.setQuestCollapsed(!this.questCollapsed)});const a=()=>{const l=Q(".hud"),c=l.getBoundingClientRect(),u=["#meeting-ready","#health-warning"].map(h=>{const f=Q(h);return f.hidden?0:f.getBoundingClientRect().height+parseFloat(getComputedStyle(f).marginTop)}).reduce((h,f)=>h+f,0);l.style.setProperty("--status-extra",u+"px"),l.style.setProperty("--status-bottom",Q(".top-left").getBoundingClientRect().bottom-c.top+"px"),l.style.setProperty("--quest-card-height",Q(".quest").getBoundingClientRect().height+"px")},o=new ResizeObserver(a);o.observe(Q(".top-left")),o.observe(Q(".quest")),window.addEventListener("resize",a),a(),Q("#dogs-entry").addEventListener("click",()=>this.open("dogs")),Q("#menu").addEventListener("click",()=>this.open("pause")),Q("#tasks").addEventListener("click",()=>this.open("missions")),Q("#calendar").addEventListener("click",()=>this.open("calendar")),Q("#map").addEventListener("click",()=>this.open("map")),Q("#actions").addEventListener("click",()=>this.open("actions",!1)),n.bindButton(Q("#attack"),"attack"),n.bindButton(Q("#dodge"),"dodge"),n.bindButton(Q("#throw"),"throw"),n.bindButton(Q("#drop"),"drop"),n.bindButton(Q("#conduct"),"conduct"),n.bindButton(Q("#interact"),"interact",()=>this.open("actions",!1)),Q("#modal").addEventListener("click",l=>{let c=l.target.closest("[data-action]");c&&this.click(c.dataset.action,c.dataset.id,c.dataset.value)}),Q("#modal").addEventListener("keydown",l=>{if(l.key==="Tab"){let c=[...Q("#modal").querySelectorAll("button:not(:disabled),input,select,a[href]")],u=c[0],h=c.at(-1);l.shiftKey&&document.activeElement===u?(h?.focus(),l.preventDefault()):!l.shiftKey&&document.activeElement===h&&(u?.focus(),l.preventDefault())}}),this.open("start")}hitLabels=[];questCollapsed=!1;questContent="";codexTab="students";paused=!0;started=!1;modal="";lastFocus=null;hudClock=0;debug=!1;toastUntil=0;onPause=e=>{};pause(e){this.paused=e,this.input.enabled=!e&&!this.modal,this.input.clear(),e?this.audio.pause():this.audio.resume(),this.onPause(e)}close(){this.started&&(Q("#modal").hidden=!0,this.modal="",this.pause(!1),this.lastFocus?.focus())}open(e,t=!0){if(this.game.meeting.running&&!["pause","actions","settings","help","meetingRecords","save","dogs"].includes(e)){this.toast("請先離席，再操作校園選單。");return}this.lastFocus=document.activeElement,this.modal=e,this.input.enabled=!1,this.input.clear(),t&&this.pause(!0),Q("#modal").hidden=!1;let n=this.content(e);Q("#modal").innerHTML=`<section class="panel ${e==="start"?"welcome":""}" role="dialog" aria-modal="true" aria-label="${Qe(e==="start"?"開始遊戲":"遊戲選單")}">${n}</section>`,Am(Q("#modal")),setTimeout(()=>Q("#modal").querySelector("button")?.focus(),0)}header(e,t){return`<header class="panel-head"><div><span class="eyebrow">${e}</span><h2>${t}</h2></div>${this.started?'<button class="icon-btn" data-action="close" aria-label="關閉">✕</button>':""}</header>`}button(e,t,n="",i=""){return`<button class="${i}" data-action="${t}" data-id="${Qe(n)}">${e}</button>`}content(e){let t=this.game,n=t.profile;if(e==="pause"&&t.meeting.running)return this.header("SCHOOL MEETING","會議暫停")+`<div class=menu-grid>${this.button("繼續遊玩","close")}${this.button("離席","meetingLeave")}${this.button("會議紀錄冊","open","meetingRecords")}${this.button("設定","open","settings")}${this.button("操作說明","open","help")}</div>`;switch(e){case"start":return`<div class="brand-mark">東山 <span>校園日常 / 異常</span></div><span class="eyebrow">AN ORDINARY DAY, ALMOST.</span><h1>東山校園<br><em>大騷動</em><span class="title-dot">。</span></h1><p class="intro">今天的老師，一如往常地端莊。<br>今天的校園，就不一定了。</p><div class="welcome-actions">${this.button("進入校園　↗","start","","primary")}${this.button("新手說明書　↗","tutorialGuide")}</div><p class="fine">v1.3.1 校事會議更容易登場，校狗新增笑臉提示；六種生活事件持續上演。<br>歡迎回到校園，一起發現今天的小插曲！</p>`;case"dogs":return this.dogPanel();case"meetingRecords":return this.header("MEETING MINUTES","會議紀錄冊")+`<p>${t.profile.meeting.titles.map(Qe).join(" ・ ")||"尚未收藏稱號"}</p><div class=task-list>${[...t.profile.meeting.records].reverse().map(i=>`<article class=task-card><div><h3>${Qe(i.reason)} · ${i.seconds}秒</h3><p>${i.lines.map(Qe).join("<br>")}</p><small>seed ${i.seed} · ${i.modules.map(r=>Qe(Ja.find(a=>a.id===r)?.label||"會議橋段")).join(" / ")}</small></div></article>`).join("")||"<p>尚未開會。</p>"}</div>`;case"pause":return this.header("TAKE A BREATH","課間休息")+`<div class="menu-grid">${this.button("繼續遊玩 ↗","close","","primary")}${this.button("今日待辦 · 24任務","open","missions")}${this.button("校園行事曆 · 4活動","open","calendar")}${this.button("校園地圖","open","map")}${this.button("校園生活","open","life")}${this.button("人物圖鑑","open","codex")}${this.button("道具說明","open","items")}${this.button("擊倒圖鑑","open","knockdowns")}${this.button("會議紀錄冊","open","meetingRecords")}${this.button("收藏與紀念卡","open","collection")}${this.button("音訊／畫質設定","open","settings")}${this.button("操作說明","open","help")}${this.button("存檔管理","open","save")}${this.button("重看教學","tutorial")}${this.button("重開平靜校園","confirmReset")}</div><p class="fine">${Qe(this.store.error||"儲存長期进度；重新進入從平靜校園開始。")}</p>`;case"missions":{t.emit("openTasks");let i=Pr.filter(r=>r.mode===t.mode);return this.header("TODAY’S TO-DO",t.mode==="normal"?"今日待辦":Za.find(r=>r.id===t.mode).label+"任務")+`<p class="muted">一次追蹤一項。可取消、免費重試；首通領點，重玩記錄評級。</p>${t.attempt?`<div class="active-task"><b>${hl(t)}</b><p>${t.step.text}</p>${this.button("取消追蹤","cancelTask")}${this.button("重置任務物件","resetItems")}</div>`:""}<div class="task-list">${i.map(r=>`<article class="task-card"><div><span class="eyebrow">${r.category} · ${n.completedMissionIds.includes(r.id)?"已完成／重玩不給點":`首通 ${r.reward} 點`}</span><h3>${r.label}</h3><p>${r.steps.map(a=>Qe(a.text)).join(" → ")}</p></div>${this.button(t.attempt?.mission===r.id?"追蹤中":n.completedMissionIds.includes(r.id)?"再試一次":"開始","task",r.id,t.attempt?.mission===r.id?"selected":"")}</article>`).join("")}</div>`}case"calendar":return this.header("SCHOOL CALENDAR","校園行事曆")+`<p class="muted">切換會重置當前校園、結束追逐；保留已完成與收藏。</p><div class="calendar-list">${[{id:"normal",label:"平常的一天",description:"自由探索與24項今日待辦。"},...Za].map((i,r)=>`<article class="calendar-card"><span class="chapter-num">0${r}</span><div><h3>${i.label}</h3><p>${i.description}</p><small>${i.id==="normal"?"全部基礎玩法立即開放":`${Pr.filter(a=>a.mode===i.id&&n.completedMissionIds.includes(a.id)).length}/4 完成`}</small></div>${this.button(t.mode===i.id?"目前活動":"進入","modeConfirm",i.id)}</article>`).join("")}</div>`;case"settings":return this.header("MAKE YOURSELF COMFORTABLE","設定")+`<div class="settings"><label>畫質 <select id="quality">${["auto","low","standard"].map((i,r)=>`<option value="${i}" ${n.settings.quality===i?"selected":""}>${["自適應","Low · 輕量","Standard · 標準"][r]}</option>`).join("")}</select></label><label>音樂 <input id="music" type="range" min="0" max="100" value="${n.settings.music*100}"></label><label>音效 <input id="sfx" type="range" min="0" max="100" value="${n.settings.sfx*100}"></label><label><input id="mute" type="checkbox" ${n.settings.mute?"checked":""}>靜音（所有目標仍可完成）</label><label><input id="lowMotion" type="checkbox" ${n.settings.lowMotion?"checked":""}>減少動態效果</label><label><input id="assist" type="checkbox" ${n.settings.assist?"checked":""}>指揮輔助：±350ms</label>${this.button("儲存設定","settings","","primary")}${this.button("完整聲音試聽頁 ↗","soundTest")}</div><p class="fine">Low：DPR≤1，活躍人物≤16。${Qe(this.audio.fail)}</p>`;case"help":return this.header("A VERY COMPOSED TEACHER","操作說明")+'<div class="help"><p>左下搖桿移動，推深快跑。右下揮打、閃避與互動；拿物後可投擲。長按互動可選動作，或按「動作」。</p><dl><dt>WASD／方向鍵</dt><dd>依畫面方向移動；Shift 快跑</dd><dt>J／滑鼠左鍵</dt><dd>揮打（滑鼠決定面向）</dd><dt>K／空白鍵</dt><dd>短距閃避，不能穿牆</dd><dt>E／Q／R</dt><dd>互動／投擲／放下</dd><dt>F／Enter</dt><dd>點名／合唱指揮</dd><dt>Esc</dt><dd>暫停與繼續</dd></dl><p>一次拿一件；假髮與眼鏡各一個裝飾槽。黃色圈是任務交付／定位位置，在圈旁互動或放下。歸還需帶回原位置。推椅子時，站在椅子後面。</p><p>藏點：走廊工具間、教室講臺後。若被目擊躲入，家長會搜查。警戒消退需先甩開視線；進保健室不會清通緝。平靜時校護免費恢復。</p><p>校園無線麥克風：一般日於音樂教室，活動日於舞臺器材位置。手持時從「動作」使用10m擴音點名（共用12秒冷卻）；投擲落地產生3秒廣播誘餌，拿回即停，普通放下不啟動。追逐者仍看見老師、目擊投擲或需護子時不受吸引，聲音不能穿牆；靜音也有效。</p><p>人物跌坐後會恢復；沒有永久傷亡。任務物件卡住可從待辦按「重置任務物件」。</p></div>';case"actions":{if(t.meeting.running)return this.header("SCHOOL MEETING","會議動作")+`<div class=menu-grid>${t.meeting.context()?this.button(t.meeting.context(),"meetingUse"):""}${t.held?this.button("放下","gameAction","drop"):""}${t.nearest()?.itemType==="office_chair"?this.button("推動椅子","pushTarget"):""}${this.button("離席","meetingLeave")}</div><p>J 揮打／Q 投擲／F 特殊互動。攻擊保持原功能。</p>`;let i=t.nearest(),r=t.held;return this.header("WHAT WOULD YOU LIKE TO DO?","老師的動作")+`<p class="muted">最近：${Qe(i?.label||"沒有目標")}　手持：${Qe(r?Ui[r.type].label:"空手")}</p><div class="menu-grid">${i?this.button("互動 "+i.label,"interactTarget"):""}${t.life.targets().filter(a=>Rr(a,t.player)<2.5&&t.world.visible(a,t.player)).map(a=>this.button(a.label,"lifeInteract",a.id)).join("")}${this.button(r?.type==="wireless_microphone"?"擴音點名（10m／共用12秒冷卻）":"點名（6m／12秒冷卻）","gameAction","roll")}${r?this.button("放下／交付","gameAction","drop"):""}${r&&r.type!=="wireless_microphone"?this.button("使用：演奏／碼錶／清掃","gameAction","useHeld"):""}${r&&Ui[r.type].category.includes("wearable")?this.button("戴上","gameAction","wear"):""}${t.player.wig||t.player.glasses?this.button("取下頭部裝飾","gameAction","unwear"):""}${r||t.player.wig||t.player.glasses?this.button("歸還原位","gameAction","returnHeld"):""}${i?.itemType&&Ui[i.itemType].category.includes("pushable")?this.button("推動","pushTarget"):""}${i?.itemType&&Ui[i.itemType].category.includes("fixed")?this.button(i.itemType==="piano"?"亂按鋼琴":"咖啡機噴泡沫","messTarget"):""}${i?.itemType&&i.broken?this.button("扶起／整理物件","restoreTarget"):""}${xi(t.player)==="classroom"?this.button("假裝上課","teach"):""}</div>${r?.type==="wireless_microphone"?"<p>請注意廣播。老師目前非常冷靜。<br>擴音點名：10m可聽見的平靜學生，與一般點名共用12秒冷卻。投擲落地播放3秒誘餌；目擊投擲或仍看見老師的追逐者不受騙。拿回即停止；普通放下不廣播。</p>":""}<p class="fine">這個選單仍讓人物行動；真正休息請用暫停。</p>`}case"shop":return this.header("CO-OP, OPEN FOR BUSINESS","合作社")+`<div class="balance">校園點數 <strong>${n.points}</strong></div><article class="task-card"><div><h3>涼茶 · 10點</h3><p>立即飲用恢復30體力；五秒冷卻。</p></div><button data-action="drink" ${n.points<10&&t.attempt?.mission!=="q21"?"disabled":""}>購買</button></article><div class="task-list">${$a.map(i=>`<article class="task-card"><div><h3>${i.label}</h3><p>純外觀 · ${i.price}點</p></div><button data-action="cosmetic" data-id="${i.id}" ${n.ownedCosmetics.includes(i.id)||n.points<i.price?"disabled":""}>${n.ownedCosmetics.includes(i.id)?"已收藏":"購買"}</button></article>`).join("")}</div>${this.button("專用狗零食 · 5點（"+n.dogs.treats+"/20）","buyTreat")}${this.button("平靜服務：整理商品 +10點","service")}<p class="fine">${n.serviceCooldown>0?`服務冷卻 ${Math.ceil(n.serviceCooldown/60)} 分鐘`:"服務可領取，遊戲在線十分鐘冷卻"}</p>`;case"map":return this.header("A SMALL CAMPUS, MANY POSSIBILITIES","校園地圖")+`<svg class="campus-map" viewBox="-33 -27 66 54" role="img" aria-label="校園與玩家任務位置">${wn.map(i=>`<rect x="${i.x1}" y="${i.z1}" width="${i.x2-i.x1}" height="${i.z2-i.z1}" rx=".6"/><text x="${(i.x1+i.x2)/2}" y="${(i.z1+i.z2)/2}">${i.label}</text>`).join("")}<circle class="player-dot" cx="${t.player.x}" cy="${t.player.z}" r="1"/>${this.mapTargets().map(i=>`<circle class="goal-dot" cx="${i.x}" cy="${i.z}" r=".8"/>`).join("")}</svg><p class="fine">綠點：老師　黃點：目標／任務物件。${t.notes.map(Qe).join(" ")}</p>`;case"knockdowns":{const i=this.codexTab,r=n.knockdownCodex[i],a=ec[i].filter(o=>i!=="objects"||r[o.id]);return this.header("CAMPUS INCIDENT COLLECTION","擊倒圖鑑")+`<p class="muted">記錄老師實際造成的暈眩與破損，跨活動、重新開啟皆保留。人物稍後會恢復；家具扶好不會刪除紀錄。</p><div class="codex-tabs" role="group" aria-label="圖鑑分類">${["students","parents","objects"].map((o,l)=>`<button data-action="codexTab" data-id="${o}" aria-pressed="${i===o}" class="${i===o?"selected":""}">${["學生","家長","物品"][l]} · ${Object.keys(n.knockdownCodex[o]).length}</button>`).join("")}</div><p>已記錄 ${Object.keys(r).length} 種 · 共 ${Object.values(r).reduce((o,l)=>o+l,0)} 次</p><div class="codex-grid incident-codex">${a.map(o=>`<article class="${r[o.id]?"discovered":"undiscovered"}" data-codex-id="${Qe(o.id)}">${this.thumbnail(o.id,i==="objects"?"item":i==="students"?"student":"parent")}<h4>${Qe(o.label)}</h4><p>${r[o.id]?Qe(o.description):"尚未記錄"}</p><small>${r[o.id]?`${i==="objects"?"破損":"暈眩"} ${r[o.id]} 次`:"未解鎖"}</small></article>`).join("")||"<p>還沒有物品破損紀錄。翻倒家具、垃圾桶，或投擲物品落地破損時會加入。</p>"}</div><p class="fine">從本次更新起記錄；舊存檔僅有總次數，無法還原過往的個別種類。學生惡作劇與活動預設破損不列入。</p>`}case"items":return this.header("PLEASE RETURN AFTER USE",`道具說明 · ${Ka.length}種`)+`<div class="codex-grid">${Ka.map(i=>`<article data-item-id="${i.id}">${this.thumbnail(i.id,"item")}<h4>${Qe(i.label)}</h4><p>${Qe(i.description||(i.category.includes("fixed")?"固定互動；不能拿取或投擲。":"依情境選單拿取、放下、使用或歸還。"))}</p><small>揮打 ${i.damage} ／ 投擲 ${i.throwDamage} · ${i.heavy?"重型":"輕型／固定"}</small>${i.id==="wireless_microphone"?"<p>一般校園：音樂教室樂器收納臺；活動日：中庭舞臺右側器材位置。手持後「動作」→擴音點名（10m，與點名共用12秒冷卻）；Q／投擲落地廣播3秒，引附近可聽見且願意調查者。追逐仍看見老師或目擊投擲者不受騙，護子／重要任務優先。相同人物與麥克風30秒調查冷卻。拿回、歸還、重置即停止，普通放下不啟動。靜音也有效。</p>":""}</article>`).join("")}</div>`;case"codex":return this.header("EVERYONE HAS THEIR OWN WAY","校園人物圖鑑")+`<h3>十二種學生</h3><div class="codex-grid">${qs.map(i=>`<article>${this.thumbnail(i.id,qs.includes(i)?"student":"parent")}<h4>${i.label}</h4><p>${i.description}</p></article>`).join("")}</div><h3>十九種家長</h3><div class="codex-grid">${Cr.map(i=>`<article>${this.thumbnail(i.id,qs.includes(i)?"student":"parent")}<h4>${i.label}</h4><p>${i.description}</p><small>${i.tier} · 占 ${i.slotCost} 名額</small></article>`).join("")}</div><h3>校園職員與兩位新朋友</h3><div class=codex-grid>${Ql.map(i=>`<article>${this.thumbnail(i.id,"staff")}<h4>${i.label}</h4></article>`).join("")}${qa.map(i=>`<article>${this.thumbnail(i,"dog")}<h4>${Ya[i]}</h4><p>${ja(n.dogs.dogs[i].affinity)} · ${n.dogs.dogs[i].affinity}/100</p><p>${n.dogs.dogs[i].collected?i==="dog_lion"?"LION 將你列為正式巡邏夥伴":"馬尼認為你是專職摸摸人員":""}</p></article>`).join("")}</div>`;case"life":return this.header("CAMPUS LIFE","校園生活")+`<p>${Qe(t.life.context())}</p><p>靠近餐車按 E 吃午餐；拿拖把靠近牛奶漬按 E 清理；向校安老師按 E 告知情況；拿起失物陀螺後靠近失主按 E 歸還。移動或受擊會中斷用餐與清理。</p><p>午餐冷卻 ${Math.ceil(n.life.mealCooldown)}秒 · 肚子提出異議 ${Math.ceil(n.life.stomach)}秒</p><div class="menu-grid">${Jl.map(i=>`<p>${n.life.achievements.includes(i)?"✓":"○"} ${Qe(i)}</p>`).join("")}</div><p class="fine">所有人物沿用普通受擊；LION 與馬尼只接受校狗互動。暫停與會議期間，生活事件時鐘也會停下。</p>`;case"collection":return this.header("LITTLE MEMORIES","收藏與稱號")+`<h3>校園生活紀念 · ${n.life.achievements.length}/6</h3><p>${n.life.achievements.map(Qe).join(" · ")||"觀察、告知與歸還，留下生活紀念。"}</p><h3>外觀（保留黃色洋裝與鮑伯頭）</h3><div class="menu-grid">${$a.filter(i=>n.ownedCosmetics.includes(i.id)).map(i=>this.button((n.equipped.includes(i.id)?"✓ ":"")+i.label,"equip",i.id)).join("")||"<p>合作社有六種純外觀收藏。</p>"}</div><h3>稱號 · ${n.titleIds.length}/12</h3><p>${n.titleIds.map(Qe).join(" · ")||"完成任務獲得稱號。"}</p><h3>合照紀念卡（程式構圖）</h3><div class="photo-grid">${n.photoCards.map((i,r)=>`<div class="photo-card"><span>${i.wig?"🟤":i.glasses?"👓":"♫"}　${i.broom?"╱":"♩"}</span><b>東山・第${r+1}張合照</b><p>${i.students}學生 / ${i.visitors}家長<br>${i.wig?"假髮版 ":""}${i.glasses?"眼鏡版 ":""}${i.broom?"掃把版":""}</p></div>`).join("")||"<p>親師日完成合照，可留下構圖紀念卡。</p>"}</div>`;case"report":return this.header("INCIDENT REPORT","保健室事件報告")+`<div class="report-grid">${Object.entries(t.lastReport||t.report).filter(([i])=>["damage","downed","parents","maxAlert"].includes(i)).map(([i,r])=>`<article><b>${r}</b><span>${{damage:"家具翻倒",downed:"人物暈眩",parents:"追逐家長",maxAlert:"最高警戒"}[i]}</span></article>`).join("")}</div><p>體力 ${Math.ceil(t.player.hp)}/100。倒地救援已結束當次事件；任務可免費重試，長期紀錄保留。</p>`;case"save":return this.header("KEEP THE MEMORIES","存檔管理")+`<p>只儲存長期紀錄。匯入前驗證版本與 ID，損壞檔不覆蓋。</p><div class="menu-grid">${this.button("立即儲存","saveNow")}${this.button("匯出 JSON","export")}${this.button("匯入 JSON","import")}${this.button("接管其他分頁寫入","takeover")}${this.button("清除進度（確認）","clearConfirm")}</div><input type="file" id="importFile" accept="application/json,.json" hidden><p class="fine">${Qe(this.store.error||"本地存檔就緒")} · revision ${n.revision}</p>`;case"debug":return this.header("DEVELOPMENT ONLY","可重現驗證")+`<p>Seed ${t.rosterSeed} · ${t.assertOwnership()?"物件身份正常":""}</p><div class="menu-grid">${wn.map(i=>this.button("到 "+i.label,"teleport",i.id)).join("")}</div><h3>家長型別（仍受3名額限制）</h3><div class="menu-grid">${Cr.map(i=>this.button(i.label,"spawn",i.id)).join("")}</div><h3>警戒</h3>${[0,20,40,65,90].map(i=>this.button(String(i),"alert",String(i))).join("")}${this.button("恢復／清場","devReset")}${this.button("效能 HUD 開關","debugHUD")}<pre>${Qe(JSON.stringify(this.render.measure(),null,2))}</pre><p>目前任務事件：</p><pre>${Qe(JSON.stringify(t.eventLog.slice(-12),null,2))}</pre>`;case"timeQuestion":return this.header("LOOK AT THE CLOCK","時間到了嗎？")+`<p>黑板：考試時間24分鐘，已過12分鐘，剩餘12分鐘。</p>${[6,12,24].map(i=>this.button(i+"分鐘","answer",String(i))).join("")}`;default:if(e.startsWith("dialog:")){let i=t.npcs.find(r=>r.id===e.slice(7));return this.header("LET’S TALK",i.label+"的經歷")+`<p>${{timid:"老師，刚剛的聲音好大。",fighter:"老師，不能一直用揮打解決問題。",tattletale:"我要把今天的事告訴主任。"}[i.type]||"老師，今天的校園有點混亂。"}</p><div class="menu-grid">${["說明事實","一本正經的荒謬解釋","結束談話"].map((r,a)=>`<button data-action="respond" data-id="${i.id}" data-value="${a}">${r}</button>`).join("")}</div>`}return this.header("CONFIRM","確認")+`<p>${e.startsWith("mode:")?"切換活動會重置當前場景並取消未完成任務。":e==="clearConfirm"?"清除本地長期紀錄，無法撤銷。":"重開平靜校園，未完成任務可重新接取。"}</p>${this.button("確認","confirm",e,"primary")}${this.button("取消","open","pause")}`}}thumbnail(e,t){return`<img class="codex-thumb" alt="${Qe(e)} 遊戲模型" src="${this.render.thumbnail(e,t)}">`}dogPanel(){const e=this.game,t=e.profile.dogs;return this.header("TWO CAMPUS FRIENDS","校狗 · LION 與馬尼")+`<p>零食 ${t.treats}/20 · 共享協助冷卻 ${Math.ceil(t.assistCooldown)} 秒。摸摸 E；攻擊 J 始終保持揮打。</p>${qa.map(n=>{const i=e.dogs.actor(n),r=t.dogs[n];return`<article class=dog-status>${this.thumbnail(n,"dog")}<h3>${Ya[n]} · ${r.affinity}/100</h3><p>${ja(r.affinity)} · ${e.meeting.running?e.dogs.observer===n?"會議旁聽席":"校園安全等待":wn.find(a=>a.id===xi(i))?.label||"共用走廊"} · ${Qe(i.state)}</p><p>跟隨：45好感 ／ 協助：75好感。摸摸 ${Math.ceil(r.cooldowns.pet)}s、零食 ${Math.ceil(r.cooldowns.treat)}s、玩球 ${Math.ceil(r.cooldowns.ball)}s。</p><div class=menu-grid>${[["pet","摸摸"],["treat","給零食"],["play","玩球"],["follow","跟我來"],["rest","回去休息"],["assist","請牠幫忙"]].map(([a,o])=>this.button(o,"dogAction",n+":"+a)).join("")}</div></article>`}).join("")}<h3>協助目標：${Qe(e.npcs.find(n=>n.id===e.dogs.selectedTarget)?.label||"尚未選取")}</h3><p>先點選畫面中的敵對成人，或在下方確認名字，再請狗幫忙。</p><div class=menu-grid>${e.npcs.filter(n=>e.dogs.validTarget(n)&&Rr(n,e.player)<8&&this.render.inView(n)&&e.world.visible(e.player,n)).map(n=>this.button(n.label,"dogTarget",n.id,n.id===e.dogs.selectedTarget?"selected":"")).join("")||"附近沒有有效敵對成人。"}</div><h3>理化老師的小任務</h3><p>找辦公室／餵狗角附近的老師接取及交付。${t.activeQuest?Qe(vi.find(n=>n.id===t.activeQuest)?.label):"尚未追蹤校狗任務"}</p>${t.activeQuest?`<p>${(()=>{const n=vi.find(i=>i.id===t.activeQuest);return"item"in n?"取物："+(wn.find(i=>i.id===xi(n.home))?.label||"中庭")+"（地圖黃點）。取回後帶到餵狗角黃色圈，按 E 定位，再向老師交付。":"在餵狗角附近選「跟我來」，陪走到"+(n.dog==="dog_lion"?"操場入口":"音樂教室外")+"的黃色圈，再向老師交付。"})()}</p>`:""}<div class=menu-grid>${vi.map(n=>this.button((t.dogs[n.dog].completed.includes(n.id)?"✓ ":"")+n.label,"dogQuest",n.id)).join("")}${this.button("向老師交付","dogDeliver")}${this.button("任務物件安全歸位","dogReset")}</div><p>${t.achievements.map(Qe).join(" · ")||"和校狗一起留下新回憶。"}</p>`}mapTargets(){let e=this.game,t=e.step;const n=vi.find(i=>i.id===e.profile.dogs.activeQuest);if(n)return"item"in n?[n.home,n.goal]:[{x:8,z:11},n.goal];if(!t)return[];if(["deliver","place","wearVisit"].includes(t.kind))return Array.from({length:t.count||1},(i,r)=>dl(t,r));if(t.kind==="gather")return this.game.npcs.filter(i=>this.game.attempt.meta.choristers.includes(i.id)).map(i=>({x:i.x,z:i.z}));if(t.kind==="return"){let i=[...e.objects.values()].find(r=>r.type===t.item);return i?[i.home]:[]}return[...e.objects.values()].filter(i=>i.pins.includes(e.attempt.id)).map(i=>({x:i.x,z:i.z}))}action(e){if(!this.started||this.modal)return;let t=this.game;switch(e){case"attack":t.attack();break;case"dodge":t.dodge();break;case"throw":t.throwItem();break;case"drop":t.drop();break;case"roll":t.rollCall();break;case"conduct":t.conduct();break;case"interact":this.handleResult(t.interact());break}}handleResult(e){typeof e=="string"&&["missions","shop","report","timeQuestion","dogs"].includes(e)?this.open(e,!1):e?.dialog&&this.open("dialog:"+e.dialog,!1)}async click(e,t="",n=""){let i=this.game;switch(e){case"codexTab":["students","parents","objects"].includes(t)&&(this.codexTab=t,this.open("knockdowns"));break;case"close":this.close();break;case"start":await this.audio.unlock(),this.started=!0,this.close(),i.profile.tutorialFlags.includes("done")||(i.startTutorial(),this.toast(i.tutorialText()));break;case"open":this.open(t);break;case"task":i.startMission(t),this.close();break;case"cancelTask":i.cancelMission(),this.open("missions");break;case"resetItems":i.resetObjectiveItems(),this.open("missions");break;case"tutorial":i.startTutorial(),this.close();break;case"skipTutorial":i.finishTutorial();break;case"modeConfirm":this.open("mode:"+t);break;case"confirmReset":this.open("resetConfirm");break;case"clearConfirm":this.open("clearConfirm");break;case"confirm":t==="clearConfirm"?(i.profile=ic(),i.reset("normal"),this.store.save(i.profile)):i.reset(t.startsWith("mode:")?t.slice(5):i.mode,t.startsWith("mode:")),this.close();break;case"settings":for(let r of["mute","lowMotion","assist"])i.profile.settings[r]=Q("#"+r).checked;for(let r of["music","sfx"])i.profile.settings[r]=+Q("#"+r).value/100;i.profile.settings.quality=Q("#quality").value,this.audio.configure(),this.render.resize(),this.store.save(i.profile),this.toast("設定已儲存");break;case"soundTest":window.open("./soundtest.html","_blank","noopener");break;case"tutorialGuide":window.open("./tutorial.html","_blank","noopener");break;case"meetingUse":this.close(),i.meeting.secondary();break;case"meetingLeave":this.close(),i.meeting.leave();break;case"lifeInteract":{this.close();const r=i.life.targets().find(a=>a.id===t&&Rr(a,i.player)<2.5&&i.world.visible(a,i.player));r&&i.life.interact(r.id);break}case"gameAction":this.close(),i.interact(void 0,t);break;case"interactTarget":this.close(),this.handleResult(i.interact());break;case"pushTarget":this.close(),i.interact(i.nearest(),"push");break;case"messTarget":this.close(),i.interact(i.nearest(),"mess");break;case"restoreTarget":this.close(),i.interact(i.nearest(),"restore");break;case"teach":this.close(),i.teach();break;case"drink":i.buyDrink()?this.toast("涼茶恢復30體力"):this.toast("點數不足或飲用冷卻中"),this.open("shop",!1);break;case"cosmetic":i.buyCosmetic(t),this.open("shop",!1);break;case"buyTreat":i.dogs.buyTreat(),this.open("shop",!1);break;case"dogQuest":i.dogs.quest(t),this.open("dogs");break;case"dogReset":i.dogs.resetQuest(),this.open("dogs");break;case"dogDeliver":i.dogs.checkDelivery(),this.open("dogs");break;case"dogAction":{const[r,a]=t.split(":");this.close(),a==="pet"&&i.dogs.pet(r),a==="treat"&&i.dogs.treat(r),a==="play"&&i.dogs.play(r),a==="follow"&&i.dogs.follow(r),a==="rest"&&(i.dogs.cancel(i.dogs.actor(r)),i.dogs.p.companion=null),a==="assist"&&i.dogs.assist(r);break}case"dogTarget":i.dogs.select(t),this.open("dogs");break;case"service":this.toast(i.service()?"整理完成 +10點":"平靜且冷卻結束才可服務"),this.open("shop",!1);break;case"equip":if(i.profile.equipped.includes(t))i.profile.equipped=i.profile.equipped.filter(r=>r!==t);else{let r=t.split("_")[0];i.profile.equipped=i.profile.equipped.filter(a=>a.split("_")[0]!==r),i.profile.equipped.push(t)}this.store.save(i.profile),this.open("collection");break;case"respond":i.respond(t,+n),this.close();break;case"answer":i.emit("answerTime",{correct:+t==12}),this.toast(+t==12?"正確，還有12分鐘。":"再看一次黑板：剩餘12分鐘。"),+t==12&&this.close();break;case"saveNow":this.store.save(i.profile),this.open("save");break;case"export":{let r=new Blob([JSON.stringify(i.profile,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(r),a.download="dongshan-save.json",a.click(),setTimeout(()=>URL.revokeObjectURL(a.href),1e3);break}case"import":{let r=Q("#importFile");r.onchange=async()=>{try{let a=r.files[0];if(a.size>6e5)throw Error("檔案過大");let o=nc(JSON.parse(await a.text()));i.profile=o,i.reset("normal"),this.store.save(o),this.audio.configure(),this.toast("匯入成功"),this.open("save")}catch(a){this.toast("匯入失敗，原存檔保留："+a.message)}},r.click();break}case"takeover":this.store.claim(!0),this.store.save(i.profile),this.open("save");break;case"teleport":Object.assign(i.player,tc(t)),this.close();break;case"spawn":this.toast(i.spawnParent(t)?"家長已從校門入場":"3名額預算不足"),this.close();break;case"alert":i.alert=+t,i.lastTrouble=i.time,this.close();break;case"devReset":i.reset(i.mode),this.open("debug");break;case"debugHUD":this.debug=!this.debug,this.close();break}}toast(e,t){let n=Q("#speech");n.hidden=!e.includes("：")&&!/^(各位|我們|這是|請不要|物品)/.test(e),n.hidden||(n.textContent=e);const i=Q("#toast"),r=document.createElement("span");r.className="toast-text",r.textContent=e,i.replaceChildren(r);const a=!!t&&t.gain>0&&["dog_lion","dog_mani"].includes(t.id);if(i.classList.toggle("toast-dog",a),a){const o=document.createElement("span");o.className="toast-dog-face",o.innerHTML=wm(t.id),i.prepend(o),n.hidden=!0}n.hidden?Q("#toast").classList.add("visible"):Q("#toast").classList.remove("visible"),this.toastUntil=performance.now()+(a?3e3:4e3)}setQuestCollapsed(e){this.questCollapsed=e,Q(".quest").classList.toggle("is-collapsed",e),Q("#quest-body").hidden=e,Q("#quest-toggle").setAttribute("aria-expanded",String(!e)),Q("#quest-toggle").setAttribute("aria-label",e?"展開今日提示":"收合今日提示"),Q("#quest-chevron").textContent=e?"▽":"△"}updateFeedback(){const e=this.game,t=oc(e.player.hp),n=t!=="normal",i=e.profile.settings.lowMotion||matchMedia("(prefers-reduced-motion: reduce)").matches||this.paused;Q(".status-card").dataset.health=t,Q(".hud").classList.toggle("feedback-still",i),Q("#health-vignette").hidden=!n||!this.started,Q("#health-vignette").dataset.health=t;const r=Q("#health-warning");r.hidden=!n;const a=t==="critical"?"危急！先拉開距離":"血量偏低 · 先找掩護";r.textContent!==a&&(r.textContent=a),this.hitLabels=this.hitLabels.filter(o=>e.time-o.start<.65&&e.time>=o.start),Q("#hit-feedback").innerHTML=this.hitLabels.map(o=>{const l=e.time-o.start,c=this.render.project(o,1.9);return`<span class="hit-label" style="left:${c.x}px;top:${c.y-(i?0:l*35)}px;opacity:${Math.min(1,(.65-l)/.2)}">命中 −${o.damage}</span>`}).join("")}updateQuest(){const e=this.game,t=e.tutorial>=0?"日常差事教學":e.attempt?hl(e):"今天，想做點什麼？",n=e.tutorial>=0?e.tutorialText():e.step?`${e.step.text}　${e.attempt.count}/${e.step.count||1}`:"探索校園，或從今日待辦選一件差事。",i=JSON.stringify([e.session,e.tutorial,e.attempt?.id,e.attempt?.step,t,n]);i!==this.questContent&&(this.questContent=i,Q("#quest-title").textContent=t,Q("#quest-detail").textContent=n,Q("#skip").hidden=e.tutorial<0,this.setQuestCollapsed(!1))}update(e){let t=this.game,n=t.player;if(this.hudClock+=e,this.hudClock<.1)return;this.hudClock=0,Q("#hp-text").textContent=Math.ceil(n.hp)+" / 100",Q("#hp-bar").style.width=n.hp+"%",Q("#alert-text").textContent="警戒 "+t.level,Q("#alert-circles").innerHTML=Array.from({length:4},(l,c)=>`<i class="${c<t.level?"lit":""}"></i>`).join(""),Q("#alert-reason").textContent=t.reason,Q("#held").textContent=t.held?Ui[t.held.type].label:"空手・從容",Q("#zone").textContent=wn.find(l=>l.id===xi(n))?.label||"共用走廊",Q("#points").textContent=t.profile.points+" 點",this.updateQuest(),t.meeting.running&&(Q("#zone").textContent="校事會議",Q("#quest-title").textContent=`失控 ${t.meeting.chaos}/100 · 剩餘 ${Math.max(0,Math.ceil(75-t.meeting.elapsed))}秒`,Q("#quest-detail").textContent=t.meeting.context()||"可以搗亂，也可以隨時離席",Q("#alert-text").textContent=`失控 ${t.meeting.chaos}/100`,Q("#alert-reason").textContent=`剩餘 ${Math.max(0,Math.ceil(75-t.meeting.elapsed))}秒 · ${t.meeting.selected.length} 種橋段`,Q("#quest-detail").textContent=t.meeting.context()||t.meeting.selected.map(l=>Ja.find(c=>c.id===l)?.label).join("／")),Q("#world").style.opacity=t.meeting.phase==="ENTERING"?"0.15":"1",Q("#meeting-controls").hidden=!t.meeting.running,Q(".side-nav").hidden=t.meeting.running,Q("#meeting-use").textContent=t.meeting.context()||"靠近特殊道具",Q("#meeting-use").disabled=!t.meeting.context(),Q("#meeting-display").hidden=!t.meeting.running,Q("#meeting-display").textContent=t.meeting.selected.includes("projector")?"投影："+t.meeting.cards[t.meeting.projectorPage]:t.meeting.selected.includes("whiteboard")?"白板："+(t.meeting.boardMusic?"♩ ♪ ♫ 四分音符":["說明／討論／決議","決議／說明／討論","討論／決議／說明"][t.meeting.agenda]):"",Q("#throw").hidden=!t.held,Q("#drop").hidden=!t.held,Q("#meeting-ready").textContent=t.meeting.triggerStatus(),Q("#meeting-ready").hidden=t.meeting.running,Q("#conduct").hidden=!t.choir,Q("#actions").textContent=n.hidden?"離開藏點":"動作";let i=t.nearest();if(Q("#context").textContent=n.hidden?"互動：離開藏點":i?"互動 · "+i.label:"靠近物品或人物",Q("#arrival").textContent=t.familyQueue.length?`${Cm(t.familyQueue[0].type)}到校 · ${Math.max(0,Math.ceil(t.familyQueue[0].at-t.time))}s`:"",Q("#arrival").hidden=!t.familyQueue.length,t.meeting.running||(Q("#zone").textContent+=" · "+t.life.phase,!t.attempt&&t.tutorial<0&&(Q("#quest-detail").textContent=t.life.context()),Q("#alert-reason").textContent=t.reason+(t.life.p.stomach>0?" · 肚子提出異議 "+Math.ceil(t.life.p.stomach)+"秒":"")),t.choir){let l=t.time-t.choir.start,c=l/.75,u=[3,7,11,15,19,23,27,31].find(h=>h>=c-.35);Q("#beat").hidden=!1,Q("#beat").innerHTML=`<span>第 ${Math.min(32,Math.floor(c)+1)} / 32 拍　${t.choir.hits}/8命中</span><div class="beat-ring" style="transform:scale(${u===void 0?1:Math.min(2,Math.max(.6,1+(u-c)*.35))})"></div><b>${u!==void 0&&Math.abs(u-c)<.35?"現在！":"跟著收圈"}</b>`}else Q("#beat").hidden=!0;this.updateFeedback();const r=t.microphoneSignals().filter(l=>this.render.inView(l)&&Math.hypot(l.x-n.x,l.z-n.z)<12),a=r.find(l=>l.kind==="call")||r[0],o=Q("#microphone-speech");if(o.hidden=!a,a){const l=this.render.project(a,a.kind==="call"?2.6:1);o.textContent=a.text,o.style.left=Math.min(innerWidth-110,Math.max(110,l.x))+"px",o.style.top=Math.min(innerHeight-40,Math.max(30,l.y))+"px"}if(performance.now()>this.toastUntil)Q("#toast").classList.remove("visible"),Q("#speech").hidden=!0;else if(!Q("#speech").hidden){let l=this.render.project(n);Q("#speech").style.left=Math.min(innerWidth-115,Math.max(115,l.x))+"px",Q("#speech").style.top=Math.max(24,l.y)+"px"}Q("#debug-hud").hidden=!this.debug,this.debug&&(Q("#debug-hud").textContent=JSON.stringify({...this.render.measure(),voices:this.audio.voices.size,musicVoices:this.audio.musicVoices.size,save:this.store.error},null,2)),this.store.error&&(Q("#save-warning").textContent=this.store.error)}}function hl(s){return Pr.find(e=>e.id===s.attempt.mission)?.label||""}function Cm(s){return Cr.find(e=>e.id===s)?.label+"家長"}function Rr(s,e){return Math.hypot(s.x-e.x,s.z-e.z)}const Vl=document.querySelector("#app");Vl.innerHTML='<main id="game"><canvas id="world" aria-label="東山校園3D沙盒"></canvas><div class="hud"><div id="health-vignette" aria-hidden="true" hidden></div><div id="hit-feedback" aria-hidden="true"></div><div class="top-left"><div class="school-brand">東山 <span>校園大騷動</span></div><div class="status-card"><div class="hp-line"><span>開心導師</span><b id="hp-text">100 / 100</b></div><div class="hp-track"><div id="hp-bar"></div></div><div class="alert-line"><b id="alert-text">警戒 0</b><span id="alert-circles"></span></div><small id="alert-reason">校園一切正常</small><small id="meeting-ready"></small><small id="health-warning" role="status" hidden></small></div></div><div class="top-right"><span id="points" class="point-pill">20 點</span><button id="dogs-entry" aria-label="校狗">校狗</button><button id="map" aria-label="校園地圖">⌖</button><button id="menu" aria-label="暫停">Ⅱ</button></div><div class="quest"><button id="quest-toggle" aria-expanded="true" aria-controls="quest-body" aria-label="收合今日提示"><span class="eyebrow"><span class="quest-caption">TODAY AT DONGSHAN</span><span id="zone">導師辦公室</span></span><span id="quest-chevron" aria-hidden="true">△</span></button><div id="quest-body"><h3 id="quest-title">今天，想做點什麼？</h3><p id="quest-detail"></p><button id="skip">跳過教學</button></div></div><div class="side-nav"><button id="tasks"><span>☷</span>待辦</button><button id="calendar"><span>▦</span>行事曆</button></div><div id="meeting-controls" hidden><button id="meeting-use">特殊互動 F</button><button id="meeting-leave">離席</button></div><div id="meeting-display" hidden></div><div id="arrival" hidden></div><div id="beat" hidden></div><div id="speech" hidden></div><div id="microphone-speech" role="status" hidden></div><div id="toast" role="status" aria-live="polite"></div><div class="bottom-info"><span id="held">空手・從容</span><button id="actions">動作</button><span id="context">靠近物品或人物</span></div><div class="controls"><div id="joystick" aria-label="移動搖桿"><div id="knob"></div></div><div class="action-cluster"><button id="drop" hidden aria-label="放下手中物品 R">↓<small>放下 R</small></button><button id="throw" hidden>↗<small>投擲 Q</small></button><button id="conduct" hidden>♫<small>指揮 Enter</small></button><button id="dodge">↝<small>閃避 K</small></button><button id="attack">✦<small>揮打 J</small></button><button id="interact">✋<small>互動 E</small></button></div></div><pre id="debug-hud" hidden></pre><small id="save-warning"></small></div><div id="modal"></div></main>';const Ri=new sc,Qt=new rc(Ri.load(),6477);let Kn;try{Kn=new Em(document.querySelector("#world"),Qt)}catch(s){throw Vl.innerHTML='<div class="compat"><h1>需要 WebGL 2 支援</h1><p>此瀏覽器未能啟動真正3D畫面。請開啟硬體加速或改用支援WebGL的瀏覽器。</p><pre></pre></div>',document.querySelector("pre").textContent=s.message,s}Qt.cameraVisible=s=>Kn.inView(s);const Ws=new Tm(document.querySelector("#world"),document.querySelector("#joystick"),document.querySelector("#knob")),ks=new ac(Qt),Bt=new Rm(Qt,Kn,Ws,ks,Ri);document.querySelector("#skip").addEventListener("click",()=>Qt.finishTutorial());document.querySelector("#meeting-use").addEventListener("click",()=>Qt.meeting.secondary());document.querySelector("#meeting-leave").addEventListener("click",()=>Qt.meeting.leave());let ul=performance.now(),Wn=0;function Gl(s){let e=(s-ul)/1e3;ul=s;let t=Math.min(.133,e);if(Bt.paused)Wn=0;else{Wn+=t;let n=0;for(;Wn>=1/30&&n++<4;)Qt.tick(1/30,Ws.movement()),Wn-=1/30;n>=4&&(Wn=0)}Kn.frame(e,Bt.started&&!Bt.paused,Bt.paused?1:Wn/(1/30)),Bt.update(t),requestAnimationFrame(Gl)}requestAnimationFrame(Gl);Bt.onPause=()=>{Wn=0};document.addEventListener("visibilitychange",()=>{document.hidden&&(Ws.clear(),ks.pause(),Bt.started&&Bt.open("pause"),Ri.save(Qt.profile))});window.addEventListener("blur",()=>{Ws.clear(),Bt.started&&Bt.open("pause")});window.addEventListener("pagehide",s=>{Ri.save(Qt.profile),Ri.dispose(),ks.pause(),s.persisted||ks.dispose()});let Wl=document.querySelector("#world");Wl.addEventListener("webglcontextlost",s=>{s.preventDefault(),Kn.ctxLost=!0,Ri.save(Qt.profile),Bt.open("pause"),Bt.toast("3D繪圖中斷，已暫停並儲存。等待恢復或重新載入。")});Wl.addEventListener("webglcontextrestored",()=>{Kn.ctxLost=!1,Kn.lastSession=-1,Bt.toast("3D畫面已恢復，按繼續遊玩")});
