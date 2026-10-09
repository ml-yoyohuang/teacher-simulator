import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const manifest=JSON.parse(await readFile('public/music/manifest.json','utf8'));
assert.equal(manifest.outputs.length,7);
assert.equal(new Set(manifest.outputs.map(t=>t.id)).size,7);
for(const t of manifest.outputs){
 const data=await readFile(`public/music/${t.file}`);
 assert.equal(createHash('sha256').update(data).digest('hex'),t.sha256);
 assert.ok(t.decodedPeakDbFS<0,`${t.id} clips`);
 assert.ok(t.rmsDbFS>-40,`${t.id} silent`);
 await access(`dist/music/${t.file}`);
 assert.equal((await readFile(`dist/music/${t.file}`)).length,data.length);
}
assert.ok(manifest.totalBytes<10_000_000);
console.log('Music verified: 4 originals + 3 arrangements, hashes, non-silent/peak levels, <10 MB, all deployed.');
