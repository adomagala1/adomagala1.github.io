// Plik: src/contactDrawer.ts

export function initContactDrawer(): void {
  // --- 1. POBIERANIE GŁÓWNYCH ELEMENTÓW ---
  const openDrawerButton = document.querySelector('.contact-button');
  const drawer = document.getElementById('contact-drawer') as HTMLElement;
  const overlay = document.getElementById('drawer-overlay') as HTMLElement;

  if (!openDrawerButton || !drawer || !overlay) {
    console.error('Brak podstawowych elementów dla Contact Drawer.');
    return;
  }

  // --- 2. POBIERANIE WEWNĘTRZNYCH ELEMENTÓW PANELU ---
  const drawerHandle = drawer.querySelector(
    '#close-drawer-handle'
  ) as HTMLElement;
  const tabs = Array.from(drawer.querySelectorAll('.drawer-tab'));
  const tabContents = Array.from(drawer.querySelectorAll('.tab-content'));

  if (!drawerHandle || tabs.length === 0) {
    console.error('Brak uchwytu zamknięcia lub zakładek w Contact Drawer.');
    return;
  }

  // --- 3. LOGIKA OTWIERANIA / ZAMYKANIA ---
  const openDrawer = (event: Event) => {
    event.preventDefault();
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.classList.add('drawer-open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerHandle.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    drawer.setAttribute('aria-hidden', 'true');
    (openDrawerButton as HTMLElement).focus();
  };

  // --- 4. LOGIKA ZAKŁADEK ---
  const setActiveTab = (tabToActivate: Element) => {
    const targetId = tabToActivate.getAttribute('data-tab');
    if (!targetId) return;

    const targetContent = document.getElementById(targetId + '-content');
    if (!targetContent) return;

    tabs.forEach((tab) => tab.setAttribute('aria-selected', 'false'));
    tabContents.forEach((content) => content.classList.remove('active'));

    tabToActivate.setAttribute('aria-selected', 'true');
    targetContent.classList.add('active');
  };

  // --- 5. OBSŁUGA KLAWIATURY (Z PUŁAPKĄ NA FOKUS) ---
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!drawer.classList.contains('is-open')) return;

    // Zamykanie przez Escape
    if (event.key === 'Escape') {
      closeDrawer();
      return;
    }

    if (event.key === 'Tab') {
      const focusableElementsSelector =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableElements = Array.from(
        drawer.querySelectorAll<HTMLElement>(focusableElementsSelector)
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  };

  // --- 6. INICJALIZACJA I NASŁUCHIWANIE ZDARZEŃ ---
  drawer.setAttribute('aria-hidden', 'true');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('role', 'dialog');

  tabs.forEach((tab) => {
    const targetId = tab.getAttribute('data-tab');
    if (!targetId) return;

    const targetContent = document.getElementById(targetId + '-content');
    if (!targetContent) return;

    tab.setAttribute('role', 'tab');
    targetContent.setAttribute('role', 'tabpanel');
    tab.setAttribute('aria-controls', targetContent.id);

    tab.addEventListener('click', (e) => {
      if (tab.classList.contains('disabled')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      setActiveTab(tab);
    });
  });

  if (tabs.length > 0) {
    setActiveTab(tabs[0]);
  }

  openDrawerButton.addEventListener('click', openDrawer);
  drawerHandle.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', handleKeyDown);
}
