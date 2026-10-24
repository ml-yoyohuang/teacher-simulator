import test from 'node:test';
import assert from 'node:assert/strict';
import {campusLayout} from '../src/scene';
import {applyScenePositions,emptySceneEdits,sceneModes,validScenePosition,validateSceneEdits} from '../src/scene-edits';
import {Game} from '../src/game';

const baselines=Object.fromEntries(sceneModes.map(mode=>[mode,campusLayout(mode,null)])) as any;
test('scene edits preserve object IDs, tabletop height and independent activity layouts',()=>{
 const normal=campusLayout('normal',null),key='i:wireless_microphone:0',original=normal.placements['wireless_microphone:0'];
 const custom={x:-22.5,z:-3.8,y:1.05,angle:.4};assert.ok(validScenePosition(normal,key,custom));
 const edited=applyScenePositions(campusLayout('normal',null),{[key]:custom});
 assert.deepEqual(edited.placements['wireless_microphone:0'],custom);
 assert.deepEqual(campusLayout('normal',null).placements['wireless_microphone:0'],original);
 assert.deepEqual(campusLayout('anniversary',null).placements['wireless_microphone:0'],baselines.anniversary.placements['wireless_microphone:0']);
 const g=new Game();g.layout=edited;const item=g.objects.get('wireless_microphone:0')!;assert.equal(item.id,'wireless_microphone:0');assert.equal(g.assertOwnership(),true);
});
test('editor import rejects unknown IDs, out-of-bounds positions and invalid height',()=>{
 const key='f:scene:classroom:1';assert.equal(validScenePosition(baselines.normal,key,{x:90,z:0}),false);
 assert.throws(()=>validateSceneEdits({version:1,modes:{normal:{'i:unknown':{x:0,z:0}}}},baselines));
 assert.throws(()=>validateSceneEdits({version:1,modes:{normal:{'i:textbook:0':{x:-23,z:-16,y:90}}}},baselines));
 assert.throws(()=>validateSceneEdits({version:1,modes:{bad_mode:{}}},baselines));
 assert.deepEqual(validateSceneEdits(emptySceneEdits(),baselines),emptySceneEdits());
});
test('all five modes have stable editable furniture, original item placements and prop positions',()=>{
 for(const mode of sceneModes){const layout=baselines[mode];assert.ok(layout.furniture.length>80,mode);assert.ok(Object.keys(layout.placements).length>20,mode);assert.equal(Object.keys(layout.propPositions).length,30,mode);assert.equal(new Set(layout.furniture.map((f:any)=>f.id)).size,layout.furniture.length,mode)}
});
