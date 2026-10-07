import {defineConfig} from 'vite';
export default defineConfig({base:'./',plugins:[{name:'share-image-url',transformIndexHtml(html){
 const site=process.env.SITE_URL;
 if(!site)return html;
 const url=new URL('og-image.png',site.endsWith('/')?site:site+'/');
 if(!['https:','http:'].includes(url.protocol))throw Error('SITE_URL 必須是 HTTP(S) 網址');
 const escaped=url.href.replaceAll('&','&amp;').replaceAll('"','&quot;');
 return html.replaceAll('content="./og-image.png"',`content="${escaped}"`);
}}],server:{hmr:false},build:{target:'es2022',rollupOptions:{input:{game:'index.html',soundtest:'soundtest.html'}}}});
