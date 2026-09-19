// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// close mobile menu after tapping a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Live-ticking hero timer (single deliberate motion moment) ----
const timerEl = document.getElementById('liveTimer');
let totalSeconds = 2 * 3600 + 14 * 60 + 37; // starts at 02:14:37

function formatTime(s) {
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${sec}`;
}

if (timerEl) {
  setInterval(() => {
    totalSeconds += 1;
    timerEl.textContent = formatTime(totalSeconds);
  }, 1000);
}
