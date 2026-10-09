export type Vec = {x:number,z:number};
export const balance={hp:100,walk:4,run:5.5,dodge:2.2,dodgeTime:.25,dodgeCooldown:1.4,invulnerability:.65,fixedStep:1/30,maxCatchup:4,studentBudget:12,npcBudget:20,parentBudget:3,teacherBudget:2};
export const zones=[
 ['toilet_corner','洗手區與廁所',-11.4,-6.6,-22.5,-16],['storage_corner','工具儲藏間',6.6,11.4,-22.5,-16],['courtyard','中庭',-12,12,-2,12],['classroom','一般教室',-28,-14,-22,-10],['music_room','音樂教室',-28,-14,-7,5],['staff_room','導師辦公室',14,28,-22,-10],['principal_room','校長室',14,28,-7,5],['corridor','共用走廊',-14,14,-14,-8],['playground','操場一角',-29,-13,10,24],['gate','校門與警衛室',-5,5,19,26],['co_op','合作社',15,26,9,15],['infirmary','保健室',-6,6,-24,-14]
].map(([id,label,x1,x2,z1,z2])=>({id:id as string,label:label as string,x1:+x1,x2:+x2,z1:+z1,z2:+z2}));
export function zoneAt(p:Vec){return zones.find(v=>p.x>=v.x1&&p.x<=v.x2&&p.z>=v.z1&&p.z<=v.z2)?.id||'corridor'}
export const center=(id:string):Vec=>{let z=zones.find(z=>z.id===id);return {x:(z.x1+z.x2)/2,z:(z.z1+z.z2)/2}};
export type ItemDef={id:string,label:string,category:string[],zone:string,damage:number,throwDamage:number,reach:number,cooldown:number,heavy:boolean,actions:string[],modelKey:string,description?:string};
const rows:any[]=[
 ['chalk_eraser','粉筆擦','portable','classroom',8,10,1.2,.45],['basketball','籃球','portable','playground',6,12,1.2,.45],['toy_mallet','玩具槌','portable','playground',16,14,1.7,.7],['drumstick','鼓棒','portable','music_room',7,8,1.2,.28],['folder','資料夾','portable','staff_room',8,10,1.2,.45],['trophy','獎盃','portable','principal_room',20,18,1.5,.7,1],['textbook','課本','portable','classroom',10,12,1.2,.45],['broom','掃把','portable','corridor',12,10,2.1,.8],['spinning_top','陀螺','portable','classroom',3,5,1.2,.45],['trash_bin','垃圾桶','portable,pushable','corridor',12,14,1.3,.6,1],['badminton_racket','羽球拍','portable','playground',10,8,1.7,.45],['table_tennis_racket','桌球拍','portable','playground',7,7,1.1,.25],['stopwatch','碼錶','portable','playground',3,4,1.2,.45],['traffic_cone','三角錐','portable,pushable','playground',6,9,1.2,.45],['recorder','直笛','portable','music_room',7,8,1.2,.45],['music_stand','譜架','portable','music_room',15,12,1.8,.8,1],['piano','鋼琴','fixed','music_room',0,0,0,1],['triangle','三角鐵','portable','music_room',4,5,1.2,.45],['castanets','響板','portable','music_room',4,5,1.2,.45],['coffee_machine','咖啡機','fixed','staff_room',0,0,0,1],['wall_clock','時鐘','portable','staff_room',7,9,1.2,.45],['office_chair','辦公椅','pushable','staff_room',0,0,0,1],['exam_papers','考卷（3份）','portable','staff_room',1,1,1.2,.45],['principal_wig','校長假髮','portable,wearable','principal_room',1,1,1.2,.45],['principal_glasses','眼鏡','portable,wearable','principal_room',1,1,1.2,.45],['laptop','筆電','portable','principal_room',14,15,1.2,.55],['wireless_microphone','校園無線麥克風','portable','music_room',6,8,1.2,.45]
];
export const items:ItemDef[]=rows.map(([id,label,c,zone,damage,throwDamage,reach,cooldown,heavy])=>({id,label,category:c.split(','),zone,damage,throwDamage,reach,cooldown,heavy:!!heavy,modelKey:id,actions:[...(c.includes('portable')?['take','drop','throw','return']:[]),...(c.includes('pushable')?['push']:[]),...(c.includes('wearable')?['wear']:[]),...(['piano','coffee_machine','recorder','triangle','castanets','stopwatch','drumstick','broom','wireless_microphone'].includes(id)?['use']:[])]}));
items.find(i=>i.id==='wireless_microphone')!.description='請注意廣播。老師目前非常冷靜。';
export const microphoneRules={callRadius:10,callCooldown:12,turnSeconds:.35,broadcastSeconds:3,hearingRadius:10,investigationCooldown:30,pulseSeconds:.6,maxBroadcasts:3};
export const auxiliary=['coffee_cup','soft_parcel','cardboard_box','stage_score','exam_a','exam_b','envelope','script'].map(id=>({id,label:({coffee_cup:'咖啡杯',soft_parcel:'軟包裹',cardboard_box:'商品箱',stage_score:'樂譜',exam_a:'A組試卷',exam_b:'B組試卷',envelope:'封套',script:'講稿'})[id],category:['portable'],zone:'staff_room',damage:1,throwDamage:1,reach:1.2,cooldown:.45,heavy:false,modelKey:id,actions:['take','drop','throw','return']} as ItemDef));
export const itemDefs=Object.fromEntries([...items,...auxiliary].map(x=>[x.id,x]));
export const students=[['timid','膽小','逃開後停下打電話'],['fighter','反擊','短距追打，失手有恢復期'],['tattletale','告狀','跑辦公室通知成人'],['spectator','圍觀','保持四公尺，危險靠近散開'],['filmer','拍片','連續看見三秒才提高警戒'],['friend','朋友助陣','扶起好友，短暫反擊'],['mediator','勸架','接近勸停，波及後逃開'],['scavenger','撿道具','拿閒置物品，歸還或反擊'],['prankster','惡作劇','趁亂推家具，不歸責老師'],['guardian','護寶','物品被取走追討，可交談歸還'],['athlete','體育健將','短衝刺，躲慢投擲後需恢復'],['reader','冷靜旁觀','寶物受影響才告狀']].map(([id,label,description])=>({id,label,description}));
export const staff=[['patrol_teacher','校安老師','corridor'],['science_teacher','理化老師','staff_room'],['pe_teacher','體育老師','playground'],['dean','教務主任','staff_room'],['principal','校長','principal_room'],['nurse','校護','infirmary'],['shop_aunt','合作社阿姨','co_op'],['guard_uncle','警衛伯伯','gate']].map(([id,label,zone])=>({id,label,zone}));
export const parents=[
 ['spatula','鍋鏟','normal','combo','三連揮，末擊落空停頓'],['sports','運動','normal','charge','直線衝撞，轉向慢'],['briefcase','公事包','normal','block','正面格擋，側背可擊中'],['shopping_bag','購物袋','normal','parcel','蓄力丟包裹，準備時可打斷'],['nagging','碎念','normal','slow','文字波，離範圍可避'],['protective','護子','normal','protect','護住學生，追出八公尺返回'],['pta_leader','家長會代表','special','formation','三人陣，地形可拆散'],['umbrella','雨傘','normal','umbrella','擋輕投擲，收傘有空檔'],['gardener','園藝','normal','sweep','長掃，前搖慢'],['yoga','瑜伽','advanced','sidestep','兩次側閃後休息'],['courier','快遞','normal','box','投箱短障礙，補貨停頓'],['photographer','攝影','advanced','flash','原地蓄力，漫畫閃光'],['whistle','哨子','advanced','aura','附近家長加速，被擊退打斷'],['camper','露營','normal','camp','摺椅陣地，椅子可推'],['runner','路跑','advanced','arc','圓弧切入，軌跡可預判'],['neat','潔癖','normal','clean','先整理紙與垃圾，再追逐'],['armored','護具','advanced','heavy','慢速重擊，長恢復'],['drama','戲劇社','advanced','drama','喊招兩秒，強擊退'],['duo','雙人默契','special','duo','輪流掩護，拆開失加成']
].map(([id,label,tier,ability,description])=>({id,label,tier,ability,description,slotCost:id==='duo'?2:id==='pta_leader'?3:1,hp:id==='pta_leader'?120:tier==='advanced'?95:70,speed:id==='armored'?2.1:['sports','runner'].includes(id)?4.2:3,recoverySeconds:8}));
export const parentDefs=Object.fromEntries(parents.map(p=>[p.id,p]));
export const chapters=[['parent_day','親師日','一起坐下，好好談談。'],['anniversary','校慶','今天的秩序，由妳安排。'],['choir_contest','合唱團比賽','請跟著老師的拍子。'],['final_exam','期末考','全校最安靜的一天？']].map(([id,label,description])=>({id,label,description}));
export type Step={kind:string,text:string,item?:string,zone?:string,count?:number,unique?:boolean,params?:any};
export type Mission={id:string,label:string,category:string,mode:string,steps:Step[],reward:number,title?:string};
const s=(kind:string,text:string,item?:string,zone?:string,count=1,params?:any):Step=>({kind,text,item,zone,count,params});
const q=(id:string,label:string,category:string,steps:Step[],title?:string):Mission=>({id,label,category,mode:'normal',steps,reward:category==='長任務'?60:30,title});
export const missions:Mission[]=[
 q('q01','請交回考卷','日常',[s('deliver','拿取考卷包（3份），送回辦公室收件盤','exam_papers','staff_room')]),
 q('q02','樂器請歸位','日常',[s('deliver','向學生索回直笛，歸還音樂室架','recorder','music_room')]),
 q('q03','維持環境整潔','日常',[s('deliver','把垃圾桶送回走廊標記區','trash_bin','corridor')],'整理界傳奇'),
 q('q04','代理校長巡堂','惡作劇',[s('wearVisit','戴假髮到教室','principal_wig','classroom'),s('wearVisit','戴假髮到音樂室','principal_wig','music_room'),s('wearVisit','戴假髮到操場','principal_wig','playground'),s('return','歸還原假髮','principal_wig')],'代理校長'),
 q('q05','節奏感測驗','惡作劇',[s('strikeProps','拿鼓棒敲三種家具','drumstick',undefined,3),s('audience','再敲鼓棒，吸引三位不同學生',undefined,undefined,3)],'節奏大師'),
 q('q06','校園保齡球','惡作劇',[s('bowl','用籃球投倒三個標記錐','basketball',undefined,3,{maxThrows:5})],'端莊的混亂源'),
 q('q07','老師沒有在逃跑','技巧',[s('escape','同次事件引兩位家長追逐，甩掉視線並降一級',undefined,undefined,1,{parents:2})],'家長迴避專家'),
 q('q08','辦公室借用程式','技巧',[s('deliver','不被目擊把獎盃搬到辦公室','trophy','staff_room',1,{stealth:true}),s('return','再歸還原獎盃','trophy')]),
 q('q09','請保持安靜','技巧',[s('calm','由警戒三級起，不搗亂，自然降到零')],'全校最安靜的人'),
 q('q10','上課鐘還沒響','日常',[s('return','找到錯置時鐘，掛回辦公室','wall_clock')]),
 q('q11','老師需要一杯咖啡','日常',[s('brew','操作咖啡機製作咖啡','coffee_machine','staff_room'),s('deliver','咖啡機做咖啡，送到老師座位','coffee_cup','staff_room')]),
 q('q12','失物招領','日常',[s('deliver','把課本送警衛室','textbook','gate'),s('deliver','把眼鏡送警衛室','principal_glasses','gate'),s('deliver','把桌球拍送警衛室','table_tennis_racket','gate')],'失物招領員'),
 q('q13','體育器材盤點','日常',[s('deliver','籃球歸器材臺','basketball','playground'),s('deliver','羽球拍歸器材臺','badminton_racket','playground'),s('deliver','碼錶歸器材臺','stopwatch','playground')],'器材管理員'),
 q('q14','校長今天髮量驚人','惡作劇',[s('wigTrophy','把假髮放在獎盃上，再離開校長室')]),
 q('q15','辦公室人體工學','惡作劇',[s('place','三張辦公椅同時推到中庭三個椅位，停留兩秒','office_chair','courtyard',3)]),
 q('q16','三角鐵獨奏會','惡作劇',[s('performance','拿三角鐵在三區演奏，各吸引兩人','triangle',undefined,3)]),
 q('q17','禁止奔跑示範','惡作劇',[s('race','用碼錶開始，依序跑四檢查點，最後三公尺用走的','stopwatch','playground')]),
 q('q18','這球算妳的','技巧',[s('reflect','拿羽球拍，回擊購物袋家長的軟包裹一次')]),
 q('q19','整潔也是一種戰術','技巧',[s('cleanEscape','投撒考卷讓潔癖家長整理，趁機失去視線進搜尋')]),
 q('q20','請勿拍攝上課內容','技巧',[s('cameraEscape','在拍片學生三秒拍攝前躲開，三次（間隔五秒）',undefined,undefined,3)]),
 q('q21','老師只是來購物','技巧',[s('searchShop','家長搜尋後，降至一級以下無追逐，在合作社買飲料')]),
 q('q22','公開觀課日','長任務',[s('place','兩個譜架放到講臺標記','music_stand','classroom',2),s('drink','買兩杯飲料',undefined,undefined,2),s('restore','扶好教室桌椅',undefined,'classroom',3),s('teach','警戒零且無追逐，在講臺示範',undefined,'classroom')],'公開觀課模範'),
 q('q23','校長的筆電去哪了','長任務',[s('deliver','詢問持物線索，沿持有鏈找筆電，帶回校長室','laptop','principal_room')]),
 q('q24','一場非常正常的運動會','長任務',[s('place','放三錐到操場標記','traffic_cone','playground',3),s('race','碼錶跑四點，再走過終點','stopwatch','playground'),s('dummy','用任一球拍命中練習假人三次',undefined,undefined,3)])
];
function a(id:string,label:string,mode:string,steps:Step[],title?:string){missions.push({id,label,mode,steps,category:'活動',reward:40,title})}
a('pd01','家長請這邊坐','parent_day',[s('place','三張椅放中庭座位','office_chair','courtyard',3),s('seat','逐組與三位訪客互動，引導入座',undefined,undefined,3)]);
a('pd02','老師的桌面管理','parent_day',[s('deliver','考卷放收件盘','exam_papers','staff_room'),s('deliver','咖啡送座位','coffee_cup','staff_room'),s('return','借用資料夾後歸還','folder')]);
a('pd03','學生說了什麼？','parent_day',[s('respond','和三位不同性格學生談話，選老師的回答',undefined,undefined,3)]);
a('pd04','合照前請整理儀容','parent_day',[s('photo','在合照位點名三位學生與一位訪客，再拍照')]);
a('an01','攤位佈置大師','anniversary',[s('place','推桌子到中庭攤位','scene_table','courtyard'),s('place','推椅子到中庭攤位','office_chair','courtyard'),s('deliver','垃圾桶到攤位','trash_bin','courtyard'),s('deliver','三角錐到攤位','traffic_cone','courtyard')],'校慶動線設計師');
a('an02','合作社救援','anniversary',[s('deliver','搬三件商品箱到中庭攤位','cardboard_box','courtyard',3)]);
a('an03','校長致詞中','anniversary',[s('deliver','眼鏡送舞臺','principal_glasses','courtyard'),s('deliver','講稿送舞臺','script','courtyard'),s('speech','在舞臺請校長致詞，等待五秒')]);
a('an04','校慶保齡球','anniversary',[s('bowl','球投倒三錐，兩攤位保持完好','basketball',undefined,3,{safeStalls:true})]);
a('cc01','譜架少了一個','choir_contest',[s('place','兩譜架放舞臺','music_stand','courtyard',2),s('deliver','三樂譜送舞臺','stage_score','courtyard',3)]);
a('cc02','團員請集合','choir_contest',[s('gather','在舞臺點名，或逐一引導六位團員到位')]);
a('cc03','不要帶陀螺上臺','choir_contest',[s('deliver','向惡作劇學生索回陀螺，送音樂室','spinning_top','music_room'),s('gather','回舞臺點名，團員到齊')]);
a('cc04','指揮老師準備好了','choir_contest',[s('choir','舞臺互動開始32拍，在8個收圈提示按指揮鍵')],'合唱指揮');
a('fe01','考卷不是傳單','final_exam',[s('deliver','A組考卷送教室A桌','exam_a','classroom'),s('deliver','B組考卷送教室B桌','exam_b','classroom')]);
a('fe02','時間到了嗎？','final_exam',[s('return','將時鐘掛回','wall_clock'),s('answerTime','講臺回答剩餘時間（顯示於題目）')]);
a('fe03','走廊禁止喧嘩','final_exam',[s('deliver','將陀螺放音樂室隔離架','spinning_top','music_room'),s('deliver','將三角鐵放音樂室隔離架','triangle','music_room')],'考場震源');
a('fe04','監考老師去哪了','final_exam',[s('invigilate','在教室講臺開始監考'),s('deliver','辦公室取封套，回教室','envelope','classroom'),s('collect','回教室收三份考卷（可提前回收）',undefined,'classroom',3)]);
export const missionDefs=Object.fromEntries(missions.map(q=>[q.id,q]));
export const titles=['端莊的混亂源','代理校長','器材管理員','節奏大師','全校最安靜的人','考場震源','家長迴避專家','失物招領員','整理界傳奇','公開觀課模範','校慶動線設計師','合唱指揮'];
export const cosmetics=[['badge_leaf','綠葉徽章',30],['badge_star','星星徽章',30],['glasses_round','圓框眼鏡',50],['glasses_blue','藍框眼鏡',50],['shoes_red','磚紅平底鞋',80],['shoes_teal','青綠平底鞋',80]].map(([id,label,price])=>({id:id as string,label:label as string,price:+price}));
export const locations:Record<string,Vec>={tray:{x:18,z:-18},seat:{x:24,z:-18},musicShelf:{x:-26,z:-4},equipment:{x:-26,z:12},stage:{x:0,z:4},podium:{x:-21,z:-19},lostFound:{x:3,z:22},hideTool:{x:-12,z:-10},hidePodium:{x:-21,z:-20}};
export function destination(step:Step,index=0):Vec{if(step.kind==='return')return center(itemDefs[step.item]?.zone||'staff_room');if(step.zone==='classroom')return {x:-24+index*2.2,z:-18};if(step.zone==='music_room')return locations.musicShelf;if(step.zone==='staff_room')return step.item==='coffee_cup'?locations.seat:locations.tray;if(step.zone==='playground')return {x:-26+index*2.5,z:12};if(step.zone==='gate')return locations.lostFound;if(step.zone==='courtyard')return {x:-4+index*3,z:4};return center(step.zone||'courtyard')}
