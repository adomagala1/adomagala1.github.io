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
