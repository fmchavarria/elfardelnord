(() => {
 const prefix = 'far-del-nord-plantilla-' + location.pathname.split('/').pop() + ':';
 const nodes = document.querySelectorAll('[contenteditable="true"]');
 nodes.forEach((node,i) => {const key=prefix+i;const val=localStorage.getItem(key);if(val!==null)node.textContent=val;
 node.addEventListener('input',()=>localStorage.setItem(key,node.textContent));});
 document.getElementById('print')?.addEventListener('click',()=>window.print());
 document.getElementById('reset')?.addEventListener('click',()=>{
  if(!confirm('¿Restablecer los textos de ejemplo de esta plantilla?'))return;
  nodes.forEach((_,i)=>localStorage.removeItem(prefix+i));location.reload();
 });
})();
