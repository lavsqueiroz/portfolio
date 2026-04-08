// Scroll reveal
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const els = entry.target.querySelectorAll(
        'h2, p, .tl-item, .projeto-card, .contato-btn, .contato-links, .section-label'
      );
      els.forEach((el, i) => {
        el.classList.add('reveal');
        setTimeout(() => el.classList.add('visible'), i * 90);
      });
    }
  });
}, { threshold: 0.1 });

sections.forEach(el => observer.observe(el));

// Nav shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,0.06)'
    : 'none';
});
