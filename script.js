const headerBg = document.querySelector('.header-bg');

function isDesktop() {
  return window.innerWidth > 768;
}

window.addEventListener('scroll', () => {
  if (!isDesktop()) return;

  const scrollY = window.scrollY;
  headerBg.style.transform = `translateY(${scrollY * 0.3}px)`;
});

