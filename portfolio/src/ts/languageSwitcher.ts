// src/ts/languageSwitcher.ts

// Słownik zostaje ten sam, który ci dałem wcześniej.
const translations = {
  metaTitle: {
    pl: 'Portfolio | Adrian Domagała - Analityk Danych & Python Developer',
    en: 'Portfolio | Adrian Domagała - Data Analyst & Python Developer'
  },
  metaDescription: {
    pl: 'Przeglądaj portfolio Adriana Domagały, analityka danych i programisty Python...',
    en: 'Browse the portfolio of Adrian Domagała, a Data Analyst and Python developer...'
  },
  ariaThemeToggle: {
    pl: 'Przełącz motyw',
    en: 'Toggle theme'
  },
  ariaMenuToggle: {
    pl: 'Otwórz menu',
    en: 'Open menu'
  },
  navSkills: {
    pl: 'Umiejętności',
    en: 'Skills'
  },
  navAbout: {
    pl: 'O mnie',
    en: 'About'
  },
  navProjects: {
    pl: 'Projekty',
    en: 'Projects'
  },
  navProjectDashboard: {
    pl: 'Analiza Danych Sprzedażowych',
    en: 'Sales Data Analysis'
  },

  navContact: {
    pl: 'Kontakt',
    en: 'Contact'
  },

  // Hero Section
  heroTitle: {
    pl: 'Analityk Danych & Python',
    en: 'Data Analyst & Python'
  },
  heroSubtitle: {
    pl: 'Posiadam umiejętności i podejście, które twojej firmie się spodobają',
    en: 'I possess the skills and mindset your company will appreciate'
  },
  heroButton: {
    pl: 'O mnie',
    en: 'About Me'
  },

  // About Section
  aboutSectionTitle: {
    pl: 'O Mnie',
    en: 'About Me'
  },
  aboutGreeting: {
    pl: 'Cześć, tu Adrian Domagała.<br />Tak właściwie, dlaczego tutaj jesteś? <br />- Już tłumaczę',
    en: "Hi, I'm Adrian Domagała.<br />So, why are you here? <br />- Let me explain"
  },
  aboutP1: {
    pl: 'Szczerze - jestem młodą osobą z technikum programistycznego interesującą się analizą danych i rynkiem IT, nie mam dziesięciu lat doświadczenia na rynku ale mam konkretne założenia i cele.',
    en: "Honestly - I'm a young person from a programming technical high school interested in data analysis and the IT market. I don't have ten years of market experience, but I have concrete assumptions and goals."
  },
  aboutP2: {
    pl: 'Aktualnie moim największym celem jest wejście na rynek pracy i zdobywanie realnego doświadczenia - ale, co ważniejsze to <b>zdobycie odpowiedniego miejsca na rozwój</b> swoich pasji i progres w zawodzie.<br /><br />Nakreślę poziom tego wyzwania. Patrząc na aktualny rozwój AI i LLM czy systemów AI mało kto zwróci uwagę na 17-latka bez doświadczenia i medali za olimpiady, więc że tak powiem misja jest troszkę ciężka. Ale z natury jestem uparty więc robię swoje. Aktualnie, nie brzmi to jak odpowiedź na pytanie w nagłówku, więc już wracam do odpowiedzi na temat.',
    en: "Currently, my biggest goal is to enter the job market and gain real experience - but, more importantly, to <b>find the right place to develop</b> my passions and progress in my profession.<br /><br />Let me outline the level of this challenge. Looking at the current development of AI and LLMs, few will pay attention to a 17-year-old without experience or Olympic medals, so the mission is a bit tough. But I am stubborn by nature, so I do my thing. This doesn't sound like an answer to the header question, so I'll get back to it."
  },
  aboutP3: {
    pl: 'Szukam firmy, która zauważy a przede wszystkim uwierzy w mój potencjał oraz zapewni mi miejsce na rozwój tak by po powrocie z technikum pracować i tak aby to była sytuacja win-win dla obydwu stron. W co szczerze wierzę.',
    en: 'I am looking for a company that will notice and, above all, believe in my potential and provide me with a place for growth, so that after returning from technical school, I can work in a win-win situation for both parties. I sincerely believe in that.'
  },
  aboutMotto: {
    pl: 'Analizuję. Przewiduję. Wygrywam.',
    en: 'I analyze. I predict. I win.'
  },

  // Skills Section
  skillsSectionTitle: {
    pl: 'Technologie i Narzędzia',
    en: 'Technologies and Tools'
  },
  skillsLegendDB: {
    pl: 'Bazy Danych',
    en: 'Databases'
  },
  skillsLegendAnalysis: {
    pl: 'Analiza Danych',
    en: 'Data Analysis'
  },
  skillsLegendML: {
    pl: 'Machine Learning',
    en: 'Machine Learning'
  },
  skillsLegendViz: {
    pl: 'Wizualizacja',
    en: 'Visualization'
  },

  // Projects Section
  projectsSectionTitle: {
    pl: 'Wybrane Projekty',
    en: 'Selected Projects'
  },
  project1Title: {
    pl: 'Interaktywny Dashboard Sprzedażowy',
    en: 'Interactive Sales Dashboard'
  },
  project1Desc: {
    pl: 'Stworzenie dashboardu do monitorowania kluczowych wskaźników (KPI) dla firmy e-commerce, co pozwoliło na optymalizację strategii.',
    en: 'Creation of a dashboard to monitor key performance indicators (KPIs) for an e-commerce company, which allowed for strategy optimization.'
  },
  project1Button: {
    pl: 'Zobacz Case Study',
    en: 'View Case Study'
  },
  project2Title: {
    pl: 'Analiza Sentymentu Recenzji',
    en: 'Sentiment Analysis of Reviews'
  },
  project2Desc: {
    pl: 'Model NLP do automatycznej kategoryzacji recenzji klientów. Wykorzystałem Scikit-learn do trenowania klasyfikatora.',
    en: 'An NLP model for automatic categorization of customer reviews. I used Scikit-learn to train the classifier.'
  },
  project2Button: {
    pl: 'Case Study wkrótce',
    en: 'Case Study soon'
  },

  // Contact Section
  contactSectionTitle: {
    pl: 'Nawiążmy Kontakt',
    en: "Let's Get in Touch"
  },
  contactSubtitle: {
    pl: 'Masz problem z danymi lub szukasz kogoś do zespołu? Jestem otwarty na ciekawe wyzwania. <br />Napisz do mnie, a na pewno odpowiem.',
    en: 'Have a data problem or looking for a team member? I am open to interesting challenges. <br />Write to me, and I will definitely reply.'
  },
  contactButton: {
    pl: 'Napisz Wiadomość',
    en: 'Send a Message'
  },

  // Footer
  footerEssayText: {
    pl: 'Jeśli jesteś osobą, której się nudzi bądź jest zainteresowana tym co mam w głowie, np. do rozwoju lub by rozszerzyć swoje horyzonty, to zapraszam tutaj.',
    en: "If you are bored or interested in what's on my mind, e.g., for development or to broaden your horizons, I invite you here."
  },
  footerEssayButton: {
    pl: 'Esseje',
    en: 'Essays'
  },
  footerCopyright: {
    pl: '&copy; 2025 Adrian Domagała',
    en: '&copy; 2025 Adrian Domagała'
  }
};

type Language = 'pl' | 'en';
type TranslationKey = keyof typeof translations;

const langSwitcher = document.getElementById('lang-switcher');
const langToggleButton = document.getElementById('lang-toggle-btn');
const currentLangText = document.getElementById('current-lang-text');
const langMenu = document.getElementById('lang-menu');
const translatableElements = document.querySelectorAll<HTMLElement>(
  '[data-translate-key]'
);

function setLanguage(lang: Language): void {
  const translatableElements = document.querySelectorAll<HTMLElement>(
    '[data-translate-key]'
  );

  translatableElements.forEach((element) => {
    const key = element.dataset.translateKey as TranslationKey;
    if (key && translations[key] && translations[key][lang]) {
      element.innerHTML = translations[key][lang];
    }
  });

  if (currentLangText) {
    currentLangText.textContent = lang.toUpperCase();
  }

  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);

  langSwitcher?.classList.remove('is-open');
  langToggleButton?.setAttribute('aria-expanded', 'false');
}
export function initLanguageSwitcher(): void {
  if (!langSwitcher || !langToggleButton || !langMenu || !currentLangText)
    return;

  let isAnimating = false; // Flaga, żeby nie odpalać animacji jedna na drugiej

  // Funkcja do animacji "skakania" liter
  const scrambleEffect = (
    element: HTMLElement,
    newText: string
  ): Promise<void> => {
    // Zwracamy Promise, żeby wiedzieć, kiedy animacja się skończyła
    return new Promise((resolve) => {
      const letters = '█▓▒░@#$%*!?<>[]{}01';
      let interval: number | null = null;
      let iteration = 0;

      element.classList.add('is-scrambling');
      const originalText = element.innerText;

      const animDuration = 800; // Czas trwania animacji w ms
      const stepDuration = 30; // Co ile ms ma się zmieniać litera

      interval = window.setInterval(() => {
        element.innerText = originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return newText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('');

        // Zakończenie animacji
        if (iteration >= newText.length) {
          if (interval) clearInterval(interval);
          element.innerText = newText;
          element.classList.remove('is-scrambling');
          resolve(); // Informujemy, że Promise jest zakończony
        }

        iteration += newText.length / (animDuration / stepDuration);
      }, stepDuration);
    });
  };

  // 1. Ładowanie zapisanego języka (bez zmian)
  const savedLang = localStorage.getItem('language') as Language | null;
  const initialLang: Language = savedLang || 'pl';
  setLanguage(initialLang);

  // 2. Otwieranie/zamykanie menu (bez zmian)
  langToggleButton.addEventListener('click', (event) => {
    if (isAnimating) return; // Blokujemy otwieranie/zamykanie podczas animacji
    event.stopPropagation();
    const isOpen = langSwitcher.classList.toggle('is-open');
    langToggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  // 3. Wybór języka z menu (GŁÓWNA ZMIANA)
  langMenu.addEventListener('click', async (event) => {
    if (isAnimating) return; // Jeśli animacja już leci, ignorujemy kliknięcia

    const target = event.target as HTMLElement;

    if (target.classList.contains('lang-option')) {
      const selectedLang = target.dataset.lang as Language;
      const currentLang = document.documentElement.lang;

      if (selectedLang === currentLang) {
        langSwitcher?.classList.remove('is-open');
        langToggleButton?.setAttribute('aria-expanded', 'false');
        return;
      }

      isAnimating = true; // Zaczynamy animację, blokujemy inne akcje

      const newText = selectedLang === 'pl' ? 'Polski' : 'English';

      // Czekamy, aż animacja "scramble" się zakończy
      await scrambleEffect(target, newText);

      // Dopiero PO zakończeniu animacji:
      setLanguage(selectedLang); // Zmieniamy język
      // Menu zamyka się samo w funkcji setLanguage

      isAnimating = false; // Kończymy animację, odblokowujemy
    }
  });

  // 4. Zamykanie menu po kliknięciu gdziekolwiek indziej
  window.addEventListener('click', () => {
    if (isAnimating) return; // Blokujemy zamykanie podczas animacji
    if (langSwitcher.classList.contains('is-open')) {
      langSwitcher.classList.remove('is-open');
      langToggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}
