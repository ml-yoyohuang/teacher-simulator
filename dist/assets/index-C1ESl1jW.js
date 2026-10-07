(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const nn={walk:3.2,run:4.6,dodge:2.2,dodgeTime:.25},Ki=[["courtyard","中庭",-12,12,-2,12],["classroom","一般教室",-28,-14,-22,-10],["music_room","音樂教室",-28,-14,-7,5],["staff_room","導師辦公室",14,28,-22,-10],["principal_room","校長室",14,28,-7,5],["corridor","共用走廊",-14,14,-14,-8],["playground","操場一角",-29,-13,10,24],["gate","校門與警衛室",-5,5,19,26],["co_op","合作社",15,26,9,15],["infirmary","保健室",-6,6,-24,-14]].map(([s,e,t,i,n,r])=>({id:s,label:e,x1:+t,x2:+i,z1:+n,z2:+r}));function xt(s){return Ki.find(e=>s.x>=e.x1&&s.x<=e.x2&&s.z>=e.z1&&s.z<=e.z2)?.id||"corridor"}const vi=s=>{let e=Ki.find(t=>t.id===s);return{x:(e.x1+e.x2)/2,z:(e.z1+e.z2)/2}},ql=[["chalk_eraser","粉筆擦","portable","classroom",8,10,1.2,.45],["basketball","籃球","portable","playground",6,12,1.2,.45],["toy_mallet","玩具槌","portable","playground",16,14,1.7,.7],["drumstick","鼓棒","portable","music_room",7,8,1.2,.28],["folder","資料夾","portable","staff_room",8,10,1.2,.45],["trophy","獎盃","portable","principal_room",20,18,1.5,.7,1],["textbook","課本","portable","classroom",10,12,1.2,.45],["broom","掃把","portable","corridor",12,10,2.1,.8],["spinning_top","陀螺","portable","classroom",3,5,1.2,.45],["trash_bin","垃圾桶","portable,pushable","corridor",12,14,1.3,.6,1],["badminton_racket","羽球拍","portable","playground",10,8,1.7,.45],["table_tennis_racket","桌球拍","portable","playground",7,7,1.1,.25],["stopwatch","碼錶","portable","playground",3,4,1.2,.45],["traffic_cone","三角錐","portable,pushable","playground",6,9,1.2,.45],["recorder","直笛","portable","music_room",7,8,1.2,.45],["music_stand","譜架","portable","music_room",15,12,1.8,.8,1],["piano","鋼琴","fixed","music_room",0,0,0,1],["triangle","三角鐵","portable","music_room",4,5,1.2,.45],["castanets","響板","portable","music_room",4,5,1.2,.45],["coffee_machine","咖啡機","fixed","staff_room",0,0,0,1],["wall_clock","時鐘","portable","staff_room",7,9,1.2,.45],["office_chair","辦公椅","pushable","staff_room",0,0,0,1],["exam_papers","考卷（3份）","portable","staff_room",1,1,1.2,.45],["principal_wig","校長假髮","portable,wearable","principal_room",1,1,1.2,.45],["principal_glasses","眼鏡","portable,wearable","principal_room",1,1,1.2,.45],["laptop","筆電","portable","principal_room",14,15,1.2,.55]],nl=ql.map(([s,e,t,i,n,r,a,l,h])=>({id:s,label:e,category:t.split(","),zone:i,damage:n,throwDamage:r,reach:a,cooldown:l,heavy:!!h,modelKey:s,actions:[...t.includes("portable")?["take","drop","throw","return"]:[],...t.includes("pushable")?["push"]:[],...t.includes("wearable")?["wear"]:[],...["piano","coffee_machine","recorder","triangle","castanets","stopwatch","drumstick","broom"].includes(s)?["use"]:[]]})),$l=["coffee_cup","soft_parcel","cardboard_box","stage_score","exam_a","exam_b","envelope","script"].map(s=>({id:s,label:{coffee_cup:"咖啡杯",soft_parcel:"軟包裹",cardboard_box:"商品箱",stage_score:"樂譜",exam_a:"A組試卷",exam_b:"B組試卷",envelope:"封套",script:"講稿"}[s],category:["portable"],zone:"staff_room",damage:1,throwDamage:1,reach:1.2,cooldown:.45,heavy:!1,modelKey:s,actions:["take","drop","throw","return"]})),vt=Object.fromEntries([...nl,...$l].map(s=>[s.id,s])),jn=[["timid","膽小","逃開後停下打電話"],["fighter","反擊","短距追打，失手有恢復期"],["tattletale","告狀","跑辦公室通知成人"],["spectator","圍觀","保持四公尺，危險靠近散開"],["filmer","拍片","連續看見三秒才提高警戒"],["friend","朋友助陣","扶起好友，短暫反擊"],["mediator","勸架","接近勸停，波及後逃開"],["scavenger","撿道具","拿閒置物品，歸還或反擊"],["prankster","惡作劇","趁亂推家具，不歸責老師"],["guardian","護寶","物品被取走追討，可交談歸還"],["athlete","體育健將","短衝刺，躲慢投擲後需恢復"],["reader","冷靜旁觀","寶物受影響才告狀"]].map(([s,e,t])=>({id:s,label:e,description:t})),ja=[["patrol_teacher","巡堂老師","corridor"],["pe_teacher","體育老師","playground"],["dean","教務主任","staff_room"],["principal","校長","principal_room"],["nurse","校護","infirmary"],["shop_aunt","合作社阿姨","co_op"],["guard_uncle","警衛伯伯","gate"]].map(([s,e,t])=>({id:s,label:e,zone:t})),An=[["spatula","鍋鏟","normal","combo","三連揮，末擊落空停頓"],["sports","運動","normal","charge","直線衝撞，轉向慢"],["briefcase","公事包","normal","block","正面格擋，側背可擊中"],["shopping_bag","購物袋","normal","parcel","蓄力丟包裹，準備時可打斷"],["nagging","碎念","normal","slow","文字波，離範圍可避"],["protective","護子","normal","protect","護住學生，追出八公尺返回"],["pta_leader","家長會代表","special","formation","三人陣，地形可拆散"],["umbrella","雨傘","normal","umbrella","擋輕投擲，收傘有空檔"],["gardener","園藝","normal","sweep","長掃，前搖慢"],["yoga","瑜伽","advanced","sidestep","兩次側閃後休息"],["courier","快遞","normal","box","投箱短障礙，補貨停頓"],["photographer","攝影","advanced","flash","原地蓄力，漫畫閃光"],["whistle","哨子","advanced","aura","附近家長加速，被擊退打斷"],["camper","露營","normal","camp","摺椅陣地，椅子可推"],["runner","路跑","advanced","arc","圓弧切入，軌跡可預判"],["neat","潔癖","normal","clean","先整理紙與垃圾，再追逐"],["armored","護具","advanced","heavy","慢速重擊，長恢復"],["drama","戲劇社","advanced","drama","喊招兩秒，強擊退"],["duo","雙人默契","special","duo","輪流掩護，拆開失加成"]].map(([s,e,t,i,n])=>({id:s,label:e,tier:t,ability:i,description:n,slotCost:s==="duo"?2:s==="pta_leader"?3:1,hp:s==="pta_leader"?120:t==="advanced"?95:70,speed:s==="armored"?2.1:["sports","runner"].includes(s)?4.2:3,recoverySeconds:8})),sn=Object.fromEntries(An.map(s=>[s.id,s])),Zn=[["parent_day","親師日","一起坐下，好好談談。"],["anniversary","校慶","今天的秩序，由妳安排。"],["choir_contest","合唱團比賽","請跟著老師的拍子。"],["final_exam","期末考","全校最安靜的一天？"]].map(([s,e,t])=>({id:s,label:e,description:t})),de=(s,e,t,i,n=1,r)=>({kind:s,text:e,item:t,zone:i,count:n,params:r}),ct=(s,e,t,i,n)=>({id:s,label:e,category:t,mode:"normal",steps:i,reward:t==="長任務"?60:30,title:n}),yi=[ct("q01","請交回考卷","日常",[de("deliver","拿取考卷包（3份），送回辦公室收件盤","exam_papers","staff_room")]),ct("q02","樂器請歸位","日常",[de("deliver","向學生索回直笛，歸還音樂室架","recorder","music_room")]),ct("q03","維持環境整潔","日常",[de("deliver","把垃圾桶送回走廊標記區","trash_bin","corridor")],"整理界傳奇"),ct("q04","代理校長巡堂","惡作劇",[de("wearVisit","戴假髮到教室","principal_wig","classroom"),de("wearVisit","戴假髮到音樂室","principal_wig","music_room"),de("wearVisit","戴假髮到操場","principal_wig","playground"),de("return","歸還原假髮","principal_wig")],"代理校長"),ct("q05","節奏感測驗","惡作劇",[de("strikeProps","拿鼓棒敲三種家具","drumstick",void 0,3),de("audience","再敲鼓棒，吸引三位不同學生",void 0,void 0,3)],"節奏大師"),ct("q06","校園保齡球","惡作劇",[de("bowl","用籃球投倒三個標記錐","basketball",void 0,3,{maxThrows:5})],"端莊的混亂源"),ct("q07","老師沒有在逃跑","技巧",[de("escape","同次事件引兩位家長追逐，甩掉視線並降一級",void 0,void 0,1,{parents:2})],"家長迴避專家"),ct("q08","辦公室借用程式","技巧",[de("deliver","不被目擊把獎盃搬到辦公室","trophy","staff_room",1,{stealth:!0}),de("return","再歸還原獎盃","trophy")]),ct("q09","請保持安靜","技巧",[de("calm","由警戒三級起，不搗亂，自然降到零")],"全校最安靜的人"),ct("q10","上課鐘還沒響","日常",[de("return","找到錯置時鐘，掛回辦公室","wall_clock")]),ct("q11","老師需要一杯咖啡","日常",[de("brew","操作咖啡機製作咖啡","coffee_machine","staff_room"),de("deliver","咖啡機做咖啡，送到老師座位","coffee_cup","staff_room")]),ct("q12","失物招領","日常",[de("deliver","把課本送警衛室","textbook","gate"),de("deliver","把眼鏡送警衛室","principal_glasses","gate"),de("deliver","把桌球拍送警衛室","table_tennis_racket","gate")],"失物招領員"),ct("q13","體育器材盤點","日常",[de("deliver","籃球歸器材臺","basketball","playground"),de("deliver","羽球拍歸器材臺","badminton_racket","playground"),de("deliver","碼錶歸器材臺","stopwatch","playground")],"器材管理員"),ct("q14","校長今天髮量驚人","惡作劇",[de("wigTrophy","把假髮放在獎盃上，再離開校長室")]),ct("q15","辦公室人體工學","惡作劇",[de("place","三張辦公椅同時推到中庭三個椅位，停留兩秒","office_chair","courtyard",3)]),ct("q16","三角鐵獨奏會","惡作劇",[de("performance","拿三角鐵在三區演奏，各吸引兩人","triangle",void 0,3)]),ct("q17","禁止奔跑示範","惡作劇",[de("race","用碼錶開始，依序跑四檢查點，最後三公尺用走的","stopwatch","playground")]),ct("q18","這球算妳的","技巧",[de("reflect","拿羽球拍，回擊購物袋家長的軟包裹一次")]),ct("q19","整潔也是一種戰術","技巧",[de("cleanEscape","投撒考卷讓潔癖家長整理，趁機失去視線進搜尋")]),ct("q20","請勿拍攝上課內容","技巧",[de("cameraEscape","在拍片學生三秒拍攝前躲開，三次（間隔五秒）",void 0,void 0,3)]),ct("q21","老師只是來購物","技巧",[de("searchShop","家長搜尋後，降至一級以下無追逐，在合作社買飲料")]),ct("q22","公開觀課日","長任務",[de("place","兩個譜架放到講臺標記","music_stand","classroom",2),de("drink","買兩杯飲料",void 0,void 0,2),de("restore","扶好教室桌椅",void 0,"classroom",3),de("teach","警戒零且無追逐，在講臺示範",void 0,"classroom")],"公開觀課模範"),ct("q23","校長的筆電去哪了","長任務",[de("deliver","詢問持物線索，沿持有鏈找筆電，帶回校長室","laptop","principal_room")]),ct("q24","一場非常正常的運動會","長任務",[de("place","放三錐到操場標記","traffic_cone","playground",3),de("race","碼錶跑四點，再走過終點","stopwatch","playground"),de("dummy","用任一球拍命中練習假人三次",void 0,void 0,3)])];function Pt(s,e,t,i,n){yi.push({id:s,label:e,mode:t,steps:i,category:"活動",reward:40,title:n})}Pt("pd01","家長請這邊坐","parent_day",[de("place","三張椅放中庭座位","office_chair","courtyard",3),de("seat","逐組與三位訪客互動，引導入座",void 0,void 0,3)]);Pt("pd02","老師的桌面管理","parent_day",[de("deliver","考卷放收件盘","exam_papers","staff_room"),de("deliver","咖啡送座位","coffee_cup","staff_room"),de("return","借用資料夾後歸還","folder")]);Pt("pd03","學生說了什麼？","parent_day",[de("respond","和三位不同性格學生談話，選老師的回答",void 0,void 0,3)]);Pt("pd04","合照前請整理儀容","parent_day",[de("photo","在合照位點名三位學生與一位訪客，再拍照")]);Pt("an01","攤位佈置大師","anniversary",[de("place","推桌子到中庭攤位","scene_table","courtyard"),de("place","推椅子到中庭攤位","office_chair","courtyard"),de("deliver","垃圾桶到攤位","trash_bin","courtyard"),de("deliver","三角錐到攤位","traffic_cone","courtyard")],"校慶動線設計師");Pt("an02","合作社救援","anniversary",[de("deliver","搬三件商品箱到中庭攤位","cardboard_box","courtyard",3)]);Pt("an03","校長致詞中","anniversary",[de("deliver","眼鏡送舞臺","principal_glasses","courtyard"),de("deliver","講稿送舞臺","script","courtyard"),de("speech","在舞臺請校長致詞，等待五秒")]);Pt("an04","校慶保齡球","anniversary",[de("bowl","球投倒三錐，兩攤位保持完好","basketball",void 0,3,{safeStalls:!0})]);Pt("cc01","譜架少了一個","choir_contest",[de("place","兩譜架放舞臺","music_stand","courtyard",2),de("deliver","三樂譜送舞臺","stage_score","courtyard",3)]);Pt("cc02","團員請集合","choir_contest",[de("gather","在舞臺點名，或逐一引導六位團員到位")]);Pt("cc03","不要帶陀螺上臺","choir_contest",[de("deliver","向惡作劇學生索回陀螺，送音樂室","spinning_top","music_room"),de("gather","回舞臺點名，團員到齊")]);Pt("cc04","指揮老師準備好了","choir_contest",[de("choir","舞臺互動開始32拍，在8個收圈提示按指揮鍵")],"合唱指揮");Pt("fe01","考卷不是傳單","final_exam",[de("deliver","A組考卷送教室A桌","exam_a","classroom"),de("deliver","B組考卷送教室B桌","exam_b","classroom")]);Pt("fe02","時間到了嗎？","final_exam",[de("return","將時鐘掛回","wall_clock"),de("answerTime","講臺回答剩餘時間（顯示於題目）")]);Pt("fe03","走廊禁止喧嘩","final_exam",[de("deliver","將陀螺放音樂室隔離架","spinning_top","music_room"),de("deliver","將三角鐵放音樂室隔離架","triangle","music_room")],"考場震源");Pt("fe04","監考老師去哪了","final_exam",[de("invigilate","在教室講臺開始監考"),de("deliver","辦公室取封套，回教室","envelope","classroom"),de("collect","回教室收三份考卷（可提前回收）",void 0,"classroom",3)]);const kn=Object.fromEntries(yi.map(s=>[s.id,s])),Yl=["端莊的混亂源","代理校長","器材管理員","節奏大師","全校最安靜的人","考場震源","家長迴避專家","失物招領員","整理界傳奇","公開觀課模範","校慶動線設計師","合唱指揮"],Qn=[["badge_leaf","綠葉徽章",30],["badge_star","星星徽章",30],["glasses_round","圓框眼鏡",50],["glasses_blue","藍框眼鏡",50],["shoes_red","磚紅平底鞋",80],["shoes_teal","青綠平底鞋",80]].map(([s,e,t])=>({id:s,label:e,price:+t})),Bt={tray:{x:18,z:-18},seat:{x:24,z:-18},musicShelf:{x:-26,z:-4},stage:{x:0,z:4},podium:{x:-25,z:-19},lostFound:{x:3,z:22},hideTool:{x:-12,z:-10},hidePodium:{x:-26,z:-20}};function Jn(s,e=0){return s.kind==="return"?vi(vt[s.item]?.zone||"staff_room"):s.zone==="classroom"?{x:-24+e*2.2,z:-18}:s.zone==="music_room"?Bt.musicShelf:s.zone==="staff_room"?s.item==="coffee_cup"?Bt.seat:Bt.tray:s.zone==="playground"?{x:-26+e*2.5,z:12}:s.zone==="gate"?Bt.lostFound:s.zone==="courtyard"?{x:-4+e*3,z:4}:vi(s.zone||"courtyard")}const re=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),gt=(s,e)=>{let t=Math.hypot(s,e)||1;return{x:s/t,z:e/t}};class jl{walls=[];dynamic=[];cell=.75;pathCalls=0;constructor(){for(const e of Ki.filter(t=>["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id))){const t=(e.z1+e.z2)/2,i=e.x2<0?e.x2:e.x1;if(this.walls.push({id:e.id+"-back",x:(e.x1+e.x2)/2,z:e.z1,w:e.x2-e.x1,d:.35,wall:!0,zone:e.id}),this.walls.push({id:e.id+"-front",x:(e.x1+e.x2)/2,z:e.z2,w:e.x2-e.x1,d:.35,wall:!0,zone:e.id}),e.id==="infirmary")this.walls.push({id:"inf-left",x:e.x1,z:t,w:.35,d:e.z2-e.z1,wall:!0,zone:e.id},{id:"inf-right",x:e.x2,z:t,w:.35,d:e.z2-e.z1,wall:!0,zone:e.id}),this.walls=this.walls.filter(n=>n.id!=="infirmary-front"),this.walls.push({id:"inf-door-l",x:-4,z:-14,w:4,d:.35,wall:!0,zone:e.id},{id:"inf-door-r",x:4,z:-14,w:4,d:.35,wall:!0,zone:e.id});else{const n=i===e.x1?e.x2:e.x1;this.walls.push({id:e.id+"-outer",x:n,z:t,w:.35,d:e.z2-e.z1,wall:!0,zone:e.id});const r=(e.z2-e.z1-3)/2;this.walls.push({id:e.id+"-door-a",x:i,z:e.z1+r/2,w:.35,d:r,wall:!0,zone:e.id},{id:e.id+"-door-b",x:i,z:e.z2-r/2,w:.35,d:r,wall:!0,zone:e.id})}}}colliders(){return[...this.walls,...this.dynamic]}blocked(e,t=.32,i=""){return Math.abs(e.x)>31-t||e.z<-25+t||e.z>25-t?!0:this.colliders().some(n=>n.id!==i&&Math.abs(e.x-n.x)<n.w/2+t&&Math.abs(e.z-n.z)<n.d/2+t)}move(e,t,i,n=.32,r=""){let a={...e},l=Math.max(1,Math.ceil(Math.hypot(t,i)/.15));for(let h=0;h<l;h++)this.blocked({x:a.x+t/l,z:a.z},n,r)||(a.x+=t/l),this.blocked({x:a.x,z:a.z+i/l},n,r)||(a.z+=i/l);return a}visible(e,t){let i=re(e,t);for(let n=.15;n<i;n+=.2){let r={x:e.x+(t.x-e.x)*n/i,z:e.z+(t.z-e.z)*n/i};if(this.walls.some(a=>Math.abs(r.x-a.x)<a.w/2&&Math.abs(r.z-a.z)<a.d/2))return!1}return!0}path(e,t,i=""){if(this.pathCalls++,re(e,t)<.5)return[t];const n=this.cell,r=(v,m)=>`${v},${m}`;let a=[Math.round(e.x/n),Math.round(e.z/n)],l=[Math.round(t.x/n),Math.round(t.z/n)],h=[{x:a[0],z:a[1],g:0,f:0}],c=new Map,o=new Map;o.set(r(...a),0);let d=0,u="";for(;h.length&&d++<7e3;){h.sort((f,w)=>f.f-w.f);let v=h.shift(),m=r(v.x,v.z);if(Math.hypot(v.x-l[0],v.z-l[1])<1.6){u=m;break}for(let[f,w]of[[1,0],[-1,0],[0,1],[0,-1]]){let E=v.x+f,S=v.z+w,C=r(E,S);if(this.blocked({x:E*n,z:S*n},.38,i))continue;let A=v.g+1;A>=(o.get(C)??1/0)||(o.set(C,A),c.set(C,m),h.push({x:E,z:S,g:A,f:A+Math.hypot(E-l[0],S-l[1])}))}}if(!u)return[];let p=[],_=u;for(;c.has(_);){let[v,m]=_.split(",").map(Number);p.unshift({x:v*n,z:m*n}),_=c.get(_)}return p.push(t),p}}const Hs=()=>({version:1,points:20,ownedCosmetics:[],equipped:[],titleIds:[],tutorialFlags:[],completedMissionIds:[],completedChapters:[],rewardLedger:[],bestRatings:{},statistics:{},photoCards:[],serviceCooldown:0,lastMode:"normal",settings:{quality:"auto",music:.35,sfx:.5,mute:!1,lowMotion:!1,assist:!1},revision:0});function sl(s){if(!s||s.version!==1)throw Error("存檔版本不支援");for(let t of["points","serviceCooldown","revision"])if(!Number.isFinite(s[t])||s[t]<0||s[t]>1e9)throw Error("存檔數值無效");let e={ownedCosmetics:Qn.map(t=>t.id),equipped:Qn.map(t=>t.id),titleIds:Yl,tutorialFlags:["done"],completedMissionIds:yi.map(t=>t.id),completedChapters:Zn.map(t=>t.id),rewardLedger:[...yi.map(t=>t.id),...Zn.map(t=>"chapter:"+t.id),"tutorial"]};for(let[t,i]of Object.entries(e))if(!Array.isArray(s[t])||s[t].length>200||s[t].some(n=>!i.includes(n))||new Set(s[t]).size!==s[t].length)throw Error("存檔內容 ID 無效："+t);if(s.equipped.some(t=>!s.ownedCosmetics.includes(t)))throw Error("外觀未購買");if(!["normal",...Zn.map(t=>t.id)].includes(s.lastMode))throw Error("活動 ID 無效");if(!s.settings||!["auto","low","standard"].includes(s.settings.quality)||["music","sfx"].some(t=>!Number.isFinite(s.settings[t])||s.settings[t]<0||s.settings[t]>1)||["mute","lowMotion","assist"].some(t=>typeof s.settings[t]!="boolean"))throw Error("設定無效");if(!Array.isArray(s.photoCards)||s.photoCards.length>12||s.photoCards.some(t=>JSON.stringify(t).length>4e4))throw Error("紀念卡超過限制");if(typeof s.statistics!="object"||Object.values(s.statistics).some(t=>typeof t!="number"||!Number.isFinite(t)||t<0))throw Error("統計無效");if(typeof s.bestRatings!="object"||Object.entries(s.bestRatings).some(([t,i])=>!yi.some(n=>n.id===t)||!["完成","金牌","練習"].includes(i)))throw Error("評級無效");return structuredClone(s)}function er(s,e,t){return s.rewardLedger.includes(e)?!1:(s.rewardLedger.push(e),s.points+=t,!0)}function Kl(s,e){const t=Qn.find(i=>i.id===e);return!t||s.points<t.price||s.ownedCosmetics.includes(e)?!1:(s.points-=t.price,s.ownedCosmetics.push(e),!0)}class Zl{key="dongshan-campus-v1";lease="dongshan-campus-writer";id=Math.random().toString(36).slice(2);readOnly=!1;error="";timer;constructor(){this.claim(),this.timer=setInterval(()=>this.claim(!1),5e3)}claim(e=!1){try{let t=JSON.parse(localStorage.getItem(this.lease)||"null");e||!t||t.id===this.id||t.expires<Date.now()?(localStorage.setItem(this.lease,JSON.stringify({id:this.id,expires:Date.now()+12e3})),this.readOnly=!1):this.readOnly=!0}catch{this.error="儲存空間不可用，請匯出進度"}}load(){try{let e=localStorage.getItem(this.key);return e?sl(JSON.parse(e)):Hs()}catch(e){return this.error="未載入無效存檔："+e.message,Hs()}}save(e){if(this.claim(!1),this.readOnly)return this.error="另一分頁正在寫入；此頁暫不儲存，可接管",!1;try{return e.revision++,localStorage.setItem(this.key,JSON.stringify(e)),this.error="",!0}catch{return this.error="存檔寫入失敗，遊戲可繼續，請匯出",!1}}dispose(){clearInterval(this.timer);try{JSON.parse(localStorage.getItem(this.lease)||"null")?.id===this.id&&localStorage.removeItem(this.lease)}catch{}}}class Jl{constructor(e=6477){this.seed=e}next(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}pick(e){return e[Math.floor(this.next()*e.length)]}}const Ql=s=>s<15?0:s<35?1:s<60?2:s<85?3:4;class ec{world=new jl;previous=new Map;rng;time=0;session=0;seq=0;mode="normal";player={id:"player_music_teacher",x:21,z:-14,y:0,face:{x:-1,z:0},hp:100,item:null,wig:null,glasses:null,inv:0,dodge:0,dodgeCooldown:0,attack:null,attackCooldown:0,slow:0,hidden:!1,hideWitness:!1,action:"idle",actionTime:0};objects=new Map;npcs=[];props=[];alert=0;reason="校園一切正常";lastTrouble=-100;eventLog=[];listeners=[];attempt=null;familyQueue=[];recentParents=[];pending=[];cooldowns=new Map;report={damage:0,downed:0,parents:0,maxAlert:0};lastReport=null;profile;onSave=()=>{};onToast=e=>{};tutorial=-1;race=null;choir=null;notes=[];serviceReady=0;movement=0;pathBudget=0;cameraVisible=()=>!1;rosterSeed;tickMs=0;aiMs=0;stats={ticks:0,events:0};zoneAway=new Map;constructor(e=Hs(),t=6477){this.profile=e,this.rng=new Jl(t),this.rosterSeed=t,this.reset("normal")}get level(){return Ql(this.alert)}get step(){return this.attempt?kn[this.attempt.mission].steps[this.attempt.step]:null}get held(){return this.player.item?this.objects.get(this.player.item):null}get chase(){return this.npcs.filter(e=>["Chase","Attack","Search"].includes(e.state)&&e.role!=="student")}emit(e,t={},i="player_music_teacher",n,r){const a={eventId:`${this.session}:${++this.seq}`,sessionId:this.session,actorId:i,targetId:n,sourceId:r,zoneId:xt(this.player),timestamp:this.time,type:e,data:t};return this.eventLog.push(a),this.eventLog.length>350&&this.eventLog.shift(),this.stats.events++,["propDamaged","coneDown","spill"].includes(e)&&i===this.player.id&&this.report.damage++,(i===this.player.id||["familyArrived","choirDone"].includes(e))&&(this.profile.statistics[e]=(this.profile.statistics[e]||0)+1),this.objective(a),this.tutorialEvent(a),this.listeners.forEach(l=>l(a)),a}toast(e){this.onToast(e)}reset(e=this.mode){this.previous.clear(),this.session++,this.pending=[],this.familyQueue=[],this.cancelMission(),this.mode=e,this.profile.lastMode=e,this.objects.clear(),this.npcs=[],this.props=[],this.cooldowns.clear(),this.zoneAway.clear(),this.alert=0,this.lastTrouble=-100,this.reason="校園一切正常",this.report={damage:0,downed:0,parents:0,maxAlert:0},Object.assign(this.player,{x:21,z:-14,hp:100,item:null,wig:null,glasses:null,attack:null,attackCooldown:0,dodge:0,dodgeCooldown:0,hidden:!1,inv:0}),this.race=null,this.choir=null;let t={};for(let i of nl){let n=vi(i.zone),r=t[i.zone]||0;t[i.zone]=r+1,this.createItem(i.id,`${i.id}:0`,{x:n.x-4+r%4*2.6,z:n.z-2+Math.floor(r/4)*2.6})}for(let i=1;i<3;i++)this.createItem("office_chair",`office_chair:${i}`,{x:18+i*3,z:-12}),this.createItem("traffic_cone",`traffic_cone:${i}`,{x:-26+i*2,z:19});this.createItem("music_stand","music_stand:1",{x:-18,z:2});for(let i of["classroom","staff_room","music_room","principal_room","courtyard","playground","gate","co_op","infirmary","corridor"]){let n=vi(i);for(let r=0;r<3;r++){let a=r===0?"table":r===1?"planter":"bench";i==="classroom"&&(a=r===2?"chair":"desk"),i==="infirmary"&&(a=r===0?"bed":r===1?"cabinet":"bench"),this.props.push({id:`prop:${i}:${r}`,type:a,zone:i,x:n.x-3+r*3,z:n.z+3,home:{x:n.x-3+r*3,z:n.z+3},w:a==="planter"?.7:1.6,d:a==="planter"?.7:.8,broken:!1,hp:20,hit:0})}}if(this.props.push({id:"dummy",type:"dummy",zone:"playground",x:-16,z:18,w:.8,d:.8,hp:1e4,broken:!1},{id:"podium",type:"podium",zone:"classroom",...Bt.podium,w:1.4,d:.8,hp:30,broken:!1},{id:"hideTool",type:"shelter",zone:"corridor",...Bt.hideTool,w:1.3,d:1.5,hp:50,broken:!1}),e!=="normal")for(let i=0;i<2;i++)this.props.push({id:"stall:"+i,type:"stall",zone:"courtyard",x:-6+i*12,z:8,w:2.8,d:1.5,hp:35,broken:!1});for(let i=0;i<(e==="normal"?24:36);i++){let n=jn[i%12].id,r=["classroom","music_room","courtyard","playground"][Math.floor(i/6)%4],a=vi(r);this.addNPC(n,"student",{x:a.x-4+i%6*1.5,z:a.z+Math.floor(i/3)%2*2},"student:"+i)}for(let i of ja){let n=vi(i.zone);this.addNPC(i.id,"staff",{x:n.x+3,z:n.z},i.id)}if(["parent_day","anniversary"].includes(e))for(let i=0;i<3;i++)this.addNPC(An[i].id,"visitor",{x:-3+i*3,z:15},"visitor:"+i);for(let i of this.npcs.filter(n=>n.role==="student"))i.friend="student:"+(+i.id.split(":")[1]+1)%24,i.treasure=[...this.objects.values()].find(n=>n.zone===xt(i))?.id;this.refreshColliders(),this.onSave(),this.emit("reset",{mode:e},"system")}createItem(e,t,i){if(this.objects.has(t))return this.objects.get(t);const n={id:t,type:e,x:i.x,z:i.z,y:0,home:{x:i.x,z:i.z},zone:xt(i),state:"home",owner:null,pins:[],broken:!1,full:e==="trash_bin",hit:new Set,hits:0,age:0,rest:this.time};return this.objects.set(t,n),n}addNPC(e,t,i,n=`${t}:${this.session}:${++this.seq}`){let r=sn[e],a=t==="parent"?r.hp:t==="student"?25+jn.findIndex(h=>h.id===e)%4*5:60;const l={id:n,type:e,role:t,label:t==="student"?jn.find(h=>h.id===e).label+"學生":t==="staff"?ja.find(h=>h.id===e)?.label||e:r.label+"家長",x:i.x,z:i.z,home:{x:i.x,z:i.z},hp:a,maxHp:a,state:t==="parent"?"Chase":"Idle",timer:0,cooldown:0,face:{x:0,z:1},target:{...i},path:[],repath:0,lastSeen:{...this.player},lost:0,item:null,incident:"",called:!1,retries:0,callEligible:!1,contactCooldown:0,active:!1,film:0,lastFilmEscape:-100,turns:0,cleaned:new Set,intro:0,ability:r?.ability};return this.npcs.push(l),l}refreshColliders(){this.world.dynamic=[...this.props.filter(e=>e.type!=="dummy").map(e=>({id:e.id,x:e.x,z:e.z,w:e.w,d:e.d})),...Array.from(this.objects.values()).filter(e=>vt[e.type].category.some(t=>["fixed","pushable"].includes(t))&&!["held","worn","airborne"].includes(e.state)).map(e=>({id:e.id,x:e.x,z:e.z,w:e.type==="piano"?2:.7,d:e.type==="piano"?1.1:.7}))]}take(e,t="player_music_teacher"){let i=this.objects.get(e);if(!i||!vt[i.type].category.includes("portable")||vt[i.type].category.includes("fixed")||i.full||i.papers?.some(r=>!r.taken))return!1;let n=t===this.player.id?this.player:this.npcs.find(r=>r.id===t);return!n||n.item||["held","worn","reserved"].includes(i.state)?!1:(n.item=e,i.owner=t,i.state="held",i.vx=i.vz=i.vy=0,i.flight=void 0,i.hit.clear(),t===this.player.id&&(this.player.action="pickup",this.player.actionTime=.35,this.emit("take",{item:i.type,id:e},t,e),["principal_wig","principal_glasses","trophy","laptop"].includes(i.type)&&this.notice("重要物品被搬走",10,"take:"+e,t,8)),this.refreshColliders(),!0)}detach(e){if(e.owner===this.player.id)this.player.item===e.id&&(this.player.item=null),this.player.wig===e.id&&(this.player.wig=null),this.player.glasses===e.id&&(this.player.glasses=null);else{let t=this.npcs.find(i=>i.id===e.owner);t?.item===e.id&&(t.item=null)}e.owner=null}drop(e=this.player.item,t){let i=this.objects.get(e);if(!i||i.owner!==this.player.id)return!1;this.detach(i);let n=t||this.world.move(this.player,this.player.face.x*.85,this.player.face.z*.85,.15);return Object.assign(i,{x:n.x,z:n.z,y:0,state:"settled",rest:this.time}),this.player.action="drop",this.player.actionTime=.3,this.emit("drop",{item:i.type,id:i.id},this.player.id,i.id),this.refreshColliders(),this.checkDelivery(i),!0}wear(e){let t=this.objects.get(e);if(!t||t.owner!==this.player.id||!vt[t.type].category.includes("wearable"))return!1;let i=t.type==="principal_wig"?"wig":"glasses";return this.player[i]?!1:(this.player.item=null,this.player[i]=e,t.state="worn",this.player.action="wear",this.player.actionTime=.7,this.emit("wear",{item:t.type,id:e}),!0)}returnItem(e){let t=this.objects.get(e);return!t||t.owner!==this.player.id||re(this.player,t.home)>2.7?(this.toast("請帶到原掛點／原位置，再歸還"),!1):(this.detach(t),Object.assign(t,{...t.home,y:0,state:"home",broken:!1,full:t.type==="trash_bin",rest:this.time}),this.emit("return",{item:t.type,id:e}),this.refreshColliders(),!0)}resetObjectiveItems(){if(this.attempt){for(let e of this.objects.values())e.pins.includes(this.attempt.id)&&(this.detach(e),Object.assign(e,{...e.home,state:"home",y:0,vx:0,vz:0,vy:0,flight:void 0,papers:void 0}));this.refreshColliders(),this.toast("任務物件已按原 ID 歸位")}}throwItem(){let e=this.held;if(!e||this.player.hidden)return!1;if([...this.objects.values()].filter(r=>r.state==="airborne").length>=(this.profile.settings.quality==="low"?6:8))return this.toast("先等飛行物落地"),!1;let i=this.npcs.filter(r=>r.active&&r.hp>0&&re(r,this.player)<8&&this.world.visible(this.player,r)&&["Chase","Attack"].includes(r.state)).sort((r,a)=>re(r,this.player)-re(a,this.player)).find(r=>{let a=gt(r.x-this.player.x,r.z-this.player.z);return a.x*this.player.face.x+a.z*this.player.face.z>.82}),n=i?gt(i.x-this.player.x,i.z-this.player.z):this.player.face;return this.detach(e),Object.assign(e,{x:this.player.x+n.x*.6,z:this.player.z+n.z*.6,y:1.25,state:"airborne",vx:n.x*9,vz:n.z*9,vy:3.4,age:0,flight:`projectile:${this.session}:${++this.seq}`,hits:0}),e.hit.clear(),this.player.action="throw",this.player.actionTime=.4,this.emit("throw",{item:e.type,id:e.id}),this.attempt&&e.type==="basketball"&&(this.attempt.meta.throws=(this.attempt.meta.throws||0)+1),e.type==="exam_papers"&&(e.papers=void 0,this.emit("scatter",{id:e.id}),this.notice("紙張散了一地",4,"scatter:"+e.flight,this.player.id,6)),!0}attack(){if(this.player.hidden||this.player.attackCooldown>0)return!1;let e=this.held?vt[this.held.type]:null;return this.player.attack={id:`attack:${++this.seq}`,age:0,hit:new Set,resolved:!1,damage:e?.damage||10,reach:e?.reach||1.2,item:this.held?.type},this.player.attackCooldown=e?.cooldown||.45,this.player.action="attack",this.player.actionTime=this.player.attackCooldown,this.emit("swing",{item:e?.id}),!0}dodge(){return this.player.hidden||this.player.dodgeCooldown>0?!1:(this.player.dodge=.25,this.player.dodgeCooldown=1.4,this.player.inv=Math.max(this.player.inv,.15),this.player.action="dodge",this.player.actionTime=.25,this.emit("dodge"),!0)}rollCall(){if((this.cooldowns.get("roll")||0)>this.time)return this.toast("點名還在冷卻");this.cooldowns.set("roll",this.time+12);let e=[];for(let t of this.npcs)["student","visitor"].includes(t.role)&&t.hp>0&&re(t,this.player)<6&&this.world.visible(this.player,t)&&!["Recover","Attack","Chase","Flee"].includes(t.state)&&(t.state="Gather",t.target={x:this.player.x+(e.length%3-1)*1.1,z:this.player.z+1.5+Math.floor(e.length/3)},t.path=[],e.push(t.id));this.player.action="roll",this.player.actionTime=1,this.emit("rollCall",{names:e}),this.toast("各位同學，請到老師這裡集合。")}hide(e){if(this.player.hidden){this.player.hidden=!1,this.player.action="leaveHide",this.player.actionTime=.4;return}let t=this.npcs.some(i=>i.active&&["Chase","Search","Attack"].includes(i.state)&&this.sees(i));this.player.hidden=!0,this.player.hideWitness=t,this.emit("hide",{witnessed:t}),this.toast(t?"有人看見妳躲進去，會過來查看。":"屏住呼吸，等動靜過去。")}sees(e){if(re(e,this.player)>10||!this.world.visible(e,this.player)||this.player.hidden&&!this.player.hideWitness)return!1;let t=gt(this.player.x-e.x,this.player.z-e.z);return re(e,this.player)<2||t.x*e.face.x+t.z*e.face.z>-.5}notice(e,t,i,n=this.player.id,r=10){if(n!==this.player.id)return;let a=this.npcs.filter(l=>l.hp>0&&re(l,this.player)<r&&this.world.visible(l,this.player)&&l.role!=="parent");if(this.lastTrouble=this.time,this.player.hidden=!1,!a.length){this.reason="附近傳來動靜";for(let l of this.npcs)l.role==="staff"&&re(l,this.player)<r+5&&(l.state="Investigate",l.target={...this.player});return}if(!((this.cooldowns.get(i)||0)>this.time)){this.cooldowns.set(i,this.time+1),this.alert=Math.min(100,this.alert+t*(this.mode==="final_exam"?1.5:1)),this.reason=e,this.report.maxAlert=Math.max(this.report.maxAlert,this.level),this.emit("notice",{reason:e,points:t,witnesses:a.map(l=>l.id)},n);for(let l of a)l.role==="student"?this.reactStudent(l):!["nurse"].includes(l.type)&&!["Chase","Attack","Recover"].includes(l.state)&&(l.state=this.level>=2?"Chase":"Investigate",l.target={...this.player},l.lastSeen={...this.player})}}reactStudent(e){if(!["Recover","Attack","Call","Chase","Flee"].includes(e.state)){switch(e.type){case"timid":e.state="Flee";break;case"fighter":case"athlete":e.state="Chase";break;case"tattletale":e.state="Tattle",e.target=vi("staff_room");break;case"filmer":e.state="Film",e.film=0;break;case"friend":e.state="Help",e.target={...this.player};break;case"mediator":e.state="Mediate",this.toast("同學：老師，請先冷靜。");break;case"scavenger":e.state="PickUp";break;case"guardian":e.state="Chase";break;case"prankster":e.state="Prank";break;case"reader":re(e,this.player)<2&&(e.state="Flee");break;default:e.state="Spectate";break}e.timer=0}}damageNPC(e,t,i,n=!1){if(e.hp<=0||e.type==="nurse"||xt(e)==="infirmary")return!1;if(e.role==="parent"&&["briefcase","umbrella"].includes(e.type)&&e.state!=="Attack"&&e.cooldown<.5){let r=gt(this.player.x-e.x,this.player.z-e.z);if(r.x*e.face.x+r.z*e.face.z>.65&&(e.type==="briefcase"||n))return this.emit("block",{npc:e.id}),!1}if(e.state==="Call"&&(e.retries++,e.contactCooldown=this.time+8,e.callEligible=e.retries<=1),e.hp=Math.max(0,e.hp-t),e.cooldown=Math.max(e.cooldown,.3),e.attack=null,this.emit("CombatResolved",{damage:t,npc:e.id,projectile:n},this.player.id,e.id,i),this.notice("有人受到波及",5,"hit:"+e.id),e.role==="student"?(e.incident||(e.incident=`incident:${this.session}:${++this.seq}`,e.callEligible=this.time>=e.contactCooldown&&this.rng.next()<(this.level>=2?.5:.35)),e.callEligible&&!e.called&&e.hp>0?(e.state="Flee",e.timer=0):this.reactStudent(e)):e.role==="visitor"?this.parentCount()<3?(e.role="parent",e.state="Chase",this.report.parents++,this.emit("visitorChase",{id:e.id})):e.state="Spectate":e.state="Chase",e.hp===0){if(e.state="Recover",e.timer=8,e.attack=null,this.report.downed++,this.notice("人物跌坐暈眩",8,"down:"+e.id),this.emit("NPCDowned",{npc:e.id},this.player.id,e.id,i),e.item){let r=this.objects.get(e.item);this.detach(r),Object.assign(r,{x:e.x,z:e.z,state:"settled",y:0,rest:this.time})}}else{let r=gt(e.x-this.player.x,e.z-this.player.z),a=this.world.move(e,r.x*(e.type==="armored"?.15:.65),r.z*(e.type==="armored"?.15:.65));e.x=a.x,e.z=a.z}return!0}damagePlayer(e,t){if(this.player.inv>0||this.player.hidden&&!this.player.hideWitness)return;this.player.hp=Math.max(0,this.player.hp-e),this.player.inv=.65,this.player.action="hit",this.player.actionTime=.3;let i=gt(this.player.x-t.x,this.player.z-t.z),n=this.world.move(this.player,i.x*.6,i.z*.6);this.player.x=n.x,this.player.z=n.z,this.emit("playerHit",{amount:e,npc:t.id},t.id),this.player.hp===0&&this.rescue()}rescue(){let e={...this.report,mode:this.mode,time:Math.round(this.time),session:this.session};this.lastReport=e;let t=this.mode;this.reset(t),Object.assign(this.player,{x:0,z:-19,hp:100}),this.emit("rescue",{report:e},"system"),this.toast(`事件報告：翻倒 ${e.damage}、暈眩 ${e.downed}、家長 ${e.parents}、最高警戒 ${e.maxAlert}`)}parentCount(){return this.npcs.filter(e=>e.role==="parent").length}queueParent(e,t){if(this.familyQueue.some(l=>l.incident===e)||this.familyQueue.length>=3)return!1;this.alert=Math.max(35,this.alert);let n=An.filter(l=>this.level>=4||l.tier!=="special"&&(this.level>=3||l.tier==="normal")).flatMap(l=>Array(this.recentParents.includes(l.id)?1:3).fill(l)),r=t||this.rng.pick(n).id;this.familyQueue.push({incident:e,type:r,at:this.time+6});let a=this.npcs.find(l=>l.type==="guard_uncle");return a&&(a.state="Gate",a.timer=0),this.toast(`${sn[r].label}家長六秒後到校門`),this.emit("familyScheduled",{incident:e,type:r},"system"),!0}spawnParent(e){let t=sn[e];if(!t||this.parentCount()+t.slotCost>3)return!1;let i=`group:${++this.seq}`;for(let n=0;n<t.slotCost;n++){let r=n===0?e:e==="duo"?"duo":n===1?"sports":"spatula",a=this.addNPC(r,"parent",{x:-1.5+n*1.5,z:24});if(a.group=i,a.intro=1,a.state="Enter",a.lastSeen={...this.player},e==="protective"){let l=this.npcs.filter(h=>h.role==="student").sort((h,c)=>re(h,this.player)-re(c,this.player))[0];a.home={x:l.x,z:l.z},a.lastSeen={...a.home}}e==="duo"&&(a.turns=n),e==="camper"&&(this.createItem("office_chair","camp-chair:"+i,{x:0,z:15}),a.home={x:0,z:15},this.refreshColliders())}return this.report.parents+=t.slotCost,this.recentParents=[...this.recentParents.slice(-1),e],this.emit("familyArrived",{type:e,count:t.slotCost},"system"),!0}startMission(e){let t=kn[e];if(!t||t.mode!==this.mode)return!1;this.cancelMission(),this.attempt={id:`attempt:${this.session}:${++this.seq}`,mission:e,step:0,count:0,seen:new Set,started:this.time,meta:{throws:0,placed:{},maxParents:0,startLevel:this.level,searchSeen:!1,cleanSeen:!1,stealth:!0}};const i={};for(let n of t.steps)n.item&&vt[n.item]&&(i[n.item]=Math.max(i[n.item]||0,n.count||1));for(let[n,r]of Object.entries(i)){if(n==="coffee_cup")continue;let a=[...this.objects.values()].filter(l=>l.type===n);for(let l=a.length;l<r;l++){let h=vi(vt[n].zone);a.push(this.createItem(n,`${n}:task:${l}`,{x:h.x+l*1.3,z:h.z-1.5}))}for(let l of a.slice(0,r))l.pins.push(this.attempt.id)}if(["q02","cc03"].includes(e)){let n=e==="q02"?"recorder":"spinning_top",r=[...this.objects.values()].find(l=>l.type===n),a=this.npcs.find(l=>l.type===(e==="q02"?"guardian":"prankster"));this.detach(r),r.state="settled",this.take(r.id,a.id)}if(["q10","fe02"].includes(e)){let n=[...this.objects.values()].find(r=>r.type==="wall_clock");n.owner||Object.assign(n,{x:-9,z:-10,state:"settled"})}if(["q06","an04"].includes(e))for(let[n,r]of[...this.objects.values()].filter(a=>a.type==="traffic_cone").slice(0,3).entries())this.detach(r),Object.assign(r,{x:-24+n*1.8,z:18,y:0,state:"home",broken:!1}),r.pins.push(this.attempt.id);if(e==="q09"&&(this.alert=Math.max(65,this.alert),this.lastTrouble=this.time,this.attempt.meta.startLevel=3,this.reason="練習：請讓校園自然安靜下來"),["q07","q18","q19","q21"].includes(e)&&(e==="q07"?(this.queueParent("task:"+this.attempt.id+":1","spatula"),this.queueParent("task:"+this.attempt.id+":2","sports")):this.queueParent("task:"+this.attempt.id,e==="q18"?"shopping_bag":e==="q19"?"neat":"sports")),["cc02","cc03"].includes(e)&&(this.attempt.meta.choristers=Array.from({length:6},(n,r)=>"student:"+(12+r)),e==="cc03"&&(this.attempt.meta.choristers[5]=this.npcs.find(n=>n.type==="prankster").id)),e==="q20"){let n=this.npcs.find(r=>r.type==="filmer");this.notes.push(`拍片學生常在${xt(n)==="classroom"?"一般教室":"中庭"}，接近互動可讓他開始舉機。`)}if(e==="q22")for(let n of this.props.filter(r=>r.zone==="classroom"&&r.type!=="podium"))n.broken=!0;if(e==="q23"){let n=[...this.objects.values()].find(l=>l.type==="laptop"),r=this.rng.pick([["scavenger","guardian","reader"],["guardian","friend","scavenger"],["reader","mediator","guardian"]]);this.attempt.meta.route=r,this.attempt.meta.routeIndex=0,this.detach(n),n.state="settled";let a=this.npcs.find(l=>l.type===r[0]);this.take(n.id,a.id),this.notes=[`主任：${jn.find(l=>l.id===r[0]).label}學生拿了筆電。請和同學談話追蹤。`]}return e==="an01"&&(this.props.find(n=>n.zone==="courtyard"&&n.type==="table").pins=this.attempt.id),this.refreshColliders(),this.emit("missionStart",{id:e}),this.toast(t.label+"："+t.steps[0].text),!0}cancelMission(){if(this.attempt){for(let e of this.objects.values())e.pins=e.pins.filter(t=>t!==this.attempt.id);this.attempt=null}for(let e of this.props)e.pins=void 0;this.race=null,this.choir=null}increment(e,t){let i=this.attempt;if(i){if(t){if(i.seen.has(t))return;i.seen.add(t)}i.count++,this.emitProgress(),i.count>=(this.step.count||1)&&this.advance()}}emitProgress(){this.toast(`${kn[this.attempt.mission].label}：${this.attempt.count}/${this.step.count||1}`)}advance(){let e=this.attempt,t=kn[e.mission];if(e.step++,e.count=0,e.seen.clear(),e.meta.placed={},e.step<t.steps.length){this.toast(t.steps[e.step].text);return}let i=e.meta.throws>5?"練習":e.meta.stealth===!1?"完成":"金牌",n=er(this.profile,t.id,t.reward);this.profile.completedMissionIds.includes(t.id)||this.profile.completedMissionIds.push(t.id),this.profile.bestRatings[t.id]=i,t.title&&!this.profile.titleIds.includes(t.title)&&this.profile.titleIds.push(t.title),t.mode!=="normal"&&yi.filter(a=>a.mode===t.mode).every(a=>this.profile.completedMissionIds.includes(a.id))&&(er(this.profile,"chapter:"+t.mode,80),this.profile.completedChapters.includes(t.mode)||this.profile.completedChapters.push(t.mode)),this.cancelMission(),this.onSave(),this.emit("missionComplete",{id:t.id,rating:i,first:n}),this.toast(`${t.label}完成 · ${i}${n?" +"+t.reward+"點":"（重玩不重複給點）"}`)}objective(e){let t=this.attempt,i=this.step;if(!t||!i||e.actorId!=="player_music_teacher"&&!["naturalCalm","search","speechDone","gathered","wigFound","escape","raceDone","choirDone","familyArrived","filmEscape"].includes(e.type))return;e.type==="notice"&&i.params?.stealth&&(t.meta.stealth=!1),["swing","throw"].includes(e.type)&&i.kind==="calm"&&(t.meta.startLevel=0,this.toast("安靜練習需重試：此次有搗亂"));let n=!1,r=e.data.id||e.data.npc||e.eventId;switch(i.kind){case"brew":n=e.type==="coffee";break;case"deliver":n=e.type==="deliver"&&e.data.item===i.item&&e.data.zone===i.zone;break;case"return":n=e.type==="return"&&e.data.item===i.item;break;case"wearVisit":n=e.type==="wearVisit"&&e.data.item===i.item&&e.data.zone===i.zone;break;case"strikeProps":n=e.type==="strikeProp"&&e.data.item===i.item,r=e.data.propType;break;case"audience":n=e.type==="audience",r=e.data.npc;break;case"bowl":n=e.type==="coneDown"&&e.data.item==="basketball",i.params?.safeStalls&&this.props.some(a=>a.type==="stall"&&a.broken)&&(n=!1,this.toast("攤位受損，請重試保齡球"));break;case"escape":n=e.type==="escape"&&t.meta.maxParents>=(i.params?.parents||1)&&e.data.level<t.meta.peakLevel;break;case"calm":n=e.type==="naturalCalm"&&t.meta.startLevel>=3;break;case"wigTrophy":n=e.type==="wigFound";break;case"performance":n=e.type==="performance"&&e.data.item===i.item&&e.data.audience>=2,r=e.data.zone;break;case"race":n=e.type==="raceDone";break;case"reflect":n=e.type==="reflect";break;case"cleanEscape":n=e.type==="search"&&t.meta.cleanSeen;break;case"cameraEscape":n=e.type==="filmEscape",r=e.eventId;break;case"searchShop":n=e.type==="drink"&&t.meta.searchSeen&&this.level<=1&&!this.chase.some(a=>a.state==="Chase"||a.state==="Attack");break;case"drink":n=e.type==="drink";break;case"restore":n=e.type==="restore"&&e.data.zone===i.zone;break;case"teach":n=e.type==="teach"&&e.data.zone===i.zone&&this.level===0&&!this.chase.length;break;case"seat":n=e.type==="seat";break;case"respond":n=e.type==="respond",r=e.data.personality;break;case"photo":n=e.type==="photo"&&e.data.students>=3&&e.data.visitors>=1;break;case"speech":n=e.type==="speechDone";break;case"gather":n=e.type==="gathered"&&e.data.count>=6;break;case"choir":n=e.type==="choirDone";break;case"answerTime":n=e.type==="answerTime"&&e.data.correct;break;case"invigilate":n=e.type==="invigilate";break;case"collect":n=e.type==="collect";break;case"dummy":n=e.type==="dummy"&&["badminton_racket","table_tennis_racket"].includes(e.data.item),r=e.eventId;break}n&&this.increment(e,r)}targets(){let e=[],t=this.step;if(t?.kind==="return"){let i=[...this.objects.values()].find(n=>n.type===t.item&&n.pins.includes(this.attempt.id));i?.owner===this.player.id&&e.push({id:"return:"+i.id,type:"marker",label:"歸還 "+vt[i.type].label,...i.home,itemId:i.id})}if(t&&["deliver","place"].includes(t.kind)&&this.held?.type===t.item)for(let i=0;i<(t.count||1);i++)e.push({id:"destination:"+i,type:"marker",label:t.kind==="place"?"定位 "+(i+1):"交付 "+vt[t.item]?.label,...Jn(t,i),index:i});for(let i of this.objects.values())if(!["held","worn","reserved"].includes(i.state)&&!(i.state==="airborne"&&i.y>1.4))if(i.papers?.some(n=>!n.taken))for(let[n,r]of i.papers.entries())r.taken||e.push({id:i.id+":paper:"+n,parentId:i.id,index:n,type:"paper",label:"拾回考卷 "+(n+1),x:r.x,z:r.z});else e.push({...i,id:i.id,type:"item",itemType:i.type,label:vt[i.type].label});for(let i of this.npcs)i.hp>0&&e.push({...i,type:"npc",label:i.label});for(let i of this.props)e.push({...i,type:"prop",propType:i.type,label:{table:"桌子",desk:"課桌",chair:"椅子",planter:"花盆",bench:"長椅",dummy:"練習假人",bed:"休息床",cabinet:"藥櫃",shelter:"工具間藏點",podium:"教室講臺",stall:"活動攤位"}[i.type]||i.type});return e.push({id:"board",type:"board",label:"今日待辦",x:23,z:-15},{id:"stage",type:"stage",label:this.mode==="choir_contest"?"合唱舞臺":"活動舞臺",...Bt.stage},{id:"hidePodium",type:"hide",label:"講臺後藏點",...Bt.hidePodium}),e}nearest(){let e=this.step,t=i=>i.type==="marker"&&this.held||i.id==="podium"&&["answerTime","invigilate","collect","teach"].includes(e?.kind)||i.id==="stage"&&["choir","photo","speech","gather"].includes(e?.kind)||i.itemType==="coffee_machine"&&(e?.item==="coffee_cup"||e?.kind==="brew")?0:1;return this.targets().filter(i=>re(i,this.player)<2.5&&this.world.visible(i,this.player)).sort((i,n)=>t(i)-t(n)||re(i,this.player)-re(n,this.player))[0]}checkDelivery(e){let t=this.step;return!t||t.kind!=="deliver"||e.type!==t.item||!e.pins.includes(this.attempt.id)||!Array.from({length:t.count||1},(n,r)=>Jn(t,r)).some(n=>re(e,n)<2)?!1:(e.state="settled",e.rest=this.time,this.emit("deliver",{item:e.type,id:e.id,zone:t.zone}),!0)}interact(e=this.nearest(),t="default"){if(this.player.hidden){this.hide("");return}let i=this.step;if(t==="roll"){this.rollCall();return}if(t==="useHeld"){this.useItem();return}if(t==="drop"){this.drop();return}if(t==="wear"&&this.held){this.wear(this.held.id);return}if(t==="unwear"){let n=this.player.wig||this.player.glasses,r=this.objects.get(n);r&&!this.player.item&&(this.detach(r),this.player.item=n,r.owner=this.player.id,r.state="held");return}if(t==="returnHeld"){let n=this.player.item||this.player.wig||this.player.glasses;n&&this.returnItem(n);return}if(!e)return this.toast("請靠近人物或物品");if(e.type==="paper"){let n=this.objects.get(e.parentId);n.papers[e.index].taken=!0,this.emit("paperCollected",{id:n.id,index:e.index}),n.papers.every(r=>r.taken)?(n.papers=void 0,n.state="settled",this.player.item||this.take(n.id),this.toast("三份考卷已收齊")):this.toast("繼續拾回同一包剩餘考卷");return}if(e.type==="marker"){e.id.startsWith("return:")?this.returnItem(e.itemId):this.held&&this.drop(this.held.id,{x:e.x,z:e.z});return}if(e.type==="board")return"missions";if(e.type==="npc"){let n=this.npcs.find(r=>r.id===e.id);if(n.type==="nurse")return this.level===0&&!this.chase.length?(this.player.hp=100,this.emit("recover"),"report"):this.toast("先甩開追逐再來；平靜時可恢復體力");if(n.type==="shop_aunt")return["Chase","Attack","Recover"].includes(n.state)?this.toast("阿姨忙著處理騷動，稍後再來"):"shop";if(n.type==="guard_uncle")return this.toast("警衛：失物請放這裡。家長由校門進場。");if(n.role==="student"){if(i?.kind==="respond")return{dialog:n.id};if(n.type==="filmer"){n.state="Film",n.film=0,this.toast("同學舉起手機：老師，妳在做什麼？");return}if(n.item){let r=this.objects.get(n.item);if(this.attempt?.mission==="q23"&&r.type==="laptop"){let a=this.attempt,l=a.meta.route;if(a.meta.routeIndex<l.length-1){a.meta.routeIndex++;let h=this.npcs.find(c=>c.type===l[a.meta.routeIndex]);this.detach(r),r.state="settled",this.take(r.id,h.id),this.notes.push(`${n.label}：我交給${h.label}了。`),this.toast(this.notes.at(-1));return}}this.detach(r),Object.assign(r,{x:n.x+.7,z:n.z,y:0,state:"settled"}),this.player.item||this.take(r.id),this.toast(n.label+"：老師，物品在這裡。");return}if(i?.kind==="gather"||i?.kind==="photo"){n.state="Gather",n.target={x:Bt.stage.x+(this.npcs.indexOf(n)%3-1)*1.3,z:Bt.stage.z+1.5+Math.floor(this.npcs.indexOf(n)%6/3)*1.2},n.path=[];return}this.toast(n.label+"："+(n.type==="reader"?"老師，我在看書。":"請不要在走廊奔跑。"));return}if(n.role==="visitor"){if(i?.kind==="seat"){let r=this.attempt.count;n.state="Seat",n.timer=0,n.target={x:-4+r*3,z:4},n.path=[],this.toast("家長：好的，我到座位等。")}else n.state="Gather",n.target={x:0,z:5.5},n.path=[];return}n.type==="dean"&&this.held?.type==="folder"?(n.cooldown=5,n.state="Idle",this.toast("主任開始整理資料夾"),this.returnItem(this.held.id)):this.toast(n.label+"："+(n.type==="principal"?"我的假髮在哪裡？":"物品使用完畢，請歸位。"));return}if(e.type==="item"){let n=this.objects.get(e.id);if(n.type==="trophy"&&this.held?.type==="principal_wig"){let a=this.held;this.drop(a.id,{x:n.x,z:n.z}),a.y=.65,this.toast("假髮放在獎盃上；離開房間等校長發現。");return}let r=vt[n.type];if(t==="restore"&&n.broken){n.broken=!1,n.state="settled",this.emit("restore",{id:n.id,zone:xt(n)});return}if(r.category.includes("fixed")){t==="mess"?(this.notice(n.type==="piano"?"亂按鋼琴":"咖啡泡沫噴出",6,"mess:"+n.id+":"+Math.floor(this.time/4)),this.emit("mess",{item:n.type,id:n.id,x:n.x,z:n.z}),this.player.action=n.type==="piano"?"piano":"play",this.player.actionTime=2):this.useItem(n);return}if(t==="push"||r.category.includes("pushable")&&!r.category.includes("portable")){this.pushItem(n);return}if(n.full){n.full=!1,n.broken=!0,this.notice("垃圾桶翻倒",6,"damage:"+n.id),this.emit("spill",{id:n.id});return}this.player.item?this.held.id===n.id?this.drop():this.toast("一次只能拿一件物品；R 放下"):this.take(n.id);return}if(e.type==="hide"||e.id==="hideTool"){this.hide(e.id);return}if(e.type==="stage"){if(i?.kind==="choir"){this.startChoir();return}if(i?.kind==="speech"){this.player.action="teach",this.pending.push({at:this.time+5,type:"speechDone",data:{},session:this.session}),this.emit("speech");return}if(i?.kind==="photo"){this.photo();return}this.rollCall();return}if(e.type==="prop"){let n=this.props.find(r=>r.id===e.id);if(e.id==="podium"){if(i?.kind==="answerTime")return"timeQuestion";if(i?.kind==="invigilate"){this.emit("invigilate");return}if(i?.kind==="collect"){this.emit("collect",{id:"paper:"+this.attempt.count});return}this.teach();return}if(n?.broken){n.broken=!1,n.hp=20,this.emit("restore",{id:n.id,zone:n.zone});return}if(["table","chair","bench","desk"].includes(n?.type)){let r=this.player.face,a=this.world.move(n,r.x*1.8,r.z*1.8,.4,n.id);n.x=a.x,n.z=a.z,this.refreshColliders(),this.emit("push",{id:n.id});return}this.toast("這是節奏練習。可以敲打，破損後可扶好。")}}pushItem(e){let t=gt(e.x-this.player.x,e.z-this.player.z),i=this.world.move(e,t.x*1.8,t.z*1.8,.4,e.id);e.x=i.x,e.z=i.z,e.state="settled",e.full=!1,e.rest=this.time,this.refreshColliders();for(let n of this.npcs)n.hp>0&&re(n,e)<.85&&!e.hit.has(n.id)&&(e.hit.add(n.id),this.damageNPC(n,6,"chair:"+e.id));this.emit("push",{id:e.id,item:e.type})}useItem(e=this.held){if(!e)return this.toast("拿起樂器、碼錶、掃把，或靠近鋼琴／咖啡機");let t=e.type;if(t==="coffee_machine"){let i=this.objects.get("coffee_cup:0")||this.createItem("coffee_cup","coffee_cup:0",{x:e.x+1,z:e.z});if(i.owner)return this.toast("先送回或放下上一杯");i.state="settled",i.broken=!1,this.attempt&&kn[this.attempt.mission].steps.some(n=>n.item==="coffee_cup")&&!i.pins.includes(this.attempt.id)&&i.pins.push(this.attempt.id),this.player.item||this.take(i.id),this.emit("coffee"),this.toast("咖啡好了。杯子在咖啡機旁");return}if(t==="stopwatch"){this.race={checkpoint:0,started:this.time,walkStart:null},this.emit("raceStart"),this.toast("四個路點：(-25,15) → (-25,21) → (-18,21) → (-18,15)，最後走到(-21,15)");return}if(t==="broom"){for(let i of this.objects.values())i.type==="trash_bin"&&re(i,this.player)<3&&(i.full=!1);this.emit("clean"),this.toast("掃好了");return}if(["recorder","piano","triangle","castanets","drumstick"].includes(t)){this.player.action=t==="piano"?"piano":"play",this.player.actionTime=2;let i=this.npcs.filter(n=>n.hp>0&&re(n,this.player)<6&&this.world.visible(n,this.player));for(let n of i)n.face=gt(this.player.x-n.x,this.player.z-n.z),n.role==="student"&&(n.state="Spectate",this.emit("audience",{npc:n.id}));this.emit("instrument",{item:t}),this.emit("performance",{item:t,zone:xt(this.player),audience:i.length}),this.notice("音樂練習的聲音",t==="piano"?3:1,"music:"+t+":"+Math.floor(this.time/2),this.player.id,6);return}this.toast("此物品可揮打、投擲、放下或歸還")}teach(){if(this.level>1||this.chase.some(e=>this.sees(e)))return this.toast("有人仍在追逐，無法假裝上課");this.player.action="teach",this.player.actionTime=5,this.pending.push({at:this.time+5,type:"teach",data:{zone:xt(this.player)},session:this.session}),this.emit("teaching"),this.toast("我們正在進行跨領域教學。")}photo(){let e=this.npcs.filter(i=>re(i,Bt.stage)<6&&i.hp>0&&["Gather","Idle","Seat"].includes(i.state)),t={students:e.filter(i=>i.role==="student").length,visitors:e.filter(i=>i.role==="visitor").length,wig:!!this.player.wig,glasses:!!this.player.glasses,broom:this.held?.type==="broom",mode:this.mode,time:Math.round(this.time)};if(t.students<3||t.visitors<1)return this.toast("先點名集合三位學生與一位訪客");this.profile.photoCards.push(t),this.profile.photoCards=this.profile.photoCards.slice(-12),this.emit("photo",t),this.onSave(),this.toast("合照紀念卡已儲存（程式構圖）")}respond(e,t){let i=this.npcs.find(r=>r.id===e);if(!i||re(i,this.player)>3)return;let n=["說明事實：請一起歸還物品。","一本正經：這是跨領域節奏研究。","結束談話：我們稍後再談。"];this.toast(i.label+"："+["了解，我來幫忙。","老師，這聽起來好奇怪。","好，我先回座位。"][t]),t===1&&(this.alert=Math.min(100,this.alert+2)),t===0&&(this.alert=Math.max(0,this.alert-2)),i.state=t===2?"Walk":"Idle",this.emit("respond",{npc:e,personality:i.type,choice:t,reply:n[t]})}shopAvailable(){let e=this.npcs.find(t=>t.type==="shop_aunt");return!!e&&e.hp>0&&!["Chase","Attack","Recover"].includes(e.state)&&re(e,this.player)<4}buyDrink(){if(!this.shopAvailable())return!1;let e=this.attempt?.mission==="q21"&&this.profile.points<10&&!this.attempt.meta.couponUsed;return this.player.hp<=0||(this.cooldowns.get("drink")||0)>this.time||this.profile.points<10&&!e?!1:(e?this.attempt.meta.couponUsed=!0:this.profile.points-=10,this.player.hp=Math.min(100,this.player.hp+30),this.cooldowns.set("drink",this.time+5),this.emit("drink"),this.onSave(),!0)}buyCosmetic(e){return this.shopAvailable()&&Kl(this.profile,e)?(this.onSave(),this.emit("purchase",{id:e}),!0):!1}service(){return!this.shopAvailable()||this.level!==0||this.chase.length||this.profile.serviceCooldown>0?!1:(this.profile.points+=10,this.profile.serviceCooldown=600,this.emit("service"),this.onSave(),!0)}startChoir(){this.choir||(this.choir={start:this.time,beat:0,hits:0,judged:new Set,offset:0},this.emit("choirStart"),this.toast("32拍，8次指揮提示。靜音也可完成。"))}conduct(){if(!this.choir)return;let e=this.time-this.choir.start,t=[3,7,11,15,19,23,27,31].find(i=>Math.abs(e-i*.75)<(this.profile.settings.assist?.35:.22));t!==void 0&&!this.choir.judged.has(t)?(this.choir.judged.add(t),this.choir.hits++,this.player.action="conduct",this.player.actionTime=.4,this.emit("conduct",{beat:t}),this.toast("拍子正確")):this.toast("跟著收圈提示，再試一次")}tutorialEvent(e){if(this.tutorial<0)return;let t=["move","take","deliverTutorial","visitMusic","dummy","throw","dodge","hide","openTasks"];e.type===t[this.tutorial]&&(this.tutorial++,this.tutorial>=t.length?this.finishTutorial():this.toast(this.tutorialText()))}tutorialText(){return["移動：WASD 或左下搖桿。","拿考卷：靠近辦公室考卷，E／互動。","把考卷送到教室講臺（E 放下）。","回到音樂教室。","到操場練習假人，J 揮打（不需攻擊人物）。","拿一件物品，Q 投擲。","K／空白鍵閃避。","到走廊工具間，互動藏入。","開今日待辦與行事曆。"][this.tutorial]||""}startTutorial(){this.tutorial=0,this.toast(this.tutorialText())}finishTutorial(){this.tutorial=-1,this.profile.tutorialFlags.includes("done")||(this.profile.tutorialFlags.push("done"),er(this.profile,"tutorial",20),this.onSave()),this.toast("教學完成／跳過，所有任務與活動都已開放")}tick(e,t={x:0,z:0,run:!1}){let i=performance.now();this.previous.set(this.player.id,{x:this.player.x,z:this.player.z});for(let c of this.npcs)this.previous.set(c.id,{x:c.x,z:c.z});for(let c of this.objects.values())this.previous.set(c.id,{x:c.x,z:c.z});this.time+=e,this.stats.ticks++,this.pathBudget=3;let n=this.player;for(let c of["inv","dodgeCooldown","attackCooldown","actionTime","slow"])n[c]=Math.max(0,n[c]-e);n.actionTime===0&&(n.action="idle");let r=gt(t.x,t.z),a=Math.min(1,Math.hypot(t.x,t.z)),l=(t.run?nn.run:nn.walk)*(this.held&&vt[this.held.type].heavy?.8:1)*(n.slow>0?.6:1);if(n.hidden&&(a=0),n.dodge>0){n.dodge=Math.max(0,n.dodge-e);let c=this.world.move(n,n.face.x*nn.dodge/nn.dodgeTime*e,n.face.z*nn.dodge/nn.dodgeTime*e);n.x=c.x,n.z=c.z}else if(a>.08){n.face=r;let c=this.world.move(n,r.x*l*a*e,r.z*l*a*e);xt(c)==="infirmary"&&xt(n)!=="infirmary"&&(this.level>1||this.chase.length)?this.toastCooldown("inf","先甩開追逐再來"):(n.x=c.x,n.z=c.z,n.action=t.run?"run":"walk",this.movement+=l*a*e,this.movement>1&&(this.movement=0,this.emit("move")))}if(this.tutorial===3&&xt(n)==="music_room"&&this.emit("visitMusic"),this.tutorial===2&&xt(n)==="classroom"&&this.held?.type==="exam_papers"&&re(n,Bt.podium)<3&&(this.drop(),this.emit("deliverTutorial")),n.attack){if(n.attack.age+=e,n.attack.age>=.12&&!n.attack.resolved){let c=n.attack;c.resolved=!0;let o=this.npcs.filter(u=>u.active&&u.hp>0&&re(u,n)<c.reach+.35&&this.world.visible(n,u)),d=0;for(let u of o){let p=gt(u.x-n.x,u.z-n.z);p.x*n.face.x+p.z*n.face.z<.6||d>=3||c.hit.has(u.id)||(c.hit.add(u.id),this.damageNPC(u,c.damage,c.id)&&d++)}for(let u of this.props)if(re(u,n)<c.reach+.4&&this.world.visible(n,u)){let p=gt(u.x-n.x,u.z-n.z);if(p.x*n.face.x+p.z*n.face.z<.5)continue;if(u.type==="dummy"){this.emit("dummy",{item:c.item});continue}c.item==="drumstick"&&(this.emit("strikeProp",{id:u.id,propType:u.type,item:c.item}),this.useItem()),u.hp-=c.damage,u.hp<=0&&!u.broken&&(u.broken=!0,this.emit("propDamaged",{id:u.id}),this.notice("家具翻倒",6,"damage:"+u.id))}if(c.item==="badminton_racket")for(let u of this.objects.values())u.state==="airborne"&&["soft_parcel","basketball","chalk_eraser"].includes(u.type)&&re(u,n)<2&&(u.vx=n.face.x*10,u.vz=n.face.z*10,u.owner=null,u.hit.clear(),u.hits=0,u.flight="reflected:"+c.id,this.emit("reflect",{id:u.id}))}n.attack?.age>.35&&(n.attack=null)}this.updateItems(e);let h=performance.now();this.updateNPCs(e),this.aiMs=performance.now()-h,this.updateSystems(e),this.tickMs=performance.now()-i}toastCooldown(e,t){(this.cooldowns.get("toast:"+e)||0)<this.time&&(this.cooldowns.set("toast:"+e,this.time+3),this.toast(t))}updateItems(e){for(let t of this.objects.values()){if(t.state==="held"||t.state==="worn"){let a=t.owner===this.player.id?this.player:this.npcs.find(l=>l.id===t.owner);a&&(t.x=a.x,t.z=a.z,t.y=t.state==="worn"?1.65:1.05);continue}if(t.state!=="airborne")continue;t.age+=e;let i={x:t.x+(t.vx||0)*e,z:t.z+(t.vz||0)*e},n={x:t.x,z:t.z};!this.world.visible(n,i)||Math.abs(i.x)>30||Math.abs(i.z)>24?(t.vx=-(t.vx||0)*.25,t.vz=-(t.vz||0)*.25):(t.x=i.x,t.z=i.z),t.vy=(t.vy||0)-9.8*e,t.y+=(t.vy||0)*e;let r=t.flight?.startsWith("npc:");if(t.y<2&&t.y>-.1){if(r){if(re(t,this.player)<.7&&!t.hit.has(this.player.id)){t.hit.add(this.player.id);let a=this.npcs.find(l=>t.flight.includes(l.id));a&&this.damagePlayer(8,a)}}else for(let a of this.npcs)a.active&&a.hp>0&&re(t,a)<.65&&!t.hit.has(a.id)&&t.hits<(t.type==="basketball"?2:1)&&(t.hit.add(a.id),t.hits++,this.damageNPC(a,vt[t.type]?.throwDamage||5,t.flight,!0));if(t.type==="basketball")for(let a of this.objects.values())a.type==="traffic_cone"&&!a.broken&&re(a,t)<.8&&(a.broken=!0,a.state="damaged",this.emit("coneDown",{id:a.id,item:"basketball"}))}if(t.y<=0)if(t.y=0,this.emit("land",{id:t.id,item:t.type},"system"),t.type==="basketball"&&t.age<2.5&&Math.abs(t.vy||0)>1.5)t.vy=Math.abs(t.vy||0)*.5,t.vx*=.65,t.vz*=.65;else if(t.type==="spinning_top"&&t.age<6){t.vy=0,t.vx*=.9,t.vz*=.9;for(let a of this.npcs)a.active&&a.hp>0&&re(a,t)<.7&&!t.hit.has(a.id)&&t.hits<3&&(t.hit.add(a.id),t.hits++,this.damageNPC(a,5,t.flight))}else Object.assign(t,{state:"settled",vx:0,vz:0,vy:0,rest:this.time}),t.type==="exam_papers"&&(t.papers=[{x:t.x-.5,z:t.z+.3,taken:!1},{x:t.x+.5,z:t.z+.3,taken:!1},{x:t.x,z:t.z-.5,taken:!1}]),t.broken=!["basketball","soft_parcel"].includes(t.type),this.checkDelivery(t),this.refreshColliders();t.age>8&&(t.state="settled",t.y=0,t.rest=this.time)}}moveNPC(e,t,i,n){if(re(e,t)<.2)return;e.repath<=0&&this.pathBudget>0&&(e.path=this.world.path(e,t),e.repath=.5+this.rng.next()*.15,this.pathBudget--);let r=e.path[0]||t;re(e,r)<.3&&(e.path.shift(),r=e.path[0]||t);let a=gt(r.x-e.x,r.z-e.z);e.face=a;let l=this.world.move(e,a.x*n*i,a.z*n*i,.32);e.x=l.x,e.z=l.z}updateNPCs(e){let t=this.profile.settings.quality==="low",i=t?16:20,n=t?10:12,r=o=>o.role==="parent"?0:["Chase","Attack","Search","Gather","Seat","Call"].includes(o.state)?1:2,a=[...this.npcs].sort((o,d)=>r(o)-r(d)||re(o,this.player)-re(d,this.player)),l=0,h=0;for(let o of a){let d=o.role==="parent"||["Chase","Search","Attack","Gather","Seat"].includes(o.state);o.active=(d||re(o,this.player)<24)&&l<i&&(o.role!=="student"||h<n),o.active&&(l++,o.role==="student"&&h++)}let c=0;for(let o of this.npcs){if(o.cooldown=Math.max(0,o.cooldown-e),o.repath-=e,o.contactCooldown=Math.max(0,o.contactCooldown),o.state==="Recover"){o.timer-=e,o.timer<=0&&(o.hp=o.maxHp,o.cooldown=2,o.state=o.role==="parent"?"Leave":"Idle",o.called=o.called||o.role==="parent",this.emit("npcRecovered",{id:o.id},o.id));continue}if(!o.active)continue;o.timer+=e,o.role==="staff"&&["Chase","Attack"].includes(o.state)&&c++>=2&&(o.state="Investigate",o.target={...o.lastSeen});const d=this.sees(o);if((o.role==="parent"||["Chase","Attack","Search"].includes(o.state))&&(d?(o.lastSeen={x:this.player.x,z:this.player.z},o.lost=0,o.state==="Search"&&(o.state="Chase")):(o.lost+=e,o.lost>2&&["Chase","Attack"].includes(o.state)&&(o.state="Search",o.timer=0,o.target={...o.lastSeen},this.emit("search",{npc:o.id},o.id),this.attempt&&(this.attempt.meta.searchSeen=!0)))),o.role==="staff"&&["principal","dean","guard_uncle"].includes(o.type)&&o.hp>0&&Math.floor(this.time*2)!==Math.floor((this.time-e)*2)){let u=[...this.objects.values()].find(p=>["laptop","principal_wig","principal_glasses","wall_clock"].includes(p.type)&&re(o,p.home)<7&&re(p,p.home)>2&&this.time-(this.cooldowns.get("missing:"+p.id)||-100)>20);u&&(this.cooldowns.set("missing:"+u.id,this.time),this.alert=Math.min(100,this.alert+6),this.reason="物品缺失被發現",o.state="Investigate",o.target={x:u.x,z:u.z},this.emit("missingFound",{id:u.id},o.id))}if(o.type==="principal"&&this.player.wig&&d&&o.intro===0&&(o.intro=2,o.cooldown=2,o.state="Surprise",o.timer=0,this.toast("校長：這個髮型……有點眼熟。")),o.state==="Surprise"){o.timer>2&&(o.state="Chase",o.timer=0);continue}switch(o.state){case"Idle":o.timer>4+o.turns&&(o.state="Walk",o.timer=0,o.target={x:o.home.x+(this.rng.next()-.5)*4,z:o.home.z+(this.rng.next()-.5)*4});break;case"Walk":this.moveNPC(o,o.target,e,1.2),re(o,o.target)<.4&&(o.state="Idle",o.timer=0);break;case"Investigate":this.moveNPC(o,o.target,e,1.8),re(o,o.target)<1&&o.timer>3&&(o.state=this.level>=2&&d?"Chase":"Idle",o.timer=0);break;case"Flee":{let u=gt(o.x-this.player.x,o.z-this.player.z),p={x:Math.max(-29,Math.min(29,o.x+u.x*4)),z:Math.max(-23,Math.min(23,o.z+u.z*4))};re(o,this.player)<5?this.moveNPC(o,p,e,3.4):o.callEligible&&!o.called&&this.time>=o.contactCooldown?(o.state="Call",o.timer=0):o.timer>6&&(o.state="Idle",o.timer=0);break}case"Call":o.hp>0&&o.timer>=2&&re(o,this.player)>2&&(o.called=!0,o.contactCooldown=this.time+90,this.queueParent(o.incident),this.emit("contactComplete",{npc:o.id,incident:o.incident},o.id),o.state="Flee",o.timer=0);break;case"Tattle":if(this.moveNPC(o,o.target,e,3),re(o,o.target)<2){(this.cooldowns.get("tattle:"+o.id)||0)<this.time&&(this.alert=Math.min(100,this.alert+8),this.cooldowns.set("tattle:"+o.id,this.time+30),this.emit("tattleComplete",{npc:o.id},o.id));let u=this.npcs.find(p=>p.type==="dean");u.state="Chase",u.lastSeen={...this.player},o.state="Idle",o.timer=0}break;case"Film":o.face=gt(this.player.x-o.x,this.player.z-o.z),d?(o.film+=e,o.film>=3&&(this.notice("學生拍攝完成",6,"film:"+o.id),o.state="Spectate",o.film=0)):(o.film>0&&this.time-o.lastFilmEscape>=5&&(this.emit("filmEscape",{npc:o.id},o.id),o.lastFilmEscape=this.time),o.state="Idle",o.film=0);break;case"Spectate":case"Mediate":{let u=re(o,this.player);if(u<3){let p=gt(o.x-this.player.x,o.z-this.player.z);this.moveNPC(o,{x:o.x+p.x*2,z:o.z+p.z*2},e,2)}else u>5&&u<10&&this.moveNPC(o,this.player,e,1.5);o.face=gt(this.player.x-o.x,this.player.z-o.z),o.timer>12&&(o.state="Idle",o.timer=0);break}case"Help":{let u=this.npcs.find(p=>p.role==="student"&&p.hp===0&&re(p,o)<5);u?(this.moveNPC(o,u,e,2),re(o,u)<1&&(u.timer=Math.max(0,u.timer-e))):o.timer>2&&(o.state="Chase");break}case"PickUp":{let u=[...this.objects.values()].filter(p=>!p.owner&&["settled","home"].includes(p.state)&&vt[p.type].category.includes("portable")&&!p.pins.length&&re(p,o)<5).sort((p,_)=>re(p,o)-re(_,o))[0];u?(this.moveNPC(o,u,e,2),re(o,u)<.7&&this.take(u.id,o.id)&&(o.state="ReturnItem",o.target={...u.home})):o.state="Idle";break}case"ReturnItem":if(o.item){let u=this.objects.get(o.item);this.moveNPC(o,u.home,e,2),re(o,u.home)<.8&&(this.detach(u),Object.assign(u,{...u.home,state:"home",y:0}),o.state="Idle")}else o.state="Idle";break;case"Prank":if(o.timer>1){let u=this.props.find(p=>!p.broken&&re(p,o)<3);u&&(u.broken=!0,this.emit("propDamaged",{id:u.id},o.id)),o.state="Idle",o.timer=-25}break;case"Gather":case"Seat":this.moveNPC(o,o.target,e,2),re(o,o.target)<.5&&(o.state==="Seat"&&this.emit("seat",{id:o.id}),o.state="Idle",o.timer=-30);break;case"Gate":o.timer>6&&(o.state="Idle");break;case"Guard":this.moveNPC(o,o.home,e,2.6),re(o,o.home)<1.5&&(re(o,this.player)<8&&d?o.state="Chase":o.timer>10&&(o.state="Leave"));break;case"Cover":o.face=gt(this.player.x-o.x,this.player.z-o.z),o.timer>.9&&(o.state="Chase");break;case"Clean":o.timer>3&&(o.state="Search",o.lost=3,o.target={...o.lastSeen},o.timer=0,this.emit("search",{npc:o.id},o.id));break;case"Search":this.moveNPC(o,o.target,e,2),this.player.hidden&&this.player.hideWitness&&re(o,this.player)<1.5&&(this.player.hidden=!1,this.toast("藏點被看見了！"),o.state="Chase"),o.timer>10&&(o.state=o.role==="parent"?"Leave":"Walk",o.target={...o.home},o.timer=0,this.emit("escape",{level:this.level},"system"));break;case"Enter":this.moveNPC(o,o.lastSeen,e,sn[o.type]?.speed||3),re(o,o.lastSeen)<4&&(o.state="Chase",o.lost=0,o.timer=0);break;case"Leave":this.moveNPC(o,{x:0,z:24},e,2.6),re(o,{x:0,z:24})<1&&(this.releaseNPC(o),this.npcs=this.npcs.filter(u=>u!==o));break;case"Chase":{if(o.cooldown>0)break;if(o.type==="duo"){let _=this.npcs.find(v=>v!==o&&v.group===o.group&&v.hp>0);if(_&&re(o,_)<4&&Math.floor(this.time/2)%2===o.turns%2){o.state="Cover",o.timer=0;break}}if(o.type==="camper"&&re(o,o.home)>8){o.lastSeen={...o.home},o.state="Search",o.timer=0;break}if(o.type==="protective"&&re(o,o.home)>8){o.state="Guard",o.timer=0;break}if(o.type==="shop_aunt"&&re(o,o.home)>9){o.state="Walk",o.target={...o.home};break}if(o.type==="neat"){let _=[...this.objects.values()].find(v=>["exam_papers","trash_bin"].includes(v.type)&&["settled","damaged"].includes(v.state)&&re(v,o)<5&&!o.cleaned.has(v.id));if(_){o.cleaned.add(_.id),o.state="Clean",o.timer=0,this.attempt&&(this.attempt.meta.cleanSeen=!0),this.emit("cleanParent",{id:o.id},o.id);break}}if(o.type==="yoga"&&this.player.attack&&o.turns<2){let _=this.player.face,v=this.world.move(o,_.z*1.2,-_.x*1.2);o.x=v.x,o.z=v.z,o.turns++,o.cooldown=.5;break}let u=["sports","pe_teacher"].includes(o.type)?4:["gardener","nagging","photographer","drama"].includes(o.type)?3:["shopping_bag","courier"].includes(o.type)?7:1.5,p=re(o,this.player);if(p<u&&d)o.state="Attack",o.timer=0,o.face=gt(this.player.x-o.x,this.player.z-o.z),o.attack={age:0,fired:!1,origin:{x:this.player.x,z:this.player.z}},this.emit("windup",{npc:o.id,ability:o.ability},o.id);else{let _=o.role==="student"?o.type==="athlete"?4:3:sn[o.type]?.speed||3;this.npcs.some(m=>m.type==="whistle"&&m.state==="Chase"&&re(m,o)<5)&&(_*=1.15);let v=d?this.player:o.lastSeen;o.type==="runner"&&p<6&&(v={x:this.player.x+Math.sin(o.timer*2)*2,z:this.player.z+Math.cos(o.timer*2)*2}),this.moveNPC(o,v,e,_)}break}case"Attack":{let u=o.attack;if(!u){o.state="Chase";break}u.age+=e;let p=o.type==="drama"?1.8:["armored","gardener","shopping_bag","courier","photographer","nagging"].includes(o.type)?.9:.55;if(u.age>=p&&!u.fired){u.fired=!0;let _=re(o,this.player);if(["shopping_bag","courier"].includes(o.type))this.npcProjectile(o,o.type==="courier"?"cardboard_box":"soft_parcel");else if(o.type==="sports"||o.type==="pe_teacher"){let v=gt(u.origin.x-o.x,u.origin.z-o.z),m=this.world.move(o,v.x*3,v.z*3);o.x=m.x,o.z=m.z,re(o,this.player)<1.2&&this.damagePlayer(10,o)}else _<(["gardener","nagging","photographer","drama"].includes(o.type)?3:1.8)&&this.world.visible(o,this.player)&&(this.damagePlayer(o.type==="armored"||o.type==="drama"?18:o.type==="spatula"?12:8,o),o.type==="nagging"&&(this.player.slow=1),o.type==="photographer"&&(this.player.slow=.3))}if(o.type==="spatula"&&u.age>.8&&u.age<1.4){let _=Math.floor(u.age/.3);u.combo!==_&&(u.combo=_,re(o,this.player)<1.7&&this.damagePlayer(6,o))}u.age>p+(o.type==="spatula"?1.2:.65)&&(o.state="Chase",o.attack=null,o.cooldown=["armored","drama","yoga","courier"].includes(o.type)?2:1,o.turns=0);break}}}}releaseNPC(e){if(this.previous.delete(e.id),e.item){let t=this.objects.get(e.item);this.detach(t),Object.assign(t,{x:e.x,z:e.z,y:0,state:"settled"})}}npcProjectile(e,t){if([...this.objects.values()].filter(l=>l.state==="airborne").length>=6)return;let n=Array.from({length:6},(l,h)=>`npc-projectile:${t}:${h}`).find(l=>{let h=this.objects.get(l);return!h||!h.owner&&!h.pins.length&&h.state!=="airborne"});if(!n)return;let r=this.objects.get(n)||this.createItem(t,n,e),a=gt(this.player.x-e.x,this.player.z-e.z);Object.assign(r,{x:e.x+a.x*.7,z:e.z+a.z*.7,y:1.2,state:"airborne",vx:a.x*7,vz:a.z*7,vy:2,age:0,flight:"npc:"+e.id+":"+ ++this.seq,hits:0}),r.hit.clear(),this.emit("projectile",{id:n},e.id)}updateSystems(e){for(let r of[...this.pending])r.at<=this.time&&(this.pending=this.pending.filter(a=>a!==r),r.session===this.session&&this.emit(r.type,r.data,r.type==="teach"?this.player.id:"system"));for(let r of[...this.familyQueue])r.at<=this.time&&this.parentCount()+sn[r.type].slotCost<=3&&(this.spawnParent(r.type),this.familyQueue=this.familyQueue.filter(a=>a!==r));let t=this.npcs.some(r=>r.active&&["Chase","Attack","Film"].includes(r.state)&&this.sees(r));if(this.time-this.lastTrouble>8&&!t){let r=this.level,a=this.alert;if(this.alert=Math.max(0,this.alert-e*(this.player.action==="teach"&&this.level<=1?3:2)),r!==this.level&&(this.emit("alertFall",{level:this.level},"system"),this.attempt&&this.attempt.meta.maxParents>=2&&this.emit("escape",{level:this.level},"system")),this.alert===0&&a>0){this.emit("naturalCalm",{},"system");for(let l of this.npcs.filter(h=>h.role==="student"))l.incident="",l.called=!1,l.retries=0,l.callEligible=!1}}this.profile.serviceCooldown=Math.max(0,this.profile.serviceCooldown-e);const i=this.attempt,n=this.step;if(i){let r=this.npcs.filter(a=>a.role==="parent"&&["Chase","Attack"].includes(a.state)).length;if(i.meta.maxParents=Math.max(i.meta.maxParents,r),i.meta.peakLevel=Math.max(i.meta.peakLevel||0,this.level),n.kind==="wearVisit"){let a=this.player.wig||this.player.glasses,l=this.objects.get(a);l?.type===n.item&&xt(this.player)===n.zone&&this.emit("wearVisit",{item:l.type,zone:n.zone})}if(n.kind==="place"){let a=0,l=[];for(let h=0;h<(n.count||1);h++){let c=Jn(n,h),o=n.item==="scene_table"?this.props.find(d=>d.type==="table"&&re(d,c)<1.3):[...this.objects.values()].find(d=>d.type===n.item&&d.pins.includes(i.id)&&!d.owner&&!l.includes(d.id)&&re(d,c)<1.3);o&&(a++,l.push(o.id))}a>=(n.count||1)?(i.meta.placeTime=(i.meta.placeTime||0)+e,i.meta.placeTime>=2&&(i.count=n.count||1,this.advance())):i.meta.placeTime=0}if(n.kind==="wigTrophy"){let a=[...this.objects.values()].find(h=>h.type==="principal_wig"),l=[...this.objects.values()].find(h=>h.type==="trophy");a&&!a.owner&&re(a,l)<1.4&&xt(this.player)!=="principal_room"&&(i.meta.wigTime=(i.meta.wigTime||0)+e,i.meta.wigTime>2&&this.emit("wigFound",{},"system"))}if(n.kind==="gather"){let a=this.npcs.filter(l=>l.role==="student"&&l.hp>0&&re(l,Bt.stage)<5&&i.meta.choristers?.includes(l.id));a.length>=6&&this.emit("gathered",{count:a.length},"system")}}if(this.race){let r=[{x:-25,z:15},{x:-25,z:21},{x:-18,z:21},{x:-18,z:15}],a=this.race;a.checkpoint<4&&re(this.player,r[a.checkpoint])<1.1?(a.checkpoint++,this.toast("路點 "+a.checkpoint+"/4")):a.checkpoint===4&&(this.player.action==="run"?a.walkStart=null:a.walkStart||(a.walkStart={...this.player}),re(this.player,{x:-21,z:15})<.9&&a.walkStart&&re(a.walkStart,this.player)>2&&(this.race=null,this.emit("raceDone")))}if(this.choir){let r=this.time-this.choir.start;if(this.choir.beat=Math.min(32,Math.floor(r/.75)),r>=24){let a=this.choir.hits;this.choir=null,this.emit("choirDone",{hits:a},"system"),this.toast(`曲段完成，命中 ${a}/8。失誤不阻止通關。`)}}if(this.player.wig&&xt(this.player)==="principal_room"){let r=this.npcs.find(a=>a.type==="principal");r&&this.sees(r)&&this.toastCooldown("wig","校長：我的髮型怎麼在老師頭上？")}for(let r of["classroom","music_room","staff_room","principal_room","courtyard","playground","gate","co_op","infirmary","corridor"])xt(this.player)===r?this.zoneAway.delete(r):this.zoneAway.has(r)||this.zoneAway.set(r,this.time);for(let r of this.objects.values())["settled","damaged"].includes(r.state)&&!r.pins.length&&this.time-r.rest>45&&this.time-(this.zoneAway.get(r.zone)??this.time)>45&&re(r,this.player)>24&&!this.cameraVisible(r)&&!this.chase.length&&this.level===0&&(Object.assign(r,{...r.home,state:"home",y:0,broken:!1,papers:void 0}),this.refreshColliders());for(let r of this.props)r.broken&&r.home&&!r.pins&&this.time-(this.zoneAway.get(r.zone)??this.time)>45&&re(r,this.player)>24&&!this.cameraVisible(r)&&!this.chase.length&&this.level===0&&(Object.assign(r,r.home,{broken:!1,hp:20}),this.refreshColliders());Math.floor(this.time/30)!==Math.floor((this.time-e)/30)&&this.onSave()}assertOwnership(){let e=[this.player.item,this.player.wig,this.player.glasses,...this.npcs.map(t=>t.item)].filter(Boolean);if(new Set(e).size!==e.length)throw Error("重複物件持有");for(let t of this.objects.values()){let i=["held","worn"].includes(t.state);if(i!==!!t.owner||i&&!e.includes(t.id))throw Error("物件狀態不一致 "+t.id)}return!0}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="180",tc=0,Ka=1,ic=2,rl=1,nc=2,_i=3,Ui=0,Nt=1,xi=2,Di=0,Tn=1,Za=2,Ja=3,Qa=4,sc=5,qi=100,rc=101,ac=102,oc=103,lc=104,cc=200,hc=201,uc=202,dc=203,Ur=204,Nr=205,fc=206,pc=207,mc=208,gc=209,_c=210,vc=211,xc=212,yc=213,Mc=214,Fr=0,Or=1,zr=2,Cn=3,kr=4,Br=5,Hr=6,Vr=7,wa=0,Sc=1,bc=2,Li=0,Ec=1,Tc=2,wc=3,Ac=4,Cc=5,Rc=6,Pc=7,al=300,Rn=301,Pn=302,Gr=303,Wr=304,$s=306,Xr=1e3,Yi=1001,qr=1002,Gt=1003,Dc=1004,hs=1005,ai=1006,tr=1007,ji=1008,ci=1009,ol=1010,ll=1011,es=1012,Aa=1013,Zi=1014,oi=1015,rs=1016,Ca=1017,Ra=1018,ts=1020,cl=35902,hl=35899,ul=1021,dl=1022,ti=1023,is=1026,ns=1027,Pa=1028,Da=1029,fl=1030,La=1031,Ia=1033,Fs=33776,Os=33777,zs=33778,ks=33779,$r=35840,Yr=35841,jr=35842,Kr=35843,Zr=36196,Jr=37492,Qr=37496,ea=37808,ta=37809,ia=37810,na=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,pa=36492,ma=36494,ga=36495,_a=36283,va=36284,xa=36285,ya=36286,Lc=3200,Ic=3201,pl=0,Uc=1,Pi="",Ht="srgb",Dn="srgb-linear",Vs="linear",Qe="srgb",rn=7680,eo=519,Nc=512,Fc=513,Oc=514,ml=515,zc=516,kc=517,Bc=518,Hc=519,Ma=35044,Vc=35048,to="300 es",li=2e3,Gs=2001;class Un{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,Sa=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function We(s,e,t){return Math.max(e,Math.min(t,s))}function Gc(s,e){return(s%e+e)%e}function nr(s,e,t){return(1-t)*s+t*e}function ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,l){let h=i[n+0],c=i[n+1],o=i[n+2],d=i[n+3];const u=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(l===0){e[t+0]=h,e[t+1]=c,e[t+2]=o,e[t+3]=d;return}if(l===1){e[t+0]=u,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||h!==u||c!==p||o!==_){let m=1-l;const f=h*u+c*p+o*_+d*v,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const C=Math.sqrt(E),A=Math.atan2(C,f*w);m=Math.sin(m*A)/C,l=Math.sin(l*A)/C}const S=l*w;if(h=h*m+u*S,c=c*m+p*S,o=o*m+_*S,d=d*m+v*S,m===1-l){const C=1/Math.sqrt(h*h+c*c+o*o+d*d);h*=C,c*=C,o*=C,d*=C}}e[t]=h,e[t+1]=c,e[t+2]=o,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,a){const l=i[n],h=i[n+1],c=i[n+2],o=i[n+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=l*_+o*d+h*p-c*u,e[t+1]=h*_+o*u+c*d-l*p,e[t+2]=c*_+o*p+l*u-h*d,e[t+3]=o*_-l*d-h*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,l=Math.cos,h=Math.sin,c=l(i/2),o=l(n/2),d=l(r/2),u=h(i/2),p=h(n/2),_=h(r/2);switch(a){case"XYZ":this._x=u*o*d+c*p*_,this._y=c*p*d-u*o*_,this._z=c*o*_+u*p*d,this._w=c*o*d-u*p*_;break;case"YXZ":this._x=u*o*d+c*p*_,this._y=c*p*d-u*o*_,this._z=c*o*_-u*p*d,this._w=c*o*d+u*p*_;break;case"ZXY":this._x=u*o*d-c*p*_,this._y=c*p*d+u*o*_,this._z=c*o*_+u*p*d,this._w=c*o*d-u*p*_;break;case"ZYX":this._x=u*o*d-c*p*_,this._y=c*p*d+u*o*_,this._z=c*o*_-u*p*d,this._w=c*o*d+u*p*_;break;case"YZX":this._x=u*o*d+c*p*_,this._y=c*p*d+u*o*_,this._z=c*o*_-u*p*d,this._w=c*o*d-u*p*_;break;case"XZY":this._x=u*o*d-c*p*_,this._y=c*p*d-u*o*_,this._z=c*o*_+u*p*d,this._w=c*o*d+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],l=t[5],h=t[9],c=t[2],o=t[6],d=t[10],u=i+l+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(o-h)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>l&&i>d){const p=2*Math.sqrt(1+i-l-d);this._w=(o-h)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(l>d){const p=2*Math.sqrt(1+l-i-d);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(h+o)/p}else{const p=2*Math.sqrt(1+d-i-l);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(h+o)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,l=t._x,h=t._y,c=t._z,o=t._w;return this._x=i*o+a*l+n*c-r*h,this._y=n*o+a*h+r*l-i*c,this._z=r*o+a*c+i*h-n*l,this._w=a*o-i*l-n*h-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let l=a*e._w+i*e._x+n*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const h=1-l*l;if(h<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(h),o=Math.atan2(c,l),d=Math.sin((1-t)*o)/c,u=Math.sin(t*o)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,l=e.z,h=e.w,c=2*(a*n-l*i),o=2*(l*t-r*n),d=2*(r*i-a*t);return this.x=t+h*c+a*d-l*o,this.y=i+h*o+l*c-r*d,this.z=n+h*d+r*o-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,l=t.y,h=t.z;return this.x=n*h-r*l,this.y=r*a-i*h,this.z=i*l-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new F,io=new as;class ze{constructor(e,t,i,n,r,a,l,h,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,l,h,c)}set(e,t,i,n,r,a,l,h,c){const o=this.elements;return o[0]=e,o[1]=n,o[2]=l,o[3]=t,o[4]=r,o[5]=h,o[6]=i,o[7]=a,o[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],l=i[3],h=i[6],c=i[1],o=i[4],d=i[7],u=i[2],p=i[5],_=i[8],v=n[0],m=n[3],f=n[6],w=n[1],E=n[4],S=n[7],C=n[2],A=n[5],R=n[8];return r[0]=a*v+l*w+h*C,r[3]=a*m+l*E+h*A,r[6]=a*f+l*S+h*R,r[1]=c*v+o*w+d*C,r[4]=c*m+o*E+d*A,r[7]=c*f+o*S+d*R,r[2]=u*v+p*w+_*C,r[5]=u*m+p*E+_*A,r[8]=u*f+p*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],o=e[8];return t*a*o-t*l*c-i*r*o+i*l*h+n*r*c-n*a*h}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],o=e[8],d=o*a-l*c,u=l*h-o*r,p=c*r-a*h,_=t*d+i*u+n*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(n*c-o*i)*v,e[2]=(l*i-n*a)*v,e[3]=u*v,e[4]=(o*t-n*h)*v,e[5]=(n*r-l*t)*v,e[6]=p*v,e[7]=(i*h-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,l){const h=Math.cos(r),c=Math.sin(r);return this.set(i*h,i*c,-i*(h*a+c*l)+a+e,-n*c,n*h,-n*(-c*a+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new ze;function gl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wc(){const s=Ws("canvas");return s.style.display="block",s}const no={};function ss(s){s in no||(no[s]=!0,console.warn(s))}function Xc(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const so=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qc(){const s={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(n.r=Mi(n.r),n.g=Mi(n.g),n.b=Mi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(n.r=wn(n.r),n.g=wn(n.g),n.b=wn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pi?Vs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Dn]:{primaries:e,whitePoint:i,transfer:Vs,toXYZ:so,fromXYZ:ro,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:so,fromXYZ:ro,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}const je=qc();function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let an;class $c{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{an===void 0&&(an=Ws("canvas")),an.width=e.width,an.height=e.height;const n=an.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=an}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yc=0;class Ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,l=n.length;a<l;a++)n[a].isDataTexture?r.push(ar(n[a].image)):r.push(ar(n[a]))}else r=ar(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function ar(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jc=0;const or=new F;class Rt extends Un{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=Yi,n=Yi,r=ai,a=ji,l=ti,h=ci,c=Rt.DEFAULT_ANISOTROPY,o=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ii(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(or).x}get height(){return this.source.getSize(or).y}get depth(){return this.source.getSize(or).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=al;Rt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,n=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const h=e.elements,c=h[0],o=h[4],d=h[8],u=h[1],p=h[5],_=h[9],v=h[2],m=h[6],f=h[10];if(Math.abs(o-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(o+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,C=(f+1)/2,A=(o+u)/4,R=(d+v)/4,N=(_+m)/4;return E>S&&E>C?E<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(E),n=A/i,r=R/i):S>C?S<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(S),i=A/n,r=N/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=R/r,n=N/r),this.set(i,n,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(u-o)*(u-o));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(d-v)/w,this.z=(u-o)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kc extends Un{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const n={width:e,height:t,depth:i.depth},r=new Rt(n);this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ua(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Kc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _l extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zc extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bn),ds.subVectors(this.max,Bn),on.subVectors(e.a,Bn),ln.subVectors(e.b,Bn),cn.subVectors(e.c,Bn),bi.subVectors(ln,on),Ei.subVectors(cn,ln),zi.subVectors(on,cn);let t=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-zi.z,zi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,zi.z,0,-zi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-zi.y,zi.x,0];return!lr(t,on,ln,cn,ds)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,on,ln,cn,ds))?!1:(fs.crossVectors(bi,Ei),t=[fs.x,fs.y,fs.z],lr(t,on,ln,cn,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new F,new F,new F,new F,new F,new F,new F,new F],Zt=new F,us=new en,on=new F,ln=new F,cn=new F,bi=new F,Ei=new F,zi=new F,Bn=new F,ds=new F,fs=new F,ki=new F;function lr(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ki.fromArray(s,r);const l=n.x*Math.abs(ki.x)+n.y*Math.abs(ki.y)+n.z*Math.abs(ki.z),h=e.dot(ki),c=t.dot(ki),o=i.dot(ki);if(Math.max(-Math.max(h,c,o),Math.min(h,c,o))>l)return!1}return!0}const Jc=new en,Hn=new F,cr=new F;class os{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jc.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hn.subVectors(e,this.center);const t=Hn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Hn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hn.copy(e.center).add(cr)),this.expandByPoint(Hn.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new F,hr=new F,ps=new F,Ti=new F,ur=new F,ms=new F,dr=new F;class vl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){hr.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(hr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ps),l=Ti.dot(this.direction),h=-Ti.dot(ps),c=Ti.lengthSq(),o=Math.abs(1-a*a);let d,u,p,_;if(o>0)if(d=a*h-l,u=a*l-h,_=r*o,d>=0)if(u>=-_)if(u<=_){const v=1/o;d*=v,u*=v,p=d*(d+a*u+2*l)+u*(a*d+u+2*h)+c}else u=r,d=Math.max(0,-(a*u+l)),p=-d*d+u*(u+2*h)+c;else u=-r,d=Math.max(0,-(a*u+l)),p=-d*d+u*(u+2*h)+c;else u<=-_?(d=Math.max(0,-(-a*r+l)),u=d>0?-r:Math.min(Math.max(-r,-h),r),p=-d*d+u*(u+2*h)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-h),r),p=u*(u+2*h)+c):(d=Math.max(0,-(a*r+l)),u=d>0?r:Math.min(Math.max(-r,-h),r),p=-d*d+u*(u+2*h)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+l)),p=-d*d+u*(u+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(hr).addScaledVector(ps,u),p}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),n=fi.dot(fi)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),l=i-a,h=i+a;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,l,h;const c=1/this.direction.x,o=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),o>=0?(r=(e.min.y-u.y)*o,a=(e.max.y-u.y)*o):(r=(e.max.y-u.y)*o,a=(e.min.y-u.y)*o),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(l=(e.min.z-u.z)*d,h=(e.max.z-u.z)*d):(l=(e.max.z-u.z)*d,h=(e.min.z-u.z)*d),i>h||l>n)||((l>i||i!==i)&&(i=l),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,n,r){ur.subVectors(t,e),ms.subVectors(i,e),dr.crossVectors(ur,ms);let a=this.direction.dot(dr),l;if(a>0){if(n)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const h=l*this.direction.dot(ms.crossVectors(Ti,ms));if(h<0)return null;const c=l*this.direction.dot(ur.cross(Ti));if(c<0||h+c>a)return null;const o=-l*Ti.dot(dr);return o<0?null:this.at(o/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,n,r,a,l,h,c,o,d,u,p,_,v,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,l,h,c,o,d,u,p,_,v,m)}set(e,t,i,n,r,a,l,h,c,o,d,u,p,_,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=l,f[13]=h,f[2]=c,f[6]=o,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/hn.setFromMatrixColumn(e,0).length(),r=1/hn.setFromMatrixColumn(e,1).length(),a=1/hn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),h=Math.cos(n),c=Math.sin(n),o=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*o,p=a*d,_=l*o,v=l*d;t[0]=h*o,t[4]=-h*d,t[8]=c,t[1]=p+_*c,t[5]=u-v*c,t[9]=-l*h,t[2]=v-u*c,t[6]=_+p*c,t[10]=a*h}else if(e.order==="YXZ"){const u=h*o,p=h*d,_=c*o,v=c*d;t[0]=u+v*l,t[4]=_*l-p,t[8]=a*c,t[1]=a*d,t[5]=a*o,t[9]=-l,t[2]=p*l-_,t[6]=v+u*l,t[10]=a*h}else if(e.order==="ZXY"){const u=h*o,p=h*d,_=c*o,v=c*d;t[0]=u-v*l,t[4]=-a*d,t[8]=_+p*l,t[1]=p+_*l,t[5]=a*o,t[9]=v-u*l,t[2]=-a*c,t[6]=l,t[10]=a*h}else if(e.order==="ZYX"){const u=a*o,p=a*d,_=l*o,v=l*d;t[0]=h*o,t[4]=_*c-p,t[8]=u*c+v,t[1]=h*d,t[5]=v*c+u,t[9]=p*c-_,t[2]=-c,t[6]=l*h,t[10]=a*h}else if(e.order==="YZX"){const u=a*h,p=a*c,_=l*h,v=l*c;t[0]=h*o,t[4]=v-u*d,t[8]=_*d+p,t[1]=d,t[5]=a*o,t[9]=-l*o,t[2]=-c*o,t[6]=p*d+_,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*h,p=a*c,_=l*h,v=l*c;t[0]=h*o,t[4]=-d,t[8]=c*o,t[1]=u*d+v,t[5]=a*o,t[9]=p*d-_,t[2]=_*d-p,t[6]=l*o,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qc,e,eh)}lookAt(e,t,i){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),wi.crossVectors(i,zt),wi.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),wi.crossVectors(i,zt)),wi.normalize(),gs.crossVectors(zt,wi),n[0]=wi.x,n[4]=gs.x,n[8]=zt.x,n[1]=wi.y,n[5]=gs.y,n[9]=zt.y,n[2]=wi.z,n[6]=gs.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],l=i[4],h=i[8],c=i[12],o=i[1],d=i[5],u=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],w=i[3],E=i[7],S=i[11],C=i[15],A=n[0],R=n[4],N=n[8],M=n[12],y=n[1],P=n[5],z=n[9],H=n[13],Y=n[2],q=n[6],$=n[10],J=n[14],V=n[3],le=n[7],fe=n[11],we=n[15];return r[0]=a*A+l*y+h*Y+c*V,r[4]=a*R+l*P+h*q+c*le,r[8]=a*N+l*z+h*$+c*fe,r[12]=a*M+l*H+h*J+c*we,r[1]=o*A+d*y+u*Y+p*V,r[5]=o*R+d*P+u*q+p*le,r[9]=o*N+d*z+u*$+p*fe,r[13]=o*M+d*H+u*J+p*we,r[2]=_*A+v*y+m*Y+f*V,r[6]=_*R+v*P+m*q+f*le,r[10]=_*N+v*z+m*$+f*fe,r[14]=_*M+v*H+m*J+f*we,r[3]=w*A+E*y+S*Y+C*V,r[7]=w*R+E*P+S*q+C*le,r[11]=w*N+E*z+S*$+C*fe,r[15]=w*M+E*H+S*J+C*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],l=e[5],h=e[9],c=e[13],o=e[2],d=e[6],u=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15];return _*(+r*h*d-n*c*d-r*l*u+i*c*u+n*l*p-i*h*p)+v*(+t*h*p-t*c*u+r*a*u-n*a*p+n*c*o-r*h*o)+m*(+t*c*d-t*l*p-r*a*d+i*a*p+r*l*o-i*c*o)+f*(-n*l*o-t*h*d+t*l*u+n*a*d-i*a*u+i*h*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],l=e[5],h=e[6],c=e[7],o=e[8],d=e[9],u=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],w=d*m*c-v*u*c+v*h*p-l*m*p-d*h*f+l*u*f,E=_*u*c-o*m*c-_*h*p+a*m*p+o*h*f-a*u*f,S=o*v*c-_*d*c+_*l*p-a*v*p-o*l*f+a*d*f,C=_*d*h-o*v*h-_*l*u+a*v*u+o*l*m-a*d*m,A=t*w+i*E+n*S+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=w*R,e[1]=(v*u*r-d*m*r-v*n*p+i*m*p+d*n*f-i*u*f)*R,e[2]=(l*m*r-v*h*r+v*n*c-i*m*c-l*n*f+i*h*f)*R,e[3]=(d*h*r-l*u*r-d*n*c+i*u*c+l*n*p-i*h*p)*R,e[4]=E*R,e[5]=(o*m*r-_*u*r+_*n*p-t*m*p-o*n*f+t*u*f)*R,e[6]=(_*h*r-a*m*r-_*n*c+t*m*c+a*n*f-t*h*f)*R,e[7]=(a*u*r-o*h*r+o*n*c-t*u*c-a*n*p+t*h*p)*R,e[8]=S*R,e[9]=(_*d*r-o*v*r-_*i*p+t*v*p+o*i*f-t*d*f)*R,e[10]=(a*v*r-_*l*r+_*i*c-t*v*c-a*i*f+t*l*f)*R,e[11]=(o*l*r-a*d*r-o*i*c+t*d*c+a*i*p-t*l*p)*R,e[12]=C*R,e[13]=(o*v*n-_*d*n+_*i*u-t*v*u-o*i*m+t*d*m)*R,e[14]=(_*l*n-a*v*n-_*i*h+t*v*h+a*i*m-t*l*m)*R,e[15]=(a*d*n-o*l*n+o*i*h-t*d*h-a*i*u+t*l*u)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,l=e.y,h=e.z,c=r*a,o=r*l;return this.set(c*a+i,c*l-n*h,c*h+n*l,0,c*l+n*h,o*l+i,o*h-n*a,0,c*h-n*l,o*h+n*a,r*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,l=t._z,h=t._w,c=r+r,o=a+a,d=l+l,u=r*c,p=r*o,_=r*d,v=a*o,m=a*d,f=l*d,w=h*c,E=h*o,S=h*d,C=i.x,A=i.y,R=i.z;return n[0]=(1-(v+f))*C,n[1]=(p+S)*C,n[2]=(_-E)*C,n[3]=0,n[4]=(p-S)*A,n[5]=(1-(u+f))*A,n[6]=(m+w)*A,n[7]=0,n[8]=(_+E)*R,n[9]=(m-w)*R,n[10]=(1-(u+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=hn.set(n[0],n[1],n[2]).length();const a=hn.set(n[4],n[5],n[6]).length(),l=hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);const c=1/r,o=1/a,d=1/l;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=o,Jt.elements[5]*=o,Jt.elements[6]*=o,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),i.x=r,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,a,l=li,h=!1){const c=this.elements,o=2*r/(t-e),d=2*r/(i-n),u=(t+e)/(t-e),p=(i+n)/(i-n);let _,v;if(h)_=r/(a-r),v=a*r/(a-r);else if(l===li)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===Gs)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=o,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,l=li,h=!1){const c=this.elements,o=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),p=-(i+n)/(i-n);let _,v;if(h)_=1/(a-r),v=a/(a-r);else if(l===li)_=-2/(a-r),v=-(a+r)/(a-r);else if(l===Gs)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=o,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hn=new F,Jt=new st,Qc=new F(0,0,0),eh=new F(1,1,1),wi=new F,gs=new F,zt=new F,ao=new st,oo=new as;class hi{constructor(e=0,t=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],l=n[8],h=n[1],c=n[5],o=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-o,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-o,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-o,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let th=0;const lo=new F,un=new as,pi=new st,_s=new F,Vn=new F,ih=new F,nh=new as,co=new F(1,0,0),ho=new F(0,1,0),uo=new F(0,0,1),fo={type:"added"},sh={type:"removed"},dn={type:"childadded",child:null},fr={type:"childremoved",child:null};class yt extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new F,t=new hi,i=new as,n=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new st},normalMatrix:{value:new ze}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(ho,e)}rotateZ(e){return this.rotateOnAxis(uo,e)}translateOnAxis(e,t){return lo.copy(e).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(ho,e)}translateZ(e){return this.translateOnAxis(uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Vn,_s,this.up):pi.lookAt(_s,Vn,this.up),this.quaternion.setFromRotationMatrix(pi),n&&(pi.extractRotation(n.matrixWorld),un.setFromRotationMatrix(pi),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fo),dn.child=e,this.dispatchEvent(dn),dn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sh),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fo),dn.child=e,this.dispatchEvent(dn),dn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(l=>({...l})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let c=0,o=h.length;c<o;c++){const d=h[c];r(e.shapes,d)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,c=this.material.length;h<c;h++)l.push(r(e.materials,this.material[h]));n.material=l}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let l=0;l<this.children.length;l++)n.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];n.animations.push(r(e.animations,h))}}if(t){const l=a(e.geometries),h=a(e.materials),c=a(e.textures),o=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);l.length>0&&(i.geometries=l),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),o.length>0&&(i.images=o),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(l){const h=[];for(const c in l){const o=l[c];delete o.metadata,h.push(o)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}yt.DEFAULT_UP=new F(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new F,mi=new F,pr=new F,gi=new F,fn=new F,pn=new F,po=new F,mr=new F,gr=new F,_r=new F,vr=new pt,xr=new pt,yr=new pt;class Yt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Qt.subVectors(e,t),n.cross(Qt);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Qt.subVectors(n,t),mi.subVectors(i,t),pr.subVectors(e,t);const a=Qt.dot(Qt),l=Qt.dot(mi),h=Qt.dot(pr),c=mi.dot(mi),o=mi.dot(pr),d=a*c-l*l;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*h-l*o)*u,_=(a*o-l*h)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,n,r,a,l,h){return this.getBarycoord(e,t,i,n,gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,gi.x),h.addScaledVector(a,gi.y),h.addScaledVector(l,gi.z),h)}static getInterpolatedAttribute(e,t,i,n,r,a){return vr.setScalar(0),xr.setScalar(0),yr.setScalar(0),vr.fromBufferAttribute(e,t),xr.fromBufferAttribute(e,i),yr.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(vr,r.x),a.addScaledVector(xr,r.y),a.addScaledVector(yr,r.z),a}static isFrontFacing(e,t,i,n){return Qt.subVectors(i,t),mi.subVectors(e,t),Qt.cross(mi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Qt.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,l;fn.subVectors(n,i),pn.subVectors(r,i),mr.subVectors(e,i);const h=fn.dot(mr),c=pn.dot(mr);if(h<=0&&c<=0)return t.copy(i);gr.subVectors(e,n);const o=fn.dot(gr),d=pn.dot(gr);if(o>=0&&d<=o)return t.copy(n);const u=h*d-o*c;if(u<=0&&h>=0&&o<=0)return a=h/(h-o),t.copy(i).addScaledVector(fn,a);_r.subVectors(e,r);const p=fn.dot(_r),_=pn.dot(_r);if(_>=0&&p<=_)return t.copy(r);const v=p*c-h*_;if(v<=0&&c>=0&&_<=0)return l=c/(c-_),t.copy(i).addScaledVector(pn,l);const m=o*_-p*d;if(m<=0&&d-o>=0&&p-_>=0)return po.subVectors(r,n),l=(d-o)/(d-o+(p-_)),t.copy(n).addScaledVector(po,l);const f=1/(m+v+u);return a=v*f,l=u*f,t.copy(i).addScaledVector(fn,a).addScaledVector(pn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Mr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=je.workingColorSpace){if(e=Gc(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Mr(a,r,e+1/3),this.g=Mr(a,r,e),this.b=Mr(a,r,e-1/3)}return je.colorSpaceToWorking(this,n),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],l=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=xl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return je.workingToColorSpace(Ct.copy(this),e),Math.round(We(Ct.r*255,0,255))*65536+Math.round(We(Ct.g*255,0,255))*256+Math.round(We(Ct.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,n=Ct.g,r=Ct.b,a=Math.max(i,n,r),l=Math.min(i,n,r);let h,c;const o=(l+a)/2;if(l===a)h=0,c=0;else{const d=a-l;switch(c=o<=.5?d/(a+l):d/(2-a-l),a){case i:h=(n-r)/d+(n<r?6:0);break;case n:h=(r-i)/d+2;break;case r:h=(i-n)/d+4;break}h/=6}return e.h=h,e.s=c,e.l=o,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Ht){je.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,n=Ct.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(vs);const i=nr(Ai.h,vs.h,t),n=nr(Ai.s,vs.s,t),r=nr(Ai.l,vs.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new $e;$e.NAMES=xl;let rh=0;class Nn extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Tn,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Nr,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Cn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rn,this.stencilZFail=rn,this.stencilZPass=rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tn&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ur&&(i.blendSrc=this.blendSrc),this.blendDst!==Nr&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const l in r){const h=r[l];delete h.metadata,a.push(h)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yl extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new F,xs=new ke;let ah=0;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ma,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),e}}class Ml extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sl extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let oh=0;const qt=new st,Sr=new yt,mn=new F,kt=new en,Gn=new en,Tt=new F;class Kt extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?Sl:Ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(Tt.addVectors(kt.min,Gn.min),kt.expandByPoint(Tt),Tt.addVectors(kt.max,Gn.max),kt.expandByPoint(Tt)):(kt.expandByPoint(Gn.min),kt.expandByPoint(Gn.max))}kt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],h=this.morphTargetsRelative;for(let c=0,o=l.count;c<o;c++)Tt.fromBufferAttribute(l,c),h&&(mn.fromBufferAttribute(e,c),Tt.add(mn)),n=Math.max(n,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],h=[];for(let N=0;N<i.count;N++)l[N]=new F,h[N]=new F;const c=new F,o=new F,d=new F,u=new ke,p=new ke,_=new ke,v=new F,m=new F;function f(N,M,y){c.fromBufferAttribute(i,N),o.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),u.fromBufferAttribute(r,N),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),o.sub(c),d.sub(c),p.sub(u),_.sub(u);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(o).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(o,-_.x).multiplyScalar(P),l[N].add(v),l[M].add(v),l[y].add(v),h[N].add(m),h[M].add(m),h[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,M=w.length;N<M;++N){const y=w[N],P=y.start,z=y.count;for(let H=P,Y=P+z;H<Y;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new F,S=new F,C=new F,A=new F;function R(N){C.fromBufferAttribute(n,N),A.copy(C);const M=l[N];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(A,M);const P=S.dot(h[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,P)}for(let N=0,M=w.length;N<M;++N){const y=w[N],P=y.start,z=y.count;for(let H=P,Y=P+z;H<Y;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new F,r=new F,a=new F,l=new F,h=new F,c=new F,o=new F,d=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),o.subVectors(a,r),d.subVectors(n,r),o.cross(d),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),l.add(o),h.add(o),c.add(o),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),o.subVectors(a,r),d.subVectors(n,r),o.cross(d),i.setXYZ(u+0,o.x,o.y,o.z),i.setXYZ(u+1,o.x,o.y,o.z),i.setXYZ(u+2,o.x,o.y,o.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(l,h){const c=l.array,o=l.itemSize,d=l.normalized,u=new c.constructor(h.length*o);let p=0,_=0;for(let v=0,m=h.length;v<m;v++){l.isInterleavedBufferAttribute?p=h[v]*l.data.stride+l.offset:p=h[v]*o;for(let f=0;f<o;f++)u[_++]=c[p++]}return new jt(u,o,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,n=this.attributes;for(const l in n){const h=n[l],c=e(h,i);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const h=[],c=r[l];for(let o=0,d=c.length;o<d;o++){const u=c[o],p=e(u,i);h.push(p)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,h=a.length;l<h;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const c=i[h];e.data.attributes[h]=c.toJSON(e.data)}const n={};let r=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],o=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];o.push(p.toJSON(e.data))}o.length>0&&(n[h]=o,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const o=n[c];this.setAttribute(c,o.clone(t))}const r=e.morphAttributes;for(const c in r){const o=[],d=r[c];for(let u=0,p=d.length;u<p;u++)o.push(d[u].clone(t));this.morphAttributes[c]=o}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,o=a.length;c<o;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new st,Bi=new vl,ys=new os,go=new F,Ms=new F,Ss=new F,bs=new F,br=new F,Es=new F,_o=new F,Ts=new F;class ii extends yt{constructor(e=new Kt,t=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const l=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const l=this.morphTargetInfluences;if(r&&l){Es.set(0,0,0);for(let h=0,c=r.length;h<c;h++){const o=l[h],d=r[h];o!==0&&(br.fromBufferAttribute(d,e),a?Es.addScaledVector(br,o):Es.addScaledVector(br.sub(t),o))}t.add(Es)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(ys.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ys,go)===null||Bi.origin.distanceToSquared(go)>(e.far-e.near)**2))&&(mo.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(mo),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,l=r.index,h=r.attributes.position,c=r.attributes.uv,o=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){const m=u[_],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,C=E;S<C;S+=3){const A=l.getX(S),R=l.getX(S+1),N=l.getX(S+2);n=ws(this,f,e,i,c,o,d,A,R,N),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const w=l.getX(m),E=l.getX(m+1),S=l.getX(m+2);n=ws(this,a,e,i,c,o,d,w,E,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(h!==void 0)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){const m=u[_],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(h.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,C=E;S<C;S+=3){const A=S,R=S+1,N=S+2;n=ws(this,f,e,i,c,o,d,A,R,N),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,p.start),v=Math.min(h.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const w=m,E=m+1,S=m+2;n=ws(this,a,e,i,c,o,d,w,E,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function lh(s,e,t,i,n,r,a,l){let h;if(e.side===Nt?h=i.intersectTriangle(a,r,n,!0,l):h=i.intersectTriangle(n,r,a,e.side===Ui,l),h===null)return null;Ts.copy(l),Ts.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:s}}function ws(s,e,t,i,n,r,a,l,h,c){s.getVertexPosition(l,Ms),s.getVertexPosition(h,Ss),s.getVertexPosition(c,bs);const o=lh(s,e,t,i,Ms,Ss,bs,_o);if(o){const d=new F;Yt.getBarycoord(_o,Ms,Ss,bs,d),n&&(o.uv=Yt.getInterpolatedAttribute(n,l,h,c,d,new ke)),r&&(o.uv1=Yt.getInterpolatedAttribute(r,l,h,c,d,new ke)),a&&(o.normal=Yt.getInterpolatedAttribute(a,l,h,c,d,new F),o.normal.dot(i.direction)>0&&o.normal.multiplyScalar(-1));const u={a:l,b:h,c,normal:new F,materialIndex:0};Yt.getNormal(Ms,Ss,bs,u.normal),o.face=u,o.barycoord=d}return o}class Fn extends Kt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const l=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const h=[],c=[],o=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(h),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(o,3)),this.setAttribute("uv",new Mt(d,2));function _(v,m,f,w,E,S,C,A,R,N,M){const y=S/R,P=C/N,z=S/2,H=C/2,Y=A/2,q=R+1,$=N+1;let J=0,V=0;const le=new F;for(let fe=0;fe<$;fe++){const we=fe*P-H;for(let Ve=0;Ve<q;Ve++){const it=Ve*y-z;le[v]=it*w,le[m]=we*E,le[f]=Y,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[f]=A>0?1:-1,o.push(le.x,le.y,le.z),d.push(Ve/R),d.push(1-fe/N),J+=1}}for(let fe=0;fe<N;fe++)for(let we=0;we<R;we++){const Ve=u+we+q*fe,it=u+we+q*(fe+1),at=u+(we+1)+q*(fe+1),Ke=u+(we+1)+q*fe;h.push(Ve,it,Ke),h.push(it,at,Ke),V+=6}l.addGroup(p,V,M),p+=V,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ln(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const i=Ln(s[t]);for(const n in i)e[n]=i[n]}return e}function ch(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const hh={clone:Ln,merge:It};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ln(e.uniforms),this.uniformsGroups=ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class El extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new F,vo=new ke,xo=new ke;class ei extends El{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,vo,xo),t.subVectors(xo,vo)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/h,t-=a.offsetY*i/c,n*=a.width/h,i*=a.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gn=-90,_n=1;class fh extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ei(gn,_n,e,t);n.layers=this.layers,this.add(n);const r=new ei(gn,_n,e,t);r.layers=this.layers,this.add(r);const a=new ei(gn,_n,e,t);a.layers=this.layers,this.add(a);const l=new ei(gn,_n,e,t);l.layers=this.layers,this.add(l);const h=new ei(gn,_n,e,t);h.layers=this.layers,this.add(h);const c=new ei(gn,_n,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,l,h]=t;for(const c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,h,c,o]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,l),e.setRenderTarget(i,3,n),e.render(t,h),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,o),e.setRenderTarget(d,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tl extends Rt{constructor(e=[],t=Rn,i,n,r,a,l,h,c,o){super(e,t,i,n,r,a,l,h,c,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ph extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Tl(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Fn(5,5,5),r=new Ni({name:"CubemapFromEquirect",uniforms:Ln(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Di});r.uniforms.tEquirect.value=t;const a=new ii(n,r),l=t.minFilter;return t.minFilter===ji&&(t.minFilter=ai),new fh(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}class As extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mh={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const l=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const o=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=o.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mh)))}return l!==null&&(l.visible=n!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new As;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gh extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _h{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ma,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new F;class Xs{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wl extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vn;const Wn=new F,xn=new F,yn=new F,Mn=new ke,Xn=new ke,Al=new st,Cs=new F,qn=new F,Rs=new F,yo=new ke,Tr=new ke,Mo=new ke;class vh extends yt{constructor(e=new wl){if(super(),this.isSprite=!0,this.type="Sprite",vn===void 0){vn=new Kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _h(t,5);vn.setIndex([0,1,2,0,2,3]),vn.setAttribute("position",new Xs(i,3,0,!1)),vn.setAttribute("uv",new Xs(i,2,3,!1))}this.geometry=vn,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xn.setFromMatrixScale(this.matrixWorld),Al.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xn.multiplyScalar(-yn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Ps(Cs.set(-.5,-.5,0),yn,a,xn,n,r),Ps(qn.set(.5,-.5,0),yn,a,xn,n,r),Ps(Rs.set(.5,.5,0),yn,a,xn,n,r),yo.set(0,0),Tr.set(1,0),Mo.set(1,1);let l=e.ray.intersectTriangle(Cs,qn,Rs,!1,Wn);if(l===null&&(Ps(qn.set(-.5,.5,0),yn,a,xn,n,r),Tr.set(0,1),l=e.ray.intersectTriangle(Cs,Rs,qn,!1,Wn),l===null))return;const h=e.ray.origin.distanceTo(Wn);h<e.near||h>e.far||t.push({distance:h,point:Wn.clone(),uv:Yt.getInterpolation(Wn,Cs,qn,Rs,yo,Tr,Mo,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ps(s,e,t,i,n,r){Mn.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Xn.x=r*Mn.x-n*Mn.y,Xn.y=n*Mn.x+r*Mn.y):Xn.copy(Mn),s.copy(e),s.x+=Xn.x,s.y+=Xn.y,s.applyMatrix4(Al)}class xh extends Rt{constructor(e=null,t=1,i=1,n,r,a,l,h,c=Gt,o=Gt,d,u){super(null,a,l,h,c,o,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So extends jt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sn=new st,bo=new st,Ds=[],Eo=new en,yh=new st,$n=new ii,Yn=new os;class Mh extends ii{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new So(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,yh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sn),Eo.copy(e.boundingBox).applyMatrix4(Sn),this.boundingBox.union(Eo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sn),Yn.copy(e.boundingSphere).applyMatrix4(Sn),this.boundingSphere.union(Yn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=n[a+l]}raycast(e,t){const i=this.matrixWorld,n=this.count;if($n.geometry=this.geometry,$n.material=this.material,$n.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yn.copy(this.boundingSphere),Yn.applyMatrix4(i),e.ray.intersectsSphere(Yn)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Sn),bo.multiplyMatrices(i,Sn),$n.matrixWorld=bo,$n.raycast(e,Ds);for(let a=0,l=Ds.length;a<l;a++){const h=Ds[a];h.instanceId=r,h.object=this,t.push(h)}Ds.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new xh(new Float32Array(n*this.count),n,this.count,Pa,oi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const l=this.geometry.morphTargetsRelative?1:1-a,h=n*e;r[h]=l,r.set(i,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wr=new F,Sh=new F,bh=new ze;class Ri{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=wr.subVectors(i,t).cross(Sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bh.getNormalMatrix(e),n=this.coplanarPoint(wr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new os,Eh=new ke(.5,.5),Ls=new F;class Fa{constructor(e=new Ri,t=new Ri,i=new Ri,n=new Ri,r=new Ri,a=new Ri){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(n),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){const n=this.planes,r=e.elements,a=r[0],l=r[1],h=r[2],c=r[3],o=r[4],d=r[5],u=r[6],p=r[7],_=r[8],v=r[9],m=r[10],f=r[11],w=r[12],E=r[13],S=r[14],C=r[15];if(n[0].setComponents(c-a,p-o,f-_,C-w).normalize(),n[1].setComponents(c+a,p+o,f+_,C+w).normalize(),n[2].setComponents(c+l,p+d,f+v,C+E).normalize(),n[3].setComponents(c-l,p-d,f-v,C-E).normalize(),i)n[4].setComponents(h,u,m,S).normalize(),n[5].setComponents(c-h,p-u,f-m,C-S).normalize();else if(n[4].setComponents(c-h,p-u,f-m,C-S).normalize(),t===li)n[5].setComponents(c+h,p+u,f+m,C+S).normalize();else if(t===Gs)n[5].setComponents(h,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=Eh.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ls.x=n.normal.x>0?e.max.x:e.min.x,Ls.y=n.normal.y>0?e.max.y:e.min.y,Ls.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Th extends Rt{constructor(e,t,i,n,r,a,l,h,c){super(e,t,i,n,r,a,l,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cl extends Rt{constructor(e,t,i=Zi,n,r,a,l=Gt,h=Gt,c,o=is,d=1){if(o!==is&&o!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,n,r,a,l,h,o,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rl extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oa extends Kt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],a=[],l=[],h=[],c=new F,o=new ke;a.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),l.push(0,0,1),o.x=(a[u]/e+1)/2,o.y=(a[u+1]/e+1)/2,h.push(o.x,o.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ys extends Kt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};const c=this;n=Math.floor(n),r=Math.floor(r);const o=[],d=[],u=[],p=[];let _=0;const v=[],m=i/2;let f=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(o),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(p,2));function w(){const S=new F,C=new F;let A=0;const R=(t-e)/i;for(let N=0;N<=r;N++){const M=[],y=N/r,P=y*(t-e)+e;for(let z=0;z<=n;z++){const H=z/n,Y=H*h+l,q=Math.sin(Y),$=Math.cos(Y);C.x=P*q,C.y=-y*i+m,C.z=P*$,d.push(C.x,C.y,C.z),S.set(q,R,$).normalize(),u.push(S.x,S.y,S.z),p.push(H,1-y),M.push(_++)}v.push(M)}for(let N=0;N<n;N++)for(let M=0;M<r;M++){const y=v[M][N],P=v[M+1][N],z=v[M+1][N+1],H=v[M][N+1];(e>0||M!==0)&&(o.push(y,P,H),A+=3),(t>0||M!==r-1)&&(o.push(P,z,H),A+=3)}c.addGroup(f,A,0),f+=A}function E(S){const C=_,A=new ke,R=new F;let N=0;const M=S===!0?e:t,y=S===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),_++;const P=_;for(let z=0;z<=n;z++){const Y=z/n*h+l,q=Math.cos(Y),$=Math.sin(Y);R.x=M*$,R.y=m*y,R.z=M*q,d.push(R.x,R.y,R.z),u.push(0,y,0),A.x=q*.5+.5,A.y=$*.5*y+.5,p.push(A.x,A.y),_++}for(let z=0;z<n;z++){const H=C+z,Y=P+z;S===!0?o.push(Y,Y+1,H):o.push(Y+1,Y,H),N+=3}c.addGroup(f,N,S===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends Ys{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,i,n,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(e){return new za(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class js extends Kt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,l=Math.floor(i),h=Math.floor(n),c=l+1,o=h+1,d=e/l,u=t/h,p=[],_=[],v=[],m=[];for(let f=0;f<o;f++){const w=f*u-a;for(let E=0;E<c;E++){const S=E*d-r;_.push(S,-w,0),v.push(0,0,1),m.push(E/l),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let w=0;w<l;w++){const E=w+c*f,S=w+c*(f+1),C=w+1+c*(f+1),A=w+1+c*f;p.push(E,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}class ka extends Kt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(a+l,Math.PI);let c=0;const o=[],d=new F,u=new F,p=[],_=[],v=[],m=[];for(let f=0;f<=i;f++){const w=[],E=f/i;let S=0;f===0&&a===0?S=.5/t:f===i&&h===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const A=C/t;d.x=-e*Math.cos(n+A*r)*Math.sin(a+E*l),d.y=e*Math.cos(a+E*l),d.z=e*Math.sin(n+A*r)*Math.sin(a+E*l),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+S,1-E),w.push(c++)}o.push(w)}for(let f=0;f<i;f++)for(let w=0;w<t;w++){const E=o[f][w+1],S=o[f][w],C=o[f+1][w],A=o[f+1][w+1];(f!==0||a>0)&&p.push(E,S,A),(f!==i-1||h<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ba extends Kt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],l=[],h=[],c=[],o=new F,d=new F,u=new F;for(let p=0;p<=i;p++)for(let _=0;_<=n;_++){const v=_/n*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),o.x=e*Math.cos(v),o.y=e*Math.sin(v),u.subVectors(d,o).normalize(),h.push(u.x,u.y,u.z),c.push(_/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=n;_++){const v=(n+1)*p+_-1,m=(n+1)*(p-1)+_-1,f=(n+1)*(p-1)+_,w=(n+1)*p+_;a.push(v,m,w),a.push(m,f,w)}this.setIndex(a),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wh extends Nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ah extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ch extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pl extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Rh extends Pl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ar=new st,To=new F,wo=new F;class Ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;To.setFromMatrixPosition(e.matrixWorld),t.position.copy(To),wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wo),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ha extends El{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,l=n+t,h=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=o*this.view.offsetY,h=l-o*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dh extends Ph{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ih extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ao=new st;class Uh{constructor(e,t,i=0,n=1/0){this.ray=new vl(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ao.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ao),this}intersectObject(e,t=!0,i=[]){return ba(e,this,i,t),i.sort(Co),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ba(e[n],this,i,t);return i.sort(Co),i}}function Co(s,e){return s.distance-e.distance}function ba(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,l=r.length;a<l;a++)ba(r[a],e,t,!0)}}function Ro(s,e,t,i){const n=Nh(i);switch(t){case ul:return s*e;case Pa:return s*e/n.components*n.byteLength;case Da:return s*e/n.components*n.byteLength;case fl:return s*e*2/n.components*n.byteLength;case La:return s*e*2/n.components*n.byteLength;case dl:return s*e*3/n.components*n.byteLength;case ti:return s*e*4/n.components*n.byteLength;case Ia:return s*e*4/n.components*n.byteLength;case Fs:case Os:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zs:case ks:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yr:case Kr:return Math.max(s,16)*Math.max(e,8)/4;case $r:case jr:return Math.max(s,8)*Math.max(e,8)/2;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case na:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case oa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case la:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case pa:case ma:case ga:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _a:case va:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xa:case ya:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nh(s){switch(s){case ci:case ol:return{byteLength:1,components:1};case es:case ll:case rs:return{byteLength:2,components:1};case Ca:case Ra:return{byteLength:2,components:4};case Zi:case Aa:case oi:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dl(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fh(s){const e=new WeakMap;function t(l,h){const c=l.array,o=l.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(h,u),s.bufferData(h,c,o),l.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,h,c){const o=h.array,d=h.updateRanges;if(s.bindBuffer(c,l),d.length===0)s.bufferSubData(c,0,o);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){const _=d[u],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];s.bufferSubData(c,v.start*o.BYTES_PER_ELEMENT,o,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function n(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(s.deleteBuffer(h.buffer),e.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const o=e.get(l);(!o||o.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,h));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,h),c.version=l.version}}return{get:n,remove:r,update:a}}var Oh=`#ifdef USE_ALPHAHASH
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
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
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
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
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
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
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
#endif`,au=`#define PI 3.141592653589793
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
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lu=`vec3 transformedNormal = objectNormal;
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
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
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
#endif`,Eu=`#ifdef USE_GRADIENTMAP
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
}`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
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
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Pu=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
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
#endif`,Nu=`struct PhysicalMaterial {
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
}`,Fu=`
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
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
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
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nd=`#ifndef FLAT_SHADED
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
#endif`,rd=`#ifdef USE_NORMALMAP
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
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,Sd=`#ifdef USE_SKINNING
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
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
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
}`,Gd=`#if DEPTH_PACKING == 3200
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`#define DISTANCE
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
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define LAMBERT
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
}`,ef=`#define MATCAP
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
}`,tf=`#define MATCAP
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
}`,nf=`#define NORMAL
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
}`,rf=`#define PHONG
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
}`,af=`#define PHONG
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
}`,of=`#define STANDARD
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
}`,lf=`#define STANDARD
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
}`,cf=`#define TOON
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
}`,hf=`#define TOON
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
}`,uf=`uniform float size;
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,pf=`uniform vec3 color;
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
}`,mf=`uniform float rotation;
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
}`,gf=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Oh,alphahash_pars_fragment:zh,alphamap_fragment:kh,alphamap_pars_fragment:Bh,alphatest_fragment:Hh,alphatest_pars_fragment:Vh,aomap_fragment:Gh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:$h,beginnormal_vertex:Yh,bsdfs:jh,iridescence_fragment:Kh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:eu,clipping_planes_vertex:tu,color_fragment:iu,color_pars_fragment:nu,color_pars_vertex:su,color_vertex:ru,common:au,cube_uv_reflection_fragment:ou,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:hu,emissivemap_fragment:uu,emissivemap_pars_fragment:du,colorspace_fragment:fu,colorspace_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:vu,envmap_physical_pars_fragment:Ru,envmap_vertex:xu,fog_vertex:yu,fog_pars_vertex:Mu,fog_fragment:Su,fog_pars_fragment:bu,gradientmap_pars_fragment:Eu,lightmap_pars_fragment:Tu,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Au,lights_pars_begin:Cu,lights_toon_fragment:Pu,lights_toon_pars_fragment:Du,lights_phong_fragment:Lu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Uu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:zu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Vu,map_fragment:Gu,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:qu,metalnessmap_fragment:$u,metalnessmap_pars_fragment:Yu,morphinstance_vertex:ju,morphcolor_vertex:Ku,morphnormal_vertex:Zu,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:id,normal_pars_vertex:nd,normal_vertex:sd,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:hd,packing:ud,premultiplied_alpha_fragment:dd,project_vertex:fd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:xd,shadowmap_vertex:yd,shadowmask_pars_fragment:Md,skinbase_vertex:Sd,skinning_pars_vertex:bd,skinning_vertex:Ed,skinnormal_vertex:Td,specularmap_fragment:wd,specularmap_pars_fragment:Ad,tonemapping_fragment:Cd,tonemapping_pars_fragment:Rd,transmission_fragment:Pd,transmission_pars_fragment:Dd,uv_pars_fragment:Ld,uv_pars_vertex:Id,uv_vertex:Ud,worldpos_vertex:Nd,background_vert:Fd,background_frag:Od,backgroundCube_vert:zd,backgroundCube_frag:kd,cube_vert:Bd,cube_frag:Hd,depth_vert:Vd,depth_frag:Gd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:qd,equirect_frag:$d,linedashed_vert:Yd,linedashed_frag:jd,meshbasic_vert:Kd,meshbasic_frag:Zd,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:ef,meshmatcap_frag:tf,meshnormal_vert:nf,meshnormal_frag:sf,meshphong_vert:rf,meshphong_frag:af,meshphysical_vert:of,meshphysical_frag:lf,meshtoon_vert:cf,meshtoon_frag:hf,points_vert:uf,points_frag:df,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:gf},oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},si={basic:{uniforms:It([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:It([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:It([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:It([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:It([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:It([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:It([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:It([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:It([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:It([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:It([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:It([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:It([oe.lights,oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};si.physical={uniforms:It([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Is={r:0,b:0,g:0},Vi=new hi,_f=new st;function vf(s,e,t,i,n,r,a){const l=new $e(0);let h=r===!0?0:1,c,o,d=null,u=0,p=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function v(E){let S=!1;const C=_(E);C===null?f(l,h):C&&C.isColor&&(f(C,1),S=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===$s)?(o===void 0&&(o=new ii(new Fn(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ln(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(A,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),Vi.copy(S.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),o.material.uniforms.envMap.value=C,o.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(_f.makeRotationFromEuler(Vi)),o.material.toneMapped=je.getTransfer(C.colorSpace)!==Qe,(d!==C||u!==C.version||p!==s.toneMapping)&&(o.material.needsUpdate=!0,d=C,u=C.version,p=s.toneMapping),o.layers.enableAll(),E.unshift(o,o.geometry,o.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ii(new js(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ln(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=je.getTransfer(C.colorSpace)!==Qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,S){E.getRGB(Is,bl(s)),i.buffers.color.setClear(Is.r,Is.g,Is.b,S,a)}function w(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(E,S=1){l.set(E),h=S,f(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(E){h=E,f(l,h)},render:v,addToRenderList:m,dispose:w}}function xf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function l(y,P,z,H,Y){let q=!1;const $=d(H,z,P);r!==$&&(r=$,c(r.object)),q=p(y,H,z,Y),q&&_(y,H,z,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(y,P,z,H),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function o(y){return s.deleteVertexArray(y)}function d(y,P,z){const H=z.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let q=Y[P.id];q===void 0&&(q={},Y[P.id]=q);let $=q[H];return $===void 0&&($=u(h()),q[H]=$),$}function u(y){const P=[],z=[],H=[];for(let Y=0;Y<t;Y++)P[Y]=0,z[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,P,z,H){const Y=r.attributes,q=P.attributes;let $=0;const J=z.getAttributes();for(const V in J)if(J[V].location>=0){const fe=Y[V];let we=q[V];if(we===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function _(y,P,z,H){const Y={},q=P.attributes;let $=0;const J=z.getAttributes();for(const V in J)if(J[V].location>=0){let fe=q[V];fe===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));const we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),Y[V]=we,$++}r.attributes=Y,r.attributesNum=$,r.index=H}function v(){const y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){f(y,0)}function f(y,P){const z=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;z[y]=1,H[y]===0&&(s.enableVertexAttribArray(y),H[y]=1),Y[y]!==P&&(s.vertexAttribDivisor(y,P),Y[y]=P)}function w(){const y=r.newAttributes,P=r.enabledAttributes;for(let z=0,H=P.length;z<H;z++)P[z]!==y[z]&&(s.disableVertexAttribArray(z),P[z]=0)}function E(y,P,z,H,Y,q,$){$===!0?s.vertexAttribIPointer(y,P,z,Y,q):s.vertexAttribPointer(y,P,z,H,Y,q)}function S(y,P,z,H){v();const Y=H.attributes,q=z.getAttributes(),$=P.defaultAttributeValues;for(const J in q){const V=q[J];if(V.location>=0){let le=Y[J];if(le===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const fe=le.normalized,we=le.itemSize,Ve=e.get(le);if(Ve===void 0)continue;const it=Ve.buffer,at=Ve.type,Ke=Ve.bytesPerElement,j=at===s.INT||at===s.UNSIGNED_INT||le.gpuType===Aa;if(le.isInterleavedBufferAttribute){const Q=le.data,ge=Q.stride,Ue=le.offset;if(Q.isInstancedInterleavedBuffer){for(let Te=0;Te<V.locationSize;Te++)f(V.location+Te,Q.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Te=0;Te<V.locationSize;Te++)m(V.location+Te);s.bindBuffer(s.ARRAY_BUFFER,it);for(let Te=0;Te<V.locationSize;Te++)E(V.location+Te,we/V.locationSize,at,fe,ge*Ke,(Ue+we/V.locationSize*Te)*Ke,j)}else{if(le.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)f(V.location+Q,le.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);s.bindBuffer(s.ARRAY_BUFFER,it);for(let Q=0;Q<V.locationSize;Q++)E(V.location+Q,we/V.locationSize,at,fe,we*Ke,we/V.locationSize*Q*Ke,j)}}else if($!==void 0){const fe=$[J];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(V.location,fe);break;case 3:s.vertexAttrib3fv(V.location,fe);break;case 4:s.vertexAttrib4fv(V.location,fe);break;default:s.vertexAttrib1fv(V.location,fe)}}}}w()}function C(){N();for(const y in i){const P=i[y];for(const z in P){const H=P[z];for(const Y in H)o(H[Y].object),delete H[Y];delete P[z]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const z in P){const H=P[z];for(const Y in H)o(H[Y].object),delete H[Y];delete P[z]}delete i[y.id]}function R(y){for(const P in i){const z=i[P];if(z[y.id]===void 0)continue;const H=z[y.id];for(const Y in H)o(H[Y].object),delete H[Y];delete z[y.id]}}function N(){M(),a=!0,r!==n&&(r=n,c(r.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:l,reset:N,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function yf(s,e,t){let i;function n(c){i=c}function r(c,o){s.drawArrays(i,c,o),t.update(o,i,1)}function a(c,o,d){d!==0&&(s.drawArraysInstanced(i,c,o,d),t.update(o,i,d))}function l(c,o,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,d);let p=0;for(let _=0;_<d;_++)p+=o[_];t.update(p,i,1)}function h(c,o,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],o[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,o,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=o[v]*u[v];t.update(_,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function Mf(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==ti&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const N=R===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ci&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!N)}function h(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const o=h(c);o!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",o,"instead."),c=o);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function Sf(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new Ri,l=new ze,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){r=!0,o(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=o(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||_===null||_.length===0||r&&!m)r?o(null):c();else{const w=r?0:i,E=w*4;let S=f.clippingState||null;h.value=S,S=o(_,u,E,p);for(let C=0;C!==E;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function o(d,u,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=h.value,_!==!0||m===null){const f=p+v*4,w=u.matrixWorldInverse;l.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,S=p;E!==v;++E,S+=4)a.copy(d[E]).applyMatrix4(w,l),a.normal.toArray(m,S),m[S+3]=a.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function bf(s){let e=new WeakMap;function t(a,l){return l===Gr?a.mapping=Rn:l===Wr&&(a.mapping=Pn),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===Gr||l===Wr)if(e.has(a)){const h=e.get(a).texture;return t(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const c=new ph(h.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const l=a.target;l.removeEventListener("dispose",n);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const En=4,Po=[.125,.215,.35,.446,.526,.582],$i=20,Cr=new Ha,Do=new $e;let Rr=null,Pr=0,Dr=0,Lr=!1;const Wi=(1+Math.sqrt(5))/2,bn=1/Wi,Lo=[new F(-Wi,bn,0),new F(Wi,bn,0),new F(-bn,0,Wi),new F(bn,0,Wi),new F(0,Wi,-bn),new F(0,Wi,bn),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ef=new F;class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:a=256,position:l=Ef}=r;Rr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,n,h,l),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rr,Pr,Dr),this._renderer.xr.enabled=Lr,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rn||e.mapping===Pn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:rs,format:ti,colorSpace:Dn,depthBuffer:!1},n=Uo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(r)),this._blurMaterial=wf(r,e,t)}return n}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,i,n,r){const h=new ei(90,1,t,i),c=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Do),d.toneMapping=Li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null));const v=new yl({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),m=new ii(new Fn,v);let f=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,f=!0):(v.color.copy(Do),f=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(h.up.set(0,c[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+o[E],r.y,r.z)):S===1?(h.up.set(0,0,c[E]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+o[E],r.z)):(h.up.set(0,c[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+o[E]));const C=this._cubeSize;Us(n,S*C,E>2?C:0,C,C),d.setRenderTarget(n),f&&d.render(m,h),d.render(e,h)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Rn||e.mapping===Pn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new ii(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const h=this._cubeSize;Us(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(a,Cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Lo[(n-r-1)%Lo.length];this._blur(e,r-1,r,a,l)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,l){const h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const o=3,d=new ii(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$i-1),v=r/_,m=isFinite(r)?1+Math.floor(o*v):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const f=[];let w=0;for(let R=0;R<$i;++R){const N=R/v,M=Math.exp(-N*N/2);f.push(M),R===0?w+=M:R<m&&(w+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:E}=this;u.dTheta.value=_,u.mipInt.value=E-i;const S=this._sizeLods[n],C=3*S*(n>E-En?n-E+En:0),A=4*(this._cubeSize-S);Us(t,C,A,3*S,2*S),h.setRenderTarget(t),h.render(d,Cr)}}function Tf(s){const e=[],t=[],i=[];let n=s;const r=s-En+1+Po.length;for(let a=0;a<r;a++){const l=Math.pow(2,n);t.push(l);let h=1/l;a>s-En?h=Po[a-s+En-1]:a===0&&(h=0),i.push(h);const c=1/(l-2),o=-c,d=1+c,u=[o,o,d,o,d,d,o,o,d,d,o,d],p=6,_=6,v=3,m=2,f=1,w=new Float32Array(v*_*p),E=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,N=A>2?0:-1,M=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];w.set(M,v*_*A),E.set(u,m*_*A);const y=[A,A,A,A,A,A];S.set(y,f*_*A)}const C=new Kt;C.setAttribute("position",new jt(w,v)),C.setAttribute("uv",new jt(E,m)),C.setAttribute("faceIndex",new jt(S,f)),e.push(C),n>En&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uo(s,e,t){const i=new Ji(s,e,t);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function wf(s,e,t){const i=new Float32Array($i),n=new F(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function No(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fo(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function Af(s){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const h=l.mapping,c=h===Gr||h===Wr,o=h===Rn||h===Pn;if(c||o){let d=e.get(l);const u=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return t===null&&(t=new Io(s)),d=c?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const p=l.image;return c&&p&&p.height>0||o&&p&&n(p)?(t===null&&(t=new Io(s)),d=c?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",r),d.texture):null}}}return l}function n(l){let h=0;const c=6;for(let o=0;o<c;o++)l[o]!==void 0&&h++;return h===c}function r(l){const h=l.target;h.removeEventListener("dispose",r);const c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Cf(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Rf(s,e,t,i){const n={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete n[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function h(d){const u=d.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let E=0,S=w.length;E<S;E+=3){const C=w[E+0],A=w[E+1],R=w[E+2];u.push(C,A,A,R,R,C)}}else if(_!==void 0){const w=_.array;v=_.version;for(let E=0,S=w.length/3-1;E<S;E+=3){const C=E+0,A=E+1,R=E+2;u.push(C,A,A,R,R,C)}}else return;const m=new(gl(u)?Sl:Ml)(u,1);m.version=v;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function o(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:l,update:h,getWireframeAttribute:o}}function Pf(s,e,t){let i;function n(u){i=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function h(u,p){s.drawElements(i,p,r,u*a),t.update(p,i,1)}function c(u,p,_){_!==0&&(s.drawElementsInstanced(i,p,r,u*a,_),t.update(p,i,_))}function o(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}function d(u,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,v,0,_);let f=0;for(let w=0;w<_;w++)f+=p[w]*v[w];t.update(f,i,1)}}this.setMode=n,this.setIndex=l,this.render=h,this.renderInstances=c,this.renderMultiDraw=o,this.renderMultiDrawInstances=d}function Df(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Lf(s,e,t){const i=new WeakMap,n=new pt;function r(a,l,h){const c=a.morphTargetInfluences,o=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=o!==void 0?o.length:0;let u=i.get(l);if(u===void 0||u.count!==d){let y=function(){N.dispose(),i.delete(l),l.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const _=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],E=l.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let C=l.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*d),N=new _l(R,C,A,d);N.type=oi,N.needsUpdate=!0;const M=S*4;for(let P=0;P<d;P++){const z=f[P],H=w[P],Y=E[P],q=C*A*4*P;for(let $=0;$<z.count;$++){const J=$*M;_===!0&&(n.fromBufferAttribute(z,$),R[q+J+0]=n.x,R[q+J+1]=n.y,R[q+J+2]=n.z,R[q+J+3]=0),v===!0&&(n.fromBufferAttribute(H,$),R[q+J+4]=n.x,R[q+J+5]=n.y,R[q+J+6]=n.z,R[q+J+7]=0),m===!0&&(n.fromBufferAttribute(Y,$),R[q+J+8]=n.x,R[q+J+9]=n.y,R[q+J+10]=n.z,R[q+J+11]=Y.itemSize===4?n.w:1)}}u={count:d,texture:N,size:new ke(C,A)},i.set(l,u),l.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",c)}h.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function If(s,e,t,i){let n=new WeakMap;function r(h){const c=i.render.frame,o=h.geometry,d=e.get(h,o);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){const u=h.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function a(){n=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ll=new Rt,Oo=new Cl(1,1),Il=new _l,Ul=new Zc,Nl=new Tl,zo=[],ko=[],Bo=new Float32Array(16),Ho=new Float32Array(9),Vo=new Float32Array(4);function On(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=zo[n];if(r===void 0&&(r=new Float32Array(n),zo[n]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,s[a].toArray(r,l)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ks(s,e){let t=ko[e];t===void 0&&(t=new Int32Array(e),ko[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Uf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Nf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function zf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Vo.set(i),s.uniformMatrix2fv(this.addr,!1,Vo),bt(t,i)}}function kf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Ho.set(i),s.uniformMatrix3fv(this.addr,!1,Ho),bt(t,i)}}function Bf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Bo.set(i),s.uniformMatrix4fv(this.addr,!1,Bo),bt(t,i)}}function Hf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function Gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function Xf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function jf(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Oo.compareFunction=ml,r=Oo):r=Ll,t.setTexture2D(e||r,n)}function Kf(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ul,n)}function Zf(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Nl,n)}function Jf(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Il,n)}function Qf(s){switch(s){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return zf;case 35675:return kf;case 35676:return Bf;case 5124:case 35670:return Hf;case 35667:case 35671:return Vf;case 35668:case 35672:return Gf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return $f;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Jf}}function ep(s,e){s.uniform1fv(this.addr,e)}function tp(s,e){const t=On(e,this.size,2);s.uniform2fv(this.addr,t)}function ip(s,e){const t=On(e,this.size,3);s.uniform3fv(this.addr,t)}function np(s,e){const t=On(e,this.size,4);s.uniform4fv(this.addr,t)}function sp(s,e){const t=On(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rp(s,e){const t=On(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ap(s,e){const t=On(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function op(s,e){s.uniform1iv(this.addr,e)}function lp(s,e){s.uniform2iv(this.addr,e)}function cp(s,e){s.uniform3iv(this.addr,e)}function hp(s,e){s.uniform4iv(this.addr,e)}function up(s,e){s.uniform1uiv(this.addr,e)}function dp(s,e){s.uniform2uiv(this.addr,e)}function fp(s,e){s.uniform3uiv(this.addr,e)}function pp(s,e){s.uniform4uiv(this.addr,e)}function mp(s,e,t){const i=this.cache,n=e.length,r=Ks(t,n);St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Ll,r[a])}function gp(s,e,t){const i=this.cache,n=e.length,r=Ks(t,n);St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ul,r[a])}function _p(s,e,t){const i=this.cache,n=e.length,r=Ks(t,n);St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Nl,r[a])}function vp(s,e,t){const i=this.cache,n=e.length,r=Ks(t,n);St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Il,r[a])}function xp(s){switch(s){case 5126:return ep;case 35664:return tp;case 35665:return ip;case 35666:return np;case 35674:return sp;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return vp}}class yp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qf(t.type)}}class Mp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const l=n[r];l.setValue(e,t[l.id],i)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Go(s,e){s.seq.push(e),s.map[e.id]=e}function bp(s,e,t){const i=s.name,n=i.length;for(Ir.lastIndex=0;;){const r=Ir.exec(i),a=Ir.lastIndex;let l=r[1];const h=r[2]==="]",c=r[3];if(h&&(l=l|0),c===void 0||c==="["&&a+2===n){Go(t,c===void 0?new yp(l,s,e):new Mp(l,s,e));break}else{let d=t.map[l];d===void 0&&(d=new Sp(l),Go(t,d)),t=d}}}class Bs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);bp(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const l=t[r],h=i[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Wo(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Ep=37297;let Tp=0;function wp(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const Xo=new ze;function Ap(s){je._getMatrix(Xo,je.workingColorSpace,s);const e=`mat3( ${Xo.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Vs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qo(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wp(s.getShaderSource(e),l)}else return r}function Cp(s,e){const t=Ap(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Rp(s,e){let t;switch(e){case Ec:t="Linear";break;case Tc:t="Reinhard";break;case wc:t="Cineon";break;case Ac:t="ACESFilmic";break;case Rc:t="AgX";break;case Pc:t="Neutral";break;case Cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new F;function Pp(){je.getLuminanceCoefficients(Ns);const s=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kn).join(`
`)}function Lp(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ip(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:l}}return t}function Kn(s){return s!==""}function $o(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Up=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(Up,Fp)}const Np=new Map;function Fp(s,e){let t=He[e];if(t===void 0){const i=Np.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ea(t)}const Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(s){return s.replace(Op,zp)}function zp(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ko(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function kp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Bp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rn:case Pn:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Pn:e="ENVMAP_MODE_REFRACTION";break}return e}function Vp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wa:e="ENVMAP_BLENDING_MULTIPLY";break;case Sc:e="ENVMAP_BLENDING_MIX";break;case bc:e="ENVMAP_BLENDING_ADD";break}return e}function Gp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Wp(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const h=kp(t),c=Bp(t),o=Hp(t),d=Vp(t),u=Gp(t),p=Dp(t),_=Lp(r),v=n.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kn).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kn).join(`
`),f.length>0&&(f+=`
`)):(m=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kn).join(`
`),f=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+o:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?He.tonemapping_pars_fragment:"",t.toneMapping!==Li?Rp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Cp("linearToOutputTexel",t.outputColorSpace),Pp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kn).join(`
`)),a=Ea(a),a=$o(a,t),a=Yo(a,t),l=Ea(l),l=$o(l,t),l=Yo(l,t),a=jo(a),l=jo(l),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=w+m+a,S=w+f+l,C=Wo(n,n.VERTEX_SHADER,E),A=Wo(n,n.FRAGMENT_SHADER,S);n.attachShader(v,C),n.attachShader(v,A),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(P){if(s.debug.checkShaderErrors){const z=n.getProgramInfoLog(v)||"",H=n.getShaderInfoLog(C)||"",Y=n.getShaderInfoLog(A)||"",q=z.trim(),$=H.trim(),J=Y.trim();let V=!0,le=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,C,A);else{const fe=qo(n,C,"vertex"),we=qo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+fe+`
`+we)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):($===""||J==="")&&(le=!1);le&&(P.diagnostics={runnable:V,programLog:q,vertexShader:{log:$,prefix:m},fragmentShader:{log:J,prefix:f}})}n.deleteShader(C),n.deleteShader(A),N=new Bs(n,v),M=Ip(n,v)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(v,Ep)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let Xp=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $p(e),t.set(e,i)),i}}class $p{constructor(e){this.id=Xp++,this.code=e,this.usedTimes=0}}function Yp(s,e,t,i,n,r,a){const l=new Na,h=new qp,c=new Set,o=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,z,H){const Y=z.fog,q=H.geometry,$=M.isMeshStandardMaterial?z.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),V=J&&J.mapping===$s?J.image.height:null,le=_[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,we=fe!==void 0?fe.length:0;let Ve=0;q.morphAttributes.position!==void 0&&(Ve=1),q.morphAttributes.normal!==void 0&&(Ve=2),q.morphAttributes.color!==void 0&&(Ve=3);let it,at,Ke,j;if(le){const Ze=si[le];it=Ze.vertexShader,at=Ze.fragmentShader}else it=M.vertexShader,at=M.fragmentShader,h.update(M),Ke=h.getVertexShaderID(M),j=h.getFragmentShaderID(M);const Q=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Ue=H.isInstancedMesh===!0,Te=H.isBatchedMesh===!0,Xe=!!M.map,wt=!!M.matcap,T=!!J,ot=!!M.aoMap,Fe=!!M.lightMap,Le=!!M.bumpMap,xe=!!M.normalMap,lt=!!M.displacementMap,ye=!!M.emissiveMap,Be=!!M.metalnessMap,Et=!!M.roughnessMap,mt=M.anisotropy>0,b=M.clearcoat>0,g=M.dispersion>0,O=M.iridescence>0,X=M.sheen>0,Z=M.transmission>0,G=mt&&!!M.anisotropyMap,Ee=b&&!!M.clearcoatMap,se=b&&!!M.clearcoatNormalMap,Me=b&&!!M.clearcoatRoughnessMap,Se=O&&!!M.iridescenceMap,ie=O&&!!M.iridescenceThicknessMap,ue=X&&!!M.sheenColorMap,De=X&&!!M.sheenRoughnessMap,be=!!M.specularMap,ce=!!M.specularColorMap,Oe=!!M.specularIntensityMap,D=Z&&!!M.transmissionMap,ne=Z&&!!M.thicknessMap,ae=!!M.gradientMap,me=!!M.alphaMap,ee=M.alphaTest>0,K=!!M.alphaHash,ve=!!M.extensions;let Ne=Li;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const nt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:at,defines:M.defines,customVertexShaderID:Ke,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Te,batchingColor:Te&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Dn,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:wt,envMap:T,envMapMode:T&&J.mapping,envMapCubeUVHeight:V,aoMap:ot,lightMap:Fe,bumpMap:Le,normalMap:xe,displacementMap:u&&lt,emissiveMap:ye,normalMapObjectSpace:xe&&M.normalMapType===Uc,normalMapTangentSpace:xe&&M.normalMapType===pl,metalnessMap:Be,roughnessMap:Et,anisotropy:mt,anisotropyMap:G,clearcoat:b,clearcoatMap:Ee,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:g,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:ie,sheen:X,sheenColorMap:ue,sheenRoughnessMap:De,specularMap:be,specularColorMap:ce,specularIntensityMap:Oe,transmission:Z,transmissionMap:D,thicknessMap:ne,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Tn&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:K,combine:M.combine,mapUv:Xe&&v(M.map.channel),aoMapUv:ot&&v(M.aoMap.channel),lightMapUv:Fe&&v(M.lightMap.channel),bumpMapUv:Le&&v(M.bumpMap.channel),normalMapUv:xe&&v(M.normalMap.channel),displacementMapUv:lt&&v(M.displacementMap.channel),emissiveMapUv:ye&&v(M.emissiveMap.channel),metalnessMapUv:Be&&v(M.metalnessMap.channel),roughnessMapUv:Et&&v(M.roughnessMap.channel),anisotropyMapUv:G&&v(M.anisotropyMap.channel),clearcoatMapUv:Ee&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(M.sheenRoughnessMap.channel),specularMapUv:be&&v(M.specularMap.channel),specularColorMapUv:ce&&v(M.specularColorMap.channel),specularIntensityMapUv:Oe&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:ne&&v(M.thicknessMap.channel),alphaMapUv:me&&v(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xe||mt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Xe||me),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===Qe,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xi,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(w(y,M),E(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){l.disableAll(),y.supportsVertexTextures&&l.enable(0),y.instancing&&l.enable(1),y.instancingColor&&l.enable(2),y.instancingMorph&&l.enable(3),y.matcap&&l.enable(4),y.envMap&&l.enable(5),y.normalMapObjectSpace&&l.enable(6),y.normalMapTangentSpace&&l.enable(7),y.clearcoat&&l.enable(8),y.iridescence&&l.enable(9),y.alphaTest&&l.enable(10),y.vertexColors&&l.enable(11),y.vertexAlphas&&l.enable(12),y.vertexUv1s&&l.enable(13),y.vertexUv2s&&l.enable(14),y.vertexUv3s&&l.enable(15),y.vertexTangents&&l.enable(16),y.anisotropy&&l.enable(17),y.alphaHash&&l.enable(18),y.batching&&l.enable(19),y.dispersion&&l.enable(20),y.batchingColor&&l.enable(21),y.gradientMap&&l.enable(22),M.push(l.mask),l.disableAll(),y.fog&&l.enable(0),y.useFog&&l.enable(1),y.flatShading&&l.enable(2),y.logarithmicDepthBuffer&&l.enable(3),y.reversedDepthBuffer&&l.enable(4),y.skinning&&l.enable(5),y.morphTargets&&l.enable(6),y.morphNormals&&l.enable(7),y.morphColors&&l.enable(8),y.premultipliedAlpha&&l.enable(9),y.shadowMapEnabled&&l.enable(10),y.doubleSided&&l.enable(11),y.flipSided&&l.enable(12),y.useDepthPacking&&l.enable(13),y.dithering&&l.enable(14),y.transmission&&l.enable(15),y.sheen&&l.enable(16),y.opaque&&l.enable(17),y.pointsUvs&&l.enable(18),y.decodeVideoTexture&&l.enable(19),y.decodeVideoTextureEmissive&&l.enable(20),y.alphaToCoverage&&l.enable(21),M.push(l.mask)}function S(M){const y=_[M.type];let P;if(y){const z=si[y];P=hh.clone(z.uniforms)}else P=M.uniforms;return P}function C(M,y){let P;for(let z=0,H=o.length;z<H;z++){const Y=o[z];if(Y.cacheKey===y){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Wp(s,y,M,r),o.push(P)),P}function A(M){if(--M.usedTimes===0){const y=o.indexOf(M);o[y]=o[o.length-1],o.pop(),M.destroy()}}function R(M){h.remove(M)}function N(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:o,dispose:N}}function jp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let l=s.get(a);return l===void 0&&(l={},s.set(a,l)),l}function i(a){s.delete(a)}function n(a,l,h){s.get(a)[l]=h}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Kp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jo(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d,u,p,_,v,m){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},s[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function l(d,u,p,_,v,m){const f=a(d,u,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function h(d,u,p,_,v,m){const f=a(d,u,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||Kp),i.length>1&&i.sort(u||Zo),n.length>1&&n.sort(u||Zo)}function o(){for(let d=e,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:h,finish:o,sort:c}}function Zp(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new Jo,s.set(i,[a])):n>=r.length?(a=new Jo,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Jp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Qp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let em=0;function tm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function im(s){const e=new Jp,t=Qp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const n=new F,r=new st,a=new st;function l(c){let o=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,v=0,m=0,f=0,w=0,E=0,S=0,C=0,A=0,R=0;c.sort(tm);for(let M=0,y=c.length;M<y;M++){const P=c[M],z=P.color,H=P.intensity,Y=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)o+=z.r*H,d+=z.g*H,u+=z.b*H;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],H);R++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=$,p++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(z).multiplyScalar(H),$.distance=Y,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[v]=$;const J=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,J.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=J.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=q,S++}v++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(z).multiplyScalar(H),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=$,m++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=P.shadow.matrix,E++}i.point[_]=$,_++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(H),$.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[f]=$,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=o,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==S||N.numSpotMaps!==C||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=S,N.numSpotMaps=C,N.numLightProbes=R,i.version=em++)}function h(c,o){let d=0,u=0,p=0,_=0,v=0;const m=o.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const E=c[f];if(E.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),d++}else if(E.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:l,setupView:h,state:i}}function Qo(s){const e=new im(s),t=[],i=[];function n(o){c.camera=o,t.length=0,i.length=0}function r(o){t.push(o)}function a(o){i.push(o)}function l(){e.setup(t)}function h(o){e.setupView(t,o)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:a}}function nm(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let l;return a===void 0?(l=new Qo(s),e.set(n,[l])):r>=a.length?(l=new Qo(s),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
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
}`;function am(s,e,t){let i=new Fa;const n=new ke,r=new ke,a=new pt,l=new Ah({depthPacking:Ic}),h=new Ch,c={},o=t.maxTextureSize,d={[Ui]:Nt,[Nt]:Ui,[xi]:xi},u=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:sm,fragmentShader:rm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Kt;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ii(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let f=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Di),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=f!==_i&&this.type===_i,Y=f===_i&&this.type!==_i;for(let q=0,$=A.length;q<$;q++){const J=A[q],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const le=V.getFrameExtents();if(n.multiply(le),r.copy(V.mapSize),(n.x>o||n.y>o)&&(n.x>o&&(r.x=Math.floor(o/le.x),n.x=r.x*le.x,V.mapSize.x=r.x),n.y>o&&(r.y=Math.floor(o/le.y),n.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||H===!0||Y===!0){const we=this.type!==_i?{minFilter:Gt,magFilter:Gt}:{};V.map!==null&&V.map.dispose(),V.map=new Ji(n.x,n.y,we),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const fe=V.getViewportCount();for(let we=0;we<fe;we++){const Ve=V.getViewport(we);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),z.viewport(a),V.updateMatrices(J,we),i=V.getFrustum(),S(R,N,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&w(V,N),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,P)};function w(A,R){const N=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ji(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,N,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,N,p,v,null)}function E(A,R,N,M){let y=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=N.isPointLight===!0?h:l,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=y.uuid,H=R.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let q=Y[H];q===void 0&&(q=y.clone(),Y[H]=q,R.addEventListener("dispose",C)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,M===_i?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=s.properties.get(y);z.light=N}return y}function S(A,R,N,M,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===_i)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const H=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=H.groups;for(let $=0,J=q.length;$<J;$++){const V=q[$],le=Y[V.materialIndex];if(le&&le.visible){const fe=E(A,le,M,y);A.onBeforeShadow(s,A,R,N,H,fe,V),s.renderBufferDirect(N,null,H,fe,A,V),A.onAfterShadow(s,A,R,N,H,fe,V)}}}else if(Y.visible){const q=E(A,Y,M,y);A.onBeforeShadow(s,A,R,N,H,q,null),s.renderBufferDirect(N,null,H,q,A,null),A.onAfterShadow(s,A,R,N,H,q,null)}}const z=A.children;for(let H=0,Y=z.length;H<Y;H++)S(z[H],R,N,M,y)}function C(A){A.target.removeEventListener("dispose",C);for(const N in c){const M=c[N],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const om={[Fr]:Or,[zr]:Hr,[kr]:Vr,[Cn]:Br,[Or]:Fr,[Hr]:zr,[Vr]:kr,[Br]:Cn};function lm(s,e){function t(){let D=!1;const ne=new pt;let ae=null;const me=new pt(0,0,0,0);return{setMask:function(ee){ae!==ee&&!D&&(s.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){D=ee},setClear:function(ee,K,ve,Ne,nt){nt===!0&&(ee*=Ne,K*=Ne,ve*=Ne),ne.set(ee,K,ve,Ne),me.equals(ne)===!1&&(s.clearColor(ee,K,ve,Ne),me.copy(ne))},reset:function(){D=!1,ae=null,me.set(-1,0,0,0)}}}function i(){let D=!1,ne=!1,ae=null,me=null,ee=null;return{setReversed:function(K){if(ne!==K){const ve=e.get("EXT_clip_control");K?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ne=K;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return ne},setTest:function(K){K?Q(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(K){ae!==K&&!D&&(s.depthMask(K),ae=K)},setFunc:function(K){if(ne&&(K=om[K]),me!==K){switch(K){case Fr:s.depthFunc(s.NEVER);break;case Or:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case Cn:s.depthFunc(s.LEQUAL);break;case kr:s.depthFunc(s.EQUAL);break;case Br:s.depthFunc(s.GEQUAL);break;case Hr:s.depthFunc(s.GREATER);break;case Vr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=K}},setLocked:function(K){D=K},setClear:function(K){ee!==K&&(ne&&(K=1-K),s.clearDepth(K),ee=K)},reset:function(){D=!1,ae=null,me=null,ee=null,ne=!1}}}function n(){let D=!1,ne=null,ae=null,me=null,ee=null,K=null,ve=null,Ne=null,nt=null;return{setTest:function(Ze){D||(Ze?Q(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Ze){ne!==Ze&&!D&&(s.stencilMask(Ze),ne=Ze)},setFunc:function(Ze,ui,ni){(ae!==Ze||me!==ui||ee!==ni)&&(s.stencilFunc(Ze,ui,ni),ae=Ze,me=ui,ee=ni)},setOp:function(Ze,ui,ni){(K!==Ze||ve!==ui||Ne!==ni)&&(s.stencilOp(Ze,ui,ni),K=Ze,ve=ui,Ne=ni)},setLocked:function(Ze){D=Ze},setClear:function(Ze){nt!==Ze&&(s.clearStencil(Ze),nt=Ze)},reset:function(){D=!1,ne=null,ae=null,me=null,ee=null,K=null,ve=null,Ne=null,nt=null}}}const r=new t,a=new i,l=new n,h=new WeakMap,c=new WeakMap;let o={},d={},u=new WeakMap,p=[],_=null,v=!1,m=null,f=null,w=null,E=null,S=null,C=null,A=null,R=new $e(0,0,0),N=0,M=!1,y=null,P=null,z=null,H=null,Y=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=J>=2);let le=null,fe={};const we=s.getParameter(s.SCISSOR_BOX),Ve=s.getParameter(s.VIEWPORT),it=new pt().fromArray(we),at=new pt().fromArray(Ve);function Ke(D,ne,ae,me){const ee=new Uint8Array(4),K=s.createTexture();s.bindTexture(D,K),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<ae;ve++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(ne+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return K}const j={};j[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Q(s.DEPTH_TEST),a.setFunc(Cn),Le(!1),xe(Ka),Q(s.CULL_FACE),ot(Di);function Q(D){o[D]!==!0&&(s.enable(D),o[D]=!0)}function ge(D){o[D]!==!1&&(s.disable(D),o[D]=!1)}function Ue(D,ne){return d[D]!==ne?(s.bindFramebuffer(D,ne),d[D]=ne,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ne),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(D,ne){let ae=p,me=!1;if(D){ae=u.get(ne),ae===void 0&&(ae=[],u.set(ne,ae));const ee=D.textures;if(ae.length!==ee.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ve=ee.length;K<ve;K++)ae[K]=s.COLOR_ATTACHMENT0+K;ae.length=ee.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function Xe(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const wt={[qi]:s.FUNC_ADD,[rc]:s.FUNC_SUBTRACT,[ac]:s.FUNC_REVERSE_SUBTRACT};wt[oc]=s.MIN,wt[lc]=s.MAX;const T={[cc]:s.ZERO,[hc]:s.ONE,[uc]:s.SRC_COLOR,[Ur]:s.SRC_ALPHA,[_c]:s.SRC_ALPHA_SATURATE,[mc]:s.DST_COLOR,[fc]:s.DST_ALPHA,[dc]:s.ONE_MINUS_SRC_COLOR,[Nr]:s.ONE_MINUS_SRC_ALPHA,[gc]:s.ONE_MINUS_DST_COLOR,[pc]:s.ONE_MINUS_DST_ALPHA,[vc]:s.CONSTANT_COLOR,[xc]:s.ONE_MINUS_CONSTANT_COLOR,[yc]:s.CONSTANT_ALPHA,[Mc]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(D,ne,ae,me,ee,K,ve,Ne,nt,Ze){if(D===Di){v===!0&&(ge(s.BLEND),v=!1);return}if(v===!1&&(Q(s.BLEND),v=!0),D!==sc){if(D!==m||Ze!==M){if((f!==qi||S!==qi)&&(s.blendEquation(s.FUNC_ADD),f=qi,S=qi),Ze)switch(D){case Tn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.ONE,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Tn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ja:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,C=null,A=null,R.set(0,0,0),N=0,m=D,M=Ze}return}ee=ee||ne,K=K||ae,ve=ve||me,(ne!==f||ee!==S)&&(s.blendEquationSeparate(wt[ne],wt[ee]),f=ne,S=ee),(ae!==w||me!==E||K!==C||ve!==A)&&(s.blendFuncSeparate(T[ae],T[me],T[K],T[ve]),w=ae,E=me,C=K,A=ve),(Ne.equals(R)===!1||nt!==N)&&(s.blendColor(Ne.r,Ne.g,Ne.b,nt),R.copy(Ne),N=nt),m=D,M=!1}function Fe(D,ne){D.side===xi?ge(s.CULL_FACE):Q(s.CULL_FACE);let ae=D.side===Nt;ne&&(ae=!ae),Le(ae),D.blending===Tn&&D.transparent===!1?ot(Di):ot(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const me=D.stencilWrite;l.setTest(me),me&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function xe(D){D!==tc?(Q(s.CULL_FACE),D!==P&&(D===Ka?s.cullFace(s.BACK):D===ic?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),P=D}function lt(D){D!==z&&($&&s.lineWidth(D),z=D)}function ye(D,ne,ae){D?(Q(s.POLYGON_OFFSET_FILL),(H!==ne||Y!==ae)&&(s.polygonOffset(ne,ae),H=ne,Y=ae)):ge(s.POLYGON_OFFSET_FILL)}function Be(D){D?Q(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function Et(D){D===void 0&&(D=s.TEXTURE0+q-1),le!==D&&(s.activeTexture(D),le=D)}function mt(D,ne,ae){ae===void 0&&(le===null?ae=s.TEXTURE0+q-1:ae=le);let me=fe[ae];me===void 0&&(me={type:void 0,texture:void 0},fe[ae]=me),(me.type!==D||me.texture!==ne)&&(le!==ae&&(s.activeTexture(ae),le=ae),s.bindTexture(D,ne||j[D]),me.type=D,me.texture=ne)}function b(){const D=fe[le];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){it.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function De(D){at.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),at.copy(D))}function be(D,ne){let ae=c.get(ne);ae===void 0&&(ae=new WeakMap,c.set(ne,ae));let me=ae.get(D);me===void 0&&(me=s.getUniformBlockIndex(ne,D.name),ae.set(D,me))}function ce(D,ne){const me=c.get(ne).get(D);h.get(ne)!==me&&(s.uniformBlockBinding(ne,me,D.__bindingPointIndex),h.set(ne,me))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},le=null,fe={},d={},u=new WeakMap,p=[],_=null,v=!1,m=null,f=null,w=null,E=null,S=null,C=null,A=null,R=new $e(0,0,0),N=0,M=!1,y=null,P=null,z=null,H=null,Y=null,it.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Q,disable:ge,bindFramebuffer:Ue,drawBuffers:Te,useProgram:Xe,setBlending:ot,setMaterial:Fe,setFlipSided:Le,setCullFace:xe,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:Be,activeTexture:Et,bindTexture:mt,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:Se,texImage3D:ie,updateUBOMapping:be,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Me,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:Ee,scissor:ue,viewport:De,reset:Oe}}function cm(s,e,t,i,n,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,o=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):Ws("canvas")}function v(b,g,O){let X=1;const Z=mt(b);if((Z.width>O||Z.height>O)&&(X=O/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(X*Z.width),Ee=Math.floor(X*Z.height);d===void 0&&(d=_(G,Ee));const se=g?_(G,Ee):d;return se.width=G,se.height=Ee,se.getContext("2d").drawImage(b,0,0,G,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+Ee+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){s.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,g,O,X,Z=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=g;if(g===s.RED&&(O===s.FLOAT&&(G=s.R32F),O===s.HALF_FLOAT&&(G=s.R16F),O===s.UNSIGNED_BYTE&&(G=s.R8)),g===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.R8UI),O===s.UNSIGNED_SHORT&&(G=s.R16UI),O===s.UNSIGNED_INT&&(G=s.R32UI),O===s.BYTE&&(G=s.R8I),O===s.SHORT&&(G=s.R16I),O===s.INT&&(G=s.R32I)),g===s.RG&&(O===s.FLOAT&&(G=s.RG32F),O===s.HALF_FLOAT&&(G=s.RG16F),O===s.UNSIGNED_BYTE&&(G=s.RG8)),g===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RG8UI),O===s.UNSIGNED_SHORT&&(G=s.RG16UI),O===s.UNSIGNED_INT&&(G=s.RG32UI),O===s.BYTE&&(G=s.RG8I),O===s.SHORT&&(G=s.RG16I),O===s.INT&&(G=s.RG32I)),g===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RGB8UI),O===s.UNSIGNED_SHORT&&(G=s.RGB16UI),O===s.UNSIGNED_INT&&(G=s.RGB32UI),O===s.BYTE&&(G=s.RGB8I),O===s.SHORT&&(G=s.RGB16I),O===s.INT&&(G=s.RGB32I)),g===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),O===s.UNSIGNED_INT&&(G=s.RGBA32UI),O===s.BYTE&&(G=s.RGBA8I),O===s.SHORT&&(G=s.RGBA16I),O===s.INT&&(G=s.RGBA32I)),g===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),g===s.RGBA){const Ee=Z?Vs:je.getTransfer(X);O===s.FLOAT&&(G=s.RGBA32F),O===s.HALF_FLOAT&&(G=s.RGBA16F),O===s.UNSIGNED_BYTE&&(G=Ee===Qe?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(b,g){let O;return b?g===null||g===Zi||g===ts?O=s.DEPTH24_STENCIL8:g===oi?O=s.DEPTH32F_STENCIL8:g===es&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Zi||g===ts?O=s.DEPTH_COMPONENT24:g===oi?O=s.DEPTH_COMPONENT32F:g===es&&(O=s.DEPTH_COMPONENT16),O}function C(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Gt&&b.minFilter!==ai?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function A(b){const g=b.target;g.removeEventListener("dispose",A),N(g),g.isVideoTexture&&o.delete(g)}function R(b){const g=b.target;g.removeEventListener("dispose",R),y(g)}function N(b){const g=i.get(b);if(g.__webglInit===void 0)return;const O=b.source,X=u.get(O);if(X){const Z=X[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys(X).length===0&&u.delete(O)}i.remove(b)}function M(b){const g=i.get(b);s.deleteTexture(g.__webglTexture);const O=b.source,X=u.get(O);delete X[g.__cacheKey],a.memory.textures--}function y(b){const g=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Z=0;Z<g.__webglFramebuffer[X].length;Z++)s.deleteFramebuffer(g.__webglFramebuffer[X][Z]);else s.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)s.deleteFramebuffer(g.__webglFramebuffer[X]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=b.textures;for(let X=0,Z=O.length;X<Z;X++){const G=i.get(O[X]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(O[X])}i.remove(b)}let P=0;function z(){P=0}function H(){const b=P;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),P+=1,b}function Y(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function q(b,g){const O=i.get(b);if(b.isVideoTexture&&Be(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,b,g);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+g)}function $(b,g){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){j(O,b,g);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+g)}function J(b,g){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){j(O,b,g);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+g)}function V(b,g){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Q(O,b,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+g)}const le={[Xr]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},fe={[Gt]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[hs]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[tr]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},we={[Nc]:s.NEVER,[Hc]:s.ALWAYS,[Fc]:s.LESS,[ml]:s.LEQUAL,[Oc]:s.EQUAL,[Bc]:s.GEQUAL,[zc]:s.GREATER,[kc]:s.NOTEQUAL};function Ve(b,g){if(g.type===oi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ai||g.magFilter===tr||g.magFilter===hs||g.magFilter===ji||g.minFilter===ai||g.minFilter===tr||g.minFilter===hs||g.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,le[g.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,le[g.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,le[g.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,fe[g.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,fe[g.minFilter]),g.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Gt||g.minFilter!==hs&&g.minFilter!==ji||g.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function it(b,g){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",A));const X=g.source;let Z=u.get(X);Z===void 0&&(Z={},u.set(X,Z));const G=Y(g);if(G!==b.__cacheKey){Z[G]===void 0&&(Z[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[G].usedTimes++;const Ee=Z[b.__cacheKey];Ee!==void 0&&(Z[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(g)),b.__cacheKey=G,b.__webglTexture=Z[G].texture}return O}function at(b,g,O){return Math.floor(Math.floor(b/O)/g)}function Ke(b,g,O,X){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,O,X,g.data);else{G.sort((ie,ue)=>ie.start-ue.start);let Ee=0;for(let ie=1;ie<G.length;ie++){const ue=G[Ee],De=G[ie],be=ue.start+ue.count,ce=at(De.start,g.width,4),Oe=at(ue.start,g.width,4);De.start<=be+1&&ce===Oe&&at(De.start+De.count-1,g.width,4)===ce?ue.count=Math.max(ue.count,De.start+De.count-ue.start):(++Ee,G[Ee]=De)}G.length=Ee+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),Se=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let ie=0,ue=G.length;ie<ue;ie++){const De=G[ie],be=Math.floor(De.start/4),ce=Math.ceil(De.count/4),Oe=be%g.width,D=Math.floor(be/g.width),ne=ce,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Oe,D,ne,ae,O,X,g.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function j(b,g,O){let X=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=s.TEXTURE_3D);const Z=it(b,g),G=g.source;t.bindTexture(X,b.__webglTexture,s.TEXTURE0+O);const Ee=i.get(G);if(G.version!==Ee.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);const se=je.getPrimaries(je.workingColorSpace),Me=g.colorSpace===Pi?null:je.getPrimaries(g.colorSpace),Se=g.colorSpace===Pi||se===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ie=v(g.image,!1,n.maxTextureSize);ie=Et(g,ie);const ue=r.convert(g.format,g.colorSpace),De=r.convert(g.type);let be=E(g.internalFormat,ue,De,g.colorSpace,g.isVideoTexture);Ve(X,g);let ce;const Oe=g.mipmaps,D=g.isVideoTexture!==!0,ne=Ee.__version===void 0||Z===!0,ae=G.dataReady,me=C(g,ie);if(g.isDepthTexture)be=S(g.format===ns,g.type),ne&&(D?t.texStorage2D(s.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,be,ie.width,ie.height,0,ue,De,null));else if(g.isDataTexture)if(Oe.length>0){D&&ne&&t.texStorage2D(s.TEXTURE_2D,me,be,Oe[0].width,Oe[0].height);for(let ee=0,K=Oe.length;ee<K;ee++)ce=Oe[ee],D?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,De,ce.data):t.texImage2D(s.TEXTURE_2D,ee,be,ce.width,ce.height,0,ue,De,ce.data);g.generateMipmaps=!1}else D?(ne&&t.texStorage2D(s.TEXTURE_2D,me,be,ie.width,ie.height),ae&&Ke(g,ie,ue,De)):t.texImage2D(s.TEXTURE_2D,0,be,ie.width,ie.height,0,ue,De,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,be,Oe[0].width,Oe[0].height,ie.depth);for(let ee=0,K=Oe.length;ee<K;ee++)if(ce=Oe[ee],g.format!==ti)if(ue!==null)if(D){if(ae)if(g.layerUpdates.size>0){const ve=Ro(ce.width,ce.height,g.format,g.type);for(const Ne of g.layerUpdates){const nt=ce.data.subarray(Ne*ve/ce.data.BYTES_PER_ELEMENT,(Ne+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ne,ce.width,ce.height,1,ue,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ie.depth,ue,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,be,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ie.depth,ue,De,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,be,ce.width,ce.height,ie.depth,0,ue,De,ce.data)}else{D&&ne&&t.texStorage2D(s.TEXTURE_2D,me,be,Oe[0].width,Oe[0].height);for(let ee=0,K=Oe.length;ee<K;ee++)ce=Oe[ee],g.format!==ti?ue!==null?D?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,De,ce.data):t.texImage2D(s.TEXTURE_2D,ee,be,ce.width,ce.height,0,ue,De,ce.data)}else if(g.isDataArrayTexture)if(D){if(ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,be,ie.width,ie.height,ie.depth),ae)if(g.layerUpdates.size>0){const ee=Ro(ie.width,ie.height,g.format,g.type);for(const K of g.layerUpdates){const ve=ie.data.subarray(K*ee/ie.data.BYTES_PER_ELEMENT,(K+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,ue,De,ve)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ue,De,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,ue,De,ie.data);else if(g.isData3DTexture)D?(ne&&t.texStorage3D(s.TEXTURE_3D,me,be,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ue,De,ie.data)):t.texImage3D(s.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,ue,De,ie.data);else if(g.isFramebufferTexture){if(ne)if(D)t.texStorage2D(s.TEXTURE_2D,me,be,ie.width,ie.height);else{let ee=ie.width,K=ie.height;for(let ve=0;ve<me;ve++)t.texImage2D(s.TEXTURE_2D,ve,be,ee,K,0,ue,De,null),ee>>=1,K>>=1}}else if(Oe.length>0){if(D&&ne){const ee=mt(Oe[0]);t.texStorage2D(s.TEXTURE_2D,me,be,ee.width,ee.height)}for(let ee=0,K=Oe.length;ee<K;ee++)ce=Oe[ee],D?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ue,De,ce):t.texImage2D(s.TEXTURE_2D,ee,be,ue,De,ce);g.generateMipmaps=!1}else if(D){if(ne){const ee=mt(ie);t.texStorage2D(s.TEXTURE_2D,me,be,ee.width,ee.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,De,ie)}else t.texImage2D(s.TEXTURE_2D,0,be,ue,De,ie);m(g)&&f(X),Ee.__version=G.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Q(b,g,O){if(g.image.length!==6)return;const X=it(b,g),Z=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const G=i.get(Z);if(Z.version!==G.__version||X===!0){t.activeTexture(s.TEXTURE0+O);const Ee=je.getPrimaries(je.workingColorSpace),se=g.colorSpace===Pi?null:je.getPrimaries(g.colorSpace),Me=g.colorSpace===Pi||Ee===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Se=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!Se&&!ie?ue[K]=v(g.image[K],!0,n.maxCubemapSize):ue[K]=ie?g.image[K].image:g.image[K],ue[K]=Et(g,ue[K]);const De=ue[0],be=r.convert(g.format,g.colorSpace),ce=r.convert(g.type),Oe=E(g.internalFormat,be,ce,g.colorSpace),D=g.isVideoTexture!==!0,ne=G.__version===void 0||X===!0,ae=Z.dataReady;let me=C(g,De);Ve(s.TEXTURE_CUBE_MAP,g);let ee;if(Se){D&&ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Oe,De.width,De.height);for(let K=0;K<6;K++){ee=ue[K].mipmaps;for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve];g.format!==ti?be!==null?D?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ne.width,Ne.height,be,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Oe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ne.width,Ne.height,be,ce,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Oe,Ne.width,Ne.height,0,be,ce,Ne.data)}}}else{if(ee=g.mipmaps,D&&ne){ee.length>0&&me++;const K=mt(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(ie){D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,be,ce,ue[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,ue[K].width,ue[K].height,0,be,ce,ue[K].data);for(let ve=0;ve<ee.length;ve++){const nt=ee[ve].image[K].image;D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,nt.width,nt.height,be,ce,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Oe,nt.width,nt.height,0,be,ce,nt.data)}}else{D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,ce,ue[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,be,ce,ue[K]);for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve];D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,be,ce,Ne.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Oe,be,ce,Ne.image[K])}}}m(g)&&f(s.TEXTURE_CUBE_MAP),G.__version=Z.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ge(b,g,O,X,Z,G){const Ee=r.convert(O.format,O.colorSpace),se=r.convert(O.type),Me=E(O.internalFormat,Ee,se,O.colorSpace),Se=i.get(g),ie=i.get(O);if(ie.__renderTarget=g,!Se.__hasExternalTextures){const ue=Math.max(1,g.width>>G),De=Math.max(1,g.height>>G);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,Me,ue,De,g.depth,0,Ee,se,null):t.texImage2D(Z,G,Me,ue,De,0,Ee,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ye(g)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Z,ie.__webglTexture,0,lt(g)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Z,ie.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(b,g,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),g.depthBuffer){const X=g.depthTexture,Z=X&&X.isDepthTexture?X.type:null,G=S(g.stencilBuffer,Z),Ee=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=lt(g);ye(g)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,G,g.width,g.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,G,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,G,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,b)}else{const X=g.textures;for(let Z=0;Z<X.length;Z++){const G=X[Z],Ee=r.convert(G.format,G.colorSpace),se=r.convert(G.type),Me=E(G.internalFormat,Ee,se,G.colorSpace),Se=lt(g);O&&ye(g)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Me,g.width,g.height):ye(g)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,Me,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,Me,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const Z=X.__webglTexture,G=lt(g);if(g.depthTexture.format===is)ye(g)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(g.depthTexture.format===ns)ye(g)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const g=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=X}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=b.texture.mipmaps;X&&X.length>0?Te(g.__webglFramebuffer[0],b):Te(g.__webglFramebuffer,b)}else if(O){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=s.createRenderbuffer(),Ue(g.__webglDepthbuffer[X],b,!1);else{const Z=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Ue(g.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(b,g,O){const X=i.get(b);g!==void 0&&ge(X.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Xe(b)}function T(b){const g=b.texture,O=i.get(b),X=i.get(g);b.addEventListener("dispose",R);const Z=b.textures,G=b.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=g.version,a.memory.textures++),G){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let Me=0;Me<g.mipmaps.length;Me++)O.__webglFramebuffer[se][Me]=s.createFramebuffer()}else O.__webglFramebuffer[se]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)O.__webglFramebuffer[se]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let se=0,Me=Z.length;se<Me;se++){const Se=i.get(Z[se]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&ye(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const Me=Z[se];O.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const Se=r.convert(Me.format,Me.colorSpace),ie=r.convert(Me.type),ue=E(Me.internalFormat,Se,ie,Me.colorSpace,b.isXRRenderTarget===!0),De=lt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ue,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,O.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)ge(O.__webglFramebuffer[se][Me],b,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else ge(O.__webglFramebuffer[se],b,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(g)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let se=0,Me=Z.length;se<Me;se++){const Se=Z[se],ie=i.get(Se);let ue=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,ie.__webglTexture),Ve(ue,Se),ge(O.__webglFramebuffer,b,Se,s.COLOR_ATTACHMENT0+se,ue,0),m(Se)&&f(ue)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),Ve(se,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)ge(O.__webglFramebuffer[Me],b,g,s.COLOR_ATTACHMENT0,se,Me);else ge(O.__webglFramebuffer,b,g,s.COLOR_ATTACHMENT0,se,0);m(g)&&f(se),t.unbindTexture()}b.depthBuffer&&Xe(b)}function ot(b){const g=b.textures;for(let O=0,X=g.length;O<X;O++){const Z=g[O];if(m(Z)){const G=w(b),Ee=i.get(Z).__webglTexture;t.bindTexture(G,Ee),f(G),t.unbindTexture()}}}const Fe=[],Le=[];function xe(b){if(b.samples>0){if(ye(b)===!1){const g=b.textures,O=b.width,X=b.height;let Z=s.COLOR_BUFFER_BIT;const G=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=i.get(b),se=g.length>1;if(se)for(let Se=0;Se<g.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Me=b.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<g.length;Se++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ie=i.get(g[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,O,X,0,0,O,X,Z,s.NEAREST),h===!0&&(Fe.length=0,Le.length=0,Fe.push(s.COLOR_ATTACHMENT0+Se),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Fe.push(G),Le.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Se=0;Se<g.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ie=i.get(g[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const g=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function lt(b){return Math.min(n.maxSamples,b.samples)}function ye(b){const g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Be(b){const g=a.render.frame;o.get(b)!==g&&(o.set(b,g),b.update())}function Et(b,g){const O=b.colorSpace,X=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Dn&&O!==Pi&&(je.getTransfer(O)===Qe?(X!==ti||Z!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=wt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ye}function hm(s,e){function t(i,n=Pi){let r;const a=je.getTransfer(n);if(i===ci)return s.UNSIGNED_BYTE;if(i===Ca)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ra)return s.UNSIGNED_SHORT_5_5_5_1;if(i===cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===ol)return s.BYTE;if(i===ll)return s.SHORT;if(i===es)return s.UNSIGNED_SHORT;if(i===Aa)return s.INT;if(i===Zi)return s.UNSIGNED_INT;if(i===oi)return s.FLOAT;if(i===rs)return s.HALF_FLOAT;if(i===ul)return s.ALPHA;if(i===dl)return s.RGB;if(i===ti)return s.RGBA;if(i===is)return s.DEPTH_COMPONENT;if(i===ns)return s.DEPTH_STENCIL;if(i===Pa)return s.RED;if(i===Da)return s.RED_INTEGER;if(i===fl)return s.RG;if(i===La)return s.RG_INTEGER;if(i===Ia)return s.RGBA_INTEGER;if(i===Fs||i===Os||i===zs||i===ks)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$r||i===Yr||i===jr||i===Kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zr||i===Jr||i===Qr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zr||i===Jr)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ea||i===ta||i===ia||i===na||i===sa||i===ra||i===aa||i===oa||i===la||i===ca||i===ha||i===ua||i===da||i===fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ea)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ta)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ia)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===na)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ra)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===aa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===la)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===ma||i===ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pa)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_a||i===va||i===xa||i===ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`;class fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ni({vertexShader:um,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pm extends Un{constructor(e,t){super();const i=this;let n=null,r=1,a=null,l="local-floor",h=1,c=null,o=null,d=null,u=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new fm,f={},w=t.getContextAttributes();let E=null,S=null;const C=[],A=[],R=new ke;let N=null;const M=new ei;M.viewport=new pt;const y=new ei;y.viewport=new pt;const P=[M,y],z=new Ih;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=C[j];return Q===void 0&&(Q=new Er,C[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=C[j];return Q===void 0&&(Q=new Er,C[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=C[j];return Q===void 0&&(Q=new Er,C[j]=Q),Q.getHandSpace()};function q(j){const Q=A.indexOf(j.inputSource);if(Q===-1)return;const ge=C[Q];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||a),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",J);for(let j=0;j<C.length;j++){const Q=A[j];Q!==null&&(A[j]=null,C[j].disconnect(Q))}H=null,Y=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(E),p=null,u=null,d=null,n=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",$),n.addEventListener("inputsourceschange",J),w.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ue=null,Te=null;w.depth&&(Te=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=w.stencil?ns:is,Ue=w.stencil?ts:Zi);const Xe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Ji(u.textureWidth,u.textureHeight,{format:ti,type:ci,depthTexture:new Cl(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,ge),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ji(p.framebufferWidth,p.framebufferHeight,{format:ti,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await n.requestReferenceSpace(l),Ke.setContext(n),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(j){for(let Q=0;Q<j.removed.length;Q++){const ge=j.removed[Q],Ue=A.indexOf(ge);Ue>=0&&(A[Ue]=null,C[Ue].disconnect(ge))}for(let Q=0;Q<j.added.length;Q++){const ge=j.added[Q];let Ue=A.indexOf(ge);if(Ue===-1){for(let Xe=0;Xe<C.length;Xe++)if(Xe>=A.length){A.push(ge),Ue=Xe;break}else if(A[Xe]===null){A[Xe]=ge,Ue=Xe;break}if(Ue===-1)break}const Te=C[Ue];Te&&Te.connect(ge)}}const V=new F,le=new F;function fe(j,Q,ge){V.setFromMatrixPosition(Q.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);const Ue=V.distanceTo(le),Te=Q.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,wt=Te[14]/(Te[10]-1),T=Te[14]/(Te[10]+1),ot=(Te[9]+1)/Te[5],Fe=(Te[9]-1)/Te[5],Le=(Te[8]-1)/Te[0],xe=(Xe[8]+1)/Xe[0],lt=wt*Le,ye=wt*xe,Be=Ue/(-Le+xe),Et=Be*-Le;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Et),j.translateZ(Be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const mt=wt+Be,b=T+Be,g=lt-Et,O=ye+(Ue-Et),X=ot*T/b*mt,Z=Fe*T/b*mt;j.projectionMatrix.makePerspective(g,O,X,Z,mt,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function we(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let Q=j.near,ge=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),z.near=y.near=M.near=Q,z.far=y.far=M.far=ge,(H!==z.near||Y!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,Y=z.far),z.layers.mask=j.layers.mask|6,M.layers.mask=z.layers.mask&3,y.layers.mask=z.layers.mask&5;const Ue=j.parent,Te=z.cameras;we(z,Ue);for(let Xe=0;Xe<Te.length;Xe++)we(Te[Xe],Ue);Te.length===2?fe(z,M,y):z.projectionMatrix.copy(M.projectionMatrix),Ve(j,z,Ue)};function Ve(j,Q,ge){ge===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Sa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return h},this.setFoveation=function(j){h=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(j){return f[j]};let it=null;function at(j,Q){if(o=Q.getViewerPose(c||a),_=Q,o!==null){const ge=o.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ue=!1;ge.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let T=0;T<ge.length;T++){const ot=ge[T];let Fe=null;if(p!==null)Fe=p.getViewport(ot);else{const xe=d.getViewSubImage(u,ot);Fe=xe.viewport,T===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let Le=P[T];Le===void 0&&(Le=new ei,Le.layers.enable(T),Le.viewport=new pt,P[T]=Le),Le.matrix.fromArray(ot.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ot.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),T===0&&(z.matrix.copy(Le.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(Le)}const Te=n.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const T=d.getDepthInformation(ge[0]);T&&T.isValid&&T.texture&&m.init(T,n.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<ge.length;T++){const ot=ge[T].camera;if(ot){let Fe=f[ot];Fe||(Fe=new Rl,f[ot]=Fe);const Le=d.getCameraImage(ot);Fe.sourceTexture=Le}}}}for(let ge=0;ge<C.length;ge++){const Ue=A[ge],Te=C[ge];Ue!==null&&Te!==void 0&&Te.update(Ue,Q,c||a)}it&&it(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ke=new Dl;Ke.setAnimationLoop(at),this.setAnimationLoop=function(j){it=j},this.dispose=function(){}}}const Gi=new hi,mm=new st;function gm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,bl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,w,E,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),o(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?h(m,f,w,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),E=w.envMap,S=w.envMapRotation;E&&(m.envMap.value=E,Gi.copy(S),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(Gi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,w,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function o(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function _m(s,e,t,i){let n={},r={},a=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,E){const S=E.program;i.uniformBlockBinding(w,S)}function c(w,E){let S=n[w.id];S===void 0&&(_(w),S=o(w),n[w.id]=S,w.addEventListener("dispose",m));const C=E.program;i.updateUBOMapping(w,C);const A=e.render.frame;r[w.id]!==A&&(u(w),r[w.id]=A)}function o(w){const E=d();w.__bindingPointIndex=E;const S=s.createBuffer(),C=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,S),S}function d(){for(let w=0;w<l;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const E=n[w.id],S=w.uniforms,C=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,R=S.length;A<R;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=N.length;M<y;M++){const P=N[M];if(p(P,A,M,C)===!0){const z=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let q=0;q<H.length;q++){const $=H[q],J=v($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,z+Y,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,E,S,C){const A=w.value,R=E+"_"+S;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const N=C[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(w){const E=w.uniforms;let S=0;const C=16;for(let R=0,N=E.length;R<N;R++){const M=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,P=M.length;y<P;y++){const z=M[y],H=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,q=H.length;Y<q;Y++){const $=H[Y],J=v($),V=S%C,le=V%J.boundary,fe=V+le;S+=le,fe!==0&&C-fe<J.storage&&(S+=C-fe),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=J.storage}}}const A=S%C;return A>0&&(S+=C-A),w.__size=S,w.__cache={},this}function v(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(n[E.id]),delete n[E.id],delete r[E.id]}function f(){for(const w in n)s.deleteBuffer(n[w]);a=[],n={},r={}}return{bind:h,update:c,dispose:f}}class vm{constructor(e={}){const{canvas:t=Wc(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=Ht;let A=0,R=0,N=null,M=-1,y=null;const P=new pt,z=new pt;let H=null;const Y=new $e(0);let q=0,$=t.width,J=t.height,V=1,le=null,fe=null;const we=new pt(0,0,$,J),Ve=new pt(0,0,$,J);let it=!1;const at=new Fa;let Ke=!1,j=!1;const Q=new st,ge=new F,Ue=new pt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function wt(){return N===null?V:1}let T=i;function ot(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:n,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:o,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ee,!1),T===null){const I="webgl2";if(T=ot(I,x),T===null)throw ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Fe,Le,xe,lt,ye,Be,Et,mt,b,g,O,X,Z,G,Ee,se,Me,Se,ie,ue,De,be,ce,Oe;function D(){Fe=new Cf(T),Fe.init(),be=new hm(T,Fe),Le=new Mf(T,Fe,e,be),xe=new lm(T,Fe),Le.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),lt=new Df(T),ye=new jp,Be=new cm(T,Fe,xe,ye,Le,be,lt),Et=new bf(S),mt=new Af(S),b=new Fh(T),ce=new xf(T,b),g=new Rf(T,b,lt,ce),O=new If(T,g,b,lt),ie=new Lf(T,Le,Be),se=new Sf(ye),X=new Yp(S,Et,mt,Fe,Le,ce,se),Z=new gm(S,ye),G=new Zp,Ee=new nm(Fe),Se=new vf(S,Et,mt,xe,O,p,h),Me=new am(S,O,Le),Oe=new _m(T,lt,Le,xe),ue=new yf(T,Fe,lt),De=new Pf(T,Fe,lt),lt.programs=X.programs,S.capabilities=Le,S.extensions=Fe,S.properties=ye,S.renderLists=G,S.shadowMap=Me,S.state=xe,S.info=lt}D();const ne=new pm(S,T);this.xr=ne,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const x=Fe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Fe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize($,J,!1))},this.getSize=function(x){return x.set($,J)},this.setSize=function(x,I,k=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,J=I,t.width=Math.floor(x*V),t.height=Math.floor(I*V),k===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set($*V,J*V).floor()},this.setDrawingBufferSize=function(x,I,k){$=x,J=I,V=k,t.width=Math.floor(x*k),t.height=Math.floor(I*k),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(we)},this.setViewport=function(x,I,k,B){x.isVector4?we.set(x.x,x.y,x.z,x.w):we.set(x,I,k,B),xe.viewport(P.copy(we).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Ve)},this.setScissor=function(x,I,k,B){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,I,k,B),xe.scissor(z.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(x){xe.setScissorTest(it=x)},this.setOpaqueSort=function(x){le=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,k=!0){let B=0;if(x){let U=!1;if(N!==null){const te=N.texture.format;U=te===Ia||te===La||te===Da}if(U){const te=N.texture.type,he=te===ci||te===Zi||te===es||te===ts||te===Ca||te===Ra,_e=Se.getClearColor(),pe=Se.getClearAlpha(),Pe=_e.r,Ie=_e.g,Ae=_e.b;he?(_[0]=Pe,_[1]=Ie,_[2]=Ae,_[3]=pe,T.clearBufferuiv(T.COLOR,0,_)):(v[0]=Pe,v[1]=Ie,v[2]=Ae,v[3]=pe,T.clearBufferiv(T.COLOR,0,v))}else B|=T.COLOR_BUFFER_BIT}I&&(B|=T.DEPTH_BUFFER_BIT),k&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Se.dispose(),G.dispose(),Ee.dispose(),ye.dispose(),Et.dispose(),mt.dispose(),O.dispose(),ce.dispose(),Oe.dispose(),X.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ni),ne.removeEventListener("sessionend",Ga),Fi.stop()};function ae(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=lt.autoReset,I=Me.enabled,k=Me.autoUpdate,B=Me.needsUpdate,U=Me.type;D(),lt.autoReset=x,Me.enabled=I,Me.autoUpdate=k,Me.needsUpdate=B,Me.type=U}function ee(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function K(x){const I=x.target;I.removeEventListener("dispose",K),ve(I)}function ve(x){Ne(x),ye.remove(x)}function Ne(x){const I=ye.get(x).programs;I!==void 0&&(I.forEach(function(k){X.releaseProgram(k)}),x.isShaderMaterial&&X.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,k,B,U,te){I===null&&(I=Te);const he=U.isMesh&&U.matrixWorld.determinant()<0,_e=Bl(x,I,k,B,U);xe.setMaterial(B,he);let pe=k.index,Pe=1;if(B.wireframe===!0){if(pe=g.getWireframeAttribute(k),pe===void 0)return;Pe=2}const Ie=k.drawRange,Ae=k.attributes.position;let Ge=Ie.start*Pe,Je=(Ie.start+Ie.count)*Pe;te!==null&&(Ge=Math.max(Ge,te.start*Pe),Je=Math.min(Je,(te.start+te.count)*Pe)),pe!==null?(Ge=Math.max(Ge,0),Je=Math.min(Je,pe.count)):Ae!=null&&(Ge=Math.max(Ge,0),Je=Math.min(Je,Ae.count));const ft=Je-Ge;if(ft<0||ft===1/0)return;ce.setup(U,B,_e,k,pe);let rt,tt=ue;if(pe!==null&&(rt=b.get(pe),tt=De,tt.setIndex(rt)),U.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*wt()),tt.setMode(T.LINES)):tt.setMode(T.TRIANGLES);else if(U.isLine){let Re=B.linewidth;Re===void 0&&(Re=1),xe.setLineWidth(Re*wt()),U.isLineSegments?tt.setMode(T.LINES):U.isLineLoop?tt.setMode(T.LINE_LOOP):tt.setMode(T.LINE_STRIP)}else U.isPoints?tt.setMode(T.POINTS):U.isSprite&&tt.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Re=U._multiDrawStarts,ut=U._multiDrawCounts,Ye=U._multiDrawCount,Ft=pe?b.get(pe).bytesPerElement:1,tn=ye.get(B).currentProgram.getUniforms();for(let Ot=0;Ot<Ye;Ot++)tn.setValue(T,"_gl_DrawID",Ot),tt.render(Re[Ot]/Ft,ut[Ot])}else if(U.isInstancedMesh)tt.renderInstances(Ge,ft,U.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ut=Math.min(k.instanceCount,Re);tt.renderInstances(Ge,ft,ut)}else tt.render(Ge,ft)};function nt(x,I,k){x.transparent===!0&&x.side===xi&&x.forceSinglePass===!1?(x.side=Nt,x.needsUpdate=!0,cs(x,I,k),x.side=Ui,x.needsUpdate=!0,cs(x,I,k),x.side=xi):cs(x,I,k)}this.compile=function(x,I,k=null){k===null&&(k=x),f=Ee.get(k),f.init(I),E.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),x!==k&&x.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const B=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const _e=te[he];nt(_e,k,U),B.add(_e)}else nt(te,k,U),B.add(te)}),f=E.pop(),B},this.compileAsync=function(x,I,k=null){const B=this.compile(x,I,k);return new Promise(U=>{function te(){if(B.forEach(function(he){ye.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){U(x);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ze=null;function ui(x){Ze&&Ze(x)}function ni(){Fi.stop()}function Ga(){Fi.start()}const Fi=new Dl;Fi.setAnimationLoop(ui),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(x){Ze=x,ne.setAnimationLoop(x),x===null?Fi.stop():Fi.start()},ne.addEventListener("sessionstart",ni),ne.addEventListener("sessionend",Ga),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,N),f=Ee.get(x,E.length),f.init(I),E.push(f),Q.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),at.setFromProjectionMatrix(Q,li,I.reversedDepth),j=this.localClippingEnabled,Ke=se.init(this.clippingPlanes,j),m=G.get(x,w.length),m.init(),w.push(m),ne.enabled===!0&&ne.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&Js(te,I,-1/0,S.sortObjects)}Js(x,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(le,fe),Xe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Xe&&Se.addToRenderList(m,x),this.info.render.frame++,Ke===!0&&se.beginShadows();const k=f.state.shadowsArray;Me.render(k,x,I),Ke===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let he=0,_e=te.length;he<_e;he++){const pe=te[he];Xa(B,U,x,pe)}Xe&&Se.render(x);for(let he=0,_e=te.length;he<_e;he++){const pe=te[he];Wa(m,x,pe,pe.viewport)}}else U.length>0&&Xa(B,U,x,I),Xe&&Se.render(x),Wa(m,x,I);N!==null&&R===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(S,x,I),ce.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(f=E[E.length-1],Ke===!0&&se.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Js(x,I,k,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||at.intersectsSprite(x)){B&&Ue.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Q);const he=O.update(x),_e=x.material;_e.visible&&m.push(x,he,_e,k,Ue.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||at.intersectsObject(x))){const he=O.update(x),_e=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ue.copy(x.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ue.copy(he.boundingSphere.center)),Ue.applyMatrix4(x.matrixWorld).applyMatrix4(Q)),Array.isArray(_e)){const pe=he.groups;for(let Pe=0,Ie=pe.length;Pe<Ie;Pe++){const Ae=pe[Pe],Ge=_e[Ae.materialIndex];Ge&&Ge.visible&&m.push(x,he,Ge,k,Ue.z,Ae)}}else _e.visible&&m.push(x,he,_e,k,Ue.z,null)}}const te=x.children;for(let he=0,_e=te.length;he<_e;he++)Js(te[he],I,k,B)}function Wa(x,I,k,B){const U=x.opaque,te=x.transmissive,he=x.transparent;f.setupLightsView(k),Ke===!0&&se.setGlobalState(S.clippingPlanes,k),B&&xe.viewport(P.copy(B)),U.length>0&&ls(U,I,k),te.length>0&&ls(te,I,k),he.length>0&&ls(he,I,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Xa(x,I,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Ji(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?rs:ci,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const te=f.state.transmissionRenderTarget[B.id],he=B.viewport||P;te.setSize(he.z*S.transmissionResolutionScale,he.w*S.transmissionResolutionScale);const _e=S.getRenderTarget(),pe=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(te),S.getClearColor(Y),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Se.render(k);const Ie=S.toneMapping;S.toneMapping=Li;const Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Ke===!0&&se.setGlobalState(S.clippingPlanes,B),ls(x,k,B),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Je=0,ft=I.length;Je<ft;Je++){const rt=I[Je],tt=rt.object,Re=rt.geometry,ut=rt.material,Ye=rt.group;if(ut.side===xi&&tt.layers.test(B.layers)){const Ft=ut.side;ut.side=Nt,ut.needsUpdate=!0,qa(tt,k,B,Re,ut,Ye),ut.side=Ft,ut.needsUpdate=!0,Ge=!0}}Ge===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}S.setRenderTarget(_e,pe,Pe),S.setClearColor(Y,q),Ae!==void 0&&(B.viewport=Ae),S.toneMapping=Ie}function ls(x,I,k){const B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=x.length;U<te;U++){const he=x[U],_e=he.object,pe=he.geometry,Pe=he.group;let Ie=he.material;Ie.allowOverride===!0&&B!==null&&(Ie=B),_e.layers.test(k.layers)&&qa(_e,I,k,pe,Ie,Pe)}}function qa(x,I,k,B,U,te){x.onBeforeRender(S,I,k,B,U,te),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(S,I,k,B,x,te),U.transparent===!0&&U.side===xi&&U.forceSinglePass===!1?(U.side=Nt,U.needsUpdate=!0,S.renderBufferDirect(k,I,B,U,x,te),U.side=Ui,U.needsUpdate=!0,S.renderBufferDirect(k,I,B,U,x,te),U.side=xi):S.renderBufferDirect(k,I,B,U,x,te),x.onAfterRender(S,I,k,B,U,te)}function cs(x,I,k){I.isScene!==!0&&(I=Te);const B=ye.get(x),U=f.state.lights,te=f.state.shadowsArray,he=U.state.version,_e=X.getParameters(x,U.state,te,I,k),pe=X.getProgramCacheKey(_e);let Pe=B.programs;B.environment=x.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(x.isMeshStandardMaterial?mt:Et).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",K),Pe=new Map,B.programs=Pe);let Ie=Pe.get(pe);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===he)return Ya(x,_e),Ie}else _e.uniforms=X.getUniforms(x),x.onBeforeCompile(_e,S),Ie=X.acquireProgram(_e,pe),Pe.set(pe,Ie),B.uniforms=_e.uniforms;const Ae=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=se.uniform),Ya(x,_e),B.needsLights=Vl(x),B.lightsStateVersion=he,B.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ie,B.uniformsList=null,Ie}function $a(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Bs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Ya(x,I){const k=ye.get(x);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Bl(x,I,k,B,U){I.isScene!==!0&&(I=Te),Be.resetTextureUnits();const te=I.fog,he=B.isMeshStandardMaterial?I.environment:null,_e=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Dn,pe=(B.isMeshStandardMaterial?mt:Et).get(B.envMap||he),Pe=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!k.morphAttributes.position,Ge=!!k.morphAttributes.normal,Je=!!k.morphAttributes.color;let ft=Li;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ft=S.toneMapping);const rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=rt!==void 0?rt.length:0,Re=ye.get(B),ut=f.state.lights;if(Ke===!0&&(j===!0||x!==y)){const Dt=x===y&&B.id===M;se.setState(B,x,Dt)}let Ye=!1;B.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ut.state.version||Re.outputColorSpace!==_e||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==pe||B.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ie||Re.morphTargets!==Ae||Re.morphNormals!==Ge||Re.morphColors!==Je||Re.toneMapping!==ft||Re.morphTargetsCount!==tt)&&(Ye=!0):(Ye=!0,Re.__version=B.version);let Ft=Re.currentProgram;Ye===!0&&(Ft=cs(B,I,U));let tn=!1,Ot=!1,zn=!1;const dt=Ft.getUniforms(),Wt=Re.uniforms;if(xe.useProgram(Ft.program)&&(tn=!0,Ot=!0,zn=!0),B.id!==M&&(M=B.id,Ot=!0),tn||y!==x){xe.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),dt.setValue(T,"projectionMatrix",x.projectionMatrix),dt.setValue(T,"viewMatrix",x.matrixWorldInverse);const Ut=dt.map.cameraPosition;Ut!==void 0&&Ut.setValue(T,ge.setFromMatrixPosition(x.matrixWorld)),Le.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Ot=!0,zn=!0)}if(U.isSkinnedMesh){dt.setOptional(T,U,"bindMatrix"),dt.setOptional(T,U,"bindMatrixInverse");const Dt=U.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),dt.setValue(T,"boneTexture",Dt.boneTexture,Be))}U.isBatchedMesh&&(dt.setOptional(T,U,"batchingTexture"),dt.setValue(T,"batchingTexture",U._matricesTexture,Be),dt.setOptional(T,U,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",U._indirectTexture,Be),dt.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",U._colorsTexture,Be));const Xt=k.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&ie.update(U,k,Ft),(Ot||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,dt.setValue(T,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Wt.envMap.value=pe,Wt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Wt.envMapIntensity.value=I.environmentIntensity),Ot&&(dt.setValue(T,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&Hl(Wt,zn),te&&B.fog===!0&&Z.refreshFogUniforms(Wt,te),Z.refreshMaterialUniforms(Wt,B,V,J,f.state.transmissionRenderTarget[x.id]),Bs.upload(T,$a(Re),Wt,Be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Bs.upload(T,$a(Re),Wt,Be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(T,"center",U.center),dt.setValue(T,"modelViewMatrix",U.modelViewMatrix),dt.setValue(T,"normalMatrix",U.normalMatrix),dt.setValue(T,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Dt=B.uniformsGroups;for(let Ut=0,Qs=Dt.length;Ut<Qs;Ut++){const Oi=Dt[Ut];Oe.update(Oi,Ft),Oe.bind(Oi,Ft)}}return Ft}function Hl(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Vl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,I,k){const B=ye.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ye.get(x.texture).__webglTexture=I,ye.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const k=ye.get(x);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const Gl=T.createFramebuffer();this.setRenderTarget=function(x,I=0,k=0){N=x,A=I,R=k;let B=!0,U=null,te=!1,he=!1;if(x){const pe=ye.get(x);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(pe.__webglFramebuffer===void 0)Be.setupRenderTarget(x);else if(pe.__hasExternalTextures)Be.rebindTextures(x,ye.get(x.texture).__webglTexture,ye.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ae=x.depthTexture;if(pe.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(x.width!==Ae.image.width||x.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Ie=ye.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?U=Ie[I][k]:U=Ie[I],te=!0):x.samples>0&&Be.useMultisampledRTT(x)===!1?U=ye.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[k]:U=Ie,P.copy(x.viewport),z.copy(x.scissor),H=x.scissorTest}else P.copy(we).multiplyScalar(V).floor(),z.copy(Ve).multiplyScalar(V).floor(),H=it;if(k!==0&&(U=Gl),xe.bindFramebuffer(T.FRAMEBUFFER,U)&&B&&xe.drawBuffers(x,U),xe.viewport(P),xe.scissor(z),xe.setScissorTest(H),te){const pe=ye.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,k)}else if(he){const pe=I;for(let Pe=0;Pe<x.textures.length;Pe++){const Ie=ye.get(x.textures[Pe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Pe,Ie.__webglTexture,k,pe)}}else if(x!==null&&k!==0){const pe=ye.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,pe.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(x,I,k,B,U,te,he,_e=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){xe.bindFramebuffer(T.FRAMEBUFFER,pe);try{const Pe=x.textures[_e],Ie=Pe.format,Ae=Pe.type;if(!Le.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&k>=0&&k<=x.height-U&&(x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+_e),T.readPixels(I,k,B,U,be.convert(Ie),be.convert(Ae),te))}finally{const Pe=N!==null?ye.get(N).__webglFramebuffer:null;xe.bindFramebuffer(T.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,I,k,B,U,te,he,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(I>=0&&I<=x.width-B&&k>=0&&k<=x.height-U){xe.bindFramebuffer(T.FRAMEBUFFER,pe);const Pe=x.textures[_e],Ie=Pe.format,Ae=Pe.type;if(!Le.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ge),T.bufferData(T.PIXEL_PACK_BUFFER,te.byteLength,T.STREAM_READ),x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+_e),T.readPixels(I,k,B,U,be.convert(Ie),be.convert(Ae),0);const Je=N!==null?ye.get(N).__webglFramebuffer:null;xe.bindFramebuffer(T.FRAMEBUFFER,Je);const ft=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Xc(T,ft,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ge),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,te),T.deleteBuffer(Ge),T.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,k=0){const B=Math.pow(2,-k),U=Math.floor(x.image.width*B),te=Math.floor(x.image.height*B),he=I!==null?I.x:0,_e=I!==null?I.y:0;Be.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,he,_e,U,te),xe.unbindTexture()};const Wl=T.createFramebuffer(),Xl=T.createFramebuffer();this.copyTextureToTexture=function(x,I,k=null,B=null,U=0,te=null){te===null&&(U!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=U,U=0):te=0);let he,_e,pe,Pe,Ie,Ae,Ge,Je,ft;const rt=x.isCompressedTexture?x.mipmaps[te]:x.image;if(k!==null)he=k.max.x-k.min.x,_e=k.max.y-k.min.y,pe=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ie=k.min.y,Ae=k.isBox3?k.min.z:0;else{const Xt=Math.pow(2,-U);he=Math.floor(rt.width*Xt),_e=Math.floor(rt.height*Xt),x.isDataArrayTexture?pe=rt.depth:x.isData3DTexture?pe=Math.floor(rt.depth*Xt):pe=1,Pe=0,Ie=0,Ae=0}B!==null?(Ge=B.x,Je=B.y,ft=B.z):(Ge=0,Je=0,ft=0);const tt=be.convert(I.format),Re=be.convert(I.type);let ut;I.isData3DTexture?(Be.setTexture3D(I,0),ut=T.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Be.setTexture2DArray(I,0),ut=T.TEXTURE_2D_ARRAY):(Be.setTexture2D(I,0),ut=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);const Ye=T.getParameter(T.UNPACK_ROW_LENGTH),Ft=T.getParameter(T.UNPACK_IMAGE_HEIGHT),tn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ot=T.getParameter(T.UNPACK_SKIP_ROWS),zn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,rt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,rt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ie),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ae);const dt=x.isDataArrayTexture||x.isData3DTexture,Wt=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Xt=ye.get(x),Dt=ye.get(I),Ut=ye.get(Xt.__renderTarget),Qs=ye.get(Dt.__renderTarget);xe.bindFramebuffer(T.READ_FRAMEBUFFER,Ut.__webglFramebuffer),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let Oi=0;Oi<pe;Oi++)dt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ye.get(x).__webglTexture,U,Ae+Oi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ye.get(I).__webglTexture,te,ft+Oi)),T.blitFramebuffer(Pe,Ie,he,_e,Ge,Je,he,_e,T.DEPTH_BUFFER_BIT,T.NEAREST);xe.bindFramebuffer(T.READ_FRAMEBUFFER,null),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||ye.has(x)){const Xt=ye.get(x),Dt=ye.get(I);xe.bindFramebuffer(T.READ_FRAMEBUFFER,Wl),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,Xl);for(let Ut=0;Ut<pe;Ut++)dt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Xt.__webglTexture,U,Ae+Ut):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Xt.__webglTexture,U),Wt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Dt.__webglTexture,te,ft+Ut):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Dt.__webglTexture,te),U!==0?T.blitFramebuffer(Pe,Ie,he,_e,Ge,Je,he,_e,T.COLOR_BUFFER_BIT,T.NEAREST):Wt?T.copyTexSubImage3D(ut,te,Ge,Je,ft+Ut,Pe,Ie,he,_e):T.copyTexSubImage2D(ut,te,Ge,Je,Pe,Ie,he,_e);xe.bindFramebuffer(T.READ_FRAMEBUFFER,null),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Wt?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(ut,te,Ge,Je,ft,he,_e,pe,tt,Re,rt.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(ut,te,Ge,Je,ft,he,_e,pe,tt,rt.data):T.texSubImage3D(ut,te,Ge,Je,ft,he,_e,pe,tt,Re,rt):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,te,Ge,Je,he,_e,tt,Re,rt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,te,Ge,Je,rt.width,rt.height,tt,rt.data):T.texSubImage2D(T.TEXTURE_2D,te,Ge,Je,he,_e,tt,Re,rt);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ye),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ft),T.pixelStorei(T.UNPACK_SKIP_PIXELS,tn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ot),T.pixelStorei(T.UNPACK_SKIP_IMAGES,zn),te===0&&I.generateMipmaps&&T.generateMipmap(ut),xe.unbindTexture()},this.initRenderTarget=function(x){ye.get(x).__webglFramebuffer===void 0&&Be.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Be.setTextureCube(x,0):x.isData3DTexture?Be.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Be.setTexture2DArray(x,0):Be.setTexture2D(x,0),xe.unbindTexture()},this.resetState=function(){A=0,R=0,N=null,xe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const L={grass:"#71987a",ground:"#c8c6b0",wall:"#e6dfcb",brick:"#b97059",wood:"#ae9476",blue:"#7e969e",green:"#234c42",yellow:"#e5bd4a",hair:"#704a35",skin:"#d8a783",white:"#f4efdd",dark:"#3d4c4e",orange:"#e8904b"},qe=(s,e,t,i,n=[0,0,0])=>({shape:s,p:e,s:t,color:i,r:n}),W=(s,e,t,i=[0,0,0])=>qe("box",s,e,t,i),ht=(s,e,t,i=[0,0,0])=>qe("cyl",s,e,t,i);function qs(s){switch(s){case"basketball":return[qe("sphere",[0,.25,0],[.5,.5,.5],L.orange),W([0,.25,0],[.51,.035,.035],L.dark),W([0,.25,0],[.035,.035,.51],L.dark)];case"traffic_cone":return[qe("cone",[0,.4,0],[.6,.8,.6],L.orange),W([0,.04,0],[.75,.08,.75],L.orange),ht([0,.3,0],[.48,.12,.48],L.white)];case"broom":return[ht([0,.8,0],[.065,1.5,.065],L.wood),W([0,.1,0],[.5,.22,.15],L.yellow)];case"toy_mallet":return[ht([0,.5,0],[.08,1,.08],L.wood),W([0,1,0],[.65,.32,.35],"#bd6d77")];case"drumstick":return[ht([0,.35,0],[.045,.7,.045],L.wood),qe("sphere",[0,.72,0],[.08,.09,.08],L.wood)];case"recorder":return[ht([0,.3,0],[.09,.6,.09],L.white),W([0,.42,.055],[.025,.26,.025],L.dark)];case"spinning_top":return[qe("cone",[0,.18,0],[.32,.3,.32],"#bc7084",[Math.PI,0,0]),ht([0,.35,0],[.08,.16,.08],L.yellow)];case"trophy":return[W([0,.04,0],[.45,.08,.32],L.wood),ht([0,.2,0],[.1,.3,.1],L.yellow),qe("cone",[0,.5,0],[.45,.4,.45],L.yellow),qe("torus",[0,.5,0],[.5,.5,.5],L.yellow)];case"principal_wig":return[qe("sphere",[0,.1,0],[.5,.25,.45],L.hair),W([0,0,-.05],[.45,.18,.32],L.hair)];case"principal_glasses":return[qe("torus",[-.1,.1,0],[.17,.17,.17],L.dark),qe("torus",[.1,.1,0],[.17,.17,.17],L.dark),W([0,.1,0],[.09,.025,.025],L.dark)];case"wall_clock":return[ht([0,.35,0],[.62,.06,.62],L.white,[Math.PI/2,0,0]),W([0,.42,.05],[.025,.2,.025],L.dark),W([.09,.35,.05],[.2,.025,.025],L.dark)];case"laptop":return[W([0,.05,0],[.6,.07,.4],L.blue),W([0,.24,-.18],[.6,.4,.035],L.dark),W([0,.24,-.155],[.5,.28,.012],L.green)];case"piano":return[W([0,.75,0],[2,.85,.8],L.dark),W([0,.75,.55],[1.8,.1,.45],L.white),W([0,1.22,-.1],[2.1,.08,.8],L.dark),...[-.8,.8].map(e=>W([e,.35,0],[.14,.7,.14],L.dark)),...Array.from({length:10},(e,t)=>W([-.78+t*.17,.82,.47],[.05,.06,.18],L.dark))];case"music_stand":return[ht([0,.65,0],[.05,1.2,.05],L.dark),W([0,1.2,0],[.6,.4,.035],L.dark,[-.25,0,0]),W([0,.04,0],[.55,.05,.06],L.dark),W([0,.04,0],[.06,.05,.55],L.dark)];case"coffee_machine":return[W([0,.4,0],[.65,.8,.5],L.dark),W([0,.56,.26],[.42,.2,.03],L.blue),W([0,.1,.3],[.6,.06,.3],L.dark),ht([.2,.58,.3],[.08,.08,.08],L.yellow,[Math.PI/2,0,0])];case"coffee_cup":return[ht([0,.13,0],[.22,.26,.22],L.white),qe("torus",[.14,.12,0],[.16,.16,.16],L.white),ht([0,.265,0],[.18,.012,.18],L.hair)];case"office_chair":return[W([0,.5,0],[.7,.15,.65],L.blue),W([0,.85,-.27],[.7,.65,.12],L.blue),ht([0,.25,0],[.06,.5,.06],L.dark),W([0,.05,0],[.9,.05,.06],L.dark),W([0,.05,0],[.06,.05,.9],L.dark)];case"trash_bin":return[ht([0,.4,0],[.65,.8,.65],L.blue),ht([0,.82,0],[.55,.04,.55],L.dark)];case"badminton_racket":case"table_tennis_racket":return[ht([0,.3,0],[.06,.6,.06],L.wood),qe(s==="badminton_racket"?"torus":"sphere",[0,.7,0],s==="badminton_racket"?[.48,.6,.15]:[.32,.4,.06],s==="badminton_racket"?L.white:L.brick),W([0,.7,0],[.015,.4,.02],L.white)];case"triangle":return[W([-.15,.3,0],[.035,.5,.035],L.blue,[0,0,-.55]),W([.15,.3,0],[.035,.5,.035],L.blue,[0,0,.55]),W([0,.08,0],[.5,.035,.035],L.blue)];case"castanets":return[qe("sphere",[-.1,.08,0],[.18,.1,.2],L.hair),qe("sphere",[.1,.08,0],[.18,.1,.2],L.hair)];case"stopwatch":return[ht([0,.15,0],[.22,.06,.22],L.blue,[Math.PI/2,0,0]),W([0,.28,0],[.065,.065,.065],L.dark)];case"chalk_eraser":return[W([0,.06,0],[.3,.12,.14],L.wood),W([0,.13,0],[.3,.04,.14],L.dark)];case"soft_parcel":case"cardboard_box":return[W([0,.23,0],[.55,.46,.45],s==="soft_parcel"?"#ba7785":L.wood),W([0,.465,0],[.12,.01,.45],L.white)];default:{let e={folder:L.brick,textbook:L.blue,exam_a:"#b8d7cd",exam_b:"#ead893"};return[W([0,.035,0],[.42,.07,.32],e[s]||L.white),W([-.1,.08,0],[.18,.01,.2],s==="folder"?L.white:L.blue)]}}}function xm(s,e=!1){const t=[W([0,.8,0],[1.6,.14,.85],L.wood),...[-.65,.65].flatMap(i=>[-.28,.28].map(n=>W([i,.4,n],[.09,.8,.09],L.dark)))];switch(s){case"table":case"desk":return t;case"bench":return[W([0,.5,0],[1.6,.12,.55],L.wood),W([0,.85,-.28],[1.6,.55,.08],L.wood),W([-.6,.25,0],[.1,.5,.45],L.dark),W([.6,.25,0],[.1,.5,.45],L.dark)];case"chair":return qs("office_chair");case"planter":return[ht([0,.3,0],[.6,.6,.6],L.brick),qe("sphere",[0,.7,0],[.6,.7,.6],L.grass)];case"dummy":return[ht([0,.6,0],[.1,1.2,.1],L.wood),qe("sphere",[0,1.2,0],[.45,.45,.45],L.yellow),W([0,.8,0],[.6,.5,.22],L.brick),W([0,.03,0],[.7,.06,.7],L.wood)];case"podium":return[W([0,.5,0],[1.4,1,.8],L.wood),W([0,1,0],[1.55,.09,.9],L.green)];case"shelter":return[W([0,1,0],[1.3,2,1.5],L.blue),W([0,1,.77],[.55,1.8,.03],L.dark)];case"bed":return[W([0,.5,0],[1.6,.25,.8],L.white),W([-.55,.68,0],[.4,.15,.65],L.blue),W([0,.22,0],[1.4,.44,.6],L.wood)];case"cabinet":return[W([0,.75,0],[1.2,1.5,.6],L.white),W([0,1,.31],[.3,.09,.02],L.brick),W([0,1,.31],[.09,.3,.02],L.brick)];case"stall":return[...t,W([0,2,0],[2.8,.15,1.5],L.brick),W([-1.2,1,0],[.09,2,.09],L.wood),W([1.2,1,0],[.09,2,.09],L.wood)];default:return t}}function el(s,e,t=!1,i=[]){const n=["Walk","Flee","Chase","Tattle","Gather","Seat","Leave","ReturnItem","walk","run","dodge"].includes(s.state||s.action),r=s.state||s.action,a=n?Math.sin(e*(r==="run"?14:9))*.45:0;let l=L.skin,h=t?L.yellow:s.role==="student"?L.white:s.role==="staff"?L.blue:L.brick;s.role==="staff"&&(h={nurse:L.white,shop_aunt:L.brick,guard_uncle:L.blue,pe_teacher:L.green,principal:L.dark,dean:"#626c82"}[s.type]||h),(s.role==="parent"||s.role==="visitor")&&(h={yoga:"#ad83a8",sports:"#547b92",runner:"#8b9b54",neat:"#e6dfcb",armored:"#717b81",drama:"#bc7084",gardener:"#829b64",courier:"#ae9476",photographer:"#465a67",whistle:"#bd8e55",duo:"#7e969e"}[s.type]||h);let c=[qe("sphere",[0,1.48,0],[.42,.46,.4],l),W([0,1.01,0],[.42,.56,.27],h)];t?(c.push(qe("cyl",[0,.53,0],[.69,.81,.6],L.yellow),W([-.11,1.26,.16],[.12,.14,.045],L.white,[0,0,-.3]),W([.11,1.26,.16],[.12,.14,.045],L.white,[0,0,.3])),c.push(qe("sphere",[0,1.64,-.02],[.46,.28,.44],L.hair),W([-.18,1.48,-.01],[.12,.36,.3],L.hair),W([.18,1.48,-.01],[.12,.36,.3],L.hair),W([0,1.46,-.18],[.4,.34,.09],L.hair))):(c.push(W([0,1.65,-.03],[.44,.16,.35],s.type==="principal"?"#726250":L.hair)),s.role!=="student"&&c.push(W([0,.72,0],[.46,.1,.27],L.dark)));let o=i.includes("shoes_red")?L.brick:i.includes("shoes_teal")?L.green:L.hair;for(let d of[-1,1]){let u=d*.14;c.push(W([u,t?.18:.38,Math.sin(a*d)*.13],[.13,t?.22:.6,.14],t?l:L.dark,[a*d,0,0]),W([u,.065,.07+Math.sin(a*d)*.18],[.18,.13,.29],o));let p=-a*d;["Attack","attack","conduct"].includes(r)&&(p=d===1?-1.25-Math.sin(e*20)*.25:0),["Call","Film","Surprise","Gate","roll","teach","piano","play"].includes(r)&&(p=-1.2),r==="Clean"&&(p=-.7),["throw","wear"].includes(r)&&(p=d===1?-2:0),["pickup","drop","leaveHide"].includes(r)&&(p=-.5),r==="idle"&&Math.floor(e)%18===0&&(p=d===1?-1.1:0),c.push(W([d*.31,1.01,Math.sin(p)*-.15],[.14,.5,.15],h,[p,0,d*.08]),qe("sphere",[d*.32,.76,Math.sin(p)*-.3],[.14,.14,.14],l))}if(c.push(W([-.09,1.49,.196],[.035,.035,.012],L.dark),W([.09,1.49,.196],[.035,.035,.012],L.dark)),(r==="Film"||r==="Call")&&c.push(W([.32,1.43,.18],[.1,.17,.035],L.dark)),s.type==="nurse"&&c.push(W([0,1.73,0],[.36,.1,.32],L.white),W([0,1.74,.17],[.13,.025,.015],L.brick),W([0,1.74,.17],[.025,.08,.015],L.brick)),s.type==="guard_uncle"&&c.push(W([0,1.73,0],[.5,.1,.48],L.blue)),s.type==="shop_aunt"&&c.push(W([0,.87,.17],[.35,.4,.03],L.white)),s.type==="principal"&&c.push(W([0,1.2,.15],[.05,.28,.025],L.brick)),s.role==="parent"||s.role==="visitor")switch(s.type){case"spatula":c.push(ht([.37,.85,.2],[.05,.5,.05],L.dark),W([.37,1.12,.2],[.18,.2,.04],L.blue));break;case"briefcase":c.push(W([.43,.55,0],[.35,.3,.12],L.hair));break;case"shopping_bag":c.push(W([.4,.6,0],[.35,.45,.22],L.green));break;case"umbrella":c.push(qe("cone",[.35,1.8,.1],[1,.25,1],L.blue),ht([.35,1.1,.1],[.03,1.4,.03],L.wood));break;case"gardener":c.push(ht([.4,.9,0],[.05,1.6,.05],L.wood),W([.4,.12,0],[.45,.24,.13],L.yellow));break;case"yoga":c.push(W([0,1.64,.17],[.43,.06,.04],"#dbb4d7"));break;case"courier":c.push(W([0,1.71,0],[.5,.08,.5],L.yellow),W([.38,.7,.1],[.4,.3,.3],L.wood));break;case"photographer":c.push(W([0,1.18,.2],[.25,.16,.13],L.dark),ht([0,1.18,.29],[.1,.08,.1],L.blue,[Math.PI/2,0,0]));break;case"whistle":c.push(qe("sphere",[0,1.12,.2],[.09,.09,.09],L.yellow));break;case"camper":c.push(W([0,1.72,0],[.7,.05,.65],L.wood));break;case"runner":case"sports":c.push(W([0,1.62,.2],[.43,.055,.025],L.white));break;case"neat":c.push(W([0,.93,.155],[.34,.45,.025],L.white));break;case"armored":c.push(W([0,1.05,.16],[.45,.45,.07],L.dark),W([-.14,.35,.1],[.2,.18,.08],L.blue),W([.14,.35,.1],[.2,.18,.08],L.blue));break;case"drama":c.push(W([0,1.1,-.23],[.5,.9,.05],"#844968"));break;case"pta_leader":c.push(W([0,1.1,.16],[.42,.12,.035],L.yellow));break;case"duo":c.push(W([0,1.65,.18],[.43,.06,.025],L.yellow));break;case"protective":c.push(W([.4,.7,0],[.2,.3,.2],L.yellow));break;case"nagging":c.push(W([0,1.71,0],[.2,.12,.2],L.hair));break}return i.some(d=>d.startsWith("badge"))&&c.push(qe("sphere",[-.13,1.18,.16],[.08,.08,.035],L.green)),i.some(d=>d.startsWith("glasses"))&&c.push(...qs("principal_glasses").map(d=>({...d,p:[d.p[0],d.p[1]+1.38,d.p[2]+.22],color:i.includes("glasses_blue")?L.blue:d.color}))),["pickup","drop"].includes(r)&&(c=c.map(d=>({...d,p:[d.p[0],d.p[1]*.85,d.p[2]+d.p[1]*.12]}))),r==="hit"&&(c=c.map(d=>({...d,p:[d.p[0],d.p[1]*.8,d.p[2]-.1]}))),(s.hp===0||r==="Recover")&&(c=c.map(d=>({...d,p:[d.p[0],d.p[1]*.4,d.p[2]+d.p[1]*.15]}))),c}class ym{constructor(e,t){this.canvas=e,this.game=t,this.renderer=new vm({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor("#9cae97"),this.renderer.outputColorSpace=Ht,this.scene.add(new Rh("#fff6de","#a4b6a5",1.6));const i=new Lh("#fff3d6",1.7);i.position.set(-20,35,10),this.scene.add(i);const n=new wh({color:"white",flatShading:!0});let r={box:new Fn(1,1,1),cyl:new Ys(.43,.5,1,8),sphere:new ka(.5,8,6),cone:new za(.5,1,8),torus:new Ba(.4,.055,4,12),disc:new Oa(.5,12)};for(let[a,l]of Object.entries(r)){let h=new Mh(l,n,6e3);h.instanceMatrix.setUsage(Vc),h.frustumCulled=!1,this.batches.set(a,{mesh:h,count:0}),this.scene.add(h)}this.geometryCount=Object.keys(r).length,this.resize(),t.listeners.push(a=>{if(a.type==="reset"){this.effects=[];return}if(["CombatResolved","propDamaged","spill","mess","instrument","paperCollected"].includes(a.type)){let l=t.npcs.find(h=>h.id===a.targetId)||t.props.find(h=>h.id===a.data.id)||t.objects.get(a.data.id)||t.player;for(let h=0;h<4;h++)this.effects.length<(t.profile.settings.quality==="low"?48:96)&&this.effects.push({x:l.x,z:l.z,start:t.time,index:h,type:a.type})}}),window.addEventListener("resize",()=>this.resize())}scene=new gh;camera=new Ha(-15,15,12,-12,.1,200);renderer;batches=new Map;staticParts=[];dummy=new yt;color=new $e;ray=new Uh;plane=new Ri(new F(0,1,0),0);pointer=new ke;target=new F;lastSession=-1;fps=0;frames=[];calls=0;triangles=0;quality="standard";autoLow=!1;slow=0;fast=0;labels=[];geometryCount=0;ctxLost=!1;alpha=1;effects=[];resize(){let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight,i=e/t,n=i<1?13:11.5;this.camera.left=-n*i,this.camera.right=n*i,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.setDPR()}setDPR(){let e=this.game.profile.settings.quality;this.quality=e==="low"||e==="auto"&&this.autoLow?"low":"standard",this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality==="low"?1:1.5))}add(e,t,i=0,n=1,r=0){for(let a of e){if(a.hidden)continue;let l=a.p[0]*n,h=a.p[1]*n,c=a.p[2]*n,o=Math.cos(i),d=Math.sin(i);this.dummy.position.set(t[0]+l*o+c*d,t[1]+h,t[2]-l*d+c*o),this.dummy.rotation.set((a.r?.[0]||0)+r,i+(a.r?.[1]||0),a.r?.[2]||0),this.dummy.scale.set(a.s[0]*n,a.s[1]*n,a.s[2]*n),this.dummy.updateMatrix();let u=this.batches.get(a.shape);u.count>=6e3||(u.mesh.setMatrixAt(u.count,this.dummy.matrix),u.mesh.setColorAt(u.count,this.color.set(a.color)),u.count++)}}label(e,t,i=2.7){let n=document.createElement("canvas");n.width=512,n.height=128;let r=n.getContext("2d");r.fillStyle="#f4efdd",r.fillRect(0,0,512,128),r.fillStyle=L.green,r.font="bold 48px system-ui",r.textAlign="center",r.fillText(e,256,81);let a=new Th(n),l=new wl({map:a,depthTest:!0}),h=new vh(l);h.position.set(t.x,.18,t.z),h.scale.set(i,i/4,1),this.scene.add(h),this.labels.push(h)}rebuild(){this.staticParts=[];for(let t of this.labels)this.scene.remove(t),t.material.map?.dispose(),t.material.dispose();this.labels=[];let e=(t,i=[0,0,0])=>this.staticParts.push({parts:t,p:i});e([W([0,-.2,0],[64,.35,52],L.grass),W([0,-.03,4],[24,.06,27],L.ground),W([0,-.02,-11],[60,.06,6],L.ground),W([-12,-.02,-1],[4,.06,24],L.ground),W([12,-.02,-1],[4,.06,24],L.ground)]);for(let t of Ki){let i={x:(t.x1+t.x2)/2,z:(t.z1+t.z2)/2};if(["classroom","music_room","staff_room","principal_room","infirmary"].includes(t.id)&&e([W([i.x,0,i.z],[t.x2-t.x1,.08,t.z2-t.z1],L.white)]),t.id==="playground"){e([W([i.x,.005,i.z],[15,.06,15],L.brick),W([i.x,.05,i.z],[.05,.03,14],L.white),W([i.x,.05,11],[13,.03,.06],L.white),W([i.x,.05,23],[13,.03,.06],L.white)]);for(let n of[-28,-26,-24,-22,-20,-18,-16])e([W([n,.05,19],[.06,.03,8],L.white)])}this.label(t.label,{x:i.x,z:t.z1+.9},t.id==="courtyard"?4:3)}for(let t of[-30,30])for(let i of[-20,-8,6,20])e([ht([t,.8,i],[.35,1.6,.35],L.wood),qe("sphere",[t,2.2,i],[2.6,3,2.6],L.grass),qe("sphere",[t+.7,2.7,i],[2.1,2.1,2.1],"#86a486")]);for(let t=-30;t<=30;t+=3)e([W([t,.55,25],[.1,1.1,.1],L.blue)]);if(e([W([-5,1.5,23],[.35,3,.35],L.brick),W([5,1.5,23],[.35,3,.35],L.brick),W([0,2.8,23],[10.3,.5,.45],L.green)]),this.label("東山・虛構校園",{x:0,z:24},4),e([W([-25,1.7,-21.7],[5,1.6,.05],L.green)]),this.game.mode!=="normal"){e([W([0,.1,4],[10,.2,6],L.wood)]);for(let t=-5;t<=5;t+=2)e([qe("cone",[t,2.7,9],[.65,.7,.05],t%4?L.yellow:L.brick,[0,0,Math.PI])]);this.label(this.game.mode==="choir_contest"?"合唱團比賽":"今日活動",{x:0,z:2},4)}this.lastSession=this.game.session}position(e,t){let i=this.game.previous.get(e);return!i||re(i,t)>4?t:{x:i.x+(t.x-i.x)*this.alpha,z:i.z+(t.z-i.z)*this.alpha}}frame(e,t=!0,i=1){if(this.alpha=i,this.ctxLost)return;this.lastSession!==this.game.session&&this.rebuild();for(let o of this.batches.values())o.count=0;for(let o of this.staticParts)this.add(o.parts,o.p);let n=this.game;for(let o of n.world.walls){let u=xt(n.player)===o.zone&&(o.id.endsWith("front")||o.id.endsWith("door-b")||o.id.endsWith("outer")&&o.x>0||o.id==="inf-door-r");this.add([W([0,u?.2:1.25,0],[o.w,u?.4:2.5,o.d],L.wall),W([0,u?.42:2.55,0],[o.w+.05,.08,o.d+.05],L.brick)],[o.x,0,o.z])}for(let o of n.props)this.add(xm(o.type),[o.x,o.broken?.1:0,o.z],o.broken?.65:0,1,o.broken?Math.PI/2:0);for(let o of n.objects.values()){if(o.state==="reserved")continue;if(o.papers?.some(v=>!v.taken)){for(let v of o.papers)v.taken||this.add(qs("exam_papers"),[v.x,.02,v.z]);continue}let d=this.position(o.id,o),u=[d.x,o.y,d.z],p=0;if(o.state==="held"){let v=o.owner===n.player.id?n.player:n.npcs.find(m=>m.id===o.owner);if(v){let m=Math.atan2(v.face.x,v.face.z),f=this.position(v.id,v);u=[f.x+.36*Math.cos(m)+.18*Math.sin(m),.88,f.z-.36*Math.sin(m)+.18*Math.cos(m)],p=m}}o.state==="worn"&&(u=[n.player.x,1.6,n.player.z],p=Math.atan2(n.player.face.x,n.player.face.z),o.type==="principal_glasses"&&(u[1]=1.38,u[0]+=n.player.face.x*.23,u[2]+=n.player.face.z*.23));let _=qs(o.type);o.type==="piano"&&n.player.action==="piano"&&re(o,n.player)<3&&(_[2]={..._[2],r:[Math.sin(n.time*5)*.2,0,0]}),this.add(_,u,p,o.type==="principal_wig"&&o.state==="worn"?1.1:1,o.broken&&o.type!=="principal_wig"?.6:0),o.state==="airborne"&&this.add([qe("disc",[0,.03,0],[.5,.5,.5],"#97a28c",[-Math.PI/2,0,0])],[o.x,0,o.z])}let r=n.player,a=this.position(r.id,r);this.add(el(r,n.time,!0,n.profile.equipped),[a.x,r.hidden?-.9:0,a.z],Math.atan2(r.face.x,r.face.z)),this.add([qe("disc",[0,.025,0],[.72,.72,.72],"#a4a387",[-Math.PI/2,0,0])],[a.x,0,a.z]);for(let o of n.npcs){if(!o.active&&re(o,r)>26)continue;let d=this.position(o.id,o);if(this.add(el(o,n.time,!1),[d.x,0,d.z],Math.atan2(o.face.x,o.face.z),o.role==="student"?.85:1),o.state==="Attack"&&this.add([qe("torus",[0,.04,0],[1.5,1.5,1.5],L.orange,[Math.PI/2,0,0])],[o.x,0,o.z]),o.state==="Recover")for(let u=0;u<3;u++)this.add([qe("sphere",[Math.cos(n.time*2+u*2)*.4,1.2,Math.sin(n.time*2+u*2)*.4],[.1,.1,.1],L.yellow)],[o.x,0,o.z])}if(n.step&&["place","deliver"].includes(n.step.kind))for(let o=0;o<(n.step.count||1);o++){let d=Jn(n.step,o);this.add([qe("torus",[0,.065,0],[1.6,1.6,1.6],L.yellow,[Math.PI/2,0,0]),W([0,.08,0],[.12,.02,1.2],L.yellow),W([0,.08,0],[1.2,.02,.12],L.yellow)],[d.x,0,d.z])}if(n.race){let d=[[-25,15],[-25,21],[-18,21],[-18,15],[-21,15]][n.race.checkpoint];this.add([qe("torus",[0,.1,0],[1.4,1.4,1.4],L.yellow,[Math.PI/2,0,0])],[d[0],0,d[1]])}let l=n.nearest();l&&re(l,r)<2.5&&this.add([qe("cone",[0,2.5+Math.sin(n.time*3)*.06,0],[.2,.3,.2],L.yellow,[Math.PI,0,0])],[l.x,0,l.z]),this.effects=this.effects.filter(o=>n.time-o.start<2.6);for(let o of this.effects){let d=n.time-o.start,u=n.profile.settings.lowMotion?.08:.25;this.add([W([Math.sin(o.index*2)*d*u,1+d*.25,Math.cos(o.index*2)*d*u],[.05,.025,.08],o.type==="instrument"?L.yellow:L.white,[d,0,d])],[o.x,0,o.z])}for(let o of this.batches.values())o.mesh.count=o.count,o.mesh.instanceMatrix.needsUpdate=!0,o.mesh.instanceColor&&(o.mesh.instanceColor.needsUpdate=!0);this.target.lerp(new F(r.x,0,r.z),Math.min(1,e*7));let h=25,c=13.5;this.camera.position.copy(this.target).add(new F(c,h,c)),this.camera.lookAt(this.target),this.renderer.render(this.scene,this.camera),this.calls=this.renderer.info.render.calls,this.triangles=this.renderer.info.render.triangles,e>0&&t&&(this.frames.push(e*1e3),this.frames.length>1200&&this.frames.shift(),this.fps=1/e,n.profile.settings.quality==="auto"&&(e>.033?(this.slow+=e,this.fast=0):(this.fast+=e,this.slow=Math.max(0,this.slow-e)),this.slow>3&&!this.autoLow&&(this.autoLow=!0,this.setDPR()),this.fast>20&&this.autoLow&&(this.autoLow=!1,this.setDPR())))}aim(e,t){let i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);let n=new F;if(this.ray.ray.intersectPlane(this.plane,n)){let r=this.game.player,a=n.x-r.x,l=n.z-r.z,h=Math.hypot(a,l);h>.1&&(r.face={x:a/h,z:l/h})}}inView(e){let t=new F(e.x,1,e.z).project(this.camera);return Math.abs(t.x)<1.2&&Math.abs(t.y)<1.2&&t.z>-1&&t.z<1}project(e,t=2.4){let i=new F(e.x,t,e.z).project(this.camera);return{x:(i.x+1)/2*this.canvas.clientWidth,y:(1-i.y)/2*this.canvas.clientHeight}}measure(){let e=[...this.frames].sort((t,i)=>t-i);return{fps:this.fps,p50:e[Math.floor(e.length*.5)]||0,p95:e[Math.floor(e.length*.95)]||0,drawCalls:this.calls,triangles:this.triangles,geometry:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,activeNPC:this.game.npcs.filter(t=>t.active).length,aiMs:this.game.aiMs,simulationMs:this.game.tickMs,quality:this.quality,samples:e.length}}}class Mm{keys=new Set;stick={x:0,z:0};pointer=null;actionPointers=new Set;enabled=!1;onAction=()=>{};onPause=()=>{};onAim=()=>{};knob;constructor(e,t,i){this.knob=i,window.addEventListener("keydown",a=>{if(a.code==="Escape"){this.clear(),this.onPause();return}if(!this.enabled||a.target instanceof HTMLInputElement||a.target instanceof HTMLSelectElement||a.target instanceof HTMLTextAreaElement||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault(),a.repeat))return;this.keys.add(a.code);let l={KeyJ:"attack",KeyK:"dodge",Space:"dodge",KeyE:"interact",KeyQ:"throw",KeyR:"drop",KeyF:"roll",Enter:"conduct"}[a.code];l&&(a.preventDefault(),this.onAction(l))}),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>this.clear()),e.addEventListener("pointermove",a=>{this.enabled&&a.pointerType==="mouse"&&this.onAim(a.clientX,a.clientY)}),e.addEventListener("pointerdown",a=>{this.enabled&&a.pointerType==="mouse"&&a.button===0&&(this.onAim(a.clientX,a.clientY),this.onAction("attack"))});const n=a=>{let l=t.getBoundingClientRect(),h=43,c=(a.clientX-l.left-l.width/2)/h,o=(a.clientY-l.top-l.height/2)/h,d=Math.max(1,Math.hypot(c,o));this.stick={x:c/d,z:o/d},i.style.transform=`translate(${c/d*30}px,${o/d*30}px)`};t.addEventListener("pointerdown",a=>{!this.enabled||this.pointer!==null||this.actionPointers.size>1||(a.preventDefault(),this.pointer=a.pointerId,t.setPointerCapture(a.pointerId),n(a))}),t.addEventListener("pointermove",a=>{a.pointerId===this.pointer&&n(a)});const r=a=>{a.pointerId===this.pointer&&(this.pointer=null,this.stick={x:0,z:0},i.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r)}bindButton(e,t,i){let n=0,r;e.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),!(!this.enabled||this.actionPointers.size>=1)&&(this.actionPointers.add(l.pointerId),e.setPointerCapture(l.pointerId),n=performance.now(),i?r=setTimeout(i,420):this.onAction(t))});let a=(l,h=!1)=>{this.actionPointers.has(l.pointerId)&&(this.actionPointers.delete(l.pointerId),clearTimeout(r),i&&!h&&performance.now()-n<420&&this.enabled&&this.onAction(t))};e.addEventListener("pointerup",l=>a(l)),e.addEventListener("pointercancel",l=>a(l,!0)),e.addEventListener("lostpointercapture",l=>a(l,!0)),e.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.enabled&&this.onAction(t))})}clear(){this.knob&&(this.knob.style.transform=""),this.keys.clear(),this.pointer=null,this.actionPointers.clear(),this.stick={x:0,z:0}}movement(){if(!this.enabled)return{x:0,z:0,run:!1};let e=this.stick.x,t=this.stick.z;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t=-1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e=-1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e=1);let i=Math.hypot(e,t),n=Math.max(1,i);return e/=n,t/=n,{x:(e+t)*Math.SQRT1_2,z:(t-e)*Math.SQRT1_2,run:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||Math.hypot(this.stick.x,this.stick.z)>.8}}}class Sm{constructor(e){this.game=e,e.listeners.push(t=>this.event(t))}ctx=null;master=null;musicGain=null;sfxGain=null;voices=new Set;musicVoices=new Set;paused=!0;timer;nextTime=0;beat=0;theme="";songOffset=0;fail="";lastSfx=new Map;async unlock(){try{if(!this.ctx){this.ctx=new AudioContext,this.master=this.ctx.createGain();let e=this.ctx.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=8,this.master.gain.value=.3,this.master.connect(e),e.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.sfxGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.sfxGain.connect(this.master),this.timer=setInterval(()=>this.schedule(),25)}return await this.ctx.resume(),this.configure(),this.paused=!1,this.nextTime=this.ctx.currentTime+.03,!0}catch{return this.fail="音訊未啟用，靜音仍可遊玩",!1}}configure(){if(!this.ctx)return;let e=this.game.profile.settings;this.musicGain.gain.setTargetAtTime(e.mute?0:e.music,this.ctx.currentTime,.2),this.sfxGain.gain.setTargetAtTime(e.mute?0:e.sfx,this.ctx.currentTime,.05)}note(e,t,i=.12,n=!1,r="sine",a=.25){if(!this.ctx||this.paused)return;let l=n?this.musicVoices:this.voices,h=n?6:12;if(l.size>=h)return;let c=this.ctx.createOscillator(),o=this.ctx.createGain();c.type=r,c.frequency.setValueAtTime(e,t),o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(a,t+.012),o.gain.exponentialRampToValueAtTime(.001,t+i),c.connect(o),o.connect(n?this.musicGain:this.sfxGain),l.add(c),c.start(t),c.stop(t+i+.02),c.onended=()=>{l.delete(c),c.disconnect(),o.disconnect()}}event(e){if(!this.ctx||this.paused)return;let t=this.ctx.currentTime,i=e.type,r={move:120,swing:240,CombatResolved:180,playerHit:110,throw:360,land:150,take:580,drop:300,propDamaged:90,notice:440,alertFall:330,contactComplete:680,familyArrived:220,NPCDowned:160,recover:520,npcRecovered:520,missionComplete:784,rollCall:650,dodge:420,coffee:260,purchase:800,drink:540,raceStart:900,reflect:1200,conduct:660}[i];if(i==="instrument"&&(r={piano:440,recorder:587,triangle:1320,castanets:320,drumstick:180}[e.data.item]),!r)return;let a=this.lastSfx.get(i)||-100;t-a<(i==="move"?.125:.08)||(this.lastSfx.set(i,t),this.note(r,t,i==="missionComplete"?.35:.12,!1,["propDamaged","swing"].includes(i)?"triangle":"sine",i==="move"?.05:.3),i==="missionComplete"&&(this.note(r*1.25,t+.12,.3),this.note(r*1.5,t+.24,.35)))}schedule(){if(!this.ctx||this.paused)return;const e=this.game.choir?"choir":this.game.chase.some(n=>n.state==="Chase"||n.state==="Attack")?"chase":"explore";e!==this.theme&&(this.theme=e,this.musicGain.gain.setTargetAtTime(this.game.profile.settings.mute?0:this.game.profile.settings.music,this.ctx.currentTime,.8),this.nextTime=this.ctx.currentTime+.03,this.beat=0);let t=e==="choir"?80:e==="chase"?120:90,i=60/t;if(e==="choir"){let n=this.game.time-this.game.choir.start,r=Math.ceil(n/i);if(r!==this.beat&&r<32){let a=r*i-n;if(a<.11){this.beat=r;let l=[261.63,329.63,392,329.63,293.66,349.23,440,392];this.note(l[r%8],this.ctx.currentTime+a,.35,!0,"triangle",.17)}}return}for(;this.nextTime<this.ctx.currentTime+.1;){let r=[261.63,329.63,392,329.63,293.66,349.23,440,392,261.63,392,493.88,440,349.23,329.63,293.66,392][this.beat%16]*(this.game.mode==="anniversary"?1.25:1);this.note(r,this.nextTime,.24,!0,"triangle",.18),this.beat%2===0&&this.note(r/2,this.nextTime,.3,!0,"sine",.22),this.beat++,this.nextTime+=i}}pause(){this.paused=!0;for(let e of[...this.voices,...this.musicVoices])try{e.stop()}catch{}this.voices.clear(),this.musicVoices.clear(),this.songOffset=this.beat}resume(){this.ctx&&(this.paused=!1,this.nextTime=this.ctx.currentTime+.03,this.beat=this.songOffset,this.configure())}}const Ce=s=>document.querySelector(s),$t=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class bm{constructor(e,t,i,n,r){this.game=e,this.render=t,this.input=i,this.audio=n,this.store=r,e.onToast=a=>this.toast(a),e.onSave=()=>r.save(e.profile),e.listeners.push(a=>{a.type==="rescue"&&setTimeout(()=>this.open("report"),0)}),this.input.onAction=a=>this.action(a),this.input.onPause=()=>this.paused?this.close():this.open("pause"),this.input.onAim=(a,l)=>t.aim(a,l),Ce("#menu").addEventListener("click",()=>this.open("pause")),Ce("#tasks").addEventListener("click",()=>this.open("missions")),Ce("#calendar").addEventListener("click",()=>this.open("calendar")),Ce("#map").addEventListener("click",()=>this.open("map")),Ce("#actions").addEventListener("click",()=>this.open("actions",!1)),i.bindButton(Ce("#attack"),"attack"),i.bindButton(Ce("#dodge"),"dodge"),i.bindButton(Ce("#throw"),"throw"),i.bindButton(Ce("#conduct"),"conduct"),i.bindButton(Ce("#interact"),"interact",()=>this.open("actions",!1)),Ce("#modal").addEventListener("click",a=>{let l=a.target.closest("[data-action]");l&&this.click(l.dataset.action,l.dataset.id,l.dataset.value)}),Ce("#modal").addEventListener("keydown",a=>{if(a.key==="Tab"){let l=[...Ce("#modal").querySelectorAll("button:not(:disabled),input,select,a[href]")],h=l[0],c=l.at(-1);a.shiftKey&&document.activeElement===h?(c?.focus(),a.preventDefault()):!a.shiftKey&&document.activeElement===c&&(h?.focus(),a.preventDefault())}}),this.open("start")}paused=!0;started=!1;modal="";lastFocus=null;hudClock=0;debug=!1;toastUntil=0;onPause=e=>{};pause(e){this.paused=e,this.input.enabled=!e&&!this.modal,this.input.clear(),e?this.audio.pause():this.audio.resume(),this.onPause(e)}close(){this.started&&(Ce("#modal").hidden=!0,this.modal="",this.pause(!1),this.lastFocus?.focus())}open(e,t=!0){this.lastFocus=document.activeElement,this.modal=e,this.input.enabled=!1,this.input.clear(),t&&this.pause(!0),Ce("#modal").hidden=!1;let i=this.content(e);Ce("#modal").innerHTML=`<section class="panel ${e==="start"?"welcome":""}" role="dialog" aria-modal="true" aria-label="${$t(e==="start"?"開始遊戲":"遊戲選單")}">${i}</section>`,setTimeout(()=>Ce("#modal").querySelector("button")?.focus(),0)}header(e,t){return`<header class="panel-head"><div><span class="eyebrow">${e}</span><h2>${t}</h2></div>${this.started?'<button class="icon-btn" data-action="close" aria-label="關閉">✕</button>':""}</header>`}button(e,t,i="",n=""){return`<button class="${n}" data-action="${t}" data-id="${$t(i)}">${e}</button>`}content(e){let t=this.game,i=t.profile;switch(e){case"start":return`<div class="brand-mark">東山 <span>校園日常 / 異常</span></div><span class="eyebrow">AN ORDINARY DAY, ALMOST.</span><h1>東山校園<br><em>大騷動</em><span class="title-dot">。</span></h1><p class="intro">今天的老師，一如往常地端莊。<br>今天的校園，就不一定了。</p><div class="welcome-actions">${this.button("進入校園　↗","start","","primary")}${this.button("操作說明","help")}</div><p class="fine">原創低多邊形 3D ・ 虛構校園與角色<br>單人沙盒／所有活動自由開放</p>`;case"pause":return this.header("TAKE A BREATH","課間休息")+`<div class="menu-grid">${this.button("繼續遊玩 ↗","close","","primary")}${this.button("今日待辦 · 24任務","open","missions")}${this.button("校園行事曆 · 4活動","open","calendar")}${this.button("校園地圖","open","map")}${this.button("人物圖鑑","open","codex")}${this.button("收藏與紀念卡","open","collection")}${this.button("音訊／畫質設定","open","settings")}${this.button("操作說明","open","help")}${this.button("存檔管理","open","save")}${this.button("重看教學","tutorial")}${this.button("重開平靜校園","confirmReset")}</div><p class="fine">${$t(this.store.error||"儲存長期进度；重新進入從平靜校園開始。")}</p>`;case"missions":{t.emit("openTasks");let n=yi.filter(r=>r.mode===t.mode);return this.header("TODAY’S TO-DO",t.mode==="normal"?"今日待辦":Zn.find(r=>r.id===t.mode).label+"任務")+`<p class="muted">一次追蹤一項。可取消、免費重試；首通領點，重玩記錄評級。</p>${t.attempt?`<div class="active-task"><b>${tl(t)}</b><p>${t.step.text}</p>${this.button("取消追蹤","cancelTask")}${this.button("重置任務物件","resetItems")}</div>`:""}<div class="task-list">${n.map(r=>`<article class="task-card"><div><span class="eyebrow">${r.category} · ${i.completedMissionIds.includes(r.id)?"已完成／重玩不給點":`首通 ${r.reward} 點`}</span><h3>${r.label}</h3><p>${r.steps.map(a=>$t(a.text)).join(" → ")}</p></div>${this.button(t.attempt?.mission===r.id?"追蹤中":i.completedMissionIds.includes(r.id)?"再試一次":"開始","task",r.id,t.attempt?.mission===r.id?"selected":"")}</article>`).join("")}</div>`}case"calendar":return this.header("SCHOOL CALENDAR","校園行事曆")+`<p class="muted">切換會重置當前校園、結束追逐；保留已完成與收藏。</p><div class="calendar-list">${[{id:"normal",label:"平常的一天",description:"自由探索與24項今日待辦。"},...Zn].map((n,r)=>`<article class="calendar-card"><span class="chapter-num">0${r}</span><div><h3>${n.label}</h3><p>${n.description}</p><small>${n.id==="normal"?"全部基礎玩法立即開放":`${yi.filter(a=>a.mode===n.id&&i.completedMissionIds.includes(a.id)).length}/4 完成`}</small></div>${this.button(t.mode===n.id?"目前活動":"進入","modeConfirm",n.id)}</article>`).join("")}</div>`;case"settings":return this.header("MAKE YOURSELF COMFORTABLE","設定")+`<div class="settings"><label>畫質 <select id="quality">${["auto","low","standard"].map((n,r)=>`<option value="${n}" ${i.settings.quality===n?"selected":""}>${["自適應","Low · 輕量","Standard · 標準"][r]}</option>`).join("")}</select></label><label>音樂 <input id="music" type="range" min="0" max="100" value="${i.settings.music*100}"></label><label>音效 <input id="sfx" type="range" min="0" max="100" value="${i.settings.sfx*100}"></label><label><input id="mute" type="checkbox" ${i.settings.mute?"checked":""}>靜音（所有目標仍可完成）</label><label><input id="lowMotion" type="checkbox" ${i.settings.lowMotion?"checked":""}>減少動態效果</label><label><input id="assist" type="checkbox" ${i.settings.assist?"checked":""}>指揮輔助：±350ms</label>${this.button("儲存設定","settings","","primary")}${this.button("試聽音效／啟用音訊","soundTest")}</div><p class="fine">Low：DPR≤1，活躍人物≤16。${$t(this.audio.fail)}</p>`;case"help":return this.header("A VERY COMPOSED TEACHER","操作說明")+'<div class="help"><p>左下搖桿移動，推深快跑。右下揮打、閃避與互動；拿物後可投擲。長按互動可選動作，或按「動作」。</p><dl><dt>WASD／方向鍵</dt><dd>依畫面方向移動；Shift 快跑</dd><dt>J／滑鼠左鍵</dt><dd>揮打（滑鼠決定面向）</dd><dt>K／空白鍵</dt><dd>短距閃避，不能穿牆</dd><dt>E／Q／R</dt><dd>互動／投擲／放下</dd><dt>F／Enter</dt><dd>點名／合唱指揮</dd><dt>Esc</dt><dd>暫停與繼續</dd></dl><p>一次拿一件；假髮與眼鏡各一個裝飾槽。黃色圈是任務交付／定位位置，在圈旁互動或放下。歸還需帶回原位置。推椅子時，站在椅子後面。</p><p>藏點：走廊工具間、教室講臺後。若被目擊躲入，家長會搜查。警戒消退需先甩開視線；進保健室不會清通緝。平靜時校護免費恢復。</p><p>人物跌坐後會恢復；沒有永久傷亡。任務物件卡住可從待辦按「重置任務物件」。</p></div>';case"actions":{let n=t.nearest(),r=t.held;return this.header("WHAT WOULD YOU LIKE TO DO?","老師的動作")+`<p class="muted">最近：${$t(n?.label||"沒有目標")}　手持：${$t(r?vt[r.type].label:"空手")}</p><div class="menu-grid">${n?this.button("互動 "+n.label,"interactTarget"):""}${this.button("點名（6m／12秒冷卻）","gameAction","roll")}${r?this.button("放下／交付","gameAction","drop"):""}${r?this.button("使用：演奏／碼錶／清掃","gameAction","useHeld"):""}${r&&vt[r.type].category.includes("wearable")?this.button("戴上","gameAction","wear"):""}${t.player.wig||t.player.glasses?this.button("取下頭部裝飾","gameAction","unwear"):""}${r||t.player.wig||t.player.glasses?this.button("歸還原位","gameAction","returnHeld"):""}${n?.itemType&&vt[n.itemType].category.includes("pushable")?this.button("推動","pushTarget"):""}${n?.itemType&&vt[n.itemType].category.includes("fixed")?this.button(n.itemType==="piano"?"亂按鋼琴":"咖啡機噴泡沫","messTarget"):""}${n?.itemType&&n.broken?this.button("扶起／整理物件","restoreTarget"):""}${xt(t.player)==="classroom"?this.button("假裝上課","teach"):""}</div><p class="fine">這個選單仍讓人物行動；真正休息請用暫停。</p>`}case"shop":return this.header("CO-OP, OPEN FOR BUSINESS","合作社")+`<div class="balance">校園點數 <strong>${i.points}</strong></div><article class="task-card"><div><h3>涼茶 · 10點</h3><p>立即飲用恢復30體力；五秒冷卻。</p></div><button data-action="drink" ${i.points<10&&t.attempt?.mission!=="q21"?"disabled":""}>購買</button></article><div class="task-list">${Qn.map(n=>`<article class="task-card"><div><h3>${n.label}</h3><p>純外觀 · ${n.price}點</p></div><button data-action="cosmetic" data-id="${n.id}" ${i.ownedCosmetics.includes(n.id)||i.points<n.price?"disabled":""}>${i.ownedCosmetics.includes(n.id)?"已收藏":"購買"}</button></article>`).join("")}</div>${this.button("平靜服務：整理商品 +10點","service")}<p class="fine">${i.serviceCooldown>0?`服務冷卻 ${Math.ceil(i.serviceCooldown/60)} 分鐘`:"服務可領取，遊戲在線十分鐘冷卻"}</p>`;case"map":return this.header("A SMALL CAMPUS, MANY POSSIBILITIES","校園地圖")+`<svg class="campus-map" viewBox="-33 -27 66 54" role="img" aria-label="校園與玩家任務位置">${Ki.map(n=>`<rect x="${n.x1}" y="${n.z1}" width="${n.x2-n.x1}" height="${n.z2-n.z1}" rx=".6"/><text x="${(n.x1+n.x2)/2}" y="${(n.z1+n.z2)/2}">${n.label}</text>`).join("")}<circle class="player-dot" cx="${t.player.x}" cy="${t.player.z}" r="1"/>${this.mapTargets().map(n=>`<circle class="goal-dot" cx="${n.x}" cy="${n.z}" r=".8"/>`).join("")}</svg><p class="fine">綠點：老師　黃點：目標／任務物件。${t.notes.map($t).join(" ")}</p>`;case"codex":return this.header("EVERYONE HAS THEIR OWN WAY","校園人物圖鑑")+`<h3>十二種學生</h3><div class="codex-grid">${jn.map(n=>`<article><h4>${n.label}</h4><p>${n.description}</p></article>`).join("")}</div><h3>十九種家長</h3><div class="codex-grid">${An.map(n=>`<article><h4>${n.label}</h4><p>${n.description}</p><small>${n.tier} · 占 ${n.slotCost} 名額</small></article>`).join("")}</div>`;case"collection":return this.header("LITTLE MEMORIES","收藏與稱號")+`<h3>外觀（保留黃色洋裝與鮑伯頭）</h3><div class="menu-grid">${Qn.filter(n=>i.ownedCosmetics.includes(n.id)).map(n=>this.button((i.equipped.includes(n.id)?"✓ ":"")+n.label,"equip",n.id)).join("")||"<p>合作社有六種純外觀收藏。</p>"}</div><h3>稱號 · ${i.titleIds.length}/12</h3><p>${i.titleIds.map($t).join(" · ")||"完成任務獲得稱號。"}</p><h3>合照紀念卡（程式構圖）</h3><div class="photo-grid">${i.photoCards.map((n,r)=>`<div class="photo-card"><span>${n.wig?"🟤":n.glasses?"👓":"♫"}　${n.broom?"╱":"♩"}</span><b>東山・第${r+1}張合照</b><p>${n.students}學生 / ${n.visitors}家長<br>${n.wig?"假髮版 ":""}${n.glasses?"眼鏡版 ":""}${n.broom?"掃把版":""}</p></div>`).join("")||"<p>親師日完成合照，可留下構圖紀念卡。</p>"}</div>`;case"report":return this.header("INCIDENT REPORT","保健室事件報告")+`<div class="report-grid">${Object.entries(t.lastReport||t.report).filter(([n])=>["damage","downed","parents","maxAlert"].includes(n)).map(([n,r])=>`<article><b>${r}</b><span>${{damage:"家具翻倒",downed:"人物暈眩",parents:"追逐家長",maxAlert:"最高警戒"}[n]}</span></article>`).join("")}</div><p>體力 ${Math.ceil(t.player.hp)}/100。倒地救援已結束當次事件；任務可免費重試，長期紀錄保留。</p>`;case"save":return this.header("KEEP THE MEMORIES","存檔管理")+`<p>只儲存長期紀錄。匯入前驗證版本與 ID，損壞檔不覆蓋。</p><div class="menu-grid">${this.button("立即儲存","saveNow")}${this.button("匯出 JSON","export")}${this.button("匯入 JSON","import")}${this.button("接管其他分頁寫入","takeover")}${this.button("清除進度（確認）","clearConfirm")}</div><input type="file" id="importFile" accept="application/json,.json" hidden><p class="fine">${$t(this.store.error||"本地存檔就緒")} · revision ${i.revision}</p>`;case"debug":return this.header("DEVELOPMENT ONLY","可重現驗證")+`<p>Seed ${t.rosterSeed} · ${t.assertOwnership()?"物件身份正常":""}</p><div class="menu-grid">${Ki.map(n=>this.button("到 "+n.label,"teleport",n.id)).join("")}</div><h3>家長型別（仍受3名額限制）</h3><div class="menu-grid">${An.map(n=>this.button(n.label,"spawn",n.id)).join("")}</div><h3>警戒</h3>${[0,20,40,65,90].map(n=>this.button(String(n),"alert",String(n))).join("")}${this.button("恢復／清場","devReset")}${this.button("效能 HUD 開關","debugHUD")}<pre>${$t(JSON.stringify(this.render.measure(),null,2))}</pre><p>目前任務事件：</p><pre>${$t(JSON.stringify(t.eventLog.slice(-12),null,2))}</pre>`;case"timeQuestion":return this.header("LOOK AT THE CLOCK","時間到了嗎？")+`<p>黑板：考試時間24分鐘，已過12分鐘，剩餘12分鐘。</p>${[6,12,24].map(n=>this.button(n+"分鐘","answer",String(n))).join("")}`;default:if(e.startsWith("dialog:")){let n=t.npcs.find(r=>r.id===e.slice(7));return this.header("LET’S TALK",n.label+"的經歷")+`<p>${{timid:"老師，刚剛的聲音好大。",fighter:"老師，不能一直用揮打解決問題。",tattletale:"我要把今天的事告訴主任。"}[n.type]||"老師，今天的校園有點混亂。"}</p><div class="menu-grid">${["說明事實","一本正經的荒謬解釋","結束談話"].map((r,a)=>`<button data-action="respond" data-id="${n.id}" data-value="${a}">${r}</button>`).join("")}</div>`}return this.header("CONFIRM","確認")+`<p>${e.startsWith("mode:")?"切換活動會重置當前場景並取消未完成任務。":e==="clearConfirm"?"清除本地長期紀錄，無法撤銷。":"重開平靜校園，未完成任務可重新接取。"}</p>${this.button("確認","confirm",e,"primary")}${this.button("取消","open","pause")}`}}mapTargets(){let e=this.game,t=e.step;if(!t)return[];if(["deliver","place","wearVisit"].includes(t.kind))return Array.from({length:t.count||1},(i,n)=>Jn(t,n));if(t.kind==="gather")return this.game.npcs.filter(i=>this.game.attempt.meta.choristers.includes(i.id)).map(i=>({x:i.x,z:i.z}));if(t.kind==="return"){let i=[...e.objects.values()].find(n=>n.type===t.item);return i?[i.home]:[]}return[...e.objects.values()].filter(i=>i.pins.includes(e.attempt.id)).map(i=>({x:i.x,z:i.z}))}action(e){if(!this.started||this.modal)return;let t=this.game;switch(e){case"attack":t.attack();break;case"dodge":t.dodge();break;case"throw":t.throwItem();break;case"drop":t.drop();break;case"roll":t.rollCall();break;case"conduct":t.conduct();break;case"interact":this.handleResult(t.interact());break}}handleResult(e){typeof e=="string"&&["missions","shop","report","timeQuestion"].includes(e)?this.open(e,!1):e?.dialog&&this.open("dialog:"+e.dialog,!1)}async click(e,t="",i=""){let n=this.game;switch(e){case"close":this.close();break;case"start":await this.audio.unlock(),this.started=!0,this.close(),n.profile.tutorialFlags.includes("done")||(n.startTutorial(),this.toast(n.tutorialText()));break;case"open":this.open(t);break;case"task":n.startMission(t),this.close();break;case"cancelTask":n.cancelMission(),this.open("missions");break;case"resetItems":n.resetObjectiveItems(),this.open("missions");break;case"tutorial":n.startTutorial(),this.close();break;case"skipTutorial":n.finishTutorial();break;case"modeConfirm":this.open("mode:"+t);break;case"confirmReset":this.open("resetConfirm");break;case"clearConfirm":this.open("clearConfirm");break;case"confirm":t==="clearConfirm"?(n.profile=Hs(),n.reset("normal"),this.store.save(n.profile)):n.reset(t.startsWith("mode:")?t.slice(5):n.mode),this.close();break;case"settings":for(let r of["mute","lowMotion","assist"])n.profile.settings[r]=Ce("#"+r).checked;for(let r of["music","sfx"])n.profile.settings[r]=+Ce("#"+r).value/100;n.profile.settings.quality=Ce("#quality").value,this.audio.configure(),this.render.resize(),this.store.save(n.profile),this.toast("設定已儲存");break;case"soundTest":await this.audio.unlock(),this.audio.note(440,this.audio.ctx.currentTime,.3),this.audio.note(660,this.audio.ctx.currentTime+.3,.3),this.toast("播放原創合成音色");break;case"gameAction":this.close(),n.interact(void 0,t);break;case"interactTarget":this.close(),this.handleResult(n.interact());break;case"pushTarget":this.close(),n.interact(n.nearest(),"push");break;case"messTarget":this.close(),n.interact(n.nearest(),"mess");break;case"restoreTarget":this.close(),n.interact(n.nearest(),"restore");break;case"teach":this.close(),n.teach();break;case"drink":n.buyDrink()?this.toast("涼茶恢復30體力"):this.toast("點數不足或飲用冷卻中"),this.open("shop",!1);break;case"cosmetic":n.buyCosmetic(t),this.open("shop",!1);break;case"service":this.toast(n.service()?"整理完成 +10點":"平靜且冷卻結束才可服務"),this.open("shop",!1);break;case"equip":if(n.profile.equipped.includes(t))n.profile.equipped=n.profile.equipped.filter(r=>r!==t);else{let r=t.split("_")[0];n.profile.equipped=n.profile.equipped.filter(a=>a.split("_")[0]!==r),n.profile.equipped.push(t)}this.store.save(n.profile),this.open("collection");break;case"respond":n.respond(t,+i),this.close();break;case"answer":n.emit("answerTime",{correct:+t==12}),this.toast(+t==12?"正確，還有12分鐘。":"再看一次黑板：剩餘12分鐘。"),+t==12&&this.close();break;case"saveNow":this.store.save(n.profile),this.open("save");break;case"export":{let r=new Blob([JSON.stringify(n.profile,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(r),a.download="dongshan-save.json",a.click(),setTimeout(()=>URL.revokeObjectURL(a.href),1e3);break}case"import":{let r=Ce("#importFile");r.onchange=async()=>{try{let a=r.files[0];if(a.size>6e5)throw Error("檔案過大");let l=sl(JSON.parse(await a.text()));n.profile=l,n.reset("normal"),this.store.save(l),this.audio.configure(),this.toast("匯入成功"),this.open("save")}catch(a){this.toast("匯入失敗，原存檔保留："+a.message)}},r.click();break}case"takeover":this.store.claim(!0),this.store.save(n.profile),this.open("save");break;case"teleport":Object.assign(n.player,vi(t)),this.close();break;case"spawn":this.toast(n.spawnParent(t)?"家長已從校門入場":"3名額預算不足"),this.close();break;case"alert":n.alert=+t,n.lastTrouble=n.time,this.close();break;case"devReset":n.reset(n.mode),this.open("debug");break;case"debugHUD":this.debug=!this.debug,this.close();break}}toast(e){let t=Ce("#speech");t.hidden=!e.includes("：")&&!/^(各位|我們|這是|請不要|物品)/.test(e),t.hidden||(t.textContent=e),Ce("#toast").textContent=e,Ce("#toast").classList.add("visible"),this.toastUntil=performance.now()+4e3}update(e){let t=this.game,i=t.player;if(this.hudClock+=e,this.hudClock<.1)return;this.hudClock=0,Ce("#hp-text").textContent=Math.ceil(i.hp)+" / 100",Ce("#hp-bar").style.width=i.hp+"%",Ce("#alert-text").textContent="警戒 "+t.level,Ce("#alert-circles").innerHTML=Array.from({length:4},(r,a)=>`<i class="${a<t.level?"lit":""}"></i>`).join(""),Ce("#alert-reason").textContent=t.reason,Ce("#held").textContent=t.held?vt[t.held.type].label:"空手・從容",Ce("#zone").textContent=Ki.find(r=>r.id===xt(i))?.label||"共用走廊",Ce("#points").textContent=t.profile.points+" 點",Ce("#quest-title").textContent=t.tutorial>=0?"日常差事教學":t.attempt?tl(t):"今天，想做點什麼？",Ce("#quest-detail").textContent=t.tutorial>=0?t.tutorialText():t.step?`${t.step.text}　${t.attempt.count}/${t.step.count||1}`:"探索校園，或從今日待辦選一件差事。",Ce("#skip").hidden=t.tutorial<0,Ce("#throw").hidden=!t.held,Ce("#conduct").hidden=!t.choir,Ce("#actions").textContent=i.hidden?"離開藏點":"動作";let n=t.nearest();if(Ce("#context").textContent=i.hidden?"互動：離開藏點":n?"互動 · "+n.label:"靠近物品或人物",Ce("#arrival").textContent=t.familyQueue.length?`${Em(t.familyQueue[0].type)}到校 · ${Math.max(0,Math.ceil(t.familyQueue[0].at-t.time))}s`:"",Ce("#arrival").hidden=!t.familyQueue.length,t.choir){let r=t.time-t.choir.start,a=r/.75,l=[3,7,11,15,19,23,27,31].find(h=>h>=a-.35);Ce("#beat").hidden=!1,Ce("#beat").innerHTML=`<span>第 ${Math.min(32,Math.floor(a)+1)} / 32 拍　${t.choir.hits}/8命中</span><div class="beat-ring" style="transform:scale(${l===void 0?1:Math.min(2,Math.max(.6,1+(l-a)*.35))})"></div><b>${l!==void 0&&Math.abs(l-a)<.35?"現在！":"跟著收圈"}</b>`}else Ce("#beat").hidden=!0;if(performance.now()>this.toastUntil)Ce("#toast").classList.remove("visible"),Ce("#speech").hidden=!0;else if(!Ce("#speech").hidden){let r=this.render.project(i);Ce("#speech").style.left=Math.min(innerWidth-115,Math.max(115,r.x))+"px",Ce("#speech").style.top=Math.max(24,r.y)+"px"}Ce("#debug-hud").hidden=!this.debug,this.debug&&(Ce("#debug-hud").textContent=JSON.stringify({...this.render.measure(),voices:this.audio.voices.size,musicVoices:this.audio.musicVoices.size,save:this.store.error},null,2)),this.store.error&&(Ce("#save-warning").textContent=this.store.error)}}function tl(s){return yi.find(e=>e.id===s.attempt.mission)?.label||""}function Em(s){return An.find(e=>e.id===s)?.label+"家長"}const Fl=document.querySelector("#app");Fl.innerHTML='<main id="game"><canvas id="world" aria-label="東山校園3D沙盒"></canvas><div class="hud"><div class="top-left"><div class="school-brand">東山 <span>校園大騷動</span></div><div class="status-card"><div class="hp-line"><span>優等女導師</span><b id="hp-text">100 / 100</b></div><div class="hp-track"><div id="hp-bar"></div></div><div class="alert-line"><b id="alert-text">警戒 0</b><span id="alert-circles"></span></div><small id="alert-reason">校園一切正常</small></div></div><div class="top-right"><span id="points" class="point-pill">20 點</span><button id="map" aria-label="校園地圖">⌖</button><button id="menu" aria-label="暫停">Ⅱ</button></div><div class="quest"><span class="eyebrow">TODAY AT DONGSHAN <span id="zone">導師辦公室</span></span><h3 id="quest-title">今天，想做點什麼？</h3><p id="quest-detail"></p><button id="skip">跳過教學</button></div><div class="side-nav"><button id="tasks"><span>☷</span>待辦</button><button id="calendar"><span>▦</span>行事曆</button></div><div id="arrival" hidden></div><div id="beat" hidden></div><div id="speech" hidden></div><div id="toast" role="status" aria-live="polite"></div><div class="bottom-info"><span id="held">空手・從容</span><button id="actions">動作</button><span id="context">靠近物品或人物</span></div><div class="controls"><div id="joystick" aria-label="移動搖桿"><div id="knob"></div></div><div class="action-cluster"><button id="throw" hidden>↗<small>投擲 Q</small></button><button id="conduct" hidden>♫<small>指揮 Enter</small></button><button id="dodge">↝<small>閃避 K</small></button><button id="attack">✦<small>揮打 J</small></button><button id="interact">✋<small>互動 E</small></button></div></div><pre id="debug-hud" hidden></pre><small id="save-warning"></small></div><div id="modal"></div></main>';const In=new Zl,Si=new ec(In.load(),6477);let Qi;try{Qi=new ym(document.querySelector("#world"),Si)}catch(s){throw Fl.innerHTML='<div class="compat"><h1>需要 WebGL 2 支援</h1><p>此瀏覽器未能啟動真正3D畫面。請開啟硬體加速或改用支援WebGL的瀏覽器。</p><pre></pre></div>',document.querySelector("pre").textContent=s.message,s}Si.cameraVisible=s=>Qi.inView(s);const Zs=new Mm(document.querySelector("#world"),document.querySelector("#joystick"),document.querySelector("#knob")),Ol=new Sm(Si),Vt=new bm(Si,Qi,Zs,Ol,In);document.querySelector("#skip").addEventListener("click",()=>Si.finishTutorial());let il=performance.now(),Xi=0;function zl(s){let e=(s-il)/1e3;il=s;let t=Math.min(.133,e);if(Vt.paused)Xi=0;else{Xi+=t;let i=0;for(;Xi>=1/30&&i++<4;)Si.tick(1/30,Zs.movement()),Xi-=1/30;i>=4&&(Xi=0)}Qi.frame(e,Vt.started&&!Vt.paused,Vt.paused?1:Xi/(1/30)),Vt.update(t),requestAnimationFrame(zl)}requestAnimationFrame(zl);Vt.onPause=()=>{Xi=0};document.addEventListener("visibilitychange",()=>{document.hidden&&(Zs.clear(),Ol.pause(),Vt.started&&Vt.open("pause"),In.save(Si.profile))});window.addEventListener("blur",()=>{Zs.clear(),Vt.started&&Vt.open("pause")});window.addEventListener("pagehide",()=>{In.save(Si.profile),In.dispose()});let kl=document.querySelector("#world");kl.addEventListener("webglcontextlost",s=>{s.preventDefault(),Qi.ctxLost=!0,In.save(Si.profile),Vt.open("pause"),Vt.toast("3D繪圖中斷，已暫停並儲存。等待恢復或重新載入。")});kl.addEventListener("webglcontextrestored",()=>{Qi.ctxLost=!1,Qi.lastSession=-1,Vt.toast("3D畫面已恢復，按繼續遊玩")});
