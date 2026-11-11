const menu=document.getElementById('menu');
const links=document.getElementById('links');
const topBtn=document.getElementById('top');

function closeMenu(){
  links.classList.remove('open');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label','Open navigation');
  menu.innerHTML='<i data-lucide="menu"></i>';
  if(window.lucide) lucide.createIcons();
}
menu.addEventListener('click',()=>{
  const isOpen=links.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(isOpen));
  menu.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');
  menu.innerHTML=isOpen?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';
  if(window.lucide) lucide.createIcons();
});
links.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{
  if(links.classList.contains('open')&&!links.contains(event.target)&&!menu.contains(event.target))closeMenu();
});
document.getElementById('year').textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>400),{passive:true});
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
if(window.lucide)lucide.createIcons();