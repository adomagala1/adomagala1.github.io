export function initContactDrawer(): void {
  const openDrawerButton = document.querySelector('.contact-button');
  const drawer = document.getElementById('contact-drawer') as HTMLElement;
  const overlay = document.getElementById('drawer-overlay') as HTMLElement;

  if (!openDrawerButton || !drawer || !overlay) {
    return;
  }

  const drawerHandle = drawer.querySelector(
    '#close-drawer-handle'
  ) as HTMLElement;
  const tabs = drawer.querySelectorAll('.drawer-tab');
  const tabContents = drawer.querySelectorAll('.tab-content');

  // ARIA: Ustawiamy początkowy stan panelu jako ukryty
  drawer.setAttribute('aria-hidden', 'true');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('role', 'dialog');

  const openDrawer = (event: Event) => {
    event.preventDefault();
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.classList.add('drawer-open');
    // ARIA: Informujemy czytniki, że panel jest teraz widoczny
    drawer.setAttribute('aria-hidden', 'false');
    // ARIA: Ustawiamy fokus na pierwszym interaktywnym elemencie w panelu (np. przycisk zamknięcia)
    drawerHandle?.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    // ARIA: Informujemy czytniki, że panel jest znowu ukryty
    drawer.setAttribute('aria-hidden', 'true');
    // ARIA: Wracamy fokusem do przycisku, który otworzył panel
    (openDrawerButton as HTMLElement).focus();
  };

  openDrawerButton.addEventListener('click', openDrawer);
  drawerHandle?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Logika zakładek z ARIA
  tabs.forEach((tab, index) => {
    const targetId = tab.getAttribute('data-tab');
    if (!targetId) return;

    const targetContent = document.getElementById(targetId + '-content');
    if (!targetContent) return;

    // ARIA: Ustawiamy role
    tab.setAttribute('role', 'tab');
    targetContent.setAttribute('role', 'tabpanel');
    tab.setAttribute('aria-controls', targetContent.id);

    // ARIA: Ustawiamy stan początkowy (pierwsza zakładka aktywna)
    if (index === 0) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      targetContent.classList.add('active');
    } else {
      tab.setAttribute('aria-selected', 'false');
    }

    tab.addEventListener('click', () => {
      // Zdejmij stan 'active' i ARIA ze wszystkich
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach((c) => c.classList.remove('active'));

      // Ustaw stan 'active' i ARIA na klikniętym elemencie
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      targetContent.classList.add('active');
    });
  });
}
