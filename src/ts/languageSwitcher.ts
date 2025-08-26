// src/ts/languageSwitcher.ts
const translations = {
  // === GŁÓWNE, WSPÓLNE DLA WSZYSTKICH STRON ===
  metaTitle: {
    pl: 'Portfolio | Adrian Domagała - Analityk Danych & Python Developer',
    en: 'Portfolio | Adrian Domagała - Data Analyst & Python Developer'
  },
  metaDescription: {
    pl: 'Przeglądaj portfolio Adriana Domagały, analityka danych i programisty Python...',
    en: 'Browse the portfolio of Adrian Domagała, a Data Analyst and Python developer...'
  },
  ariaThemeToggle: { pl: 'Przełącz motyw', en: 'Toggle theme' },
  ariaMenuToggle: { pl: 'Otwórz menu', en: 'Open menu' },
  navSkills: { pl: 'Umiejętności', en: 'Skills' },
  navAbout: { pl: 'O mnie', en: 'About' },
  navProjects: { pl: 'Projekty', en: 'Projects' },
  navProjectDashboard: {
    pl: 'Analiza Danych Sprzedażowych',
    en: 'Sales Data Analysis'
  },
  navContact: { pl: 'Kontakt', en: 'Contact' },
  footerCopyright: {
    pl: '&copy; 2025 Adrian Domagała',
    en: '&copy; 2025 Adrian Domagała'
  },
  langOptionPl: { pl: 'Polski', en: 'Polish' },
  langOptionEn: { pl: 'Angielski', en: 'English' },

  // === STRONA GŁÓWNA (index.html) ===
  heroTitle: { pl: 'Analityk Danych & Python', en: 'Data Analyst & Python' },
  heroSubtitle: {
    pl: 'Posiadam umiejętności i podejście, które twojej firmie się spodobają',
    en: 'I possess the skills and mindset your company will appreciate'
  },
  heroButton: { pl: 'O mnie', en: 'About Me' },
  aboutSectionTitle: { pl: 'O Mnie', en: 'About Me' },
  aboutGreeting: {
    pl: 'Cześć, tu Adrian Domagała.<br />Tak właściwie, dlaczego tutaj jesteś? <br />- Już tłaczę',
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
  skillsSectionTitle: {
    pl: 'Technologie i Narzędzia',
    en: 'Technologies and Tools'
  },
  skillsLegendDB: { pl: 'Bazy Danych', en: 'Databases' },
  skillsLegendAnalysis: { pl: 'Analiza Danych', en: 'Data Analysis' },
  skillsLegendML: { pl: 'Machine Learning', en: 'Machine Learning' },
  skillsLegendViz: { pl: 'Wizualizacja', en: 'Visualization' },
  projectsSectionTitle: { pl: 'Wybrane Projekty', en: 'Selected Projects' },
  project1Title: {
    pl: 'Interaktywny Dashboard Sprzedażowy',
    en: 'Interactive Sales Dashboard'
  },
  project1Desc: {
    pl: 'Stworzenie dashboardu do monitorowania kluczowych wskaźników (KPI) dla firmy e-commerce, co pozwoliło na optymalizację strategii.',
    en: 'Creation of a dashboard to monitor key performance indicators (KPIs) for an e-commerce company, which allowed for strategy optimization.'
  },
  project1Button: { pl: 'Zobacz Case Study', en: 'View Case Study' },
  project2Title: {
    pl: 'Analiza Sentymentu Recenzji',
    en: 'Sentiment Analysis of Reviews'
  },
  project2Desc: {
    pl: 'Model NLP do automatycznej kategoryzacji recenzji klientów. Wykorzystałem Scikit-learn do trenowania klasyfikatora.',
    en: 'An NLP model for automatic categorization of customer reviews. I used Scikit-learn to train the classifier.'
  },
  project2Button: { pl: 'Case Study wkrótce', en: 'Case Study soon' },
  contactSectionTitle: { pl: 'Nawiążmy Kontakt', en: "Let's Get in Touch" },
  contactSubtitle: {
    pl: 'Masz problem z danymi lub szukasz kogoś do zespołu? Jestem otwarty na ciekawe wyzwania. <br />Napisz do mnie, a na pewno odpowiem.',
    en: 'Have a data problem or looking for a team member? I am open to interesting challenges. <br />Write to me, and I will definitely reply.'
  },
  contactButton: { pl: 'Napisz Wiadomość', en: 'Send a Message' },
  footerEssayText: {
    pl: 'Jeśli jesteś osobą zainteresowaną tym co mam w głowie, poczytać o przemyśleniach nowej osoby na rynku pracy to zapraszam tutaj',
    en: "If you are interested in what's on my mind, to read about the thoughts of a newcomer to the job market then I invite you here"
  },
  footerEssayButton: { pl: 'Esseje', en: 'Essays' },

  // === STRONA ESEJÓW (esseys.html) ===
  essaysHeroTitle: { pl: 'Eseje i Przekminki', en: 'Essays and Musings' },
  essaysHeroSubtitle: {
    pl: 'Szczerze - chciałbym powiedzieć, że to będą ciekawe przemyślenia, ale to wszystko zależy od nastawienia czytelnika.',
    en: "Honestly - I would like to say that these will be interesting thoughts, but it all depends on the reader's attitude."
  },
  essaysSectionTitle: { pl: 'Wszystkie Wpisy', en: 'All Posts' },
  essayPublished: { pl: 'Opublikowano', en: 'Published' },
  essayButtonSoon: { pl: 'Wkrótce', en: 'Soon' },

  // === STRONA BŁĘDU (404.html) ===
  errorTitle: { pl: '404', en: '404' },
  errorSubtitle: { pl: 'Strona nie została znaleziona', en: 'Page Not Found' },
  errorMessage: {
    pl: 'Chyba wygląda na to, że taka strona nie została znaleziona,<br />no cóż',
    en: 'It seems that this page was not found,<br />oh well'
  },
  errorButtonBack: { pl: 'Wróć na stronę główną', en: 'Back to Homepage' },

  // === STRONA PROJEKTU (projekt-dashboard.html) ===
  projectDetailHeroTitle: {
    pl: 'Interaktywny Dashboard Sprzedażowy',
    en: 'Interactive Sales Dashboard'
  },
  projectDetailHeroSubtitle: {
    pl: 'Analiza i wizualizacja wskaźników KPI dla sektora e-commerce w czasie rzeczywistym.',
    en: 'Real-time analysis and visualization of KPIs for the e-commerce sector.'
  },
  projectMetaGoal: { pl: 'Cel Projektu', en: 'Project Goal' },
  projectMetaGoalDesc: {
    pl: 'Stworzenie narzędzia, które pozwoli działowi marketingu i sprzedaży na bieżąco śledzić efektywność kampanii, konwersję i zachowania klientów.',
    en: 'To create a tool that allows the marketing and sales department to track campaign effectiveness, conversion, and customer behavior in real-time.'
  },
  projectMetaTech: { pl: 'Użyte Technologie', en: 'Technologies Used' },
  projectMetaLinks: { pl: 'Linki', en: 'Links' },
  projectLinksDemo: { pl: 'Zobacz Live Demo', en: 'View Live Demo' },
  projectLinksCode: { pl: 'Kod na GitHub', en: 'Code on GitHub' },
  projectArticleTitle: {
    pl: 'Proces i Wyzwania',
    en: 'Process and Challenges'
  },
  projectArticleP1: {
    pl: 'Projekt rozpoczął się od zdefiniowania kluczowych metryk biznesowych (KPI) wspólnie z zespołem klienta. Największym wyzwaniem było połączenie danych z wielu źródeł: bazy danych PostgreSQL, plików CSV z systemów reklamowych oraz API Google Analytics.',
    en: "The project began by defining key business metrics (KPIs) together with the client's team. The biggest challenge was combining data from multiple sources: a PostgreSQL database, CSV files from advertising systems, and the Google Analytics API."
  },
  projectArticleH1: {
    pl: '1. Czyszczenie i Przygotowanie Danych',
    en: '1. Data Cleaning and Preparation'
  },
  projectArticleP2: {
    pl: 'Surowe dane zawierały wiele niespójności, braków i duplikatów. Użyłem biblioteki <strong>Pandas</strong> do zautomatyzowania procesu czyszczenia, co pozwoliło na ustandaryzowanie formatów i przygotowanie spójnego zbioru danych do analizy.',
    en: 'The raw data contained many inconsistencies, missing values, and duplicates. I used the <strong>Pandas</strong> library to automate the cleaning process, which allowed for standardizing formats and preparing a consistent dataset for analysis.'
  },
  projectArticleFigcaption: {
    pl: 'Porównanie dystrybucji danych przed i po procesie czyszczenia.',
    en: 'Comparison of data distribution before and after the cleaning process.'
  },
  projectArticleH2: {
    pl: '2. Tworzenie Interaktywnych Wizualizacji',
    en: '2. Creating Interactive Visualizations'
  },
  projectArticleP3: {
    pl: 'Kluczowe było stworzenie wizualizacji, które są nie tylko estetyczne, ale przede wszystkim czytelne i pozwalają na łatwe filtrowanie danych. Wykorzystałem <strong>Plotly & Dash</strong>, aby zbudować aplikację webową umożliwiającą dynamiczną interakcję z wykresami.',
    en: 'The key was to create visualizations that are not only aesthetic but, above all, readable and allow for easy data filtering. I used <strong>Plotly & Dash</strong> to build a web application that enables dynamic interaction with the charts.'
  },
  projectArticleH3: {
    pl: 'Wyniki i Wpływ na Biznes',
    en: 'Results and Business Impact'
  },
  projectArticleP4: {
    pl: 'Wdrożenie dashboardu pozwoliło na skrócenie czasu potrzebnego na przygotowanie tygodniowych raportów o <strong>75%</strong>. Zespół marketingowy, dzięki szybszemu dostępowi do danych, mógł efektywniej optymalizować kampanie, co przełożyło się na <strong>oszczędności rzędu 15%</strong> miesięcznego budżetu reklamowego przy zachowaniu tej samej skali sprzedaży.',
    en: 'The implementation of the dashboard reduced the time needed to prepare weekly reports by <strong>75%</strong>. The marketing team, with faster access to data, could more effectively optimize campaigns, which translated into <strong>savings of 15%</strong> of the monthly advertising budget while maintaining the same sales volume.'
  },
  projectNavBack: { pl: 'Wszystkie Projekty', en: 'All Projects' }
};

type Language = 'pl' | 'en';
type TranslationKey = keyof typeof translations;

const langSwitcher = document.getElementById('lang-switcher');
const langToggleButton = document.getElementById('lang-toggle-btn');
const currentLangText = document.getElementById('current-lang-text');
const langMenu = document.getElementById('lang-menu');

// --- NOWA, POTĘŻNA FUNKCJA DO ANIMACJI ---
const scrambleEffect = (
  element: HTMLElement,
  newText: string
): Promise<void> => {
  return new Promise((resolve) => {
    const letters = '█▓▒░@#$%*!?<>[]{}01';
    let interval: number | null = null;
    let iteration = 0;

    // Zachowujemy oryginalny HTML, żeby nie stracić np. tagów <b>
    const originalHTML = element.innerHTML;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;
    const originalText = tempDiv.textContent || '';

    // Upewniamy się, że element ma stały rozmiar podczas animacji
    const rect = element.getBoundingClientRect();
    element.style.width = `${rect.width}px`;
    element.style.height = `${rect.height}px`;
    element.style.display = 'inline-block'; // lub 'block', w zależności od elementu

    const animDuration = 700;
    const stepDuration = 70;

    interval = window.setInterval(() => {
      element.textContent = originalText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return newText[index] || '';
          }
          if (letter === ' ' || letter === '\n') return letter;
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join('');

      if (iteration >= Math.max(originalText.length, newText.length)) {
        if (interval) clearInterval(interval);
        // Po animacji wstawiamy nowy tekst Z TAGAMI HTML
        element.innerHTML = newText;
        // Usuwamy style, żeby element wrócił do normalności
        element.style.width = '';
        element.style.height = '';
        element.style.display = '';
        resolve();
      }

      iteration +=
        Math.max(originalText.length, newText.length) /
        (animDuration / stepDuration);
    }, stepDuration);
  });
};

// --- NOWA, ULEPSZONA FUNKCJA `setLanguage` ---
async function setLanguage(
  lang: Language,
  animate: boolean = false
): Promise<void> {
  const translatableElements = document.querySelectorAll<HTMLElement>(
    '[data-translate-key]'
  );

  const animations: Promise<void>[] = [];

  translatableElements.forEach((element) => {
    const key = element.dataset.translateKey as TranslationKey;
    if (key && translations[key] && translations[key][lang]) {
      const newText = translations[key][lang];
      if (animate) {
        animations.push(scrambleEffect(element, newText));
      } else {
        element.innerHTML = newText;
      }
    }
  });

  if (animate) {
    await Promise.all(animations);
  }

  // Te rzeczy robimy zawsze, po zmianie tekstu
  if (currentLangText) {
    currentLangText.textContent = lang.toUpperCase();
  }
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);
  langSwitcher?.classList.remove('is-open');
  langToggleButton?.setAttribute('aria-expanded', 'false');
}

// --- NOWA, ULEPSZONA FUNKCJA `initLanguageSwitcher` ---
export function initLanguageSwitcher(): void {
  if (!langSwitcher || !langToggleButton || !langMenu || !currentLangText)
    return;

  let isAnimating = false;

  // 1. Ładowanie zapisanego języka (teraz bez animacji)
  const savedLang = localStorage.getItem('language') as Language | null;
  const initialLang: Language = savedLang || 'pl';
  setLanguage(initialLang, false); // `false` oznacza "nie animuj"

  // 2. Otwieranie/zamykanie menu
  langToggleButton.addEventListener('click', (event) => {
    if (isAnimating) return;
    event.stopPropagation();
    const isOpen = langSwitcher.classList.toggle('is-open');
    langToggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  // 3. Wybór języka z menu
  langMenu.addEventListener('click', async (event) => {
    if (isAnimating) return;

    const target = event.target as HTMLElement;
    if (target.classList.contains('lang-option')) {
      const selectedLang = target.dataset.lang as Language;
      const currentLang = document.documentElement.lang;

      if (selectedLang === currentLang) {
        langSwitcher?.classList.remove('is-open');
        langToggleButton?.setAttribute('aria-expanded', 'false');
        return;
      }

      isAnimating = true;
      target.classList.add('is-scrambling');

      await new Promise((resolve) => setTimeout(resolve, 800));

      langSwitcher?.classList.remove('is-open');
      langToggleButton?.setAttribute('aria-expanded', 'false');

      await setLanguage(selectedLang, true);

      target.classList.remove('is-scrambling');
      isAnimating = false;
    }
  });

  window.addEventListener('click', () => {
    if (isAnimating) return;
    if (langSwitcher.classList.contains('is-open')) {
      langSwitcher.classList.remove('is-open');
      langToggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}
