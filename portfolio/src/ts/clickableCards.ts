export function initClickableCards(): void {
  const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

  projectCards.forEach((card) => {
    // Znajdź pierwszy link w karcie, który NIE jest wyłączony (.disabled)
    const link = card.querySelector<HTMLAnchorElement>('a:not(.disabled)');

    // Jeśli w karcie jest aktywny link, uczyń ją klikalną
    if (link) {
      card.classList.add('is-clickable');

      card.addEventListener('click', (event) => {
        // Jeśli kliknięto bezpośrednio w link lub jego dziecko, nie rób nic
        // Przeglądarka sama obsłuży nawigację
        if ((event.target as HTMLElement).closest('a')) {
          return;
        }

        // W przeciwnym razie, przekieruj na adres URL z linku
        // Sprawdzamy, czy link istnieje, żeby uniknąć błędów
        if (link.href) {
          window.location.href = link.href;
        }
      });
    }
  });
}
