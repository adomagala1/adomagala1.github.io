// src/ts/effects.ts

export function initCursorSpotlight(): void {
  const spotlight = document.getElementById(
    'spotlight'
  ) as HTMLDivElement | null;
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      // Przesunięcie o połowę rozmiaru światła, aby kursor był w środku
      const x = e.clientX - 150;
      const y = e.clientY - 150;
      spotlight.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

export function initMagneticImage(): void {
  const imageWrapper = document.querySelector(
    '.about-image'
  ) as HTMLDivElement | null;
  if (!imageWrapper) return;

  imageWrapper.addEventListener('mousemove', (e) => {
    const rect = imageWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = x * 0.15;
    const moveY = y * 0.15;

    imageWrapper.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  });

  imageWrapper.addEventListener('mouseleave', () => {
    imageWrapper.style.transform = 'translate(0, 0) scale(1)';
  });
}
