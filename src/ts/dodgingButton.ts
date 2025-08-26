export function initDodgingButtons(): void {
  const canHover = window.matchMedia('(hover: hover)').matches;
  if (!canHover) {
    return;
  }

  const dodgingButtons = document.querySelectorAll<HTMLAnchorElement>(
    '.btn-secondary.disabled'
  );

  dodgingButtons.forEach((button) => {
    const originalText = button.textContent;
    const wittyText = 'UPS!';

    const parentCard = button.closest('.project-card');
    if (!parentCard) return;

    button.addEventListener('mouseenter', () => {
      button.classList.toggle('is-dodging');
      button.textContent = wittyText;
    });

    button.addEventListener('mouseleave', () => {
      button.textContent = 'Ooops';
    });

    parentCard.addEventListener('mouseleave', () => {
      button.classList.remove('is-dodging');
      button.textContent = originalText;
    });
  });
}
