document.addEventListener('DOMContentLoaded', () => {
  // === CZĘŚĆ 1: INTELIGENTNY PRELOADER & SEKWENCJA WEJŚCIA ===
  const preloader = document.getElementById('preloader');
  const pageContent = document.getElementById('page-content');

  const showPageContent = () => {
    if (pageContent) {
      pageContent.classList.remove('hidden');
      pageContent.classList.add('visible');
    }
  };
  1;
  if (preloader) {
    if (sessionStorage.getItem('preloaderShown') === 'true') {
      preloader.style.display = 'none';
      showPageContent();
    } else {
      const loaderLogo = document.getElementById('loader-logo');
      const scrambleElements = loaderLogo
        ? loaderLogo.querySelectorAll('span')
        : [];
      const chars = '!<>-_\\/[]{}—=+*^?#_';

      const runScramble = (element, targetChar) => {
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
          setTimeout(() => runScramble(el, target), delay);
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

      window.addEventListener('load', startPreloaderSequence);
    }
  } else {
    showPageContent();
  }

  // === CZĘŚĆ 2: DYNAMICZNE MENU MOBILNE & HAMBURGER ===
  // === CZĘŚĆ 2: DYNAMICZNE MENU MOBILNE & HAMBURGER ===
  const hamburgerBtn = document.getElementById('hamburger-menu');
  const overlayMenu = document.getElementById('overlay-menu');

  // Sprawdzamy, czy kluczowe elementy istnieją
  if (hamburgerBtn && overlayMenu) {
    // Tworzymy linki bezpośrednio w JS
    const navLinksHTML = `
    <div class="nav-links">
      <a href="index.html#about">O Mnie</a>
      <a href="index.html#skills">Umiejętności</a>
      <a href="index.html#projects">Projekty</a>
      <a href="index.html#contact">Kontakt</a>
    </div>
  `;
    // Wstawiamy linki do nakładki
    overlayMenu.innerHTML = navLinksHTML;

    const menuLinks = overlayMenu.querySelectorAll('a');

    const toggleMenu = () => {
      const isActive = hamburgerBtn.classList.toggle('is-active');
      overlayMenu.classList.toggle('is-active', isActive);
      document.body.classList.toggle('nav-is-active', isActive);
    };

    hamburgerBtn.addEventListener('click', toggleMenu);

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (overlayMenu.classList.contains('is-active')) {
          toggleMenu();
        }
      });
    });
  }

  // === CZĘŚĆ 3: WSPÓLNA LOGIKA PRZEŁĄCZNIKA MOTYWU ===
  const sunIconSVG = `<svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 7.106a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 101.06-1.061l-1.59-1.591z"/></svg>`;
  const moonIconSVG = `<svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.981A10.503 10.503 0 0112 22.5a10.5 10.5 0 01-10.5-10.5c0-4.368 2.667-8.112 6.46-9.672a.75.75 0 01.818.162z" clip-rule="evenodd"/></svg>`;

  const headerThemeToggle = document.querySelector(
    '.header-controls .theme-toggle'
  );
  if (headerThemeToggle) {
    headerThemeToggle.innerHTML = sunIconSVG + moonIconSVG;
  }

  if (overlayMenu && headerThemeToggle) {
    const mobileThemeToggle = headerThemeToggle.cloneNode(true);
    overlayMenu.appendChild(mobileThemeToggle);
  }

  const allThemeToggles = document.querySelectorAll('.theme-toggle');

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light-mode');
    const isLight = document.documentElement.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };

  allThemeToggles.forEach((toggle) => {
    toggle.addEventListener('click', toggleTheme);
  });

  // === CZĘŚĆ 4: ANIMACJE NA SCROLL ===
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.1
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  // === CZĘŚĆ 5: NAPRAWA BUGA PRZY ZMIANIE ROZDZIELCZOŚCI ===
  window.addEventListener('resize', () => {
    // Sprawdzamy, czy ekran jest szerszy niż breakpoint mobilny (768px)
    if (window.innerWidth > 768) {
      // Jeśli tak, upewniamy się, że menu mobilne jest zamknięte
      if (overlayMenu.classList.contains('is-active')) {
        hamburgerBtn.classList.remove('is-active');
        overlayMenu.classList.remove('is-active');
        document.body.classList.remove('nav-is-active');
      }
    }
  });
});
