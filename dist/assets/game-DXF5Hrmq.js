import{z as Tn,d as Vt,a as vi,b as Gi,c as ll,l as Ga,p as Ts,e as Wa,s as Wr,f as jl,g as Xa,h as $a,i as qa,j as Ya,k as Kl,m as Ii,n as ja,o as As,q as Ka,r as Zl,v as Jl,t as Ql,S as ec,G as tc,A as nc}from"./audio-zzfKlFix.js";const Y={wood:"#ae9476",lightWood:"#c4ae8d",dark:"#3d4c4e",white:"#f4efdd",green:"#446e60",blue:"#7e969e",brick:"#b97059",yellow:"#e5bd4a",grass:"#71987a"},se=(r,e,t,n=[0,0,0])=>({shape:"box",p:r,s:e,color:t,r:n}),bt=(r,e,t,n=[0,0,0])=>({shape:"cyl",p:r,s:e,color:t,r:n}),Jn=(r,e,t)=>({shape:"sphere",p:r,s:e,color:t});function ws(r){const{w:e,d:t,h:n,type:i}=r,s=(c=Y.lightWood)=>[se([0,n-.06,0],[e,.12,t],c),...[-1,1].flatMap(h=>[-1,1].map(u=>se([h*(e/2-.12),(n-.12)/2,u*(t/2-.1)],[.09,n-.12,.09],Y.dark)))],a=(c=Y.blue)=>[se([0,.46,0],[e,.1,t],c),se([0,n*.75,-t*.45],[e,n*.5,.08],c),...[-1,1].flatMap(h=>[-1,1].map(u=>se([h*e*.36,.23,u*t*.36],[.065,.46,.065],Y.dark)))],o=(c=Y.wood)=>[se([-e/2+.06,n/2,0],[.12,n,t],c),se([e/2-.06,n/2,0],[.12,n,t],c),se([0,n/2,-t*.44],[e,n,.08],c),...Array.from({length:3},(h,u)=>se([0,.12+u*(n-.18)/2,0],[e,.08,t],c))];switch(i){case"student_desk":case"work_desk":case"principal_desk":case"nurse_desk":return[...s(),...i==="principal_desk"?[se([0,n*.5,-t*.25],[e*.9,n*.85,.12],Y.wood)]:[]];case"student_chair":case"visitor_chair":case"office_seat":case"high_chair":return a(i==="high_chair"?Y.dark:i==="visitor_chair"?Y.wood:Y.blue);case"piano_bench":return[se([0,.46,0],[e,.12,t],Y.dark),se([-e*.35,.23,0],[.09,.46,t*.8],Y.dark),se([e*.35,.23,0],[.09,.46,t*.8],Y.dark)];case"short_bench":return[se([0,.45,0],[e,.12,t],Y.wood),se([0,.72,-t*.45],[e,.45,.06],Y.wood),se([-e*.35,.22,0],[.12,.44,t*.8],Y.dark),se([e*.35,.22,0],[.12,.44,t*.8],Y.dark)];case"counter":case"shop_counter":return[se([0,n/2,0],[e,n,t],Y.blue),se([0,n,0],[e+.08,.08,t+.08],Y.lightWood),se([0,n*.5,t*.51],[e*.8,.09,.02],Y.white)];case"low_shelf":case"instrument_shelf":case"equipment_rack":case"lost_found":return[...o(),se([0,n,0],[e+.06,.08,t+.06],Y.lightWood),...[-.3,.3].map(c=>se([c*e,n*.48,.05],[.07,n*.8,t*.8],Y.wood))];case"file_cabinet":return[se([0,n/2,0],[e,n,t],Y.blue),...Array.from({length:3},(c,h)=>se([0,.3+h*.45,t*.51],[e*.8,.34,.03],Y.white)),...Array.from({length:3},(c,h)=>se([0,.35+h*.45,t*.55],[.2,.035,.04],Y.dark))];case"trophy_shelf":return[...o(),...[-.55,.55].flatMap(c=>[bt([c,.76,-.18],[.16,.2,.16],Y.yellow),{shape:"cone",p:[c,1,-.18],s:[.35,.32,.35],color:Y.yellow}])];case"stock_shelf":return[...o(),...[-.55,0,.55].flatMap((c,h)=>[se([c,.4,0],[.3,.35,.3],[Y.brick,Y.yellow,Y.green][h]),se([c,1,0],[.26,.4,.26],[Y.blue,Y.white,Y.brick][h])])];case"fridge":return[se([0,n/2,0],[e,n,t],Y.white),se([0,n*.55,t*.51],[e*.8,n*.7,.04],Y.blue),se([e*.32,n*.6,t*.55],[.05,.32,.05],Y.dark),...[-.22,.22].map(c=>se([c,.4,t*.54],[.18,.28,.04],Y.green))];case"blackboard":case"music_board":return[se([0,1.55,0],[e,.95,.12],Y.wood),se([0,1.55,.075],[e-.2,.8,.025],i==="music_board"?Y.white:"#234c42"),se([0,1.04,.15],[e,.065,.18],Y.wood),...Array.from({length:i==="music_board"?5:3},(c,h)=>se([-.5,1.35+h*.1,.096],[e*.45,.013,.012],i==="music_board"?Y.dark:Y.white)),...i==="music_board"?[Jn([.8,1.45,.12],[.1,.07,.04],Y.dark),se([.85,1.58,.12],[.02,.25,.015],Y.dark)]:[]];case"notice":case"poster":case"honor":case"visitor_board":return[se([0,1.5,0],[e,.9,.1],Y.wood),...[-.3,0,.3].map((c,h)=>se([c*e,1.5,.07],[e*.23,.5,.025],[Y.yellow,Y.blue,Y.white][h]))];case"books":return[se([0,.07,0],[.45,.1,.32],Y.blue),se([-.2,.07,0],[.035,.1,.32],Y.dark),se([.02,.11,0],[.38,.025,.28],Y.white)];case"paper_tray":return[se([0,1,0],[e,.06,t],Y.blue),se([0,1.07,0],[e*.9,.08,t*.9],Y.white),se([0,1.13,0],[e*.65,.02,t*.6],Y.yellow)];case"pencil_cup":return[bt([0,1.03,0],[.18,.22,.18],Y.blue),...[-.04,.04].map(c=>bt([c,1.2,0],[.02,.3,.02],Y.dark))];case"cleaning_rack":return[se([0,1.25,0],[e,.1,.2],Y.wood),...[-.4,.4].map(c=>se([c,1.05,.1],[.05,.35,.05],Y.dark))];case"wig_stand":return[bt([0,1.04,0],[.1,.26,.1],Y.dark),Jn([0,1.2,0],[.36,.4,.34],Y.white)];case"triangle_rack":return[bt([-.4,.75,0],[.06,1.5,.06],Y.dark),bt([.4,.75,0],[.06,1.5,.06],Y.dark),se([0,1.5,0],[1,.06,.06],Y.dark),se([0,.03,0],[1,.06,.5],Y.dark)];case"drums":return[bt([0,.46,0],[.7,.75,.7],Y.brick),bt([0,.85,0],[.72,.035,.72],Y.white),bt([-.5,.75,.3],[.38,.4,.38],Y.blue),bt([.55,1,0],[.62,.04,.62],Y.yellow),bt([.55,.5,0],[.04,1,.04],Y.dark)];case"formal_rug":case"rehearsal_mat":return[se([0,.06,0],[e,.025,t],i==="formal_rug"?"#9b7370":"#a8bdb0")];case"garden":return[se([0,.15,0],[e,.3,t],Y.wood),se([0,.32,0],[e-.2,.05,t-.2],Y.grass),...[-.6,.6].map(c=>Jn([c,.5,.3],[.7,.45,.7],Y.green))];case"tree":return[bt([0,1.1,0],[.25,2.2,.25],Y.wood),Jn([0,2.35,0],[2.3,1.6,2.3],Y.grass),Jn([.55,2.6,.25],[1.5,1.2,1.5],"#86a486")];case"plant":return[bt([0,.22,0],[.45,.45,.45],Y.brick),Jn([0,.65,0],[.65,.7,.65],Y.grass)];case"direction_post":return[bt([0,.9,0],[.08,1.8,.08],Y.wood),se([0,1.5,0],[1.5,.32,.1],Y.green),se([.2,1.12,0],[1.1,.26,.1],Y.blue)];case"water_station":return[se([0,.7,0],[e,1.4,t],Y.blue),se([0,1.08,t*.52],[e*.75,.33,.05],Y.white),se([0,.8,t*.58],[.13,.04,.17],Y.dark)];case"wastebasket":return[bt([0,n/2,0],[e,n,t],Y.blue),bt([0,n,0],[e*.8,.025,t*.8],Y.dark)];case"basketball_hoop":return[se([0,1.5,0],[.12,3,.12],Y.dark),se([0,2.8,.3],[1.5,.85,.09],Y.white),se([0,2.8,.36],[.45,.33,.015],Y.blue),{shape:"torus",p:[0,2.45,.7],s:[.6,.6,.6],color:Y.brick,r:[Math.PI/2,0,0]}];case"ball_crate":case"crate":return[se([0,.1,0],[e,.2,t],Y.wood),...[-1,1].map(c=>se([c*e*.48,.3,0],[.05,.4,t],Y.wood)),se([0,.3,-t*.48],[e,.4,.05],Y.wood)];case"guard_booth":return[se([0,.05,0],[e,.1,t],"#c8c6b0"),se([0,2,-t*.3],[e,.1,t*.45],Y.blue),...[-1,1].map(c=>se([c*e*.45,1,-t*.3],[.12,2,.12],Y.blue)),se([0,1.1,-t*.45],[e,.8,.08],Y.white),se([0,1.6,-t*.4],[e*.75,.35,.04],Y.blue)];case"awning":return[se([0,2.3,-.6],[e,.12,t*.4],Y.brick),...[-1,1].map(c=>se([c*e*.48,1.15,-t*.45],[.08,2.3,.08],Y.wood))];case"queue_mark":return[se([0,.035,0],[e,.015,t],Y.yellow)];case"medical_bed":return[se([0,.38,0],[e,.55,t],Y.white),se([0,.68,0],[e,.12,t],Y.blue),se([0,.79,-t*.35],[e*.8,.15,.45],Y.white),se([0,.76,t*.15],[e,.1,t*.55],"#a7bdb8"),...[-1,1].map(c=>se([c*e*.45,.3,0],[.07,.6,t*.8],Y.dark))];case"medical_cabinet":return[se([0,n/2,0],[e,n,t],Y.white),se([0,n*.65,t*.51],[.38,.3,.03],Y.green),se([-.05,n*.68,t*.54],[.18,.03,.02],Y.white),se([.1,n*.75,t*.54],[.025,.18,.02],Y.white)];case"screen":return[se([0,.8,0],[.08,1.25,t],Y.blue),se([0,.05,0],[.45,.1,t],Y.dark)];case"stage":return[se([0,.12,0],[e,.24,t],Y.wood)];case"stage_steps":return[se([0,.06,0],[e,.12,t],Y.wood)];case"stage_backdrop":return[se([0,1,0],[e,1.6,.08],Y.green)];case"bunting":return Array.from({length:8},(c,h)=>({shape:"cone",p:[-e/2+h*e/7,2.1,0],s:[.5,.55,.035],color:h%2?Y.brick:Y.yellow,r:[0,0,Math.PI]}));default:return s()}}function ic(r,e,t){const n=r/e<1?13:11.5,i=r<=600||t&&Math.min(r,e)<=600;return n/(i?2.2:1)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="180",rc=0,Za=1,sc=2,cl=1,ac=2,mn=3,Pn=0,Dt=1,gn=2,wn=0,Mi=1,Ja=2,Qa=3,eo=4,oc=5,Wn=100,lc=101,cc=102,hc=103,uc=104,dc=200,fc=201,pc=202,mc=203,Rs=204,Cs=205,gc=206,_c=207,vc=208,xc=209,Mc=210,Sc=211,yc=212,Ec=213,bc=214,Ps=0,Ls=1,Ds=2,yi=3,Is=4,Us=5,Ns=6,Fs=7,Ma=0,Tc=1,Ac=2,Rn=0,wc=1,Rc=2,Cc=3,Pc=4,Lc=5,Dc=6,Ic=7,hl=300,Ei=301,bi=302,Os=303,Bs=304,Or=306,zs=1e3,$n=1001,ks=1002,zt=1003,Uc=1004,tr=1005,rn=1006,Xr=1007,qn=1008,on=1009,ul=1010,dl=1011,Xi=1012,Sa=1013,jn=1014,sn=1015,Ki=1016,ya=1017,Ea=1018,$i=1020,fl=35902,pl=35899,ml=1021,gl=1022,Jt=1023,qi=1026,Yi=1027,ba=1028,Ta=1029,_l=1030,Aa=1031,wa=1033,wr=33776,Rr=33777,Cr=33778,Pr=33779,Hs=35840,Vs=35841,Gs=35842,Ws=35843,Xs=36196,$s=37492,qs=37496,Ys=37808,js=37809,Ks=37810,Zs=37811,Js=37812,Qs=37813,ea=37814,ta=37815,na=37816,ia=37817,ra=37818,sa=37819,aa=37820,oa=37821,la=36492,ca=36494,ha=36495,ua=36283,da=36284,fa=36285,pa=36286,Nc=3200,Fc=3201,vl=0,Oc=1,An="",Ot="srgb",Ti="srgb-linear",Dr="linear",et="srgb",Qn=7680,to=519,Bc=512,zc=513,kc=514,xl=515,Hc=516,Vc=517,Gc=518,Wc=519,ma=35044,Xc=35048,no="300 es",an=2e3,Ir=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,ga=180/Math.PI;function Cn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Xe(r,e,t){return Math.max(e,Math.min(t,r))}function $c(r,e){return(r%e+e)%e}function qr(r,e,t){return(1-t)*r+t*e}function nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],h=n[i+1],u=n[i+2],l=n[i+3];const f=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=l;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(l!==x||c!==f||h!==p||u!==_){let m=1-o;const d=c*f+h*p+u*_+l*x,T=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const C=Math.sqrt(A),R=Math.atan2(C,d*T);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const y=o*T;if(c=c*m+f*y,h=h*m+p*y,u=u*m+_*y,l=l*m+x*y,m===1-o){const C=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=C,h*=C,u*=C,l*=C}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],h=n[i+2],u=n[i+3],l=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*l+c*p-h*f,e[t+1]=c*_+u*f+h*l-o*p,e[t+2]=h*_+u*p+o*f-c*l,e[t+3]=u*_-o*l-c*f-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(i/2),l=o(s/2),f=c(n/2),p=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=f*u*l+h*p*_,this._y=h*p*l-f*u*_,this._z=h*u*_+f*p*l,this._w=h*u*l-f*p*_;break;case"YXZ":this._x=f*u*l+h*p*_,this._y=h*p*l-f*u*_,this._z=h*u*_-f*p*l,this._w=h*u*l+f*p*_;break;case"ZXY":this._x=f*u*l-h*p*_,this._y=h*p*l+f*u*_,this._z=h*u*_+f*p*l,this._w=h*u*l-f*p*_;break;case"ZYX":this._x=f*u*l-h*p*_,this._y=h*p*l+f*u*_,this._z=h*u*_-f*p*l,this._w=h*u*l+f*p*_;break;case"YZX":this._x=f*u*l+h*p*_,this._y=h*p*l+f*u*_,this._z=h*u*_-f*p*l,this._w=h*u*l-f*p*_;break;case"XZY":this._x=f*u*l-h*p*_,this._y=h*p*l-f*u*_,this._z=h*u*_+f*p*l,this._w=h*u*l+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],l=t[10],f=n+o+l;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-h)*p,this._z=(a-i)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+h)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(s-h)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(a-i)/p,this._x=(s+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+i*h-s*c,this._y=i*u+a*c+s*o-n*h,this._z=s*u+a*h+n*c-i*o,this._w=a*u-n*o-i*c-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),l=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=a*l+this._w*f,this._x=n*l+this._x*f,this._y=i*l+this._y*f,this._z=s*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*i-o*n),u=2*(o*t-s*i),l=2*(s*n-a*t);return this.x=t+c*h+a*l-o*u,this.y=n+c*u+o*h-s*l,this.z=i+c*l+s*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new F,io=new Zi;class ze{constructor(e,t,n,i,s,a,o,c,h){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,h)}set(e,t,n,i,s,a,o,c,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],l=n[7],f=n[2],p=n[5],_=n[8],x=i[0],m=i[3],d=i[6],T=i[1],A=i[4],y=i[7],C=i[2],R=i[5],D=i[8];return s[0]=a*x+o*T+c*C,s[3]=a*m+o*A+c*R,s[6]=a*d+o*y+c*D,s[1]=h*x+u*T+l*C,s[4]=h*m+u*A+l*R,s[7]=h*d+u*y+l*D,s[2]=f*x+p*T+_*C,s[5]=f*m+p*A+_*R,s[8]=f*d+p*y+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*s*u+n*o*c+i*s*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],l=u*a-o*h,f=o*c-u*s,p=h*s-a*c,_=t*l+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=l*x,e[1]=(i*h-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(u*t-i*c)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*c-h*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-i*h,i*c,-i*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jr.makeScale(e,t)),this}rotate(e){return this.premultiply(jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new ze;function Ml(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qc(){const r=Ur("canvas");return r.style.display="block",r}const ro={};function ji(r){r in ro||(ro[r]=!0,console.warn(r))}function Yc(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const so=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ao=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jc(){const r={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?Dr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ti]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:so,fromXYZ:ao,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:et,toXYZ:so,fromXYZ:ao,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}const Ke=jc();function _n(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Si(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ei;class Kc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=Ur("canvas")),ei.width=e.width,ei.height=e.height;const i=ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=_n(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zc=0;class Ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Kr(i[a].image)):s.push(Kr(i[a]))}else s=Kr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;const Zr=new F;class wt extends Ri{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=$n,i=$n,s=rn,a=qn,o=Jt,c=on,h=wt.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Cn(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zr).x}get height(){return this.source.getSize(Zr).y}get depth(){return this.source.getSize(Zr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=hl;wt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,h=c[0],u=c[4],l=c[8],f=c[1],p=c[5],_=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(l-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+x)<.1&&Math.abs(_+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,y=(p+1)/2,C=(d+1)/2,R=(u+f)/4,D=(l+x)/4,O=(_+m)/4;return A>y&&A>C?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=R/n,s=D/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=R/i,s=O/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=D/s,i=O/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(l-x)*(l-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(l-x)/T,this.z=(f-u)/T,this.w=Math.acos((h+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qc extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new wt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ra(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sl extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eh extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),ir.subVectors(this.max,Ui),ti.subVectors(e.a,Ui),ni.subVectors(e.b,Ui),ii.subVectors(e.c,Ui),vn.subVectors(ni,ti),xn.subVectors(ii,ni),Fn.subVectors(ti,ii);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Fn.z,Fn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Fn.z,0,-Fn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Fn.y,Fn.x,0];return!Jr(t,ti,ni,ii,ir)||(t=[1,0,0,0,1,0,0,0,1],!Jr(t,ti,ni,ii,ir))?!1:(rr.crossVectors(vn,xn),t=[rr.x,rr.y,rr.z],Jr(t,ti,ni,ii,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new F,new F,new F,new F,new F,new F,new F,new F],Yt=new F,nr=new In,ti=new F,ni=new F,ii=new F,vn=new F,xn=new F,Fn=new F,Ui=new F,ir=new F,rr=new F,On=new F;function Jr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){On.fromArray(r,s);const o=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),c=e.dot(On),h=t.dot(On),u=n.dot(On);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const th=new In,Ni=new F,Qr=new F;class Ji{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):th.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(Qr)),this.expandByPoint(Ni.copy(e.center).sub(Qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const un=new F,es=new F,sr=new F,Mn=new F,ts=new F,ar=new F,ns=new F;class yl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){es.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=Mn.dot(this.direction),c=-Mn.dot(sr),h=Mn.lengthSq(),u=Math.abs(1-a*a);let l,f,p,_;if(u>0)if(l=a*c-o,f=a*o-c,_=s*u,l>=0)if(f>=-_)if(f<=_){const x=1/u;l*=x,f*=x,p=l*(l+a*f+2*o)+f*(a*l+f+2*c)+h}else f=s,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*c)+h;else f=-s,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*c)+h;else f<=-_?(l=Math.max(0,-(-a*s+o)),f=l>0?-s:Math.min(Math.max(-s,-c),s),p=-l*l+f*(f+2*c)+h):f<=_?(l=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+h):(l=Math.max(0,-(a*s+o)),f=l>0?s:Math.min(Math.max(-s,-c),s),p=-l*l+f*(f+2*c)+h);else f=a>0?-s:s,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(es).addScaledVector(sr,f),p}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),l>=0?(o=(e.min.z-f.z)*l,c=(e.max.z-f.z)*l):(o=(e.max.z-f.z)*l,c=(e.min.z-f.z)*l),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,i,s){ts.subVectors(t,e),ar.subVectors(n,e),ns.crossVectors(ts,ar);let a=this.direction.dot(ns),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,e);const c=o*this.direction.dot(ar.crossVectors(Mn,ar));if(c<0)return null;const h=o*this.direction.dot(ts.cross(Mn));if(h<0||c+h>a)return null;const u=-o*Mn.dot(ns);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,a,o,c,h,u,l,f,p,_,x,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,h,u,l,f,p,_,x,m)}set(e,t,n,i,s,a,o,c,h,u,l,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=h,d[6]=u,d[10]=l,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*l,_=o*u,x=o*l;t[0]=c*u,t[4]=-c*l,t[8]=h,t[1]=p+_*h,t[5]=f-x*h,t[9]=-o*c,t[2]=x-f*h,t[6]=_+p*h,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*l,_=h*u,x=h*l;t[0]=f+x*o,t[4]=_*o-p,t[8]=a*h,t[1]=a*l,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*l,_=h*u,x=h*l;t[0]=f-x*o,t[4]=-a*l,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*l,_=o*u,x=o*l;t[0]=c*u,t[4]=_*h-p,t[8]=f*h+x,t[1]=c*l,t[5]=x*h+f,t[9]=p*h-_,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*h,_=o*c,x=o*h;t[0]=c*u,t[4]=x-f*l,t[8]=_*l+p,t[1]=l,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=p*l+_,t[10]=f-x*l}else if(e.order==="XZY"){const f=a*c,p=a*h,_=o*c,x=o*h;t[0]=c*u,t[4]=-l,t[8]=h*u,t[1]=f*l+x,t[5]=a*u,t[9]=p*l-_,t[2]=_*l-p,t[6]=o*u,t[10]=x*l+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nh,e,ih)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Sn.crossVectors(n,Nt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Sn.crossVectors(n,Nt)),Sn.normalize(),or.crossVectors(Nt,Sn),i[0]=Sn.x,i[4]=or.x,i[8]=Nt.x,i[1]=Sn.y,i[5]=or.y,i[9]=Nt.y,i[2]=Sn.z,i[6]=or.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],l=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],d=n[14],T=n[3],A=n[7],y=n[11],C=n[15],R=i[0],D=i[4],O=i[8],S=i[12],M=i[1],L=i[5],z=i[9],V=i[13],X=i[2],j=i[6],$=i[10],re=i[14],G=i[3],he=i[7],pe=i[11],we=i[15];return s[0]=a*R+o*M+c*X+h*G,s[4]=a*D+o*L+c*j+h*he,s[8]=a*O+o*z+c*$+h*pe,s[12]=a*S+o*V+c*re+h*we,s[1]=u*R+l*M+f*X+p*G,s[5]=u*D+l*L+f*j+p*he,s[9]=u*O+l*z+f*$+p*pe,s[13]=u*S+l*V+f*re+p*we,s[2]=_*R+x*M+m*X+d*G,s[6]=_*D+x*L+m*j+d*he,s[10]=_*O+x*z+m*$+d*pe,s[14]=_*S+x*V+m*re+d*we,s[3]=T*R+A*M+y*X+C*G,s[7]=T*D+A*L+y*j+C*he,s[11]=T*O+A*z+y*$+C*pe,s[15]=T*S+A*V+y*re+C*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],l=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*c*l-i*h*l-s*o*f+n*h*f+i*o*p-n*c*p)+x*(+t*c*p-t*h*f+s*a*f-i*a*p+i*h*u-s*c*u)+m*(+t*h*l-t*o*p-s*a*l+n*a*p+s*o*u-n*h*u)+d*(-i*o*u-t*c*l+t*o*f+i*a*l-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],l=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],T=l*m*h-x*f*h+x*c*p-o*m*p-l*c*d+o*f*d,A=_*f*h-u*m*h-_*c*p+a*m*p+u*c*d-a*f*d,y=u*x*h-_*l*h+_*o*p-a*x*p-u*o*d+a*l*d,C=_*l*c-u*x*c-_*o*f+a*x*f+u*o*m-a*l*m,R=t*T+n*A+i*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=T*D,e[1]=(x*f*s-l*m*s-x*i*p+n*m*p+l*i*d-n*f*d)*D,e[2]=(o*m*s-x*c*s+x*i*h-n*m*h-o*i*d+n*c*d)*D,e[3]=(l*c*s-o*f*s-l*i*h+n*f*h+o*i*p-n*c*p)*D,e[4]=A*D,e[5]=(u*m*s-_*f*s+_*i*p-t*m*p-u*i*d+t*f*d)*D,e[6]=(_*c*s-a*m*s-_*i*h+t*m*h+a*i*d-t*c*d)*D,e[7]=(a*f*s-u*c*s+u*i*h-t*f*h-a*i*p+t*c*p)*D,e[8]=y*D,e[9]=(_*l*s-u*x*s-_*n*p+t*x*p+u*n*d-t*l*d)*D,e[10]=(a*x*s-_*o*s+_*n*h-t*x*h-a*n*d+t*o*d)*D,e[11]=(u*o*s-a*l*s-u*n*h+t*l*h+a*n*p-t*o*p)*D,e[12]=C*D,e[13]=(u*x*i-_*l*i+_*n*f-t*x*f-u*n*m+t*l*m)*D,e[14]=(_*o*i-a*x*i-_*n*c+t*x*c+a*n*m-t*o*m)*D,e[15]=(a*l*i-u*o*i+u*n*c-t*l*c-a*n*f+t*o*f)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,h=s*a,u=s*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,u*o+n,u*c-i*a,0,h*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,h=s+s,u=a+a,l=o+o,f=s*h,p=s*u,_=s*l,x=a*u,m=a*l,d=o*l,T=c*h,A=c*u,y=c*l,C=n.x,R=n.y,D=n.z;return i[0]=(1-(x+d))*C,i[1]=(p+y)*C,i[2]=(_-A)*C,i[3]=0,i[4]=(p-y)*R,i[5]=(1-(f+d))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(_+A)*D,i[9]=(m-T)*D,i[10]=(1-(f+x))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jt.copy(this);const h=1/s,u=1/a,l=1/o;return jt.elements[0]*=h,jt.elements[1]*=h,jt.elements[2]*=h,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=l,jt.elements[9]*=l,jt.elements[10]*=l,t.setFromRotationMatrix(jt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=an,c=!1){const h=this.elements,u=2*s/(t-e),l=2*s/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let _,x;if(c)_=s/(a-s),x=a*s/(a-s);else if(o===an)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ir)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=l,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=an,c=!1){const h=this.elements,u=2/(t-e),l=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,x;if(c)_=1/(a-s),x=a/(a-s);else if(o===an)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ir)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=l,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new F,jt=new at,nh=new F(0,0,0),ih=new F(1,1,1),Sn=new F,or=new F,Nt=new F,oo=new at,lo=new Zi;class ln{constructor(e=0,t=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],h=i[5],u=i[9],l=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Ca{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rh=0;const co=new F,si=new Zi,dn=new at,lr=new F,Fi=new F,sh=new F,ah=new Zi,ho=new F(1,0,0),uo=new F(0,1,0),fo=new F(0,0,1),po={type:"added"},oh={type:"removed"},ai={type:"childadded",child:null},is={type:"childremoved",child:null};class _t extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new F,t=new ln,n=new Zi,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ze}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(ho,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(fo,e)}translateOnAxis(e,t){return co.copy(e).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ho,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Fi,lr,this.up):dn.lookAt(lr,Fi,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(dn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(po),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh),is.child=e,this.dispatchEvent(is),is.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(po),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const l=c[h];s(e.shapes,l)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),l=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new F(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new F,fn=new F,rs=new F,pn=new F,oi=new F,li=new F,mo=new F,ss=new F,as=new F,os=new F,ls=new pt,cs=new pt,hs=new pt;class Wt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kt.subVectors(i,t),fn.subVectors(n,t),rs.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(fn),c=Kt.dot(rs),h=fn.dot(fn),u=fn.dot(rs),l=a*h-o*o;if(l===0)return s.set(0,0,0),null;const f=1/l,p=(h*c-o*u)*f,_=(a*u-o*c)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return ls.setScalar(0),cs.setScalar(0),hs.setScalar(0),ls.fromBufferAttribute(e,t),cs.fromBufferAttribute(e,n),hs.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ls,s.x),a.addScaledVector(cs,s.y),a.addScaledVector(hs,s.z),a}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),fn.subVectors(e,t),Kt.cross(fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Kt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;oi.subVectors(i,n),li.subVectors(s,n),ss.subVectors(e,n);const c=oi.dot(ss),h=li.dot(ss);if(c<=0&&h<=0)return t.copy(n);as.subVectors(e,i);const u=oi.dot(as),l=li.dot(as);if(u>=0&&l<=u)return t.copy(i);const f=c*l-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(oi,a);os.subVectors(e,s);const p=oi.dot(os),_=li.dot(os);if(_>=0&&p<=_)return t.copy(s);const x=p*h-c*_;if(x<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(n).addScaledVector(li,o);const m=u*_-p*l;if(m<=0&&l-u>=0&&p-_>=0)return mo.subVectors(s,i),o=(l-u)/(l-u+(p-_)),t.copy(i).addScaledVector(mo,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function us(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=$c(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=us(a,s,e+1/3),this.g=us(a,s,e),this.b=us(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.workingToColorSpace(At.copy(this),e),Math.round(Xe(At.r*255,0,255))*65536+Math.round(Xe(At.g*255,0,255))*256+Math.round(Xe(At.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(At.copy(this),t);const n=At.r,i=At.g,s=At.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const l=a-o;switch(h=u<=.5?l/(a+o):l/(2-a-o),a){case n:c=(i-s)/l+(i<s?6:0);break;case i:c=(s-n)/l+2;break;case s:c=(n-i)/l+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ot){Ke.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(cr);const n=qr(yn.h,cr.h,t),i=qr(yn.s,cr.s,t),s=qr(yn.l,cr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new $e;$e.NAMES=El;let lh=0;class Ci extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Mi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rs,this.blendDst=Cs,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=to,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rs&&(n.blendSrc=this.blendSrc),this.blendDst!==Cs&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==to&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bl extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new F,hr=new ke;let ch=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ch++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),e}}class Tl extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hh=0;const Gt=new at,ds=new _t,ci=new F,Ft=new In,Oi=new In,yt=new F;class qt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ml(e)?Al:Tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return ds.lookAt(e),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ft.min,Oi.min),Ft.expandByPoint(yt),yt.addVectors(Ft.max,Oi.max),Ft.expandByPoint(yt)):(Ft.expandByPoint(Oi.min),Ft.expandByPoint(Oi.max))}Ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)yt.fromBufferAttribute(o,h),c&&(ci.fromBufferAttribute(e,h),yt.add(ci)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new F,c[O]=new F;const h=new F,u=new F,l=new F,f=new ke,p=new ke,_=new ke,x=new F,m=new F;function d(O,S,M){h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,S),l.fromBufferAttribute(n,M),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(h),l.sub(h),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(l,-p.y).multiplyScalar(L),m.copy(l).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[O].add(x),o[S].add(x),o[M].add(x),c[O].add(m),c[S].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,S=T.length;O<S;++O){const M=T[O],L=M.start,z=M.count;for(let V=L,X=L+z;V<X;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new F,y=new F,C=new F,R=new F;function D(O){C.fromBufferAttribute(i,O),R.copy(C);const S=o[O];A.copy(S),A.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(R,S);const L=y.dot(c[O])<0?-1:1;a.setXYZW(O,A.x,A.y,A.z,L)}for(let O=0,S=T.length;O<S;++O){const M=T[O],L=M.start,z=M.count;for(let V=L,X=L+z;V<X;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,a=new F,o=new F,c=new F,h=new F,u=new F,l=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),l.subVectors(i,s),u.cross(l),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),l.subVectors(i,s),u.cross(l),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const h=o.array,u=o.itemSize,l=o.normalized,f=new h.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)f[_++]=h[p++]}return new $t(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const c=[],h=s[o];for(let u=0,l=h.length;u<l;u++){const f=h[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let l=0,f=h.length;l<f;l++){const p=h[l];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],l=s[h];for(let f=0,p=l.length;f<p;f++)u.push(l[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const l=a[h];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const go=new at,Bn=new yl,ur=new Ji,_o=new F,dr=new F,fr=new F,pr=new F,fs=new F,mr=new F,vo=new F,gr=new F;class Xt extends _t{constructor(e=new qt,t=new bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){mr.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=o[c],l=s[c];u!==0&&(fs.fromBufferAttribute(l,e),a?mr.addScaledVector(fs,u):mr.addScaledVector(fs.sub(t),u))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),Bn.copy(e.ray).recast(e.near),!(ur.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ur,_o)===null||Bn.origin.distanceToSquared(_o)>(e.far-e.near)**2))&&(go.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(go),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,l=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,C=A;y<C;y+=3){const R=o.getX(y),D=o.getX(y+1),O=o.getX(y+2);i=_r(this,d,e,n,h,u,l,R,D,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const T=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);i=_r(this,a,e,n,h,u,l,T,A,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,C=A;y<C;y+=3){const R=y,D=y+1,O=y+2;i=_r(this,d,e,n,h,u,l,R,D,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const T=m,A=m+1,y=m+2;i=_r(this,a,e,n,h,u,l,T,A,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function uh(r,e,t,n,i,s,a,o){let c;if(e.side===Dt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Pn,o),c===null)return null;gr.copy(o),gr.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(gr);return h<t.near||h>t.far?null:{distance:h,point:gr.clone(),object:r}}function _r(r,e,t,n,i,s,a,o,c,h){r.getVertexPosition(o,dr),r.getVertexPosition(c,fr),r.getVertexPosition(h,pr);const u=uh(r,e,t,n,dr,fr,pr,vo);if(u){const l=new F;Wt.getBarycoord(vo,dr,fr,pr,l),i&&(u.uv=Wt.getInterpolatedAttribute(i,o,c,h,l,new ke)),s&&(u.uv1=Wt.getInterpolatedAttribute(s,o,c,h,l,new ke)),a&&(u.normal=Wt.getInterpolatedAttribute(a,o,c,h,l,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:h,normal:new F,materialIndex:0};Wt.getNormal(dr,fr,pr,f.normal),u.face=f,u.barycoord=l}return u}class Pi extends qt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],u=[],l=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(l,2));function _(x,m,d,T,A,y,C,R,D,O,S){const M=y/D,L=C/O,z=y/2,V=C/2,X=R/2,j=D+1,$=O+1;let re=0,G=0;const he=new F;for(let pe=0;pe<$;pe++){const we=pe*L-V;for(let Ge=0;Ge<j;Ge++){const it=Ge*M-z;he[x]=it*T,he[m]=we*A,he[d]=X,h.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[d]=R>0?1:-1,u.push(he.x,he.y,he.z),l.push(Ge/D),l.push(1-pe/O),re+=1}}for(let pe=0;pe<O;pe++)for(let we=0;we<D;we++){const Ge=f+we+j*pe,it=f+we+j*(pe+1),lt=f+(we+1)+j*(pe+1),Ze=f+(we+1)+j*pe;c.push(Ge,it,Ze),c.push(it,lt,Ze),G+=6}o.addGroup(p,G,S),p+=G,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const n=Ai(r[t]);for(const i in n)e[i]=n[i]}return e}function dh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function wl(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const fh={clone:Ai,merge:Pt};var ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ph,this.fragmentShader=mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new F,xo=new ke,Mo=new ke;class Zt extends Rl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,xo,Mo),t.subVectors(Mo,xo)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class gh extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(hi,ui,e,t);i.layers=this.layers,this.add(i);const s=new Zt(hi,ui,e,t);s.layers=this.layers,this.add(s);const a=new Zt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Zt(hi,ui,e,t);o.layers=this.layers,this.add(o);const c=new Zt(hi,ui,e,t);c.layers=this.layers,this.add(c);const h=new Zt(hi,ui,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const h of t)this.remove(h);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,h,u]=this.children,l=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(l,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Cl extends wt{constructor(e=[],t=Ei,n,i,s,a,o,c,h,u){super(e,t,n,i,s,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _h extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:wn});s.uniforms.tEquirect.value=t;const a=new Xt(i,s),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=rn),new gh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class vr extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vh={type:"move"};class ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),d=this._getHandJoint(h,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],f=u.position.distanceTo(l.position),p=.02,_=.005;h.inputState.pinching&&f>p+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=p-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vh)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class So extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ma,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new F;class Nr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pl extends Ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let di;const Bi=new F,fi=new F,pi=new F,mi=new ke,zi=new ke,Ll=new at,xr=new F,ki=new F,Mr=new F,yo=new ke,ms=new ke,Eo=new ke;class Mh extends _t{constructor(e=new Pl){if(super(),this.isSprite=!0,this.type="Sprite",di===void 0){di=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xh(t,5);di.setIndex([0,1,2,0,2,3]),di.setAttribute("position",new Nr(n,3,0,!1)),di.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=di,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),Ll.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-pi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Sr(xr.set(-.5,-.5,0),pi,a,fi,i,s),Sr(ki.set(.5,-.5,0),pi,a,fi,i,s),Sr(Mr.set(.5,.5,0),pi,a,fi,i,s),yo.set(0,0),ms.set(1,0),Eo.set(1,1);let o=e.ray.intersectTriangle(xr,ki,Mr,!1,Bi);if(o===null&&(Sr(ki.set(-.5,.5,0),pi,a,fi,i,s),ms.set(0,1),o=e.ray.intersectTriangle(xr,Mr,ki,!1,Bi),o===null))return;const c=e.ray.origin.distanceTo(Bi);c<e.near||c>e.far||t.push({distance:c,point:Bi.clone(),uv:Wt.getInterpolation(Bi,xr,ki,Mr,yo,ms,Eo,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sr(r,e,t,n,i,s){mi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(zi.x=s*mi.x-i*mi.y,zi.y=i*mi.x+s*mi.y):zi.copy(mi),r.copy(e),r.x+=zi.x,r.y+=zi.y,r.applyMatrix4(Ll)}class Sh extends wt{constructor(e=null,t=1,n=1,i,s,a,o,c,h=zt,u=zt,l,f){super(null,a,o,c,h,u,i,s,l,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new at,To=new at,yr=[],Ao=new In,yh=new at,Hi=new Xt,Vi=new Ji;class Eh extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Ao.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(Ao)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Vi.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gi),To.multiplyMatrices(n,gi),Hi.matrixWorld=To,Hi.raycast(e,yr);for(let a=0,o=yr.length;a<o;a++){const c=yr[a];c.instanceId=s,c.object=this,t.push(c)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sh(new Float32Array(i*this.count),i,this.count,ba,sn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gs=new F,bh=new F,Th=new ze;class bn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gs.subVectors(n,t).cross(bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),i=this.coplanarPoint(gs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Ji,Ah=new ke(.5,.5),Er=new F;class Pa{constructor(e=new bn,t=new bn,n=new bn,i=new bn,s=new bn,a=new bn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],h=s[3],u=s[4],l=s[5],f=s[6],p=s[7],_=s[8],x=s[9],m=s[10],d=s[11],T=s[12],A=s[13],y=s[14],C=s[15];if(i[0].setComponents(h-a,p-u,d-_,C-T).normalize(),i[1].setComponents(h+a,p+u,d+_,C+T).normalize(),i[2].setComponents(h+o,p+l,d+x,C+A).normalize(),i[3].setComponents(h-o,p-l,d-x,C-A).normalize(),n)i[4].setComponents(c,f,m,y).normalize(),i[5].setComponents(h-c,p-f,d-m,C-y).normalize();else if(i[4].setComponents(h-c,p-f,d-m,C-y).normalize(),t===an)i[5].setComponents(h+c,p+f,d+m,C+y).normalize();else if(t===Ir)i[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=Ah.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Er.x=i.normal.x>0?e.max.x:e.min.x,Er.y=i.normal.y>0?e.max.y:e.min.y,Er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wh extends wt{constructor(e,t,n,i,s,a,o,c,h){super(e,t,n,i,s,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dl extends wt{constructor(e,t,n=jn,i,s,a,o=zt,c=zt,h,u=qi,l=1){if(u!==qi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:l};super(f,i,s,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Il extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class La extends qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],h=new F,u=new ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let l=0,f=3;l<=t;l++,f+=3){const p=n+l/t*i;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let l=1;l<=t;l++)s.push(l,l+1,0);this.setIndex(s),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Br extends qt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const h=this;i=Math.floor(i),s=Math.floor(s);const u=[],l=[],f=[],p=[];let _=0;const x=[],m=n/2;let d=0;T(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function T(){const y=new F,C=new F;let R=0;const D=(t-e)/n;for(let O=0;O<=s;O++){const S=[],M=O/s,L=M*(t-e)+e;for(let z=0;z<=i;z++){const V=z/i,X=V*c+o,j=Math.sin(X),$=Math.cos(X);C.x=L*j,C.y=-M*n+m,C.z=L*$,l.push(C.x,C.y,C.z),y.set(j,D,$).normalize(),f.push(y.x,y.y,y.z),p.push(V,1-M),S.push(_++)}x.push(S)}for(let O=0;O<i;O++)for(let S=0;S<s;S++){const M=x[S][O],L=x[S+1][O],z=x[S+1][O+1],V=x[S][O+1];(e>0||S!==0)&&(u.push(M,L,V),R+=3),(t>0||S!==s-1)&&(u.push(L,z,V),R+=3)}h.addGroup(d,R,0),d+=R}function A(y){const C=_,R=new ke,D=new F;let O=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let z=1;z<=i;z++)l.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),_++;const L=_;for(let z=0;z<=i;z++){const X=z/i*c+o,j=Math.cos(X),$=Math.sin(X);D.x=S*$,D.y=m*M,D.z=S*j,l.push(D.x,D.y,D.z),f.push(0,M,0),R.x=j*.5+.5,R.y=$*.5*M+.5,p.push(R.x,R.y),_++}for(let z=0;z<i;z++){const V=C+z,X=L+z;y===!0?u.push(X,X+1,V):u.push(X+1,X,V),O+=3}h.addGroup(d,O,y===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends Br{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Da(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zr extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),h=o+1,u=c+1,l=e/o,f=t/c,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const T=d*f-a;for(let A=0;A<h;A++){const y=A*l-s;_.push(y,-T,0),x.push(0,0,1),m.push(A/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<o;T++){const A=T+h*d,y=T+h*(d+1),C=T+1+h*(d+1),R=T+1+h*d;p.push(A,y,R),p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ia extends qt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const u=[],l=new F,f=new F,p=[],_=[],x=[],m=[];for(let d=0;d<=n;d++){const T=[],A=d/n;let y=0;d===0&&a===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const R=C/t;l.x=-e*Math.cos(i+R*s)*Math.sin(a+A*o),l.y=e*Math.cos(a+A*o),l.z=e*Math.sin(i+R*s)*Math.sin(a+A*o),_.push(l.x,l.y,l.z),f.copy(l).normalize(),x.push(f.x,f.y,f.z),m.push(R+y,1-A),T.push(h++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){const A=u[d][T+1],y=u[d][T],C=u[d+1][T],R=u[d+1][T+1];(d!==0||a>0)&&p.push(A,y,R),(d!==n-1||c<Math.PI)&&p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ua extends qt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],h=[],u=new F,l=new F,f=new F;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const x=_/i*s,m=p/n*Math.PI*2;l.x=(e+t*Math.cos(m))*Math.cos(x),l.y=(e+t*Math.cos(m))*Math.sin(x),l.z=t*Math.sin(m),o.push(l.x,l.y,l.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(l,u).normalize(),c.push(f.x,f.y,f.z),h.push(_/i),h.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const x=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,d=(i+1)*(p-1)+_,T=(i+1)*p+_;a.push(x,m,T),a.push(m,d,T)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wo extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rh extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ch extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Na extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ph extends Na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _s=new at,Ro=new F,Co=new F;class Lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ro),Co.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Co),t.updateMatrixWorld(),_s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_s,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fr extends Rl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dh extends Lh{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Po extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ih extends Na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uh extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lo=new at;class Nh{constructor(e,t,n=0,i=1/0){this.ray=new yl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lo),this}intersectObject(e,t=!0,n=[]){return _a(e,this,n,t),n.sort(Do),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)_a(e[i],this,n,t);return n.sort(Do),n}}function Do(r,e){return r.distance-e.distance}function _a(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)_a(s[a],e,t,!0)}}function Io(r,e,t,n){const i=Fh(n);switch(t){case ml:return r*e;case ba:return r*e/i.components*i.byteLength;case Ta:return r*e/i.components*i.byteLength;case _l:return r*e*2/i.components*i.byteLength;case Aa:return r*e*2/i.components*i.byteLength;case gl:return r*e*3/i.components*i.byteLength;case Jt:return r*e*4/i.components*i.byteLength;case wa:return r*e*4/i.components*i.byteLength;case wr:case Rr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Pr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vs:case Ws:return Math.max(r,16)*Math.max(e,8)/4;case Hs:case Gs:return Math.max(r,8)*Math.max(e,8)/2;case Xs:case $s:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Js:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ra:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case sa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case la:case ca:case ha:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ua:case da:return Math.ceil(r/4)*Math.ceil(e/4)*8;case fa:case pa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fh(r){switch(r){case on:case ul:return{byteLength:1,components:1};case Xi:case dl:case Ki:return{byteLength:2,components:1};case ya:case Ea:return{byteLength:2,components:4};case jn:case Sa:case sn:return{byteLength:4,components:1};case fl:case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ul(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Oh(r){const e=new WeakMap;function t(o,c){const h=o.array,u=o.usage,l=h.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,h,u),o.onUploadCallback();let p;if(h instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=r.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=r.SHORT;else if(h instanceof Uint32Array)p=r.UNSIGNED_INT;else if(h instanceof Int32Array)p=r.INT;else if(h instanceof Int8Array)p=r.BYTE;else if(h instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,h){const u=c.array,l=c.updateRanges;if(r.bindBuffer(h,o),l.length===0)r.bufferSubData(h,0,u);else{l.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<l.length;p++){const _=l[f],x=l[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,l[f]=x)}l.length=f+1;for(let p=0,_=l.length;p<_;p++){const x=l[p];r.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:s,update:a}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
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
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
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
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h=`#ifdef USE_BATCHING
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
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zh=`#ifdef USE_IRIDESCENCE
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
#endif`,Jh=`#ifdef USE_BUMPMAP
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ou=`#define PI 3.141592653589793
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
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cu=`vec3 transformedNormal = objectNormal;
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
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cu=`uniform bool receiveShadow;
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
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,Ou=`
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qu=`#if defined( USE_POINTS_UV )
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
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`#ifdef USE_MORPHTARGETS
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
#endif`,ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
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
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yd=`float getShadowMask() {
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
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
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
}`,Wd=`#if DEPTH_PACKING == 3200
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
}`,Xd=`#define DISTANCE
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
}`,$d=`#define DISTANCE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`uniform float scale;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Zd=`#include <common>
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,tf=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,rf=`#define NORMAL
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
}`,sf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,of=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,hf=`#define TOON
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
}`,uf=`#define TOON
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
}`,df=`uniform float size;
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,gf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:kh,alphamap_pars_fragment:Hh,alphatest_fragment:Vh,alphatest_pars_fragment:Gh,aomap_fragment:Wh,aomap_pars_fragment:Xh,batching_pars_vertex:$h,batching_vertex:qh,begin_vertex:Yh,beginnormal_vertex:jh,bsdfs:Kh,iridescence_fragment:Zh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:tu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:ru,color_pars_vertex:su,color_vertex:au,common:ou,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:hu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:fu,colorspace_fragment:pu,colorspace_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:_u,envmap_pars_fragment:vu,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Pu,envmap_vertex:Mu,fog_vertex:Su,fog_pars_vertex:yu,fog_fragment:Eu,fog_pars_fragment:bu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:Au,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Ru,lights_pars_begin:Cu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Du,lights_phong_fragment:Iu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:Bu,lights_fragment_end:zu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Gu,map_fragment:Wu,map_pars_fragment:Xu,map_particle_fragment:$u,map_particle_pars_fragment:qu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:ju,morphinstance_vertex:Ku,morphcolor_vertex:Zu,morphnormal_vertex:Ju,morphtarget_pars_vertex:Qu,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:rd,normal_vertex:sd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:Md,shadowmap_vertex:Sd,shadowmask_pars_fragment:yd,skinbase_vertex:Ed,skinning_pars_vertex:bd,skinning_vertex:Td,skinnormal_vertex:Ad,specularmap_fragment:wd,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Ld,transmission_pars_fragment:Dd,uv_pars_fragment:Id,uv_pars_vertex:Ud,uv_vertex:Nd,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:kd,cube_vert:Hd,cube_frag:Vd,depth_vert:Gd,depth_frag:Wd,distanceRGBA_vert:Xd,distanceRGBA_frag:$d,equirect_vert:qd,equirect_frag:Yd,linedashed_vert:jd,linedashed_frag:Kd,meshbasic_vert:Zd,meshbasic_frag:Jd,meshlambert_vert:Qd,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:sf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},tn={basic:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Pt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Pt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Pt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Pt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Pt([ce.lights,ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};tn.physical={uniforms:Pt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const br={r:0,b:0,g:0},kn=new ln,vf=new at;function xf(r,e,t,n,i,s,a){const o=new $e(0);let c=s===!0?0:1,h,u,l=null,f=0,p=null;function _(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function x(A){let y=!1;const C=_(A);C===null?d(o,c):C&&C.isColor&&(d(C,1),y=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(A,y){const C=_(y);C&&(C.isCubeTexture||C.mapping===Or)?(u===void 0&&(u=new Xt(new Pi(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ai(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),kn.copy(y.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(kn)),u.material.toneMapped=Ke.getTransfer(C.colorSpace)!==et,(l!==C||f!==C.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,l=C,f=C.version,p=r.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new Xt(new zr(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ai(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(C.colorSpace)!==et,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(l!==C||f!==C.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,l=C,f=C.version,p=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function d(A,y){A.getRGB(br,wl(r)),n.buffers.color.setClear(br.r,br.g,br.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),c=y,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,d(o,c)},render:x,addToRenderList:m,dispose:T}}function Mf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(M,L,z,V,X){let j=!1;const $=l(V,z,L);s!==$&&(s=$,h(s.object)),j=p(M,V,z,X),j&&_(M,V,z,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(M,L,z,V),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return r.createVertexArray()}function h(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function l(M,L,z){const V=z.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let j=X[L.id];j===void 0&&(j={},X[L.id]=j);let $=j[V];return $===void 0&&($=f(c()),j[V]=$),$}function f(M){const L=[],z=[],V=[];for(let X=0;X<t;X++)L[X]=0,z[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,L,z,V){const X=s.attributes,j=L.attributes;let $=0;const re=z.getAttributes();for(const G in re)if(re[G].location>=0){const pe=X[G];let we=j[G];if(we===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;$++}return s.attributesNum!==$||s.index!==V}function _(M,L,z,V){const X={},j=L.attributes;let $=0;const re=z.getAttributes();for(const G in re)if(re[G].location>=0){let pe=j[G];pe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),X[G]=we,$++}s.attributes=X,s.attributesNum=$,s.index=V}function x(){const M=s.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const z=s.newAttributes,V=s.enabledAttributes,X=s.attributeDivisors;z[M]=1,V[M]===0&&(r.enableVertexAttribArray(M),V[M]=1),X[M]!==L&&(r.vertexAttribDivisor(M,L),X[M]=L)}function T(){const M=s.newAttributes,L=s.enabledAttributes;for(let z=0,V=L.length;z<V;z++)L[z]!==M[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function A(M,L,z,V,X,j,$){$===!0?r.vertexAttribIPointer(M,L,z,X,j):r.vertexAttribPointer(M,L,z,V,X,j)}function y(M,L,z,V){x();const X=V.attributes,j=z.getAttributes(),$=L.defaultAttributeValues;for(const re in j){const G=j[re];if(G.location>=0){let he=X[re];if(he===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const pe=he.normalized,we=he.itemSize,Ge=e.get(he);if(Ge===void 0)continue;const it=Ge.buffer,lt=Ge.type,Ze=Ge.bytesPerElement,K=lt===r.INT||lt===r.UNSIGNED_INT||he.gpuType===Sa;if(he.isInterleavedBufferAttribute){const Q=he.data,_e=Q.stride,Ne=he.offset;if(Q.isInstancedInterleavedBuffer){for(let Ae=0;Ae<G.locationSize;Ae++)d(G.location+Ae,Q.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ae=0;Ae<G.locationSize;Ae++)m(G.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Ae=0;Ae<G.locationSize;Ae++)A(G.location+Ae,we/G.locationSize,lt,pe,_e*Ze,(Ne+we/G.locationSize*Ae)*Ze,K)}else{if(he.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)d(G.location+Q,he.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Q=0;Q<G.locationSize;Q++)A(G.location+Q,we/G.locationSize,lt,pe,we*Ze,we/G.locationSize*Q*Ze,K)}}else if($!==void 0){const pe=$[re];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(G.location,pe);break;case 3:r.vertexAttrib3fv(G.location,pe);break;case 4:r.vertexAttrib4fv(G.location,pe);break;default:r.vertexAttrib1fv(G.location,pe)}}}}T()}function C(){O();for(const M in n){const L=n[M];for(const z in L){const V=L[z];for(const X in V)u(V[X].object),delete V[X];delete L[z]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const z in L){const V=L[z];for(const X in V)u(V[X].object),delete V[X];delete L[z]}delete n[M.id]}function D(M){for(const L in n){const z=n[L];if(z[M.id]===void 0)continue;const V=z[M.id];for(const X in V)u(V[X].object),delete V[X];delete z[M.id]}}function O(){S(),a=!0,s!==i&&(s=i,h(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:O,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Sf(r,e,t){let n;function i(h){n=h}function s(h,u){r.drawArrays(n,h,u),t.update(u,n,1)}function a(h,u,l){l!==0&&(r.drawArraysInstanced(n,h,u,l),t.update(u,n,l))}function o(h,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,l);let p=0;for(let _=0;_<l;_++)p+=u[_];t.update(p,n,1)}function c(h,u,l,f){if(l===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h.length;_++)a(h[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,u,0,f,0,l);let _=0;for(let x=0;x<l;x++)_+=u[x]*f[x];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function yf(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==Jt&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const O=D===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==on&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==sn&&!O)}function c(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const l=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:l,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:C,maxSamples:R}}function Ef(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new bn,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const p=l.length!==0||f||n!==0||i;return i=f,n=l.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,f){t=u(l,f,0)},this.setState=function(l,f,p){const _=l.clippingPlanes,x=l.clipIntersection,m=l.clipShadows,d=r.get(l);if(!i||_===null||_.length===0||s&&!m)s?u(null):h();else{const T=s?0:n,A=T*4;let y=d.clippingState||null;c.value=y,y=u(_,f,A,p);for(let C=0;C!==A;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(l,f,p,_){const x=l!==null?l.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const d=p+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,y=p;A!==x;++A,y+=4)a.copy(l[A]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function bf(r){let e=new WeakMap;function t(a,o){return o===Os?a.mapping=Ei:o===Bs&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Os||o===Bs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new _h(c.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const xi=4,Uo=[.125,.215,.35,.446,.526,.582],Xn=20,vs=new Fr,No=new $e;let xs=null,Ms=0,Ss=0,ys=!1;const Vn=(1+Math.sqrt(5))/2,_i=1/Vn,Fo=[new F(-Vn,_i,0),new F(Vn,_i,0),new F(-_i,0,Vn),new F(_i,0,Vn),new F(0,Vn,-_i),new F(0,Vn,_i),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Tf=new F;class Oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Tf}=s;xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xs,Ms,Ss),this._renderer.xr.enabled=ys,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ki,format:Jt,colorSpace:Ti,depthBuffer:!1},i=Bo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Af(s)),this._blurMaterial=wf(s,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,i,s){const c=new Zt(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,p=l.toneMapping;l.getClearColor(No),l.toneMapping=Rn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));const x=new bl({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new Xt(new Pi,x);let d=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,d=!0):(x.color.copy(No),d=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(c.up.set(0,h[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):y===1?(c.up.set(0,0,h[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,h[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const C=this._cubeSize;Tr(i,y*C,A>2?C:0,C,C),l.setRenderTarget(i),d&&l.render(m,c),l.render(e,c)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=p,l.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Tr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fo[(i-s-1)%Fo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new Xt(this._lodPlanes[i],h),f=h.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Xn;m>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const d=[];let T=0;for(let D=0;D<Xn;++D){const O=D/x,S=Math.exp(-O*O/2);d.push(S),D===0?T+=S:D<m&&(T+=2*S)}for(let D=0;D<d.length;D++)d[D]=d[D]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;const y=this._sizeLods[i],C=3*y*(i>A-xi?i-A+xi:0),R=4*(this._cubeSize-y);Tr(t,C,R,3*y,2*y),c.setRenderTarget(t),c.render(l,vs)}}function Af(r){const e=[],t=[],n=[];let i=r;const s=r-xi+1+Uo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-xi?c=Uo[a-r+xi-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),u=-h,l=1+h,f=[u,u,l,u,l,l,u,u,l,l,u,l],p=6,_=6,x=3,m=2,d=1,T=new Float32Array(x*_*p),A=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let R=0;R<p;R++){const D=R%3*2/3-1,O=R>2?0:-1,S=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];T.set(S,x*_*R),A.set(f,m*_*R);const M=[R,R,R,R,R,R];y.set(M,d*_*R)}const C=new qt;C.setAttribute("position",new $t(T,x)),C.setAttribute("uv",new $t(A,m)),C.setAttribute("faceIndex",new $t(y,d)),e.push(C),i>xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bo(r,e,t){const n=new Ln(r,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wf(r,e,t){const n=new Float32Array(Xn),i=new F(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function zo(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ko(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Fa(){return`

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
	`}function Rf(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Os||c===Bs,u=c===Ei||c===bi;if(h||u){let l=e.get(o);const f=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Oo(r)),l=h?t.fromEquirectangular(o,l):t.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),l.texture;if(l!==void 0)return l.texture;{const p=o.image;return h&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Oo(r)),l=h?t.fromEquirectangular(o):t.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),o.addEventListener("dispose",s),l.texture):null}}}return o}function i(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function s(o){const c=o.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pf(r,e,t,n){const i={},s=new WeakMap;function a(l){const f=l.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(l,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(l){const f=l.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER)}function h(l){const f=[],p=l.index,_=l.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let A=0,y=T.length;A<y;A+=3){const C=T[A+0],R=T[A+1],D=T[A+2];f.push(C,R,R,D,D,C)}}else if(_!==void 0){const T=_.array;x=_.version;for(let A=0,y=T.length/3-1;A<y;A+=3){const C=A+0,R=A+1,D=A+2;f.push(C,R,R,D,D,C)}}else return;const m=new(Ml(f)?Al:Tl)(f,1);m.version=x;const d=s.get(l);d&&e.remove(d),s.set(l,m)}function u(l){const f=s.get(l);if(f){const p=l.index;p!==null&&f.version<p.version&&h(l)}else h(l);return s.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function Lf(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){r.drawElements(n,p,s,f*a),t.update(p,n,1)}function h(f,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,f*a,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,n,1)}function l(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)h(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,_);let d=0;for(let T=0;T<_;T++)d+=p[T]*x[T];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function Df(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function If(r,e,t){const n=new WeakMap,i=new pt;function s(a,o,c){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==l){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),_===!0&&(A=2),x===!0&&(A=3);let y=o.attributes.position.count*A,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*C*4*l),D=new Sl(R,y,C,l);D.type=sn,D.needsUpdate=!0;const O=A*4;for(let M=0;M<l;M++){const L=m[M],z=d[M],V=T[M],X=y*C*4*M;for(let j=0;j<L.count;j++){const $=j*O;p===!0&&(i.fromBufferAttribute(L,j),R[X+$+0]=i.x,R[X+$+1]=i.y,R[X+$+2]=i.z,R[X+$+3]=0),_===!0&&(i.fromBufferAttribute(z,j),R[X+$+4]=i.x,R[X+$+5]=i.y,R[X+$+6]=i.z,R[X+$+7]=0),x===!0&&(i.fromBufferAttribute(V,j),R[X+$+8]=i.x,R[X+$+9]=i.y,R[X+$+10]=i.z,R[X+$+11]=V.itemSize===4?i.w:1)}}f={count:l,texture:D,size:new ke(y,C)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<h.length;x++)p+=h[x];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",h)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Uf(r,e,t,n){let i=new WeakMap;function s(c){const h=n.render.frame,u=c.geometry,l=e.get(c,u);if(i.get(l)!==h&&(e.update(l),i.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return l}function a(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const Nl=new wt,Ho=new Dl(1,1),Fl=new Sl,Ol=new eh,Bl=new Cl,Vo=[],Go=[],Wo=new Float32Array(16),Xo=new Float32Array(9),$o=new Float32Array(4);function Li(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vo[i];if(s===void 0&&(s=new Float32Array(i),Vo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function kr(r,e){let t=Go[e];t===void 0&&(t=new Int32Array(e),Go[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Nf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ff(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function Of(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function Bf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function zf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;$o.set(n),r.uniformMatrix2fv(this.addr,!1,$o),Mt(t,n)}}function kf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Xo.set(n),r.uniformMatrix3fv(this.addr,!1,Xo),Mt(t,n)}}function Hf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Wo.set(n),r.uniformMatrix4fv(this.addr,!1,Wo),Mt(t,n)}}function Vf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function Wf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function Xf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function $f(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function Yf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function Kf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ho.compareFunction=xl,s=Ho):s=Nl,t.setTexture2D(e||s,i)}function Zf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ol,i)}function Jf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bl,i)}function Qf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fl,i)}function ep(r){switch(r){case 5126:return Nf;case 35664:return Ff;case 35665:return Of;case 35666:return Bf;case 35674:return zf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return $f;case 36294:return qf;case 36295:return Yf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function tp(r,e){r.uniform1fv(this.addr,e)}function np(r,e){const t=Li(e,this.size,2);r.uniform2fv(this.addr,t)}function ip(r,e){const t=Li(e,this.size,3);r.uniform3fv(this.addr,t)}function rp(r,e){const t=Li(e,this.size,4);r.uniform4fv(this.addr,t)}function sp(r,e){const t=Li(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ap(r,e){const t=Li(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function op(r,e){const t=Li(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lp(r,e){r.uniform1iv(this.addr,e)}function cp(r,e){r.uniform2iv(this.addr,e)}function hp(r,e){r.uniform3iv(this.addr,e)}function up(r,e){r.uniform4iv(this.addr,e)}function dp(r,e){r.uniform1uiv(this.addr,e)}function fp(r,e){r.uniform2uiv(this.addr,e)}function pp(r,e){r.uniform3uiv(this.addr,e)}function mp(r,e){r.uniform4uiv(this.addr,e)}function gp(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Nl,s[a])}function _p(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ol,s[a])}function vp(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Bl,s[a])}function xp(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Fl,s[a])}function Mp(r){switch(r){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}class Sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mp(t.type)}}class Ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function qo(r,e){r.seq.push(e),r.map[e.id]=e}function bp(r,e,t){const n=r.name,i=n.length;for(Es.lastIndex=0;;){const s=Es.exec(n),a=Es.lastIndex;let o=s[1];const c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){qo(t,h===void 0?new Sp(o,r,e):new yp(o,r,e));break}else{let l=t.map[o];l===void 0&&(l=new Ep(o),qo(t,l)),t=l}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);bp(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Yo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Tp=37297;let Ap=0;function wp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const jo=new ze;function Rp(r){Ke._getMatrix(jo,Ke.workingColorSpace,r);const e=`mat3( ${jo.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case Dr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ko(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wp(r.getShaderSource(e),o)}else return s}function Cp(r,e){const t=Rp(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pp(r,e){let t;switch(e){case wc:t="Linear";break;case Rc:t="Reinhard";break;case Cc:t="Cineon";break;case Pc:t="ACESFilmic";break;case Dc:t="AgX";break;case Ic:t="Neutral";break;case Lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new F;function Lp(){Ke.getLuminanceCoefficients(Ar);const r=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Ip(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Up(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Wi(r){return r!==""}function Zo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(r){return r.replace(Np,Op)}const Fp=new Map;function Op(r,e){let t=Ve[e];if(t===void 0){const n=Fp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(r){return r.replace(Bp,zp)}function zp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function el(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function kp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case bi:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ma:e="ENVMAP_BLENDING_MULTIPLY";break;case Tc:e="ENVMAP_BLENDING_MIX";break;case Ac:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xp(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=kp(t),h=Hp(t),u=Vp(t),l=Gp(t),f=Wp(t),p=Dp(t),_=Ip(s),x=i.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wi).join(`
`),d.length>0&&(d+=`
`)):(m=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),d=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Cp("linearToOutputTexel",t.outputColorSpace),Lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),a=va(a),a=Zo(a,t),a=Jo(a,t),o=va(o),o=Zo(o,t),o=Jo(o,t),a=Qo(a),o=Qo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+m+a,y=T+d+o,C=Yo(i,i.VERTEX_SHADER,A),R=Yo(i,i.FRAGMENT_SHADER,y);i.attachShader(x,C),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(L){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(x)||"",V=i.getShaderInfoLog(C)||"",X=i.getShaderInfoLog(R)||"",j=z.trim(),$=V.trim(),re=X.trim();let G=!0,he=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,C,R);else{const pe=Ko(i,C,"vertex"),we=Ko(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+j+`
`+pe+`
`+we)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||re==="")&&(he=!1);he&&(L.diagnostics={runnable:G,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:re,prefix:d}})}i.deleteShader(C),i.deleteShader(R),O=new Lr(i,x),S=Up(i,x)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Tp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ap++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let $p=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}}class Yp{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}}function jp(r,e,t,n,i,s,a){const o=new Ca,c=new qp,h=new Set,u=[],l=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,z,V){const X=z.fog,j=V.geometry,$=S.isMeshStandardMaterial?z.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),G=re&&re.mapping===Or?re.image.height:null,he=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=pe!==void 0?pe.length:0;let Ge=0;j.morphAttributes.position!==void 0&&(Ge=1),j.morphAttributes.normal!==void 0&&(Ge=2),j.morphAttributes.color!==void 0&&(Ge=3);let it,lt,Ze,K;if(he){const Je=tn[he];it=Je.vertexShader,lt=Je.fragmentShader}else it=S.vertexShader,lt=S.fragmentShader,c.update(S),Ze=c.getVertexShaderID(S),K=c.getFragmentShaderID(S);const Q=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ne=V.isInstancedMesh===!0,Ae=V.isBatchedMesh===!0,qe=!!S.map,Et=!!S.matcap,w=!!re,ct=!!S.aoMap,Oe=!!S.lightMap,Ie=!!S.bumpMap,Me=!!S.normalMap,ht=!!S.displacementMap,Se=!!S.emissiveMap,He=!!S.metalnessMap,St=!!S.roughnessMap,mt=S.anisotropy>0,E=S.clearcoat>0,g=S.dispersion>0,B=S.iridescence>0,q=S.sheen>0,J=S.transmission>0,W=mt&&!!S.anisotropyMap,Te=E&&!!S.clearcoatMap,ae=E&&!!S.clearcoatNormalMap,ye=E&&!!S.clearcoatRoughnessMap,Ee=B&&!!S.iridescenceMap,ne=B&&!!S.iridescenceThicknessMap,fe=q&&!!S.sheenColorMap,De=q&&!!S.sheenRoughnessMap,be=!!S.specularMap,ue=!!S.specularColorMap,Be=!!S.specularIntensityMap,P=J&&!!S.transmissionMap,ie=J&&!!S.thicknessMap,oe=!!S.gradientMap,ge=!!S.alphaMap,ee=S.alphaTest>0,Z=!!S.alphaHash,xe=!!S.extensions;let Fe=Rn;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const rt={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:lt,defines:S.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&V._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,instancingMorph:Ne&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ti,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:Et,envMap:w,envMapMode:w&&re.mapping,envMapCubeUVHeight:G,aoMap:ct,lightMap:Oe,bumpMap:Ie,normalMap:Me,displacementMap:f&&ht,emissiveMap:Se,normalMapObjectSpace:Me&&S.normalMapType===Oc,normalMapTangentSpace:Me&&S.normalMapType===vl,metalnessMap:He,roughnessMap:St,anisotropy:mt,anisotropyMap:W,clearcoat:E,clearcoatMap:Te,clearcoatNormalMap:ae,clearcoatRoughnessMap:ye,dispersion:g,iridescence:B,iridescenceMap:Ee,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:fe,sheenRoughnessMap:De,specularMap:be,specularColorMap:ue,specularIntensityMap:Be,transmission:J,transmissionMap:P,thicknessMap:ie,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:Z,combine:S.combine,mapUv:qe&&x(S.map.channel),aoMapUv:ct&&x(S.aoMap.channel),lightMapUv:Oe&&x(S.lightMap.channel),bumpMapUv:Ie&&x(S.bumpMap.channel),normalMapUv:Me&&x(S.normalMap.channel),displacementMapUv:ht&&x(S.displacementMap.channel),emissiveMapUv:Se&&x(S.emissiveMap.channel),metalnessMapUv:He&&x(S.metalnessMap.channel),roughnessMapUv:St&&x(S.roughnessMap.channel),anisotropyMapUv:W&&x(S.anisotropyMap.channel),clearcoatMapUv:Te&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(S.sheenRoughnessMap.channel),specularMapUv:be&&x(S.specularMap.channel),specularColorMapUv:ue&&x(S.specularColorMap.channel),specularIntensityMapUv:Be&&x(S.specularIntensityMap.channel),transmissionMapUv:P&&x(S.transmissionMap.channel),thicknessMapUv:ie&&x(S.thicknessMap.channel),alphaMapUv:ge&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Me||mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(qe||ge),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=h.has(1),rt.vertexUv2s=h.has(2),rt.vertexUv3s=h.has(3),h.clear(),rt}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(M,S),A(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function A(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=_[S.type];let L;if(M){const z=tn[M];L=fh.clone(z.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let z=0,V=u.length;z<V;z++){const X=u[z];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Xp(r,M,S,s),u.push(L)),L}function R(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function D(S){c.remove(S)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:O}}function Kp(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Zp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function tl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(l,f,p,_,x,m){let d=r[e];return d===void 0?(d={id:l.id,object:l,geometry:f,material:p,groupOrder:_,renderOrder:l.renderOrder,z:x,group:m},r[e]=d):(d.id=l.id,d.object=l,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=l.renderOrder,d.z=x,d.group=m),e++,d}function o(l,f,p,_,x,m){const d=a(l,f,p,_,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(l,f,p,_,x,m){const d=a(l,f,p,_,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function h(l,f){t.length>1&&t.sort(l||Zp),n.length>1&&n.sort(f||tl),i.length>1&&i.sort(f||tl)}function u(){for(let l=e,f=r.length;l<f;l++){const p=r[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:h}}function Jp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new nl,r.set(n,[a])):i>=s.length?(a=new nl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Qp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function em(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let tm=0;function nm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function im(r){const e=new Qp,t=em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const i=new F,s=new at,a=new at;function o(h){let u=0,l=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,T=0,A=0,y=0,C=0,R=0,D=0;h.sort(nm);for(let S=0,M=h.length;S<M;S++){const L=h[S],z=L.color,V=L.intensity,X=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*V,l+=z.g*V,f+=z.b*V;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],V);D++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const re=L.shadow,G=t.get(L);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(z).multiplyScalar(V),$.distance=X,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[x]=$;const re=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,re.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=re.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=j,y++}x++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(z).multiplyScalar(V),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const re=L.shadow,G=t.get(L);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,G.shadowCameraNear=re.camera.near,G.shadowCameraFar=re.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=L.shadow.matrix,A++}n.point[_]=$,_++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(V),$.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[d]=$,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==y||O.numSpotMaps!==C||O.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,O.directionalLength=p,O.pointLength=_,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=y,O.numSpotMaps=C,O.numLightProbes=D,n.version=tm++)}function c(h,u){let l=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,T=h.length;d<T;d++){const A=h[d];if(A.isDirectionalLight){const y=n.directional[l];y.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),l++}else if(A.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function il(r){const e=new im(r),t=[],n=[];function i(u){h.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function rm(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new il(r),e.set(i,[o])):s>=a.length?(o=new il(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
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
}`;function om(r,e,t){let n=new Pa;const i=new ke,s=new ke,a=new pt,o=new Rh({depthPacking:Fc}),c=new Ch,h={},u=t.maxTextureSize,l={[Pn]:Dt,[Dt]:Pn,[gn]:gn},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:sm,fragmentShader:am}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let d=this.type;this.render=function(R,D,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(wn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=d!==mn&&this.type===mn,X=d===mn&&this.type!==mn;for(let j=0,$=R.length;j<$;j++){const re=R[j],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const he=G.getFrameExtents();if(i.multiply(he),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/he.x),i.x=s.x*he.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/he.y),i.y=s.y*he.y,G.mapSize.y=s.y)),G.map===null||V===!0||X===!0){const we=this.type!==mn?{minFilter:zt,magFilter:zt}:{};G.map!==null&&G.map.dispose(),G.map=new Ln(i.x,i.y,we),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const pe=G.getViewportCount();for(let we=0;we<pe;we++){const Ge=G.getViewport(we);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),z.viewport(a),G.updateMatrices(re,we),n=G.getFrustum(),y(D,O,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===mn&&T(G,O),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,L)};function T(R,D){const O=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ln(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(D,null,O,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(D,null,O,p,x,null)}function A(R,D,O,S){let M=null;const L=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=O.isPointLight===!0?c:o,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const z=M.uuid,V=D.uuid;let X=h[z];X===void 0&&(X={},h[z]=X);let j=X[V];j===void 0&&(j=M.clone(),X[V]=j,D.addEventListener("dispose",C)),M=j}if(M.visible=D.visible,M.wireframe=D.wireframe,S===mn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:l[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=r.properties.get(M);z.light=O}return M}function y(R,D,O,S,M){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===mn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const V=e.update(R),X=R.material;if(Array.isArray(X)){const j=V.groups;for(let $=0,re=j.length;$<re;$++){const G=j[$],he=X[G.materialIndex];if(he&&he.visible){const pe=A(R,he,S,M);R.onBeforeShadow(r,R,D,O,V,pe,G),r.renderBufferDirect(O,null,V,pe,R,G),R.onAfterShadow(r,R,D,O,V,pe,G)}}}else if(X.visible){const j=A(R,X,S,M);R.onBeforeShadow(r,R,D,O,V,j,null),r.renderBufferDirect(O,null,V,j,R,null),R.onAfterShadow(r,R,D,O,V,j,null)}}const z=R.children;for(let V=0,X=z.length;V<X;V++)y(z[V],D,O,S,M)}function C(R){R.target.removeEventListener("dispose",C);for(const O in h){const S=h[O],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const lm={[Ps]:Ls,[Ds]:Ns,[Is]:Fs,[yi]:Us,[Ls]:Ps,[Ns]:Ds,[Fs]:Is,[Us]:yi};function cm(r,e){function t(){let P=!1;const ie=new pt;let oe=null;const ge=new pt(0,0,0,0);return{setMask:function(ee){oe!==ee&&!P&&(r.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){P=ee},setClear:function(ee,Z,xe,Fe,rt){rt===!0&&(ee*=Fe,Z*=Fe,xe*=Fe),ie.set(ee,Z,xe,Fe),ge.equals(ie)===!1&&(r.clearColor(ee,Z,xe,Fe),ge.copy(ie))},reset:function(){P=!1,oe=null,ge.set(-1,0,0,0)}}}function n(){let P=!1,ie=!1,oe=null,ge=null,ee=null;return{setReversed:function(Z){if(ie!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Fe=ee;ee=null,this.setClear(Fe)}},getReversed:function(){return ie},setTest:function(Z){Z?Q(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!P&&(r.depthMask(Z),oe=Z)},setFunc:function(Z){if(ie&&(Z=lm[Z]),ge!==Z){switch(Z){case Ps:r.depthFunc(r.NEVER);break;case Ls:r.depthFunc(r.ALWAYS);break;case Ds:r.depthFunc(r.LESS);break;case yi:r.depthFunc(r.LEQUAL);break;case Is:r.depthFunc(r.EQUAL);break;case Us:r.depthFunc(r.GEQUAL);break;case Ns:r.depthFunc(r.GREATER);break;case Fs:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Z}},setLocked:function(Z){P=Z},setClear:function(Z){ee!==Z&&(ie&&(Z=1-Z),r.clearDepth(Z),ee=Z)},reset:function(){P=!1,oe=null,ge=null,ee=null,ie=!1}}}function i(){let P=!1,ie=null,oe=null,ge=null,ee=null,Z=null,xe=null,Fe=null,rt=null;return{setTest:function(Je){P||(Je?Q(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!P&&(r.stencilMask(Je),ie=Je)},setFunc:function(Je,cn,en){(oe!==Je||ge!==cn||ee!==en)&&(r.stencilFunc(Je,cn,en),oe=Je,ge=cn,ee=en)},setOp:function(Je,cn,en){(Z!==Je||xe!==cn||Fe!==en)&&(r.stencilOp(Je,cn,en),Z=Je,xe=cn,Fe=en)},setLocked:function(Je){P=Je},setClear:function(Je){rt!==Je&&(r.clearStencil(Je),rt=Je)},reset:function(){P=!1,ie=null,oe=null,ge=null,ee=null,Z=null,xe=null,Fe=null,rt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,h=new WeakMap;let u={},l={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,T=null,A=null,y=null,C=null,R=null,D=new $e(0,0,0),O=0,S=!1,M=null,L=null,z=null,V=null,X=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=re>=1):G.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=re>=2);let he=null,pe={};const we=r.getParameter(r.SCISSOR_BOX),Ge=r.getParameter(r.VIEWPORT),it=new pt().fromArray(we),lt=new pt().fromArray(Ge);function Ze(P,ie,oe,ge){const ee=new Uint8Array(4),Z=r.createTexture();r.bindTexture(P,Z),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xe=0;xe<oe;xe++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(ie+xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return Z}const K={};K[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(r.DEPTH_TEST),a.setFunc(yi),Ie(!1),Me(Za),Q(r.CULL_FACE),ct(wn);function Q(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function _e(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function Ne(P,ie){return l[P]!==ie?(r.bindFramebuffer(P,ie),l[P]=ie,P===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=ie),P===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(P,ie){let oe=p,ge=!1;if(P){oe=f.get(ie),oe===void 0&&(oe=[],f.set(ie,oe));const ee=P.textures;if(oe.length!==ee.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,xe=ee.length;Z<xe;Z++)oe[Z]=r.COLOR_ATTACHMENT0+Z;oe.length=ee.length,ge=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,ge=!0);ge&&r.drawBuffers(oe)}function qe(P){return _!==P?(r.useProgram(P),_=P,!0):!1}const Et={[Wn]:r.FUNC_ADD,[lc]:r.FUNC_SUBTRACT,[cc]:r.FUNC_REVERSE_SUBTRACT};Et[hc]=r.MIN,Et[uc]=r.MAX;const w={[dc]:r.ZERO,[fc]:r.ONE,[pc]:r.SRC_COLOR,[Rs]:r.SRC_ALPHA,[Mc]:r.SRC_ALPHA_SATURATE,[vc]:r.DST_COLOR,[gc]:r.DST_ALPHA,[mc]:r.ONE_MINUS_SRC_COLOR,[Cs]:r.ONE_MINUS_SRC_ALPHA,[xc]:r.ONE_MINUS_DST_COLOR,[_c]:r.ONE_MINUS_DST_ALPHA,[Sc]:r.CONSTANT_COLOR,[yc]:r.ONE_MINUS_CONSTANT_COLOR,[Ec]:r.CONSTANT_ALPHA,[bc]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(P,ie,oe,ge,ee,Z,xe,Fe,rt,Je){if(P===wn){x===!0&&(_e(r.BLEND),x=!1);return}if(x===!1&&(Q(r.BLEND),x=!0),P!==oc){if(P!==m||Je!==S){if((d!==Wn||y!==Wn)&&(r.blendEquation(r.FUNC_ADD),d=Wn,y=Wn),Je)switch(P){case Mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFunc(r.ONE,r.ONE);break;case Qa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,A=null,C=null,R=null,D.set(0,0,0),O=0,m=P,S=Je}return}ee=ee||ie,Z=Z||oe,xe=xe||ge,(ie!==d||ee!==y)&&(r.blendEquationSeparate(Et[ie],Et[ee]),d=ie,y=ee),(oe!==T||ge!==A||Z!==C||xe!==R)&&(r.blendFuncSeparate(w[oe],w[ge],w[Z],w[xe]),T=oe,A=ge,C=Z,R=xe),(Fe.equals(D)===!1||rt!==O)&&(r.blendColor(Fe.r,Fe.g,Fe.b,rt),D.copy(Fe),O=rt),m=P,S=!1}function Oe(P,ie){P.side===gn?_e(r.CULL_FACE):Q(r.CULL_FACE);let oe=P.side===Dt;ie&&(oe=!oe),Ie(oe),P.blending===Mi&&P.transparent===!1?ct(wn):ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ge=P.stencilWrite;o.setTest(ge),ge&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){M!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),M=P)}function Me(P){P!==rc?(Q(r.CULL_FACE),P!==L&&(P===Za?r.cullFace(r.BACK):P===sc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),L=P}function ht(P){P!==z&&($&&r.lineWidth(P),z=P)}function Se(P,ie,oe){P?(Q(r.POLYGON_OFFSET_FILL),(V!==ie||X!==oe)&&(r.polygonOffset(ie,oe),V=ie,X=oe)):_e(r.POLYGON_OFFSET_FILL)}function He(P){P?Q(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function St(P){P===void 0&&(P=r.TEXTURE0+j-1),he!==P&&(r.activeTexture(P),he=P)}function mt(P,ie,oe){oe===void 0&&(he===null?oe=r.TEXTURE0+j-1:oe=he);let ge=pe[oe];ge===void 0&&(ge={type:void 0,texture:void 0},pe[oe]=ge),(ge.type!==P||ge.texture!==ie)&&(he!==oe&&(r.activeTexture(oe),he=oe),r.bindTexture(P,ie||K[P]),ge.type=P,ge.texture=ie)}function E(){const P=pe[he];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{r.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{r.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{r.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(P){it.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function De(P){lt.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),lt.copy(P))}function be(P,ie){let oe=h.get(ie);oe===void 0&&(oe=new WeakMap,h.set(ie,oe));let ge=oe.get(P);ge===void 0&&(ge=r.getUniformBlockIndex(ie,P.name),oe.set(P,ge))}function ue(P,ie){const ge=h.get(ie).get(P);c.get(ie)!==ge&&(r.uniformBlockBinding(ie,ge,P.__bindingPointIndex),c.set(ie,ge))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},he=null,pe={},l={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,T=null,A=null,y=null,C=null,R=null,D=new $e(0,0,0),O=0,S=!1,M=null,L=null,z=null,V=null,X=null,it.set(0,0,r.canvas.width,r.canvas.height),lt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:_e,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:qe,setBlending:ct,setMaterial:Oe,setFlipSided:Ie,setCullFace:Me,setLineWidth:ht,setPolygonOffset:Se,setScissorTest:He,activeTexture:St,bindTexture:mt,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Ee,texImage3D:ne,updateUBOMapping:be,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:ye,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Te,scissor:fe,viewport:De,reset:Be}}function hm(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,u=new WeakMap;let l;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return p?new OffscreenCanvas(E,g):Ur("canvas")}function x(E,g,B){let q=1;const J=mt(E);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(q*J.width),Te=Math.floor(q*J.height);l===void 0&&(l=_(W,Te));const ae=g?_(W,Te):l;return ae.width=W,ae.height=Te,ae.getContext("2d").drawImage(E,0,0,W,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Te+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){r.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(E,g,B,q,J=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=g;if(g===r.RED&&(B===r.FLOAT&&(W=r.R32F),B===r.HALF_FLOAT&&(W=r.R16F),B===r.UNSIGNED_BYTE&&(W=r.R8)),g===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.R8UI),B===r.UNSIGNED_SHORT&&(W=r.R16UI),B===r.UNSIGNED_INT&&(W=r.R32UI),B===r.BYTE&&(W=r.R8I),B===r.SHORT&&(W=r.R16I),B===r.INT&&(W=r.R32I)),g===r.RG&&(B===r.FLOAT&&(W=r.RG32F),B===r.HALF_FLOAT&&(W=r.RG16F),B===r.UNSIGNED_BYTE&&(W=r.RG8)),g===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.RG8UI),B===r.UNSIGNED_SHORT&&(W=r.RG16UI),B===r.UNSIGNED_INT&&(W=r.RG32UI),B===r.BYTE&&(W=r.RG8I),B===r.SHORT&&(W=r.RG16I),B===r.INT&&(W=r.RG32I)),g===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.RGB8UI),B===r.UNSIGNED_SHORT&&(W=r.RGB16UI),B===r.UNSIGNED_INT&&(W=r.RGB32UI),B===r.BYTE&&(W=r.RGB8I),B===r.SHORT&&(W=r.RGB16I),B===r.INT&&(W=r.RGB32I)),g===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),B===r.UNSIGNED_INT&&(W=r.RGBA32UI),B===r.BYTE&&(W=r.RGBA8I),B===r.SHORT&&(W=r.RGBA16I),B===r.INT&&(W=r.RGBA32I)),g===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),g===r.RGBA){const Te=J?Dr:Ke.getTransfer(q);B===r.FLOAT&&(W=r.RGBA32F),B===r.HALF_FLOAT&&(W=r.RGBA16F),B===r.UNSIGNED_BYTE&&(W=Te===et?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(E,g){let B;return E?g===null||g===jn||g===$i?B=r.DEPTH24_STENCIL8:g===sn?B=r.DEPTH32F_STENCIL8:g===Xi&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===jn||g===$i?B=r.DEPTH_COMPONENT24:g===sn?B=r.DEPTH_COMPONENT32F:g===Xi&&(B=r.DEPTH_COMPONENT16),B}function C(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==zt&&E.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){const g=E.target;g.removeEventListener("dispose",R),O(g),g.isVideoTexture&&u.delete(g)}function D(E){const g=E.target;g.removeEventListener("dispose",D),M(g)}function O(E){const g=n.get(E);if(g.__webglInit===void 0)return;const B=E.source,q=f.get(B);if(q){const J=q[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(E),Object.keys(q).length===0&&f.delete(B)}n.remove(E)}function S(E){const g=n.get(E);r.deleteTexture(g.__webglTexture);const B=E.source,q=f.get(B);delete q[g.__cacheKey],a.memory.textures--}function M(E){const g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let J=0;J<g.__webglFramebuffer[q].length;J++)r.deleteFramebuffer(g.__webglFramebuffer[q][J]);else r.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)r.deleteFramebuffer(g.__webglFramebuffer[q]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=E.textures;for(let q=0,J=B.length;q<J;q++){const W=n.get(B[q]);W.__webglTexture&&(r.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(E)}let L=0;function z(){L=0}function V(){const E=L;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),L+=1,E}function X(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function j(E,g){const B=n.get(E);if(E.isVideoTexture&&He(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,E,g);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+g)}function $(E,g){const B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){K(B,E,g);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+g)}function re(E,g){const B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){K(B,E,g);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+g)}function G(E,g){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Q(B,E,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+g)}const he={[zs]:r.REPEAT,[$n]:r.CLAMP_TO_EDGE,[ks]:r.MIRRORED_REPEAT},pe={[zt]:r.NEAREST,[Uc]:r.NEAREST_MIPMAP_NEAREST,[tr]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Xr]:r.LINEAR_MIPMAP_NEAREST,[qn]:r.LINEAR_MIPMAP_LINEAR},we={[Bc]:r.NEVER,[Wc]:r.ALWAYS,[zc]:r.LESS,[xl]:r.LEQUAL,[kc]:r.EQUAL,[Gc]:r.GEQUAL,[Hc]:r.GREATER,[Vc]:r.NOTEQUAL};function Ge(E,g){if(g.type===sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===Xr||g.magFilter===tr||g.magFilter===qn||g.minFilter===rn||g.minFilter===Xr||g.minFilter===tr||g.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,he[g.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,he[g.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,he[g.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,pe[g.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===zt||g.minFilter!==tr&&g.minFilter!==qn||g.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function it(E,g){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));const q=g.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const W=X(g);if(W!==E.__cacheKey){J[W]===void 0&&(J[W]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[W].usedTimes++;const Te=J[E.__cacheKey];Te!==void 0&&(J[E.__cacheKey].usedTimes--,Te.usedTimes===0&&S(g)),E.__cacheKey=W,E.__webglTexture=J[W].texture}return B}function lt(E,g,B){return Math.floor(Math.floor(E/B)/g)}function Ze(E,g,B,q){const W=E.updateRanges;if(W.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,B,q,g.data);else{W.sort((ne,fe)=>ne.start-fe.start);let Te=0;for(let ne=1;ne<W.length;ne++){const fe=W[Te],De=W[ne],be=fe.start+fe.count,ue=lt(De.start,g.width,4),Be=lt(fe.start,g.width,4);De.start<=be+1&&ue===Be&&lt(De.start+De.count-1,g.width,4)===ue?fe.count=Math.max(fe.count,De.start+De.count-fe.start):(++Te,W[Te]=De)}W.length=Te+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let ne=0,fe=W.length;ne<fe;ne++){const De=W[ne],be=Math.floor(De.start/4),ue=Math.ceil(De.count/4),Be=be%g.width,P=Math.floor(be/g.width),ie=ue,oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,P),t.texSubImage2D(r.TEXTURE_2D,0,Be,P,ie,oe,B,q,g.data)}E.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function K(E,g,B){let q=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=r.TEXTURE_3D);const J=it(E,g),W=g.source;t.bindTexture(q,E.__webglTexture,r.TEXTURE0+B);const Te=n.get(W);if(W.version!==Te.__version||J===!0){t.activeTexture(r.TEXTURE0+B);const ae=Ke.getPrimaries(Ke.workingColorSpace),ye=g.colorSpace===An?null:Ke.getPrimaries(g.colorSpace),Ee=g.colorSpace===An||ae===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ne=x(g.image,!1,i.maxTextureSize);ne=St(g,ne);const fe=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let be=A(g.internalFormat,fe,De,g.colorSpace,g.isVideoTexture);Ge(q,g);let ue;const Be=g.mipmaps,P=g.isVideoTexture!==!0,ie=Te.__version===void 0||J===!0,oe=W.dataReady,ge=C(g,ne);if(g.isDepthTexture)be=y(g.format===Yi,g.type),ie&&(P?t.texStorage2D(r.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,be,ne.width,ne.height,0,fe,De,null));else if(g.isDataTexture)if(Be.length>0){P&&ie&&t.texStorage2D(r.TEXTURE_2D,ge,be,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ue=Be[ee],P?oe&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,De,ue.data):t.texImage2D(r.TEXTURE_2D,ee,be,ue.width,ue.height,0,fe,De,ue.data);g.generateMipmaps=!1}else P?(ie&&t.texStorage2D(r.TEXTURE_2D,ge,be,ne.width,ne.height),oe&&Ze(g,ne,fe,De)):t.texImage2D(r.TEXTURE_2D,0,be,ne.width,ne.height,0,fe,De,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,be,Be[0].width,Be[0].height,ne.depth);for(let ee=0,Z=Be.length;ee<Z;ee++)if(ue=Be[ee],g.format!==Jt)if(fe!==null)if(P){if(oe)if(g.layerUpdates.size>0){const xe=Io(ue.width,ue.height,g.format,g.type);for(const Fe of g.layerUpdates){const rt=ue.data.subarray(Fe*xe/ue.data.BYTES_PER_ELEMENT,(Fe+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Fe,ue.width,ue.height,1,fe,rt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,fe,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,be,ue.width,ue.height,ne.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,fe,De,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,be,ue.width,ue.height,ne.depth,0,fe,De,ue.data)}else{P&&ie&&t.texStorage2D(r.TEXTURE_2D,ge,be,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ue=Be[ee],g.format!==Jt?fe!==null?P?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?oe&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,De,ue.data):t.texImage2D(r.TEXTURE_2D,ee,be,ue.width,ue.height,0,fe,De,ue.data)}else if(g.isDataArrayTexture)if(P){if(ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,be,ne.width,ne.height,ne.depth),oe)if(g.layerUpdates.size>0){const ee=Io(ne.width,ne.height,g.format,g.type);for(const Z of g.layerUpdates){const xe=ne.data.subarray(Z*ee/ne.data.BYTES_PER_ELEMENT,(Z+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,fe,De,xe)}g.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,De,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,fe,De,ne.data);else if(g.isData3DTexture)P?(ie&&t.texStorage3D(r.TEXTURE_3D,ge,be,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,De,ne.data)):t.texImage3D(r.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,fe,De,ne.data);else if(g.isFramebufferTexture){if(ie)if(P)t.texStorage2D(r.TEXTURE_2D,ge,be,ne.width,ne.height);else{let ee=ne.width,Z=ne.height;for(let xe=0;xe<ge;xe++)t.texImage2D(r.TEXTURE_2D,xe,be,ee,Z,0,fe,De,null),ee>>=1,Z>>=1}}else if(Be.length>0){if(P&&ie){const ee=mt(Be[0]);t.texStorage2D(r.TEXTURE_2D,ge,be,ee.width,ee.height)}for(let ee=0,Z=Be.length;ee<Z;ee++)ue=Be[ee],P?oe&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,fe,De,ue):t.texImage2D(r.TEXTURE_2D,ee,be,fe,De,ue);g.generateMipmaps=!1}else if(P){if(ie){const ee=mt(ne);t.texStorage2D(r.TEXTURE_2D,ge,be,ee.width,ee.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,De,ne)}else t.texImage2D(r.TEXTURE_2D,0,be,fe,De,ne);m(g)&&d(q),Te.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Q(E,g,B){if(g.image.length!==6)return;const q=it(E,g),J=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+B);const W=n.get(J);if(J.version!==W.__version||q===!0){t.activeTexture(r.TEXTURE0+B);const Te=Ke.getPrimaries(Ke.workingColorSpace),ae=g.colorSpace===An?null:Ke.getPrimaries(g.colorSpace),ye=g.colorSpace===An||Te===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,ne=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Ee&&!ne?fe[Z]=x(g.image[Z],!0,i.maxCubemapSize):fe[Z]=ne?g.image[Z].image:g.image[Z],fe[Z]=St(g,fe[Z]);const De=fe[0],be=s.convert(g.format,g.colorSpace),ue=s.convert(g.type),Be=A(g.internalFormat,be,ue,g.colorSpace),P=g.isVideoTexture!==!0,ie=W.__version===void 0||q===!0,oe=J.dataReady;let ge=C(g,De);Ge(r.TEXTURE_CUBE_MAP,g);let ee;if(Ee){P&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Be,De.width,De.height);for(let Z=0;Z<6;Z++){ee=fe[Z].mipmaps;for(let xe=0;xe<ee.length;xe++){const Fe=ee[xe];g.format!==Jt?be!==null?P?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Fe.width,Fe.height,be,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Fe.width,Fe.height,be,ue,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Be,Fe.width,Fe.height,0,be,ue,Fe.data)}}}else{if(ee=g.mipmaps,P&&ie){ee.length>0&&ge++;const Z=mt(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){P?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,be,ue,fe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,fe[Z].width,fe[Z].height,0,be,ue,fe[Z].data);for(let xe=0;xe<ee.length;xe++){const rt=ee[xe].image[Z].image;P?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,rt.width,rt.height,be,ue,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Be,rt.width,rt.height,0,be,ue,rt.data)}}else{P?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,ue,fe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,be,ue,fe[Z]);for(let xe=0;xe<ee.length;xe++){const Fe=ee[xe];P?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,be,ue,Fe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Be,be,ue,Fe.image[Z])}}}m(g)&&d(r.TEXTURE_CUBE_MAP),W.__version=J.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function _e(E,g,B,q,J,W){const Te=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),ye=A(B.internalFormat,Te,ae,B.colorSpace),Ee=n.get(g),ne=n.get(B);if(ne.__renderTarget=g,!Ee.__hasExternalTextures){const fe=Math.max(1,g.width>>W),De=Math.max(1,g.height>>W);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,W,ye,fe,De,g.depth,0,Te,ae,null):t.texImage2D(J,W,ye,fe,De,0,Te,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),Se(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,J,ne.__webglTexture,0,ht(g)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,J,ne.__webglTexture,W),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(E,g,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),g.depthBuffer){const q=g.depthTexture,J=q&&q.isDepthTexture?q.type:null,W=y(g.stencilBuffer,J),Te=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=ht(g);Se(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,W,g.width,g.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,W,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,W,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,E)}else{const q=g.textures;for(let J=0;J<q.length;J++){const W=q[J],Te=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),ye=A(W.internalFormat,Te,ae,W.colorSpace),Ee=ht(g);B&&Se(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ye,g.width,g.height):Se(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ye,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,ye,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const J=q.__webglTexture,W=ht(g);if(g.depthTexture.format===qi)Se(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(g.depthTexture.format===Yi)Se(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qe(E){const g=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=q}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const q=E.texture.mipmaps;q&&q.length>0?Ae(g.__webglFramebuffer[0],E):Ae(g.__webglFramebuffer,E)}else if(B){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=r.createRenderbuffer(),Ne(g.__webglDepthbuffer[q],E,!1);else{const J=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,W)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),Ne(g.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,W)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(E,g,B){const q=n.get(E);g!==void 0&&_e(q.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&qe(E)}function w(E){const g=E.texture,B=n.get(E),q=n.get(g);E.addEventListener("dispose",D);const J=E.textures,W=E.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=g.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let ye=0;ye<g.mipmaps.length;ye++)B.__webglFramebuffer[ae][ye]=r.createFramebuffer()}else B.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)B.__webglFramebuffer[ae]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ae=0,ye=J.length;ae<ye;ae++){const Ee=n.get(J[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&Se(E)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const ye=J[ae];B.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const Ee=s.convert(ye.format,ye.colorSpace),ne=s.convert(ye.type),fe=A(ye.internalFormat,Ee,ne,ye.colorSpace,E.isXRRenderTarget===!0),De=ht(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,fe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(W){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)_e(B.__webglFramebuffer[ae][ye],E,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye);else _e(B.__webglFramebuffer[ae],E,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(g)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ae=0,ye=J.length;ae<ye;ae++){const Ee=J[ae],ne=n.get(Ee);let fe=r.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,ne.__webglTexture),Ge(fe,Ee),_e(B.__webglFramebuffer,E,Ee,r.COLOR_ATTACHMENT0+ae,fe,0),m(Ee)&&d(fe)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),Ge(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)_e(B.__webglFramebuffer[ye],E,g,r.COLOR_ATTACHMENT0,ae,ye);else _e(B.__webglFramebuffer,E,g,r.COLOR_ATTACHMENT0,ae,0);m(g)&&d(ae),t.unbindTexture()}E.depthBuffer&&qe(E)}function ct(E){const g=E.textures;for(let B=0,q=g.length;B<q;B++){const J=g[B];if(m(J)){const W=T(E),Te=n.get(J).__webglTexture;t.bindTexture(W,Te),d(W),t.unbindTexture()}}}const Oe=[],Ie=[];function Me(E){if(E.samples>0){if(Se(E)===!1){const g=E.textures,B=E.width,q=E.height;let J=r.COLOR_BUFFER_BIT;const W=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(E),ae=g.length>1;if(ae)for(let Ee=0;Ee<g.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const ye=E.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ne=n.get(g[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,B,q,0,0,B,q,J,r.NEAREST),c===!0&&(Oe.length=0,Ie.length=0,Oe.push(r.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Oe.push(W),Ie.push(W),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<g.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ne=n.get(g[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const g=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function ht(E){return Math.min(i.maxSamples,E.samples)}function Se(E){const g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function He(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function St(E,g){const B=E.colorSpace,q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ti&&B!==An&&(Ke.getTransfer(B)===et?(q!==Jt||J!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Et,this.setupRenderTarget=w,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se}function um(r,e){function t(n,i=An){let s;const a=Ke.getTransfer(i);if(n===on)return r.UNSIGNED_BYTE;if(n===ya)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return r.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ul)return r.BYTE;if(n===dl)return r.SHORT;if(n===Xi)return r.UNSIGNED_SHORT;if(n===Sa)return r.INT;if(n===jn)return r.UNSIGNED_INT;if(n===sn)return r.FLOAT;if(n===Ki)return r.HALF_FLOAT;if(n===ml)return r.ALPHA;if(n===gl)return r.RGB;if(n===Jt)return r.RGBA;if(n===qi)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===ba)return r.RED;if(n===Ta)return r.RED_INTEGER;if(n===_l)return r.RG;if(n===Aa)return r.RG_INTEGER;if(n===wa)return r.RGBA_INTEGER;if(n===wr||n===Rr||n===Cr||n===Pr)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hs||n===Vs||n===Gs||n===Ws)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ws)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xs||n===$s||n===qs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xs||n===$s)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ys||n===js||n===Ks||n===Zs||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ys)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===js)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ks)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Js)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ca||n===ha)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===la)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fm=`
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

}`;class pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Il(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:dm,fragmentShader:fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mm extends Ri{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,h=null,u=null,l=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new pm,d={},T=t.getContextAttributes();let A=null,y=null;const C=[],R=[],D=new ke;let O=null;const S=new Zt;S.viewport=new pt;const M=new Zt;M.viewport=new pt;const L=[S,M],z=new Uh;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=C[K];return Q===void 0&&(Q=new ps,C[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=C[K];return Q===void 0&&(Q=new ps,C[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=C[K];return Q===void 0&&(Q=new ps,C[K]=Q),Q.getHandSpace()};function j(K){const Q=R.indexOf(K.inputSource);if(Q===-1)return;const _e=C[Q];_e!==void 0&&(_e.update(K.inputSource,K.frame,h||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",re);for(let K=0;K<C.length;K++){const Q=R[K];Q!==null&&(R[K]=null,C[K].disconnect(Q))}V=null,X=null,m.reset();for(const K in d)delete d[K];e.setRenderTarget(A),p=null,f=null,l=null,i=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return l===null&&x&&(l=new XRWebGLBinding(i,t)),l},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",$),i.addEventListener("inputsourceschange",re),T.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,Ae=null;T.depth&&(Ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Yi:qi,Ne=T.stencil?$i:jn);const qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};l=this.getBinding(),f=l.createProjectionLayer(qe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ln(f.textureWidth,f.textureHeight,{format:Jt,type:on,depthTexture:new Dl(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ln(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:on,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(K){for(let Q=0;Q<K.removed.length;Q++){const _e=K.removed[Q],Ne=R.indexOf(_e);Ne>=0&&(R[Ne]=null,C[Ne].disconnect(_e))}for(let Q=0;Q<K.added.length;Q++){const _e=K.added[Q];let Ne=R.indexOf(_e);if(Ne===-1){for(let qe=0;qe<C.length;qe++)if(qe>=R.length){R.push(_e),Ne=qe;break}else if(R[qe]===null){R[qe]=_e,Ne=qe;break}if(Ne===-1)break}const Ae=C[Ne];Ae&&Ae.connect(_e)}}const G=new F,he=new F;function pe(K,Q,_e){G.setFromMatrixPosition(Q.matrixWorld),he.setFromMatrixPosition(_e.matrixWorld);const Ne=G.distanceTo(he),Ae=Q.projectionMatrix.elements,qe=_e.projectionMatrix.elements,Et=Ae[14]/(Ae[10]-1),w=Ae[14]/(Ae[10]+1),ct=(Ae[9]+1)/Ae[5],Oe=(Ae[9]-1)/Ae[5],Ie=(Ae[8]-1)/Ae[0],Me=(qe[8]+1)/qe[0],ht=Et*Ie,Se=Et*Me,He=Ne/(-Ie+Me),St=He*-Ie;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const mt=Et+He,E=w+He,g=ht-St,B=Se+(Ne-St),q=ct*w/E*mt,J=Oe*w/E*mt;K.projectionMatrix.makePerspective(g,B,q,J,mt,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function we(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Q=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),z.near=M.near=S.near=Q,z.far=M.far=S.far=_e,(V!==z.near||X!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,X=z.far),z.layers.mask=K.layers.mask|6,S.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Ne=K.parent,Ae=z.cameras;we(z,Ne);for(let qe=0;qe<Ae.length;qe++)we(Ae[qe],Ne);Ae.length===2?pe(z,S,M):z.projectionMatrix.copy(S.projectionMatrix),Ge(K,z,Ne)};function Ge(K,Q,_e){_e===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ga*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(K){return d[K]};let it=null;function lt(K,Q){if(u=Q.getViewerPose(h||a),_=Q,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ne=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,Ne=!0);for(let w=0;w<_e.length;w++){const ct=_e[w];let Oe=null;if(p!==null)Oe=p.getViewport(ct);else{const Me=l.getViewSubImage(f,ct);Oe=Me.viewport,w===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let Ie=L[w];Ie===void 0&&(Ie=new Zt,Ie.layers.enable(w),Ie.viewport=new pt,L[w]=Ie),Ie.matrix.fromArray(ct.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ct.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),w===0&&(z.matrix.copy(Ie.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ne===!0&&z.cameras.push(Ie)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){l=n.getBinding();const w=l.getDepthInformation(_e[0]);w&&w.isValid&&w.texture&&m.init(w,i.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),l=n.getBinding();for(let w=0;w<_e.length;w++){const ct=_e[w].camera;if(ct){let Oe=d[ct];Oe||(Oe=new Il,d[ct]=Oe);const Ie=l.getCameraImage(ct);Oe.sourceTexture=Ie}}}}for(let _e=0;_e<C.length;_e++){const Ne=R[_e],Ae=C[_e];Ne!==null&&Ae!==void 0&&Ae.update(Ne,Q,h||a)}it&&it(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ze=new Ul;Ze.setAnimationLoop(lt),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}}const Hn=new ln,gm=new at;function _m(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,wl(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,T,A,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),l(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,T,A):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),A=T.envMap,y=T.envMapRotation;A&&(m.envMap.value=A,Hn.copy(y),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(gm.makeRotationFromEuler(Hn)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function l(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vm(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,A){const y=A.program;n.uniformBlockBinding(T,y)}function h(T,A){let y=i[T.id];y===void 0&&(_(T),y=u(T),i[T.id]=y,T.addEventListener("dispose",m));const C=A.program;n.updateUBOMapping(T,C);const R=e.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function u(T){const A=l();T.__bindingPointIndex=A;const y=r.createBuffer(),C=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,y),y}function l(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const A=i[T.id],y=T.uniforms,C=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let R=0,D=y.length;R<D;R++){const O=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,M=O.length;S<M;S++){const L=O[S];if(p(L,R,S,C)===!0){const z=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let j=0;j<V.length;j++){const $=V[j],re=x($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,z+X,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,X),X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,A,y,C){const R=T.value,D=A+"_"+y;if(C[D]===void 0)return typeof R=="number"||typeof R=="boolean"?C[D]=R:C[D]=R.clone(),!0;{const O=C[D];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return C[D]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function _(T){const A=T.uniforms;let y=0;const C=16;for(let D=0,O=A.length;D<O;D++){const S=Array.isArray(A[D])?A[D]:[A[D]];for(let M=0,L=S.length;M<L;M++){const z=S[M],V=Array.isArray(z.value)?z.value:[z.value];for(let X=0,j=V.length;X<j;X++){const $=V[X],re=x($),G=y%C,he=G%re.boundary,pe=G+he;y+=he,pe!==0&&C-pe<re.storage&&(y+=C-pe),z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=re.storage}}}const R=y%C;return R>0&&(y+=C-R),T.__size=y,T.__cache={},this}function x(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function d(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:c,update:h,dispose:d}}class xm{constructor(e={}){const{canvas:t=qc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=Ot;let R=0,D=0,O=null,S=-1,M=null;const L=new pt,z=new pt;let V=null;const X=new $e(0);let j=0,$=t.width,re=t.height,G=1,he=null,pe=null;const we=new pt(0,0,$,re),Ge=new pt(0,0,$,re);let it=!1;const lt=new Pa;let Ze=!1,K=!1;const Q=new at,_e=new F,Ne=new pt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Et(){return O===null?G:1}let w=n;function ct(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ee,!1),w===null){const I="webgl2";if(w=ct(I,v),w===null)throw ct(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Oe,Ie,Me,ht,Se,He,St,mt,E,g,B,q,J,W,Te,ae,ye,Ee,ne,fe,De,be,ue,Be;function P(){Oe=new Cf(w),Oe.init(),be=new um(w,Oe),Ie=new yf(w,Oe,e,be),Me=new cm(w,Oe),Ie.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),ht=new Df(w),Se=new Kp,He=new hm(w,Oe,Me,Se,Ie,be,ht),St=new bf(y),mt=new Rf(y),E=new Oh(w),ue=new Mf(w,E),g=new Pf(w,E,ht,ue),B=new Uf(w,g,E,ht),ne=new If(w,Ie,He),ae=new Ef(Se),q=new jp(y,St,mt,Oe,Ie,ue,ae),J=new _m(y,Se),W=new Jp,Te=new rm(Oe),Ee=new xf(y,St,mt,Me,B,p,c),ye=new om(y,B,Ie),Be=new vm(w,ht,Ie,Me),fe=new Sf(w,Oe,ht),De=new Lf(w,Oe,ht),ht.programs=q.programs,y.capabilities=Ie,y.extensions=Oe,y.properties=Se,y.renderLists=W,y.shadowMap=ye,y.state=Me,y.info=ht}P();const ie=new mm(y,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize($,re,!1))},this.getSize=function(v){return v.set($,re)},this.setSize=function(v,I,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,re=I,t.width=Math.floor(v*G),t.height=Math.floor(I*G),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set($*G,re*G).floor()},this.setDrawingBufferSize=function(v,I,k){$=v,re=I,G=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,I,k,H){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,I,k,H),Me.viewport(L.copy(we).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Ge)},this.setScissor=function(v,I,k,H){v.isVector4?Ge.set(v.x,v.y,v.z,v.w):Ge.set(v,I,k,H),Me.scissor(z.copy(Ge).multiplyScalar(G).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(v){Me.setScissorTest(it=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){pe=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,k=!0){let H=0;if(v){let U=!1;if(O!==null){const te=O.texture.format;U=te===wa||te===Aa||te===Ta}if(U){const te=O.texture.type,de=te===on||te===jn||te===Xi||te===$i||te===ya||te===Ea,ve=Ee.getClearColor(),me=Ee.getClearAlpha(),Le=ve.r,Ue=ve.g,Re=ve.b;de?(_[0]=Le,_[1]=Ue,_[2]=Re,_[3]=me,w.clearBufferuiv(w.COLOR,0,_)):(x[0]=Le,x[1]=Ue,x[2]=Re,x[3]=me,w.clearBufferiv(w.COLOR,0,x))}else H|=w.COLOR_BUFFER_BIT}I&&(H|=w.DEPTH_BUFFER_BIT),k&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Ee.dispose(),W.dispose(),Te.dispose(),Se.dispose(),St.dispose(),mt.dispose(),B.dispose(),ue.dispose(),Be.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",en),ie.removeEventListener("sessionend",Oa),Un.stop()};function oe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=ht.autoReset,I=ye.enabled,k=ye.autoUpdate,H=ye.needsUpdate,U=ye.type;P(),ht.autoReset=v,ye.enabled=I,ye.autoUpdate=k,ye.needsUpdate=H,ye.type=U}function ee(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Z(v){const I=v.target;I.removeEventListener("dispose",Z),xe(I)}function xe(v){Fe(v),Se.remove(v)}function Fe(v){const I=Se.get(v).programs;I!==void 0&&(I.forEach(function(k){q.releaseProgram(k)}),v.isShaderMaterial&&q.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,H,U,te){I===null&&(I=Ae);const de=U.isMesh&&U.matrixWorld.determinant()<0,ve=Gl(v,I,k,H,U);Me.setMaterial(H,de);let me=k.index,Le=1;if(H.wireframe===!0){if(me=g.getWireframeAttribute(k),me===void 0)return;Le=2}const Ue=k.drawRange,Re=k.attributes.position;let We=Ue.start*Le,Qe=(Ue.start+Ue.count)*Le;te!==null&&(We=Math.max(We,te.start*Le),Qe=Math.min(Qe,(te.start+te.count)*Le)),me!==null?(We=Math.max(We,0),Qe=Math.min(Qe,me.count)):Re!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,Re.count));const ft=Qe-We;if(ft<0||ft===1/0)return;ue.setup(U,H,ve,k,me);let ot,nt=fe;if(me!==null&&(ot=E.get(me),nt=De,nt.setIndex(ot)),U.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*Et()),nt.setMode(w.LINES)):nt.setMode(w.TRIANGLES);else if(U.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*Et()),U.isLineSegments?nt.setMode(w.LINES):U.isLineLoop?nt.setMode(w.LINE_LOOP):nt.setMode(w.LINE_STRIP)}else U.isPoints?nt.setMode(w.POINTS):U.isSprite&&nt.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))nt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,ut=U._multiDrawCounts,je=U._multiDrawCount,It=me?E.get(me).bytesPerElement:1,Zn=Se.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<je;Ut++)Zn.setValue(w,"_gl_DrawID",Ut),nt.render(Ce[Ut]/It,ut[Ut])}else if(U.isInstancedMesh)nt.renderInstances(We,ft,U.count);else if(k.isInstancedBufferGeometry){const Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ut=Math.min(k.instanceCount,Ce);nt.renderInstances(We,ft,ut)}else nt.render(We,ft)};function rt(v,I,k){v.transparent===!0&&v.side===gn&&v.forceSinglePass===!1?(v.side=Dt,v.needsUpdate=!0,er(v,I,k),v.side=Pn,v.needsUpdate=!0,er(v,I,k),v.side=gn):er(v,I,k)}this.compile=function(v,I,k=null){k===null&&(k=v),d=Te.get(k),d.init(I),A.push(d),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),v!==k&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const H=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ve=te[de];rt(ve,k,U),H.add(ve)}else rt(te,k,U),H.add(te)}),d=A.pop(),H},this.compileAsync=function(v,I,k=null){const H=this.compile(v,I,k);return new Promise(U=>{function te(){if(H.forEach(function(de){Se.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){U(v);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Je=null;function cn(v){Je&&Je(v)}function en(){Un.stop()}function Oa(){Un.start()}const Un=new Ul;Un.setAnimationLoop(cn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(v){Je=v,ie.setAnimationLoop(v),v===null?Un.stop():Un.start()},ie.addEventListener("sessionstart",en),ie.addEventListener("sessionend",Oa),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,I,O),d=Te.get(v,A.length),d.init(I),A.push(d),Q.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),lt.setFromProjectionMatrix(Q,an,I.reversedDepth),K=this.localClippingEnabled,Ze=ae.init(this.clippingPlanes,K),m=W.get(v,T.length),m.init(),T.push(m),ie.enabled===!0&&ie.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&Vr(te,I,-1/0,y.sortObjects)}Vr(v,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(he,pe),qe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,qe&&Ee.addToRenderList(m,v),this.info.render.frame++,Ze===!0&&ae.beginShadows();const k=d.state.shadowsArray;ye.render(k,v,I),Ze===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let de=0,ve=te.length;de<ve;de++){const me=te[de];za(H,U,v,me)}qe&&Ee.render(v);for(let de=0,ve=te.length;de<ve;de++){const me=te[de];Ba(m,v,me,me.viewport)}}else U.length>0&&za(H,U,v,I),qe&&Ee.render(v),Ba(m,v,I);O!==null&&D===0&&(He.updateMultisampleRenderTarget(O),He.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(y,v,I),ue.resetDefaultState(),S=-1,M=null,A.pop(),A.length>0?(d=A[A.length-1],Ze===!0&&ae.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Vr(v,I,k,H){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||lt.intersectsSprite(v)){H&&Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Q);const de=B.update(v),ve=v.material;ve.visible&&m.push(v,de,ve,k,Ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||lt.intersectsObject(v))){const de=B.update(v),ve=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ne.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ne.copy(de.boundingSphere.center)),Ne.applyMatrix4(v.matrixWorld).applyMatrix4(Q)),Array.isArray(ve)){const me=de.groups;for(let Le=0,Ue=me.length;Le<Ue;Le++){const Re=me[Le],We=ve[Re.materialIndex];We&&We.visible&&m.push(v,de,We,k,Ne.z,Re)}}else ve.visible&&m.push(v,de,ve,k,Ne.z,null)}}const te=v.children;for(let de=0,ve=te.length;de<ve;de++)Vr(te[de],I,k,H)}function Ba(v,I,k,H){const U=v.opaque,te=v.transmissive,de=v.transparent;d.setupLightsView(k),Ze===!0&&ae.setGlobalState(y.clippingPlanes,k),H&&Me.viewport(L.copy(H)),U.length>0&&Qi(U,I,k),te.length>0&&Qi(te,I,k),de.length>0&&Qi(de,I,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function za(v,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Ln(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ki:on,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=d.state.transmissionRenderTarget[H.id],de=H.viewport||L;te.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const ve=y.getRenderTarget(),me=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(te),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Ee.render(k);const Ue=y.toneMapping;y.toneMapping=Rn;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),Ze===!0&&ae.setGlobalState(y.clippingPlanes,H),Qi(v,k,H),He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Qe=0,ft=I.length;Qe<ft;Qe++){const ot=I[Qe],nt=ot.object,Ce=ot.geometry,ut=ot.material,je=ot.group;if(ut.side===gn&&nt.layers.test(H.layers)){const It=ut.side;ut.side=Dt,ut.needsUpdate=!0,ka(nt,k,H,Ce,ut,je),ut.side=It,ut.needsUpdate=!0,We=!0}}We===!0&&(He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te))}y.setRenderTarget(ve,me,Le),y.setClearColor(X,j),Re!==void 0&&(H.viewport=Re),y.toneMapping=Ue}function Qi(v,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=v.length;U<te;U++){const de=v[U],ve=de.object,me=de.geometry,Le=de.group;let Ue=de.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),ve.layers.test(k.layers)&&ka(ve,I,k,me,Ue,Le)}}function ka(v,I,k,H,U,te){v.onBeforeRender(y,I,k,H,U,te),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,I,k,H,v,te),U.transparent===!0&&U.side===gn&&U.forceSinglePass===!1?(U.side=Dt,U.needsUpdate=!0,y.renderBufferDirect(k,I,H,U,v,te),U.side=Pn,U.needsUpdate=!0,y.renderBufferDirect(k,I,H,U,v,te),U.side=gn):y.renderBufferDirect(k,I,H,U,v,te),v.onAfterRender(y,I,k,H,U,te)}function er(v,I,k){I.isScene!==!0&&(I=Ae);const H=Se.get(v),U=d.state.lights,te=d.state.shadowsArray,de=U.state.version,ve=q.getParameters(v,U.state,te,I,k),me=q.getProgramCacheKey(ve);let Le=H.programs;H.environment=v.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(v.isMeshStandardMaterial?mt:St).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Le===void 0&&(v.addEventListener("dispose",Z),Le=new Map,H.programs=Le);let Ue=Le.get(me);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===de)return Va(v,ve),Ue}else ve.uniforms=q.getUniforms(v),v.onBeforeCompile(ve,y),Ue=q.acquireProgram(ve,me),Le.set(me,Ue),H.uniforms=ve.uniforms;const Re=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=ae.uniform),Va(v,ve),H.needsLights=Xl(v),H.lightsStateVersion=de,H.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Ha(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Lr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Va(v,I){const k=Se.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Gl(v,I,k,H,U){I.isScene!==!0&&(I=Ae),He.resetTextureUnits();const te=I.fog,de=H.isMeshStandardMaterial?I.environment:null,ve=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ti,me=(H.isMeshStandardMaterial?mt:St).get(H.envMap||de),Le=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!k.morphAttributes.position,We=!!k.morphAttributes.normal,Qe=!!k.morphAttributes.color;let ft=Rn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ft=y.toneMapping);const ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=ot!==void 0?ot.length:0,Ce=Se.get(H),ut=d.state.lights;if(Ze===!0&&(K===!0||v!==M)){const Rt=v===M&&H.id===S;ae.setState(H,v,Rt)}let je=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ut.state.version||Ce.outputColorSpace!==ve||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==me||H.fog===!0&&Ce.fog!==te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Ue||Ce.morphTargets!==Re||Ce.morphNormals!==We||Ce.morphColors!==Qe||Ce.toneMapping!==ft||Ce.morphTargetsCount!==nt)&&(je=!0):(je=!0,Ce.__version=H.version);let It=Ce.currentProgram;je===!0&&(It=er(H,I,U));let Zn=!1,Ut=!1,Di=!1;const dt=It.getUniforms(),kt=Ce.uniforms;if(Me.useProgram(It.program)&&(Zn=!0,Ut=!0,Di=!0),H.id!==S&&(S=H.id,Ut=!0),Zn||M!==v){Me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),dt.setValue(w,"projectionMatrix",v.projectionMatrix),dt.setValue(w,"viewMatrix",v.matrixWorldInverse);const Lt=dt.map.cameraPosition;Lt!==void 0&&Lt.setValue(w,_e.setFromMatrixPosition(v.matrixWorld)),Ie.logarithmicDepthBuffer&&dt.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ut=!0,Di=!0)}if(U.isSkinnedMesh){dt.setOptional(w,U,"bindMatrix"),dt.setOptional(w,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(w,"boneTexture",Rt.boneTexture,He))}U.isBatchedMesh&&(dt.setOptional(w,U,"batchingTexture"),dt.setValue(w,"batchingTexture",U._matricesTexture,He),dt.setOptional(w,U,"batchingIdTexture"),dt.setValue(w,"batchingIdTexture",U._indirectTexture,He),dt.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(w,"batchingColorTexture",U._colorsTexture,He));const Ht=k.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&ne.update(U,k,It),(Ut||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,dt.setValue(w,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(kt.envMap.value=me,kt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(kt.envMapIntensity.value=I.environmentIntensity),Ut&&(dt.setValue(w,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&Wl(kt,Di),te&&H.fog===!0&&J.refreshFogUniforms(kt,te),J.refreshMaterialUniforms(kt,H,G,re,d.state.transmissionRenderTarget[v.id]),Lr.upload(w,Ha(Ce),kt,He)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Lr.upload(w,Ha(Ce),kt,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(w,"center",U.center),dt.setValue(w,"modelViewMatrix",U.modelViewMatrix),dt.setValue(w,"normalMatrix",U.normalMatrix),dt.setValue(w,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Rt=H.uniformsGroups;for(let Lt=0,Gr=Rt.length;Lt<Gr;Lt++){const Nn=Rt[Lt];Be.update(Nn,It),Be.bind(Nn,It)}}return It}function Wl(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Xl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,I,k){const H=Se.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(v.texture).__webglTexture=I,Se.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const k=Se.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const $l=w.createFramebuffer();this.setRenderTarget=function(v,I=0,k=0){O=v,R=I,D=k;let H=!0,U=null,te=!1,de=!1;if(v){const me=Se.get(v);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(me.__hasExternalTextures)He.rebindTextures(v,Se.get(v.texture).__webglTexture,Se.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Re=v.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&Se.has(Re)&&(v.width!==Re.image.width||v.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}const Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const Ue=Se.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?U=Ue[I][k]:U=Ue[I],te=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?U=Se.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[k]:U=Ue,L.copy(v.viewport),z.copy(v.scissor),V=v.scissorTest}else L.copy(we).multiplyScalar(G).floor(),z.copy(Ge).multiplyScalar(G).floor(),V=it;if(k!==0&&(U=$l),Me.bindFramebuffer(w.FRAMEBUFFER,U)&&H&&Me.drawBuffers(v,U),Me.viewport(L),Me.scissor(z),Me.setScissorTest(V),te){const me=Se.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,k)}else if(de){const me=I;for(let Le=0;Le<v.textures.length;Le++){const Ue=Se.get(v.textures[Le]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,k,me)}}else if(v!==null&&k!==0){const me=Se.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,me.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(v,I,k,H,U,te,de,ve=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Me.bindFramebuffer(w.FRAMEBUFFER,me);try{const Le=v.textures[ve],Ue=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-H&&k>=0&&k<=v.height-U&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ve),w.readPixels(I,k,H,U,be.convert(Ue),be.convert(Re),te))}finally{const Le=O!==null?Se.get(O).__webglFramebuffer:null;Me.bindFramebuffer(w.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,H,U,te,de,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(I>=0&&I<=v.width-H&&k>=0&&k<=v.height-U){Me.bindFramebuffer(w.FRAMEBUFFER,me);const Le=v.textures[ve],Ue=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,We),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ve),w.readPixels(I,k,H,U,be.convert(Ue),be.convert(Re),0);const Qe=O!==null?Se.get(O).__webglFramebuffer:null;Me.bindFramebuffer(w.FRAMEBUFFER,Qe);const ft=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Yc(w,ft,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,We),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(We),w.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,k=0){const H=Math.pow(2,-k),U=Math.floor(v.image.width*H),te=Math.floor(v.image.height*H),de=I!==null?I.x:0,ve=I!==null?I.y:0;He.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,de,ve,U,te),Me.unbindTexture()};const ql=w.createFramebuffer(),Yl=w.createFramebuffer();this.copyTextureToTexture=function(v,I,k=null,H=null,U=0,te=null){te===null&&(U!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=U,U=0):te=0);let de,ve,me,Le,Ue,Re,We,Qe,ft;const ot=v.isCompressedTexture?v.mipmaps[te]:v.image;if(k!==null)de=k.max.x-k.min.x,ve=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,Le=k.min.x,Ue=k.min.y,Re=k.isBox3?k.min.z:0;else{const Ht=Math.pow(2,-U);de=Math.floor(ot.width*Ht),ve=Math.floor(ot.height*Ht),v.isDataArrayTexture?me=ot.depth:v.isData3DTexture?me=Math.floor(ot.depth*Ht):me=1,Le=0,Ue=0,Re=0}H!==null?(We=H.x,Qe=H.y,ft=H.z):(We=0,Qe=0,ft=0);const nt=be.convert(I.format),Ce=be.convert(I.type);let ut;I.isData3DTexture?(He.setTexture3D(I,0),ut=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(He.setTexture2DArray(I,0),ut=w.TEXTURE_2D_ARRAY):(He.setTexture2D(I,0),ut=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const je=w.getParameter(w.UNPACK_ROW_LENGTH),It=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Zn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ut=w.getParameter(w.UNPACK_SKIP_ROWS),Di=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Le),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ue),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Re);const dt=v.isDataArrayTexture||v.isData3DTexture,kt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Ht=Se.get(v),Rt=Se.get(I),Lt=Se.get(Ht.__renderTarget),Gr=Se.get(Rt.__renderTarget);Me.bindFramebuffer(w.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let Nn=0;Nn<me;Nn++)dt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Se.get(v).__webglTexture,U,Re+Nn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Se.get(I).__webglTexture,te,ft+Nn)),w.blitFramebuffer(Le,Ue,de,ve,We,Qe,de,ve,w.DEPTH_BUFFER_BIT,w.NEAREST);Me.bindFramebuffer(w.READ_FRAMEBUFFER,null),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Se.has(v)){const Ht=Se.get(v),Rt=Se.get(I);Me.bindFramebuffer(w.READ_FRAMEBUFFER,ql),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,Yl);for(let Lt=0;Lt<me;Lt++)dt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ht.__webglTexture,U,Re+Lt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ht.__webglTexture,U),kt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Rt.__webglTexture,te,ft+Lt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Rt.__webglTexture,te),U!==0?w.blitFramebuffer(Le,Ue,de,ve,We,Qe,de,ve,w.COLOR_BUFFER_BIT,w.NEAREST):kt?w.copyTexSubImage3D(ut,te,We,Qe,ft+Lt,Le,Ue,de,ve):w.copyTexSubImage2D(ut,te,We,Qe,Le,Ue,de,ve);Me.bindFramebuffer(w.READ_FRAMEBUFFER,null),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else kt?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(ut,te,We,Qe,ft,de,ve,me,nt,Ce,ot.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(ut,te,We,Qe,ft,de,ve,me,nt,ot.data):w.texSubImage3D(ut,te,We,Qe,ft,de,ve,me,nt,Ce,ot):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,We,Qe,de,ve,nt,Ce,ot.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,We,Qe,ot.width,ot.height,nt,ot.data):w.texSubImage2D(w.TEXTURE_2D,te,We,Qe,de,ve,nt,Ce,ot);w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,It),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Zn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Di),te===0&&I.generateMipmaps&&w.generateMipmap(ut),Me.unbindTexture()},this.initRenderTarget=function(v){Se.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){R=0,D=0,O=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const b={grass:"#71987a",ground:"#c8c6b0",wall:"#e6dfcb",brick:"#b97059",wood:"#ae9476",blue:"#7e969e",green:"#234c42",yellow:"#e5bd4a",hair:"#704a35",skin:"#d8a783",white:"#f4efdd",dark:"#3d4c4e",orange:"#e8904b"},Pe=(r,e,t,n,i=[0,0,0])=>({shape:r,p:e,s:t,color:n,r:i}),N=(r,e,t,n=[0,0,0])=>Pe("box",r,e,t,n),Ye=(r,e,t,n=[0,0,0])=>Pe("cyl",r,e,t,n);function Yn(r){switch(r){case"dog_soft_ball":case"dog_toy":return[Pe("sphere",[0,.16,0],[.32,.32,.32],b.orange),N([0,.16,0],[.33,.05,.05],b.blue)];case"dog_mat":return[N([0,.025,0],[.9,.05,.65],b.blue)];case"dog_lion_bowl":case"dog_water_bowl":return[Ye([0,.08,0],[.4,.16,.4],r==="dog_lion_bowl"?b.orange:b.blue),Ye([0,.165,0],[.32,.02,.32],b.white)];case"meeting_bell":return[Pe("cone",[0,.22,0],[.3,.32,.3],b.yellow),Ye([0,.36,0],[.06,.14,.06],b.dark)];case"meeting_gavel":return[Ye([0,.18,0],[.05,.35,.05],b.wood),N([0,.36,0],[.3,.13,.13],b.wood)];case"meeting_stamp":return[N([0,.04,0],[.22,.08,.18],b.blue),Ye([0,.19,0],[.1,.24,.1],b.hair)];case"meeting_vote":return[N([0,.19,0],[.32,.38,.04],b.green)];case"meeting_remote":case"meeting_aircon":case"meeting_music":return[N([0,.05,0],[.13,.08,.3],b.dark),N([0,.096,-.04],[.06,.02,.04],b.yellow)];case"wireless_microphone":return[Ye([0,.23,0],[.12,.46,.12],b.dark),Ye([0,.46,0],[.16,.055,.16],b.yellow),Pe("sphere",[0,.57,0],[.24,.25,.24],b.blue),N([0,.56,.115],[.16,.025,.018],b.dark),N([0,.56,-.115],[.16,.025,.018],b.dark),N([.115,.56,0],[.018,.025,.16],b.dark)];case"basketball":return[Pe("sphere",[0,.25,0],[.5,.5,.5],b.orange),N([0,.25,0],[.51,.035,.035],b.dark),N([0,.25,0],[.035,.035,.51],b.dark)];case"traffic_cone":return[Pe("cone",[0,.4,0],[.6,.8,.6],b.orange),N([0,.04,0],[.75,.08,.75],b.orange),Ye([0,.3,0],[.48,.12,.48],b.white)];case"broom":return[Ye([0,.8,0],[.065,1.5,.065],b.wood),N([0,.1,0],[.5,.22,.15],b.yellow)];case"toy_mallet":return[Ye([0,.5,0],[.08,1,.08],b.wood),N([0,1,0],[.65,.32,.35],"#bd6d77")];case"drumstick":return[Ye([0,.35,0],[.045,.7,.045],b.wood),Pe("sphere",[0,.72,0],[.08,.09,.08],b.wood)];case"recorder":return[Ye([0,.3,0],[.09,.6,.09],b.white),N([0,.42,.055],[.025,.26,.025],b.dark)];case"spinning_top":return[Pe("cone",[0,.18,0],[.32,.3,.32],"#bc7084",[Math.PI,0,0]),Ye([0,.35,0],[.08,.16,.08],b.yellow)];case"trophy":return[N([0,.04,0],[.45,.08,.32],b.wood),Ye([0,.2,0],[.1,.3,.1],b.yellow),Pe("cone",[0,.5,0],[.45,.4,.45],b.yellow),Pe("torus",[0,.5,0],[.5,.5,.5],b.yellow)];case"principal_wig":return[Pe("sphere",[0,.1,0],[.5,.25,.45],b.hair),N([0,0,-.05],[.45,.18,.32],b.hair)];case"principal_glasses":return[Pe("torus",[-.1,.1,0],[.17,.17,.17],b.dark),Pe("torus",[.1,.1,0],[.17,.17,.17],b.dark),N([0,.1,0],[.09,.025,.025],b.dark)];case"wall_clock":return[Ye([0,.35,0],[.62,.06,.62],b.white,[Math.PI/2,0,0]),N([0,.42,.05],[.025,.2,.025],b.dark),N([.09,.35,.05],[.2,.025,.025],b.dark)];case"laptop":return[N([0,.05,0],[.6,.07,.4],b.blue),N([0,.24,-.18],[.6,.4,.035],b.dark),N([0,.24,-.155],[.5,.28,.012],b.green)];case"piano":return[N([0,.75,0],[2,.85,.8],b.dark),N([0,.75,.55],[1.8,.1,.45],b.white),N([0,1.22,-.1],[2.1,.08,.8],b.dark),...[-.8,.8].map(e=>N([e,.35,0],[.14,.7,.14],b.dark)),...Array.from({length:10},(e,t)=>N([-.78+t*.17,.82,.47],[.05,.06,.18],b.dark))];case"music_stand":return[Ye([0,.65,0],[.05,1.2,.05],b.dark),N([0,1.2,0],[.6,.4,.035],b.dark,[-.25,0,0]),N([0,.04,0],[.55,.05,.06],b.dark),N([0,.04,0],[.06,.05,.55],b.dark)];case"coffee_machine":return[N([0,.4,0],[.65,.8,.5],b.dark),N([0,.56,.26],[.42,.2,.03],b.blue),N([0,.1,.3],[.6,.06,.3],b.dark),Ye([.2,.58,.3],[.08,.08,.08],b.yellow,[Math.PI/2,0,0])];case"coffee_cup":return[Ye([0,.13,0],[.22,.26,.22],b.white),Pe("torus",[.14,.12,0],[.16,.16,.16],b.white),Ye([0,.265,0],[.18,.012,.18],b.hair)];case"office_chair":return[N([0,.5,0],[.7,.15,.65],b.blue),N([0,.85,-.27],[.7,.65,.12],b.blue),Ye([0,.25,0],[.06,.5,.06],b.dark),N([0,.05,0],[.9,.05,.06],b.dark),N([0,.05,0],[.06,.05,.9],b.dark)];case"trash_bin":return[Ye([0,.4,0],[.65,.8,.65],b.blue),Ye([0,.82,0],[.55,.04,.55],b.dark)];case"badminton_racket":case"table_tennis_racket":return[Ye([0,.3,0],[.06,.6,.06],b.wood),Pe(r==="badminton_racket"?"torus":"sphere",[0,.7,0],r==="badminton_racket"?[.48,.6,.15]:[.32,.4,.06],r==="badminton_racket"?b.white:b.brick),N([0,.7,0],[.015,.4,.02],b.white)];case"triangle":return[N([-.15,.3,0],[.035,.5,.035],b.blue,[0,0,-.55]),N([.15,.3,0],[.035,.5,.035],b.blue,[0,0,.55]),N([0,.08,0],[.5,.035,.035],b.blue)];case"castanets":return[Pe("sphere",[-.1,.08,0],[.18,.1,.2],b.hair),Pe("sphere",[.1,.08,0],[.18,.1,.2],b.hair)];case"stopwatch":return[Ye([0,.15,0],[.22,.06,.22],b.blue,[Math.PI/2,0,0]),N([0,.28,0],[.065,.065,.065],b.dark)];case"chalk_eraser":return[N([0,.06,0],[.3,.12,.14],b.wood),N([0,.13,0],[.3,.04,.14],b.dark)];case"soft_parcel":case"cardboard_box":return[N([0,.23,0],[.55,.46,.45],r==="soft_parcel"?"#ba7785":b.wood),N([0,.465,0],[.12,.01,.45],b.white)];default:{let e={folder:b.brick,textbook:b.blue,exam_a:"#b8d7cd",exam_b:"#ead893"};return[N([0,.035,0],[.42,.07,.32],e[r]||b.white),N([-.1,.08,0],[.18,.01,.2],r==="folder"?b.white:b.blue)]}}}function rl(r,e=!1){const t=[N([0,.8,0],[1.6,.14,.85],b.wood),...[-.65,.65].flatMap(n=>[-.28,.28].map(i=>N([n,.4,i],[.09,.8,.09],b.dark)))];switch(r){case"tray":return[N([0,.74,0],[.6,.08,.4],b.blue),N([0,.8,0],[.48,.04,.3],b.white)];case"table":case"desk":return t;case"bench":return[N([0,.5,0],[1.6,.12,.55],b.wood),N([0,.85,-.28],[1.6,.55,.08],b.wood),N([-.6,.25,0],[.1,.5,.45],b.dark),N([.6,.25,0],[.1,.5,.45],b.dark)];case"chair":return Yn("office_chair");case"planter":return[Ye([0,.3,0],[.6,.6,.6],b.brick),Pe("sphere",[0,.7,0],[.6,.7,.6],b.grass)];case"dummy":return[Ye([0,.6,0],[.1,1.2,.1],b.wood),Pe("sphere",[0,1.2,0],[.45,.45,.45],b.yellow),N([0,.8,0],[.6,.5,.22],b.brick),N([0,.03,0],[.7,.06,.7],b.wood)];case"podium":return[N([0,.5,0],[1.4,1,.8],b.wood),N([0,1,0],[1.55,.09,.9],b.green)];case"shelter":return[N([0,1,0],[1.3,2,1.5],b.blue),N([0,1,.77],[.55,1.8,.03],b.dark)];case"bed":return ws({type:"medical_bed",w:1.5,d:2.6,h:.65});case"cabinet":return[N([0,.75,0],[1.2,1.5,.6],b.white),N([0,1,.31],[.3,.09,.02],b.brick),N([0,1,.31],[.09,.3,.02],b.brick)];case"stall":return[...t,N([0,2,0],[2.8,.15,1.5],b.brick),N([-1.2,1,0],[.09,2,.09],b.wood),N([1.2,1,0],[.09,2,.09],b.wood)];default:return t}}function bs(r,e,t=!1,n=[]){const i=["Walk","Flee","Chase","Tattle","SoundInvestigate","Gather","Seat","Leave","ReturnItem","ScienceWalk","walk","run","dodge"].includes(r.state||r.action),s=r.dogControl?.remaining>0?"DogHeld":r.state||r.action,a=i?Math.sin(e*(s==="run"?14:9))*.45:0;let o=b.skin,c=t?b.yellow:r.role==="student"?b.white:r.role==="staff"?b.blue:b.brick;r.role==="staff"&&(c={nurse:b.white,shop_aunt:b.brick,guard_uncle:b.blue,pe_teacher:b.green,principal:b.dark,dean:"#626c82",science_teacher:b.white}[r.type]||c),(r.role==="parent"||r.role==="visitor")&&(c={yoga:"#ad83a8",sports:"#547b92",runner:"#8b9b54",neat:"#e6dfcb",armored:"#717b81",drama:"#bc7084",gardener:"#829b64",courier:"#ae9476",photographer:"#465a67",whistle:"#bd8e55",duo:"#7e969e"}[r.type]||c);let h=[Pe("sphere",[0,1.48,0],[.42,.46,.4],o),N([0,1.01,0],[.42,.56,.27],c)];t?(h.push(Pe("cyl",[0,.53,0],[.69,.81,.6],b.yellow),N([-.11,1.26,.16],[.12,.14,.045],b.white,[0,0,-.3]),N([.11,1.26,.16],[.12,.14,.045],b.white,[0,0,.3])),h.push(Pe("sphere",[0,1.64,-.02],[.46,.28,.44],b.hair),N([-.18,1.48,-.01],[.12,.36,.3],b.hair),N([.18,1.48,-.01],[.12,.36,.3],b.hair),N([0,1.46,-.18],[.4,.34,.09],b.hair))):(r.type!=="science_teacher"&&h.push(N([0,1.65,-.03],[.44,.16,.35],r.type==="principal"?"#726250":b.hair)),r.role!=="student"&&h.push(N([0,.72,0],[.46,.1,.27],b.dark))),r.type==="science_teacher"&&h.push(N([0,1.47,.05],[.43,.3,.32],o),N([-.1,1.57,.215],[.14,.04,.025],b.dark),N([.1,1.57,.215],[.14,.04,.025],b.dark),N([0,1.05,0],[.6,.5,.28],b.white),N([-.18,1.14,.18],[.05,.16,.025],b.blue),...Yn("principal_glasses").map(l=>({...l,p:[l.p[0]*1.25,l.p[1]+1.4,l.p[2]+.24]})));let u=n.includes("shoes_red")?b.brick:n.includes("shoes_teal")?b.green:b.hair;for(let l of[-1,1]){let f=l*.14;h.push(N([f,t?.18:.38,Math.sin(a*l)*.13],[.13,t?.22:.6,.14],t?o:b.dark,[a*l,0,0]),N([f,.065,.07+Math.sin(a*l)*.18],[.18,.13,.29],u));let p=-a*l;["Attack","attack","conduct"].includes(s)&&(p=l===1?-1.25-Math.sin(e*20)*.25:0),["Call","Film","Surprise","Gate","roll","teach","piano","play"].includes(s)&&(p=-1.2),s==="Clean"&&(p=-.7),["pet","ScienceFeed"].includes(s)&&(p=-1.1),["throw","wear"].includes(s)&&(p=l===1?-2:0),["pickup","drop","leaveHide"].includes(s)&&(p=-.5),s==="idle"&&Math.floor(e)%18===0&&(p=l===1?-1.1:0),h.push(N([l*.31,1.01,Math.sin(p)*-.15],[.14,.5,.15],c,[p,0,l*.08]),Pe("sphere",[l*.32,.76,Math.sin(p)*-.3],[.14,.14,.14],o))}if(h.push(N([-.09,1.49,.196],[.035,.035,.012],b.dark),N([.09,1.49,.196],[.035,.035,.012],b.dark)),(s==="Film"||s==="Call")&&h.push(N([.32,1.43,.18],[.1,.17,.035],b.dark)),r.type==="nurse"&&h.push(N([0,1.73,0],[.36,.1,.32],b.white),N([0,1.74,.17],[.13,.025,.015],b.brick),N([0,1.74,.17],[.025,.08,.015],b.brick)),r.type==="guard_uncle"&&h.push(N([0,1.73,0],[.5,.1,.48],b.blue)),r.type==="shop_aunt"&&h.push(N([0,.87,.17],[.35,.4,.03],b.white)),r.type==="principal"&&h.push(N([0,1.2,.15],[.05,.28,.025],b.brick)),r.role==="parent"||r.role==="visitor")switch(r.type){case"spatula":h.push(Ye([.37,.85,.2],[.05,.5,.05],b.dark),N([.37,1.12,.2],[.18,.2,.04],b.blue));break;case"briefcase":h.push(N([.43,.55,0],[.35,.3,.12],b.hair));break;case"shopping_bag":h.push(N([.4,.6,0],[.35,.45,.22],b.green));break;case"umbrella":h.push(Pe("cone",[.35,1.8,.1],[1,.25,1],b.blue),Ye([.35,1.1,.1],[.03,1.4,.03],b.wood));break;case"gardener":h.push(Ye([.4,.9,0],[.05,1.6,.05],b.wood),N([.4,.12,0],[.45,.24,.13],b.yellow));break;case"yoga":h.push(N([0,1.64,.17],[.43,.06,.04],"#dbb4d7"));break;case"courier":h.push(N([0,1.71,0],[.5,.08,.5],b.yellow),N([.38,.7,.1],[.4,.3,.3],b.wood));break;case"photographer":h.push(N([0,1.18,.2],[.25,.16,.13],b.dark),Ye([0,1.18,.29],[.1,.08,.1],b.blue,[Math.PI/2,0,0]));break;case"whistle":h.push(Pe("sphere",[0,1.12,.2],[.09,.09,.09],b.yellow));break;case"camper":h.push(N([0,1.72,0],[.7,.05,.65],b.wood));break;case"runner":case"sports":h.push(N([0,1.62,.2],[.43,.055,.025],b.white));break;case"neat":h.push(N([0,.93,.155],[.34,.45,.025],b.white));break;case"armored":h.push(N([0,1.05,.16],[.45,.45,.07],b.dark),N([-.14,.35,.1],[.2,.18,.08],b.blue),N([.14,.35,.1],[.2,.18,.08],b.blue));break;case"drama":h.push(N([0,1.1,-.23],[.5,.9,.05],"#844968"));break;case"pta_leader":h.push(N([0,1.1,.16],[.42,.12,.035],b.yellow));break;case"duo":h.push(N([0,1.65,.18],[.43,.06,.025],b.yellow));break;case"protective":h.push(N([.4,.7,0],[.2,.3,.2],b.yellow));break;case"nagging":h.push(N([0,1.71,0],[.2,.12,.2],b.hair));break}return n.some(l=>l.startsWith("badge"))&&h.push(Pe("sphere",[-.13,1.18,.16],[.08,.08,.035],b.green)),n.some(l=>l.startsWith("glasses"))&&h.push(...Yn("principal_glasses").map(l=>({...l,p:[l.p[0],l.p[1]+1.38,l.p[2]+.22],color:n.includes("glasses_blue")?b.blue:l.color}))),["pet","ScienceFeed"].includes(s)&&(h=h.map(l=>({...l,p:[l.p[0],l.p[1]*.62,l.p[2]+l.p[1]*.18]}))),["pickup","drop"].includes(s)&&(h=h.map(l=>({...l,p:[l.p[0],l.p[1]*.85,l.p[2]+l.p[1]*.12]}))),["hit","ScienceHit"].includes(s)&&(h=h.map(l=>({...l,p:[l.p[0],l.p[1]*.8,l.p[2]-.1]}))),["DogHeld","Following","Hot","Recording","Protecting","Coordinating","Voting","Speaking"].includes(s)&&(h=h.map(l=>({...l,r:[(l.r?.[0]||0)+Math.sin(e*5)*.08,l.r?.[1]||0,l.r?.[2]||0]}))),(s==="Sleeping"||s==="Seated")&&(h=h.map(l=>({...l,p:[l.p[0],l.p[1]*.78,l.p[2]]}))),(r.hp===0||s==="Recover")&&(h=h.map(l=>({...l,p:[l.p[0],l.p[1]*.4,l.p[2]+l.p[1]*.15]}))),h}function sl(r,e){const t=r.id==="dog_mani",n=t?"#f4f0e6":"#b77540",i=t?"#e2ded1":"#f3d7ac",s=["Rest","Idle","Petting"].includes(r.state),a=["Roam","Greet","Following","Fetching","Returning","AssistApproach","Relocating","Feeding"].includes(r.state),o=Math.sin(e*(r.state==="Petting"?15:7))*.35,c=s?.3:.42,h=[N([0,c,-.03],[.4,.32,.64],n),Pe("sphere",[0,c+.14,.33],[.34,.34,.32],n),Pe("cone",[0,c+.08,.56],[.23,.23,.3],i,[Math.PI/2,0,0]),N([0,c+.07,.69],[.09,.07,.05],b.dark),N([-.085,c+.2,.48],[.035,.035,.025],b.dark),N([.085,c+.2,.48],[.035,.035,.025],b.dark),...[-1,1].map(u=>Pe("cone",[u*.12,c+.38,.3],[.15,.23,.14],n)),N([0,c-.03,.2],[.32,.24,.09],i),Pe("torus",[Math.sin(o)*.12,c+.16,-.4],t?[.35,.35,.23]:[.24,.24,.16],n,[0,o,0])];for(const u of[-.14,.14])for(const l of[-.24,.2])h.push(N([u,s?.1:.18,l+(a?Math.sin(e*11+(u*l>0?0:Math.PI))*.08:0)],[.09,s?.16:.32,.1],n));if(t)for(const u of[-.17,0,.17])h.push(Pe("cone",[u,c+.01,.23],[.18,.28,.2],i,[Math.PI,0,u]));return r.state==="Feeding"||r.state==="AssistContact"?h.map(u=>({...u,p:[u.p[0],u.p[1]-(u.p[2]>.25?.12:0),u.p[2]]})):h}class Mm{constructor(e,t){this.canvas=e,this.game=t,this.renderer=new xm({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor("#9cae97"),this.renderer.outputColorSpace=Ot,this.scene.add(new Ph("#fff6de","#a4b6a5",1.6));const n=new Po("#fff3d6",1.7);n.position.set(-20,35,10),this.scene.add(n);const i=new wo({color:"white",flatShading:!0});let s={box:new Pi(1,1,1),cyl:new Br(.43,.5,1,8),sphere:new Ia(.5,8,6),cone:new Da(.5,1,8),torus:new Ua(.4,.055,4,12),disc:new La(.5,12)};for(let[a,o]of Object.entries(s)){let c=new Eh(o,i,6e3);c.instanceMatrix.setUsage(Xc),c.frustumCulled=!1,this.batches.set(a,{mesh:c,count:0,staticCount:0}),this.scene.add(c)}this.geometryCount=Object.keys(s).length,this.resize(),t.listeners.push(a=>{if(a.type==="reset"){this.effects=[];return}if(["CombatResolved","propDamaged","spill","mess","instrument","paperCollected"].includes(a.type)){let o=t.npcs.find(c=>c.id===a.targetId)||t.props.find(c=>c.id===a.data.id)||t.objects.get(a.data.id)||t.player;for(let c=0;c<4;c++)this.effects.length<(t.meeting.running?Math.max(0,12-t.meeting.papers.length-(t.meeting.airMode===2?3:0)):t.profile.settings.quality==="low"?48:96)&&this.effects.push({x:o.x,z:o.z,start:t.time,index:c,type:a.type})}}),window.addEventListener("resize",()=>this.resize())}scene=new So;camera=new Fr(-15,15,12,-12,.1,200);renderer;batches=new Map;staticParts=[];dummy=new _t;color=new $e;ray=new Nh;plane=new bn(new F(0,1,0),0);pointer=new ke;target=new F;lastSession=-1;fps=0;frames=[];calls=0;triangles=0;quality="standard";autoLow=!1;slow=0;fast=0;labels=[];geometryCount=0;ctxLost=!1;alpha=1;effects=[];resize(){let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight,n=e/t,i=ic(e,t,matchMedia("(pointer:coarse)").matches);this.camera.left=-i*n,this.camera.right=i*n,this.camera.top=i,this.camera.bottom=-i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.setDPR()}setDPR(){let e=this.game.profile.settings.quality;this.quality=e==="low"||e==="auto"&&this.autoLow?"low":"standard",this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality==="low"?1:1.5))}add(e,t,n=0,i=1,s=0){for(let a of e){if(a.hidden)continue;let o=a.p[0]*i,c=a.p[1]*i,h=a.p[2]*i,u=Math.cos(n),l=Math.sin(n);this.dummy.position.set(t[0]+o*u+h*l,t[1]+c,t[2]-o*l+h*u),this.dummy.rotation.set((a.r?.[0]||0)+s,n+(a.r?.[1]||0),a.r?.[2]||0),this.dummy.scale.set(a.s[0]*i,a.s[1]*i,a.s[2]*i),this.dummy.updateMatrix();let f=this.batches.get(a.shape);f.count>=6e3||(f.mesh.setMatrixAt(f.count,this.dummy.matrix),f.mesh.setColorAt(f.count,this.color.set(a.color)),f.count++)}}label(e,t,n=2.7,i=.18){let s=document.createElement("canvas");s.width=512,s.height=128;let a=s.getContext("2d");a.fillStyle="#f4efdd",a.fillRect(0,0,512,128),a.fillStyle=b.green,a.font="bold 48px system-ui";const o=Math.min(48,48*460/Math.max(1,a.measureText(e).width));a.font=`bold ${o}px system-ui`,a.textAlign="center",a.fillText(e,256,81);let c=new wh(s),h=new Pl({map:c,depthTest:!1,depthWrite:!1}),u=new Mh(h);u.position.set(t.x,Math.max(i,3),t.z),u.renderOrder=100,u.userData.text=e,u.userData.anchor={x:t.x,z:t.z},u.userData.baseSize=n,u.userData.minPixels=Math.min(270,Math.max(130,e.length*13+24)),u.scale.set(n,n/4,1),this.scene.add(u),this.labels.push(u)}rebuild(){this.effects=[],this.staticParts=[];for(let t of this.labels)this.scene.remove(t),t.material.map?.dispose(),t.material.dispose();this.labels=[];let e=(t,n=[0,0,0])=>this.staticParts.push({parts:t,p:n});if(this.game.meeting.running){e([N([0,-.06,5],[12,.12,10],b.white)]);for(const t of this.game.layout.furniture)this.staticParts.push({parts:ws(t),p:[t.x,0,t.z],angle:t.angle});for(const t of this.game.layout.signs)this.label(t.text,t,t.size||2.7,t.y||.18);this.lastSession=this.game.session;for(const t of this.batches.values())t.count=0;for(const t of this.staticParts)this.add(t.parts,t.p,t.angle||0);for(const t of this.batches.values())t.staticCount=t.count;return}e([N([0,-.2,0],[64,.35,52],b.grass),N([0,-.03,4],[24,.06,27],b.ground),N([0,-.02,-11],[60,.06,6],b.ground),N([-12,-.02,-1],[4,.06,24],b.ground),N([12,-.02,-1],[4,.06,24],b.ground)]);for(let t of Tn){let n={x:(t.x1+t.x2)/2,z:(t.z1+t.z2)/2};if(["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id)&&e([N([n.x,0,n.z],[t.x2-t.x1,.08,t.z2-t.z1],b.white)]),t.id==="playground"){e([N([n.x,.005,n.z],[15,.06,15],b.brick),N([n.x,.05,n.z],[.05,.03,14],b.white),N([n.x,.05,11],[13,.03,.06],b.white),N([n.x,.05,23],[13,.03,.06],b.white)]);for(let i of[-28,-26,-24,-22,-20,-18,-16])e([N([i,.05,19],[.06,.03,8],b.white)])}["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id)||this.label(t.label,{x:n.x,z:t.z1+.9},t.id==="courtyard"?4:3)}e([N([20.5,.025,12],[10,.045,6],b.ground),N([0,.025,22],[14,.045,7],b.ground),N([-18,.075,17],[8,.035,11],"#879f91"),N([-18,.1,17],[7,.015,.04],b.white),N([-18,.1,17],[.04,.015,10],b.white),N([-21.5,.1,17],[.04,.015,10],b.white),N([-14.5,.1,17],[.04,.015,10],b.white)]);for(let t of[-30,30])for(let n of[-20,-8,6,20])e([Ye([t,.8,n],[.35,1.6,.35],b.wood),Pe("sphere",[t,2.2,n],[2.6,3,2.6],b.grass),Pe("sphere",[t+.7,2.7,n],[2.1,2.1,2.1],"#86a486")]);for(let t=-30;t<=30;t+=3)e([N([t,.55,25],[.1,1.1,.1],b.blue)]);e([N([-5,1.5,23],[.35,3,.35],b.brick),N([5,1.5,23],[.35,3,.35],b.brick)]),this.label("東山・虛構校園",{x:0,z:24},4);for(const t of this.game.layout.furniture)this.staticParts.push({parts:ws(t),p:[t.x,0,t.z],angle:t.angle});for(const t of this.game.layout.signs)this.label(t.text,t,t.size||2.7,t.y||.18);for(const t of Tn.filter(n=>["classroom","music_room","staff_room","principal_room","infirmary"].includes(n.id))){const n=t.x2<0?t.x2:t.x1,i=(t.z1+t.z2)/2;t.id!=="infirmary"&&(e([N([n,.85,i-1.65],[.5,1.7,.15],b.blue),N([n,.85,i+1.65],[.5,1.7,.15],b.blue),N([n,1.75,i],[.5,.12,3.45],b.blue)]),this.label(t.label,{x:n+(n<0?.15:-.15),z:i-2.3},2.1,1.55))}for(let t of[-11,-5,5,11])e([N([t,.5,-13.8],[.25,1,.25],b.blue)]);this.lastSession=this.game.session;for(const t of this.batches.values())t.count=0;for(const t of this.staticParts)this.add(t.parts,t.p,t.angle||0);for(const t of this.batches.values())t.staticCount=t.count}position(e,t){let n=this.game.previous.get(e);return!n||Vt(n,t)>4?t:{x:n.x+(t.x-n.x)*this.alpha,z:n.z+(t.z-n.z)*this.alpha}}frame(e,t=!0,n=1){if(this.alpha=n,this.ctxLost)return;this.lastSession!==this.game.session&&this.rebuild();for(let l of this.batches.values())l.count=l.staticCount;let i=this.game;for(const l of this.labels){l.visible=Vt(i.player,l.userData.anchor)<22;const f=Math.max(l.userData.baseSize,l.userData.minPixels*(this.camera.right-this.camera.left)/this.canvas.clientWidth);l.scale.set(f,f/4,1)}!i.meeting.running&&Vt(i.player,{x:0,z:23})>5&&this.add([N([0,2.8,23],[10.3,.5,.45],b.green)],[0,0,0]);for(let l of i.world.walls){let f=vi(i.player)===l.zone,p=i.meeting.running&&(l.id.includes("front")||l.id.includes("right"))||f&&(l.id.endsWith("front")||l.id.endsWith("door-b")||l.id.endsWith("outer")&&l.x>0||l.id==="inf-door-r");this.add([N([0,p?.2:1.25,0],[l.w,p?.4:2.5,l.d],b.wall),N([0,p?.18:.45,0],[l.w+.02,p?.3:.9,l.d+.02],"#aabbb0"),N([0,p?.42:2.55,0],[l.w+.05,.08,l.d+.05],b.brick)],[l.x,0,l.z])}for(const l of i.world.walls.filter(f=>f.id.endsWith("back"))){vi(i.player),l.zone;for(const f of[-l.w*.3,l.w*.3])this.add([N([f,1.6,0],[1.8,.75,l.d+.05],b.blue),N([f,1.6,.2],[.055,.75,.035],b.dark),N([f,1.6,.2],[1.8,.055,.035],b.dark)],[l.x,0,l.z])}for(let l of i.props)this.add(rl(l.type),[l.x,l.broken?.1:0,l.z],l.broken?.65:0,1,l.broken?Math.PI/2:0);for(let l of i.objects.values()){if(l.state==="reserved")continue;if(l.papers?.some(m=>!m.taken)){for(let m of l.papers)m.taken||this.add(Yn("exam_papers"),[m.x,.02,m.z]);continue}let f=this.position(l.id,l),p=[f.x,l.y,f.z],_=l.angle||0;if(l.state==="held"){let m=l.owner===i.player.id?i.player:i.npcs.find(d=>d.id===l.owner);if(m){let d=Math.atan2(m.face.x,m.face.z),T=this.position(m.id,m);p=[T.x+.36*Math.cos(d)+.18*Math.sin(d),.88,T.z-.36*Math.sin(d)+.18*Math.cos(d)],_=d,l.type==="wireless_microphone"&&m===i.player&&i.microphoneCall&&(p[1]=1.12,p[0]=T.x+.22*Math.cos(d)+.24*Math.sin(d),p[2]=T.z-.22*Math.sin(d)+.24*Math.cos(d))}}l.state==="worn"&&(p=[i.player.x,1.6,i.player.z],_=Math.atan2(i.player.face.x,i.player.face.z),l.type==="principal_glasses"&&(p[1]=1.38,p[0]+=i.player.face.x*.23,p[2]+=i.player.face.z*.23));let x=l.plane?[N([0,.08,0],[.55,.02,.15],b.white,[0,.5,0]),N([0,.08,0],[.15,.02,.55],b.white,[0,.5,0])]:Yn(l.type);l.type==="piano"&&i.player.action==="piano"&&Vt(l,i.player)<3&&(x[2]={...x[2],r:[Math.sin(i.time*5)*.2,0,0]}),this.add(x,p,_,l.type==="principal_wig"&&l.state==="worn"?1.1:1,l.broken&&l.type!=="principal_wig"?.6:0),l.state==="airborne"&&this.add([Pe("disc",[0,.03,0],[.5,.5,.5],"#97a28c",[-Math.PI/2,0,0])],[l.x,0,l.z])}let s=i.player,a=this.position(s.id,s);this.add(bs(s,i.time,!0,i.profile.equipped),[a.x,s.hidden?-.9:0,a.z],Math.atan2(s.face.x,s.face.z)),this.add([Pe("disc",[0,.025,0],[.72,.72,.72],"#a4a387",[-Math.PI/2,0,0])],[a.x,0,a.z]);for(let l of i.npcs){if(!l.active&&Vt(l,s)>26)continue;let f=this.position(l.id,l);if(this.add(bs(l,i.time,!1).map(p=>l.flashUntil>(i.meeting.running?i.meeting.elapsed:i.time)?{...p,color:b.white}:p),[f.x,0,f.z],Math.atan2(l.face.x,l.face.z),l.role==="student"?.85:1),l.state==="Attack"&&this.add([Pe("torus",[0,.04,0],[1.5,1.5,1.5],b.orange,[Math.PI/2,0,0])],[l.x,0,l.z]),i.meeting.running&&l.stampUntil>i.meeting.elapsed&&this.add([N([0,1.15,.19],[.22,.12,.04],b.yellow)],[l.x,0,l.z],Math.atan2(l.face.x,l.face.z)),l.state==="Recover")for(let p=0;p<3;p++)this.add([Pe("sphere",[Math.cos(i.time*2+p*2)*.4,1.2,Math.sin(i.time*2+p*2)*.4],[.1,.1,.1],b.yellow)],[l.x,0,l.z])}for(const l of i.dogs.visible)l.state==="Relocating"&&l.timer>1.6||!l.active&&Vt(l,i.player)>26||(this.add(sl(l,i.time),[l.x,0,l.z],Math.atan2(l.face.x,l.face.z),l.id==="dog_mani"?.9:1),i.dogs.heart?.id===l.id&&i.dogs.heart.until>i.profile.dogs.clock&&this.add([Pe("sphere",[-.07,1,0],[.14,.15,.08],"#c77d90"),Pe("sphere",[.07,1,0],[.14,.15,.08],"#c77d90"),Pe("cone",[0,.9,0],[.24,.2,.08],"#c77d90",[Math.PI,0,0])],[l.x,0,l.z]));if(!i.meeting.running){this.add([N([0,.12,0],[.7,.24,.6],b.wood),Ye([-1,.1,0],[.5,.2,.5],b.orange),Ye([1,.1,0],[.5,.2,.5],b.blue),Ye([1,.21,0],[.4,.02,.4],"#8db8c6"),N([-.4,.02,1],[.85,.04,.65],b.blue),N([1.2,.02,-1],[.85,.04,.65],b.white)],[8,0,11]);const l=Gi.find(f=>f.id===i.profile.dogs.activeQuest);l&&this.add([Pe("torus",[0,.05,0],[1.8,1.8,1.8],b.yellow,[Math.PI/2,0,0])],[l.goal.x,0,l.goal.z])}const o=i.npcs.find(l=>l.id===i.dogs.selectedTarget);if(o&&i.dogs.validTarget(o)&&this.add([Pe("torus",[0,.05,0],[1.1,1.1,1.1],b.yellow,[Math.PI/2,0,0])],[o.x,0,o.z]),i.step&&["place","deliver"].includes(i.step.kind))for(let l=0;l<(i.step.count||1);l++){let f=ll(i.step,l);this.add([Pe("torus",[0,.065,0],[1.6,1.6,1.6],b.yellow,[Math.PI/2,0,0]),N([0,.08,0],[.12,.02,1.2],b.yellow),N([0,.08,0],[1.2,.02,.12],b.yellow)],[f.x,0,f.z])}if(i.tutorial===2&&i.held?.type==="exam_papers"&&this.add([Pe("torus",[0,.065,0],[2.6,2.6,2.6],b.yellow,[Math.PI/2,0,0])],[Ga.podium.x,0,Ga.podium.z]),i.race){let f=[[-25,15],[-25,21],[-18,21],[-18,15],[-21,15]][i.race.checkpoint];this.add([Pe("torus",[0,.1,0],[1.4,1.4,1.4],b.yellow,[Math.PI/2,0,0])],[f[0],0,f[1]])}for(const l of i.microphoneSignals()){const f=i.time-l.start;if(this.add([Pe("torus",[0,.08,0],[.75,.75,.75],b.yellow,[Math.PI/2,0,0])],[l.x,0,l.z]),!i.profile.settings.lowMotion)for(let p=0;p<2;p++){const _=.8+(f*1.4+p*.7)%1.5;this.add([Pe("torus",[0,.15,0],[_,_,_],b.blue,[Math.PI/2,0,0])],[l.x,0,l.z])}}if(i.meeting.running){if(i.meeting.airMode===2)for(let l=0;l<3;l++)this.add([N([0,0,0],[.24,.01,.16],b.white)],[Math.sin(i.meeting.elapsed*2+l)*.6,1.05,3+l*.6]);i.meeting.selected.includes("printer")&&this.add([N([0,.85,0],[.65,.3,.45],b.white),N([0,.99,.1],[.35,.02,.1],b.dark)],[4.4,0,4.8]);for(const l of i.meeting.water)this.add([Pe("disc",[0,.025,0],[1,.5,1],b.blue,[-Math.PI/2,0,0])],[l.x,0,l.z]);for(let l=0;l<i.meeting.papers.length;l++)this.add(Yn("folder"),[4.25,.76,4+l*.18]);i.meeting.selected.includes("projector")&&this.add([N([0,1.65,0],[3,.95,.08],b.blue)],[0,0,.3]),i.meeting.selected.includes("whiteboard")&&this.add([N([0,1.1,0],[1.6,1.4,.08],i.meeting.boardMusic?b.green:b.white),N([-.5,.5,0],[.05,1,.08],b.dark),N([.5,.5,0],[.05,1,.08],b.dark)],[4.5,0,7.8])}let c=i.nearest();c&&Vt(c,s)<2.5&&this.add([Pe("cone",[0,2.5+Math.sin(i.time*3)*.06,0],[.2,.3,.2],b.yellow,[Math.PI,0,0])],[c.x,0,c.z]),this.effects=this.effects.filter(l=>i.time-l.start<2.6&&i.time>=l.start),i.meeting.running&&(this.effects=this.effects.slice(-Math.max(1,12-i.meeting.papers.length-(i.meeting.airMode===2?3:0))));for(let l of this.effects){let f=i.time-l.start,p=i.profile.settings.lowMotion?.08:.25;this.add([N([Math.sin(l.index*2)*f*p,1+f*.25,Math.cos(l.index*2)*f*p],[.05,.025,.08],l.type==="instrument"?b.yellow:b.white,[f,0,f])],[l.x,0,l.z])}for(let l of this.batches.values())l.mesh.count=l.count,l.mesh.instanceMatrix.needsUpdate=!0,l.mesh.instanceColor&&(l.mesh.instanceColor.needsUpdate=!0);this.target.lerp(new F(s.x,0,s.z),Math.min(1,e*7));let h=25,u=13.5;this.camera.position.copy(this.target).add(new F(u,h,u)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(!0),this.layoutLabels(),this.renderer.render(this.scene,this.camera),this.calls=this.renderer.info.render.calls,this.triangles=this.renderer.info.render.triangles,e>0&&t&&(this.frames.push(e*1e3),this.frames.length>1200&&this.frames.shift(),this.fps=1/e,i.profile.settings.quality==="auto"&&(e>.033?(this.slow+=e,this.fast=0):(this.fast+=e,this.slow=Math.max(0,this.slow-e)),this.slow>3&&!this.autoLow&&(this.autoLow=!0,this.setDPR()),this.fast>20&&this.autoLow&&(this.autoLow=!1,this.setDPR())))}labelRects=[];labelUIAt=0;layoutLabels(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight,n=performance.now();n>=this.labelUIAt&&(this.labelUIAt=n+200,this.labelRects=[...document.querySelectorAll(".top-left,.top-right,.quest,.side-nav,.bottom-info,.action-cluster,#joystick,#meeting-controls")].filter(c=>c.getClientRects().length>0).map(c=>{const h=c.getBoundingClientRect();return{x:h.x,y:h.y,w:h.width,h:h.height}}));const i=[...this.labelRects],s=(c,h)=>c.x<h.x+h.w+4&&c.x+c.w+4>h.x&&c.y<h.y+h.h+4&&c.y+c.h+4>h.y,a=new Set(Tn.map(c=>c.label)),o=[...this.labels].sort((c,h)=>+!a.has(c.userData.text)-+!a.has(h.userData.text)||Vt(c.userData.anchor,this.game.player)-Vt(h.userData.anchor,this.game.player));for(const c of o){if(!c.visible)continue;const h=c.position.clone().project(this.camera),u=c.scale.x/(this.camera.right-this.camera.left)*e,l=c.scale.y/(this.camera.top-this.camera.bottom)*t,f={x:(h.x+1)/2*e-u/2,y:(1-h.y)/2*t-l/2,w:u,h:l};c.visible=h.z>=-1&&h.z<=1&&f.x>=4&&f.y>=4&&f.x+u<=e-4&&f.y+l<=t-4&&!i.some(p=>s(f,p)),c.visible&&i.push(f)}}thumbs=new Map;thumbnail(e,t){const n=t+":"+e;if(this.thumbs.has(n))return this.thumbs.get(n);const i=new So;i.background=new $e("#dbe4d0"),i.add(new Ih(16777215,2));const s=new Po(16777215,2);s.position.set(3,5,4),i.add(s);const a=new Fr(-1.2,1.2,1.15,-1.15,.1,20);a.position.set(2,2.2,4),a.lookAt(0,.8,0);const o=t==="dog"?sl({id:e,state:"Rest"},0):t==="item"?e.startsWith("prop:")?rl(e.slice(5)):Yn(e.replace("item:","")):bs({type:e,role:t,hp:60,state:"Idle"},0),c=[];for(const T of o){const A=this.batches.get(T.shape)?.mesh.geometry;if(!A)continue;const y=new wo({color:T.color});c.push(y);const C=new Xt(A,y);C.position.set(...T.p),C.scale.set(...T.s),C.rotation.set(...T.r||[0,0,0]),i.add(C)}const h=new In().setFromObject(i),u=h.getCenter(new F);a.position.copy(u).add(new F(2,2,4)),a.lookAt(u);const l=new Ln(192,160),f=this.renderer.getRenderTarget();this.renderer.setRenderTarget(l),this.renderer.render(i,a);const p=new Uint8Array(30720*4);this.renderer.readRenderTargetPixels(l,0,0,192,160,p),this.renderer.setRenderTarget(f);const _=document.createElement("canvas");_.width=192,_.height=160;const x=_.getContext("2d"),m=x.createImageData(192,160);for(let T=0;T<160;T++)m.data.set(p.subarray((159-T)*192*4,(160-T)*192*4),T*192*4);x.putImageData(m,0,0);const d=_.toDataURL();return l.dispose(),c.forEach(T=>T.dispose()),this.thumbs.set(n,d),d}aim(e,t,n=!1){let i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);let s=new F;if(this.ray.ray.intersectPlane(this.plane,s)){let a=this.game.player;const o=this.game.npcs.filter(l=>this.game.dogs.validTarget(l)&&Vt(l,{x:s.x,z:s.z})<1&&this.inView(l)).sort((l,f)=>Vt(l,{x:s.x,z:s.z})-Vt(f,{x:s.x,z:s.z}))[0];o&&n&&this.game.dogs.select(o.id);let c=s.x-a.x,h=s.z-a.z,u=Math.hypot(c,h);u>.1&&(a.face={x:c/u,z:h/u})}}inView(e){let t=new F(e.x,1,e.z).project(this.camera);return Math.abs(t.x)<1.2&&Math.abs(t.y)<1.2&&t.z>-1&&t.z<1}project(e,t=2.4){let n=new F(e.x,t,e.z).project(this.camera);return{x:(n.x+1)/2*this.canvas.clientWidth,y:(1-n.y)/2*this.canvas.clientHeight}}measure(){let e=[...this.frames].sort((t,n)=>t-n);return{fps:this.fps,p50:e[Math.floor(e.length*.5)]||0,p95:e[Math.floor(e.length*.95)]||0,drawCalls:this.calls,triangles:this.triangles,geometry:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,activeNPC:this.game.npcs.filter(t=>t.active).length,aiMs:this.game.aiMs,simulationMs:this.game.tickMs,quality:this.quality,samples:e.length}}}class Sm{keys=new Set;stick={x:0,z:0};pointer=null;actionPointers=new Set;enabled=!1;onAction=()=>{};onPause=()=>{};onAim=()=>{};onSelect=()=>{};knob;constructor(e,t,n){this.knob=n,window.addEventListener("keydown",a=>{if(a.code==="Escape"){this.clear(),this.onPause();return}if(!this.enabled||a.target instanceof HTMLInputElement||a.target instanceof HTMLSelectElement||a.target instanceof HTMLTextAreaElement||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault(),a.repeat))return;this.keys.add(a.code);let o={KeyJ:"attack",KeyK:"dodge",Space:"dodge",KeyE:"interact",KeyQ:"throw",KeyR:"drop",KeyF:"roll",Enter:"conduct"}[a.code];o&&(a.preventDefault(),this.onAction(o))}),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>this.clear()),e.addEventListener("pointermove",a=>{this.enabled&&a.pointerType==="mouse"&&this.onAim(a.clientX,a.clientY)}),e.addEventListener("pointerdown",a=>{this.enabled&&this.onSelect(a.clientX,a.clientY),this.enabled&&a.pointerType==="mouse"&&a.button===0&&(this.onAim(a.clientX,a.clientY),this.onAction("attack"))});const i=a=>{let o=t.getBoundingClientRect(),c=43,h=(a.clientX-o.left-o.width/2)/c,u=(a.clientY-o.top-o.height/2)/c,l=Math.max(1,Math.hypot(h,u));this.stick={x:h/l,z:u/l},n.style.transform=`translate(${h/l*30}px,${u/l*30}px)`};t.addEventListener("pointerdown",a=>{!this.enabled||this.pointer!==null||this.actionPointers.size>1||(a.preventDefault(),this.pointer=a.pointerId,t.setPointerCapture(a.pointerId),i(a))}),t.addEventListener("pointermove",a=>{a.pointerId===this.pointer&&i(a)});const s=a=>{a.pointerId===this.pointer&&(this.pointer=null,this.stick={x:0,z:0},n.style.transform="")};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s)}bindButton(e,t,n){let i=0,s;e.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),!(!this.enabled||this.actionPointers.size>=1)&&(this.actionPointers.add(o.pointerId),e.setPointerCapture(o.pointerId),i=performance.now(),n?s=setTimeout(n,420):this.onAction(t))});let a=(o,c=!1)=>{this.actionPointers.has(o.pointerId)&&(this.actionPointers.delete(o.pointerId),clearTimeout(s),n&&!c&&performance.now()-i<420&&this.enabled&&this.onAction(t))};e.addEventListener("pointerup",o=>a(o)),e.addEventListener("pointercancel",o=>a(o,!0)),e.addEventListener("lostpointercapture",o=>a(o,!0)),e.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.enabled&&this.onAction(t))})}clear(){this.knob&&(this.knob.style.transform=""),this.keys.clear(),this.pointer=null,this.actionPointers.clear(),this.stick={x:0,z:0}}movement(){if(!this.enabled)return{x:0,z:0,run:!1};let e=this.stick.x,t=this.stick.z;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t=-1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e=-1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e=1);let n=Math.hypot(e,t),i=Math.max(1,n);return e/=i,t/=i,{x:(e+t)*Math.SQRT1_2,z:(t-e)*Math.SQRT1_2,run:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||Math.hypot(this.stick.x,this.stick.z)>.8}}}const le=r=>document.querySelector(r),st=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class ym{constructor(e,t,n,i,s){this.game=e,this.render=t,this.input=n,this.audio=i,this.store=s,e.onToast=a=>this.toast(a),e.onSave=()=>s.save(e.profile),e.listeners.push(a=>{a.type==="rescue"&&setTimeout(()=>this.open("report"),0)}),this.input.onAction=a=>this.action(a),this.input.onPause=()=>this.paused?this.close():this.open("pause"),this.input.onAim=(a,o)=>t.aim(a,o),this.input.onSelect=(a,o)=>t.aim(a,o,!0),le("#quest-toggle").addEventListener("click",()=>this.setQuestCollapsed(!this.questCollapsed)),le("#quest-toggle").addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&a.stopPropagation()}),le(".quest").addEventListener("click",a=>{a.target.closest("button")||this.setQuestCollapsed(!this.questCollapsed)}),new ResizeObserver(()=>le(".hud").style.setProperty("--quest-card-height",le(".quest").getBoundingClientRect().height+"px")).observe(le(".quest")),le("#dogs-entry").addEventListener("click",()=>this.open("dogs")),le("#menu").addEventListener("click",()=>this.open("pause")),le("#tasks").addEventListener("click",()=>this.open("missions")),le("#calendar").addEventListener("click",()=>this.open("calendar")),le("#map").addEventListener("click",()=>this.open("map")),le("#actions").addEventListener("click",()=>this.open("actions",!1)),n.bindButton(le("#attack"),"attack"),n.bindButton(le("#dodge"),"dodge"),n.bindButton(le("#throw"),"throw"),n.bindButton(le("#conduct"),"conduct"),n.bindButton(le("#interact"),"interact",()=>this.open("actions",!1)),le("#modal").addEventListener("click",a=>{let o=a.target.closest("[data-action]");o&&this.click(o.dataset.action,o.dataset.id,o.dataset.value)}),le("#modal").addEventListener("keydown",a=>{if(a.key==="Tab"){let o=[...le("#modal").querySelectorAll("button:not(:disabled),input,select,a[href]")],c=o[0],h=o.at(-1);a.shiftKey&&document.activeElement===c?(h?.focus(),a.preventDefault()):!a.shiftKey&&document.activeElement===h&&(c?.focus(),a.preventDefault())}}),this.open("start")}questCollapsed=!1;questContent="";codexTab="students";paused=!0;started=!1;modal="";lastFocus=null;hudClock=0;debug=!1;toastUntil=0;onPause=e=>{};pause(e){this.paused=e,this.input.enabled=!e&&!this.modal,this.input.clear(),e?this.audio.pause():this.audio.resume(),this.onPause(e)}close(){this.started&&(le("#modal").hidden=!0,this.modal="",this.pause(!1),this.lastFocus?.focus())}open(e,t=!0){if(this.game.meeting.running&&!["pause","actions","settings","help","meetingRecords","save","dogs"].includes(e)){this.toast("請先離席，再操作校園選單。");return}this.lastFocus=document.activeElement,this.modal=e,this.input.enabled=!1,this.input.clear(),t&&this.pause(!0),le("#modal").hidden=!1;let n=this.content(e);le("#modal").innerHTML=`<section class="panel ${e==="start"?"welcome":""}" role="dialog" aria-modal="true" aria-label="${st(e==="start"?"開始遊戲":"遊戲選單")}">${n}</section>`,setTimeout(()=>le("#modal").querySelector("button")?.focus(),0)}header(e,t){return`<header class="panel-head"><div><span class="eyebrow">${e}</span><h2>${t}</h2></div>${this.started?'<button class="icon-btn" data-action="close" aria-label="關閉">✕</button>':""}</header>`}button(e,t,n="",i=""){return`<button class="${i}" data-action="${t}" data-id="${st(n)}">${e}</button>`}content(e){let t=this.game,n=t.profile;if(e==="pause"&&t.meeting.running)return this.header("SCHOOL MEETING","會議暫停")+`<div class=menu-grid>${this.button("繼續遊玩","close")}${this.button("離席","meetingLeave")}${this.button("會議紀錄冊","open","meetingRecords")}${this.button("設定","open","settings")}${this.button("操作說明","open","help")}</div>`;switch(e){case"start":return`<div class="brand-mark">東山 <span>校園日常 / 異常</span></div><span class="eyebrow">AN ORDINARY DAY, ALMOST.</span><h1>東山校園<br><em>大騷動</em><span class="title-dot">。</span></h1><p class="intro">今天的老師，一如往常地端莊。<br>今天的校園，就不一定了。</p><div class="welcome-actions">${this.button("進入校園　↗","start","","primary")}${this.button("操作說明","help")}</div><p class="fine">v1.2 新增了「校事會議」、LION 與馬尼校狗、理化老師。<br>歡迎回到校園，兩位毛茸茸的新朋友正在等妳！</p>`;case"dogs":return this.dogPanel();case"meetingRecords":return this.header("MEETING MINUTES","會議紀錄冊")+`<p>${t.profile.meeting.titles.map(st).join(" ・ ")||"尚未收藏稱號"}</p><div class=task-list>${[...t.profile.meeting.records].reverse().map(i=>`<article class=task-card><div><h3>${st(i.reason)} · ${i.seconds}秒</h3><p>${i.lines.map(st).join("<br>")}</p><small>seed ${i.seed} · ${i.modules.map(s=>st(Ka.find(a=>a.id===s)?.label||"會議橋段")).join(" / ")}</small></div></article>`).join("")||"<p>尚未開會。</p>"}</div>`;case"pause":return this.header("TAKE A BREATH","課間休息")+`<div class="menu-grid">${this.button("繼續遊玩 ↗","close","","primary")}${this.button("今日待辦 · 24任務","open","missions")}${this.button("校園行事曆 · 4活動","open","calendar")}${this.button("校園地圖","open","map")}${this.button("人物圖鑑","open","codex")}${this.button("道具說明","open","items")}${this.button("擊倒圖鑑","open","knockdowns")}${this.button("會議紀錄冊","open","meetingRecords")}${this.button("收藏與紀念卡","open","collection")}${this.button("音訊／畫質設定","open","settings")}${this.button("操作說明","open","help")}${this.button("存檔管理","open","save")}${this.button("重看教學","tutorial")}${this.button("重開平靜校園","confirmReset")}</div><p class="fine">${st(this.store.error||"儲存長期进度；重新進入從平靜校園開始。")}</p>`;case"missions":{t.emit("openTasks");let i=As.filter(s=>s.mode===t.mode);return this.header("TODAY’S TO-DO",t.mode==="normal"?"今日待辦":ja.find(s=>s.id===t.mode).label+"任務")+`<p class="muted">一次追蹤一項。可取消、免費重試；首通領點，重玩記錄評級。</p>${t.attempt?`<div class="active-task"><b>${al(t)}</b><p>${t.step.text}</p>${this.button("取消追蹤","cancelTask")}${this.button("重置任務物件","resetItems")}</div>`:""}<div class="task-list">${i.map(s=>`<article class="task-card"><div><span class="eyebrow">${s.category} · ${n.completedMissionIds.includes(s.id)?"已完成／重玩不給點":`首通 ${s.reward} 點`}</span><h3>${s.label}</h3><p>${s.steps.map(a=>st(a.text)).join(" → ")}</p></div>${this.button(t.attempt?.mission===s.id?"追蹤中":n.completedMissionIds.includes(s.id)?"再試一次":"開始","task",s.id,t.attempt?.mission===s.id?"selected":"")}</article>`).join("")}</div>`}case"calendar":return this.header("SCHOOL CALENDAR","校園行事曆")+`<p class="muted">切換會重置當前校園、結束追逐；保留已完成與收藏。</p><div class="calendar-list">${[{id:"normal",label:"平常的一天",description:"自由探索與24項今日待辦。"},...ja].map((i,s)=>`<article class="calendar-card"><span class="chapter-num">0${s}</span><div><h3>${i.label}</h3><p>${i.description}</p><small>${i.id==="normal"?"全部基礎玩法立即開放":`${As.filter(a=>a.mode===i.id&&n.completedMissionIds.includes(a.id)).length}/4 完成`}</small></div>${this.button(t.mode===i.id?"目前活動":"進入","modeConfirm",i.id)}</article>`).join("")}</div>`;case"settings":return this.header("MAKE YOURSELF COMFORTABLE","設定")+`<div class="settings"><label>畫質 <select id="quality">${["auto","low","standard"].map((i,s)=>`<option value="${i}" ${n.settings.quality===i?"selected":""}>${["自適應","Low · 輕量","Standard · 標準"][s]}</option>`).join("")}</select></label><label>音樂 <input id="music" type="range" min="0" max="100" value="${n.settings.music*100}"></label><label>音效 <input id="sfx" type="range" min="0" max="100" value="${n.settings.sfx*100}"></label><label><input id="mute" type="checkbox" ${n.settings.mute?"checked":""}>靜音（所有目標仍可完成）</label><label><input id="lowMotion" type="checkbox" ${n.settings.lowMotion?"checked":""}>減少動態效果</label><label><input id="assist" type="checkbox" ${n.settings.assist?"checked":""}>指揮輔助：±350ms</label>${this.button("儲存設定","settings","","primary")}${this.button("完整聲音試聽頁 ↗","soundTest")}</div><p class="fine">Low：DPR≤1，活躍人物≤16。${st(this.audio.fail)}</p>`;case"help":return this.header("A VERY COMPOSED TEACHER","操作說明")+'<div class="help"><p>左下搖桿移動，推深快跑。右下揮打、閃避與互動；拿物後可投擲。長按互動可選動作，或按「動作」。</p><dl><dt>WASD／方向鍵</dt><dd>依畫面方向移動；Shift 快跑</dd><dt>J／滑鼠左鍵</dt><dd>揮打（滑鼠決定面向）</dd><dt>K／空白鍵</dt><dd>短距閃避，不能穿牆</dd><dt>E／Q／R</dt><dd>互動／投擲／放下</dd><dt>F／Enter</dt><dd>點名／合唱指揮</dd><dt>Esc</dt><dd>暫停與繼續</dd></dl><p>一次拿一件；假髮與眼鏡各一個裝飾槽。黃色圈是任務交付／定位位置，在圈旁互動或放下。歸還需帶回原位置。推椅子時，站在椅子後面。</p><p>藏點：走廊工具間、教室講臺後。若被目擊躲入，家長會搜查。警戒消退需先甩開視線；進保健室不會清通緝。平靜時校護免費恢復。</p><p>校園無線麥克風：一般日於音樂教室，活動日於舞臺器材位置。手持時從「動作」使用10m擴音點名（共用12秒冷卻）；投擲落地產生3秒廣播誘餌，拿回即停，普通放下不啟動。追逐者仍看見老師、目擊投擲或需護子時不受吸引，聲音不能穿牆；靜音也有效。</p><p>人物跌坐後會恢復；沒有永久傷亡。任務物件卡住可從待辦按「重置任務物件」。</p></div>';case"actions":{if(t.meeting.running)return this.header("SCHOOL MEETING","會議動作")+`<div class=menu-grid>${t.meeting.context()?this.button(t.meeting.context(),"meetingUse"):""}${t.held?this.button("放下","gameAction","drop"):""}${t.nearest()?.itemType==="office_chair"?this.button("推動椅子","pushTarget"):""}${this.button("離席","meetingLeave")}</div><p>J 揮打／Q 投擲／F 特殊互動。攻擊保持原功能。</p>`;let i=t.nearest(),s=t.held;return this.header("WHAT WOULD YOU LIKE TO DO?","老師的動作")+`<p class="muted">最近：${st(i?.label||"沒有目標")}　手持：${st(s?Ii[s.type].label:"空手")}</p><div class="menu-grid">${i?this.button("互動 "+i.label,"interactTarget"):""}${this.button(s?.type==="wireless_microphone"?"擴音點名（10m／共用12秒冷卻）":"點名（6m／12秒冷卻）","gameAction","roll")}${s?this.button("放下／交付","gameAction","drop"):""}${s&&s.type!=="wireless_microphone"?this.button("使用：演奏／碼錶／清掃","gameAction","useHeld"):""}${s&&Ii[s.type].category.includes("wearable")?this.button("戴上","gameAction","wear"):""}${t.player.wig||t.player.glasses?this.button("取下頭部裝飾","gameAction","unwear"):""}${s||t.player.wig||t.player.glasses?this.button("歸還原位","gameAction","returnHeld"):""}${i?.itemType&&Ii[i.itemType].category.includes("pushable")?this.button("推動","pushTarget"):""}${i?.itemType&&Ii[i.itemType].category.includes("fixed")?this.button(i.itemType==="piano"?"亂按鋼琴":"咖啡機噴泡沫","messTarget"):""}${i?.itemType&&i.broken?this.button("扶起／整理物件","restoreTarget"):""}${vi(t.player)==="classroom"?this.button("假裝上課","teach"):""}</div>${s?.type==="wireless_microphone"?"<p>請注意廣播。老師目前非常冷靜。<br>擴音點名：10m可聽見的平靜學生，與一般點名共用12秒冷卻。投擲落地播放3秒誘餌；目擊投擲或仍看見老師的追逐者不受騙。拿回即停止；普通放下不廣播。</p>":""}<p class="fine">這個選單仍讓人物行動；真正休息請用暫停。</p>`}case"shop":return this.header("CO-OP, OPEN FOR BUSINESS","合作社")+`<div class="balance">校園點數 <strong>${n.points}</strong></div><article class="task-card"><div><h3>涼茶 · 10點</h3><p>立即飲用恢復30體力；五秒冷卻。</p></div><button data-action="drink" ${n.points<10&&t.attempt?.mission!=="q21"?"disabled":""}>購買</button></article><div class="task-list">${Wa.map(i=>`<article class="task-card"><div><h3>${i.label}</h3><p>純外觀 · ${i.price}點</p></div><button data-action="cosmetic" data-id="${i.id}" ${n.ownedCosmetics.includes(i.id)||n.points<i.price?"disabled":""}>${n.ownedCosmetics.includes(i.id)?"已收藏":"購買"}</button></article>`).join("")}</div>${this.button("專用狗零食 · 5點（"+n.dogs.treats+"/20）","buyTreat")}${this.button("平靜服務：整理商品 +10點","service")}<p class="fine">${n.serviceCooldown>0?`服務冷卻 ${Math.ceil(n.serviceCooldown/60)} 分鐘`:"服務可領取，遊戲在線十分鐘冷卻"}</p>`;case"map":return this.header("A SMALL CAMPUS, MANY POSSIBILITIES","校園地圖")+`<svg class="campus-map" viewBox="-33 -27 66 54" role="img" aria-label="校園與玩家任務位置">${Tn.map(i=>`<rect x="${i.x1}" y="${i.z1}" width="${i.x2-i.x1}" height="${i.z2-i.z1}" rx=".6"/><text x="${(i.x1+i.x2)/2}" y="${(i.z1+i.z2)/2}">${i.label}</text>`).join("")}<circle class="player-dot" cx="${t.player.x}" cy="${t.player.z}" r="1"/>${this.mapTargets().map(i=>`<circle class="goal-dot" cx="${i.x}" cy="${i.z}" r=".8"/>`).join("")}</svg><p class="fine">綠點：老師　黃點：目標／任務物件。${t.notes.map(st).join(" ")}</p>`;case"knockdowns":{const i=this.codexTab,s=n.knockdownCodex[i],a=Kl[i].filter(o=>i!=="objects"||s[o.id]);return this.header("CAMPUS INCIDENT COLLECTION","擊倒圖鑑")+`<p class="muted">記錄老師實際造成的暈眩與破損，跨活動、重新開啟皆保留。人物稍後會恢復；家具扶好不會刪除紀錄。</p><div class="codex-tabs" role="group" aria-label="圖鑑分類">${["students","parents","objects"].map((o,c)=>`<button data-action="codexTab" data-id="${o}" aria-pressed="${i===o}" class="${i===o?"selected":""}">${["學生","家長","物品"][c]} · ${Object.keys(n.knockdownCodex[o]).length}</button>`).join("")}</div><p>已記錄 ${Object.keys(s).length} 種 · 共 ${Object.values(s).reduce((o,c)=>o+c,0)} 次</p><div class="codex-grid incident-codex">${a.map(o=>`<article class="${s[o.id]?"discovered":"undiscovered"}" data-codex-id="${st(o.id)}">${this.thumbnail(o.id,i==="objects"?"item":i==="students"?"student":"parent")}<h4>${st(o.label)}</h4><p>${s[o.id]?st(o.description):"尚未記錄"}</p><small>${s[o.id]?`${i==="objects"?"破損":"暈眩"} ${s[o.id]} 次`:"未解鎖"}</small></article>`).join("")||"<p>還沒有物品破損紀錄。翻倒家具、垃圾桶，或投擲物品落地破損時會加入。</p>"}</div><p class="fine">從本次更新起記錄；舊存檔僅有總次數，無法還原過往的個別種類。學生惡作劇與活動預設破損不列入。</p>`}case"items":return this.header("PLEASE RETURN AFTER USE",`道具說明 · ${Ya.length}種`)+`<div class="codex-grid">${Ya.map(i=>`<article data-item-id="${i.id}">${this.thumbnail(i.id,"item")}<h4>${st(i.label)}</h4><p>${st(i.description||(i.category.includes("fixed")?"固定互動；不能拿取或投擲。":"依情境選單拿取、放下、使用或歸還。"))}</p><small>揮打 ${i.damage} ／ 投擲 ${i.throwDamage} · ${i.heavy?"重型":"輕型／固定"}</small>${i.id==="wireless_microphone"?"<p>一般校園：音樂教室樂器收納臺；活動日：中庭舞臺右側器材位置。手持後「動作」→擴音點名（10m，與點名共用12秒冷卻）；Q／投擲落地廣播3秒，引附近可聽見且願意調查者。追逐仍看見老師或目擊投擲者不受騙，護子／重要任務優先。相同人物與麥克風30秒調查冷卻。拿回、歸還、重置即停止，普通放下不啟動。靜音也有效。</p>":""}</article>`).join("")}</div>`;case"codex":return this.header("EVERYONE HAS THEIR OWN WAY","校園人物圖鑑")+`<h3>十二種學生</h3><div class="codex-grid">${Wr.map(i=>`<article>${this.thumbnail(i.id,Wr.includes(i)?"student":"parent")}<h4>${i.label}</h4><p>${i.description}</p></article>`).join("")}</div><h3>十九種家長</h3><div class="codex-grid">${Ts.map(i=>`<article>${this.thumbnail(i.id,Wr.includes(i)?"student":"parent")}<h4>${i.label}</h4><p>${i.description}</p><small>${i.tier} · 占 ${i.slotCost} 名額</small></article>`).join("")}</div><h3>校園職員與兩位新朋友</h3><div class=codex-grid>${jl.map(i=>`<article>${this.thumbnail(i.id,"staff")}<h4>${i.label}</h4></article>`).join("")}${Xa.map(i=>`<article>${this.thumbnail(i,"dog")}<h4>${$a[i]}</h4><p>${qa(n.dogs.dogs[i].affinity)} · ${n.dogs.dogs[i].affinity}/100</p><p>${n.dogs.dogs[i].collected?i==="dog_lion"?"LION 將你列為正式巡邏夥伴":"馬尼認為你是專職摸摸人員":""}</p></article>`).join("")}</div>`;case"collection":return this.header("LITTLE MEMORIES","收藏與稱號")+`<h3>外觀（保留黃色洋裝與鮑伯頭）</h3><div class="menu-grid">${Wa.filter(i=>n.ownedCosmetics.includes(i.id)).map(i=>this.button((n.equipped.includes(i.id)?"✓ ":"")+i.label,"equip",i.id)).join("")||"<p>合作社有六種純外觀收藏。</p>"}</div><h3>稱號 · ${n.titleIds.length}/12</h3><p>${n.titleIds.map(st).join(" · ")||"完成任務獲得稱號。"}</p><h3>合照紀念卡（程式構圖）</h3><div class="photo-grid">${n.photoCards.map((i,s)=>`<div class="photo-card"><span>${i.wig?"🟤":i.glasses?"👓":"♫"}　${i.broom?"╱":"♩"}</span><b>東山・第${s+1}張合照</b><p>${i.students}學生 / ${i.visitors}家長<br>${i.wig?"假髮版 ":""}${i.glasses?"眼鏡版 ":""}${i.broom?"掃把版":""}</p></div>`).join("")||"<p>親師日完成合照，可留下構圖紀念卡。</p>"}</div>`;case"report":return this.header("INCIDENT REPORT","保健室事件報告")+`<div class="report-grid">${Object.entries(t.lastReport||t.report).filter(([i])=>["damage","downed","parents","maxAlert"].includes(i)).map(([i,s])=>`<article><b>${s}</b><span>${{damage:"家具翻倒",downed:"人物暈眩",parents:"追逐家長",maxAlert:"最高警戒"}[i]}</span></article>`).join("")}</div><p>體力 ${Math.ceil(t.player.hp)}/100。倒地救援已結束當次事件；任務可免費重試，長期紀錄保留。</p>`;case"save":return this.header("KEEP THE MEMORIES","存檔管理")+`<p>只儲存長期紀錄。匯入前驗證版本與 ID，損壞檔不覆蓋。</p><div class="menu-grid">${this.button("立即儲存","saveNow")}${this.button("匯出 JSON","export")}${this.button("匯入 JSON","import")}${this.button("接管其他分頁寫入","takeover")}${this.button("清除進度（確認）","clearConfirm")}</div><input type="file" id="importFile" accept="application/json,.json" hidden><p class="fine">${st(this.store.error||"本地存檔就緒")} · revision ${n.revision}</p>`;case"debug":return this.header("DEVELOPMENT ONLY","可重現驗證")+`<p>Seed ${t.rosterSeed} · ${t.assertOwnership()?"物件身份正常":""}</p><div class="menu-grid">${Tn.map(i=>this.button("到 "+i.label,"teleport",i.id)).join("")}</div><h3>家長型別（仍受3名額限制）</h3><div class="menu-grid">${Ts.map(i=>this.button(i.label,"spawn",i.id)).join("")}</div><h3>警戒</h3>${[0,20,40,65,90].map(i=>this.button(String(i),"alert",String(i))).join("")}${this.button("恢復／清場","devReset")}${this.button("效能 HUD 開關","debugHUD")}<pre>${st(JSON.stringify(this.render.measure(),null,2))}</pre><p>目前任務事件：</p><pre>${st(JSON.stringify(t.eventLog.slice(-12),null,2))}</pre>`;case"timeQuestion":return this.header("LOOK AT THE CLOCK","時間到了嗎？")+`<p>黑板：考試時間24分鐘，已過12分鐘，剩餘12分鐘。</p>${[6,12,24].map(i=>this.button(i+"分鐘","answer",String(i))).join("")}`;default:if(e.startsWith("dialog:")){let i=t.npcs.find(s=>s.id===e.slice(7));return this.header("LET’S TALK",i.label+"的經歷")+`<p>${{timid:"老師，刚剛的聲音好大。",fighter:"老師，不能一直用揮打解決問題。",tattletale:"我要把今天的事告訴主任。"}[i.type]||"老師，今天的校園有點混亂。"}</p><div class="menu-grid">${["說明事實","一本正經的荒謬解釋","結束談話"].map((s,a)=>`<button data-action="respond" data-id="${i.id}" data-value="${a}">${s}</button>`).join("")}</div>`}return this.header("CONFIRM","確認")+`<p>${e.startsWith("mode:")?"切換活動會重置當前場景並取消未完成任務。":e==="clearConfirm"?"清除本地長期紀錄，無法撤銷。":"重開平靜校園，未完成任務可重新接取。"}</p>${this.button("確認","confirm",e,"primary")}${this.button("取消","open","pause")}`}}thumbnail(e,t){return`<img class="codex-thumb" alt="${st(e)} 遊戲模型" src="${this.render.thumbnail(e,t)}">`}dogPanel(){const e=this.game,t=e.profile.dogs;return this.header("TWO CAMPUS FRIENDS","校狗 · LION 與馬尼")+`<p>零食 ${t.treats}/20 · 共享協助冷卻 ${Math.ceil(t.assistCooldown)} 秒。摸摸 E；攻擊 J 始終保持揮打。</p>${Xa.map(n=>{const i=e.dogs.actor(n),s=t.dogs[n];return`<article class=dog-status>${this.thumbnail(n,"dog")}<h3>${$a[n]} · ${s.affinity}/100</h3><p>${qa(s.affinity)} · ${e.meeting.running?e.dogs.observer===n?"會議旁聽席":"校園安全等待":Tn.find(a=>a.id===vi(i))?.label||"共用走廊"} · ${st(i.state)}</p><p>跟隨：45好感 ／ 協助：75好感。摸摸 ${Math.ceil(s.cooldowns.pet)}s、零食 ${Math.ceil(s.cooldowns.treat)}s、玩球 ${Math.ceil(s.cooldowns.ball)}s。</p><div class=menu-grid>${[["pet","摸摸"],["treat","給零食"],["play","玩球"],["follow","跟我來"],["rest","回去休息"],["assist","請牠幫忙"]].map(([a,o])=>this.button(o,"dogAction",n+":"+a)).join("")}</div></article>`}).join("")}<h3>協助目標：${st(e.npcs.find(n=>n.id===e.dogs.selectedTarget)?.label||"尚未選取")}</h3><p>先點選畫面中的敵對成人，或在下方確認名字，再請狗幫忙。</p><div class=menu-grid>${e.npcs.filter(n=>e.dogs.validTarget(n)&&bm(n,e.player)<8&&this.render.inView(n)&&e.world.visible(e.player,n)).map(n=>this.button(n.label,"dogTarget",n.id,n.id===e.dogs.selectedTarget?"selected":"")).join("")||"附近沒有有效敵對成人。"}</div><h3>理化老師的小任務</h3><p>找辦公室／餵狗角附近的老師接取及交付。${t.activeQuest?st(Gi.find(n=>n.id===t.activeQuest)?.label):"尚未追蹤校狗任務"}</p>${t.activeQuest?`<p>${(()=>{const n=Gi.find(i=>i.id===t.activeQuest);return"item"in n?"取物："+(Tn.find(i=>i.id===vi(n.home))?.label||"中庭")+"（地圖黃點）。取回後帶到餵狗角黃色圈，按 E 定位，再向老師交付。":"在餵狗角附近選「跟我來」，陪走到"+(n.dog==="dog_lion"?"操場入口":"音樂教室外")+"的黃色圈，再向老師交付。"})()}</p>`:""}<div class=menu-grid>${Gi.map(n=>this.button((t.dogs[n.dog].completed.includes(n.id)?"✓ ":"")+n.label,"dogQuest",n.id)).join("")}${this.button("向老師交付","dogDeliver")}${this.button("任務物件安全歸位","dogReset")}</div><p>${t.achievements.map(st).join(" · ")||"和校狗一起留下新回憶。"}</p>`}mapTargets(){let e=this.game,t=e.step;const n=Gi.find(i=>i.id===e.profile.dogs.activeQuest);if(n)return"item"in n?[n.home,n.goal]:[{x:8,z:11},n.goal];if(!t)return[];if(["deliver","place","wearVisit"].includes(t.kind))return Array.from({length:t.count||1},(i,s)=>ll(t,s));if(t.kind==="gather")return this.game.npcs.filter(i=>this.game.attempt.meta.choristers.includes(i.id)).map(i=>({x:i.x,z:i.z}));if(t.kind==="return"){let i=[...e.objects.values()].find(s=>s.type===t.item);return i?[i.home]:[]}return[...e.objects.values()].filter(i=>i.pins.includes(e.attempt.id)).map(i=>({x:i.x,z:i.z}))}action(e){if(!this.started||this.modal)return;let t=this.game;switch(e){case"attack":t.attack();break;case"dodge":t.dodge();break;case"throw":t.throwItem();break;case"drop":t.drop();break;case"roll":t.rollCall();break;case"conduct":t.conduct();break;case"interact":this.handleResult(t.interact());break}}handleResult(e){typeof e=="string"&&["missions","shop","report","timeQuestion","dogs"].includes(e)?this.open(e,!1):e?.dialog&&this.open("dialog:"+e.dialog,!1)}async click(e,t="",n=""){let i=this.game;switch(e){case"codexTab":["students","parents","objects"].includes(t)&&(this.codexTab=t,this.open("knockdowns"));break;case"close":this.close();break;case"start":await this.audio.unlock(),this.started=!0,this.close(),i.profile.tutorialFlags.includes("done")||(i.startTutorial(),this.toast(i.tutorialText()));break;case"open":this.open(t);break;case"task":i.startMission(t),this.close();break;case"cancelTask":i.cancelMission(),this.open("missions");break;case"resetItems":i.resetObjectiveItems(),this.open("missions");break;case"tutorial":i.startTutorial(),this.close();break;case"skipTutorial":i.finishTutorial();break;case"modeConfirm":this.open("mode:"+t);break;case"confirmReset":this.open("resetConfirm");break;case"clearConfirm":this.open("clearConfirm");break;case"confirm":t==="clearConfirm"?(i.profile=Ql(),i.reset("normal"),this.store.save(i.profile)):i.reset(t.startsWith("mode:")?t.slice(5):i.mode,t.startsWith("mode:")),this.close();break;case"settings":for(let s of["mute","lowMotion","assist"])i.profile.settings[s]=le("#"+s).checked;for(let s of["music","sfx"])i.profile.settings[s]=+le("#"+s).value/100;i.profile.settings.quality=le("#quality").value,this.audio.configure(),this.render.resize(),this.store.save(i.profile),this.toast("設定已儲存");break;case"soundTest":window.open("./soundtest.html","_blank","noopener");break;case"meetingUse":this.close(),i.meeting.secondary();break;case"meetingLeave":this.close(),i.meeting.leave();break;case"gameAction":this.close(),i.interact(void 0,t);break;case"interactTarget":this.close(),this.handleResult(i.interact());break;case"pushTarget":this.close(),i.interact(i.nearest(),"push");break;case"messTarget":this.close(),i.interact(i.nearest(),"mess");break;case"restoreTarget":this.close(),i.interact(i.nearest(),"restore");break;case"teach":this.close(),i.teach();break;case"drink":i.buyDrink()?this.toast("涼茶恢復30體力"):this.toast("點數不足或飲用冷卻中"),this.open("shop",!1);break;case"cosmetic":i.buyCosmetic(t),this.open("shop",!1);break;case"buyTreat":i.dogs.buyTreat(),this.open("shop",!1);break;case"dogQuest":i.dogs.quest(t),this.open("dogs");break;case"dogReset":i.dogs.resetQuest(),this.open("dogs");break;case"dogDeliver":i.dogs.checkDelivery(),this.open("dogs");break;case"dogAction":{const[s,a]=t.split(":");this.close(),a==="pet"&&i.dogs.pet(s),a==="treat"&&i.dogs.treat(s),a==="play"&&i.dogs.play(s),a==="follow"&&i.dogs.follow(s),a==="rest"&&(i.dogs.cancel(i.dogs.actor(s)),i.dogs.p.companion=null),a==="assist"&&i.dogs.assist(s);break}case"dogTarget":i.dogs.select(t),this.open("dogs");break;case"service":this.toast(i.service()?"整理完成 +10點":"平靜且冷卻結束才可服務"),this.open("shop",!1);break;case"equip":if(i.profile.equipped.includes(t))i.profile.equipped=i.profile.equipped.filter(s=>s!==t);else{let s=t.split("_")[0];i.profile.equipped=i.profile.equipped.filter(a=>a.split("_")[0]!==s),i.profile.equipped.push(t)}this.store.save(i.profile),this.open("collection");break;case"respond":i.respond(t,+n),this.close();break;case"answer":i.emit("answerTime",{correct:+t==12}),this.toast(+t==12?"正確，還有12分鐘。":"再看一次黑板：剩餘12分鐘。"),+t==12&&this.close();break;case"saveNow":this.store.save(i.profile),this.open("save");break;case"export":{let s=new Blob([JSON.stringify(i.profile,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(s),a.download="dongshan-save.json",a.click(),setTimeout(()=>URL.revokeObjectURL(a.href),1e3);break}case"import":{let s=le("#importFile");s.onchange=async()=>{try{let a=s.files[0];if(a.size>6e5)throw Error("檔案過大");let o=Jl(JSON.parse(await a.text()));i.profile=o,i.reset("normal"),this.store.save(o),this.audio.configure(),this.toast("匯入成功"),this.open("save")}catch(a){this.toast("匯入失敗，原存檔保留："+a.message)}},s.click();break}case"takeover":this.store.claim(!0),this.store.save(i.profile),this.open("save");break;case"teleport":Object.assign(i.player,Zl(t)),this.close();break;case"spawn":this.toast(i.spawnParent(t)?"家長已從校門入場":"3名額預算不足"),this.close();break;case"alert":i.alert=+t,i.lastTrouble=i.time,this.close();break;case"devReset":i.reset(i.mode),this.open("debug");break;case"debugHUD":this.debug=!this.debug,this.close();break}}toast(e){let t=le("#speech");t.hidden=!e.includes("：")&&!/^(各位|我們|這是|請不要|物品)/.test(e),t.hidden||(t.textContent=e),le("#toast").textContent=e,this.game.meeting.running&&!t.hidden?le("#toast").classList.remove("visible"):le("#toast").classList.add("visible"),this.toastUntil=performance.now()+4e3}setQuestCollapsed(e){this.questCollapsed=e,le(".quest").classList.toggle("is-collapsed",e),le("#quest-body").hidden=e,le("#quest-toggle").setAttribute("aria-expanded",String(!e)),le("#quest-toggle").setAttribute("aria-label",e?"展開今日提示":"收合今日提示"),le("#quest-chevron").textContent=e?"⌄":"⌃"}updateQuest(){const e=this.game,t=e.tutorial>=0?"日常差事教學":e.attempt?al(e):"今天，想做點什麼？",n=e.tutorial>=0?e.tutorialText():e.step?`${e.step.text}　${e.attempt.count}/${e.step.count||1}`:"探索校園，或從今日待辦選一件差事。",i=JSON.stringify([e.session,e.tutorial,e.attempt?.id,e.attempt?.step,t,n]);i!==this.questContent&&(this.questContent=i,le("#quest-title").textContent=t,le("#quest-detail").textContent=n,le("#skip").hidden=e.tutorial<0,this.setQuestCollapsed(!1))}update(e){let t=this.game,n=t.player;if(this.hudClock+=e,this.hudClock<.1)return;this.hudClock=0,le("#hp-text").textContent=Math.ceil(n.hp)+" / 100",le("#hp-bar").style.width=n.hp+"%",le("#alert-text").textContent="警戒 "+t.level,le("#alert-circles").innerHTML=Array.from({length:4},(c,h)=>`<i class="${h<t.level?"lit":""}"></i>`).join(""),le("#alert-reason").textContent=t.reason,le("#held").textContent=t.held?Ii[t.held.type].label:"空手・從容",le("#zone").textContent=Tn.find(c=>c.id===vi(n))?.label||"共用走廊",le("#points").textContent=t.profile.points+" 點",this.updateQuest(),t.meeting.running&&(le("#zone").textContent="校事會議",le("#quest-title").textContent=`失控 ${t.meeting.chaos}/100 · 剩餘 ${Math.max(0,Math.ceil(75-t.meeting.elapsed))}秒`,le("#quest-detail").textContent=t.meeting.context()||"可以搗亂，也可以隨時離席",le("#alert-text").textContent=`失控 ${t.meeting.chaos}/100`,le("#alert-reason").textContent=`剩餘 ${Math.max(0,Math.ceil(75-t.meeting.elapsed))}秒 · ${t.meeting.selected.length} 種橋段`,le("#quest-detail").textContent=t.meeting.context()||t.meeting.selected.map(c=>Ka.find(h=>h.id===c)?.label).join("／")),le("#world").style.opacity=t.meeting.phase==="ENTERING"?"0.15":"1",le("#meeting-controls").hidden=!t.meeting.running,le(".side-nav").hidden=t.meeting.running,le("#meeting-use").textContent=t.meeting.context()||"靠近特殊道具",le("#meeting-use").disabled=!t.meeting.context(),le("#meeting-display").hidden=!t.meeting.running,le("#meeting-display").textContent=t.meeting.selected.includes("projector")?"投影："+t.meeting.cards[t.meeting.projectorPage]:t.meeting.selected.includes("whiteboard")?"白板："+(t.meeting.boardMusic?"♩ ♪ ♫ 四分音符":["說明／討論／決議","決議／說明／討論","討論／決議／說明"][t.meeting.agenda]):"",le("#throw").hidden=!t.held,le("#conduct").hidden=!t.choir,le("#actions").textContent=n.hidden?"離開藏點":"動作";let i=t.nearest();if(le("#context").textContent=n.hidden?"互動：離開藏點":i?"互動 · "+i.label:"靠近物品或人物",le("#arrival").textContent=t.familyQueue.length?`${Em(t.familyQueue[0].type)}到校 · ${Math.max(0,Math.ceil(t.familyQueue[0].at-t.time))}s`:"",le("#arrival").hidden=!t.familyQueue.length,t.choir){let c=t.time-t.choir.start,h=c/.75,u=[3,7,11,15,19,23,27,31].find(l=>l>=h-.35);le("#beat").hidden=!1,le("#beat").innerHTML=`<span>第 ${Math.min(32,Math.floor(h)+1)} / 32 拍　${t.choir.hits}/8命中</span><div class="beat-ring" style="transform:scale(${u===void 0?1:Math.min(2,Math.max(.6,1+(u-h)*.35))})"></div><b>${u!==void 0&&Math.abs(u-h)<.35?"現在！":"跟著收圈"}</b>`}else le("#beat").hidden=!0;const s=t.microphoneSignals().filter(c=>this.render.inView(c)&&Math.hypot(c.x-n.x,c.z-n.z)<12),a=s.find(c=>c.kind==="call")||s[0],o=le("#microphone-speech");if(o.hidden=!a,a){const c=this.render.project(a,a.kind==="call"?2.6:1);o.textContent=a.text,o.style.left=Math.min(innerWidth-110,Math.max(110,c.x))+"px",o.style.top=Math.min(innerHeight-40,Math.max(30,c.y))+"px"}if(performance.now()>this.toastUntil)le("#toast").classList.remove("visible"),le("#speech").hidden=!0;else if(!le("#speech").hidden){let c=this.render.project(n);le("#speech").style.left=Math.min(innerWidth-115,Math.max(115,c.x))+"px",le("#speech").style.top=Math.max(24,c.y)+"px"}le("#debug-hud").hidden=!this.debug,this.debug&&(le("#debug-hud").textContent=JSON.stringify({...this.render.measure(),voices:this.audio.voices.size,musicVoices:this.audio.musicVoices.size,save:this.store.error},null,2)),this.store.error&&(le("#save-warning").textContent=this.store.error)}}function al(r){return As.find(e=>e.id===r.attempt.mission)?.label||""}function Em(r){return Ts.find(e=>e.id===r)?.label+"家長"}function bm(r,e){return Math.hypot(r.x-e.x,r.z-e.z)}const zl=document.querySelector("#app");zl.innerHTML='<main id="game"><canvas id="world" aria-label="東山校園3D沙盒"></canvas><div class="hud"><div class="top-left"><div class="school-brand">東山 <span>校園大騷動</span></div><div class="status-card"><div class="hp-line"><span>開心導師</span><b id="hp-text">100 / 100</b></div><div class="hp-track"><div id="hp-bar"></div></div><div class="alert-line"><b id="alert-text">警戒 0</b><span id="alert-circles"></span></div><small id="alert-reason">校園一切正常</small></div></div><div class="top-right"><span id="points" class="point-pill">20 點</span><button id="dogs-entry" aria-label="校狗">校狗</button><button id="map" aria-label="校園地圖">⌖</button><button id="menu" aria-label="暫停">Ⅱ</button></div><div class="quest"><button id="quest-toggle" aria-expanded="true" aria-controls="quest-body" aria-label="收合今日提示"><span class="eyebrow">TODAY AT DONGSHAN <span id="zone">導師辦公室</span></span><span id="quest-chevron" aria-hidden="true">⌃</span></button><div id="quest-body"><h3 id="quest-title">今天，想做點什麼？</h3><p id="quest-detail"></p><button id="skip">跳過教學</button></div></div><div class="side-nav"><button id="tasks"><span>☷</span>待辦</button><button id="calendar"><span>▦</span>行事曆</button></div><div id="meeting-controls" hidden><button id="meeting-use">特殊互動 F</button><button id="meeting-leave">離席</button></div><div id="meeting-display" hidden></div><div id="arrival" hidden></div><div id="beat" hidden></div><div id="speech" hidden></div><div id="microphone-speech" role="status" hidden></div><div id="toast" role="status" aria-live="polite"></div><div class="bottom-info"><span id="held">空手・從容</span><button id="actions">動作</button><span id="context">靠近物品或人物</span></div><div class="controls"><div id="joystick" aria-label="移動搖桿"><div id="knob"></div></div><div class="action-cluster"><button id="throw" hidden>↗<small>投擲 Q</small></button><button id="conduct" hidden>♫<small>指揮 Enter</small></button><button id="dodge">↝<small>閃避 K</small></button><button id="attack">✦<small>揮打 J</small></button><button id="interact">✋<small>互動 E</small></button></div></div><pre id="debug-hud" hidden></pre><small id="save-warning"></small></div><div id="modal"></div></main>';const wi=new ec,Qt=new tc(wi.load(),6477);let Kn;try{Kn=new Mm(document.querySelector("#world"),Qt)}catch(r){throw zl.innerHTML='<div class="compat"><h1>需要 WebGL 2 支援</h1><p>此瀏覽器未能啟動真正3D畫面。請開啟硬體加速或改用支援WebGL的瀏覽器。</p><pre></pre></div>',document.querySelector("pre").textContent=r.message,r}Qt.cameraVisible=r=>Kn.inView(r);const Hr=new Sm(document.querySelector("#world"),document.querySelector("#joystick"),document.querySelector("#knob")),kl=new nc(Qt),Bt=new ym(Qt,Kn,Hr,kl,wi);document.querySelector("#skip").addEventListener("click",()=>Qt.finishTutorial());document.querySelector("#meeting-use").addEventListener("click",()=>Qt.meeting.secondary());document.querySelector("#meeting-leave").addEventListener("click",()=>Qt.meeting.leave());let ol=performance.now(),Gn=0;function Hl(r){let e=(r-ol)/1e3;ol=r;let t=Math.min(.133,e);if(Bt.paused)Gn=0;else{Gn+=t;let n=0;for(;Gn>=1/30&&n++<4;)Qt.tick(1/30,Hr.movement()),Gn-=1/30;n>=4&&(Gn=0)}Kn.frame(e,Bt.started&&!Bt.paused,Bt.paused?1:Gn/(1/30)),Bt.update(t),requestAnimationFrame(Hl)}requestAnimationFrame(Hl);Bt.onPause=()=>{Gn=0};document.addEventListener("visibilitychange",()=>{document.hidden&&(Hr.clear(),kl.pause(),Bt.started&&Bt.open("pause"),wi.save(Qt.profile))});window.addEventListener("blur",()=>{Hr.clear(),Bt.started&&Bt.open("pause")});window.addEventListener("pagehide",()=>{wi.save(Qt.profile),wi.dispose()});let Vl=document.querySelector("#world");Vl.addEventListener("webglcontextlost",r=>{r.preventDefault(),Kn.ctxLost=!0,wi.save(Qt.profile),Bt.open("pause"),Bt.toast("3D繪圖中斷，已暫停並儲存。等待恢復或重新載入。")});Vl.addEventListener("webglcontextrestored",()=>{Kn.ctxLost=!1,Kn.lastSession=-1,Bt.toast("3D畫面已恢復，按繼續遊玩")});
