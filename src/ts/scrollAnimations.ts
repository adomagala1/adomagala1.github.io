// src/ts/scrollAnimations.ts

export function initScrollAnimations(): void {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px', threshold: 0.1 }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}
