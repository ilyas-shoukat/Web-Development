// Small helper script
console.log('Ali website loaded');
// Smooth scroll for internal links
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  e.preventDefault();
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
});
