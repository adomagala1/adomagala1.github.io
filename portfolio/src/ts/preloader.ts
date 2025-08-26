// src/ts/preloader.ts

export function initPreloader(): void {
  const preloader = document.getElementById(
    'preloader'
  ) as HTMLDivElement | null;
  const pageContent = document.getElementById(
    'page-content'
  ) as HTMLDivElement | null;

  const showPageContent = () => {
    if (pageContent) {
      pageContent.classList.remove('hidden');
      pageContent.classList.add('visible');
    }
  };

  if (!preloader || !pageContent) {
    showPageContent(); // Jeśli nie ma preloadera, po prostu pokaż treść
    return;
  }

  // Jeśli preloader był już pokazany w tej sesji, ukryj go od razu
  if (sessionStorage.getItem('preloaderShown') === 'true') {
    preloader.style.display = 'none';
    showPageContent();
    return;
  }

  const loaderLogo = document.getElementById('loader-logo');
  const scrambleElements = loaderLogo
    ? Array.from(loaderLogo.querySelectorAll('span'))
    : [];
  const chars = '!<>-/[]{}—=+*^?#';

  const runScramble = (element: HTMLElement, targetChar: string) => {
    let current_char = 0;
    const interval = setInterval(() => {
      element.innerText = chars[Math.floor(Math.random() * chars.length)];
      current_char++;
      if (current_char > 10 + Math.random() * 10) {
        clearInterval(interval);
        element.innerHTML = targetChar;
      }
    }, 80);
  };

  const startPreloaderSequence = () => {
    let delay = 0;
    scrambleElements.forEach((el) => {
      const target = el.innerHTML;
      setTimeout(() => runScramble(el as HTMLElement, target), delay);
      delay += 150;
    });

    setTimeout(() => {
      if (loaderLogo) loaderLogo.classList.add('dissolving');
      setTimeout(() => {
        preloader.classList.add('loaded');
        showPageContent();
        sessionStorage.setItem('preloaderShown', 'true');
      }, 500);
    }, delay + 300);
  };

  // Używamy tego eventu, bo jest pewniejszy i czeka na załadowanie wszystkich zasobów (np. obrazków)
  window.addEventListener('load', startPreloaderSequence);
}
