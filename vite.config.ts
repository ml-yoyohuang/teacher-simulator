import {defineConfig} from 'vite';
export default defineConfig({base:'./',plugins:[{name:'share-image-url',transformIndexHtml(html){
 const site=process.env.SITE_URL;
 if(!site)return html;
 const base=site.endsWith('/')?site:site+'/';
 if(!['https:','http:'].includes(new URL(base).protocol))throw Error('SITE_URL 必須是 HTTP(S) 網址');
 return html.replace(/content="\.\/(og-[\w-]+\.png)"/g,(_,file)=>`content="${new URL(file,base).href.replaceAll('&','&amp;').replaceAll('"','&quot;')}"`);
}}],server:{hmr:false},build:{target:'es2022',rollupOptions:{input:{game:'index.html',soundtest:'soundtest.html',tutorial:'tutorial.html'}}}});
