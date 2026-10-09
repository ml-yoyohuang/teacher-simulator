import test from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../src/game';
import {goalMarkers,healthState} from '../src/feedback';
import {balance,locations} from '../src/data';
test('exam podium marker persists after skipping tutorial; active delivery uses actual task destination',()=>{
 const g=new Game();g.finishTutorial();const item=[...g.objects.values()].find(i=>i.type==='exam_papers')!;Object.assign(g.player,{x:item.x,z:item.z});assert.ok(g.take(item.id));assert.ok(goalMarkers(g).some(t=>t.x===locations.podium.x&&t.z===locations.podium.z));g.startMission('q01');assert.ok(goalMarkers(g).some(t=>t.x===locations.tray.x&&t.z===locations.tray.z));assert.ok(!goalMarkers(g).some(t=>t.x===locations.podium.x&&t.z===locations.podium.z));g.drop();g.cancelMission();assert.equal(goalMarkers(g).length,0);
});
test('low health tiers clear on recovery and faster walking preserves run advantage',()=>{
 assert.deepEqual([100,26,25,11,10,1].map(healthState),['normal','normal','low','low','critical','critical']);assert.equal(healthState(100),'normal');const g=new Game();Object.assign(g.player,{x:0,z:8});const before=g.player.x;g.tick(.1,{x:1,z:0,run:false});assert.ok(Math.abs(g.player.x-before-balance.walk*.1)<.001);assert.equal(balance.walk,4);assert.ok(balance.run>balance.walk);
});
