// src/ts/techModal.ts

interface TechInfo {
  title: string;
  category: string;
  whereUsed: string;
  level: number;
  icon: string;
  categorySlug:
    | 'database'
    | 'analysis'
    | 'ml'
    | 'visualization'
    | 'web'
    | 'devops';
  linkedProjects?: string[];
}

const projectDetails: { [key: string]: { name: string } } = {
  'projekt-stock-momentum-analyzer': { name: 'Nasdaq Analyzer' },
  'projekt-user-behaviour-analyzer': {
    name: 'Analiza zachowania użytkownika na komputerze'
  }
};
const techDescriptions: { [key: string]: TechInfo } = {
  Python: {
    title: 'Python',
    category: 'Główny Język Programowania',
    whereUsed:
      'Wykorzystywany w każdym aspekcie moich projektów – od analizy danych i automatyzacji po backend oraz modele AI. Fundament całego mojego ekosystemu',
    level: 95,
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    categorySlug: 'analysis'
  },

  FastAPI: {
    title: 'FastAPI',
    category: 'Framework API',
    whereUsed:
      'Osobiście - uwielbiam stosować FastAPI, szybkie, skalowalne REST API, nowoczesna architektura - to jest to.',
    level: 80,
    icon: 'https://cdn.simpleicons.org/fastapi/009688',
    categorySlug: 'web'
  },

  MongoDB: {
    title: 'MongoDB',
    category: 'Baza danych',
    whereUsed:
      'Idealny do przechwowywania nieustrukturyzowanych danych, elastyczne struktury danych',
    level: 75,
    icon: 'https://cdn.simpleicons.org/mongodb/47A248',
    categorySlug: 'database'
  },

  Pandas: {
    title: 'Pandas',
    category: 'Biblioteka do analizy danych',
    whereUsed:
      'Przetwarzanie czyszczenie analiza danych, kluczowe w kazdym projekcie analitycznym',
    level: 80,
    icon: 'https://cdn.simpleicons.org/pandas/150458',
    categorySlug: 'analysis'
  },

  NumPy: {
    title: 'NumPy',
    category: 'Biblioteka do analizy danych',
    whereUsed:
      'Podstawa obliczen numerycznych, macierze. Niezbędny element w analizie danych i machine learningu ',
    level: 75,
    icon: 'https://cdn.simpleicons.org/numpy/013243',
    categorySlug: 'analysis'
  },

  SQL: {
    title: 'SQL',
    category: 'Baza danych',
    whereUsed: 'Nawet nie trzeba nic mowic - SQL to SQL ',
    level: 90,
    icon: 'https://cdn.simpleicons.org/sqlite/003351',
    categorySlug: 'database'
  },

  PostgreSQL: {
    title: 'PostgreSQL',
    category: 'Baza danych',
    whereUsed:
      'Osobiście jestem dużym fanem - zaawansowany, open source oferuje tyle możliwości. Wszędzie gdzie potrzebne przechowywanie danych trwałe jak i uporządkowane',
    level: 80,
    icon: 'https://cdn.simpleicons.org/postgresql/336791',
    categorySlug: 'database'
  },

  Matplotlib: {
    title: 'Matplotlib',
    category: 'Biblioteka do wykresów',
    whereUsed:
      'Wizualizacja danych, wykresy przydatne w projekcie analitycznym, przydatne w projekcie webowym',
    level: 60,
    icon: 'https://cdn.simpleicons.org/matplotlib/144A53',
    categorySlug: 'visualization'
  },

  SQLite: {
    title: 'SQLite',
    category: 'Baza danych',
    whereUsed:
      'Wykorzystywany w mniejszych projektach lokalnych oraz do prototypowania. Lekka baza danych idealna do aplikacji standalone.',
    level: 90,
    icon: 'https://cdn.simpleicons.org/sqlite/003B57',
    categorySlug: 'database'
  },

  Git: {
    title: 'Git',
    category: 'System kontroli wersji',
    whereUsed:
      'Używany do zarządzania wersjami kodu i pracy nad projektami. Znajomość podstawowych operacji i workflowów, rozwijana w kierunku współpracy zespołowej patrząc w przyszłość.',
    level: 50,
    icon: 'https://cdn.simpleicons.org/git/000000',
    categorySlug: 'devops'
  },

  GitHub: {
    title: 'GitHub',
    category: 'System kontroli wersji',
    whereUsed:
      'Platforma do hostowania kodu, przeglądania repozytoriów. Osobiscie nie wiem na jakiej ocenie oceniac, W pełni swobodna praca z GitHubem',
    level: 100,
    icon: 'https://cdn.simpleicons.org/github/181717',
    categorySlug: 'devops'
  },

  Jupyter: {
    title: 'Jupyter',
    category: 'Framework do analizy danych',
    whereUsed:
      'Środowisko wykorzystywane w analizach danych, testowaniu modeli ML i eksploracji danych. Ułatwia iteracyjne eksperymentowanie z danymi',
    level: 100,
    icon: 'https://cdn.simpleicons.org/jupyter/F37626',
    categorySlug: 'analysis'
  },

  MySQL: {
    title: 'MySQL',
    category: 'Baza danych',
    whereUsed:
      'Poznany w ramach nauki baz danych – solidne podstawy relacyjnych systemów, jednak rzadko używany w praktyce projektowej.',
    level: 80,
    icon: 'https://cdn.simpleicons.org/mysql/4479A1',
    categorySlug: 'database'
  },

  Scikitlearn: {
    title: 'Scikitlearn',
    category: 'Biblioteka do Machine Learninga',
    whereUsed:
      'Biblioteka używana do tworzenia, trenowania i oceny klasycznych modeli Machine Learning. Aktualnie rozwijam umiejętności w tym zakresie',
    level: 40,
    icon: 'https://cdn.simpleicons.org/scikit-learn/F23B52',
    categorySlug: 'ml'
  }
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
