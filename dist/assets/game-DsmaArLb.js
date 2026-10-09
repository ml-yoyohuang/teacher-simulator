import{z as wn,d as Vt,a as vi,b as Gi,c as hl,l as Xa,p as As,e as $a,f as Kl,s as Xr,g as Zl,h as qa,i as Ya,j as ja,k as Ka,m as Jl,n as Ii,o as Za,q as Rs,r as Ja,t as Ql,v as ec,u as tc,S as nc,G as ic,A as rc}from"./audio-QEx3XXQp.js";const q={wood:"#ae9476",lightWood:"#c4ae8d",dark:"#3d4c4e",white:"#f4efdd",green:"#446e60",blue:"#7e969e",brick:"#b97059",yellow:"#e5bd4a",grass:"#71987a"},ne=(r,e,t,n=[0,0,0])=>({shape:"box",p:r,s:e,color:t,r:n}),Et=(r,e,t,n=[0,0,0])=>({shape:"cyl",p:r,s:e,color:t,r:n}),Jn=(r,e,t)=>({shape:"sphere",p:r,s:e,color:t});function Cs(r){const{w:e,d:t,h:n,type:i}=r,s=(h=q.lightWood)=>[ne([0,n-.06,0],[e,.12,t],h),...[-1,1].flatMap(c=>[-1,1].map(u=>ne([c*(e/2-.12),(n-.12)/2,u*(t/2-.1)],[.09,n-.12,.09],q.dark)))],a=(h=q.blue)=>[ne([0,.46,0],[e,.1,t],h),ne([0,n*.75,-t*.45],[e,n*.5,.08],h),...[-1,1].flatMap(c=>[-1,1].map(u=>ne([c*e*.36,.23,u*t*.36],[.065,.46,.065],q.dark)))],o=(h=q.wood)=>[ne([-e/2+.06,n/2,0],[.12,n,t],h),ne([e/2-.06,n/2,0],[.12,n,t],h),ne([0,n/2,-t*.44],[e,n,.08],h),...Array.from({length:3},(c,u)=>ne([0,.12+u*(n-.18)/2,0],[e,.08,t],h))];switch(i){case"life_wall":return[ne([0,.5,0],[e,1,t],q.white),ne([0,1,0],[e+.02,.06,t],q.blue)];case"life_partition":return[ne([0,.55,0],[e,1.1,t],q.blue),ne([e*.3,.5,t*.6],[.08,.05,.04],q.dark)];case"flag_pole":return[Et([0,2,0],[.08,4,.08],q.white),ne([.45,3.6,0],[.85,.5,.04],q.brick),ne([.12,3.72,.03],[.25,.25,.02],q.blue)];case"student_desk":case"work_desk":case"principal_desk":case"nurse_desk":return[...s(),...i==="principal_desk"?[ne([0,n*.5,-t*.25],[e*.9,n*.85,.12],q.wood)]:[]];case"student_chair":case"visitor_chair":case"office_seat":case"high_chair":return a(i==="high_chair"?q.dark:i==="visitor_chair"?q.wood:q.blue);case"piano_bench":return[ne([0,.46,0],[e,.12,t],q.dark),ne([-e*.35,.23,0],[.09,.46,t*.8],q.dark),ne([e*.35,.23,0],[.09,.46,t*.8],q.dark)];case"short_bench":return[ne([0,.45,0],[e,.12,t],q.wood),ne([0,.72,-t*.45],[e,.45,.06],q.wood),ne([-e*.35,.22,0],[.12,.44,t*.8],q.dark),ne([e*.35,.22,0],[.12,.44,t*.8],q.dark)];case"counter":case"shop_counter":return[ne([0,n/2,0],[e,n,t],q.blue),ne([0,n,0],[e+.08,.08,t+.08],q.lightWood),ne([0,n*.5,t*.51],[e*.8,.09,.02],q.white)];case"low_shelf":case"instrument_shelf":case"equipment_rack":case"lost_found":return[...o(),ne([0,n,0],[e+.06,.08,t+.06],q.lightWood),...[-.3,.3].map(h=>ne([h*e,n*.48,.05],[.07,n*.8,t*.8],q.wood))];case"file_cabinet":return[ne([0,n/2,0],[e,n,t],q.blue),...Array.from({length:3},(h,c)=>ne([0,.3+c*.45,t*.51],[e*.8,.34,.03],q.white)),...Array.from({length:3},(h,c)=>ne([0,.35+c*.45,t*.55],[.2,.035,.04],q.dark))];case"trophy_shelf":return[...o(),...[-.55,.55].flatMap(h=>[Et([h,.76,-.18],[.16,.2,.16],q.yellow),{shape:"cone",p:[h,1,-.18],s:[.35,.32,.35],color:q.yellow}])];case"stock_shelf":return[...o(),...[-.55,0,.55].flatMap((h,c)=>[ne([h,.4,0],[.3,.35,.3],[q.brick,q.yellow,q.green][c]),ne([h,1,0],[.26,.4,.26],[q.blue,q.white,q.brick][c])])];case"fridge":return[ne([0,n/2,0],[e,n,t],q.white),ne([0,n*.55,t*.51],[e*.8,n*.7,.04],q.blue),ne([e*.32,n*.6,t*.55],[.05,.32,.05],q.dark),...[-.22,.22].map(h=>ne([h,.4,t*.54],[.18,.28,.04],q.green))];case"blackboard":case"music_board":return[ne([0,1.55,0],[e,.95,.12],q.wood),ne([0,1.55,.075],[e-.2,.8,.025],i==="music_board"?q.white:"#234c42"),ne([0,1.04,.15],[e,.065,.18],q.wood),...Array.from({length:i==="music_board"?5:3},(h,c)=>ne([-.5,1.35+c*.1,.096],[e*.45,.013,.012],i==="music_board"?q.dark:q.white)),...i==="music_board"?[Jn([.8,1.45,.12],[.1,.07,.04],q.dark),ne([.85,1.58,.12],[.02,.25,.015],q.dark)]:[]];case"notice":case"poster":case"honor":case"visitor_board":return[ne([0,1.5,0],[e,.9,.1],q.wood),...[-.3,0,.3].map((h,c)=>ne([h*e,1.5,.07],[e*.23,.5,.025],[q.yellow,q.blue,q.white][c]))];case"books":return[ne([0,.07,0],[.45,.1,.32],q.blue),ne([-.2,.07,0],[.035,.1,.32],q.dark),ne([.02,.11,0],[.38,.025,.28],q.white)];case"paper_tray":return[ne([0,1,0],[e,.06,t],q.blue),ne([0,1.07,0],[e*.9,.08,t*.9],q.white),ne([0,1.13,0],[e*.65,.02,t*.6],q.yellow)];case"pencil_cup":return[Et([0,1.03,0],[.18,.22,.18],q.blue),...[-.04,.04].map(h=>Et([h,1.2,0],[.02,.3,.02],q.dark))];case"cleaning_rack":return[ne([0,1.25,0],[e,.1,.2],q.wood),...[-.4,.4].map(h=>ne([h,1.05,.1],[.05,.35,.05],q.dark))];case"wig_stand":return[Et([0,1.04,0],[.1,.26,.1],q.dark),Jn([0,1.2,0],[.36,.4,.34],q.white)];case"triangle_rack":return[Et([-.4,.75,0],[.06,1.5,.06],q.dark),Et([.4,.75,0],[.06,1.5,.06],q.dark),ne([0,1.5,0],[1,.06,.06],q.dark),ne([0,.03,0],[1,.06,.5],q.dark)];case"drums":return[Et([0,.46,0],[.7,.75,.7],q.brick),Et([0,.85,0],[.72,.035,.72],q.white),Et([-.5,.75,.3],[.38,.4,.38],q.blue),Et([.55,1,0],[.62,.04,.62],q.yellow),Et([.55,.5,0],[.04,1,.04],q.dark)];case"formal_rug":case"rehearsal_mat":return[ne([0,.06,0],[e,.025,t],i==="formal_rug"?"#9b7370":"#a8bdb0")];case"garden":return[ne([0,.15,0],[e,.3,t],q.wood),ne([0,.32,0],[e-.2,.05,t-.2],q.grass),...[-.6,.6].map(h=>Jn([h,.5,.3],[.7,.45,.7],q.green))];case"tree":return[Et([0,1.1,0],[.25,2.2,.25],q.wood),Jn([0,2.35,0],[2.3,1.6,2.3],q.grass),Jn([.55,2.6,.25],[1.5,1.2,1.5],"#86a486")];case"plant":return[Et([0,.22,0],[.45,.45,.45],q.brick),Jn([0,.65,0],[.65,.7,.65],q.grass)];case"direction_post":return[Et([0,.9,0],[.08,1.8,.08],q.wood),ne([0,1.5,0],[1.5,.32,.1],q.green),ne([.2,1.12,0],[1.1,.26,.1],q.blue)];case"water_station":return[ne([0,.7,0],[e,1.4,t],q.blue),ne([0,1.08,t*.52],[e*.75,.33,.05],q.white),ne([0,.8,t*.58],[.13,.04,.17],q.dark)];case"wastebasket":return[Et([0,n/2,0],[e,n,t],q.blue),Et([0,n,0],[e*.8,.025,t*.8],q.dark)];case"basketball_hoop":return[ne([0,1.5,0],[.12,3,.12],q.dark),ne([0,2.8,.3],[1.5,.85,.09],q.white),ne([0,2.8,.36],[.45,.33,.015],q.blue),{shape:"torus",p:[0,2.45,.7],s:[.6,.6,.6],color:q.brick,r:[Math.PI/2,0,0]}];case"ball_crate":case"crate":return[ne([0,.1,0],[e,.2,t],q.wood),...[-1,1].map(h=>ne([h*e*.48,.3,0],[.05,.4,t],q.wood)),ne([0,.3,-t*.48],[e,.4,.05],q.wood)];case"guard_booth":return[ne([0,.05,0],[e,.1,t],"#c8c6b0"),ne([0,2,-t*.3],[e,.1,t*.45],q.blue),...[-1,1].map(h=>ne([h*e*.45,1,-t*.3],[.12,2,.12],q.blue)),ne([0,1.1,-t*.45],[e,.8,.08],q.white),ne([0,1.6,-t*.4],[e*.75,.35,.04],q.blue)];case"awning":return[ne([0,2.3,-.6],[e,.12,t*.4],q.brick),...[-1,1].map(h=>ne([h*e*.48,1.15,-t*.45],[.08,2.3,.08],q.wood))];case"queue_mark":return[ne([0,.035,0],[e,.015,t],q.yellow)];case"medical_bed":return[ne([0,.38,0],[e,.55,t],q.white),ne([0,.68,0],[e,.12,t],q.blue),ne([0,.79,-t*.35],[e*.8,.15,.45],q.white),ne([0,.76,t*.15],[e,.1,t*.55],"#a7bdb8"),...[-1,1].map(h=>ne([h*e*.45,.3,0],[.07,.6,t*.8],q.dark))];case"medical_cabinet":return[ne([0,n/2,0],[e,n,t],q.white),ne([0,n*.65,t*.51],[.38,.3,.03],q.green),ne([-.05,n*.68,t*.54],[.18,.03,.02],q.white),ne([.1,n*.75,t*.54],[.025,.18,.02],q.white)];case"screen":return[ne([0,.8,0],[.08,1.25,t],q.blue),ne([0,.05,0],[.45,.1,t],q.dark)];case"stage":return[ne([0,.12,0],[e,.24,t],q.wood)];case"stage_steps":return[ne([0,.06,0],[e,.12,t],q.wood)];case"stage_backdrop":return[ne([0,1,0],[e,1.6,.08],q.green)];case"bunting":return Array.from({length:8},(h,c)=>({shape:"cone",p:[-e/2+c*e/7,2.1,0],s:[.5,.55,.035],color:c%2?q.brick:q.yellow,r:[0,0,Math.PI]}));default:return s()}}function sc(r,e,t){const n=r/e<1?13:11.5,i=r<=600||t&&Math.min(r,e)<=600;return n/(i?2.2:1)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="180",ac=0,Qa=1,oc=2,ul=1,lc=2,gn=3,Ln=0,Dt=1,_n=2,Rn=0,Mi=1,eo=2,to=3,no=4,cc=5,Xn=100,hc=101,uc=102,dc=103,fc=104,pc=200,mc=201,gc=202,_c=203,Ps=204,Ls=205,vc=206,xc=207,Mc=208,Sc=209,yc=210,Ec=211,bc=212,Tc=213,wc=214,Ds=0,Is=1,Us=2,yi=3,Ns=4,Fs=5,Os=6,Bs=7,ya=0,Ac=1,Rc=2,Cn=0,Cc=1,Pc=2,Lc=3,Dc=4,Ic=5,Uc=6,Nc=7,dl=300,Ei=301,bi=302,ks=303,zs=304,Br=306,Hs=1e3,qn=1001,Vs=1002,kt=1003,Fc=1004,tr=1005,sn=1006,$r=1007,Yn=1008,ln=1009,fl=1010,pl=1011,Xi=1012,Ea=1013,jn=1014,an=1015,Ki=1016,ba=1017,Ta=1018,$i=1020,ml=35902,gl=35899,_l=1021,vl=1022,Jt=1023,qi=1026,Yi=1027,wa=1028,Aa=1029,xl=1030,Ra=1031,Ca=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,Gs=35840,Ws=35841,Xs=35842,$s=35843,qs=36196,Ys=37492,js=37496,Ks=37808,Zs=37809,Js=37810,Qs=37811,ea=37812,ta=37813,na=37814,ia=37815,ra=37816,sa=37817,aa=37818,oa=37819,la=37820,ca=37821,ha=36492,ua=36494,da=36495,fa=36283,pa=36284,ma=36285,ga=36286,Oc=3200,Bc=3201,Ml=0,kc=1,An="",Ot="srgb",Ti="srgb-linear",Dr="linear",tt="srgb",Qn=7680,io=519,zc=512,Hc=513,Vc=514,Sl=515,Gc=516,Wc=517,Xc=518,$c=519,_a=35044,qc=35048,ro="300 es",on=2e3,Ir=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,va=180/Math.PI;function Pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function Yc(r,e){return(r%e+e)%e}function Yr(r,e,t){return(1-t)*r+t*e}function nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let h=n[i+0],c=n[i+1],u=n[i+2],l=n[i+3];const f=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=h,e[t+1]=c,e[t+2]=u,e[t+3]=l;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(l!==x||h!==f||c!==p||u!==_){let m=1-o;const d=h*f+c*p+u*_+l*x,T=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const C=Math.sqrt(w),R=Math.atan2(C,d*T);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const E=o*T;if(h=h*m+f*E,c=c*m+p*E,u=u*m+_*E,l=l*m+x*E,m===1-o){const C=1/Math.sqrt(h*h+c*c+u*u+l*l);h*=C,c*=C,u*=C,l*=C}}e[t]=h,e[t+1]=c,e[t+2]=u,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],h=n[i+1],c=n[i+2],u=n[i+3],l=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*l+h*p-c*f,e[t+1]=h*_+u*f+c*l-o*p,e[t+2]=c*_+u*p+o*f-h*l,e[t+3]=u*_-o*l-h*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,h=Math.sin,c=o(n/2),u=o(i/2),l=o(s/2),f=h(n/2),p=h(i/2),_=h(s/2);switch(a){case"XYZ":this._x=f*u*l+c*p*_,this._y=c*p*l-f*u*_,this._z=c*u*_+f*p*l,this._w=c*u*l-f*p*_;break;case"YXZ":this._x=f*u*l+c*p*_,this._y=c*p*l-f*u*_,this._z=c*u*_-f*p*l,this._w=c*u*l+f*p*_;break;case"ZXY":this._x=f*u*l-c*p*_,this._y=c*p*l+f*u*_,this._z=c*u*_+f*p*l,this._w=c*u*l-f*p*_;break;case"ZYX":this._x=f*u*l-c*p*_,this._y=c*p*l+f*u*_,this._z=c*u*_-f*p*l,this._w=c*u*l+f*p*_;break;case"YZX":this._x=f*u*l+c*p*_,this._y=c*p*l+f*u*_,this._z=c*u*_-f*p*l,this._w=c*u*l-f*p*_;break;case"XZY":this._x=f*u*l-c*p*_,this._y=c*p*l-f*u*_,this._z=c*u*_+f*p*l,this._w=c*u*l+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],h=t[9],c=t[2],u=t[6],l=t[10],f=n+o+l;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-h)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(u-h)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(h+u)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(h+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,h=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*h,this._y=i*u+a*h+s*o-n*c,this._z=s*u+a*c+n*h-i*o,this._w=a*u-n*o-i*h-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const h=1-o*o;if(h<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(h),u=Math.atan2(c,o),l=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*l+this._w*f,this._x=n*l+this._x*f,this._y=i*l+this._y*f,this._z=s*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,h=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),l=2*(s*n-a*t);return this.x=t+h*c+a*l-o*u,this.y=n+h*u+o*c-s*l,this.z=i+h*l+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,h=t.z;return this.x=i*h-s*o,this.y=s*a-n*h,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new F,so=new Zi;class ke{constructor(e,t,n,i,s,a,o,h,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,h,c)}set(e,t,n,i,s,a,o,h,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=h,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],u=n[4],l=n[7],f=n[2],p=n[5],_=n[8],x=i[0],m=i[3],d=i[6],T=i[1],w=i[4],E=i[7],C=i[2],R=i[5],I=i[8];return s[0]=a*x+o*T+h*C,s[3]=a*m+o*w+h*R,s[6]=a*d+o*E+h*I,s[1]=c*x+u*T+l*C,s[4]=c*m+u*w+l*R,s[7]=c*d+u*E+l*I,s[2]=f*x+p*T+_*C,s[5]=f*m+p*w+_*R,s[8]=f*d+p*E+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],h=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*h+i*s*c-i*a*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],h=e[6],c=e[7],u=e[8],l=u*a-o*c,f=o*h-u*s,p=c*s-a*h,_=t*l+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=l*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(u*t-i*h)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*h-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const h=Math.cos(s),c=Math.sin(s);return this.set(n*h,n*c,-n*(h*a+c*o)+a+e,-i*c,i*h,-i*(-c*a+h*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new ke;function yl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function jc(){const r=Ur("canvas");return r.style.display="block",r}const ao={};function ji(r){r in ao||(ao[r]=!0,console.warn(r))}function Kc(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const oo=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lo=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zc(){const r={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?Dr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ti]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}const Ke=Zc();function vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Si(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ei;class Jc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=Ur("canvas")),ei.width=e.width,ei.height=e.height;const i=ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=vn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qc=0;class Pa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Zr(i[a].image)):s.push(Zr(i[a]))}else s=Zr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;const Jr=new F;class At extends Ri{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=qn,i=qn,s=sn,a=Yn,o=Jt,h=ln,c=At.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Pn(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=dl;At.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const h=e.elements,c=h[0],u=h[4],l=h[8],f=h[1],p=h[5],_=h[9],x=h[2],m=h[6],d=h[10];if(Math.abs(u-f)<.01&&Math.abs(l-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,E=(p+1)/2,C=(d+1)/2,R=(u+f)/4,I=(l+x)/4,O=(_+m)/4;return w>E&&w>C?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=R/n,s=I/n):E>C?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=R/i,s=O/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=I/s,i=O/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(l-x)*(l-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(l-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class th extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new At(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Pa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class El extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),ir.subVectors(this.max,Ui),ti.subVectors(e.a,Ui),ni.subVectors(e.b,Ui),ii.subVectors(e.c,Ui),xn.subVectors(ni,ti),Mn.subVectors(ii,ni),On.subVectors(ti,ii);let t=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-On.z,On.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,On.z,0,-On.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-On.y,On.x,0];return!Qr(t,ti,ni,ii,ir)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,ti,ni,ii,ir))?!1:(rr.crossVectors(xn,Mn),t=[rr.x,rr.y,rr.z],Qr(t,ti,ni,ii,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new F,new F,new F,new F,new F,new F,new F,new F],Yt=new F,nr=new Un,ti=new F,ni=new F,ii=new F,xn=new F,Mn=new F,On=new F,Ui=new F,ir=new F,rr=new F,Bn=new F;function Qr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Bn.fromArray(r,s);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),h=e.dot(Bn),c=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>o)return!1}return!0}const ih=new Un,Ni=new F,es=new F;class Ji{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ih.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(es)),this.expandByPoint(Ni.copy(e.center).sub(es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dn=new F,ts=new F,sr=new F,Sn=new F,ns=new F,ar=new F,is=new F;class bl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ts.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(ts);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=Sn.dot(this.direction),h=-Sn.dot(sr),c=Sn.lengthSq(),u=Math.abs(1-a*a);let l,f,p,_;if(u>0)if(l=a*h-o,f=a*o-h,_=s*u,l>=0)if(f>=-_)if(f<=_){const x=1/u;l*=x,f*=x,p=l*(l+a*f+2*o)+f*(a*l+f+2*h)+c}else f=s,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*h)+c;else f=-s,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*h)+c;else f<=-_?(l=Math.max(0,-(-a*s+o)),f=l>0?-s:Math.min(Math.max(-s,-h),s),p=-l*l+f*(f+2*h)+c):f<=_?(l=0,f=Math.min(Math.max(-s,-h),s),p=f*(f+2*h)+c):(l=Math.max(0,-(a*s+o)),f=l>0?s:Math.min(Math.max(-s,-h),s),p=-l*l+f*(f+2*h)+c);else f=a>0?-s:s,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(ts).addScaledVector(sr,f),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,h;const c=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),l>=0?(o=(e.min.z-f.z)*l,h=(e.max.z-f.z)*l):(o=(e.max.z-f.z)*l,h=(e.min.z-f.z)*l),n>h||o>i)||((o>n||n!==n)&&(n=o),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,s){ns.subVectors(t,e),ar.subVectors(n,e),is.crossVectors(ns,ar);let a=this.direction.dot(is),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const h=o*this.direction.dot(ar.crossVectors(Sn,ar));if(h<0)return null;const c=o*this.direction.dot(ns.cross(Sn));if(c<0||h+c>a)return null;const u=-o*Sn.dot(is);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,a,o,h,c,u,l,f,p,_,x,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,h,c,u,l,f,p,_,x,m)}set(e,t,n,i,s,a,o,h,c,u,l,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=h,d[2]=c,d[6]=u,d[10]=l,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(i),c=Math.sin(i),u=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*l,_=o*u,x=o*l;t[0]=h*u,t[4]=-h*l,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-o*h,t[2]=x-f*c,t[6]=_+p*c,t[10]=a*h}else if(e.order==="YXZ"){const f=h*u,p=h*l,_=c*u,x=c*l;t[0]=f+x*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*l,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=x+f*o,t[10]=a*h}else if(e.order==="ZXY"){const f=h*u,p=h*l,_=c*u,x=c*l;t[0]=f-x*o,t[4]=-a*l,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){const f=a*u,p=a*l,_=o*u,x=o*l;t[0]=h*u,t[4]=_*c-p,t[8]=f*c+x,t[1]=h*l,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){const f=a*h,p=a*c,_=o*h,x=o*c;t[0]=h*u,t[4]=x-f*l,t[8]=_*l+p,t[1]=l,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*l+_,t[10]=f-x*l}else if(e.order==="XZY"){const f=a*h,p=a*c,_=o*h,x=o*c;t[0]=h*u,t[4]=-l,t[8]=c*u,t[1]=f*l+x,t[5]=a*u,t[9]=p*l-_,t[2]=_*l-p,t[6]=o*u,t[10]=x*l+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rh,e,sh)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),yn.crossVectors(n,Nt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),yn.crossVectors(n,Nt)),yn.normalize(),or.crossVectors(Nt,yn),i[0]=yn.x,i[4]=or.x,i[8]=Nt.x,i[1]=yn.y,i[5]=or.y,i[9]=Nt.y,i[2]=yn.z,i[6]=or.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],u=n[1],l=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],d=n[14],T=n[3],w=n[7],E=n[11],C=n[15],R=i[0],I=i[4],O=i[8],S=i[12],M=i[1],D=i[5],k=i[9],V=i[13],X=i[2],j=i[6],$=i[10],ae=i[14],G=i[3],he=i[7],pe=i[11],Ae=i[15];return s[0]=a*R+o*M+h*X+c*G,s[4]=a*I+o*D+h*j+c*he,s[8]=a*O+o*k+h*$+c*pe,s[12]=a*S+o*V+h*ae+c*Ae,s[1]=u*R+l*M+f*X+p*G,s[5]=u*I+l*D+f*j+p*he,s[9]=u*O+l*k+f*$+p*pe,s[13]=u*S+l*V+f*ae+p*Ae,s[2]=_*R+x*M+m*X+d*G,s[6]=_*I+x*D+m*j+d*he,s[10]=_*O+x*k+m*$+d*pe,s[14]=_*S+x*V+m*ae+d*Ae,s[3]=T*R+w*M+E*X+C*G,s[7]=T*I+w*D+E*j+C*he,s[11]=T*O+w*k+E*$+C*pe,s[15]=T*S+w*V+E*ae+C*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],h=e[9],c=e[13],u=e[2],l=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*h*l-i*c*l-s*o*f+n*c*f+i*o*p-n*h*p)+x*(+t*h*p-t*c*f+s*a*f-i*a*p+i*c*u-s*h*u)+m*(+t*c*l-t*o*p-s*a*l+n*a*p+s*o*u-n*c*u)+d*(-i*o*u-t*h*l+t*o*f+i*a*l-n*a*f+n*h*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],h=e[6],c=e[7],u=e[8],l=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],T=l*m*c-x*f*c+x*h*p-o*m*p-l*h*d+o*f*d,w=_*f*c-u*m*c-_*h*p+a*m*p+u*h*d-a*f*d,E=u*x*c-_*l*c+_*o*p-a*x*p-u*o*d+a*l*d,C=_*l*h-u*x*h-_*o*f+a*x*f+u*o*m-a*l*m,R=t*T+n*w+i*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=T*I,e[1]=(x*f*s-l*m*s-x*i*p+n*m*p+l*i*d-n*f*d)*I,e[2]=(o*m*s-x*h*s+x*i*c-n*m*c-o*i*d+n*h*d)*I,e[3]=(l*h*s-o*f*s-l*i*c+n*f*c+o*i*p-n*h*p)*I,e[4]=w*I,e[5]=(u*m*s-_*f*s+_*i*p-t*m*p-u*i*d+t*f*d)*I,e[6]=(_*h*s-a*m*s-_*i*c+t*m*c+a*i*d-t*h*d)*I,e[7]=(a*f*s-u*h*s+u*i*c-t*f*c-a*i*p+t*h*p)*I,e[8]=E*I,e[9]=(_*l*s-u*x*s-_*n*p+t*x*p+u*n*d-t*l*d)*I,e[10]=(a*x*s-_*o*s+_*n*c-t*x*c-a*n*d+t*o*d)*I,e[11]=(u*o*s-a*l*s-u*n*c+t*l*c+a*n*p-t*o*p)*I,e[12]=C*I,e[13]=(u*x*i-_*l*i+_*n*f-t*x*f-u*n*m+t*l*m)*I,e[14]=(_*o*i-a*x*i-_*n*h+t*x*h+a*n*m-t*o*m)*I,e[15]=(a*l*i-u*o*i+u*n*h-t*l*h-a*n*f+t*o*f)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,h=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*h,c*h+i*o,0,c*o+i*h,u*o+n,u*h-i*a,0,c*h-i*o,u*h+i*a,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,h=t._w,c=s+s,u=a+a,l=o+o,f=s*c,p=s*u,_=s*l,x=a*u,m=a*l,d=o*l,T=h*c,w=h*u,E=h*l,C=n.x,R=n.y,I=n.z;return i[0]=(1-(x+d))*C,i[1]=(p+E)*C,i[2]=(_-w)*C,i[3]=0,i[4]=(p-E)*R,i[5]=(1-(f+d))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(_+w)*I,i[9]=(m-T)*I,i[10]=(1-(f+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jt.copy(this);const c=1/s,u=1/a,l=1/o;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=l,jt.elements[9]*=l,jt.elements[10]*=l,t.setFromRotationMatrix(jt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=on,h=!1){const c=this.elements,u=2*s/(t-e),l=2*s/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let _,x;if(h)_=s/(a-s),x=a*s/(a-s);else if(o===on)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ir)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=on,h=!1){const c=this.elements,u=2/(t-e),l=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,x;if(h)_=1/(a-s),x=a/(a-s);else if(o===on)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ir)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=l,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new F,jt=new at,rh=new F(0,0,0),sh=new F(1,1,1),yn=new F,or=new F,Nt=new F,co=new at,ho=new Zi;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],h=i[1],c=i[5],u=i[9],l=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-$e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ho.setFromEuler(this),this.setFromQuaternion(ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ah=0;const uo=new F,si=new Zi,fn=new at,lr=new F,Fi=new F,oh=new F,lh=new Zi,fo=new F(1,0,0),po=new F(0,1,0),mo=new F(0,0,1),go={type:"added"},ch={type:"removed"},ai={type:"childadded",child:null},rs={type:"childremoved",child:null};class _t extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new F,t=new cn,n=new Zi,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(fo,e)}rotateY(e){return this.rotateOnAxis(po,e)}rotateZ(e){return this.rotateOnAxis(mo,e)}translateOnAxis(e,t){return uo.copy(e).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fo,e)}translateY(e){return this.translateOnAxis(po,e)}translateZ(e){return this.translateOnAxis(mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Fi,lr,this.up):fn.lookAt(lr,Fi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(fn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(go),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),rs.child=e,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(go),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){const l=h[c];s(e.shapes,l)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(s(e.materials,this.material[h]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];i.animations.push(s(e.animations,h))}}if(t){const o=a(e.geometries),h=a(e.materials),c=a(e.textures),u=a(e.images),l=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const h=[];for(const c in o){const u=o[c];delete u.metadata,h.push(u)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new F(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new F,pn=new F,ss=new F,mn=new F,oi=new F,li=new F,_o=new F,as=new F,os=new F,ls=new F,cs=new pt,hs=new pt,us=new pt;class Wt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kt.subVectors(i,t),pn.subVectors(n,t),ss.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(pn),h=Kt.dot(ss),c=pn.dot(pn),u=pn.dot(ss),l=a*c-o*o;if(l===0)return s.set(0,0,0),null;const f=1/l,p=(c*h-o*u)*f,_=(a*u-o*h)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,i,s,a,o,h){return this.getBarycoord(e,t,n,i,mn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,mn.x),h.addScaledVector(a,mn.y),h.addScaledVector(o,mn.z),h)}static getInterpolatedAttribute(e,t,n,i,s,a){return cs.setScalar(0),hs.setScalar(0),us.setScalar(0),cs.fromBufferAttribute(e,t),hs.fromBufferAttribute(e,n),us.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(cs,s.x),a.addScaledVector(hs,s.y),a.addScaledVector(us,s.z),a}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),pn.subVectors(e,t),Kt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Kt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;oi.subVectors(i,n),li.subVectors(s,n),as.subVectors(e,n);const h=oi.dot(as),c=li.dot(as);if(h<=0&&c<=0)return t.copy(n);os.subVectors(e,i);const u=oi.dot(os),l=li.dot(os);if(u>=0&&l<=u)return t.copy(i);const f=h*l-u*c;if(f<=0&&h>=0&&u<=0)return a=h/(h-u),t.copy(n).addScaledVector(oi,a);ls.subVectors(e,s);const p=oi.dot(ls),_=li.dot(ls);if(_>=0&&p<=_)return t.copy(s);const x=p*c-h*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(li,o);const m=u*_-p*l;if(m<=0&&l-u>=0&&p-_>=0)return _o.subVectors(s,i),o=(l-u)/(l-u+(p-_)),t.copy(i).addScaledVector(_o,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},cr={h:0,s:0,l:0};function ds(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Yc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ds(a,s,e+1/3),this.g=ds(a,s,e),this.b=ds(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Tl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.workingToColorSpace(wt.copy(this),e),Math.round($e(wt.r*255,0,255))*65536+Math.round($e(wt.g*255,0,255))*256+Math.round($e(wt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,s=wt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let h,c;const u=(o+a)/2;if(o===a)h=0,c=0;else{const l=a-o;switch(c=u<=.5?l/(a+o):l/(2-a-o),a){case n:h=(i-s)/l+(i<s?6:0);break;case i:h=(s-n)/l+2;break;case s:h=(n-i)/l+4;break}h/=6}return e.h=h,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ot){Ke.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(cr);const n=Yr(En.h,cr.h,t),i=Yr(En.s,cr.s,t),s=Yr(En.l,cr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new qe;qe.NAMES=Tl;let hh=0;class Ci extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Mi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ps,this.blendDst=Ls,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ps&&(n.blendSrc=this.blendSrc),this.blendDst!==Ls&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const h=s[o];delete h.metadata,a.push(h)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wl extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new F,hr=new ze;let uh=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),e}}class Al extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rl extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dh=0;const Gt=new at,fs=new _t,ci=new F,Ft=new Un,Oi=new Un,yt=new F;class qt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yl(e)?Rl:Al)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return fs.lookAt(e),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ft.min,Oi.min),Ft.expandByPoint(yt),yt.addVectors(Ft.max,Oi.max),Ft.expandByPoint(yt)):(Ft.expandByPoint(Oi.min),Ft.expandByPoint(Oi.max))}Ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],h=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),h&&(ci.fromBufferAttribute(e,c),yt.add(ci)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],h=[];for(let O=0;O<n.count;O++)o[O]=new F,h[O]=new F;const c=new F,u=new F,l=new F,f=new ze,p=new ze,_=new ze,x=new F,m=new F;function d(O,S,M){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,S),l.fromBufferAttribute(n,M),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(c),l.sub(c),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(l,-p.y).multiplyScalar(D),m.copy(l).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[O].add(x),o[S].add(x),o[M].add(x),h[O].add(m),h[S].add(m),h[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,S=T.length;O<S;++O){const M=T[O],D=M.start,k=M.count;for(let V=D,X=D+k;V<X;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new F,E=new F,C=new F,R=new F;function I(O){C.fromBufferAttribute(i,O),R.copy(C);const S=o[O];w.copy(S),w.sub(C.multiplyScalar(C.dot(S))).normalize(),E.crossVectors(R,S);const D=E.dot(h[O])<0?-1:1;a.setXYZW(O,w.x,w.y,w.z,D)}for(let O=0,S=T.length;O<S;++O){const M=T[O],D=M.start,k=M.count;for(let V=D,X=D+k;V<X;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,a=new F,o=new F,h=new F,c=new F,u=new F,l=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),l.subVectors(i,s),u.cross(l),o.fromBufferAttribute(n,_),h.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),h.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,h.x,h.y,h.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),l.subVectors(i,s),u.cross(l),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,h){const c=o.array,u=o.itemSize,l=o.normalized,f=new c.constructor(h.length*u);let p=0,_=0;for(let x=0,m=h.length;x<m;x++){o.isInterleavedBufferAttribute?p=h[x]*o.data.stride+o.offset:p=h[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new $t(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const o in i){const h=i[o],c=e(h,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const h=[],c=s[o];for(let u=0,l=c.length;u<l;u++){const f=c[u],p=e(f,n);h.push(p)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const c=n[h];e.data.attributes[h]=c.toJSON(e.data)}const i={};let s=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],u=[];for(let l=0,f=c.length;l<f;l++){const p=c[l];u.push(p.toJSON(e.data))}u.length>0&&(i[h]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],l=s[c];for(let f=0,p=l.length;f<p;f++)u.push(l[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const l=a[c];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new at,kn=new bl,ur=new Ji,xo=new F,dr=new F,fr=new F,pr=new F,ps=new F,mr=new F,Mo=new F,gr=new F;class Xt extends _t{constructor(e=new qt,t=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){mr.set(0,0,0);for(let h=0,c=s.length;h<c;h++){const u=o[h],l=s[h];u!==0&&(ps.fromBufferAttribute(l,e),a?mr.addScaledVector(ps,u):mr.addScaledVector(ps.sub(t),u))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(ur.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ur,xo)===null||kn.origin.distanceToSquared(xo)>(e.far-e.near)**2))&&(vo.copy(s).invert(),kn.copy(e.ray).applyMatrix4(vo),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,l=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,C=w;E<C;E+=3){const R=o.getX(E),I=o.getX(E+1),O=o.getX(E+2);i=_r(this,d,e,n,c,u,l,R,I,O),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const T=o.getX(m),w=o.getX(m+1),E=o.getX(m+2);i=_r(this,a,e,n,c,u,l,T,w,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(h!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(h.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,C=w;E<C;E+=3){const R=E,I=E+1,O=E+2;i=_r(this,d,e,n,c,u,l,R,I,O),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(h.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const T=m,w=m+1,E=m+2;i=_r(this,a,e,n,c,u,l,T,w,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function fh(r,e,t,n,i,s,a,o){let h;if(e.side===Dt?h=n.intersectTriangle(a,s,i,!0,o):h=n.intersectTriangle(i,s,a,e.side===Ln,o),h===null)return null;gr.copy(o),gr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:r}}function _r(r,e,t,n,i,s,a,o,h,c){r.getVertexPosition(o,dr),r.getVertexPosition(h,fr),r.getVertexPosition(c,pr);const u=fh(r,e,t,n,dr,fr,pr,Mo);if(u){const l=new F;Wt.getBarycoord(Mo,dr,fr,pr,l),i&&(u.uv=Wt.getInterpolatedAttribute(i,o,h,c,l,new ze)),s&&(u.uv1=Wt.getInterpolatedAttribute(s,o,h,c,l,new ze)),a&&(u.normal=Wt.getInterpolatedAttribute(a,o,h,c,l,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:h,c,normal:new F,materialIndex:0};Wt.getNormal(dr,fr,pr,f.normal),u.face=f,u.barycoord=l}return u}class Pi extends qt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const h=[],c=[],u=[],l=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(h),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(l,2));function _(x,m,d,T,w,E,C,R,I,O,S){const M=E/I,D=C/O,k=E/2,V=C/2,X=R/2,j=I+1,$=O+1;let ae=0,G=0;const he=new F;for(let pe=0;pe<$;pe++){const Ae=pe*D-V;for(let We=0;We<j;We++){const rt=We*M-k;he[x]=rt*T,he[m]=Ae*w,he[d]=X,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[d]=R>0?1:-1,u.push(he.x,he.y,he.z),l.push(We/I),l.push(1-pe/O),ae+=1}}for(let pe=0;pe<O;pe++)for(let Ae=0;Ae<I;Ae++){const We=f+Ae+j*pe,rt=f+Ae+j*(pe+1),lt=f+(Ae+1)+j*(pe+1),Ze=f+(Ae+1)+j*pe;h.push(We,rt,Ze),h.push(rt,lt,Ze),G+=6}o.addGroup(p,G,S),p+=G,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const n=wi(r[t]);for(const i in n)e[i]=n[i]}return e}function ph(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Cl(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const mh={clone:wi,merge:Pt};var gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new F,So=new ze,yo=new ze;class Zt extends Pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,So,yo),t.subVectors(yo,So)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/h,t-=a.offsetY*n/c,i*=a.width/h,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class vh extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(hi,ui,e,t);i.layers=this.layers,this.add(i);const s=new Zt(hi,ui,e,t);s.layers=this.layers,this.add(s);const a=new Zt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Zt(hi,ui,e,t);o.layers=this.layers,this.add(o);const h=new Zt(hi,ui,e,t);h.layers=this.layers,this.add(h);const c=new Zt(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,h]=t;for(const c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,h,c,u]=this.children,l=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,h),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(l,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ll extends At{constructor(e=[],t=Ei,n,i,s,a,o,h,c,u){super(e,t,n,i,s,a,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xh extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ll(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Rn});s.uniforms.tEquirect.value=t;const a=new Xt(i,s),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=sn),new vh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class vr extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mh={type:"move"};class ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],f=u.position.distanceTo(l.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mh)))}return o!==null&&(o.visible=i!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Eo extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_a,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new F;class Nr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dl extends Ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let di;const Bi=new F,fi=new F,pi=new F,mi=new ze,ki=new ze,Il=new at,xr=new F,zi=new F,Mr=new F,bo=new ze,gs=new ze,To=new ze;class yh extends _t{constructor(e=new Dl){if(super(),this.isSprite=!0,this.type="Sprite",di===void 0){di=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sh(t,5);di.setIndex([0,1,2,0,2,3]),di.setAttribute("position",new Nr(n,3,0,!1)),di.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=di,this.material=e,this.center=new ze(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),Il.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-pi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Sr(xr.set(-.5,-.5,0),pi,a,fi,i,s),Sr(zi.set(.5,-.5,0),pi,a,fi,i,s),Sr(Mr.set(.5,.5,0),pi,a,fi,i,s),bo.set(0,0),gs.set(1,0),To.set(1,1);let o=e.ray.intersectTriangle(xr,zi,Mr,!1,Bi);if(o===null&&(Sr(zi.set(-.5,.5,0),pi,a,fi,i,s),gs.set(0,1),o=e.ray.intersectTriangle(xr,Mr,zi,!1,Bi),o===null))return;const h=e.ray.origin.distanceTo(Bi);h<e.near||h>e.far||t.push({distance:h,point:Bi.clone(),uv:Wt.getInterpolation(Bi,xr,zi,Mr,bo,gs,To,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sr(r,e,t,n,i,s){mi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ki.x=s*mi.x-i*mi.y,ki.y=i*mi.x+s*mi.y):ki.copy(mi),r.copy(e),r.x+=ki.x,r.y+=ki.y,r.applyMatrix4(Il)}class Eh extends At{constructor(e=null,t=1,n=1,i,s,a,o,h,c=kt,u=kt,l,f){super(null,a,o,h,c,u,i,s,l,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new at,Ao=new at,yr=[],Ro=new Un,bh=new at,Hi=new Xt,Vi=new Ji;class Th extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Ro.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(Ro)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Vi.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gi),Ao.multiplyMatrices(n,gi),Hi.matrixWorld=Ao,Hi.raycast(e,yr);for(let a=0,o=yr.length;a<o;a++){const h=yr[a];h.instanceId=s,h.object=this,t.push(h)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eh(new Float32Array(i*this.count),i,this.count,wa,an));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,h=i*e;s[h]=o,s.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _s=new F,wh=new F,Ah=new ke;class Tn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_s.subVectors(n,t).cross(wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ah.getNormalMatrix(e),i=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Ji,Rh=new ze(.5,.5),Er=new F;class Da{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],h=s[2],c=s[3],u=s[4],l=s[5],f=s[6],p=s[7],_=s[8],x=s[9],m=s[10],d=s[11],T=s[12],w=s[13],E=s[14],C=s[15];if(i[0].setComponents(c-a,p-u,d-_,C-T).normalize(),i[1].setComponents(c+a,p+u,d+_,C+T).normalize(),i[2].setComponents(c+o,p+l,d+x,C+w).normalize(),i[3].setComponents(c-o,p-l,d-x,C-w).normalize(),n)i[4].setComponents(h,f,m,E).normalize(),i[5].setComponents(c-h,p-f,d-m,C-E).normalize();else if(i[4].setComponents(c-h,p-f,d-m,C-E).normalize(),t===on)i[5].setComponents(c+h,p+f,d+m,C+E).normalize();else if(t===Ir)i[5].setComponents(h,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=Rh.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Er.x=i.normal.x>0?e.max.x:e.min.x,Er.y=i.normal.y>0?e.max.y:e.min.y,Er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ch extends At{constructor(e,t,n,i,s,a,o,h,c){super(e,t,n,i,s,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ul extends At{constructor(e,t,n=jn,i,s,a,o=kt,h=kt,c,u=qi,l=1){if(u!==qi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:l};super(f,i,s,a,o,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ia extends qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],h=[],c=new F,u=new ze;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let l=0,f=3;l<=t;l++,f+=3){const p=n+l/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,h.push(u.x,u.y)}for(let l=1;l<=t;l++)s.push(l,l+1,0);this.setIndex(s),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kr extends qt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:h};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],l=[],f=[],p=[];let _=0;const x=[],m=n/2;let d=0;T(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function T(){const E=new F,C=new F;let R=0;const I=(t-e)/n;for(let O=0;O<=s;O++){const S=[],M=O/s,D=M*(t-e)+e;for(let k=0;k<=i;k++){const V=k/i,X=V*h+o,j=Math.sin(X),$=Math.cos(X);C.x=D*j,C.y=-M*n+m,C.z=D*$,l.push(C.x,C.y,C.z),E.set(j,I,$).normalize(),f.push(E.x,E.y,E.z),p.push(V,1-M),S.push(_++)}x.push(S)}for(let O=0;O<i;O++)for(let S=0;S<s;S++){const M=x[S][O],D=x[S+1][O],k=x[S+1][O+1],V=x[S][O+1];(e>0||S!==0)&&(u.push(M,D,V),R+=3),(t>0||S!==s-1)&&(u.push(D,k,V),R+=3)}c.addGroup(d,R,0),d+=R}function w(E){const C=_,R=new ze,I=new F;let O=0;const S=E===!0?e:t,M=E===!0?1:-1;for(let k=1;k<=i;k++)l.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),_++;const D=_;for(let k=0;k<=i;k++){const X=k/i*h+o,j=Math.cos(X),$=Math.sin(X);I.x=S*$,I.y=m*M,I.z=S*j,l.push(I.x,I.y,I.z),f.push(0,M,0),R.x=j*.5+.5,R.y=$*.5*M+.5,p.push(R.x,R.y),_++}for(let k=0;k<i;k++){const V=C+k,X=D+k;E===!0?u.push(X,X+1,V):u.push(X+1,X,V),O+=3}c.addGroup(d,O,E===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ua extends kr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ua(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zr extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),h=Math.floor(i),c=o+1,u=h+1,l=e/o,f=t/h,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const T=d*f-a;for(let w=0;w<c;w++){const E=w*l-s;_.push(E,-T,0),x.push(0,0,1),m.push(w/o),m.push(1-d/h)}}for(let d=0;d<h;d++)for(let T=0;T<o;T++){const w=T+c*d,E=T+c*(d+1),C=T+1+c*(d+1),R=T+1+c*d;p.push(w,E,R),p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Na extends qt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(a+o,Math.PI);let c=0;const u=[],l=new F,f=new F,p=[],_=[],x=[],m=[];for(let d=0;d<=n;d++){const T=[],w=d/n;let E=0;d===0&&a===0?E=.5/t:d===n&&h===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const R=C/t;l.x=-e*Math.cos(i+R*s)*Math.sin(a+w*o),l.y=e*Math.cos(a+w*o),l.z=e*Math.sin(i+R*s)*Math.sin(a+w*o),_.push(l.x,l.y,l.z),f.copy(l).normalize(),x.push(f.x,f.y,f.z),m.push(R+E,1-w),T.push(c++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){const w=u[d][T+1],E=u[d][T],C=u[d+1][T],R=u[d+1][T+1];(d!==0||a>0)&&p.push(w,E,R),(d!==n-1||h<Math.PI)&&p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fa extends qt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],h=[],c=[],u=new F,l=new F,f=new F;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const x=_/i*s,m=p/n*Math.PI*2;l.x=(e+t*Math.cos(m))*Math.cos(x),l.y=(e+t*Math.cos(m))*Math.sin(x),l.z=t*Math.sin(m),o.push(l.x,l.y,l.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(l,u).normalize(),h.push(f.x,f.y,f.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const x=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,d=(i+1)*(p-1)+_,T=(i+1)*p+_;a.push(x,m,T),a.push(m,d,T)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Co extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ph extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lh extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Oa extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Dh extends Oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vs=new at,Po=new F,Lo=new F;class Ih{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Po.setFromMatrixPosition(e.matrixWorld),t.position.copy(Po),Lo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lo),t.updateMatrixWorld(),vs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fr extends Pl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uh extends Ih{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Do extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nh extends Oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fh extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Io=new at;class Oh{constructor(e,t,n=0,i=1/0){this.ray=new bl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Io.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Io),this}intersectObject(e,t=!0,n=[]){return xa(e,this,n,t),n.sort(Uo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)xa(e[i],this,n,t);return n.sort(Uo),n}}function Uo(r,e){return r.distance-e.distance}function xa(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)xa(s[a],e,t,!0)}}function No(r,e,t,n){const i=Bh(n);switch(t){case _l:return r*e;case wa:return r*e/i.components*i.byteLength;case Aa:return r*e/i.components*i.byteLength;case xl:return r*e*2/i.components*i.byteLength;case Ra:return r*e*2/i.components*i.byteLength;case vl:return r*e*3/i.components*i.byteLength;case Jt:return r*e*4/i.components*i.byteLength;case Ca:return r*e*4/i.components*i.byteLength;case Ar:case Rr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Pr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ws:case $s:return Math.max(r,16)*Math.max(e,8)/4;case Gs:case Xs:return Math.max(r,8)*Math.max(e,8)/2;case qs:case Ys:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case js:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Js:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ha:case ua:case da:return Math.ceil(r/4)*Math.ceil(e/4)*16;case fa:case pa:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ma:case ga:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bh(r){switch(r){case ln:case fl:return{byteLength:1,components:1};case Xi:case pl:case Ki:return{byteLength:2,components:1};case ba:case Ta:return{byteLength:2,components:4};case jn:case Ea:case an:return{byteLength:4,components:1};case ml:case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kh(r){const e=new WeakMap;function t(o,h){const c=o.array,u=o.usage,l=c.byteLength,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,h,c){const u=h.array,l=h.updateRanges;if(r.bindBuffer(c,o),l.length===0)r.bufferSubData(c,0,u);else{l.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<l.length;p++){const _=l[f],x=l[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,l[f]=x)}l.length=f+1;for(let p=0,_=l.length;p<_;p++){const x=l[p];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);h&&(r.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:i,remove:s,update:a}}var zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hh=`#ifdef USE_ALPHAHASH
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
#endif`,Vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
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
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
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
#endif`,jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qh=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cu=`#define PI 3.141592653589793
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
} // validated`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
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
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",_u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
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
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
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
#endif`,Bu=`struct PhysicalMaterial {
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
}`,ku=`
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ju=`#if defined( USE_POINTS_UV )
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
#endif`,Ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
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
#endif`,nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ld=`#ifdef USE_NORMALMAP
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
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bd=`float getShadowMask() {
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
}`,Td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`#include <common>
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
}`,$d=`#if DEPTH_PACKING == 3200
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
}`,qd=`#define DISTANCE
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
}`,Yd=`#define DISTANCE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#define LAMBERT
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
}`,nf=`#define LAMBERT
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
}`,rf=`#define MATCAP
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
}`,sf=`#define MATCAP
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
}`,af=`#define NORMAL
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
}`,of=`#define NORMAL
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
}`,lf=`#define PHONG
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
}`,cf=`#define PHONG
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
}`,hf=`#define STANDARD
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
}`,uf=`#define STANDARD
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
}`,df=`#define TOON
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
}`,ff=`#define TOON
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
}`,pf=`uniform float size;
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
}`,mf=`uniform vec3 diffuse;
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
}`,gf=`#include <common>
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
}`,_f=`uniform vec3 color;
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
}`,vf=`uniform float rotation;
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
}`,xf=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:zh,alphahash_pars_fragment:Hh,alphamap_fragment:Vh,alphamap_pars_fragment:Gh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:$h,aomap_pars_fragment:qh,batching_pars_vertex:Yh,batching_vertex:jh,begin_vertex:Kh,beginnormal_vertex:Zh,bsdfs:Jh,iridescence_fragment:Qh,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:ru,color_fragment:su,color_pars_fragment:au,color_pars_vertex:ou,color_vertex:lu,common:cu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:uu,displacementmap_pars_vertex:du,displacementmap_vertex:fu,emissivemap_fragment:pu,emissivemap_pars_fragment:mu,colorspace_fragment:gu,colorspace_pars_fragment:_u,envmap_fragment:vu,envmap_common_pars_fragment:xu,envmap_pars_fragment:Mu,envmap_pars_vertex:Su,envmap_physical_pars_fragment:Du,envmap_vertex:yu,fog_vertex:Eu,fog_pars_vertex:bu,fog_fragment:Tu,fog_pars_fragment:wu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:Ru,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Pu,lights_pars_begin:Lu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Uu,lights_phong_fragment:Nu,lights_phong_pars_fragment:Fu,lights_physical_fragment:Ou,lights_physical_pars_fragment:Bu,lights_fragment_begin:ku,lights_fragment_maps:zu,lights_fragment_end:Hu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Gu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:$u,map_pars_fragment:qu,map_particle_fragment:Yu,map_particle_pars_fragment:ju,metalnessmap_fragment:Ku,metalnessmap_pars_fragment:Zu,morphinstance_vertex:Ju,morphcolor_vertex:Qu,morphnormal_vertex:ed,morphtarget_pars_vertex:td,morphtarget_vertex:nd,normal_fragment_begin:id,normal_fragment_maps:rd,normal_pars_fragment:sd,normal_pars_vertex:ad,normal_vertex:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:ud,iridescence_pars_fragment:dd,opaque_fragment:fd,packing:pd,premultiplied_alpha_fragment:md,project_vertex:gd,dithering_fragment:_d,dithering_pars_fragment:vd,roughnessmap_fragment:xd,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:yd,shadowmap_vertex:Ed,shadowmask_pars_fragment:bd,skinbase_vertex:Td,skinning_pars_vertex:wd,skinning_vertex:Ad,skinnormal_vertex:Rd,specularmap_fragment:Cd,specularmap_pars_fragment:Pd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Dd,transmission_fragment:Id,transmission_pars_fragment:Ud,uv_pars_fragment:Nd,uv_pars_vertex:Fd,uv_vertex:Od,worldpos_vertex:Bd,background_vert:kd,background_frag:zd,backgroundCube_vert:Hd,backgroundCube_frag:Vd,cube_vert:Gd,cube_frag:Wd,depth_vert:Xd,depth_frag:$d,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:jd,equirect_frag:Kd,linedashed_vert:Zd,linedashed_frag:Jd,meshbasic_vert:Qd,meshbasic_frag:ef,meshlambert_vert:tf,meshlambert_frag:nf,meshmatcap_vert:rf,meshmatcap_frag:sf,meshnormal_vert:af,meshnormal_frag:of,meshphong_vert:lf,meshphong_frag:cf,meshphysical_vert:hf,meshphysical_frag:uf,meshtoon_vert:df,meshtoon_frag:ff,points_vert:pf,points_frag:mf,shadow_vert:gf,shadow_frag:_f,sprite_vert:vf,sprite_frag:xf},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},tn={basic:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Pt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Pt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Pt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Pt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Pt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};tn.physical={uniforms:Pt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const br={r:0,b:0,g:0},Hn=new cn,Mf=new at;function Sf(r,e,t,n,i,s,a){const o=new qe(0);let h=s===!0?0:1,c,u,l=null,f=0,p=null;function _(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function x(w){let E=!1;const C=_(w);C===null?d(o,h):C&&C.isColor&&(d(C,1),E=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(w,E){const C=_(E);C&&(C.isCubeTexture||C.mapping===Br)?(u===void 0&&(u=new Xt(new Pi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:wi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hn.copy(E.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mf.makeRotationFromEuler(Hn)),u.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,(l!==C||f!==C.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,l=C,f=C.version,p=r.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Xt(new zr(2,2),new In({name:"BackgroundMaterial",uniforms:wi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(l!==C||f!==C.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,l=C,f=C.version,p=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,E){w.getRGB(br,Cl(r)),n.buffers.color.setClear(br.r,br.g,br.b,E,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),h=E,d(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,d(o,h)},render:x,addToRenderList:m,dispose:T}}function yf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(M,D,k,V,X){let j=!1;const $=l(V,k,D);s!==$&&(s=$,c(s.object)),j=p(M,V,k,X),j&&_(M,V,k,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(M,D,k,V),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function l(M,D,k){const V=k.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let $=j[V];return $===void 0&&($=f(h()),j[V]=$),$}function f(M){const D=[],k=[],V=[];for(let X=0;X<t;X++)D[X]=0,k[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,D,k,V){const X=s.attributes,j=D.attributes;let $=0;const ae=k.getAttributes();for(const G in ae)if(ae[G].location>=0){const pe=X[G];let Ae=j[G];if(Ae===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),pe===void 0||pe.attribute!==Ae||Ae&&pe.data!==Ae.data)return!0;$++}return s.attributesNum!==$||s.index!==V}function _(M,D,k,V){const X={},j=D.attributes;let $=0;const ae=k.getAttributes();for(const G in ae)if(ae[G].location>=0){let pe=j[G];pe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const Ae={};Ae.attribute=pe,pe&&pe.data&&(Ae.data=pe.data),X[G]=Ae,$++}s.attributes=X,s.attributesNum=$,s.index=V}function x(){const M=s.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const k=s.newAttributes,V=s.enabledAttributes,X=s.attributeDivisors;k[M]=1,V[M]===0&&(r.enableVertexAttribArray(M),V[M]=1),X[M]!==D&&(r.vertexAttribDivisor(M,D),X[M]=D)}function T(){const M=s.newAttributes,D=s.enabledAttributes;for(let k=0,V=D.length;k<V;k++)D[k]!==M[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function w(M,D,k,V,X,j,$){$===!0?r.vertexAttribIPointer(M,D,k,X,j):r.vertexAttribPointer(M,D,k,V,X,j)}function E(M,D,k,V){x();const X=V.attributes,j=k.getAttributes(),$=D.defaultAttributeValues;for(const ae in j){const G=j[ae];if(G.location>=0){let he=X[ae];if(he===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const pe=he.normalized,Ae=he.itemSize,We=e.get(he);if(We===void 0)continue;const rt=We.buffer,lt=We.type,Ze=We.bytesPerElement,K=lt===r.INT||lt===r.UNSIGNED_INT||he.gpuType===Ea;if(he.isInterleavedBufferAttribute){const Q=he.data,_e=Q.stride,Ne=he.offset;if(Q.isInstancedInterleavedBuffer){for(let we=0;we<G.locationSize;we++)d(G.location+we,Q.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let we=0;we<G.locationSize;we++)m(G.location+we);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let we=0;we<G.locationSize;we++)w(G.location+we,Ae/G.locationSize,lt,pe,_e*Ze,(Ne+Ae/G.locationSize*we)*Ze,K)}else{if(he.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)d(G.location+Q,he.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let Q=0;Q<G.locationSize;Q++)w(G.location+Q,Ae/G.locationSize,lt,pe,Ae*Ze,Ae/G.locationSize*Q*Ze,K)}}else if($!==void 0){const pe=$[ae];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(G.location,pe);break;case 3:r.vertexAttrib3fv(G.location,pe);break;case 4:r.vertexAttrib4fv(G.location,pe);break;default:r.vertexAttrib1fv(G.location,pe)}}}}T()}function C(){O();for(const M in n){const D=n[M];for(const k in D){const V=D[k];for(const X in V)u(V[X].object),delete V[X];delete D[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const k in D){const V=D[k];for(const X in V)u(V[X].object),delete V[X];delete D[k]}delete n[M.id]}function I(M){for(const D in n){const k=n[D];if(k[M.id]===void 0)continue;const V=k[M.id];for(const X in V)u(V[X].object),delete V[X];delete k[M.id]}}function O(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:O,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Ef(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,l){l!==0&&(r.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function o(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let p=0;for(let _=0;_<l;_++)p+=u[_];t.update(p,n,1)}function h(c,u,l,f){if(l===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,l);let _=0;for(let x=0;x<l;x++)_+=u[x]*f[x];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function bf(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(I){return!(I!==Jt&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const O=I===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ln&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==an&&!O)}function h(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=h(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const l=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:l,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:C,maxSamples:R}}function Tf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Tn,o=new ke,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const p=l.length!==0||f||n!==0||i;return i=f,n=l.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,f){t=u(l,f,0)},this.setState=function(l,f,p){const _=l.clippingPlanes,x=l.clipIntersection,m=l.clipShadows,d=r.get(l);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,w=T*4;let E=d.clippingState||null;h.value=E,E=u(_,f,w,p);for(let C=0;C!==w;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(l,f,p,_){const x=l!==null?l.length:0;let m=null;if(x!==0){if(m=h.value,_!==!0||m===null){const d=p+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,E=p;w!==x;++w,E+=4)a.copy(l[w]).applyMatrix4(T,o),a.normal.toArray(m,E),m[E+3]=a.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function wf(r){let e=new WeakMap;function t(a,o){return o===ks?a.mapping=Ei:o===zs&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ks||o===zs)if(e.has(a)){const h=e.get(a).texture;return t(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const c=new xh(h.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const h=e.get(o);h!==void 0&&(e.delete(o),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const xi=4,Fo=[.125,.215,.35,.446,.526,.582],$n=20,xs=new Fr,Oo=new qe;let Ms=null,Ss=0,ys=0,Es=!1;const Gn=(1+Math.sqrt(5))/2,_i=1/Gn,Bo=[new F(-Gn,_i,0),new F(Gn,_i,0),new F(-_i,0,Gn),new F(_i,0,Gn),new F(0,Gn,-_i),new F(0,Gn,_i),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Af=new F;class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Af}=s;Ms=this._renderer.getRenderTarget(),Ss=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,i,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ms,Ss,ys),this._renderer.xr.enabled=Es,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ms=this._renderer.getRenderTarget(),Ss=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ki,format:Jt,colorSpace:Ti,depthBuffer:!1},i=zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rf(s)),this._blurMaterial=Cf(s,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,i,s){const h=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,p=l.toneMapping;l.getClearColor(Oo),l.toneMapping=Cn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));const x=new wl({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new Xt(new Pi,x);let d=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,d=!0):(x.color.copy(Oo),d=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(h.up.set(0,c[w],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+u[w],s.y,s.z)):E===1?(h.up.set(0,0,c[w]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+u[w],s.z)):(h.up.set(0,c[w],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+u[w]));const C=this._cubeSize;Tr(i,E*C,w>2?C:0,C,C),l.setRenderTarget(i),d&&l.render(m,h),l.render(e,h)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=p,l.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const h=this._cubeSize;Tr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(a,xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bo[(i-s-1)%Bo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new Xt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const d=[];let T=0;for(let I=0;I<$n;++I){const O=I/x,S=Math.exp(-O*O/2);d.push(S),I===0?T+=S:I<m&&(T+=2*S)}for(let I=0;I<d.length;I++)d[I]=d[I]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-n;const E=this._sizeLods[i],C=3*E*(i>w-xi?i-w+xi:0),R=4*(this._cubeSize-E);Tr(t,C,R,3*E,2*E),h.setRenderTarget(t),h.render(l,xs)}}function Rf(r){const e=[],t=[],n=[];let i=r;const s=r-xi+1+Fo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let h=1/o;a>r-xi?h=Fo[a-r+xi-1]:a===0&&(h=0),n.push(h);const c=1/(o-2),u=-c,l=1+c,f=[u,u,l,u,l,l,u,u,l,l,u,l],p=6,_=6,x=3,m=2,d=1,T=new Float32Array(x*_*p),w=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,O=R>2?0:-1,S=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];T.set(S,x*_*R),w.set(f,m*_*R);const M=[R,R,R,R,R,R];E.set(M,d*_*R)}const C=new qt;C.setAttribute("position",new $t(T,x)),C.setAttribute("uv",new $t(w,m)),C.setAttribute("faceIndex",new $t(E,d)),e.push(C),i>xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zo(r,e,t){const n=new Dn(r,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Cf(r,e,t){const n=new Float32Array($n),i=new F(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ho(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vo(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Pf(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const h=o.mapping,c=h===ks||h===zs,u=h===Ei||h===bi;if(c||u){let l=e.get(o);const f=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ko(r)),l=c?t.fromEquirectangular(o,l):t.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),l.texture;if(l!==void 0)return l.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new ko(r)),l=c?t.fromEquirectangular(o):t.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),o.addEventListener("dispose",s),l.texture):null}}}return o}function i(o){let h=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&h++;return h===c}function s(o){const h=o.target;h.removeEventListener("dispose",s);const c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Df(r,e,t,n){const i={},s=new WeakMap;function a(l){const f=l.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(l,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function h(l){const f=l.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER)}function c(l){const f=[],p=l.index,_=l.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let w=0,E=T.length;w<E;w+=3){const C=T[w+0],R=T[w+1],I=T[w+2];f.push(C,R,R,I,I,C)}}else if(_!==void 0){const T=_.array;x=_.version;for(let w=0,E=T.length/3-1;w<E;w+=3){const C=w+0,R=w+1,I=w+2;f.push(C,R,R,I,I,C)}}else return;const m=new(yl(f)?Rl:Al)(f,1);m.version=x;const d=s.get(l);d&&e.remove(d),s.set(l,m)}function u(l){const f=s.get(l);if(f){const p=l.index;p!==null&&f.version<p.version&&c(l)}else c(l);return s.get(l)}return{get:o,update:h,getWireframeAttribute:u}}function If(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function h(f,p){r.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,f*a,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,n,1)}function l(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,_);let d=0;for(let T=0;T<_;T++)d+=p[T]*x[T];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function Uf(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Nf(r,e,t){const n=new WeakMap,i=new pt;function s(a,o,h){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==l){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),_===!0&&(w=2),x===!0&&(w=3);let E=o.attributes.position.count*w,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*C*4*l),I=new El(R,E,C,l);I.type=an,I.needsUpdate=!0;const O=w*4;for(let M=0;M<l;M++){const D=m[M],k=d[M],V=T[M],X=E*C*4*M;for(let j=0;j<D.count;j++){const $=j*O;p===!0&&(i.fromBufferAttribute(D,j),R[X+$+0]=i.x,R[X+$+1]=i.y,R[X+$+2]=i.z,R[X+$+3]=0),_===!0&&(i.fromBufferAttribute(k,j),R[X+$+4]=i.x,R[X+$+5]=i.y,R[X+$+6]=i.z,R[X+$+7]=0),x===!0&&(i.fromBufferAttribute(V,j),R[X+$+8]=i.x,R[X+$+9]=i.y,R[X+$+10]=i.z,R[X+$+11]=V.itemSize===4?i.w:1)}}f={count:l,texture:I,size:new ze(E,C)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",_),h.getUniforms().setValue(r,"morphTargetInfluences",c)}h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Ff(r,e,t,n){let i=new WeakMap;function s(h){const c=n.render.frame,u=h.geometry,l=e.get(h,u);if(i.get(l)!==c&&(e.update(l),i.set(l,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),i.get(h)!==c&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),i.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return l}function a(){i=new WeakMap}function o(h){const c=h.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ol=new At,Go=new Ul(1,1),Bl=new El,kl=new nh,zl=new Ll,Wo=[],Xo=[],$o=new Float32Array(16),qo=new Float32Array(9),Yo=new Float32Array(4);function Li(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wo[i];if(s===void 0&&(s=new Float32Array(i),Wo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Hr(r,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Of(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function kf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function zf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function Hf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Yo.set(n),r.uniformMatrix2fv(this.addr,!1,Yo),Mt(t,n)}}function Vf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;qo.set(n),r.uniformMatrix3fv(this.addr,!1,qo),Mt(t,n)}}function Gf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;$o.set(n),r.uniformMatrix4fv(this.addr,!1,$o),Mt(t,n)}}function Wf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function $f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function qf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function Yf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function Kf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function Zf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function Jf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Go.compareFunction=Sl,s=Go):s=Ol,t.setTexture2D(e||s,i)}function Qf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kl,i)}function ep(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zl,i)}function tp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bl,i)}function np(r){switch(r){case 5126:return Of;case 35664:return Bf;case 35665:return kf;case 35666:return zf;case 35674:return Hf;case 35675:return Vf;case 35676:return Gf;case 5124:case 35670:return Wf;case 35667:case 35671:return Xf;case 35668:case 35672:return $f;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return jf;case 36295:return Kf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}function ip(r,e){r.uniform1fv(this.addr,e)}function rp(r,e){const t=Li(e,this.size,2);r.uniform2fv(this.addr,t)}function sp(r,e){const t=Li(e,this.size,3);r.uniform3fv(this.addr,t)}function ap(r,e){const t=Li(e,this.size,4);r.uniform4fv(this.addr,t)}function op(r,e){const t=Li(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lp(r,e){const t=Li(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cp(r,e){const t=Li(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hp(r,e){r.uniform1iv(this.addr,e)}function up(r,e){r.uniform2iv(this.addr,e)}function dp(r,e){r.uniform3iv(this.addr,e)}function fp(r,e){r.uniform4iv(this.addr,e)}function pp(r,e){r.uniform1uiv(this.addr,e)}function mp(r,e){r.uniform2uiv(this.addr,e)}function gp(r,e){r.uniform3uiv(this.addr,e)}function _p(r,e){r.uniform4uiv(this.addr,e)}function vp(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ol,s[a])}function xp(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||kl,s[a])}function Mp(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||zl,s[a])}function Sp(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bl,s[a])}function yp(r){switch(r){case 5126:return ip;case 35664:return rp;case 35665:return sp;case 35666:return ap;case 35674:return op;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return fp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Sp}}class Ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=np(t.type)}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yp(t.type)}}class Tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const bs=/(\w+)(\])?(\[|\.)?/g;function jo(r,e){r.seq.push(e),r.map[e.id]=e}function wp(r,e,t){const n=r.name,i=n.length;for(bs.lastIndex=0;;){const s=bs.exec(n),a=bs.lastIndex;let o=s[1];const h=s[2]==="]",c=s[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===i){jo(t,c===void 0?new Ep(o,r,e):new bp(o,r,e));break}else{let l=t.map[o];l===void 0&&(l=new Tp(o),jo(t,l)),t=l}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);wp(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ko(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ap=37297;let Rp=0;function Cp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zo=new ke;function Pp(r){Ke._getMatrix(Zo,Ke.workingColorSpace,r);const e=`mat3( ${Zo.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case Dr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Jo(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Cp(r.getShaderSource(e),o)}else return s}function Lp(r,e){const t=Pp(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dp(r,e){let t;switch(e){case Cc:t="Linear";break;case Pc:t="Reinhard";break;case Lc:t="Cineon";break;case Dc:t="ACESFilmic";break;case Uc:t="AgX";break;case Nc:t="Neutral";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new F;function Ip(){Ke.getLuminanceCoefficients(wr);const r=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Up(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Np(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fp(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Wi(r){return r!==""}function Qo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(r){return r.replace(Op,kp)}const Bp=new Map;function kp(r,e){let t=Ve[e];if(t===void 0){const n=Bp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ma(t)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(r){return r.replace(zp,Hp)}function Hp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case bi:e="ENVMAP_TYPE_CUBE";break;case Br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ya:e="ENVMAP_BLENDING_MULTIPLY";break;case Ac:e="ENVMAP_BLENDING_MIX";break;case Rc:e="ENVMAP_BLENDING_ADD";break}return e}function $p(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qp(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const h=Vp(t),c=Gp(t),u=Wp(t),l=Xp(t),f=$p(t),p=Up(t),_=Np(s),x=i.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),d.length>0&&(d+=`
`)):(m=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),d=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Lp("linearToOutputTexel",t.outputColorSpace),Ip(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),a=Ma(a),a=Qo(a,t),a=el(a,t),o=Ma(o),o=Qo(o,t),o=el(o,t),a=tl(a),o=tl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=T+m+a,E=T+d+o,C=Ko(i,i.VERTEX_SHADER,w),R=Ko(i,i.FRAGMENT_SHADER,E);i.attachShader(x,C),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(D){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(x)||"",V=i.getShaderInfoLog(C)||"",X=i.getShaderInfoLog(R)||"",j=k.trim(),$=V.trim(),ae=X.trim();let G=!0,he=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,C,R);else{const pe=Jo(i,C,"vertex"),Ae=Jo(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+pe+`
`+Ae)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||ae==="")&&(he=!1);he&&(D.diagnostics={runnable:G,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:ae,prefix:d}})}i.deleteShader(C),i.deleteShader(R),O=new Lr(i,x),S=Fp(i,x)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Ap)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let Yp=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kp(e),t.set(e,n)),n}}class Kp{constructor(e){this.id=Yp++,this.code=e,this.usedTimes=0}}function Zp(r,e,t,n,i,s,a){const o=new La,h=new jp,c=new Set,u=[],l=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,k,V){const X=k.fog,j=V.geometry,$=S.isMeshStandardMaterial?k.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),G=ae&&ae.mapping===Br?ae.image.height:null,he=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ae=pe!==void 0?pe.length:0;let We=0;j.morphAttributes.position!==void 0&&(We=1),j.morphAttributes.normal!==void 0&&(We=2),j.morphAttributes.color!==void 0&&(We=3);let rt,lt,Ze,K;if(he){const Je=tn[he];rt=Je.vertexShader,lt=Je.fragmentShader}else rt=S.vertexShader,lt=S.fragmentShader,h.update(S),Ze=h.getVertexShaderID(S),K=h.getFragmentShaderID(S);const Q=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ne=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,Ye=!!S.map,bt=!!S.matcap,A=!!ae,ct=!!S.aoMap,Oe=!!S.lightMap,Ie=!!S.bumpMap,Me=!!S.normalMap,ht=!!S.displacementMap,Se=!!S.emissiveMap,He=!!S.metalnessMap,St=!!S.roughnessMap,mt=S.anisotropy>0,b=S.clearcoat>0,g=S.dispersion>0,B=S.iridescence>0,Y=S.sheen>0,J=S.transmission>0,W=mt&&!!S.anisotropyMap,Te=b&&!!S.clearcoatMap,oe=b&&!!S.clearcoatNormalMap,ye=b&&!!S.clearcoatRoughnessMap,Ee=B&&!!S.iridescenceMap,ie=B&&!!S.iridescenceThicknessMap,fe=Y&&!!S.sheenColorMap,De=Y&&!!S.sheenRoughnessMap,be=!!S.specularMap,ue=!!S.specularColorMap,Be=!!S.specularIntensityMap,L=J&&!!S.transmissionMap,re=J&&!!S.thicknessMap,le=!!S.gradientMap,ge=!!S.alphaMap,ee=S.alphaTest>0,Z=!!S.alphaHash,xe=!!S.extensions;let Fe=Cn;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const st={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:lt,defines:S.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,instancingMorph:Ne&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ti,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:bt,envMap:A,envMapMode:A&&ae.mapping,envMapCubeUVHeight:G,aoMap:ct,lightMap:Oe,bumpMap:Ie,normalMap:Me,displacementMap:f&&ht,emissiveMap:Se,normalMapObjectSpace:Me&&S.normalMapType===kc,normalMapTangentSpace:Me&&S.normalMapType===Ml,metalnessMap:He,roughnessMap:St,anisotropy:mt,anisotropyMap:W,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:g,iridescence:B,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:De,specularMap:be,specularColorMap:ue,specularIntensityMap:Be,transmission:J,transmissionMap:L,thicknessMap:re,gradientMap:le,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:Z,combine:S.combine,mapUv:Ye&&x(S.map.channel),aoMapUv:ct&&x(S.aoMap.channel),lightMapUv:Oe&&x(S.lightMap.channel),bumpMapUv:Ie&&x(S.bumpMap.channel),normalMapUv:Me&&x(S.normalMap.channel),displacementMapUv:ht&&x(S.displacementMap.channel),emissiveMapUv:Se&&x(S.emissiveMap.channel),metalnessMapUv:He&&x(S.metalnessMap.channel),roughnessMapUv:St&&x(S.roughnessMap.channel),anisotropyMapUv:W&&x(S.anisotropyMap.channel),clearcoatMapUv:Te&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(S.sheenRoughnessMap.channel),specularMapUv:be&&x(S.specularMap.channel),specularColorMapUv:ue&&x(S.specularColorMap.channel),specularIntensityMapUv:Be&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:re&&x(S.thicknessMap.channel),alphaMapUv:ge&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Me||mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Ye||ge),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_n,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(T(M,S),w(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=_[S.type];let D;if(M){const k=tn[M];D=mh.clone(k.uniforms)}else D=S.uniforms;return D}function C(S,M){let D;for(let k=0,V=u.length;k<V;k++){const X=u[k];if(X.cacheKey===M){D=X,++D.usedTimes;break}}return D===void 0&&(D=new qp(r,M,S,s),u.push(D)),D}function R(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function I(S){h.remove(S)}function O(){h.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:O}}function Jp(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,h){r.get(a)[o]=h}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Qp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function il(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(l,f,p,_,x,m){let d=r[e];return d===void 0?(d={id:l.id,object:l,geometry:f,material:p,groupOrder:_,renderOrder:l.renderOrder,z:x,group:m},r[e]=d):(d.id=l.id,d.object=l,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=l.renderOrder,d.z=x,d.group=m),e++,d}function o(l,f,p,_,x,m){const d=a(l,f,p,_,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function h(l,f,p,_,x,m){const d=a(l,f,p,_,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(l,f){t.length>1&&t.sort(l||Qp),n.length>1&&n.sort(f||il),i.length>1&&i.sort(f||il)}function u(){for(let l=e,f=r.length;l<f;l++){const p=r[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:h,finish:u,sort:c}}function em(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new rl,r.set(n,[a])):i>=s.length?(a=new rl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function tm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new qe};break;case"SpotLight":t={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function nm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let im=0;function rm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sm(r){const e=new tm,t=nm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new at,a=new at;function o(c){let u=0,l=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,T=0,w=0,E=0,C=0,R=0,I=0;c.sort(rm);for(let S=0,M=c.length;S<M;S++){const D=c[S],k=D.color,V=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*V,l+=k.g*V,f+=k.b*V;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],V);I++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ae=D.shadow,G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=$,p++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(k).multiplyScalar(V),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[x]=$;const ae=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,ae.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[x]=ae.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=j,E++}x++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(k).multiplyScalar(V),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const ae=D.shadow,G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,G.shadowCameraNear=ae.camera.near,G.shadowCameraFar=ae.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=D.shadow.matrix,w++}n.point[_]=$,_++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(V),$.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[d]=$,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==T||O.numPointShadows!==w||O.numSpotShadows!==E||O.numSpotMaps!==C||O.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,O.directionalLength=p,O.pointLength=_,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=T,O.numPointShadows=w,O.numSpotShadows=E,O.numSpotMaps=C,O.numLightProbes=I,n.version=im++)}function h(c,u){let l=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const w=c[d];if(w.isDirectionalLight){const E=n.directional[l];E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),l++}else if(w.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:h,state:n}}function sl(r){const e=new sm(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function h(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:h,pushLight:s,pushShadow:a}}function am(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new sl(r),e.set(i,[o])):s>=a.length?(o=new sl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
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
}`;function cm(r,e,t){let n=new Da;const i=new ze,s=new ze,a=new pt,o=new Ph({depthPacking:Bc}),h=new Lh,c={},u=t.maxTextureSize,l={[Ln]:Dt,[Dt]:Ln,[_n]:_n},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:om,fragmentShader:lm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let d=this.type;this.render=function(R,I,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Rn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=d!==gn&&this.type===gn,X=d===gn&&this.type!==gn;for(let j=0,$=R.length;j<$;j++){const ae=R[j],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const he=G.getFrameExtents();if(i.multiply(he),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/he.x),i.x=s.x*he.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/he.y),i.y=s.y*he.y,G.mapSize.y=s.y)),G.map===null||V===!0||X===!0){const Ae=this.type!==gn?{minFilter:kt,magFilter:kt}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(i.x,i.y,Ae),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const pe=G.getViewportCount();for(let Ae=0;Ae<pe;Ae++){const We=G.getViewport(Ae);a.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),k.viewport(a),G.updateMatrices(ae,Ae),n=G.getFrustum(),E(I,O,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&T(G,O),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,D)};function T(R,I){const O=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Dn(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(I,null,O,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(I,null,O,p,x,null)}function w(R,I,O,S){let M=null;const D=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=O.isPointLight===!0?h:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=M.uuid,V=I.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let j=X[V];j===void 0&&(j=M.clone(),X[V]=j,I.addEventListener("dispose",C)),M=j}if(M.visible=I.visible,M.wireframe=I.wireframe,S===gn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:l[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=O}return M}function E(R,I,O,S,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===gn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const V=e.update(R),X=R.material;if(Array.isArray(X)){const j=V.groups;for(let $=0,ae=j.length;$<ae;$++){const G=j[$],he=X[G.materialIndex];if(he&&he.visible){const pe=w(R,he,S,M);R.onBeforeShadow(r,R,I,O,V,pe,G),r.renderBufferDirect(O,null,V,pe,R,G),R.onAfterShadow(r,R,I,O,V,pe,G)}}}else if(X.visible){const j=w(R,X,S,M);R.onBeforeShadow(r,R,I,O,V,j,null),r.renderBufferDirect(O,null,V,j,R,null),R.onAfterShadow(r,R,I,O,V,j,null)}}const k=R.children;for(let V=0,X=k.length;V<X;V++)E(k[V],I,O,S,M)}function C(R){R.target.removeEventListener("dispose",C);for(const O in c){const S=c[O],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const hm={[Ds]:Is,[Us]:Os,[Ns]:Bs,[yi]:Fs,[Is]:Ds,[Os]:Us,[Bs]:Ns,[Fs]:yi};function um(r,e){function t(){let L=!1;const re=new pt;let le=null;const ge=new pt(0,0,0,0);return{setMask:function(ee){le!==ee&&!L&&(r.colorMask(ee,ee,ee,ee),le=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Z,xe,Fe,st){st===!0&&(ee*=Fe,Z*=Fe,xe*=Fe),re.set(ee,Z,xe,Fe),ge.equals(re)===!1&&(r.clearColor(ee,Z,xe,Fe),ge.copy(re))},reset:function(){L=!1,le=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,le=null,ge=null,ee=null;return{setReversed:function(Z){if(re!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Fe=ee;ee=null,this.setClear(Fe)}},getReversed:function(){return re},setTest:function(Z){Z?Q(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(Z){le!==Z&&!L&&(r.depthMask(Z),le=Z)},setFunc:function(Z){if(re&&(Z=hm[Z]),ge!==Z){switch(Z){case Ds:r.depthFunc(r.NEVER);break;case Is:r.depthFunc(r.ALWAYS);break;case Us:r.depthFunc(r.LESS);break;case yi:r.depthFunc(r.LEQUAL);break;case Ns:r.depthFunc(r.EQUAL);break;case Fs:r.depthFunc(r.GEQUAL);break;case Os:r.depthFunc(r.GREATER);break;case Bs:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ee!==Z&&(re&&(Z=1-Z),r.clearDepth(Z),ee=Z)},reset:function(){L=!1,le=null,ge=null,ee=null,re=!1}}}function i(){let L=!1,re=null,le=null,ge=null,ee=null,Z=null,xe=null,Fe=null,st=null;return{setTest:function(Je){L||(Je?Q(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Je){re!==Je&&!L&&(r.stencilMask(Je),re=Je)},setFunc:function(Je,hn,en){(le!==Je||ge!==hn||ee!==en)&&(r.stencilFunc(Je,hn,en),le=Je,ge=hn,ee=en)},setOp:function(Je,hn,en){(Z!==Je||xe!==hn||Fe!==en)&&(r.stencilOp(Je,hn,en),Z=Je,xe=hn,Fe=en)},setLocked:function(Je){L=Je},setClear:function(Je){st!==Je&&(r.clearStencil(Je),st=Je)},reset:function(){L=!1,re=null,le=null,ge=null,ee=null,Z=null,xe=null,Fe=null,st=null}}}const s=new t,a=new n,o=new i,h=new WeakMap,c=new WeakMap;let u={},l={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,T=null,w=null,E=null,C=null,R=null,I=new qe(0,0,0),O=0,S=!1,M=null,D=null,k=null,V=null,X=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ae=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=ae>=1):G.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=ae>=2);let he=null,pe={};const Ae=r.getParameter(r.SCISSOR_BOX),We=r.getParameter(r.VIEWPORT),rt=new pt().fromArray(Ae),lt=new pt().fromArray(We);function Ze(L,re,le,ge){const ee=new Uint8Array(4),Z=r.createTexture();r.bindTexture(L,Z),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xe=0;xe<le;xe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(re+xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return Z}const K={};K[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(r.DEPTH_TEST),a.setFunc(yi),Ie(!1),Me(Qa),Q(r.CULL_FACE),ct(Rn);function Q(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function _e(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ne(L,re){return l[L]!==re?(r.bindFramebuffer(L,re),l[L]=re,L===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=re),L===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=re),!0):!1}function we(L,re){let le=p,ge=!1;if(L){le=f.get(re),le===void 0&&(le=[],f.set(re,le));const ee=L.textures;if(le.length!==ee.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,xe=ee.length;Z<xe;Z++)le[Z]=r.COLOR_ATTACHMENT0+Z;le.length=ee.length,ge=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,ge=!0);ge&&r.drawBuffers(le)}function Ye(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const bt={[Xn]:r.FUNC_ADD,[hc]:r.FUNC_SUBTRACT,[uc]:r.FUNC_REVERSE_SUBTRACT};bt[dc]=r.MIN,bt[fc]=r.MAX;const A={[pc]:r.ZERO,[mc]:r.ONE,[gc]:r.SRC_COLOR,[Ps]:r.SRC_ALPHA,[yc]:r.SRC_ALPHA_SATURATE,[Mc]:r.DST_COLOR,[vc]:r.DST_ALPHA,[_c]:r.ONE_MINUS_SRC_COLOR,[Ls]:r.ONE_MINUS_SRC_ALPHA,[Sc]:r.ONE_MINUS_DST_COLOR,[xc]:r.ONE_MINUS_DST_ALPHA,[Ec]:r.CONSTANT_COLOR,[bc]:r.ONE_MINUS_CONSTANT_COLOR,[Tc]:r.CONSTANT_ALPHA,[wc]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(L,re,le,ge,ee,Z,xe,Fe,st,Je){if(L===Rn){x===!0&&(_e(r.BLEND),x=!1);return}if(x===!1&&(Q(r.BLEND),x=!0),L!==cc){if(L!==m||Je!==S){if((d!==Xn||E!==Xn)&&(r.blendEquation(r.FUNC_ADD),d=Xn,E=Xn),Je)switch(L){case Mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFunc(r.ONE,r.ONE);break;case to:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case no:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case to:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case no:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,w=null,C=null,R=null,I.set(0,0,0),O=0,m=L,S=Je}return}ee=ee||re,Z=Z||le,xe=xe||ge,(re!==d||ee!==E)&&(r.blendEquationSeparate(bt[re],bt[ee]),d=re,E=ee),(le!==T||ge!==w||Z!==C||xe!==R)&&(r.blendFuncSeparate(A[le],A[ge],A[Z],A[xe]),T=le,w=ge,C=Z,R=xe),(Fe.equals(I)===!1||st!==O)&&(r.blendColor(Fe.r,Fe.g,Fe.b,st),I.copy(Fe),O=st),m=L,S=!1}function Oe(L,re){L.side===_n?_e(r.CULL_FACE):Q(r.CULL_FACE);let le=L.side===Dt;re&&(le=!le),Ie(le),L.blending===Mi&&L.transparent===!1?ct(Rn):ct(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function Me(L){L!==ac?(Q(r.CULL_FACE),L!==D&&(L===Qa?r.cullFace(r.BACK):L===oc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),D=L}function ht(L){L!==k&&($&&r.lineWidth(L),k=L)}function Se(L,re,le){L?(Q(r.POLYGON_OFFSET_FILL),(V!==re||X!==le)&&(r.polygonOffset(re,le),V=re,X=le)):_e(r.POLYGON_OFFSET_FILL)}function He(L){L?Q(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function St(L){L===void 0&&(L=r.TEXTURE0+j-1),he!==L&&(r.activeTexture(L),he=L)}function mt(L,re,le){le===void 0&&(he===null?le=r.TEXTURE0+j-1:le=he);let ge=pe[le];ge===void 0&&(ge={type:void 0,texture:void 0},pe[le]=ge),(ge.type!==L||ge.texture!==re)&&(he!==le&&(r.activeTexture(le),he=le),r.bindTexture(L,re||K[L]),ge.type=L,ge.texture=re)}function b(){const L=pe[he];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){rt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function De(L){lt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),lt.copy(L))}function be(L,re){let le=c.get(re);le===void 0&&(le=new WeakMap,c.set(re,le));let ge=le.get(L);ge===void 0&&(ge=r.getUniformBlockIndex(re,L.name),le.set(L,ge))}function ue(L,re){const ge=c.get(re).get(L);h.get(re)!==ge&&(r.uniformBlockBinding(re,ge,L.__bindingPointIndex),h.set(re,ge))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},he=null,pe={},l={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,T=null,w=null,E=null,C=null,R=null,I=new qe(0,0,0),O=0,S=!1,M=null,D=null,k=null,V=null,X=null,rt.set(0,0,r.canvas.width,r.canvas.height),lt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:_e,bindFramebuffer:Ne,drawBuffers:we,useProgram:Ye,setBlending:ct,setMaterial:Oe,setFlipSided:Ie,setCullFace:Me,setLineWidth:ht,setPolygonOffset:Se,setScissorTest:He,activeTexture:St,bindTexture:mt,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Ee,texImage3D:ie,updateUBOMapping:be,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:ye,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Te,scissor:fe,viewport:De,reset:Be}}function dm(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let l;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):Ur("canvas")}function x(b,g,B){let Y=1;const J=mt(b);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(Y*J.width),Te=Math.floor(Y*J.height);l===void 0&&(l=_(W,Te));const oe=g?_(W,Te):l;return oe.width=W,oe.height=Te,oe.getContext("2d").drawImage(b,0,0,W,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Te+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){r.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(b,g,B,Y,J=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=g;if(g===r.RED&&(B===r.FLOAT&&(W=r.R32F),B===r.HALF_FLOAT&&(W=r.R16F),B===r.UNSIGNED_BYTE&&(W=r.R8)),g===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.R8UI),B===r.UNSIGNED_SHORT&&(W=r.R16UI),B===r.UNSIGNED_INT&&(W=r.R32UI),B===r.BYTE&&(W=r.R8I),B===r.SHORT&&(W=r.R16I),B===r.INT&&(W=r.R32I)),g===r.RG&&(B===r.FLOAT&&(W=r.RG32F),B===r.HALF_FLOAT&&(W=r.RG16F),B===r.UNSIGNED_BYTE&&(W=r.RG8)),g===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.RG8UI),B===r.UNSIGNED_SHORT&&(W=r.RG16UI),B===r.UNSIGNED_INT&&(W=r.RG32UI),B===r.BYTE&&(W=r.RG8I),B===r.SHORT&&(W=r.RG16I),B===r.INT&&(W=r.RG32I)),g===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.RGB8UI),B===r.UNSIGNED_SHORT&&(W=r.RGB16UI),B===r.UNSIGNED_INT&&(W=r.RGB32UI),B===r.BYTE&&(W=r.RGB8I),B===r.SHORT&&(W=r.RGB16I),B===r.INT&&(W=r.RGB32I)),g===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),B===r.UNSIGNED_INT&&(W=r.RGBA32UI),B===r.BYTE&&(W=r.RGBA8I),B===r.SHORT&&(W=r.RGBA16I),B===r.INT&&(W=r.RGBA32I)),g===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),g===r.RGBA){const Te=J?Dr:Ke.getTransfer(Y);B===r.FLOAT&&(W=r.RGBA32F),B===r.HALF_FLOAT&&(W=r.RGBA16F),B===r.UNSIGNED_BYTE&&(W=Te===tt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(b,g){let B;return b?g===null||g===jn||g===$i?B=r.DEPTH24_STENCIL8:g===an?B=r.DEPTH32F_STENCIL8:g===Xi&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===jn||g===$i?B=r.DEPTH_COMPONENT24:g===an?B=r.DEPTH_COMPONENT32F:g===Xi&&(B=r.DEPTH_COMPONENT16),B}function C(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==kt&&b.minFilter!==sn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function R(b){const g=b.target;g.removeEventListener("dispose",R),O(g),g.isVideoTexture&&u.delete(g)}function I(b){const g=b.target;g.removeEventListener("dispose",I),M(g)}function O(b){const g=n.get(b);if(g.__webglInit===void 0)return;const B=b.source,Y=f.get(B);if(Y){const J=Y[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(b),Object.keys(Y).length===0&&f.delete(B)}n.remove(b)}function S(b){const g=n.get(b);r.deleteTexture(g.__webglTexture);const B=b.source,Y=f.get(B);delete Y[g.__cacheKey],a.memory.textures--}function M(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let J=0;J<g.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(g.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)r.deleteFramebuffer(g.__webglFramebuffer[Y]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=b.textures;for(let Y=0,J=B.length;Y<J;Y++){const W=n.get(B[Y]);W.__webglTexture&&(r.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(b)}let D=0;function k(){D=0}function V(){const b=D;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),D+=1,b}function X(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function j(b,g){const B=n.get(b);if(b.isVideoTexture&&He(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,b,g);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+g)}function $(b,g){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){K(B,b,g);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+g)}function ae(b,g){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){K(B,b,g);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+g)}function G(b,g){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Q(B,b,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+g)}const he={[Hs]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[Vs]:r.MIRRORED_REPEAT},pe={[kt]:r.NEAREST,[Fc]:r.NEAREST_MIPMAP_NEAREST,[tr]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[$r]:r.LINEAR_MIPMAP_NEAREST,[Yn]:r.LINEAR_MIPMAP_LINEAR},Ae={[zc]:r.NEVER,[$c]:r.ALWAYS,[Hc]:r.LESS,[Sl]:r.LEQUAL,[Vc]:r.EQUAL,[Xc]:r.GEQUAL,[Gc]:r.GREATER,[Wc]:r.NOTEQUAL};function We(b,g){if(g.type===an&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===sn||g.magFilter===$r||g.magFilter===tr||g.magFilter===Yn||g.minFilter===sn||g.minFilter===$r||g.minFilter===tr||g.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,he[g.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,he[g.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,he[g.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,pe[g.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===kt||g.minFilter!==tr&&g.minFilter!==Yn||g.type===an&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function rt(b,g){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",R));const Y=g.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const W=X(g);if(W!==b.__cacheKey){J[W]===void 0&&(J[W]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[W].usedTimes++;const Te=J[b.__cacheKey];Te!==void 0&&(J[b.__cacheKey].usedTimes--,Te.usedTimes===0&&S(g)),b.__cacheKey=W,b.__webglTexture=J[W].texture}return B}function lt(b,g,B){return Math.floor(Math.floor(b/B)/g)}function Ze(b,g,B,Y){const W=b.updateRanges;if(W.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,B,Y,g.data);else{W.sort((ie,fe)=>ie.start-fe.start);let Te=0;for(let ie=1;ie<W.length;ie++){const fe=W[Te],De=W[ie],be=fe.start+fe.count,ue=lt(De.start,g.width,4),Be=lt(fe.start,g.width,4);De.start<=be+1&&ue===Be&&lt(De.start+De.count-1,g.width,4)===ue?fe.count=Math.max(fe.count,De.start+De.count-fe.start):(++Te,W[Te]=De)}W.length=Te+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let ie=0,fe=W.length;ie<fe;ie++){const De=W[ie],be=Math.floor(De.start/4),ue=Math.ceil(De.count/4),Be=be%g.width,L=Math.floor(be/g.width),re=ue,le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Be,L,re,le,B,Y,g.data)}b.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function K(b,g,B){let Y=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=r.TEXTURE_3D);const J=rt(b,g),W=g.source;t.bindTexture(Y,b.__webglTexture,r.TEXTURE0+B);const Te=n.get(W);if(W.version!==Te.__version||J===!0){t.activeTexture(r.TEXTURE0+B);const oe=Ke.getPrimaries(Ke.workingColorSpace),ye=g.colorSpace===An?null:Ke.getPrimaries(g.colorSpace),Ee=g.colorSpace===An||oe===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=x(g.image,!1,i.maxTextureSize);ie=St(g,ie);const fe=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let be=w(g.internalFormat,fe,De,g.colorSpace,g.isVideoTexture);We(Y,g);let ue;const Be=g.mipmaps,L=g.isVideoTexture!==!0,re=Te.__version===void 0||J===!0,le=W.dataReady,ge=C(g,ie);if(g.isDepthTexture)be=E(g.format===Yi,g.type),re&&(L?t.texStorage2D(r.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,be,ie.width,ie.height,0,fe,De,null));else if(g.isDataTexture)if(Be.length>0){L&&re&&t.texStorage2D(r.TEXTURE_2D,ge,be,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ue=Be[ee],L?le&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,De,ue.data):t.texImage2D(r.TEXTURE_2D,ee,be,ue.width,ue.height,0,fe,De,ue.data);g.generateMipmaps=!1}else L?(re&&t.texStorage2D(r.TEXTURE_2D,ge,be,ie.width,ie.height),le&&Ze(g,ie,fe,De)):t.texImage2D(r.TEXTURE_2D,0,be,ie.width,ie.height,0,fe,De,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,be,Be[0].width,Be[0].height,ie.depth);for(let ee=0,Z=Be.length;ee<Z;ee++)if(ue=Be[ee],g.format!==Jt)if(fe!==null)if(L){if(le)if(g.layerUpdates.size>0){const xe=No(ue.width,ue.height,g.format,g.type);for(const Fe of g.layerUpdates){const st=ue.data.subarray(Fe*xe/ue.data.BYTES_PER_ELEMENT,(Fe+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Fe,ue.width,ue.height,1,fe,st)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,fe,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,be,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,fe,De,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,be,ue.width,ue.height,ie.depth,0,fe,De,ue.data)}else{L&&re&&t.texStorage2D(r.TEXTURE_2D,ge,be,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ue=Be[ee],g.format!==Jt?fe!==null?L?le&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,De,ue.data):t.texImage2D(r.TEXTURE_2D,ee,be,ue.width,ue.height,0,fe,De,ue.data)}else if(g.isDataArrayTexture)if(L){if(re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,be,ie.width,ie.height,ie.depth),le)if(g.layerUpdates.size>0){const ee=No(ie.width,ie.height,g.format,g.type);for(const Z of g.layerUpdates){const xe=ie.data.subarray(Z*ee/ie.data.BYTES_PER_ELEMENT,(Z+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,fe,De,xe)}g.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,De,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,fe,De,ie.data);else if(g.isData3DTexture)L?(re&&t.texStorage3D(r.TEXTURE_3D,ge,be,ie.width,ie.height,ie.depth),le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,De,ie.data)):t.texImage3D(r.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,fe,De,ie.data);else if(g.isFramebufferTexture){if(re)if(L)t.texStorage2D(r.TEXTURE_2D,ge,be,ie.width,ie.height);else{let ee=ie.width,Z=ie.height;for(let xe=0;xe<ge;xe++)t.texImage2D(r.TEXTURE_2D,xe,be,ee,Z,0,fe,De,null),ee>>=1,Z>>=1}}else if(Be.length>0){if(L&&re){const ee=mt(Be[0]);t.texStorage2D(r.TEXTURE_2D,ge,be,ee.width,ee.height)}for(let ee=0,Z=Be.length;ee<Z;ee++)ue=Be[ee],L?le&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,fe,De,ue):t.texImage2D(r.TEXTURE_2D,ee,be,fe,De,ue);g.generateMipmaps=!1}else if(L){if(re){const ee=mt(ie);t.texStorage2D(r.TEXTURE_2D,ge,be,ee.width,ee.height)}le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,De,ie)}else t.texImage2D(r.TEXTURE_2D,0,be,fe,De,ie);m(g)&&d(Y),Te.__version=W.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Q(b,g,B){if(g.image.length!==6)return;const Y=rt(b,g),J=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+B);const W=n.get(J);if(J.version!==W.__version||Y===!0){t.activeTexture(r.TEXTURE0+B);const Te=Ke.getPrimaries(Ke.workingColorSpace),oe=g.colorSpace===An?null:Ke.getPrimaries(g.colorSpace),ye=g.colorSpace===An||Te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Ee&&!ie?fe[Z]=x(g.image[Z],!0,i.maxCubemapSize):fe[Z]=ie?g.image[Z].image:g.image[Z],fe[Z]=St(g,fe[Z]);const De=fe[0],be=s.convert(g.format,g.colorSpace),ue=s.convert(g.type),Be=w(g.internalFormat,be,ue,g.colorSpace),L=g.isVideoTexture!==!0,re=W.__version===void 0||Y===!0,le=J.dataReady;let ge=C(g,De);We(r.TEXTURE_CUBE_MAP,g);let ee;if(Ee){L&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Be,De.width,De.height);for(let Z=0;Z<6;Z++){ee=fe[Z].mipmaps;for(let xe=0;xe<ee.length;xe++){const Fe=ee[xe];g.format!==Jt?be!==null?L?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Fe.width,Fe.height,be,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Fe.width,Fe.height,be,ue,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Be,Fe.width,Fe.height,0,be,ue,Fe.data)}}}else{if(ee=g.mipmaps,L&&re){ee.length>0&&ge++;const Z=mt(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){L?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,be,ue,fe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,fe[Z].width,fe[Z].height,0,be,ue,fe[Z].data);for(let xe=0;xe<ee.length;xe++){const st=ee[xe].image[Z].image;L?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,st.width,st.height,be,ue,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Be,st.width,st.height,0,be,ue,st.data)}}else{L?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,ue,fe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,be,ue,fe[Z]);for(let xe=0;xe<ee.length;xe++){const Fe=ee[xe];L?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,be,ue,Fe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Be,be,ue,Fe.image[Z])}}}m(g)&&d(r.TEXTURE_CUBE_MAP),W.__version=J.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function _e(b,g,B,Y,J,W){const Te=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),ye=w(B.internalFormat,Te,oe,B.colorSpace),Ee=n.get(g),ie=n.get(B);if(ie.__renderTarget=g,!Ee.__hasExternalTextures){const fe=Math.max(1,g.width>>W),De=Math.max(1,g.height>>W);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,W,ye,fe,De,g.depth,0,Te,oe,null):t.texImage2D(J,W,ye,fe,De,0,Te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),Se(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,ie.__webglTexture,0,ht(g)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,ie.__webglTexture,W),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(b,g,B){if(r.bindRenderbuffer(r.RENDERBUFFER,b),g.depthBuffer){const Y=g.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,W=E(g.stencilBuffer,J),Te=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=ht(g);Se(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,W,g.width,g.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,W,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,W,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,b)}else{const Y=g.textures;for(let J=0;J<Y.length;J++){const W=Y[J],Te=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),ye=w(W.internalFormat,Te,oe,W.colorSpace),Ee=ht(g);B&&Se(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ye,g.width,g.height):Se(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ye,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,ye,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const J=Y.__webglTexture,W=ht(g);if(g.depthTexture.format===qi)Se(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(g.depthTexture.format===Yi)Se(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ye(b){const g=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=Y}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=b.texture.mipmaps;Y&&Y.length>0?we(g.__webglFramebuffer[0],b):we(g.__webglFramebuffer,b)}else if(B){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ne(g.__webglDepthbuffer[Y],b,!1);else{const J=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,W)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),Ne(g.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,W)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(b,g,B){const Y=n.get(b);g!==void 0&&_e(Y.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ye(b)}function A(b){const g=b.texture,B=n.get(b),Y=n.get(g);b.addEventListener("dispose",I);const J=b.textures,W=b.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=g.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let ye=0;ye<g.mipmaps.length;ye++)B.__webglFramebuffer[oe][ye]=r.createFramebuffer()}else B.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)B.__webglFramebuffer[oe]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Te)for(let oe=0,ye=J.length;oe<ye;oe++){const Ee=n.get(J[oe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&Se(b)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const ye=J[oe];B.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Ee=s.convert(ye.format,ye.colorSpace),ie=s.convert(ye.type),fe=w(ye.internalFormat,Ee,ie,ye.colorSpace,b.isXRRenderTarget===!0),De=ht(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,fe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(W){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),We(r.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)_e(B.__webglFramebuffer[oe][ye],b,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye);else _e(B.__webglFramebuffer[oe],b,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,ye=J.length;oe<ye;oe++){const Ee=J[oe],ie=n.get(Ee);let fe=r.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),We(fe,Ee),_e(B.__webglFramebuffer,b,Ee,r.COLOR_ATTACHMENT0+oe,fe,0),m(Ee)&&d(fe)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),We(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)_e(B.__webglFramebuffer[ye],b,g,r.COLOR_ATTACHMENT0,oe,ye);else _e(B.__webglFramebuffer,b,g,r.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),t.unbindTexture()}b.depthBuffer&&Ye(b)}function ct(b){const g=b.textures;for(let B=0,Y=g.length;B<Y;B++){const J=g[B];if(m(J)){const W=T(b),Te=n.get(J).__webglTexture;t.bindTexture(W,Te),d(W),t.unbindTexture()}}}const Oe=[],Ie=[];function Me(b){if(b.samples>0){if(Se(b)===!1){const g=b.textures,B=b.width,Y=b.height;let J=r.COLOR_BUFFER_BIT;const W=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(b),oe=g.length>1;if(oe)for(let Ee=0;Ee<g.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const ye=b.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ie=n.get(g[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,r.NEAREST),h===!0&&(Oe.length=0,Ie.length=0,Oe.push(r.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Oe.push(W),Ie.push(W),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Ee=0;Ee<g.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ie=n.get(g[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const g=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function ht(b){return Math.min(i.maxSamples,b.samples)}function Se(b){const g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function He(b){const g=a.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function St(b,g){const B=b.colorSpace,Y=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Ti&&B!==An&&(Ke.getTransfer(B)===tt?(Y!==Jt||J!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=G,this.rebindTextures=bt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se}function fm(r,e){function t(n,i=An){let s;const a=Ke.getTransfer(i);if(n===ln)return r.UNSIGNED_BYTE;if(n===ba)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===fl)return r.BYTE;if(n===pl)return r.SHORT;if(n===Xi)return r.UNSIGNED_SHORT;if(n===Ea)return r.INT;if(n===jn)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===Ki)return r.HALF_FLOAT;if(n===_l)return r.ALPHA;if(n===vl)return r.RGB;if(n===Jt)return r.RGBA;if(n===qi)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===wa)return r.RED;if(n===Aa)return r.RED_INTEGER;if(n===xl)return r.RG;if(n===Ra)return r.RG_INTEGER;if(n===Ca)return r.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ar)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ar)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gs||n===Ws||n===Xs||n===$s)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ws)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qs||n===Ys||n===js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qs||n===Ys)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ks||n===Zs||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ks)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===ua||n===da)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ha)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mm=`
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

}`;class gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:pm,fragmentShader:mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _m extends Ri{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",h=1,c=null,u=null,l=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new gm,d={},T=t.getContextAttributes();let w=null,E=null;const C=[],R=[],I=new ze;let O=null;const S=new Zt;S.viewport=new pt;const M=new Zt;M.viewport=new pt;const D=[S,M],k=new Fh;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=C[K];return Q===void 0&&(Q=new ms,C[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=C[K];return Q===void 0&&(Q=new ms,C[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=C[K];return Q===void 0&&(Q=new ms,C[K]=Q),Q.getHandSpace()};function j(K){const Q=R.indexOf(K.inputSource);if(Q===-1)return;const _e=C[Q];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ae);for(let K=0;K<C.length;K++){const Q=R[K];Q!==null&&(R[K]=null,C[K].disconnect(Q))}V=null,X=null,m.reset();for(const K in d)delete d[K];e.setRenderTarget(w),p=null,f=null,l=null,i=null,E=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return l===null&&x&&(l=new XRWebGLBinding(i,t)),l},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,we=null;T.depth&&(we=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Yi:qi,Ne=T.stencil?$i:jn);const Ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};l=this.getBinding(),f=l.createProjectionLayer(Ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Dn(f.textureWidth,f.textureHeight,{format:Jt,type:ln,depthTexture:new Ul(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Dn(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(K){for(let Q=0;Q<K.removed.length;Q++){const _e=K.removed[Q],Ne=R.indexOf(_e);Ne>=0&&(R[Ne]=null,C[Ne].disconnect(_e))}for(let Q=0;Q<K.added.length;Q++){const _e=K.added[Q];let Ne=R.indexOf(_e);if(Ne===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=R.length){R.push(_e),Ne=Ye;break}else if(R[Ye]===null){R[Ye]=_e,Ne=Ye;break}if(Ne===-1)break}const we=C[Ne];we&&we.connect(_e)}}const G=new F,he=new F;function pe(K,Q,_e){G.setFromMatrixPosition(Q.matrixWorld),he.setFromMatrixPosition(_e.matrixWorld);const Ne=G.distanceTo(he),we=Q.projectionMatrix.elements,Ye=_e.projectionMatrix.elements,bt=we[14]/(we[10]-1),A=we[14]/(we[10]+1),ct=(we[9]+1)/we[5],Oe=(we[9]-1)/we[5],Ie=(we[8]-1)/we[0],Me=(Ye[8]+1)/Ye[0],ht=bt*Ie,Se=bt*Me,He=Ne/(-Ie+Me),St=He*-Ie;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const mt=bt+He,b=A+He,g=ht-St,B=Se+(Ne-St),Y=ct*A/b*mt,J=Oe*A/b*mt;K.projectionMatrix.makePerspective(g,B,Y,J,mt,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Q=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=M.near=S.near=Q,k.far=M.far=S.far=_e,(V!==k.near||X!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,X=k.far),k.layers.mask=K.layers.mask|6,S.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;const Ne=K.parent,we=k.cameras;Ae(k,Ne);for(let Ye=0;Ye<we.length;Ye++)Ae(we[Ye],Ne);we.length===2?pe(k,S,M):k.projectionMatrix.copy(S.projectionMatrix),We(K,k,Ne)};function We(K,Q,_e){_e===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=va*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return h},this.setFoveation=function(K){h=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return d[K]};let rt=null;function lt(K,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ne=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let A=0;A<_e.length;A++){const ct=_e[A];let Oe=null;if(p!==null)Oe=p.getViewport(ct);else{const Me=l.getViewSubImage(f,ct);Oe=Me.viewport,A===0&&(e.setRenderTargetTextures(E,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(E))}let Ie=D[A];Ie===void 0&&(Ie=new Zt,Ie.layers.enable(A),Ie.viewport=new pt,D[A]=Ie),Ie.matrix.fromArray(ct.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ct.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),A===0&&(k.matrix.copy(Ie.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(Ie)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){l=n.getBinding();const A=l.getDepthInformation(_e[0]);A&&A.isValid&&A.texture&&m.init(A,i.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),l=n.getBinding();for(let A=0;A<_e.length;A++){const ct=_e[A].camera;if(ct){let Oe=d[ct];Oe||(Oe=new Nl,d[ct]=Oe);const Ie=l.getCameraImage(ct);Oe.sourceTexture=Ie}}}}for(let _e=0;_e<C.length;_e++){const Ne=R[_e],we=C[_e];Ne!==null&&we!==void 0&&we.update(Ne,Q,c||a)}rt&&rt(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ze=new Fl;Ze.setAnimationLoop(lt),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}}const Vn=new cn,vm=new at;function xm(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Cl(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,T,w,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),l(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?h(m,d,T,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),w=T.envMap,E=T.envMapRotation;w&&(m.envMap.value=w,Vn.copy(E),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(vm.makeRotationFromEuler(Vn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function h(m,d,T,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function l(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mm(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,w){const E=w.program;n.uniformBlockBinding(T,E)}function c(T,w){let E=i[T.id];E===void 0&&(_(T),E=u(T),i[T.id]=E,T.addEventListener("dispose",m));const C=w.program;n.updateUBOMapping(T,C);const R=e.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function u(T){const w=l();T.__bindingPointIndex=w;const E=r.createBuffer(),C=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,E),E}function l(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const w=i[T.id],E=T.uniforms,C=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let R=0,I=E.length;R<I;R++){const O=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,M=O.length;S<M;S++){const D=O[S];if(p(D,R,S,C)===!0){const k=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<V.length;j++){const $=V[j],ae=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,k+X,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,X),X+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,w,E,C){const R=T.value,I=w+"_"+E;if(C[I]===void 0)return typeof R=="number"||typeof R=="boolean"?C[I]=R:C[I]=R.clone(),!0;{const O=C[I];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return C[I]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function _(T){const w=T.uniforms;let E=0;const C=16;for(let I=0,O=w.length;I<O;I++){const S=Array.isArray(w[I])?w[I]:[w[I]];for(let M=0,D=S.length;M<D;M++){const k=S[M],V=Array.isArray(k.value)?k.value:[k.value];for(let X=0,j=V.length;X<j;X++){const $=V[X],ae=x($),G=E%C,he=G%ae.boundary,pe=G+he;E+=he,pe!==0&&C-pe<ae.storage&&(E+=C-pe),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=ae.storage}}}const R=E%C;return R>0&&(E+=C-R),T.__size=E,T.__cache={},this}function x(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function d(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:h,update:c,dispose:d}}class Sm{constructor(e={}){const{canvas:t=jc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=Ot;let R=0,I=0,O=null,S=-1,M=null;const D=new pt,k=new pt;let V=null;const X=new qe(0);let j=0,$=t.width,ae=t.height,G=1,he=null,pe=null;const Ae=new pt(0,0,$,ae),We=new pt(0,0,$,ae);let rt=!1;const lt=new Da;let Ze=!1,K=!1;const Q=new at,_e=new F,Ne=new pt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function bt(){return O===null?G:1}let A=n;function ct(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ee,!1),A===null){const U="webgl2";if(A=ct(U,v),A===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Oe,Ie,Me,ht,Se,He,St,mt,b,g,B,Y,J,W,Te,oe,ye,Ee,ie,fe,De,be,ue,Be;function L(){Oe=new Lf(A),Oe.init(),be=new fm(A,Oe),Ie=new bf(A,Oe,e,be),Me=new um(A,Oe),Ie.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),ht=new Uf(A),Se=new Jp,He=new dm(A,Oe,Me,Se,Ie,be,ht),St=new wf(E),mt=new Pf(E),b=new kh(A),ue=new yf(A,b),g=new Df(A,b,ht,ue),B=new Ff(A,g,b,ht),ie=new Nf(A,Ie,He),oe=new Tf(Se),Y=new Zp(E,St,mt,Oe,Ie,ue,oe),J=new xm(E,Se),W=new em,Te=new am(Oe),Ee=new Sf(E,St,mt,Me,B,p,h),ye=new cm(E,B,Ie),Be=new Mm(A,ht,Ie,Me),fe=new Ef(A,Oe,ht),De=new If(A,Oe,ht),ht.programs=Y.programs,E.capabilities=Ie,E.extensions=Oe,E.properties=Se,E.renderLists=W,E.shadowMap=ye,E.state=Me,E.info=ht}L();const re=new _m(E,A);this.xr=re,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize($,ae,!1))},this.getSize=function(v){return v.set($,ae)},this.setSize=function(v,U,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,ae=U,t.width=Math.floor(v*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set($*G,ae*G).floor()},this.setDrawingBufferSize=function(v,U,z){$=v,ae=U,G=z,t.width=Math.floor(v*z),t.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Ae)},this.setViewport=function(v,U,z,H){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,U,z,H),Me.viewport(D.copy(Ae).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(We)},this.setScissor=function(v,U,z,H){v.isVector4?We.set(v.x,v.y,v.z,v.w):We.set(v,U,z,H),Me.scissor(k.copy(We).multiplyScalar(G).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(v){Me.setScissorTest(rt=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){pe=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,z=!0){let H=0;if(v){let N=!1;if(O!==null){const te=O.texture.format;N=te===Ca||te===Ra||te===Aa}if(N){const te=O.texture.type,de=te===ln||te===jn||te===Xi||te===$i||te===ba||te===Ta,ve=Ee.getClearColor(),me=Ee.getClearAlpha(),Le=ve.r,Ue=ve.g,Re=ve.b;de?(_[0]=Le,_[1]=Ue,_[2]=Re,_[3]=me,A.clearBufferuiv(A.COLOR,0,_)):(x[0]=Le,x[1]=Ue,x[2]=Re,x[3]=me,A.clearBufferiv(A.COLOR,0,x))}else H|=A.COLOR_BUFFER_BIT}U&&(H|=A.DEPTH_BUFFER_BIT),z&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Ee.dispose(),W.dispose(),Te.dispose(),Se.dispose(),St.dispose(),mt.dispose(),B.dispose(),ue.dispose(),Be.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",en),re.removeEventListener("sessionend",ka),Nn.stop()};function le(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=ht.autoReset,U=ye.enabled,z=ye.autoUpdate,H=ye.needsUpdate,N=ye.type;L(),ht.autoReset=v,ye.enabled=U,ye.autoUpdate=z,ye.needsUpdate=H,ye.type=N}function ee(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Z(v){const U=v.target;U.removeEventListener("dispose",Z),xe(U)}function xe(v){Fe(v),Se.remove(v)}function Fe(v){const U=Se.get(v).programs;U!==void 0&&(U.forEach(function(z){Y.releaseProgram(z)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,z,H,N,te){U===null&&(U=we);const de=N.isMesh&&N.matrixWorld.determinant()<0,ve=Wl(v,U,z,H,N);Me.setMaterial(H,de);let me=z.index,Le=1;if(H.wireframe===!0){if(me=g.getWireframeAttribute(z),me===void 0)return;Le=2}const Ue=z.drawRange,Re=z.attributes.position;let Xe=Ue.start*Le,et=(Ue.start+Ue.count)*Le;te!==null&&(Xe=Math.max(Xe,te.start*Le),et=Math.min(et,(te.start+te.count)*Le)),me!==null?(Xe=Math.max(Xe,0),et=Math.min(et,me.count)):Re!=null&&(Xe=Math.max(Xe,0),et=Math.min(et,Re.count));const ft=et-Xe;if(ft<0||ft===1/0)return;ue.setup(N,H,ve,z,me);let ot,it=fe;if(me!==null&&(ot=b.get(me),it=De,it.setIndex(ot)),N.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*bt()),it.setMode(A.LINES)):it.setMode(A.TRIANGLES);else if(N.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*bt()),N.isLineSegments?it.setMode(A.LINES):N.isLineLoop?it.setMode(A.LINE_LOOP):it.setMode(A.LINE_STRIP)}else N.isPoints?it.setMode(A.POINTS):N.isSprite&&it.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,ut=N._multiDrawCounts,je=N._multiDrawCount,It=me?b.get(me).bytesPerElement:1,Zn=Se.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<je;Ut++)Zn.setValue(A,"_gl_DrawID",Ut),it.render(Pe[Ut]/It,ut[Ut])}else if(N.isInstancedMesh)it.renderInstances(Xe,ft,N.count);else if(z.isInstancedBufferGeometry){const Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ut=Math.min(z.instanceCount,Pe);it.renderInstances(Xe,ft,ut)}else it.render(Xe,ft)};function st(v,U,z){v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=Dt,v.needsUpdate=!0,er(v,U,z),v.side=Ln,v.needsUpdate=!0,er(v,U,z),v.side=_n):er(v,U,z)}this.compile=function(v,U,z=null){z===null&&(z=v),d=Te.get(z),d.init(U),w.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),v!==z&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const H=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ve=te[de];st(ve,z,N),H.add(ve)}else st(te,z,N),H.add(te)}),d=w.pop(),H},this.compileAsync=function(v,U,z=null){const H=this.compile(v,U,z);return new Promise(N=>{function te(){if(H.forEach(function(de){Se.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){N(v);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Je=null;function hn(v){Je&&Je(v)}function en(){Nn.stop()}function ka(){Nn.start()}const Nn=new Fl;Nn.setAnimationLoop(hn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(v){Je=v,re.setAnimationLoop(v),v===null?Nn.stop():Nn.start()},re.addEventListener("sessionstart",en),re.addEventListener("sessionend",ka),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,U,O),d=Te.get(v,w.length),d.init(U),w.push(d),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(Q,on,U.reversedDepth),K=this.localClippingEnabled,Ze=oe.init(this.clippingPlanes,K),m=W.get(v,T.length),m.init(),T.push(m),re.enabled===!0&&re.isPresenting===!0){const te=E.xr.getDepthSensingMesh();te!==null&&Gr(te,U,-1/0,E.sortObjects)}Gr(v,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(he,pe),Ye=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ye&&Ee.addToRenderList(m,v),this.info.render.frame++,Ze===!0&&oe.beginShadows();const z=d.state.shadowsArray;ye.render(z,v,U),Ze===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const te=U.cameras;if(N.length>0)for(let de=0,ve=te.length;de<ve;de++){const me=te[de];Ha(H,N,v,me)}Ye&&Ee.render(v);for(let de=0,ve=te.length;de<ve;de++){const me=te[de];za(m,v,me,me.viewport)}}else N.length>0&&Ha(H,N,v,U),Ye&&Ee.render(v),za(m,v,U);O!==null&&I===0&&(He.updateMultisampleRenderTarget(O),He.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(E,v,U),ue.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(d=w[w.length-1],Ze===!0&&oe.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Gr(v,U,z,H){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||lt.intersectsSprite(v)){H&&Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Q);const de=B.update(v),ve=v.material;ve.visible&&m.push(v,de,ve,z,Ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||lt.intersectsObject(v))){const de=B.update(v),ve=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ne.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ne.copy(de.boundingSphere.center)),Ne.applyMatrix4(v.matrixWorld).applyMatrix4(Q)),Array.isArray(ve)){const me=de.groups;for(let Le=0,Ue=me.length;Le<Ue;Le++){const Re=me[Le],Xe=ve[Re.materialIndex];Xe&&Xe.visible&&m.push(v,de,Xe,z,Ne.z,Re)}}else ve.visible&&m.push(v,de,ve,z,Ne.z,null)}}const te=v.children;for(let de=0,ve=te.length;de<ve;de++)Gr(te[de],U,z,H)}function za(v,U,z,H){const N=v.opaque,te=v.transmissive,de=v.transparent;d.setupLightsView(z),Ze===!0&&oe.setGlobalState(E.clippingPlanes,z),H&&Me.viewport(D.copy(H)),N.length>0&&Qi(N,U,z),te.length>0&&Qi(te,U,z),de.length>0&&Qi(de,U,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ha(v,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Dn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ki:ln,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=d.state.transmissionRenderTarget[H.id],de=H.viewport||D;te.setSize(de.z*E.transmissionResolutionScale,de.w*E.transmissionResolutionScale);const ve=E.getRenderTarget(),me=E.getActiveCubeFace(),Le=E.getActiveMipmapLevel();E.setRenderTarget(te),E.getClearColor(X),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),Ye&&Ee.render(z);const Ue=E.toneMapping;E.toneMapping=Cn;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),Ze===!0&&oe.setGlobalState(E.clippingPlanes,H),Qi(v,z,H),He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let et=0,ft=U.length;et<ft;et++){const ot=U[et],it=ot.object,Pe=ot.geometry,ut=ot.material,je=ot.group;if(ut.side===_n&&it.layers.test(H.layers)){const It=ut.side;ut.side=Dt,ut.needsUpdate=!0,Va(it,z,H,Pe,ut,je),ut.side=It,ut.needsUpdate=!0,Xe=!0}}Xe===!0&&(He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te))}E.setRenderTarget(ve,me,Le),E.setClearColor(X,j),Re!==void 0&&(H.viewport=Re),E.toneMapping=Ue}function Qi(v,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=v.length;N<te;N++){const de=v[N],ve=de.object,me=de.geometry,Le=de.group;let Ue=de.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),ve.layers.test(z.layers)&&Va(ve,U,z,me,Ue,Le)}}function Va(v,U,z,H,N,te){v.onBeforeRender(E,U,z,H,N,te),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(E,U,z,H,v,te),N.transparent===!0&&N.side===_n&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,E.renderBufferDirect(z,U,H,N,v,te),N.side=Ln,N.needsUpdate=!0,E.renderBufferDirect(z,U,H,N,v,te),N.side=_n):E.renderBufferDirect(z,U,H,N,v,te),v.onAfterRender(E,U,z,H,N,te)}function er(v,U,z){U.isScene!==!0&&(U=we);const H=Se.get(v),N=d.state.lights,te=d.state.shadowsArray,de=N.state.version,ve=Y.getParameters(v,N.state,te,U,z),me=Y.getProgramCacheKey(ve);let Le=H.programs;H.environment=v.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(v.isMeshStandardMaterial?mt:St).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Le===void 0&&(v.addEventListener("dispose",Z),Le=new Map,H.programs=Le);let Ue=Le.get(me);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===de)return Wa(v,ve),Ue}else ve.uniforms=Y.getUniforms(v),v.onBeforeCompile(ve,E),Ue=Y.acquireProgram(ve,me),Le.set(me,Ue),H.uniforms=ve.uniforms;const Re=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Wa(v,ve),H.needsLights=$l(v),H.lightsStateVersion=de,H.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Ga(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Lr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Wa(v,U){const z=Se.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Wl(v,U,z,H,N){U.isScene!==!0&&(U=we),He.resetTextureUnits();const te=U.fog,de=H.isMeshStandardMaterial?U.environment:null,ve=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ti,me=(H.isMeshStandardMaterial?mt:St).get(H.envMap||de),Le=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,et=!!z.morphAttributes.color;let ft=Cn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ft=E.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=ot!==void 0?ot.length:0,Pe=Se.get(H),ut=d.state.lights;if(Ze===!0&&(K===!0||v!==M)){const Rt=v===M&&H.id===S;oe.setState(H,v,Rt)}let je=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ut.state.version||Pe.outputColorSpace!==ve||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==me||H.fog===!0&&Pe.fog!==te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==oe.numPlanes||Pe.numIntersection!==oe.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ue||Pe.morphTargets!==Re||Pe.morphNormals!==Xe||Pe.morphColors!==et||Pe.toneMapping!==ft||Pe.morphTargetsCount!==it)&&(je=!0):(je=!0,Pe.__version=H.version);let It=Pe.currentProgram;je===!0&&(It=er(H,U,N));let Zn=!1,Ut=!1,Di=!1;const dt=It.getUniforms(),zt=Pe.uniforms;if(Me.useProgram(It.program)&&(Zn=!0,Ut=!0,Di=!0),H.id!==S&&(S=H.id,Ut=!0),Zn||M!==v){Me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),dt.setValue(A,"projectionMatrix",v.projectionMatrix),dt.setValue(A,"viewMatrix",v.matrixWorldInverse);const Lt=dt.map.cameraPosition;Lt!==void 0&&Lt.setValue(A,_e.setFromMatrixPosition(v.matrixWorld)),Ie.logarithmicDepthBuffer&&dt.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ut=!0,Di=!0)}if(N.isSkinnedMesh){dt.setOptional(A,N,"bindMatrix"),dt.setOptional(A,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(A,"boneTexture",Rt.boneTexture,He))}N.isBatchedMesh&&(dt.setOptional(A,N,"batchingTexture"),dt.setValue(A,"batchingTexture",N._matricesTexture,He),dt.setOptional(A,N,"batchingIdTexture"),dt.setValue(A,"batchingIdTexture",N._indirectTexture,He),dt.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(A,"batchingColorTexture",N._colorsTexture,He));const Ht=z.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&ie.update(N,z,It),(Ut||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,dt.setValue(A,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zt.envMap.value=me,zt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(zt.envMapIntensity.value=U.environmentIntensity),Ut&&(dt.setValue(A,"toneMappingExposure",E.toneMappingExposure),Pe.needsLights&&Xl(zt,Di),te&&H.fog===!0&&J.refreshFogUniforms(zt,te),J.refreshMaterialUniforms(zt,H,G,ae,d.state.transmissionRenderTarget[v.id]),Lr.upload(A,Ga(Pe),zt,He)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Lr.upload(A,Ga(Pe),zt,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(A,"center",N.center),dt.setValue(A,"modelViewMatrix",N.modelViewMatrix),dt.setValue(A,"normalMatrix",N.normalMatrix),dt.setValue(A,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Rt=H.uniformsGroups;for(let Lt=0,Wr=Rt.length;Lt<Wr;Lt++){const Fn=Rt[Lt];Be.update(Fn,It),Be.bind(Fn,It)}}return It}function Xl(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function $l(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,U,z){const H=Se.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(v.texture).__webglTexture=U,Se.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const z=Se.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const ql=A.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){O=v,R=U,I=z;let H=!0,N=null,te=!1,de=!1;if(v){const me=Se.get(v);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(me.__hasExternalTextures)He.rebindTextures(v,Se.get(v.texture).__webglTexture,Se.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Re=v.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&Se.has(Re)&&(v.width!==Re.image.width||v.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}const Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const Ue=Se.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][z]:N=Ue[U],te=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?N=Se.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[z]:N=Ue,D.copy(v.viewport),k.copy(v.scissor),V=v.scissorTest}else D.copy(Ae).multiplyScalar(G).floor(),k.copy(We).multiplyScalar(G).floor(),V=rt;if(z!==0&&(N=ql),Me.bindFramebuffer(A.FRAMEBUFFER,N)&&H&&Me.drawBuffers(v,N),Me.viewport(D),Me.scissor(k),Me.setScissorTest(V),te){const me=Se.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,z)}else if(de){const me=U;for(let Le=0;Le<v.textures.length;Le++){const Ue=Se.get(v.textures[Le]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,z,me)}}else if(v!==null&&z!==0){const me=Se.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,me.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(v,U,z,H,N,te,de,ve=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Me.bindFramebuffer(A.FRAMEBUFFER,me);try{const Le=v.textures[ve],Ue=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-H&&z>=0&&z<=v.height-N&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),A.readPixels(U,z,H,N,be.convert(Ue),be.convert(Re),te))}finally{const Le=O!==null?Se.get(O).__webglFramebuffer:null;Me.bindFramebuffer(A.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,H,N,te,de,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(U>=0&&U<=v.width-H&&z>=0&&z<=v.height-N){Me.bindFramebuffer(A.FRAMEBUFFER,me);const Le=v.textures[ve],Ue=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.bufferData(A.PIXEL_PACK_BUFFER,te.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),A.readPixels(U,z,H,N,be.convert(Ue),be.convert(Re),0);const et=O!==null?Se.get(O).__webglFramebuffer:null;Me.bindFramebuffer(A.FRAMEBUFFER,et);const ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Kc(A,ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,te),A.deleteBuffer(Xe),A.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,z=0){const H=Math.pow(2,-z),N=Math.floor(v.image.width*H),te=Math.floor(v.image.height*H),de=U!==null?U.x:0,ve=U!==null?U.y:0;He.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,de,ve,N,te),Me.unbindTexture()};const Yl=A.createFramebuffer(),jl=A.createFramebuffer();this.copyTextureToTexture=function(v,U,z=null,H=null,N=0,te=null){te===null&&(N!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let de,ve,me,Le,Ue,Re,Xe,et,ft;const ot=v.isCompressedTexture?v.mipmaps[te]:v.image;if(z!==null)de=z.max.x-z.min.x,ve=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Ue=z.min.y,Re=z.isBox3?z.min.z:0;else{const Ht=Math.pow(2,-N);de=Math.floor(ot.width*Ht),ve=Math.floor(ot.height*Ht),v.isDataArrayTexture?me=ot.depth:v.isData3DTexture?me=Math.floor(ot.depth*Ht):me=1,Le=0,Ue=0,Re=0}H!==null?(Xe=H.x,et=H.y,ft=H.z):(Xe=0,et=0,ft=0);const it=be.convert(U.format),Pe=be.convert(U.type);let ut;U.isData3DTexture?(He.setTexture3D(U,0),ut=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),ut=A.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),ut=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const je=A.getParameter(A.UNPACK_ROW_LENGTH),It=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Zn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ut=A.getParameter(A.UNPACK_SKIP_ROWS),Di=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ot.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ot.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Le),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Re);const dt=v.isDataArrayTexture||v.isData3DTexture,zt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const Ht=Se.get(v),Rt=Se.get(U),Lt=Se.get(Ht.__renderTarget),Wr=Se.get(Rt.__renderTarget);Me.bindFramebuffer(A.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let Fn=0;Fn<me;Fn++)dt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Se.get(v).__webglTexture,N,Re+Fn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,te,ft+Fn)),A.blitFramebuffer(Le,Ue,de,ve,Xe,et,de,ve,A.DEPTH_BUFFER_BIT,A.NEAREST);Me.bindFramebuffer(A.READ_FRAMEBUFFER,null),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Se.has(v)){const Ht=Se.get(v),Rt=Se.get(U);Me.bindFramebuffer(A.READ_FRAMEBUFFER,Yl),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,jl);for(let Lt=0;Lt<me;Lt++)dt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ht.__webglTexture,N,Re+Lt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ht.__webglTexture,N),zt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rt.__webglTexture,te,ft+Lt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Rt.__webglTexture,te),N!==0?A.blitFramebuffer(Le,Ue,de,ve,Xe,et,de,ve,A.COLOR_BUFFER_BIT,A.NEAREST):zt?A.copyTexSubImage3D(ut,te,Xe,et,ft+Lt,Le,Ue,de,ve):A.copyTexSubImage2D(ut,te,Xe,et,Le,Ue,de,ve);Me.bindFramebuffer(A.READ_FRAMEBUFFER,null),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else zt?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(ut,te,Xe,et,ft,de,ve,me,it,Pe,ot.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(ut,te,Xe,et,ft,de,ve,me,it,ot.data):A.texSubImage3D(ut,te,Xe,et,ft,de,ve,me,it,Pe,ot):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,te,Xe,et,de,ve,it,Pe,ot.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,te,Xe,et,ot.width,ot.height,it,ot.data):A.texSubImage2D(A.TEXTURE_2D,te,Xe,et,de,ve,it,Pe,ot);A.pixelStorei(A.UNPACK_ROW_LENGTH,je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,It),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Zn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ut),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Di),te===0&&U.generateMipmaps&&A.generateMipmap(ut),Me.unbindTexture()},this.initRenderTarget=function(v){Se.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){R=0,I=0,O=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const y={grass:"#71987a",ground:"#c8c6b0",wall:"#e6dfcb",brick:"#b97059",wood:"#ae9476",blue:"#7e969e",green:"#234c42",yellow:"#e5bd4a",hair:"#704a35",skin:"#d8a783",white:"#f4efdd",dark:"#3d4c4e",orange:"#e8904b"},Ce=(r,e,t,n,i=[0,0,0])=>({shape:r,p:e,s:t,color:n,r:i}),P=(r,e,t,n=[0,0,0])=>Ce("box",r,e,t,n),Ge=(r,e,t,n=[0,0,0])=>Ce("cyl",r,e,t,n);function rn(r){switch(r){case"lunch_cart":return[P([0,.8,0],[1.4,.15,.8],y.blue),P([0,.4,0],[1.25,.7,.65],y.white),...[-.45,0,.45].map((e,t)=>Ge([e,.93,0],[.32,.18,.32],[y.white,y.green,y.orange][t])),P([0,1,.32],[1.1,.025,.12],y.yellow),...[-.5,.5].map(e=>Ge([e,.08,0],[.15,.16,.15],y.dark))];case"mop":return[Ge([0,.8,0],[.065,1.5,.065],y.blue),P([0,.08,0],[.6,.15,.27],y.white)];case"orange":return[Ce("sphere",[0,.12,0],[.25,.25,.25],y.orange),P([0,.25,0],[.03,.06,.03],y.green)];case"milk_carton":return[P([0,.18,0],[.22,.36,.22],y.white),P([0,.22,.115],[.17,.12,.02],y.blue),P([0,.39,0],[.22,.06,.12],y.white)];case"event_spinning_top":return rn("spinning_top");case"milk_fresh":case"milk_sour":case"milk_stinky":return[Ge([0,0,0],[1.8,.025,1.3],r==="milk_stinky"?"#a6b88c":"#ffffff"),...r==="milk_fresh"?[]:[0,1].map(e=>P([e*.3-.15,.3+e*.15,0],[.065,.4,.065],y.green,[0,0,.3]))];case"broken_broom_parts":return[Ge([0,.05,0],[.06,.65,.06],y.wood,[0,0,1.2]),P([.3,.05,0],[.25,.08,.2],y.yellow)];case"student_phone_win":return[...rn("student_phone"),P([0,.05,.05],[.15,.02,.01],y.green),P([0,.07,.05],[.02,.18,.01],y.green)];case"student_phone":return[P([0,0,0],[.3,.46,.06],y.dark),P([0,.01,.03],[.24,.34,.01],y.blue),P([0,.04,.04],[.1,.07,.01],y.yellow)];case"restricted_item_evidence":return[P([0,0,0],[.12,.16,.12],y.dark),P([0,.09,0],[.05,.03,.05],y.white)];case"life_smoke":return[Ce("sphere",[0,0,0],[.23,.25,.23],"#ced5cb")];case"stomach_icon":return[Ce("sphere",[0,0,0],[.35,.28,.08],y.yellow),P([0,0,.05],[.04,.13,.02],y.dark)];case"dog_soft_ball":case"dog_toy":return[Ce("sphere",[0,.16,0],[.32,.32,.32],y.orange),P([0,.16,0],[.33,.05,.05],y.blue)];case"dog_mat":return[P([0,.025,0],[.9,.05,.65],y.blue)];case"dog_lion_bowl":case"dog_water_bowl":return[Ge([0,.08,0],[.4,.16,.4],r==="dog_lion_bowl"?y.orange:y.blue),Ge([0,.165,0],[.32,.02,.32],y.white)];case"meeting_bell":return[Ce("cone",[0,.22,0],[.3,.32,.3],y.yellow),Ge([0,.36,0],[.06,.14,.06],y.dark)];case"meeting_gavel":return[Ge([0,.18,0],[.05,.35,.05],y.wood),P([0,.36,0],[.3,.13,.13],y.wood)];case"meeting_stamp":return[P([0,.04,0],[.22,.08,.18],y.blue),Ge([0,.19,0],[.1,.24,.1],y.hair)];case"meeting_vote":return[P([0,.19,0],[.32,.38,.04],y.green)];case"meeting_remote":case"meeting_aircon":case"meeting_music":return[P([0,.05,0],[.13,.08,.3],y.dark),P([0,.096,-.04],[.06,.02,.04],y.yellow)];case"wireless_microphone":return[Ge([0,.23,0],[.12,.46,.12],y.dark),Ge([0,.46,0],[.16,.055,.16],y.yellow),Ce("sphere",[0,.57,0],[.24,.25,.24],y.blue),P([0,.56,.115],[.16,.025,.018],y.dark),P([0,.56,-.115],[.16,.025,.018],y.dark),P([.115,.56,0],[.018,.025,.16],y.dark)];case"basketball":return[Ce("sphere",[0,.25,0],[.5,.5,.5],y.orange),P([0,.25,0],[.51,.035,.035],y.dark),P([0,.25,0],[.035,.035,.51],y.dark)];case"traffic_cone":return[Ce("cone",[0,.4,0],[.6,.8,.6],y.orange),P([0,.04,0],[.75,.08,.75],y.orange),Ge([0,.3,0],[.48,.12,.48],y.white)];case"broom":return[Ge([0,.8,0],[.065,1.5,.065],y.wood),P([0,.1,0],[.5,.22,.15],y.yellow)];case"toy_mallet":return[Ge([0,.5,0],[.08,1,.08],y.wood),P([0,1,0],[.65,.32,.35],"#bd6d77")];case"drumstick":return[Ge([0,.35,0],[.045,.7,.045],y.wood),Ce("sphere",[0,.72,0],[.08,.09,.08],y.wood)];case"recorder":return[Ge([0,.3,0],[.09,.6,.09],y.white),P([0,.42,.055],[.025,.26,.025],y.dark)];case"spinning_top":return[Ce("cone",[0,.18,0],[.32,.3,.32],"#bc7084",[Math.PI,0,0]),Ge([0,.35,0],[.08,.16,.08],y.yellow)];case"trophy":return[P([0,.04,0],[.45,.08,.32],y.wood),Ge([0,.2,0],[.1,.3,.1],y.yellow),Ce("cone",[0,.5,0],[.45,.4,.45],y.yellow),Ce("torus",[0,.5,0],[.5,.5,.5],y.yellow)];case"principal_wig":return[Ce("sphere",[0,.1,0],[.5,.25,.45],y.hair),P([0,0,-.05],[.45,.18,.32],y.hair)];case"principal_glasses":return[Ce("torus",[-.1,.1,0],[.17,.17,.17],y.dark),Ce("torus",[.1,.1,0],[.17,.17,.17],y.dark),P([0,.1,0],[.09,.025,.025],y.dark)];case"wall_clock":return[Ge([0,.35,0],[.62,.06,.62],y.white,[Math.PI/2,0,0]),P([0,.42,.05],[.025,.2,.025],y.dark),P([.09,.35,.05],[.2,.025,.025],y.dark)];case"laptop":return[P([0,.05,0],[.6,.07,.4],y.blue),P([0,.24,-.18],[.6,.4,.035],y.dark),P([0,.24,-.155],[.5,.28,.012],y.green)];case"piano":return[P([0,.75,0],[2,.85,.8],y.dark),P([0,.75,.55],[1.8,.1,.45],y.white),P([0,1.22,-.1],[2.1,.08,.8],y.dark),...[-.8,.8].map(e=>P([e,.35,0],[.14,.7,.14],y.dark)),...Array.from({length:10},(e,t)=>P([-.78+t*.17,.82,.47],[.05,.06,.18],y.dark))];case"music_stand":return[Ge([0,.65,0],[.05,1.2,.05],y.dark),P([0,1.2,0],[.6,.4,.035],y.dark,[-.25,0,0]),P([0,.04,0],[.55,.05,.06],y.dark),P([0,.04,0],[.06,.05,.55],y.dark)];case"coffee_machine":return[P([0,.4,0],[.65,.8,.5],y.dark),P([0,.56,.26],[.42,.2,.03],y.blue),P([0,.1,.3],[.6,.06,.3],y.dark),Ge([.2,.58,.3],[.08,.08,.08],y.yellow,[Math.PI/2,0,0])];case"coffee_cup":return[Ge([0,.13,0],[.22,.26,.22],y.white),Ce("torus",[.14,.12,0],[.16,.16,.16],y.white),Ge([0,.265,0],[.18,.012,.18],y.hair)];case"office_chair":return[P([0,.5,0],[.7,.15,.65],y.blue),P([0,.85,-.27],[.7,.65,.12],y.blue),Ge([0,.25,0],[.06,.5,.06],y.dark),P([0,.05,0],[.9,.05,.06],y.dark),P([0,.05,0],[.06,.05,.9],y.dark)];case"trash_bin":return[Ge([0,.4,0],[.65,.8,.65],y.blue),Ge([0,.82,0],[.55,.04,.55],y.dark)];case"badminton_racket":case"table_tennis_racket":return[Ge([0,.3,0],[.06,.6,.06],y.wood),Ce(r==="badminton_racket"?"torus":"sphere",[0,.7,0],r==="badminton_racket"?[.48,.6,.15]:[.32,.4,.06],r==="badminton_racket"?y.white:y.brick),P([0,.7,0],[.015,.4,.02],y.white)];case"triangle":return[P([-.15,.3,0],[.035,.5,.035],y.blue,[0,0,-.55]),P([.15,.3,0],[.035,.5,.035],y.blue,[0,0,.55]),P([0,.08,0],[.5,.035,.035],y.blue)];case"castanets":return[Ce("sphere",[-.1,.08,0],[.18,.1,.2],y.hair),Ce("sphere",[.1,.08,0],[.18,.1,.2],y.hair)];case"stopwatch":return[Ge([0,.15,0],[.22,.06,.22],y.blue,[Math.PI/2,0,0]),P([0,.28,0],[.065,.065,.065],y.dark)];case"chalk_eraser":return[P([0,.06,0],[.3,.12,.14],y.wood),P([0,.13,0],[.3,.04,.14],y.dark)];case"soft_parcel":case"cardboard_box":return[P([0,.23,0],[.55,.46,.45],r==="soft_parcel"?"#ba7785":y.wood),P([0,.465,0],[.12,.01,.45],y.white)];default:{let e={folder:y.brick,textbook:y.blue,exam_a:"#b8d7cd",exam_b:"#ead893"};return[P([0,.035,0],[.42,.07,.32],e[r]||y.white),P([-.1,.08,0],[.18,.01,.2],r==="folder"?y.white:y.blue)]}}}function al(r,e=!1){const t=[P([0,.8,0],[1.6,.14,.85],y.wood),...[-.65,.65].flatMap(n=>[-.28,.28].map(i=>P([n,.4,i],[.09,.8,.09],y.dark)))];switch(r){case"tray":return[P([0,.74,0],[.6,.08,.4],y.blue),P([0,.8,0],[.48,.04,.3],y.white)];case"table":case"desk":return t;case"bench":return[P([0,.5,0],[1.6,.12,.55],y.wood),P([0,.85,-.28],[1.6,.55,.08],y.wood),P([-.6,.25,0],[.1,.5,.45],y.dark),P([.6,.25,0],[.1,.5,.45],y.dark)];case"chair":return rn("office_chair");case"planter":return[Ge([0,.3,0],[.6,.6,.6],y.brick),Ce("sphere",[0,.7,0],[.6,.7,.6],y.grass)];case"dummy":return[Ge([0,.6,0],[.1,1.2,.1],y.wood),Ce("sphere",[0,1.2,0],[.45,.45,.45],y.yellow),P([0,.8,0],[.6,.5,.22],y.brick),P([0,.03,0],[.7,.06,.7],y.wood)];case"podium":return[P([0,.5,0],[1.4,1,.8],y.wood),P([0,1,0],[1.55,.09,.9],y.green)];case"shelter":return[P([0,1,0],[1.3,2,1.5],y.blue),P([0,1,.77],[.55,1.8,.03],y.dark)];case"bed":return Cs({type:"medical_bed",w:1.5,d:2.6,h:.65});case"cabinet":return[P([0,.75,0],[1.2,1.5,.6],y.white),P([0,1,.31],[.3,.09,.02],y.brick),P([0,1,.31],[.09,.3,.02],y.brick)];case"stall":return[...t,P([0,2,0],[2.8,.15,1.5],y.brick),P([-1.2,1,0],[.09,2,.09],y.wood),P([1.2,1,0],[.09,2,.09],y.wood)];default:return t}}function Ts(r,e,t=!1,n=[]){const i=["Walk","Flee","Chase","Tattle","SoundInvestigate","Gather","Seat","Leave","ReturnItem","ScienceWalk","LifeWalk","LifeEscort","LifePatrol","LifeInspect","walk","run","dodge"].includes(r.state||r.action),s=r.dogControl?.remaining>0?"DogHeld":r.state||r.action,a=i?Math.sin(e*(s==="run"?14:9))*.45:0;let o=y.skin,h=t?y.yellow:r.role==="student"?y.white:r.role==="staff"?y.blue:y.brick;r.role==="staff"&&(h={nurse:y.white,shop_aunt:y.brick,guard_uncle:y.blue,pe_teacher:y.green,principal:y.dark,dean:"#626c82",science_teacher:y.white}[r.type]||h),(r.role==="parent"||r.role==="visitor")&&(h={yoga:"#ad83a8",sports:"#547b92",runner:"#8b9b54",neat:"#e6dfcb",armored:"#717b81",drama:"#bc7084",gardener:"#829b64",courier:"#ae9476",photographer:"#465a67",whistle:"#bd8e55",duo:"#7e969e"}[r.type]||h);let c=[Ce("sphere",[0,1.48,0],[.42,.46,.4],o),P([0,1.01,0],[.42,.56,.27],h)];t?(c.push(Ce("cyl",[0,.53,0],[.69,.81,.6],y.yellow),P([-.11,1.26,.16],[.12,.14,.045],y.white,[0,0,-.3]),P([.11,1.26,.16],[.12,.14,.045],y.white,[0,0,.3])),c.push(Ce("sphere",[0,1.64,-.02],[.46,.28,.44],y.hair),P([-.18,1.48,-.01],[.12,.36,.3],y.hair),P([.18,1.48,-.01],[.12,.36,.3],y.hair),P([0,1.46,-.18],[.4,.34,.09],y.hair))):(r.type!=="science_teacher"&&c.push(P([0,1.65,-.03],[.44,.16,.35],r.type==="principal"?"#726250":y.hair)),r.role!=="student"&&c.push(P([0,.72,0],[.46,.1,.27],y.dark))),r.type==="patrol_teacher"&&c.push(P([0,1.04,.145],[.34,.48,.035],"#31445b"),P([.3,.9,.17],[.25,.35,.04],y.wood)),r.type==="science_teacher"&&c.push(P([0,1.47,.05],[.43,.3,.32],o),P([-.1,1.57,.215],[.14,.04,.025],y.dark),P([.1,1.57,.215],[.14,.04,.025],y.dark),P([0,1.05,0],[.6,.5,.28],y.white),P([-.18,1.14,.18],[.05,.16,.025],y.blue),...rn("principal_glasses").map(l=>({...l,p:[l.p[0]*1.25,l.p[1]+1.4,l.p[2]+.24]})));let u=n.includes("shoes_red")?y.brick:n.includes("shoes_teal")?y.green:y.hair;for(let l of[-1,1]){let f=l*.14;c.push(P([f,t?.18:.38,Math.sin(a*l)*.13],[.13,t?.22:.6,.14],t?o:y.dark,[a*l,0,0]),P([f,.065,.07+Math.sin(a*l)*.18],[.18,.13,.29],u));let p=-a*l;["Attack","attack","conduct","LifeSwing"].includes(s)&&(p=l===1?-1.25-Math.sin(e*20)*.25:0),["Call","Film","Surprise","Gate","roll","teach","piano","play","LifePhone","LifeHide","LifeThrow","LifePoint","LifeCover","LifeUrgent","LifeWord","LifeLate","eat"].includes(s)&&(p=-1.2),s==="Clean"&&(p=-.7),["pet","ScienceFeed"].includes(s)&&(p=-1.1),["throw","wear"].includes(s)&&(p=l===1?-2:0),["pickup","drop","leaveHide"].includes(s)&&(p=-.5),s==="idle"&&Math.floor(e)%18===0&&(p=l===1?-1.1:0),c.push(P([l*.31,1.01,Math.sin(p)*-.15],[.14,.5,.15],h,[p,0,l*.08]),Ce("sphere",[l*.32,.76,Math.sin(p)*-.3],[.14,.14,.14],o))}if(s==="LifeLate"&&c.push(P([-.23,1.5,0],[.08,.2,.14],y.dark),P([.23,1.5,0],[.08,.2,.14],y.dark),P([0,1.73,0],[.46,.06,.07],y.dark)),r.lifeOdor&&c.push(P([-.09,1.54,.21],[.12,.025,.025],y.dark,[0,0,-.25]),P([.09,1.54,.21],[.12,.025,.025],y.dark,[0,0,.25])),c.push(P([-.09,1.49,.196],[.035,.035,.012],y.dark),P([.09,1.49,.196],[.035,.035,.012],y.dark)),(s==="Film"||s==="Call")&&c.push(P([.32,1.43,.18],[.1,.17,.035],y.dark)),r.type==="nurse"&&c.push(P([0,1.73,0],[.36,.1,.32],y.white),P([0,1.74,.17],[.13,.025,.015],y.brick),P([0,1.74,.17],[.025,.08,.015],y.brick)),r.type==="guard_uncle"&&c.push(P([0,1.73,0],[.5,.1,.48],y.blue)),r.type==="shop_aunt"&&c.push(P([0,.87,.17],[.35,.4,.03],y.white)),r.type==="principal"&&c.push(P([0,1.2,.15],[.05,.28,.025],y.brick)),r.role==="parent"||r.role==="visitor")switch(r.type){case"spatula":c.push(Ge([.37,.85,.2],[.05,.5,.05],y.dark),P([.37,1.12,.2],[.18,.2,.04],y.blue));break;case"briefcase":c.push(P([.43,.55,0],[.35,.3,.12],y.hair));break;case"shopping_bag":c.push(P([.4,.6,0],[.35,.45,.22],y.green));break;case"umbrella":c.push(Ce("cone",[.35,1.8,.1],[1,.25,1],y.blue),Ge([.35,1.1,.1],[.03,1.4,.03],y.wood));break;case"gardener":c.push(Ge([.4,.9,0],[.05,1.6,.05],y.wood),P([.4,.12,0],[.45,.24,.13],y.yellow));break;case"yoga":c.push(P([0,1.64,.17],[.43,.06,.04],"#dbb4d7"));break;case"courier":c.push(P([0,1.71,0],[.5,.08,.5],y.yellow),P([.38,.7,.1],[.4,.3,.3],y.wood));break;case"photographer":c.push(P([0,1.18,.2],[.25,.16,.13],y.dark),Ge([0,1.18,.29],[.1,.08,.1],y.blue,[Math.PI/2,0,0]));break;case"whistle":c.push(Ce("sphere",[0,1.12,.2],[.09,.09,.09],y.yellow));break;case"camper":c.push(P([0,1.72,0],[.7,.05,.65],y.wood));break;case"runner":case"sports":c.push(P([0,1.62,.2],[.43,.055,.025],y.white));break;case"neat":c.push(P([0,.93,.155],[.34,.45,.025],y.white));break;case"armored":c.push(P([0,1.05,.16],[.45,.45,.07],y.dark),P([-.14,.35,.1],[.2,.18,.08],y.blue),P([.14,.35,.1],[.2,.18,.08],y.blue));break;case"drama":c.push(P([0,1.1,-.23],[.5,.9,.05],"#844968"));break;case"pta_leader":c.push(P([0,1.1,.16],[.42,.12,.035],y.yellow));break;case"duo":c.push(P([0,1.65,.18],[.43,.06,.025],y.yellow));break;case"protective":c.push(P([.4,.7,0],[.2,.3,.2],y.yellow));break;case"nagging":c.push(P([0,1.71,0],[.2,.12,.2],y.hair));break}return n.some(l=>l.startsWith("badge"))&&c.push(Ce("sphere",[-.13,1.18,.16],[.08,.08,.035],y.green)),n.some(l=>l.startsWith("glasses"))&&c.push(...rn("principal_glasses").map(l=>({...l,p:[l.p[0],l.p[1]+1.38,l.p[2]+.22],color:n.includes("glasses_blue")?y.blue:l.color}))),["pet","ScienceFeed"].includes(s)&&(c=c.map(l=>({...l,p:[l.p[0],l.p[1]*.62,l.p[2]+l.p[1]*.18]}))),["pickup","drop"].includes(s)&&(c=c.map(l=>({...l,p:[l.p[0],l.p[1]*.85,l.p[2]+l.p[1]*.12]}))),["hit","ScienceHit"].includes(s)&&(c=c.map(l=>({...l,p:[l.p[0],l.p[1]*.8,l.p[2]-.1]}))),["DogHeld","Following","Hot","Recording","Protecting","Coordinating","Voting","Speaking"].includes(s)&&(c=c.map(l=>({...l,r:[(l.r?.[0]||0)+Math.sin(e*5)*.08,l.r?.[1]||0,l.r?.[2]||0]}))),(s==="Sleeping"||s==="Seated")&&(c=c.map(l=>({...l,p:[l.p[0],l.p[1]*.78,l.p[2]]}))),(r.hp===0||s==="Recover")&&(c=c.map(l=>({...l,p:[l.p[0],l.p[1]*.4,l.p[2]+l.p[1]*.15]}))),c}function ol(r,e){const t=r.id==="dog_mani",n=t?"#f4f0e6":"#b77540",i=t?"#e2ded1":"#f3d7ac",s=["Rest","Idle","Petting"].includes(r.state),a=["Roam","Greet","Following","Fetching","Returning","AssistApproach","Relocating","Feeding"].includes(r.state),o=Math.sin(e*(r.state==="Petting"?15:7))*.35,h=s?.3:.42,c=[P([0,h,-.03],[.4,.32,.64],n),Ce("sphere",[0,h+.14,.33],[.34,.34,.32],n),Ce("cone",[0,h+.08,.56],[.23,.23,.3],i,[Math.PI/2,0,0]),P([0,h+.07,.69],[.09,.07,.05],y.dark),P([-.085,h+.2,.48],[.035,.035,.025],y.dark),P([.085,h+.2,.48],[.035,.035,.025],y.dark),...[-1,1].map(u=>Ce("cone",[u*.12,h+.38,.3],[.15,.23,.14],n)),P([0,h-.03,.2],[.32,.24,.09],i),Ce("torus",[Math.sin(o)*.12,h+.16,-.4],t?[.35,.35,.23]:[.24,.24,.16],n,[0,o,0])];for(const u of[-.14,.14])for(const l of[-.24,.2])c.push(P([u,s?.1:.18,l+(a?Math.sin(e*11+(u*l>0?0:Math.PI))*.08:0)],[.09,s?.16:.32,.1],n));if(t)for(const u of[-.17,0,.17])c.push(Ce("cone",[u,h+.01,.23],[.18,.28,.2],i,[Math.PI,0,u]));return r.state==="Feeding"||r.state==="AssistContact"?c.map(u=>({...u,p:[u.p[0],u.p[1]-(u.p[2]>.25?.12:0),u.p[2]]})):c}class ym{constructor(e,t){this.canvas=e,this.game=t,this.renderer=new Sm({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor("#9cae97"),this.renderer.outputColorSpace=Ot,this.scene.add(new Dh("#fff6de","#a4b6a5",1.6));const n=new Do("#fff3d6",1.7);n.position.set(-20,35,10),this.scene.add(n);const i=new Co({color:"white",flatShading:!0});let s={box:new Pi(1,1,1),cyl:new kr(.43,.5,1,8),sphere:new Na(.5,8,6),cone:new Ua(.5,1,8),torus:new Fa(.4,.055,4,12),disc:new Ia(.5,12)};for(let[a,o]of Object.entries(s)){let h=new Th(o,i,6e3);h.instanceMatrix.setUsage(qc),h.frustumCulled=!1,this.batches.set(a,{mesh:h,count:0,staticCount:0}),this.scene.add(h)}this.geometryCount=Object.keys(s).length,this.resize(),t.listeners.push(a=>{if(a.type==="reset"){this.effects=[];return}if(["CombatResolved","propDamaged","spill","mess","instrument","paperCollected"].includes(a.type)){let o=t.npcs.find(h=>h.id===a.targetId)||t.props.find(h=>h.id===a.data.id)||t.objects.get(a.data.id)||t.player;for(let h=0;h<4;h++)this.effects.length<(t.meeting.running?Math.max(0,12-t.meeting.papers.length-(t.meeting.airMode===2?3:0)):t.profile.settings.quality==="low"?48:96)&&this.effects.push({x:o.x,z:o.z,start:t.time,index:h,type:a.type})}}),window.addEventListener("resize",()=>this.resize())}scene=new Eo;camera=new Fr(-15,15,12,-12,.1,200);renderer;batches=new Map;staticParts=[];dummy=new _t;color=new qe;ray=new Oh;plane=new Tn(new F(0,1,0),0);pointer=new ze;target=new F;lastSession=-1;fps=0;frames=[];calls=0;triangles=0;quality="standard";autoLow=!1;slow=0;fast=0;labels=[];geometryCount=0;ctxLost=!1;alpha=1;effects=[];resize(){let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight,n=e/t,i=sc(e,t,matchMedia("(pointer:coarse)").matches);this.camera.left=-i*n,this.camera.right=i*n,this.camera.top=i,this.camera.bottom=-i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.setDPR()}setDPR(){let e=this.game.profile.settings.quality;this.quality=e==="low"||e==="auto"&&this.autoLow?"low":"standard",this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality==="low"?1:1.5))}add(e,t,n=0,i=1,s=0){for(let a of e){if(a.hidden)continue;let o=a.p[0]*i,h=a.p[1]*i,c=a.p[2]*i,u=Math.cos(n),l=Math.sin(n);this.dummy.position.set(t[0]+o*u+c*l,t[1]+h,t[2]-o*l+c*u),this.dummy.rotation.set((a.r?.[0]||0)+s,n+(a.r?.[1]||0),a.r?.[2]||0),this.dummy.scale.set(a.s[0]*i,a.s[1]*i,a.s[2]*i),this.dummy.updateMatrix();let f=this.batches.get(a.shape);f.count>=6e3||(f.mesh.setMatrixAt(f.count,this.dummy.matrix),f.mesh.setColorAt(f.count,this.color.set(a.color)),f.count++)}}label(e,t,n=2.7,i=.18){let s=document.createElement("canvas");s.width=512,s.height=128;let a=s.getContext("2d");a.fillStyle="#f4efdd",a.fillRect(0,0,512,128),a.fillStyle=y.green,a.font="bold 48px system-ui";const o=Math.min(48,48*460/Math.max(1,a.measureText(e).width));a.font=`bold ${o}px system-ui`,a.textAlign="center",a.fillText(e,256,81);let h=new Ch(s),c=new Dl({map:h,depthTest:!1,depthWrite:!1}),u=new yh(c);u.position.set(t.x,Math.max(i,3),t.z),u.renderOrder=100,u.userData.text=e,u.userData.anchor={x:t.x,z:t.z},u.userData.baseSize=n,u.userData.minPixels=Math.min(270,Math.max(130,e.length*13+24)),u.scale.set(n,n/4,1),this.scene.add(u),this.labels.push(u)}rebuild(){this.effects=[],this.staticParts=[];for(let t of this.labels)this.scene.remove(t),t.material.map?.dispose(),t.material.dispose();this.labels=[];let e=(t,n=[0,0,0])=>this.staticParts.push({parts:t,p:n});if(this.game.meeting.running){e([P([0,-.06,5],[12,.12,10],y.white)]);for(const t of this.game.layout.furniture)this.staticParts.push({parts:Cs(t),p:[t.x,0,t.z],angle:t.angle});for(const t of this.game.layout.signs)this.label(t.text,t,t.size||2.7,t.y||.18);this.lastSession=this.game.session;for(const t of this.batches.values())t.count=0;for(const t of this.staticParts)this.add(t.parts,t.p,t.angle||0);for(const t of this.batches.values())t.staticCount=t.count;return}e([P([0,-.2,0],[64,.35,52],y.grass),P([0,-.03,4],[24,.06,27],y.ground),P([0,-.02,-11],[60,.06,6],y.ground),P([-12,-.02,-1],[4,.06,24],y.ground),P([12,-.02,-1],[4,.06,24],y.ground)]);for(let t of wn){let n={x:(t.x1+t.x2)/2,z:(t.z1+t.z2)/2};if(["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id)&&e([P([n.x,0,n.z],[t.x2-t.x1,.08,t.z2-t.z1],y.white)]),t.id==="playground"){e([P([n.x,.005,n.z],[15,.06,15],y.brick),P([n.x,.05,n.z],[.05,.03,14],y.white),P([n.x,.05,11],[13,.03,.06],y.white),P([n.x,.05,23],[13,.03,.06],y.white)]);for(let i of[-28,-26,-24,-22,-20,-18,-16])e([P([i,.05,19],[.06,.03,8],y.white)])}["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id)||this.label(t.label,{x:n.x,z:t.z1+.9},t.id==="courtyard"?4:3)}e([P([20.5,.025,12],[10,.045,6],y.ground),P([0,.025,22],[14,.045,7],y.ground),P([-18,.075,17],[8,.035,11],"#879f91"),P([-18,.1,17],[7,.015,.04],y.white),P([-18,.1,17],[.04,.015,10],y.white),P([-21.5,.1,17],[.04,.015,10],y.white),P([-14.5,.1,17],[.04,.015,10],y.white)]);for(let t of[-30,30])for(let n of[-20,-8,6,20])e([Ge([t,.8,n],[.35,1.6,.35],y.wood),Ce("sphere",[t,2.2,n],[2.6,3,2.6],y.grass),Ce("sphere",[t+.7,2.7,n],[2.1,2.1,2.1],"#86a486")]);for(let t=-30;t<=30;t+=3)e([P([t,.55,25],[.1,1.1,.1],y.blue)]);e([P([-5,1.5,23],[.35,3,.35],y.brick),P([5,1.5,23],[.35,3,.35],y.brick)]),this.label("東山・虛構校園",{x:0,z:24},4);for(const t of this.game.layout.furniture)this.staticParts.push({parts:Cs(t),p:[t.x,0,t.z],angle:t.angle});for(const t of this.game.layout.signs)this.label(t.text,t,t.size||2.7,t.y||.18);for(const t of wn.filter(n=>["classroom","music_room","staff_room","principal_room","infirmary"].includes(n.id))){const n=t.x2<0?t.x2:t.x1,i=(t.z1+t.z2)/2;t.id!=="infirmary"&&(e([P([n,.85,i-1.65],[.5,1.7,.15],y.blue),P([n,.85,i+1.65],[.5,1.7,.15],y.blue),P([n,1.75,i],[.5,.12,3.45],y.blue)]),this.label(t.label,{x:n+(n<0?.15:-.15),z:i-2.3},2.1,1.55))}for(let t of[-11,-5,5,11])e([P([t,.5,-13.8],[.25,1,.25],y.blue)]);this.lastSession=this.game.session;for(const t of this.batches.values())t.count=0;for(const t of this.staticParts)this.add(t.parts,t.p,t.angle||0);for(const t of this.batches.values())t.staticCount=t.count}position(e,t){let n=this.game.previous.get(e);return!n||Vt(n,t)>4?t:{x:n.x+(t.x-n.x)*this.alpha,z:n.z+(t.z-n.z)*this.alpha}}frame(e,t=!0,n=1){if(this.alpha=n,this.ctxLost)return;this.lastSession!==this.game.session&&this.rebuild();for(let l of this.batches.values())l.count=l.staticCount;let i=this.game;for(const l of this.labels){l.visible=Vt(i.player,l.userData.anchor)<22;const f=Math.max(l.userData.baseSize,l.userData.minPixels*(this.camera.right-this.camera.left)/this.canvas.clientWidth);l.scale.set(f,f/4,1)}!i.meeting.running&&Vt(i.player,{x:0,z:23})>5&&this.add([P([0,2.8,23],[10.3,.5,.45],y.green)],[0,0,0]);for(let l of i.world.walls){let f=vi(i.player)===l.zone,p=i.meeting.running&&(l.id.includes("front")||l.id.includes("right"))||f&&(l.id.endsWith("front")||l.id.endsWith("door-b")||l.id.endsWith("outer")&&l.x>0||l.id==="inf-door-r");this.add([P([0,p?.2:1.25,0],[l.w,p?.4:2.5,l.d],y.wall),P([0,p?.18:.45,0],[l.w+.02,p?.3:.9,l.d+.02],"#aabbb0"),P([0,p?.42:2.55,0],[l.w+.05,.08,l.d+.05],y.brick)],[l.x,0,l.z])}for(const l of i.world.walls.filter(f=>f.id.endsWith("back"))){vi(i.player),l.zone;for(const f of[-l.w*.3,l.w*.3])this.add([P([f,1.6,0],[1.8,.75,l.d+.05],y.blue),P([f,1.6,.2],[.055,.75,.035],y.dark),P([f,1.6,.2],[1.8,.055,.035],y.dark)],[l.x,0,l.z])}for(let l of i.props)this.add(al(l.type),[l.x,l.broken?.1:0,l.z],l.broken?.65:0,1,l.broken?Math.PI/2:0);for(let l of i.objects.values()){if(l.state==="reserved")continue;if(l.papers?.some(m=>!m.taken)){for(let m of l.papers)m.taken||this.add(rn("exam_papers"),[m.x,.02,m.z]);continue}let f=this.position(l.id,l),p=[f.x,l.y,f.z],_=l.angle||0;if(l.state==="held"){let m=l.owner===i.player.id?i.player:i.npcs.find(d=>d.id===l.owner);if(m){let d=Math.atan2(m.face.x,m.face.z),T=this.position(m.id,m);p=[T.x+.36*Math.cos(d)+.18*Math.sin(d),.88,T.z-.36*Math.sin(d)+.18*Math.cos(d)],_=d,l.type==="wireless_microphone"&&m===i.player&&i.microphoneCall&&(p[1]=1.12,p[0]=T.x+.22*Math.cos(d)+.24*Math.sin(d),p[2]=T.z-.22*Math.sin(d)+.24*Math.cos(d))}}l.state==="worn"&&(p=[i.player.x,1.6,i.player.z],_=Math.atan2(i.player.face.x,i.player.face.z),l.type==="principal_glasses"&&(p[1]=1.38,p[0]+=i.player.face.x*.23,p[2]+=i.player.face.z*.23));let x=l.plane?[P([0,.08,0],[.55,.02,.15],y.white,[0,.5,0]),P([0,.08,0],[.15,.02,.55],y.white,[0,.5,0])]:rn(l.type);l.type==="piano"&&i.player.action==="piano"&&Vt(l,i.player)<3&&(x[2]={...x[2],r:[Math.sin(i.time*5)*.2,0,0]}),this.add(x,p,_,l.type==="principal_wig"&&l.state==="worn"?1.1:1,l.broken&&l.type!=="principal_wig"?.6:0),l.state==="airborne"&&this.add([Ce("disc",[0,.03,0],[.5,.5,.5],"#97a28c",[-Math.PI/2,0,0])],[l.x,0,l.z])}if(!i.meeting.running)for(const l of i.life.visuals())this.add(rn(l.type),[l.x,l.y,l.z],l.angle||0);let s=i.player,a=this.position(s.id,s);this.add(Ts(s,i.time,!0,i.profile.equipped),[a.x,s.hidden?-.9:0,a.z],Math.atan2(s.face.x,s.face.z)),this.add([Ce("disc",[0,.025,0],[.72,.72,.72],"#a4a387",[-Math.PI/2,0,0])],[a.x,0,a.z]);for(let l of i.npcs){if(!l.active&&Vt(l,s)>26)continue;let f=this.position(l.id,l);if(this.add(Ts(l,i.time,!1).map(p=>l.flashUntil>(i.meeting.running?i.meeting.elapsed:i.time)?{...p,color:y.white}:p),[f.x,0,f.z],Math.atan2(l.face.x,l.face.z),l.role==="student"?.85:1),l.state==="Attack"&&this.add([Ce("torus",[0,.04,0],[1.5,1.5,1.5],y.orange,[Math.PI/2,0,0])],[l.x,0,l.z]),i.meeting.running&&l.stampUntil>i.meeting.elapsed&&this.add([P([0,1.15,.19],[.22,.12,.04],y.yellow)],[l.x,0,l.z],Math.atan2(l.face.x,l.face.z)),l.state==="Recover")for(let p=0;p<3;p++)this.add([Ce("sphere",[Math.cos(i.time*2+p*2)*.4,1.2,Math.sin(i.time*2+p*2)*.4],[.1,.1,.1],y.yellow)],[l.x,0,l.z])}for(const l of i.dogs.visible)l.state==="Relocating"&&l.timer>1.6||!l.active&&Vt(l,i.player)>26||(this.add(ol(l,i.time),[l.x,0,l.z],Math.atan2(l.face.x,l.face.z),l.id==="dog_mani"?.9:1),i.dogs.heart?.id===l.id&&i.dogs.heart.until>i.profile.dogs.clock&&this.add([Ce("sphere",[-.07,1,0],[.14,.15,.08],"#c77d90"),Ce("sphere",[.07,1,0],[.14,.15,.08],"#c77d90"),Ce("cone",[0,.9,0],[.24,.2,.08],"#c77d90",[Math.PI,0,0])],[l.x,0,l.z]));if(!i.meeting.running){this.add([P([0,.12,0],[.7,.24,.6],y.wood),Ge([-1,.1,0],[.5,.2,.5],y.orange),Ge([1,.1,0],[.5,.2,.5],y.blue),Ge([1,.21,0],[.4,.02,.4],"#8db8c6"),P([-.4,.02,1],[.85,.04,.65],y.blue),P([1.2,.02,-1],[.85,.04,.65],y.white)],[8,0,11]);const l=Gi.find(f=>f.id===i.profile.dogs.activeQuest);l&&this.add([Ce("torus",[0,.05,0],[1.8,1.8,1.8],y.yellow,[Math.PI/2,0,0])],[l.goal.x,0,l.goal.z])}const o=i.npcs.find(l=>l.id===i.dogs.selectedTarget);if(o&&i.dogs.validTarget(o)&&this.add([Ce("torus",[0,.05,0],[1.1,1.1,1.1],y.yellow,[Math.PI/2,0,0])],[o.x,0,o.z]),i.step&&["place","deliver"].includes(i.step.kind))for(let l=0;l<(i.step.count||1);l++){let f=hl(i.step,l);this.add([Ce("torus",[0,.065,0],[1.6,1.6,1.6],y.yellow,[Math.PI/2,0,0]),P([0,.08,0],[.12,.02,1.2],y.yellow),P([0,.08,0],[1.2,.02,.12],y.yellow)],[f.x,0,f.z])}if(i.tutorial===2&&i.held?.type==="exam_papers"&&this.add([Ce("torus",[0,.065,0],[2.6,2.6,2.6],y.yellow,[Math.PI/2,0,0])],[Xa.podium.x,0,Xa.podium.z]),i.race){let f=[[-25,15],[-25,21],[-18,21],[-18,15],[-21,15]][i.race.checkpoint];this.add([Ce("torus",[0,.1,0],[1.4,1.4,1.4],y.yellow,[Math.PI/2,0,0])],[f[0],0,f[1]])}for(const l of i.microphoneSignals()){const f=i.time-l.start;if(this.add([Ce("torus",[0,.08,0],[.75,.75,.75],y.yellow,[Math.PI/2,0,0])],[l.x,0,l.z]),!i.profile.settings.lowMotion)for(let p=0;p<2;p++){const _=.8+(f*1.4+p*.7)%1.5;this.add([Ce("torus",[0,.15,0],[_,_,_],y.blue,[Math.PI/2,0,0])],[l.x,0,l.z])}}if(i.meeting.running){if(i.meeting.airMode===2)for(let l=0;l<3;l++)this.add([P([0,0,0],[.24,.01,.16],y.white)],[Math.sin(i.meeting.elapsed*2+l)*.6,1.05,3+l*.6]);i.meeting.selected.includes("printer")&&this.add([P([0,.85,0],[.65,.3,.45],y.white),P([0,.99,.1],[.35,.02,.1],y.dark)],[4.4,0,4.8]);for(const l of i.meeting.water)this.add([Ce("disc",[0,.025,0],[1,.5,1],y.blue,[-Math.PI/2,0,0])],[l.x,0,l.z]);for(let l=0;l<i.meeting.papers.length;l++)this.add(rn("folder"),[4.25,.76,4+l*.18]);i.meeting.selected.includes("projector")&&this.add([P([0,1.65,0],[3,.95,.08],y.blue)],[0,0,.3]),i.meeting.selected.includes("whiteboard")&&this.add([P([0,1.1,0],[1.6,1.4,.08],i.meeting.boardMusic?y.green:y.white),P([-.5,.5,0],[.05,1,.08],y.dark),P([.5,.5,0],[.05,1,.08],y.dark)],[4.5,0,7.8])}let h=i.nearest();h&&Vt(h,s)<2.5&&this.add([Ce("cone",[0,2.5+Math.sin(i.time*3)*.06,0],[.2,.3,.2],y.yellow,[Math.PI,0,0])],[h.x,0,h.z]),this.effects=this.effects.filter(l=>i.time-l.start<2.6&&i.time>=l.start),i.meeting.running&&(this.effects=this.effects.slice(-Math.max(1,12-i.meeting.papers.length-(i.meeting.airMode===2?3:0))));for(let l of this.effects){let f=i.time-l.start,p=i.profile.settings.lowMotion?.08:.25;this.add([P([Math.sin(l.index*2)*f*p,1+f*.25,Math.cos(l.index*2)*f*p],[.05,.025,.08],l.type==="instrument"?y.yellow:y.white,[f,0,f])],[l.x,0,l.z])}for(let l of this.batches.values())l.mesh.count=l.count,l.mesh.instanceMatrix.needsUpdate=!0,l.mesh.instanceColor&&(l.mesh.instanceColor.needsUpdate=!0);this.target.lerp(new F(s.x,0,s.z),Math.min(1,e*7));let c=25,u=13.5;this.camera.position.copy(this.target).add(new F(u,c,u)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(!0),this.layoutLabels(),this.renderer.render(this.scene,this.camera),this.calls=this.renderer.info.render.calls,this.triangles=this.renderer.info.render.triangles,e>0&&t&&(this.frames.push(e*1e3),this.frames.length>1200&&this.frames.shift(),this.fps=1/e,i.profile.settings.quality==="auto"&&(e>.033?(this.slow+=e,this.fast=0):(this.fast+=e,this.slow=Math.max(0,this.slow-e)),this.slow>3&&!this.autoLow&&(this.autoLow=!0,this.setDPR()),this.fast>20&&this.autoLow&&(this.autoLow=!1,this.setDPR())))}labelRects=[];labelUIAt=0;layoutLabels(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight,n=performance.now();n>=this.labelUIAt&&(this.labelUIAt=n+200,this.labelRects=[...document.querySelectorAll(".top-left,.top-right,.quest,.side-nav,.bottom-info,.action-cluster,#joystick,#meeting-controls")].filter(h=>h.getClientRects().length>0).map(h=>{const c=h.getBoundingClientRect();return{x:c.x,y:c.y,w:c.width,h:c.height}}));const i=[...this.labelRects],s=(h,c)=>h.x<c.x+c.w+4&&h.x+h.w+4>c.x&&h.y<c.y+c.h+4&&h.y+h.h+4>c.y,a=new Set(wn.map(h=>h.label)),o=[...this.labels].sort((h,c)=>+!a.has(h.userData.text)-+!a.has(c.userData.text)||Vt(h.userData.anchor,this.game.player)-Vt(c.userData.anchor,this.game.player));for(const h of o){if(!h.visible)continue;const c=h.position.clone().project(this.camera),u=h.scale.x/(this.camera.right-this.camera.left)*e,l=h.scale.y/(this.camera.top-this.camera.bottom)*t,f={x:(c.x+1)/2*e-u/2,y:(1-c.y)/2*t-l/2,w:u,h:l};h.visible=c.z>=-1&&c.z<=1&&f.x>=4&&f.y>=4&&f.x+u<=e-4&&f.y+l<=t-4&&!i.some(p=>s(f,p)),h.visible&&i.push(f)}}thumbs=new Map;thumbnail(e,t){const n=t+":"+e;if(this.thumbs.has(n))return this.thumbs.get(n);const i=new Eo;i.background=new qe("#dbe4d0"),i.add(new Nh(16777215,2));const s=new Do(16777215,2);s.position.set(3,5,4),i.add(s);const a=new Fr(-1.2,1.2,1.15,-1.15,.1,20);a.position.set(2,2.2,4),a.lookAt(0,.8,0);const o=t==="dog"?ol({id:e,state:"Rest"},0):t==="item"?e.startsWith("prop:")?al(e.slice(5)):rn(e.replace("item:","")):Ts({type:e,role:t,hp:60,state:"Idle"},0),h=[];for(const T of o){const w=this.batches.get(T.shape)?.mesh.geometry;if(!w)continue;const E=new Co({color:T.color});h.push(E);const C=new Xt(w,E);C.position.set(...T.p),C.scale.set(...T.s),C.rotation.set(...T.r||[0,0,0]),i.add(C)}const c=new Un().setFromObject(i),u=c.getCenter(new F);a.position.copy(u).add(new F(2,2,4)),a.lookAt(u);const l=new Dn(192,160),f=this.renderer.getRenderTarget();this.renderer.setRenderTarget(l),this.renderer.render(i,a);const p=new Uint8Array(30720*4);this.renderer.readRenderTargetPixels(l,0,0,192,160,p),this.renderer.setRenderTarget(f);const _=document.createElement("canvas");_.width=192,_.height=160;const x=_.getContext("2d"),m=x.createImageData(192,160);for(let T=0;T<160;T++)m.data.set(p.subarray((159-T)*192*4,(160-T)*192*4),T*192*4);x.putImageData(m,0,0);const d=_.toDataURL();return l.dispose(),h.forEach(T=>T.dispose()),this.thumbs.set(n,d),d}aim(e,t,n=!1){let i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);let s=new F;if(this.ray.ray.intersectPlane(this.plane,s)){let a=this.game.player;const o=this.game.npcs.filter(l=>this.game.dogs.validTarget(l)&&Vt(l,{x:s.x,z:s.z})<1&&this.inView(l)).sort((l,f)=>Vt(l,{x:s.x,z:s.z})-Vt(f,{x:s.x,z:s.z}))[0];o&&n&&this.game.dogs.select(o.id);let h=s.x-a.x,c=s.z-a.z,u=Math.hypot(h,c);u>.1&&(a.face={x:h/u,z:c/u})}}inView(e){let t=new F(e.x,1,e.z).project(this.camera);return Math.abs(t.x)<1.2&&Math.abs(t.y)<1.2&&t.z>-1&&t.z<1}project(e,t=2.4){let n=new F(e.x,t,e.z).project(this.camera);return{x:(n.x+1)/2*this.canvas.clientWidth,y:(1-n.y)/2*this.canvas.clientHeight}}measure(){let e=[...this.frames].sort((t,n)=>t-n);return{fps:this.fps,p50:e[Math.floor(e.length*.5)]||0,p95:e[Math.floor(e.length*.95)]||0,drawCalls:this.calls,triangles:this.triangles,geometry:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,activeNPC:this.game.npcs.filter(t=>t.active).length,aiMs:this.game.aiMs,simulationMs:this.game.tickMs,quality:this.quality,samples:e.length}}}class Em{keys=new Set;stick={x:0,z:0};pointer=null;actionPointers=new Set;enabled=!1;onAction=()=>{};onPause=()=>{};onAim=()=>{};onSelect=()=>{};knob;constructor(e,t,n){this.knob=n,window.addEventListener("keydown",a=>{if(a.code==="Escape"){this.clear(),this.onPause();return}if(!this.enabled||a.target instanceof HTMLInputElement||a.target instanceof HTMLSelectElement||a.target instanceof HTMLTextAreaElement||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault(),a.repeat))return;this.keys.add(a.code);let o={KeyJ:"attack",KeyK:"dodge",Space:"dodge",KeyE:"interact",KeyQ:"throw",KeyR:"drop",KeyF:"roll",Enter:"conduct"}[a.code];o&&(a.preventDefault(),this.onAction(o))}),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>this.clear()),e.addEventListener("pointermove",a=>{this.enabled&&a.pointerType==="mouse"&&this.onAim(a.clientX,a.clientY)}),e.addEventListener("pointerdown",a=>{this.enabled&&this.onSelect(a.clientX,a.clientY),this.enabled&&a.pointerType==="mouse"&&a.button===0&&(this.onAim(a.clientX,a.clientY),this.onAction("attack"))});const i=a=>{let o=t.getBoundingClientRect(),h=43,c=(a.clientX-o.left-o.width/2)/h,u=(a.clientY-o.top-o.height/2)/h,l=Math.max(1,Math.hypot(c,u));this.stick={x:c/l,z:u/l},n.style.transform=`translate(${c/l*30}px,${u/l*30}px)`};t.addEventListener("pointerdown",a=>{!this.enabled||this.pointer!==null||this.actionPointers.size>1||(a.preventDefault(),this.pointer=a.pointerId,t.setPointerCapture(a.pointerId),i(a))}),t.addEventListener("pointermove",a=>{a.pointerId===this.pointer&&i(a)});const s=a=>{a.pointerId===this.pointer&&(this.pointer=null,this.stick={x:0,z:0},n.style.transform="")};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s)}bindButton(e,t,n){let i=0,s;e.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),!(!this.enabled||this.actionPointers.size>=1)&&(this.actionPointers.add(o.pointerId),e.setPointerCapture(o.pointerId),i=performance.now(),n?s=setTimeout(n,420):this.onAction(t))});let a=(o,h=!1)=>{this.actionPointers.has(o.pointerId)&&(this.actionPointers.delete(o.pointerId),clearTimeout(s),n&&!h&&performance.now()-i<420&&this.enabled&&this.onAction(t))};e.addEventListener("pointerup",o=>a(o)),e.addEventListener("pointercancel",o=>a(o,!0)),e.addEventListener("lostpointercapture",o=>a(o,!0)),e.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.enabled&&this.onAction(t))})}clear(){this.knob&&(this.knob.style.transform=""),this.keys.clear(),this.pointer=null,this.actionPointers.clear(),this.stick={x:0,z:0}}movement(){if(!this.enabled)return{x:0,z:0,run:!1};let e=this.stick.x,t=this.stick.z;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t=-1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e=-1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e=1);let n=Math.hypot(e,t),i=Math.max(1,n);return e/=i,t/=i,{x:(e+t)*Math.SQRT1_2,z:(t-e)*Math.SQRT1_2,run:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||Math.hypot(this.stick.x,this.stick.z)>.8}}}function bm(r){const e=r==="dog_mani",t=e?"#f4f0e6":"#b77540",n=e?"#ffffff":"#f3d7ac",i=e?"#c7cbbb":"#925e36";return`<svg viewBox="0 0 64 64" role="img" aria-label="${e?"馬尼":"LION"}的笑臉頭像" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#dbe4d0"/><path d="M13 29 11 8 26 20M38 20 53 8 51 29" fill="${t}" stroke="${i}" stroke-width="2" stroke-linejoin="round"/><path d="m15 21-1-8 8 8m20 0 8-8-1 8" fill="#d8ad9c"/><path d="M13 25 21 18 43 18 51 25 54 40 47 52 32 57 17 52 10 40Z" fill="${t}" stroke="${i}" stroke-width="1.5"/>${e?'<path d="m12 34-4 6 7 2-2 7 8-1 3 7 8-2 8 2 3-7 8 1-2-7 7-2-4-6" fill="#ffffff"/>':""}<path d="M16 39Q18 32 26 36L32 40 38 36Q46 32 48 39L44 49Q32 58 20 49Z" fill="${n}"/><g fill="none" stroke="#3d4c4e" stroke-width="2.4" stroke-linecap="round"><path d="M20 30q4-5 8 0m8 0q4-5 8 0"/><path d="M24 43q8 10 16 0"/></g><path d="M28 38Q32 35 36 38L32 42Z" fill="#3d4c4e"/><path d="M29 47h6v4q-3 4-6 0Z" fill="#c77d90"/><circle cx="18" cy="38" r="3" fill="#cf9286" opacity=".65"/><circle cx="46" cy="38" r="3" fill="#cf9286" opacity=".65"/></svg>`}const se=r=>document.querySelector(r),Qe=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class Tm{constructor(e,t,n,i,s){this.game=e,this.render=t,this.input=n,this.audio=i,this.store=s,e.onToast=(a,o)=>this.toast(a,o),e.onSave=()=>s.save(e.profile),e.listeners.push(a=>{a.type==="reset"&&(this.toastUntil=0,se("#speech").hidden=!0,se("#toast").classList.remove("visible")),a.type==="rescue"&&setTimeout(()=>this.open("report"),0)}),this.input.onAction=a=>this.action(a),this.input.onPause=()=>this.paused?this.close():this.open("pause"),this.input.onAim=(a,o)=>t.aim(a,o),this.input.onSelect=(a,o)=>t.aim(a,o,!0),se("#quest-toggle").addEventListener("click",()=>this.setQuestCollapsed(!this.questCollapsed)),se("#quest-toggle").addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&a.stopPropagation()}),se(".quest").addEventListener("click",a=>{a.target.closest("button")||this.setQuestCollapsed(!this.questCollapsed)}),new ResizeObserver(()=>se(".hud").style.setProperty("--quest-card-height",se(".quest").getBoundingClientRect().height+"px")).observe(se(".quest")),se("#dogs-entry").addEventListener("click",()=>this.open("dogs")),se("#menu").addEventListener("click",()=>this.open("pause")),se("#tasks").addEventListener("click",()=>this.open("missions")),se("#calendar").addEventListener("click",()=>this.open("calendar")),se("#map").addEventListener("click",()=>this.open("map")),se("#actions").addEventListener("click",()=>this.open("actions",!1)),n.bindButton(se("#attack"),"attack"),n.bindButton(se("#dodge"),"dodge"),n.bindButton(se("#throw"),"throw"),n.bindButton(se("#drop"),"drop"),n.bindButton(se("#conduct"),"conduct"),n.bindButton(se("#interact"),"interact",()=>this.open("actions",!1)),se("#modal").addEventListener("click",a=>{let o=a.target.closest("[data-action]");o&&this.click(o.dataset.action,o.dataset.id,o.dataset.value)}),se("#modal").addEventListener("keydown",a=>{if(a.key==="Tab"){let o=[...se("#modal").querySelectorAll("button:not(:disabled),input,select,a[href]")],h=o[0],c=o.at(-1);a.shiftKey&&document.activeElement===h?(c?.focus(),a.preventDefault()):!a.shiftKey&&document.activeElement===c&&(h?.focus(),a.preventDefault())}}),this.open("start")}questCollapsed=!1;questContent="";codexTab="students";paused=!0;started=!1;modal="";lastFocus=null;hudClock=0;debug=!1;toastUntil=0;onPause=e=>{};pause(e){this.paused=e,this.input.enabled=!e&&!this.modal,this.input.clear(),e?this.audio.pause():this.audio.resume(),this.onPause(e)}close(){this.started&&(se("#modal").hidden=!0,this.modal="",this.pause(!1),this.lastFocus?.focus())}open(e,t=!0){if(this.game.meeting.running&&!["pause","actions","settings","help","meetingRecords","save","dogs"].includes(e)){this.toast("請先離席，再操作校園選單。");return}this.lastFocus=document.activeElement,this.modal=e,this.input.enabled=!1,this.input.clear(),t&&this.pause(!0),se("#modal").hidden=!1;let n=this.content(e);se("#modal").innerHTML=`<section class="panel ${e==="start"?"welcome":""}" role="dialog" aria-modal="true" aria-label="${Qe(e==="start"?"開始遊戲":"遊戲選單")}">${n}</section>`,setTimeout(()=>se("#modal").querySelector("button")?.focus(),0)}header(e,t){return`<header class="panel-head"><div><span class="eyebrow">${e}</span><h2>${t}</h2></div>${this.started?'<button class="icon-btn" data-action="close" aria-label="關閉">✕</button>':""}</header>`}button(e,t,n="",i=""){return`<button class="${i}" data-action="${t}" data-id="${Qe(n)}">${e}</button>`}content(e){let t=this.game,n=t.profile;if(e==="pause"&&t.meeting.running)return this.header("SCHOOL MEETING","會議暫停")+`<div class=menu-grid>${this.button("繼續遊玩","close")}${this.button("離席","meetingLeave")}${this.button("會議紀錄冊","open","meetingRecords")}${this.button("設定","open","settings")}${this.button("操作說明","open","help")}</div>`;switch(e){case"start":return`<div class="brand-mark">東山 <span>校園日常 / 異常</span></div><span class="eyebrow">AN ORDINARY DAY, ALMOST.</span><h1>東山校園<br><em>大騷動</em><span class="title-dot">。</span></h1><p class="intro">今天的老師，一如往常地端莊。<br>今天的校園，就不一定了。</p><div class="welcome-actions">${this.button("進入校園　↗","start","","primary")}${this.button("操作說明","help")}</div><p class="fine">v1.3.1 校事會議更容易登場，校狗新增笑臉提示；六種生活事件持續上演。<br>歡迎回到校園，一起發現今天的小插曲！</p>`;case"dogs":return this.dogPanel();case"meetingRecords":return this.header("MEETING MINUTES","會議紀錄冊")+`<p>${t.profile.meeting.titles.map(Qe).join(" ・ ")||"尚未收藏稱號"}</p><div class=task-list>${[...t.profile.meeting.records].reverse().map(i=>`<article class=task-card><div><h3>${Qe(i.reason)} · ${i.seconds}秒</h3><p>${i.lines.map(Qe).join("<br>")}</p><small>seed ${i.seed} · ${i.modules.map(s=>Qe(Ja.find(a=>a.id===s)?.label||"會議橋段")).join(" / ")}</small></div></article>`).join("")||"<p>尚未開會。</p>"}</div>`;case"pause":return this.header("TAKE A BREATH","課間休息")+`<div class="menu-grid">${this.button("繼續遊玩 ↗","close","","primary")}${this.button("今日待辦 · 24任務","open","missions")}${this.button("校園行事曆 · 4活動","open","calendar")}${this.button("校園地圖","open","map")}${this.button("校園生活","open","life")}${this.button("人物圖鑑","open","codex")}${this.button("道具說明","open","items")}${this.button("擊倒圖鑑","open","knockdowns")}${this.button("會議紀錄冊","open","meetingRecords")}${this.button("收藏與紀念卡","open","collection")}${this.button("音訊／畫質設定","open","settings")}${this.button("操作說明","open","help")}${this.button("存檔管理","open","save")}${this.button("重看教學","tutorial")}${this.button("重開平靜校園","confirmReset")}</div><p class="fine">${Qe(this.store.error||"儲存長期进度；重新進入從平靜校園開始。")}</p>`;case"missions":{t.emit("openTasks");let i=Rs.filter(s=>s.mode===t.mode);return this.header("TODAY’S TO-DO",t.mode==="normal"?"今日待辦":Za.find(s=>s.id===t.mode).label+"任務")+`<p class="muted">一次追蹤一項。可取消、免費重試；首通領點，重玩記錄評級。</p>${t.attempt?`<div class="active-task"><b>${ll(t)}</b><p>${t.step.text}</p>${this.button("取消追蹤","cancelTask")}${this.button("重置任務物件","resetItems")}</div>`:""}<div class="task-list">${i.map(s=>`<article class="task-card"><div><span class="eyebrow">${s.category} · ${n.completedMissionIds.includes(s.id)?"已完成／重玩不給點":`首通 ${s.reward} 點`}</span><h3>${s.label}</h3><p>${s.steps.map(a=>Qe(a.text)).join(" → ")}</p></div>${this.button(t.attempt?.mission===s.id?"追蹤中":n.completedMissionIds.includes(s.id)?"再試一次":"開始","task",s.id,t.attempt?.mission===s.id?"selected":"")}</article>`).join("")}</div>`}case"calendar":return this.header("SCHOOL CALENDAR","校園行事曆")+`<p class="muted">切換會重置當前校園、結束追逐；保留已完成與收藏。</p><div class="calendar-list">${[{id:"normal",label:"平常的一天",description:"自由探索與24項今日待辦。"},...Za].map((i,s)=>`<article class="calendar-card"><span class="chapter-num">0${s}</span><div><h3>${i.label}</h3><p>${i.description}</p><small>${i.id==="normal"?"全部基礎玩法立即開放":`${Rs.filter(a=>a.mode===i.id&&n.completedMissionIds.includes(a.id)).length}/4 完成`}</small></div>${this.button(t.mode===i.id?"目前活動":"進入","modeConfirm",i.id)}</article>`).join("")}</div>`;case"settings":return this.header("MAKE YOURSELF COMFORTABLE","設定")+`<div class="settings"><label>畫質 <select id="quality">${["auto","low","standard"].map((i,s)=>`<option value="${i}" ${n.settings.quality===i?"selected":""}>${["自適應","Low · 輕量","Standard · 標準"][s]}</option>`).join("")}</select></label><label>音樂 <input id="music" type="range" min="0" max="100" value="${n.settings.music*100}"></label><label>音效 <input id="sfx" type="range" min="0" max="100" value="${n.settings.sfx*100}"></label><label><input id="mute" type="checkbox" ${n.settings.mute?"checked":""}>靜音（所有目標仍可完成）</label><label><input id="lowMotion" type="checkbox" ${n.settings.lowMotion?"checked":""}>減少動態效果</label><label><input id="assist" type="checkbox" ${n.settings.assist?"checked":""}>指揮輔助：±350ms</label>${this.button("儲存設定","settings","","primary")}${this.button("完整聲音試聽頁 ↗","soundTest")}</div><p class="fine">Low：DPR≤1，活躍人物≤16。${Qe(this.audio.fail)}</p>`;case"help":return this.header("A VERY COMPOSED TEACHER","操作說明")+'<div class="help"><p>左下搖桿移動，推深快跑。右下揮打、閃避與互動；拿物後可投擲。長按互動可選動作，或按「動作」。</p><dl><dt>WASD／方向鍵</dt><dd>依畫面方向移動；Shift 快跑</dd><dt>J／滑鼠左鍵</dt><dd>揮打（滑鼠決定面向）</dd><dt>K／空白鍵</dt><dd>短距閃避，不能穿牆</dd><dt>E／Q／R</dt><dd>互動／投擲／放下</dd><dt>F／Enter</dt><dd>點名／合唱指揮</dd><dt>Esc</dt><dd>暫停與繼續</dd></dl><p>一次拿一件；假髮與眼鏡各一個裝飾槽。黃色圈是任務交付／定位位置，在圈旁互動或放下。歸還需帶回原位置。推椅子時，站在椅子後面。</p><p>藏點：走廊工具間、教室講臺後。若被目擊躲入，家長會搜查。警戒消退需先甩開視線；進保健室不會清通緝。平靜時校護免費恢復。</p><p>校園無線麥克風：一般日於音樂教室，活動日於舞臺器材位置。手持時從「動作」使用10m擴音點名（共用12秒冷卻）；投擲落地產生3秒廣播誘餌，拿回即停，普通放下不啟動。追逐者仍看見老師、目擊投擲或需護子時不受吸引，聲音不能穿牆；靜音也有效。</p><p>人物跌坐後會恢復；沒有永久傷亡。任務物件卡住可從待辦按「重置任務物件」。</p></div>';case"actions":{if(t.meeting.running)return this.header("SCHOOL MEETING","會議動作")+`<div class=menu-grid>${t.meeting.context()?this.button(t.meeting.context(),"meetingUse"):""}${t.held?this.button("放下","gameAction","drop"):""}${t.nearest()?.itemType==="office_chair"?this.button("推動椅子","pushTarget"):""}${this.button("離席","meetingLeave")}</div><p>J 揮打／Q 投擲／F 特殊互動。攻擊保持原功能。</p>`;let i=t.nearest(),s=t.held;return this.header("WHAT WOULD YOU LIKE TO DO?","老師的動作")+`<p class="muted">最近：${Qe(i?.label||"沒有目標")}　手持：${Qe(s?Ii[s.type].label:"空手")}</p><div class="menu-grid">${i?this.button("互動 "+i.label,"interactTarget"):""}${t.life.targets().filter(a=>ws(a,t.player)<2.5&&t.world.visible(a,t.player)).map(a=>this.button(a.label,"lifeInteract",a.id)).join("")}${this.button(s?.type==="wireless_microphone"?"擴音點名（10m／共用12秒冷卻）":"點名（6m／12秒冷卻）","gameAction","roll")}${s?this.button("放下／交付","gameAction","drop"):""}${s&&s.type!=="wireless_microphone"?this.button("使用：演奏／碼錶／清掃","gameAction","useHeld"):""}${s&&Ii[s.type].category.includes("wearable")?this.button("戴上","gameAction","wear"):""}${t.player.wig||t.player.glasses?this.button("取下頭部裝飾","gameAction","unwear"):""}${s||t.player.wig||t.player.glasses?this.button("歸還原位","gameAction","returnHeld"):""}${i?.itemType&&Ii[i.itemType].category.includes("pushable")?this.button("推動","pushTarget"):""}${i?.itemType&&Ii[i.itemType].category.includes("fixed")?this.button(i.itemType==="piano"?"亂按鋼琴":"咖啡機噴泡沫","messTarget"):""}${i?.itemType&&i.broken?this.button("扶起／整理物件","restoreTarget"):""}${vi(t.player)==="classroom"?this.button("假裝上課","teach"):""}</div>${s?.type==="wireless_microphone"?"<p>請注意廣播。老師目前非常冷靜。<br>擴音點名：10m可聽見的平靜學生，與一般點名共用12秒冷卻。投擲落地播放3秒誘餌；目擊投擲或仍看見老師的追逐者不受騙。拿回即停止；普通放下不廣播。</p>":""}<p class="fine">這個選單仍讓人物行動；真正休息請用暫停。</p>`}case"shop":return this.header("CO-OP, OPEN FOR BUSINESS","合作社")+`<div class="balance">校園點數 <strong>${n.points}</strong></div><article class="task-card"><div><h3>涼茶 · 10點</h3><p>立即飲用恢復30體力；五秒冷卻。</p></div><button data-action="drink" ${n.points<10&&t.attempt?.mission!=="q21"?"disabled":""}>購買</button></article><div class="task-list">${$a.map(i=>`<article class="task-card"><div><h3>${i.label}</h3><p>純外觀 · ${i.price}點</p></div><button data-action="cosmetic" data-id="${i.id}" ${n.ownedCosmetics.includes(i.id)||n.points<i.price?"disabled":""}>${n.ownedCosmetics.includes(i.id)?"已收藏":"購買"}</button></article>`).join("")}</div>${this.button("專用狗零食 · 5點（"+n.dogs.treats+"/20）","buyTreat")}${this.button("平靜服務：整理商品 +10點","service")}<p class="fine">${n.serviceCooldown>0?`服務冷卻 ${Math.ceil(n.serviceCooldown/60)} 分鐘`:"服務可領取，遊戲在線十分鐘冷卻"}</p>`;case"map":return this.header("A SMALL CAMPUS, MANY POSSIBILITIES","校園地圖")+`<svg class="campus-map" viewBox="-33 -27 66 54" role="img" aria-label="校園與玩家任務位置">${wn.map(i=>`<rect x="${i.x1}" y="${i.z1}" width="${i.x2-i.x1}" height="${i.z2-i.z1}" rx=".6"/><text x="${(i.x1+i.x2)/2}" y="${(i.z1+i.z2)/2}">${i.label}</text>`).join("")}<circle class="player-dot" cx="${t.player.x}" cy="${t.player.z}" r="1"/>${this.mapTargets().map(i=>`<circle class="goal-dot" cx="${i.x}" cy="${i.z}" r=".8"/>`).join("")}</svg><p class="fine">綠點：老師　黃點：目標／任務物件。${t.notes.map(Qe).join(" ")}</p>`;case"knockdowns":{const i=this.codexTab,s=n.knockdownCodex[i],a=Jl[i].filter(o=>i!=="objects"||s[o.id]);return this.header("CAMPUS INCIDENT COLLECTION","擊倒圖鑑")+`<p class="muted">記錄老師實際造成的暈眩與破損，跨活動、重新開啟皆保留。人物稍後會恢復；家具扶好不會刪除紀錄。</p><div class="codex-tabs" role="group" aria-label="圖鑑分類">${["students","parents","objects"].map((o,h)=>`<button data-action="codexTab" data-id="${o}" aria-pressed="${i===o}" class="${i===o?"selected":""}">${["學生","家長","物品"][h]} · ${Object.keys(n.knockdownCodex[o]).length}</button>`).join("")}</div><p>已記錄 ${Object.keys(s).length} 種 · 共 ${Object.values(s).reduce((o,h)=>o+h,0)} 次</p><div class="codex-grid incident-codex">${a.map(o=>`<article class="${s[o.id]?"discovered":"undiscovered"}" data-codex-id="${Qe(o.id)}">${this.thumbnail(o.id,i==="objects"?"item":i==="students"?"student":"parent")}<h4>${Qe(o.label)}</h4><p>${s[o.id]?Qe(o.description):"尚未記錄"}</p><small>${s[o.id]?`${i==="objects"?"破損":"暈眩"} ${s[o.id]} 次`:"未解鎖"}</small></article>`).join("")||"<p>還沒有物品破損紀錄。翻倒家具、垃圾桶，或投擲物品落地破損時會加入。</p>"}</div><p class="fine">從本次更新起記錄；舊存檔僅有總次數，無法還原過往的個別種類。學生惡作劇與活動預設破損不列入。</p>`}case"items":return this.header("PLEASE RETURN AFTER USE",`道具說明 · ${Ka.length}種`)+`<div class="codex-grid">${Ka.map(i=>`<article data-item-id="${i.id}">${this.thumbnail(i.id,"item")}<h4>${Qe(i.label)}</h4><p>${Qe(i.description||(i.category.includes("fixed")?"固定互動；不能拿取或投擲。":"依情境選單拿取、放下、使用或歸還。"))}</p><small>揮打 ${i.damage} ／ 投擲 ${i.throwDamage} · ${i.heavy?"重型":"輕型／固定"}</small>${i.id==="wireless_microphone"?"<p>一般校園：音樂教室樂器收納臺；活動日：中庭舞臺右側器材位置。手持後「動作」→擴音點名（10m，與點名共用12秒冷卻）；Q／投擲落地廣播3秒，引附近可聽見且願意調查者。追逐仍看見老師或目擊投擲者不受騙，護子／重要任務優先。相同人物與麥克風30秒調查冷卻。拿回、歸還、重置即停止，普通放下不啟動。靜音也有效。</p>":""}</article>`).join("")}</div>`;case"codex":return this.header("EVERYONE HAS THEIR OWN WAY","校園人物圖鑑")+`<h3>十二種學生</h3><div class="codex-grid">${Xr.map(i=>`<article>${this.thumbnail(i.id,Xr.includes(i)?"student":"parent")}<h4>${i.label}</h4><p>${i.description}</p></article>`).join("")}</div><h3>十九種家長</h3><div class="codex-grid">${As.map(i=>`<article>${this.thumbnail(i.id,Xr.includes(i)?"student":"parent")}<h4>${i.label}</h4><p>${i.description}</p><small>${i.tier} · 占 ${i.slotCost} 名額</small></article>`).join("")}</div><h3>校園職員與兩位新朋友</h3><div class=codex-grid>${Zl.map(i=>`<article>${this.thumbnail(i.id,"staff")}<h4>${i.label}</h4></article>`).join("")}${qa.map(i=>`<article>${this.thumbnail(i,"dog")}<h4>${Ya[i]}</h4><p>${ja(n.dogs.dogs[i].affinity)} · ${n.dogs.dogs[i].affinity}/100</p><p>${n.dogs.dogs[i].collected?i==="dog_lion"?"LION 將你列為正式巡邏夥伴":"馬尼認為你是專職摸摸人員":""}</p></article>`).join("")}</div>`;case"life":return this.header("CAMPUS LIFE","校園生活")+`<p>${Qe(t.life.context())}</p><p>靠近餐車按 E 吃午餐；拿拖把靠近牛奶漬按 E 清理；向校安老師按 E 告知情況；拿起失物陀螺後靠近失主按 E 歸還。移動或受擊會中斷用餐與清理。</p><p>午餐冷卻 ${Math.ceil(n.life.mealCooldown)}秒 · 肚子提出異議 ${Math.ceil(n.life.stomach)}秒</p><div class="menu-grid">${Kl.map(i=>`<p>${n.life.achievements.includes(i)?"✓":"○"} ${Qe(i)}</p>`).join("")}</div><p class="fine">所有人物沿用普通受擊；LION 與馬尼只接受校狗互動。暫停與會議期間，生活事件時鐘也會停下。</p>`;case"collection":return this.header("LITTLE MEMORIES","收藏與稱號")+`<h3>校園生活紀念 · ${n.life.achievements.length}/6</h3><p>${n.life.achievements.map(Qe).join(" · ")||"觀察、告知與歸還，留下生活紀念。"}</p><h3>外觀（保留黃色洋裝與鮑伯頭）</h3><div class="menu-grid">${$a.filter(i=>n.ownedCosmetics.includes(i.id)).map(i=>this.button((n.equipped.includes(i.id)?"✓ ":"")+i.label,"equip",i.id)).join("")||"<p>合作社有六種純外觀收藏。</p>"}</div><h3>稱號 · ${n.titleIds.length}/12</h3><p>${n.titleIds.map(Qe).join(" · ")||"完成任務獲得稱號。"}</p><h3>合照紀念卡（程式構圖）</h3><div class="photo-grid">${n.photoCards.map((i,s)=>`<div class="photo-card"><span>${i.wig?"🟤":i.glasses?"👓":"♫"}　${i.broom?"╱":"♩"}</span><b>東山・第${s+1}張合照</b><p>${i.students}學生 / ${i.visitors}家長<br>${i.wig?"假髮版 ":""}${i.glasses?"眼鏡版 ":""}${i.broom?"掃把版":""}</p></div>`).join("")||"<p>親師日完成合照，可留下構圖紀念卡。</p>"}</div>`;case"report":return this.header("INCIDENT REPORT","保健室事件報告")+`<div class="report-grid">${Object.entries(t.lastReport||t.report).filter(([i])=>["damage","downed","parents","maxAlert"].includes(i)).map(([i,s])=>`<article><b>${s}</b><span>${{damage:"家具翻倒",downed:"人物暈眩",parents:"追逐家長",maxAlert:"最高警戒"}[i]}</span></article>`).join("")}</div><p>體力 ${Math.ceil(t.player.hp)}/100。倒地救援已結束當次事件；任務可免費重試，長期紀錄保留。</p>`;case"save":return this.header("KEEP THE MEMORIES","存檔管理")+`<p>只儲存長期紀錄。匯入前驗證版本與 ID，損壞檔不覆蓋。</p><div class="menu-grid">${this.button("立即儲存","saveNow")}${this.button("匯出 JSON","export")}${this.button("匯入 JSON","import")}${this.button("接管其他分頁寫入","takeover")}${this.button("清除進度（確認）","clearConfirm")}</div><input type="file" id="importFile" accept="application/json,.json" hidden><p class="fine">${Qe(this.store.error||"本地存檔就緒")} · revision ${n.revision}</p>`;case"debug":return this.header("DEVELOPMENT ONLY","可重現驗證")+`<p>Seed ${t.rosterSeed} · ${t.assertOwnership()?"物件身份正常":""}</p><div class="menu-grid">${wn.map(i=>this.button("到 "+i.label,"teleport",i.id)).join("")}</div><h3>家長型別（仍受3名額限制）</h3><div class="menu-grid">${As.map(i=>this.button(i.label,"spawn",i.id)).join("")}</div><h3>警戒</h3>${[0,20,40,65,90].map(i=>this.button(String(i),"alert",String(i))).join("")}${this.button("恢復／清場","devReset")}${this.button("效能 HUD 開關","debugHUD")}<pre>${Qe(JSON.stringify(this.render.measure(),null,2))}</pre><p>目前任務事件：</p><pre>${Qe(JSON.stringify(t.eventLog.slice(-12),null,2))}</pre>`;case"timeQuestion":return this.header("LOOK AT THE CLOCK","時間到了嗎？")+`<p>黑板：考試時間24分鐘，已過12分鐘，剩餘12分鐘。</p>${[6,12,24].map(i=>this.button(i+"分鐘","answer",String(i))).join("")}`;default:if(e.startsWith("dialog:")){let i=t.npcs.find(s=>s.id===e.slice(7));return this.header("LET’S TALK",i.label+"的經歷")+`<p>${{timid:"老師，刚剛的聲音好大。",fighter:"老師，不能一直用揮打解決問題。",tattletale:"我要把今天的事告訴主任。"}[i.type]||"老師，今天的校園有點混亂。"}</p><div class="menu-grid">${["說明事實","一本正經的荒謬解釋","結束談話"].map((s,a)=>`<button data-action="respond" data-id="${i.id}" data-value="${a}">${s}</button>`).join("")}</div>`}return this.header("CONFIRM","確認")+`<p>${e.startsWith("mode:")?"切換活動會重置當前場景並取消未完成任務。":e==="clearConfirm"?"清除本地長期紀錄，無法撤銷。":"重開平靜校園，未完成任務可重新接取。"}</p>${this.button("確認","confirm",e,"primary")}${this.button("取消","open","pause")}`}}thumbnail(e,t){return`<img class="codex-thumb" alt="${Qe(e)} 遊戲模型" src="${this.render.thumbnail(e,t)}">`}dogPanel(){const e=this.game,t=e.profile.dogs;return this.header("TWO CAMPUS FRIENDS","校狗 · LION 與馬尼")+`<p>零食 ${t.treats}/20 · 共享協助冷卻 ${Math.ceil(t.assistCooldown)} 秒。摸摸 E；攻擊 J 始終保持揮打。</p>${qa.map(n=>{const i=e.dogs.actor(n),s=t.dogs[n];return`<article class=dog-status>${this.thumbnail(n,"dog")}<h3>${Ya[n]} · ${s.affinity}/100</h3><p>${ja(s.affinity)} · ${e.meeting.running?e.dogs.observer===n?"會議旁聽席":"校園安全等待":wn.find(a=>a.id===vi(i))?.label||"共用走廊"} · ${Qe(i.state)}</p><p>跟隨：45好感 ／ 協助：75好感。摸摸 ${Math.ceil(s.cooldowns.pet)}s、零食 ${Math.ceil(s.cooldowns.treat)}s、玩球 ${Math.ceil(s.cooldowns.ball)}s。</p><div class=menu-grid>${[["pet","摸摸"],["treat","給零食"],["play","玩球"],["follow","跟我來"],["rest","回去休息"],["assist","請牠幫忙"]].map(([a,o])=>this.button(o,"dogAction",n+":"+a)).join("")}</div></article>`}).join("")}<h3>協助目標：${Qe(e.npcs.find(n=>n.id===e.dogs.selectedTarget)?.label||"尚未選取")}</h3><p>先點選畫面中的敵對成人，或在下方確認名字，再請狗幫忙。</p><div class=menu-grid>${e.npcs.filter(n=>e.dogs.validTarget(n)&&ws(n,e.player)<8&&this.render.inView(n)&&e.world.visible(e.player,n)).map(n=>this.button(n.label,"dogTarget",n.id,n.id===e.dogs.selectedTarget?"selected":"")).join("")||"附近沒有有效敵對成人。"}</div><h3>理化老師的小任務</h3><p>找辦公室／餵狗角附近的老師接取及交付。${t.activeQuest?Qe(Gi.find(n=>n.id===t.activeQuest)?.label):"尚未追蹤校狗任務"}</p>${t.activeQuest?`<p>${(()=>{const n=Gi.find(i=>i.id===t.activeQuest);return"item"in n?"取物："+(wn.find(i=>i.id===vi(n.home))?.label||"中庭")+"（地圖黃點）。取回後帶到餵狗角黃色圈，按 E 定位，再向老師交付。":"在餵狗角附近選「跟我來」，陪走到"+(n.dog==="dog_lion"?"操場入口":"音樂教室外")+"的黃色圈，再向老師交付。"})()}</p>`:""}<div class=menu-grid>${Gi.map(n=>this.button((t.dogs[n.dog].completed.includes(n.id)?"✓ ":"")+n.label,"dogQuest",n.id)).join("")}${this.button("向老師交付","dogDeliver")}${this.button("任務物件安全歸位","dogReset")}</div><p>${t.achievements.map(Qe).join(" · ")||"和校狗一起留下新回憶。"}</p>`}mapTargets(){let e=this.game,t=e.step;const n=Gi.find(i=>i.id===e.profile.dogs.activeQuest);if(n)return"item"in n?[n.home,n.goal]:[{x:8,z:11},n.goal];if(!t)return[];if(["deliver","place","wearVisit"].includes(t.kind))return Array.from({length:t.count||1},(i,s)=>hl(t,s));if(t.kind==="gather")return this.game.npcs.filter(i=>this.game.attempt.meta.choristers.includes(i.id)).map(i=>({x:i.x,z:i.z}));if(t.kind==="return"){let i=[...e.objects.values()].find(s=>s.type===t.item);return i?[i.home]:[]}return[...e.objects.values()].filter(i=>i.pins.includes(e.attempt.id)).map(i=>({x:i.x,z:i.z}))}action(e){if(!this.started||this.modal)return;let t=this.game;switch(e){case"attack":t.attack();break;case"dodge":t.dodge();break;case"throw":t.throwItem();break;case"drop":t.drop();break;case"roll":t.rollCall();break;case"conduct":t.conduct();break;case"interact":this.handleResult(t.interact());break}}handleResult(e){typeof e=="string"&&["missions","shop","report","timeQuestion","dogs"].includes(e)?this.open(e,!1):e?.dialog&&this.open("dialog:"+e.dialog,!1)}async click(e,t="",n=""){let i=this.game;switch(e){case"codexTab":["students","parents","objects"].includes(t)&&(this.codexTab=t,this.open("knockdowns"));break;case"close":this.close();break;case"start":await this.audio.unlock(),this.started=!0,this.close(),i.profile.tutorialFlags.includes("done")||(i.startTutorial(),this.toast(i.tutorialText()));break;case"open":this.open(t);break;case"task":i.startMission(t),this.close();break;case"cancelTask":i.cancelMission(),this.open("missions");break;case"resetItems":i.resetObjectiveItems(),this.open("missions");break;case"tutorial":i.startTutorial(),this.close();break;case"skipTutorial":i.finishTutorial();break;case"modeConfirm":this.open("mode:"+t);break;case"confirmReset":this.open("resetConfirm");break;case"clearConfirm":this.open("clearConfirm");break;case"confirm":t==="clearConfirm"?(i.profile=tc(),i.reset("normal"),this.store.save(i.profile)):i.reset(t.startsWith("mode:")?t.slice(5):i.mode,t.startsWith("mode:")),this.close();break;case"settings":for(let s of["mute","lowMotion","assist"])i.profile.settings[s]=se("#"+s).checked;for(let s of["music","sfx"])i.profile.settings[s]=+se("#"+s).value/100;i.profile.settings.quality=se("#quality").value,this.audio.configure(),this.render.resize(),this.store.save(i.profile),this.toast("設定已儲存");break;case"soundTest":window.open("./soundtest.html","_blank","noopener");break;case"meetingUse":this.close(),i.meeting.secondary();break;case"meetingLeave":this.close(),i.meeting.leave();break;case"lifeInteract":{this.close();const s=i.life.targets().find(a=>a.id===t&&ws(a,i.player)<2.5&&i.world.visible(a,i.player));s&&i.life.interact(s.id);break}case"gameAction":this.close(),i.interact(void 0,t);break;case"interactTarget":this.close(),this.handleResult(i.interact());break;case"pushTarget":this.close(),i.interact(i.nearest(),"push");break;case"messTarget":this.close(),i.interact(i.nearest(),"mess");break;case"restoreTarget":this.close(),i.interact(i.nearest(),"restore");break;case"teach":this.close(),i.teach();break;case"drink":i.buyDrink()?this.toast("涼茶恢復30體力"):this.toast("點數不足或飲用冷卻中"),this.open("shop",!1);break;case"cosmetic":i.buyCosmetic(t),this.open("shop",!1);break;case"buyTreat":i.dogs.buyTreat(),this.open("shop",!1);break;case"dogQuest":i.dogs.quest(t),this.open("dogs");break;case"dogReset":i.dogs.resetQuest(),this.open("dogs");break;case"dogDeliver":i.dogs.checkDelivery(),this.open("dogs");break;case"dogAction":{const[s,a]=t.split(":");this.close(),a==="pet"&&i.dogs.pet(s),a==="treat"&&i.dogs.treat(s),a==="play"&&i.dogs.play(s),a==="follow"&&i.dogs.follow(s),a==="rest"&&(i.dogs.cancel(i.dogs.actor(s)),i.dogs.p.companion=null),a==="assist"&&i.dogs.assist(s);break}case"dogTarget":i.dogs.select(t),this.open("dogs");break;case"service":this.toast(i.service()?"整理完成 +10點":"平靜且冷卻結束才可服務"),this.open("shop",!1);break;case"equip":if(i.profile.equipped.includes(t))i.profile.equipped=i.profile.equipped.filter(s=>s!==t);else{let s=t.split("_")[0];i.profile.equipped=i.profile.equipped.filter(a=>a.split("_")[0]!==s),i.profile.equipped.push(t)}this.store.save(i.profile),this.open("collection");break;case"respond":i.respond(t,+n),this.close();break;case"answer":i.emit("answerTime",{correct:+t==12}),this.toast(+t==12?"正確，還有12分鐘。":"再看一次黑板：剩餘12分鐘。"),+t==12&&this.close();break;case"saveNow":this.store.save(i.profile),this.open("save");break;case"export":{let s=new Blob([JSON.stringify(i.profile,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(s),a.download="dongshan-save.json",a.click(),setTimeout(()=>URL.revokeObjectURL(a.href),1e3);break}case"import":{let s=se("#importFile");s.onchange=async()=>{try{let a=s.files[0];if(a.size>6e5)throw Error("檔案過大");let o=ec(JSON.parse(await a.text()));i.profile=o,i.reset("normal"),this.store.save(o),this.audio.configure(),this.toast("匯入成功"),this.open("save")}catch(a){this.toast("匯入失敗，原存檔保留："+a.message)}},s.click();break}case"takeover":this.store.claim(!0),this.store.save(i.profile),this.open("save");break;case"teleport":Object.assign(i.player,Ql(t)),this.close();break;case"spawn":this.toast(i.spawnParent(t)?"家長已從校門入場":"3名額預算不足"),this.close();break;case"alert":i.alert=+t,i.lastTrouble=i.time,this.close();break;case"devReset":i.reset(i.mode),this.open("debug");break;case"debugHUD":this.debug=!this.debug,this.close();break}}toast(e,t){let n=se("#speech");n.hidden=!e.includes("：")&&!/^(各位|我們|這是|請不要|物品)/.test(e),n.hidden||(n.textContent=e);const i=se("#toast"),s=document.createElement("span");s.className="toast-text",s.textContent=e,i.replaceChildren(s);const a=!!t&&t.gain>0&&["dog_lion","dog_mani"].includes(t.id);if(i.classList.toggle("toast-dog",a),a){const o=document.createElement("span");o.className="toast-dog-face",o.innerHTML=bm(t.id),i.prepend(o),n.hidden=!0}n.hidden?se("#toast").classList.add("visible"):se("#toast").classList.remove("visible"),this.toastUntil=performance.now()+(a?3e3:4e3)}setQuestCollapsed(e){this.questCollapsed=e,se(".quest").classList.toggle("is-collapsed",e),se("#quest-body").hidden=e,se("#quest-toggle").setAttribute("aria-expanded",String(!e)),se("#quest-toggle").setAttribute("aria-label",e?"展開今日提示":"收合今日提示"),se("#quest-chevron").textContent=e?"▽":"△"}updateQuest(){const e=this.game,t=e.tutorial>=0?"日常差事教學":e.attempt?ll(e):"今天，想做點什麼？",n=e.tutorial>=0?e.tutorialText():e.step?`${e.step.text}　${e.attempt.count}/${e.step.count||1}`:"探索校園，或從今日待辦選一件差事。",i=JSON.stringify([e.session,e.tutorial,e.attempt?.id,e.attempt?.step,t,n]);i!==this.questContent&&(this.questContent=i,se("#quest-title").textContent=t,se("#quest-detail").textContent=n,se("#skip").hidden=e.tutorial<0,this.setQuestCollapsed(!1))}update(e){let t=this.game,n=t.player;if(this.hudClock+=e,this.hudClock<.1)return;this.hudClock=0,se("#hp-text").textContent=Math.ceil(n.hp)+" / 100",se("#hp-bar").style.width=n.hp+"%",se("#alert-text").textContent="警戒 "+t.level,se("#alert-circles").innerHTML=Array.from({length:4},(h,c)=>`<i class="${c<t.level?"lit":""}"></i>`).join(""),se("#alert-reason").textContent=t.reason,se("#held").textContent=t.held?Ii[t.held.type].label:"空手・從容",se("#zone").textContent=wn.find(h=>h.id===vi(n))?.label||"共用走廊",se("#points").textContent=t.profile.points+" 點",this.updateQuest(),t.meeting.running&&(se("#zone").textContent="校事會議",se("#quest-title").textContent=`失控 ${t.meeting.chaos}/100 · 剩餘 ${Math.max(0,Math.ceil(75-t.meeting.elapsed))}秒`,se("#quest-detail").textContent=t.meeting.context()||"可以搗亂，也可以隨時離席",se("#alert-text").textContent=`失控 ${t.meeting.chaos}/100`,se("#alert-reason").textContent=`剩餘 ${Math.max(0,Math.ceil(75-t.meeting.elapsed))}秒 · ${t.meeting.selected.length} 種橋段`,se("#quest-detail").textContent=t.meeting.context()||t.meeting.selected.map(h=>Ja.find(c=>c.id===h)?.label).join("／")),se("#world").style.opacity=t.meeting.phase==="ENTERING"?"0.15":"1",se("#meeting-controls").hidden=!t.meeting.running,se(".side-nav").hidden=t.meeting.running,se("#meeting-use").textContent=t.meeting.context()||"靠近特殊道具",se("#meeting-use").disabled=!t.meeting.context(),se("#meeting-display").hidden=!t.meeting.running,se("#meeting-display").textContent=t.meeting.selected.includes("projector")?"投影："+t.meeting.cards[t.meeting.projectorPage]:t.meeting.selected.includes("whiteboard")?"白板："+(t.meeting.boardMusic?"♩ ♪ ♫ 四分音符":["說明／討論／決議","決議／說明／討論","討論／決議／說明"][t.meeting.agenda]):"",se("#throw").hidden=!t.held,se("#drop").hidden=!t.held,se("#meeting-ready").textContent=t.meeting.triggerStatus(),se("#meeting-ready").hidden=t.meeting.running,se("#conduct").hidden=!t.choir,se("#actions").textContent=n.hidden?"離開藏點":"動作";let i=t.nearest();if(se("#context").textContent=n.hidden?"互動：離開藏點":i?"互動 · "+i.label:"靠近物品或人物",se("#arrival").textContent=t.familyQueue.length?`${wm(t.familyQueue[0].type)}到校 · ${Math.max(0,Math.ceil(t.familyQueue[0].at-t.time))}s`:"",se("#arrival").hidden=!t.familyQueue.length,t.meeting.running||(se("#zone").textContent+=" · "+t.life.phase,!t.attempt&&t.tutorial<0&&(se("#quest-detail").textContent=t.life.context()),se("#alert-reason").textContent=t.reason+(t.life.p.stomach>0?" · 肚子提出異議 "+Math.ceil(t.life.p.stomach)+"秒":"")),t.choir){let h=t.time-t.choir.start,c=h/.75,u=[3,7,11,15,19,23,27,31].find(l=>l>=c-.35);se("#beat").hidden=!1,se("#beat").innerHTML=`<span>第 ${Math.min(32,Math.floor(c)+1)} / 32 拍　${t.choir.hits}/8命中</span><div class="beat-ring" style="transform:scale(${u===void 0?1:Math.min(2,Math.max(.6,1+(u-c)*.35))})"></div><b>${u!==void 0&&Math.abs(u-c)<.35?"現在！":"跟著收圈"}</b>`}else se("#beat").hidden=!0;const s=t.microphoneSignals().filter(h=>this.render.inView(h)&&Math.hypot(h.x-n.x,h.z-n.z)<12),a=s.find(h=>h.kind==="call")||s[0],o=se("#microphone-speech");if(o.hidden=!a,a){const h=this.render.project(a,a.kind==="call"?2.6:1);o.textContent=a.text,o.style.left=Math.min(innerWidth-110,Math.max(110,h.x))+"px",o.style.top=Math.min(innerHeight-40,Math.max(30,h.y))+"px"}if(performance.now()>this.toastUntil)se("#toast").classList.remove("visible"),se("#speech").hidden=!0;else if(!se("#speech").hidden){let h=this.render.project(n);se("#speech").style.left=Math.min(innerWidth-115,Math.max(115,h.x))+"px",se("#speech").style.top=Math.max(24,h.y)+"px"}se("#debug-hud").hidden=!this.debug,this.debug&&(se("#debug-hud").textContent=JSON.stringify({...this.render.measure(),voices:this.audio.voices.size,musicVoices:this.audio.musicVoices.size,save:this.store.error},null,2)),this.store.error&&(se("#save-warning").textContent=this.store.error)}}function ll(r){return Rs.find(e=>e.id===r.attempt.mission)?.label||""}function wm(r){return As.find(e=>e.id===r)?.label+"家長"}function ws(r,e){return Math.hypot(r.x-e.x,r.z-e.z)}const Hl=document.querySelector("#app");Hl.innerHTML='<main id="game"><canvas id="world" aria-label="東山校園3D沙盒"></canvas><div class="hud"><div class="top-left"><div class="school-brand">東山 <span>校園大騷動</span></div><div class="status-card"><div class="hp-line"><span>開心導師</span><b id="hp-text">100 / 100</b></div><div class="hp-track"><div id="hp-bar"></div></div><div class="alert-line"><b id="alert-text">警戒 0</b><span id="alert-circles"></span></div><small id="alert-reason">校園一切正常</small><small id="meeting-ready"></small></div></div><div class="top-right"><span id="points" class="point-pill">20 點</span><button id="dogs-entry" aria-label="校狗">校狗</button><button id="map" aria-label="校園地圖">⌖</button><button id="menu" aria-label="暫停">Ⅱ</button></div><div class="quest"><button id="quest-toggle" aria-expanded="true" aria-controls="quest-body" aria-label="收合今日提示"><span class="eyebrow"><span class="quest-caption">TODAY AT DONGSHAN</span><span id="zone">導師辦公室</span></span><span id="quest-chevron" aria-hidden="true">△</span></button><div id="quest-body"><h3 id="quest-title">今天，想做點什麼？</h3><p id="quest-detail"></p><button id="skip">跳過教學</button></div></div><div class="side-nav"><button id="tasks"><span>☷</span>待辦</button><button id="calendar"><span>▦</span>行事曆</button></div><div id="meeting-controls" hidden><button id="meeting-use">特殊互動 F</button><button id="meeting-leave">離席</button></div><div id="meeting-display" hidden></div><div id="arrival" hidden></div><div id="beat" hidden></div><div id="speech" hidden></div><div id="microphone-speech" role="status" hidden></div><div id="toast" role="status" aria-live="polite"></div><div class="bottom-info"><span id="held">空手・從容</span><button id="actions">動作</button><span id="context">靠近物品或人物</span></div><div class="controls"><div id="joystick" aria-label="移動搖桿"><div id="knob"></div></div><div class="action-cluster"><button id="drop" hidden aria-label="放下手中物品 R">↓<small>放下 R</small></button><button id="throw" hidden>↗<small>投擲 Q</small></button><button id="conduct" hidden>♫<small>指揮 Enter</small></button><button id="dodge">↝<small>閃避 K</small></button><button id="attack">✦<small>揮打 J</small></button><button id="interact">✋<small>互動 E</small></button></div></div><pre id="debug-hud" hidden></pre><small id="save-warning"></small></div><div id="modal"></div></main>';const Ai=new nc,Qt=new ic(Ai.load(),6477);let Kn;try{Kn=new ym(document.querySelector("#world"),Qt)}catch(r){throw Hl.innerHTML='<div class="compat"><h1>需要 WebGL 2 支援</h1><p>此瀏覽器未能啟動真正3D畫面。請開啟硬體加速或改用支援WebGL的瀏覽器。</p><pre></pre></div>',document.querySelector("pre").textContent=r.message,r}Qt.cameraVisible=r=>Kn.inView(r);const Vr=new Em(document.querySelector("#world"),document.querySelector("#joystick"),document.querySelector("#knob")),Or=new rc(Qt),Bt=new Tm(Qt,Kn,Vr,Or,Ai);document.querySelector("#skip").addEventListener("click",()=>Qt.finishTutorial());document.querySelector("#meeting-use").addEventListener("click",()=>Qt.meeting.secondary());document.querySelector("#meeting-leave").addEventListener("click",()=>Qt.meeting.leave());let cl=performance.now(),Wn=0;function Vl(r){let e=(r-cl)/1e3;cl=r;let t=Math.min(.133,e);if(Bt.paused)Wn=0;else{Wn+=t;let n=0;for(;Wn>=1/30&&n++<4;)Qt.tick(1/30,Vr.movement()),Wn-=1/30;n>=4&&(Wn=0)}Kn.frame(e,Bt.started&&!Bt.paused,Bt.paused?1:Wn/(1/30)),Bt.update(t),requestAnimationFrame(Vl)}requestAnimationFrame(Vl);Bt.onPause=()=>{Wn=0};document.addEventListener("visibilitychange",()=>{document.hidden&&(Vr.clear(),Or.pause(),Bt.started&&Bt.open("pause"),Ai.save(Qt.profile))});window.addEventListener("blur",()=>{Vr.clear(),Bt.started&&Bt.open("pause")});window.addEventListener("pagehide",r=>{Ai.save(Qt.profile),Ai.dispose(),Or.pause(),r.persisted||Or.dispose()});let Gl=document.querySelector("#world");Gl.addEventListener("webglcontextlost",r=>{r.preventDefault(),Kn.ctxLost=!0,Ai.save(Qt.profile),Bt.open("pause"),Bt.toast("3D繪圖中斷，已暫停並儲存。等待恢復或重新載入。")});Gl.addEventListener("webglcontextrestored",()=>{Kn.ctxLost=!1,Kn.lastSession=-1,Bt.toast("3D畫面已恢復，按繼續遊玩")});
