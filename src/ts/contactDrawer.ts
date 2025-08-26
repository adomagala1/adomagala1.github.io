export function initContactDrawer(): void {
  const openDrawerButton = document.querySelector('.contact-button');
  const drawerHandle = document.getElementById('close-drawer-handle');
  const drawer = document.getElementById('contact-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const tabs = document.querySelectorAll('.drawer-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  if (!openDrawerButton || !drawerHandle || !drawer || !overlay) {
    // Zmieniamy na return, żeby nie zatrzymywać innych skryptów, jeśli ten zawiedzie
    return;
  }

  const openDrawer = (event: Event) => {
    event.preventDefault();
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.classList.add('drawer-open');
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
  };

  openDrawerButton.addEventListener('click', openDrawer);
  drawerHandle.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      if (!targetId) return;

      tabs.forEach((t) => t.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');

      const targetContent = document.getElementById(targetId + '-content');
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}
