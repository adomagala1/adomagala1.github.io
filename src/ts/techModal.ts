// src/ts/techModal.ts

interface TechInfo {
  title: string;
  category: string;
  whereUsed: string;
  level: number;
  icon: string;
  categorySlug: 'database' | 'analysis' | 'ml' | 'visualization' | 'web';
  linkedProjects?: string[];
}

const projectDetails: { [key: string]: { name: string } } = {
  'projekt-analiza-danych': { name: 'Analiza Danych Sprzedażowych' },
  'projekt-api-sklepu': { name: 'API dla E-commerce' }
};

const techDescriptions: { [key: string]: TechInfo } = {
  Python: {
    title: 'Python',
    category: 'Główny Język Programowania',
    whereUsed: 'Analiza danych, AI, Backend',
    level: 95,
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    categorySlug: 'analysis',
    linkedProjects: ['projekt-analiza-danych', 'projekt-api-sklepu']
  },
  FastAPI: {
    title: 'FastAPI',
    category: 'Framework API',
    whereUsed: 'Wydajne REST API',
    level: 85,
    icon: 'https://cdn.simpleicons.org/fastapi/009688',
    categorySlug: 'web',
    linkedProjects: ['projekt-api-sklepu']
  }
  // ...
};

let modal: HTMLElement | null,
  modalIcon: HTMLImageElement | null,
  modalTitle: HTMLElement | null,
  modalCategory: HTMLElement | null,
  modalWhereUsed: HTMLElement | null,
  modalProjectsContainer: HTMLElement | null,
  modalProjectsList: HTMLElement | null;
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
  modalProjectsContainer = document.getElementById('modal-projects-container');
  modalProjectsList = document.getElementById('modal-projects-list');

  if (
    !modalIcon ||
    !modalTitle ||
    !modalCategory ||
    !modalWhereUsed ||
    !skillLevelBar ||
    !modalProjectsContainer ||
    !modalProjectsList
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
  if (!data || !modal) return;

  const accentColorVar = `var(--color-${data.categorySlug})`;
  modal.style.setProperty('--modal-accent-color', accentColorVar);

  modalIcon!.src = data.icon;
  modalTitle!.textContent = data.title;
  modalCategory!.textContent = data.category;
  modalWhereUsed!.textContent = data.whereUsed;

  if (data.linkedProjects && data.linkedProjects.length > 0) {
    modalProjectsList!.innerHTML = '';
    data.linkedProjects.forEach((projectId) => {
      const project = projectDetails[projectId];
      if (!project) return;

      const link = document.createElement('a');
      link.className = 'project-link-tag';
      link.href = `#${projectId}`;
      link.textContent = project.name;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        hide();
        const projectElement = document.getElementById(projectId);
        if (projectElement) {
          projectElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          projectElement.classList.add('is-highlighted');
          setTimeout(() => {
            projectElement.classList.remove('is-highlighted');
          }, 2500); // Podświetlenie na 2.5 sekundy
        }
      });
      modalProjectsList!.appendChild(link);
    });
    modalProjectsContainer!.style.display = 'block';
  } else {
    modalProjectsContainer!.style.display = 'none';
  }

  // Animacja paska
  const activeSegments = Math.round(data.level / 10);
  segmentElements.forEach((segment, index) => {
    segment.classList.toggle('is-active', index < activeSegments);
  });

  modal.classList.add('is-visible');
}
