import {Vec,locations} from './data';
export type Furniture={id:string,type:string,zone:string,x:number,z:number,w:number,d:number,h:number,angle:number,solid:boolean,top?:number};
export type Placement=Vec&{y:number,angle?:number};
export type CampusLayout={furniture:Furniture[],placements:Record<string,Placement>,propPositions:Record<string,Vec>,signs:{text:string,x:number,z:number,y?:number,size?:number}[]};
export const entrances:Record<string,Vec>={classroom:{x:-13,z:-16},music_room:{x:-13,z:-1},staff_room:{x:13,z:-16},principal_room:{x:13,z:-1},infirmary:{x:0,z:-13},corridor:{x:0,z:-11},courtyard:{x:0,z:0},playground:{x:-12,z:16},gate:{x:0,z:18},co_op:{x:14,z:12}};
export function campusLayout(mode='normal'):CampusLayout{
 const furniture:Furniture[]=[],placements:Record<string,Placement>={},propPositions:Record<string,Vec>={},signs:CampusLayout['signs']=[];
 const f=(zone:string,type:string,x:number,z:number,w=1.6,d=.8,h=1,solid=true,top?:number,angle=0)=>{const v={id:`scene:${zone}:${furniture.filter(v=>v.zone===zone).length}`,type,zone,x,z,w,d,h,solid,top,angle};furniture.push(v);return v};
 const put=(id:string,x:number,z:number,y=0,angle=0)=>placements[id]={x,z,y,angle};
 const sign=(text:string,x:number,z:number,y=1.6,size=2.3)=>signs.push({text,x,z,y,size});
 const at=(id:string,x:number,z:number)=>propPositions[id]={x,z};
 // Six desk/chair pairs leave a broad right aisle and a transverse teaching strip.
 f('classroom','blackboard',-21,-21.55,8,.18,2.2,false);sign(mode==='final_exam'?'考試中 · 保持安靜':mode==='parent_day'?'歡迎家長 · 一起好好談談':'今日課程 · 音樂與生活',-21,-21.35,1.8,4);
 for(let row=0;row<3;row++)for(let col=0;col<2;col++){const x=-24+col*3.5,z=-16+row*2.25+(mode==='final_exam'?row*.12:0);if(!(col===0&&row<2))f('classroom','student_desk',x,z,1.5,.8,.82,true,.88);if(!(col===1&&row===2))f('classroom','student_chair',x,z+.83, .6,.6,.9,true,undefined,0);if((row+col)%3===1)f('classroom','books',x+.25,z,.5,.32,.08,false,undefined,.1);}
 f('classroom','low_shelf',-27,-12,1.1,2.1,1,true,.96);f('classroom','notice',-27.65,-14, .1,2,1.3,false,undefined,Math.PI/2);f('classroom','cleaning_rack',-26.7,-10.75,1.3,.3,1.5,false);
 at('prop:classroom:0',-24,-16);at('prop:classroom:1',-24,-13.75);at('prop:classroom:2',-20.5,-10.67);f('classroom','wastebasket',-27,-10.85,.5,.5,.6,true);
 put('textbook:0',-24,-16,.9);put('chalk_eraser:0',-25,-19,1.06);put('spinning_top:0',-26.8,-12,1.02);
 // Rehearsal seats, instrument counter and percussion corner, no dense central clutter.
 f('music_room','music_board',-21,-6.65,6,.18,2,false);sign('音樂 · 排練室',-21,-6.45,1.8,3.2);
 for(let row=0;row<2;row++)for(let col=0;col<3;col++)f('music_room','student_chair',-24+col*2.3,-.8+row*2.4,.6,.6,.9,true,undefined,mode==='choir_contest'?(col-1)*-.15:0);
 f('music_room','instrument_shelf',-26,-4,3.2,.85,.82,true,.88);f('music_room','counter',-23.2,-4,1.4,.8,.82,true,.88);f('music_room','counter',-16.5,-4.8,1.6,.8,.82,true,.88);
 f('music_room','drums',-17,-3,1.4,1.3,1.1,true);f('music_room','triangle_rack',-26.7,2.7,1,.5,1.5,false);f('music_room','poster',-27.65,-.5,.1,1.5,1.5,false,undefined,Math.PI/2);f('music_room','poster',-18,-6.5,1.4,.1,1.4,false);
 f('music_room','rehearsal_mat',-21,1,8,5,.02,false);f('music_room','piano_bench',-20,-2.5,1,.45,.5,true);
 put('piano:0',-20,-4,0);put('recorder:0',-26.7,-4,.92);put('castanets:0',-25.4,-4,.92);put('drumstick:0',-16.5,-4.8,.92);put('triangle:0',-26.7,2.7,.8);put('wireless_microphone:0',-23.2,-4,.92);put('music_stand:0',-24,.3);put('music_stand:1',-19.4,.3);
 at('prop:music_room:0',-16.8,2.7);at('prop:music_room:1',-27,4);at('prop:music_room:2',-21.5,4);
 // Four compact teacher workplaces, side tea counter and shared document trays.
 for(const [x,z] of [[18,-18],[24,-18],[18,-12.8],[24,-12.8]]){f('staff_room','work_desk',x,z,2,.9,.9,true,.96);f('staff_room','paper_tray',x-.5,z,.55,.35,.15,false);f('staff_room','pencil_cup',x+.6,z,.2,.2,.3,false);}
 f('staff_room','file_cabinet',26.9,-20,1.3,.7,1.6,true);f('staff_room','file_cabinet',16,-20.5,1.3,.7,1.6,true);f('staff_room','counter',26.6,-15,1.5,.9,.84,true,.9);f('staff_room','notice',21,-21.6,3,.12,1.3,false);sign('導師工作區',21,-21.3,1.8,3);
 f('staff_room','books',24,-18,.55,.3,.12,false);f('staff_room','wastebasket',15.2,-12, .55,.55,.65,true);
 put('folder:0',24,-18,1);put('exam_papers:0',18,-18,1);put('coffee_machine:0',26.6,-15,.94);put('wall_clock:0',23,-21.6,1.4,Math.PI);put('office_chair:0',18,-17);put('office_chair:1',24,-17);put('office_chair:2',18,-11.7);
 f('staff_room','office_seat',24,-11.7,.7,.65,1,true);at('prop:staff_room:0',21,-20);at('prop:staff_room:1',27,-11);at('prop:staff_room:2',26,-12.8);
 // Principal: broad center aisle, formal desk and clearly separate low display.
 f('principal_room','principal_desk',22,-4.5,3,.95,1,true,1.06);f('principal_room','high_chair',22,-5.7,.8,.7,1.5,true,undefined,Math.PI);for(const x of [20.7,23.3])f('principal_room','visitor_chair',x,-2.8,.7,.65,1,true);
 f('principal_room','trophy_shelf',26.5,2.4,1.8,.8,1.2,true,.85);f('principal_room','counter',16.5,2.6,1.8,.75,.85,true,.91);f('principal_room','wig_stand',16.5,2.6,.45,.4,.5,false);f('principal_room','formal_rug',22,-1,6,5,.02,false);f('principal_room','honor',22,-6.6,3.5,.12,1.3,false);sign('東山 · 榮譽與責任',22,-6.35,1.85,3.2);
 put('laptop:0',21.5,-4.5,1.1);put('principal_glasses:0',22.7,-4.4,1.1);put('principal_wig:0',16.5,2.6,1.2);put('trophy:0',26.5,2.4,.9);
 at('prop:principal_room:0',16.5,-4);at('prop:principal_room:1',27,-5.5);at('prop:principal_room:2',24.5,3.7);
 // Corridor furniture sits on the margins, not in the door-to-door center line.
 f('corridor','water_station',6,-13.4,1.1,.55,1.3,true);f('corridor','notice',-4,-13.5,2.5,.15,1.3,false);f('corridor','short_bench',8,-13.3,2,.55,.7,true);f('corridor','cleaning_rack',-11,-9,1,.25,1.5,false);
 put('broom:0',-11,-9,0,.3);put('trash_bin:0',-9,-9);at('prop:corridor:0',11.8,-13.3);at('prop:corridor:1',-6,-13.5);at('prop:corridor:2',3,-13.3);
 sign(mode==='final_exam'?'考試中 · 請保持安靜':mode==='parent_day'?'訪客 → 教室／辦公室':'教室 ← 走廊 → 辦公室',0,-13.7,1.5,4);
 // Courtyard: two garden islands with a ring and a broad central event area.
 for(const x of [-9,9]){f('courtyard','garden',x,8,2.5,2.3,.35,true);f('courtyard','tree',x,8,1,1,3,false);}
 for(const [x,z] of [[-10,3],[10,3],[-10,11],[10,11]])f('courtyard','plant',x,z,.6,.6,1,false);
 f('courtyard','direction_post',10,0,1,.4,1.8,false);sign('操場 ← 東山中庭 → 合作社',0,11.5,.25,5);
 at('prop:courtyard:0',-8,1);at('prop:courtyard:1',-10,0);at('prop:courtyard:2',8,1);f('courtyard','short_bench',-7,10,2,.55,.7,true);
 // Sports corner retains the existing race/checkpoint rectangle.
 f('playground','basketball_hoop',-27,11,1.5,.7,3.2,true);f('playground','equipment_rack',-26,12,2,.8,.8,true,.86);f('playground','counter',-26,14,2,.75,.75,true,.81);f('playground','ball_crate',-23,12,1,.8,.45,false);f('playground','short_bench',-28,22,1.5,.55,.7,true);
 put('basketball:0',-23,12,.15);put('badminton_racket:0',-26.4,12,.6);put('table_tennis_racket:0',-25.6,12,.65);put('stopwatch:0',-26,14,.85);put('toy_mallet:0',-25.4,14,.85);put('traffic_cone:0',-24,18);put('traffic_cone:1',-22.2,18);put('traffic_cone:2',-20.4,18);
 at('prop:playground:0',-15,12);at('prop:playground:1',-14,23);at('prop:playground:2',-16,23);
 // Gate keeps the center and all three parent entry tracks clear.
 f('gate','guard_booth',7,22,3,2.4,2,false);f('gate','counter',6.5,22,1.4,.7,.8,true,.86);f('gate','lost_found',3,22,1.3,.6,.75,true,.81);f('gate','visitor_board',-6,21,1.2,.3,1.5,false);sign(mode==='parent_day'?'訪客請登記':'東山 · 訪客與失物招領',0,24,2.5,4.5);
 at('prop:gate:0',-7,23);at('prop:gate:1',6,24);at('prop:gate:2',-7,20);
 // Co-op: low customer counter with side access; stock is decoration only.
 f('co_op','shop_counter',20.5,12.8,3.6,.65,.9,true,.96);f('co_op','stock_shelf',18.2,10,2,.7,1.7,true);f('co_op','fridge',24.8,10,1,.7,1.7,true);f('co_op','awning',20.5,10.5,5,3,2,false);f('co_op','wastebasket',25,14.3,.55,.55,.65,true);f('co_op','crate',16.5,10,.65,.65,.55,true);
 sign(mode==='anniversary'?'合作社 · 校慶特賣':'合作社 · 飲料與小點',20.5,10.2,1.8,3.5);for(const x of [18.5,20.5,22.5])f('co_op','queue_mark',x,14, .6,.6,.02,false);
 at('prop:co_op:0',25,12);at('prop:co_op:1',26,14);at('prop:co_op:2',17,14.6);
 // Infirmary: side beds leave the central recovery/door route completely open.
 f('infirmary','nurse_desk',-3,-16.2,1.8,.8,.85,true,.91);f('infirmary','medical_bed',3.9,-20,1.5,2.6,.65,true);f('infirmary','medical_cabinet',0,-23.2,2,.7,1.2,true);f('infirmary','screen',2.5,-22,.12,1.2,1.3,false);f('infirmary','wastebasket',-5,-15.5,.5,.5,.6,true);sign('保健室 · 先休息一下',0,-23,1.6,3.5);
 at('prop:infirmary:0',-3.9,-20);at('prop:infirmary:1',4,-23.2);at('prop:infirmary:2',3,-15.8);
 // Decorations are regenerated once from mode state, never appended on switch.
 if(mode!=='normal'){f('courtyard','stage',0,4,10,6,.2,false);f('courtyard','stage_steps',0,7.4,3,.8,.2,false);f('courtyard','stage_backdrop',0,1.2,6,.12,1.8,false);sign(mode==='choir_contest'?'合唱團比賽':mode==='anniversary'?'東山校慶':mode==='parent_day'?'親師日 · 歡迎來校':'期末 · 校園日常',0,1.5,1.4,4);put('wireless_microphone:0',3.4,5.2,.24);}
 if(mode==='anniversary'){f('courtyard','bunting',0,9,10,.1,2.2,false);sign('校慶攤位',0,9,.3,3);}
 if(mode==='parent_day'){sign('家長會談區',-17,-18,1.6,2.5);}
 if(mode==='final_exam')put('exam_papers:0',locations.podium.x,locations.podium.z,1.06);
 return {furniture,placements,propPositions,signs};
}
