// src/ts/main.ts

// 1. Import CSS
import '../style.css';

// 2. Import modułów z logiką
import { initPreloader } from './preloader';
import { initMobileNav } from './nav';
import { initThemeToggle } from './theme';
import { initScrollAnimations } from './scrollAnimations';
import { initSkillsAnimation } from './skillsAnimation';

// 3. Główny punkt startowy aplikacji
function main() {
  initPreloader();
  initMobileNav();
  initThemeToggle();
  initScrollAnimations();
  initSkillsAnimation();
}

// Uruchom główną funkcję, gdy dokument jest gotowy
// (DOMContentLoaded jest lepszy niż czekanie na 'load' dla skryptów)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
document.addEventListener('DOMContentLoaded', () => {
  const openDrawerButton = document.querySelector('.contact-button');
  const drawerHandle = document.getElementById('close-drawer-handle');
  const drawer = document.getElementById('contact-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const tabs = document.querySelectorAll('.drawer-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  if (!openDrawerButton || !drawerHandle || !drawer || !overlay) {
    console.error('Nie znaleziono podstawowych elementów panelu kontaktowego!');
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

  // Logika przełączania zakładek (tabs)
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Pobierz cel z atrybutu data-tab
      const targetId = tab.getAttribute('data-tab');
      if (!targetId) return;

      // Zdejmij klasę 'active' ze wszystkich zakładek i zawartości
      tabs.forEach((t) => t.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      // Dodaj klasę 'active' do klikniętej zakładki
      tab.classList.add('active');

      // Znajdź i pokaż odpowiednią zawartość
      const targetContent = document.getElementById(targetId + '-content');
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
