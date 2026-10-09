/** Give loose adjacent actions the same wrapping layout as existing button grids. */
export function spaceButtons(root:HTMLElement){
 const parents=new Set([...root.querySelectorAll('button')].map(b=>b.parentElement!));
 for(const parent of parents){
  const display=getComputedStyle(parent).display;
  if(display.includes('flex')||display.includes('grid'))continue;
  const children=[...parent.children];
  for(let i=0;i<children.length;i++){
   if(children[i].tagName!=='BUTTON')continue;
   const run=[children[i]];
   while(i+1<children.length&&children[i+1].tagName==='BUTTON'){
    let node=children[i].nextSibling,hasText=false;
    while(node&&node!==children[i+1]){if(node.nodeType===Node.TEXT_NODE&&node.textContent?.trim())hasText=true;node=node.nextSibling}
    if(hasText)break;
    run.push(children[++i]);
   }
   if(run.length<2)continue;
   const row=document.createElement('div');row.className='button-row';parent.insertBefore(row,run[0]);row.append(...run);
  }
 }
}
