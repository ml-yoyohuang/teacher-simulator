import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const root=new URL('../dist/',import.meta.url);
for(const name of ['index.html','soundtest.html','og-image.png'])await access(new URL(name,root));
for(const name of ['index.html','soundtest.html']){
 const html=await readFile(new URL(name,root),'utf8');
 assert.ok(!html.includes('/src/'),`${name} still references source code`);
 for(const [,asset] of html.matchAll(/(?:src|href)="(\.\/assets\/[^"\s]+)"/g))await access(new URL(asset,root));
}
const image=await readFile(new URL('og-image.png',root));
assert.equal(image.readUInt32BE(16),1200);assert.equal(image.readUInt32BE(20),630);
const html=await readFile(new URL('index.html',root),'utf8');
if(process.env.SITE_URL){
 const site=process.env.SITE_URL;const expected=new URL('og-image.png',site.endsWith('/')?site:site+'/').href.replaceAll('&','&amp;').replaceAll('"','&quot;');
 assert.ok(html.includes(`property="og:image" content="${expected}"`),'OG URL does not match Pages URL');
 assert.ok(html.includes(`name="twitter:image" content="${expected}"`),'Twitter URL does not match Pages URL');
}
console.log('Pages artifact verified: game, sound test, local assets and 1200×630 share image.');
