import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const root=new URL('../dist/',import.meta.url);
for(const name of ['index.html','soundtest.html','tutorial.html','og-image.png','og-tutorial.png'])await access(new URL(name,root));
for(const name of ['index.html','soundtest.html','tutorial.html']){
 const html=await readFile(new URL(name,root),'utf8');
 assert.ok(!html.includes('/src/'),`${name} still references source code`);
 for(const [,asset] of html.matchAll(/(?:src|href)="(\.\/assets\/[^"\s]+)"/g))await access(new URL(asset,root));
}
for(const [page,imageName] of [['index.html','og-image.png'],['tutorial.html','og-tutorial.png']]){
 const image=await readFile(new URL(imageName,root));
 assert.equal(image.readUInt32BE(16),1200);assert.equal(image.readUInt32BE(20),630);
 const html=await readFile(new URL(page,root),'utf8');
 if(process.env.SITE_URL){
  const site=process.env.SITE_URL;const expected=new URL(imageName,site.endsWith('/')?site:site+'/').href.replaceAll('&','&amp;').replaceAll('"','&quot;');
  assert.ok(html.includes(`property="og:image" content="${expected}"`),`${page} OG URL does not match Pages URL`);
  assert.ok(html.includes(`name="twitter:image" content="${expected}"`),`${page} Twitter URL does not match Pages URL`);
 }
}
console.log('Pages artifact verified: game, sound test, tutorial, local assets and 1200×630 share images.');
