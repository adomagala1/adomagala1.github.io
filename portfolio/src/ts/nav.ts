// src/ts/nav.ts

export function initMobileNav(): void {
  const hamburgerBtn = document.getElementById(
    'hamburger-menu'
  ) as HTMLButtonElement | null;
  const overlayMenu = document.getElementById(
    'overlay-menu'
  ) as HTMLDivElement | null;

  if (!hamburgerBtn || !overlayMenu) {
    return;
  }

  const navLinksHTML = `
    <div class="nav-links">
      <a href="/#about" data-translate-key="navAbout">O Mnie</a>
      <a href="/#skills" data-translate-key="navSkills">Umiejętności</a>
      <div class="nav-item has-submenu">
        <button type="button" class="submenu-toggle" aria-expanded="false" aria-controls="projects-submenu" data-translate-key="navProjects">
          Projekty
          <svg class="submenu-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="submenu" id="projects-submenu">
          <a href="/projekt-dashboard.html" data-translate-key="navProjectDashboard">Analiza Danych Sprzedażowych</a>
          <a href="#" class="disabled" data-translate-key="navProjectEcommerce">Sklep E-commerce (wkrótce)</a>
        </div>
      </div>
      <a href="/#contact" data-translate-key="navContact">Kontakt</a>
    </div>
  `;
  overlayMenu.innerHTML = navLinksHTML;

  const menuLinks =
    overlayMenu.querySelectorAll<HTMLAnchorElement>('a:not(.disabled)');
  const submenuToggle =
    overlayMenu.querySelector<HTMLButtonElement>('.submenu-toggle');

  let isHamburgerOnCooldown = false;
  const HAMBURGER_COOLDOWN = 500;

  const toggleMenu = () => {
    if (isHamburgerOnCooldown) return;
    isHamburgerOnCooldown = true;

    const isActive = hamburgerBtn.classList.toggle('is-active');
    overlayMenu.classList.toggle('is-active', isActive);
    document.body.classList.toggle('nav-is-active', isActive);

    setTimeout(() => {
      isHamburgerOnCooldown = false;
    }, HAMBURGER_COOLDOWN);
  };

  hamburgerBtn.addEventListener('click', toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (overlayMenu.classList.contains('is-active')) {
        toggleMenu();
      }
    });
  });

  if (submenuToggle) {
    submenuToggle.addEventListener('click', () => {
      const parentItem = submenuToggle.parentElement;
      if (parentItem) {
        const isExpanded = parentItem.classList.toggle('is-open');
        submenuToggle.setAttribute('aria-expanded', String(isExpanded));
      }
    });
  }

  // Naprawa buga przy zmianie rozdzielczości
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      if (overlayMenu.classList.contains('is-active')) {
        hamburgerBtn.classList.remove('is-active');
        overlayMenu.classList.remove('is-active');
        document.body.classList.remove('nav-is-active');
      }
    }
  });
}
