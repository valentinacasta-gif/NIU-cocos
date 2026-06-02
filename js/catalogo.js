/* ============================================================
   NIU — Handcrafted Coconut Bags
   main.js
   ============================================================ */

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  }, 80);
});

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i % 4) * 0.12 + 's';
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

// ── COLOR PICKER ──
const colorDots = document.querySelectorAll('.color-dot');
const priceEl   = document.getElementById('displayPrice');

colorDots.forEach(dot => {
  dot.addEventListener('click', () => {
    colorDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    priceEl.textContent = '$' + dot.dataset.price;
  });
});

// ── GALLERY THUMBS ──
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(t => {
  t.addEventListener('click', () => {
    thumbs.forEach(th => th.classList.remove('active'));
    t.classList.add('active');
  });
});

// ── ADD TO BAG ──
const addBtn       = document.getElementById('addToBag');
const toast        = document.getElementById('toast');
const navCartBadge = document.querySelector('#navCart .badge');
let cartCount = 0;

addBtn.addEventListener('click', () => {
  cartCount++;
  if (navCartBadge) navCartBadge.style.display = 'block';

  toast.style.opacity   = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateX(-50%) translateY(80px)';
  }, 2600);
});

// ── HERO PARALLAX ──
const bgText = document.querySelector('.hero-bg-text');
document.addEventListener('mousemove', e => {
  if (!bgText) return;
  const x = (e.clientX / window.innerWidth  - .5) * 18;
  const y = (e.clientY / window.innerHeight - .5) * 10;
  bgText.style.transform = `translate(${x}px, ${y}px)`;
});