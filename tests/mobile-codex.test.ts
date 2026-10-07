import test from 'node:test';import assert from 'node:assert/strict';
import {Game} from '../src/game';import {fresh,validateSave} from '../src/save';import {cameraSpan} from '../src/camera';import {parents,students} from '../src/data';
test('phone camera enlarges portrait and landscape 2.2 times, desktop retains span',()=>{assert.equal(13/cameraSpan(390,844,true),2.2);assert.equal(11.5/cameraSpan(844,390,true),2.2);assert.equal(cameraSpan(1440,900,false),11.5);assert.equal(cameraSpan(844,390,false),11.5);assert.equal(cameraSpan(1024,768,true),11.5)});
test('all student and parent types record actual knockdowns, deduplicate damage after zero HP, survive resets',()=>{
 const g=new Game();let saves=0;g.onSave=()=>saves++;
 for(const s of students){const n=g.npcs.find(n=>n.type===s.id)!;Object.assign(n,{x:0,z:4});assert.ok(g.damageNPC(n,100,'test'));assert.equal(g.profile.knockdownCodex.students[s.id],1);assert.equal(g.damageNPC(n,100,'test'),false);assert.equal(g.profile.knockdownCodex.students[s.id],1);n.hp=n.maxHp;g.damageNPC(n,100,'test');assert.equal(g.profile.knockdownCodex.students[s.id],2)}
 for(const p of parents){g.npcs=g.npcs.filter(n=>n.role==='student'||n.role==='staff');g.spawnParent(p.id);const n=g.npcs.find(n=>n.type===p.id&&n.role==='parent')!;Object.assign(n,{x:0,z:4,state:'Attack'});g.damageNPC(n,1000,'test');assert.equal(g.profile.knockdownCodex.parents[p.id],1)}
 assert.equal(saves,43);g.reset('anniversary');assert.equal(Object.keys(g.profile.knockdownCodex.students).length,12);assert.equal(Object.keys(g.profile.knockdownCodex.parents).length,19);
});
test('actual player swings record furniture, repaired furniture counts again, NPC prank and setup excluded',()=>{
 const g=new Game();g.npcs=[];g.player.x=0;g.player.z=4;g.player.face={x:1,z:0};const prop=g.props.find(p=>p.type==='table');Object.assign(prop,{x:1,z:4,hp:1});g.attack();g.tick(.15);assert.equal(g.profile.knockdownCodex.objects['prop:table'],1);
 g.emit('propDamaged',{id:prop.id},'student:prankster');assert.equal(g.profile.knockdownCodex.objects['prop:table'],1);
 g.interact({...prop,type:'prop'},'restore');assert.equal(prop.broken,false);prop.hp=1;g.player.attack=null;g.player.attackCooldown=0;g.attack();g.tick(.15);assert.equal(g.profile.knockdownCodex.objects['prop:table'],2);
 const h=new Game();h.startMission('q22');assert.deepEqual(h.profile.knockdownCodex.objects,{});
});
test('player thrown items record first broken transition, NPC projectiles excluded, trash and cones included',()=>{
 const g=new Game();g.npcs=[];g.player.x=0;g.player.z=4;g.player.face={x:1,z:0};const i=[...g.objects.values()].find(i=>i.type==='chalk_eraser')!;i.state='settled';g.take(i.id);g.throwItem();for(let k=0;k<90;k++)g.updateItems(1/30);assert.equal(i.broken,true);assert.equal(g.profile.knockdownCodex.objects['item:chalk_eraser'],1);g.take(i.id);g.throwItem();for(let k=0;k<90;k++)g.updateItems(1/30);assert.equal(g.profile.knockdownCodex.objects['item:chalk_eraser'],1);
 const n=new Game();n.spawnParent('courier');const parent=n.npcs.find(n=>n.type==='courier')!;n.npcProjectile(parent,'cardboard_box');for(let k=0;k<90;k++)n.updateItems(1/30);assert.deepEqual(n.profile.knockdownCodex.objects,{});
 const trash=[...g.objects.values()].find(i=>i.type==='trash_bin')!;g.interact({...trash,type:'item'});assert.equal(g.profile.knockdownCodex.objects['item:trash_bin'],1);
 const cone=[...g.objects.values()].find(i=>i.type==='traffic_cone')!;const ball=[...g.objects.values()].find(i=>i.type==='basketball')!;g.take(ball.id);g.throwItem();Object.assign(cone,{x:ball.x,z:ball.z,broken:false});g.updateItems(.001);assert.equal(g.profile.knockdownCodex.objects['item:traffic_cone'],1);
});
test('codex save migration, roundtrip and invalid data validation',()=>{
 const old:any=fresh();delete old.knockdownCodex;old.statistics.NPCDowned=20;const migrated=validateSave(old);assert.deepEqual(migrated.knockdownCodex,{students:{},parents:{},objects:{}});assert.equal(migrated.statistics.NPCDowned,20);
 const p=fresh();p.knockdownCodex.students.timid=3;p.knockdownCodex.objects['prop:desk']=2;assert.deepEqual(validateSave(JSON.parse(JSON.stringify(p))).knockdownCodex,p.knockdownCodex);
 for(const value of [null,[],{students:{},parents:{},objects:{fake:1}},{students:{timid:-1},parents:{},objects:{}},{students:{timid:1.5},parents:{},objects:{}},{students:{timid:Infinity},parents:{},objects:{}},{students:{},parents:{},objects:{},evil:{}}])assert.throws(()=>validateSave({...p,knockdownCodex:value}));
});
