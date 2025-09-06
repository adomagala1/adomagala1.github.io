// src/ts/techModal.ts

interface TechInfo {
  title: string;
  category: string;
  whereUsed: string;
  level: number;
  icon: string;
  categorySlug: 'database' | 'analysis' | 'ml' | 'visualization' | 'web'; // KLUCZOWA ZMIANA
}

const techDescriptions: { [key: string]: TechInfo } = {
  Python: {
    title: 'Python',
    category: 'Główny Język Programowania',
    whereUsed: 'Analiza danych, AI, Backend',
    level: 95,
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    categorySlug: 'analysis' // Przypisujemy kategorię koloru
  },
  FastAPI: {
    title: 'FastAPI',
    category: 'Framework API',
    whereUsed: 'Wydajne REST API',
    level: 85,
    icon: 'https://cdn.simpleicons.org/fastapi/009688',
    categorySlug: 'web' // Przypisujemy kategorię koloru
  }
  // Uzupełnij resztę technologii, dodając odpowiedni 'categorySlug'
};

// ... reszta zmiennych (modal, modalIcon itd.) bez zmian ...
let modal: HTMLElement | null;
let modalIcon: HTMLImageElement | null;
let modalTitle: HTMLElement | null;
let modalCategory: HTMLElement | null;
let modalWhereUsed: HTMLElement | null;
let segmentElements: HTMLElement[] = [];

const hide = () => modal?.classList.remove('is-visible');

export function initTechModal(): void {
  modal = document.getElementById('tech-modal');
  if (!modal) {
    console.error('Modal not found!');
    return;
  }

  modalIcon = document.getElementById('modal-icon') as HTMLImageElement;
  modalTitle = document.getElementById('modal-title');
  modalCategory = document.getElementById('modal-category');
  modalWhereUsed = document.getElementById('modal-where-used');
  const skillLevelBar = document.getElementById('skill-level-bar');

  if (
    !modalIcon ||
    !modalTitle ||
    !modalCategory ||
    !modalWhereUsed ||
    !skillLevelBar
  ) {
    console.error('One or more modal elements are missing in HTML.');
    return;
  }

  const totalSegments = 10;
  skillLevelBar.innerHTML = '';
  for (let i = 0; i < totalSegments; i++) {
    const segment = document.createElement('div');
    segment.className = 'skill-level-segment';
    skillLevelBar.appendChild(segment);
    segmentElements.push(segment);
  }

  modal.querySelector('.modal-close')?.addEventListener('click', hide);
  modal.querySelector('.modal-backdrop')?.addEventListener('click', hide);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-visible')) hide();
  });
}

export function show(skillName: string): void {
  const data = techDescriptions[skillName];
  if (
    !data ||
    !modal ||
    !modalIcon ||
    !modalTitle ||
    !modalCategory ||
    !modalWhereUsed
  )
    return;

  const accentColorVar = `var(--color-${data.categorySlug})`;
  modal.style.setProperty('--modal-accent-color', accentColorVar);

  modalIcon.src = data.icon;
  modalTitle.textContent = data.title;
  modalCategory.textContent = data.category;
  modalWhereUsed.textContent = data.whereUsed;

  const activeSegments = Math.round(data.level / 10);
  segmentElements.forEach((segment, index) => {
    segment.classList.toggle('is-active', index < activeSegments);
  });

  modal.classList.add('is-visible');
}
