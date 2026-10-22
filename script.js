/* ============ DULS Website — Script ============ */

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ── Mobile menu ── */
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileToggle && mobileMenu) {
  let menuOpen = false;
  mobileToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden', !menuOpen);
    mobileToggle.innerHTML = menuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.add('hidden');
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

/* ── Animated counters ── */
function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  return n.toLocaleString('en-IN');
}
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (!target) return;
  const dur = 2200;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = formatNum(Math.floor(ease * target));
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = formatNum(target);
  }
  requestAnimationFrame(tick);
}
const statsEl = document.getElementById('stats');
if (statsEl) {
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.counter').forEach(animateCounter);
        cObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  cObs.observe(statsEl);
}

/* ── No scroll animation — all content visible immediately ── */

/* ── Hero slideshow ── */
(function () {
  const slides = document.querySelectorAll('.hero-slideshow .slide');
  const dotsBox = document.getElementById('slide-dots');
  if (!slides.length || !dotsBox) return;
  let cur = 0;

  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsBox.appendChild(d);
  });
  const dots = dotsBox.querySelectorAll('.dot');

  function goTo(i) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = i;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }
  setInterval(() => goTo((cur + 1) % slides.length), 5000);
})();

/* ── Particles (lighter) ── */
(function () {
  const box = document.getElementById('particles');
  if (!box) return;
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    const s = (Math.random() * 3 + 2) + 'px';
    p.style.width = s;
    p.style.height = s;
    p.style.animationDuration = (Math.random() * 7 + 5) + 's';
    p.style.animationDelay = (Math.random() * 5) + 's';
    box.appendChild(p);
  }
})();

/* ── Back to top ── */
const btt = document.getElementById('back-to-top');
if (btt) {
  window.addEventListener('scroll', () => {
    btt.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const h = this.getAttribute('href');
    if (h === '#') return;
    e.preventDefault();
    const t = document.querySelector(h);
    if (t) {
      const top = t.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── Active nav highlight ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const h = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < top + h);
      }
    });
  }, { passive: true });
}
