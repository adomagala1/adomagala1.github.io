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
      'Analiza danych, AI, Backend praktycznie wszędzie i zawsze w projekcie będzie',
    level: 95,
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    categorySlug: 'analysis',
    linkedProjects: [
      'projekt-stock-momentum-analyzer',
      'projekt-user-behaviour-analyzer'
    ]
  },
  FastAPI: {
    title: 'FastAPI',
    category: 'Framework API',
    whereUsed:
      'Osobiście - uwielbiam stosować wraz z połaczeniem frontendu z backendem',
    level: 80,
    icon: 'https://cdn.simpleicons.org/fastapi/009688',
    categorySlug: 'web',
    linkedProjects: ['projekt-user-behaviour-analyzer']
  },
  MongoDB: {
    title: 'MongoDB',
    category: 'Baza danych',
    whereUsed: 'Tam gdzie PosgtreSQL nie pomoże, tam MongoDB pomoże',
    level: 75,
    icon: 'https://cdn.simpleicons.org/mongodb/47A248',
    categorySlug: 'database',
    linkedProjects: ['projekt-stock-momentum-analyzer']
  },
  Pandas: {
    title: 'Pandas',
    category: 'Biblioteka do analizy danych',
    whereUsed: 'Analiza danych wszędzie gdzie dane - tam jest Pandas tyle',
    level: 80,
    icon: 'https://cdn.simpleicons.org/pandas/150458',
    categorySlug: 'analysis',
    linkedProjects: [
      'projekt-stock-momentum-analyzer',
      'projekt-user-behaviour-analyzer'
    ]
  },
  NumPy: {
    title: 'NumPy',
    category: 'Biblioteka do analizy danych',
    whereUsed: 'Podstawa obliczen numerycznych ',
    level: 75,
    icon: 'https://cdn.simpleicons.org/numpy/013243',
    categorySlug: 'analysis',
    linkedProjects: [
      'projekt-stock-momentum-analyzer',
      'projekt-user-behaviour-analyzer'
    ]
  },
  SQL: {
    title: 'SQL',
    category: 'Baza danych',
    whereUsed: 'Wszędzie gdzie dane tam będzie SQL praktycznie',
    level: 90,
    icon: 'https://cdn.simpleicons.org/sqlite/003351',
    categorySlug: 'database',
    linkedProjects: [
      'projekt-stock-momentum-analyzer',
      'projekt-user-behaviour-analyzer'
    ]
  },
  PostgreSQL: {
    title: 'PostgreSQL',
    category: 'Baza danych',
    whereUsed:
      'Personalnie jestem dużym fanem - zaawansowany, open source tyle możliwości. Wszędzie gdzie potrzebne przechowywanie danych trwale, uporządkowanie',
    level: 80,
    icon: 'https://cdn.simpleicons.org/postgresql/336791',
    categorySlug: 'database',
    linkedProjects: [
      'projekt-stock-momentum-analyzer',
      'projekt-user-behaviour-analyzer'
    ]
  },
  Matplotlib: {
    title: 'Matplotlib',
    category: 'Biblioteka do wykresów',
    whereUsed:
      'Wizualizacja danych tyle jakby nie jest skomplikowana ale jakoś lekko mnie nudzi ale jest dobra i przyjemna do użycia ',
    level: 60,
    icon: 'https://cdn.simpleicons.org/matplotlib/144A53',
    categorySlug: 'visualization',
    linkedProjects: ['projekt-stock-momentum-analyzer']
  },
  SQLite: {
    title: 'SQLite',
    category: 'Baza danych',
    whereUsed:
      'Prosta lokalna, przydawała sie na poczatku tworzenai projektow, jakby spoko jeśli jest tylko na lokalnym komputerze i najlepiej jeden plik albo jak taki dodatkowa funkcja zapisu jak w projekcie załączonym ',
    level: 90,
    icon: 'https://cdn.simpleicons.org/sqlite/003B57',
    categorySlug: 'database',
    linkedProjects: ['projekt-user-behaviour-analyzer']
  },
  Git: {
    title: 'Git',
    category: 'System kontroli wersji',
    whereUsed:
      'Wszystkie projekty na gicie, jedynie zdaje sobie sprawe, że ten poziom to 50/100 bo nie miałem styczności z realnymi projektami grupowymi a wiem że tam może się dużo dziać nowych rzeczy ',
    level: 50,
    icon: 'https://cdn.simpleicons.org/git/000000',
    categorySlug: 'devops',
    linkedProjects: [
      'projekt-stock-momentum-analyzer',
      'projekt-user-behaviour-analyzer'
    ]
  },
  GitHub: {
    title: 'GitHub',
    category: 'System kontroli wersji',
    whereUsed:
      'Osobiscie nie wiem na jakiej ocenie oceniac, umiem w GitHuba nie pogubie sie, umiem znalesc przydatne rzeczy itp ',
    level: 100,
    icon: 'https://cdn.simpleicons.org/github/181717',
    categorySlug: 'devops',
    linkedProjects: [
      'projekt-stock-momentum-analyzer',
      'projekt-user-behaviour-analyzer'
    ]
  },
  Jupyter: {
    title: 'Jupyter',
    category: 'Framework do analizy danych',
    whereUsed:
      'Bardzo dużo używałem, jestem zapoznany z funkcjami działaniem wszystkim, aktualnie troche skupiam sie bardziej na projektach bardziej rozwinietych i wychodzacych poza same analizy danych czy AI',
    level: 100,
    icon: 'https://cdn.simpleicons.org/jupyter/F37626',
    categorySlug: 'analysis',
    linkedProjects: []
  },
  MySQL: {
    title: 'MySQL',
    category: 'Baza danych',
    whereUsed: 'Głownie uczyłem się w szkole nie zdarzyło mi sie uzyć poza nią',
    level: 80,
    icon: 'https://cdn.simpleicons.org/mysql/4479A1',
    categorySlug: 'database',
    linkedProjects: []
  },
  Scikitlearn: {
    title: 'Scikitlearn',
    category: 'Biblioteka do Machine Learninga',
    whereUsed:
      'Nie czuje sie zbyt pewnie w AI aktualnie jakoś tak po prostu, ale zaczyna się to zmieniać więc bardzo fajnie',
    level: 40,
    icon: 'https://cdn.simpleicons.org/scikit-learn/F23B52',
    categorySlug: 'ml',
    linkedProjects: [
      'projekt-user-behaviour-analyzer',
      'projekt-stock-momentum-analyzer'
    ]
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
