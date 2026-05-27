// main.js - small interactivity for navbar and AOS init
AOS.init({ once: true, duration: 700 });

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    if(!id || id === '#') return;
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    // update active class
    document.querySelectorAll('.nav-link').forEach(x=>x.classList.remove('active'));
    this.classList.add('active');
  });
});
