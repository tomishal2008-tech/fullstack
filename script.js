// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', scrollY > 60);
});

// Scroll reveal
const ro = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i % 4) * 0.09 + 's';
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Count-up animation
function countUp(el, target) {
  let n = 0;
  const step = target / 55;
  const t = setInterval(() => {
    n += step;
    if (n >= target) {
      el.textContent = target;
      clearInterval(t);
    } else {
      el.textContent = Math.floor(n);
    }
  }, 28);
}

const so = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(el => {
        countUp(el, +el.dataset.count);
      });
      so.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

so.observe(document.querySelector('.stats'));