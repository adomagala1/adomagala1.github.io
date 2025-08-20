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
  const skillsBox = document.getElementById('skills-box');

  if (skillsBox) {
    const skillItems = skillsBox.querySelectorAll('.skill-item');
    let skills = [];
    let animationFrameId;
    const speedFactor = 0.5;

    // --- NOWE STAŁE DLA PRECYZJI ---
    // Liczba iteracji na klatkę. Im wyższa, tym dokładniejsza fizyka, ale większe obciążenie. 3-5 to dobry kompromis.
    const PHYSICS_ITERATIONS = 4;

    const initSkillsAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      const boxRect = skillsBox.getBoundingClientRect();
      skills = [];

      skillItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const radius = Math.max(itemRect.width, itemRect.height) / 2; // Używamy większego wymiaru dla bezpieczeństwa

        let positionOK = false;
        let x, y;
        let attempts = 0;
        while (!positionOK && attempts < 200) {
          x = radius + Math.random() * (boxRect.width - 2 * radius);
          y = radius + Math.random() * (boxRect.height - 2 * radius);
          positionOK = true;
          for (const otherSkill of skills) {
            const dist = Math.hypot(x - otherSkill.x, y - otherSkill.y);
            if (dist < radius + otherSkill.radius) {
              positionOK = false;
              break;
            }
          }
          attempts++;
        }

        skills.push({
          element: item,
          x,
          y,
          vx: (Math.random() - 0.5) * 2 * speedFactor,
          vy: (Math.random() - 0.5) * 2 * speedFactor,
          width: itemRect.width,
          height: itemRect.height,
          radius: radius
        });
      });

      animateSkills();
    };

    const animateSkills = () => {
      const boxRect = skillsBox.getBoundingClientRect();

      // Pętla iteracji fizyki - klucz do stabilności
      for (let i = 0; i < PHYSICS_ITERATIONS; i++) {
        skills.forEach((skill, index) => {
          // Aktualizujemy pozycję w każdym kroku iteracji (dzielimy, by zachować stałą prędkość)
          skill.x += skill.vx / PHYSICS_ITERATIONS;
          skill.y += skill.vy / PHYSICS_ITERATIONS;

          // Sprawdzanie kolizji z innymi elementami
          for (let j = index + 1; j < skills.length; j++) {
            const otherSkill = skills[j];
            const dx = otherSkill.x - skill.x;
            const dy = otherSkill.y - skill.y;
            const distance = Math.hypot(dx, dy);
            const minDistance = skill.radius + otherSkill.radius;

            if (distance < minDistance) {
              // KROK 1: NATYCHMIASTOWA KOREKTA POZYCJI (eliminuje przenikanie)
              const overlap = minDistance - distance;
              const nx = dx / distance;
              const ny = dy / distance;
              skill.x -= (overlap / 2) * nx;
              skill.y -= (overlap / 2) * ny;
              otherSkill.x += (overlap / 2) * nx;
              otherSkill.y += (overlap / 2) * ny;

              // KROK 2: FIZYKA ODBICIA (realistyczny ruch)
              const rvx = skill.vx - otherSkill.vx;
              const rvy = skill.vy - otherSkill.vy;
              const velAlongNormal = rvx * nx + rvy * ny;
              if (velAlongNormal < 0) {
                const tangentX = -ny;
                const tangentY = nx;
                const dotTan1 = skill.vx * tangentX + skill.vy * tangentY;
                const dotTan2 =
                  otherSkill.vx * tangentX + otherSkill.vy * tangentY;
                const dotNorm1 = skill.vx * nx + skill.vy * ny;
                const dotNorm2 = otherSkill.vx * nx + otherSkill.vy * ny;
                const m1 = dotNorm2,
                  m2 = dotNorm1;
                skill.vx = tangentX * dotTan1 + nx * m1;
                skill.vy = tangentY * dotTan1 + ny * m1;
                otherSkill.vx = tangentX * dotTan2 + nx * m2;
                otherSkill.vy = tangentY * dotTan2 + ny * m2;
              }
            }
          }
        });
      }

      // OSTATECZNA GWARANCJA - bezwzględne trzymanie w boxie i odbicie
      skills.forEach((skill) => {
        if (skill.x - skill.radius < 0) {
          skill.x = skill.radius;
          skill.vx *= -1;
        } else if (skill.x + skill.radius > boxRect.width) {
          skill.x = boxRect.width - skill.radius;
          skill.vx *= -1;
        }
        if (skill.y - skill.radius < 0) {
          skill.y = skill.radius;
          skill.vy *= -1;
        } else if (skill.y + skill.radius > boxRect.height) {
          skill.y = boxRect.height - skill.radius;
          skill.vy *= -1;
        }
      });

      // Renderowanie na ekranie (dopiero po wszystkich obliczeniach)
      skills.forEach((skill) => {
        skill.element.style.transform = `translate(${
          skill.x - skill.width / 2
        }px, ${skill.y - skill.height / 2}px)`;
      });

      animationFrameId = requestAnimationFrame(animateSkills);
    };

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!animationFrameId) {
              initSkillsAnimation();
            }
          } else {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    skillsObserver.observe(skillsBox);

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (
          skillsObserver
            .takeRecords()
            .some((record) => record.isIntersecting) ||
          animationFrameId
        ) {
          initSkillsAnimation();
        }
      }, 250);
    });
  }
});
