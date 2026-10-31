const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
let savedTheme = null;
try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch {
  // The toggle still works in browsers that restrict storage for local files.
}

function setTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeButton?.setAttribute('aria-pressed', String(dark));
  themeButton?.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  if (themeIcon) themeIcon.textContent = dark ? '☀' : '☾';
  if (themeLabel) themeLabel.textContent = dark ? 'Light' : 'Dark';
}

setTheme(savedTheme === 'dark' ? 'dark' : 'light');
themeButton?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch {
    // Keep the selected theme for this page view if storage is unavailable.
  }
  setTheme(nextTheme);
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navigation?.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  '.experience-card, .skills-panel, .project-card, .testimonial, .about-visual, .about-copy, .contact-content'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((target) => {
    target.classList.add('reveal');
    revealObserver.observe(target);
  });
}
