export function initClickableCards(): void {
  const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

  projectCards.forEach((card) => {
    const link = card.querySelector<HTMLAnchorElement>('a:not(.disabled)');

    if (link) {
      card.classList.add('is-clickable');

      card.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).closest('a')) {
          return;
        }

        if (link.href) {
          window.location.href = link.href;
        }
      });
    }
  });
}
