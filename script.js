/* ── SythOS Website Mobile & Animation JavaScript Engine ─────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Hamburger Toggle Logic
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn-console');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when any link inside is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // 2. Intersection Observer for Scroll Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target all showcase rows and about card
  const animTargets = document.querySelectorAll('.showcase-row, .about-card');
  animTargets.forEach(target => {
    revealObserver.observe(target);
  });
});
