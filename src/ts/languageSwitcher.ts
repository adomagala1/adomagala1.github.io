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

  // === STRONA GŁÓWNA ===
  heroTitle: { pl: 'Analityk Danych & Python', en: 'Data Analyst & Python' },
  heroSubtitle: {
    pl: 'Posiadam umiejętności i podejście, które twojej firmie się spodobają',
    en: 'I possess the skills and mindset your company will appreciate'
  },
  heroButton: { pl: 'O mnie', en: 'About Me' },
  aboutSectionTitle: { pl: 'O Mnie', en: 'About Me' },
  aboutGreeting: {
    pl: 'Cześć, tu Adrian Domagała<br /> Dlaczego tutaj jesteś? <br />- Już tłumaczę',
    en: "Hi, I'm Adrian Domagała<br />So, why are you here? <br />- Let me explain"
  },
  aboutP1: {
    pl: ' Szczerze - młoda osoba patrząca w przyszłość w technikum programistycznym, silnie zmotywowaa. Interesującą się szczególnie analizą danych i rynkiem IT, nie mam dziesięciu lat doświadczenia na rynku ale mam konretne założenia i cele.',
    en: "Honestly - I'm a young person from a programming technical high school interested in data analysis and the IT market. I don't have ten years of market experience, but I have concrete assumptions and goals."
  },
  aboutP2: {
    pl: 'Aktualna misja - wejście na rynek pracy i zdobywanie realnego doświadczenia - ale, co ważniejsze to <b>zdobycie odpowiedniego miejsca na rozwój </b> swoich pasji i progres w zawodzie. <br /><br /> Pozwole sobie nakreślić poziom tego wyzwania. Patrząc na aktualny rozwój AI mało kto zwróci uwagę na siedemnastolatka bez doświadczenia i medali za olimpiady, więc że tak powiem misja jest troszkę ciężka. Ale z natury jestem uparty więc robie swoje. Aktualnie, nie brzmi to jak odpowiedź na pytanie w nagłówku, więc już wracam do odpowiedzi na temat.',
    en: "Currently, my biggest goal is to enter the job market and gain real experience - but, more importantly, to <b>find the right place to develop</b> my passions and progress in my profession.<br /><br />Let me outline the level of this challenge. Looking at the current development of AI and LLMs, few will pay attention to a 17-year-old without experience or Olympic medals, so the mission is a bit tough. But I am stubborn by nature, so I do my thing. This doesn't sound like an answer to the header question, so I'll get back to it."
  },
  aboutP3: {
    pl: 'Szukam firmy, która dostrzeże we mnie potencjał a przede wszystkim uwierzy w mój potencjał oraz zapewni mi miejsce na rozwój tak by po powrocie z technikum praców i tak aby to była sytuacja win-win dla obydwu stron. W co szczerze wierzę.',
    en: 'I am looking for a company that will notice and, above all, believe in my potential and provide me with a place for growth, so that after returning from technical school, I can work in a win-win situation for both parties. I sincerely believe in that.'
  },
  aboutMotto: {
    pl: 'Analizuję. Przewiduję. Wygrywam.',
    en: 'I analyze. I predict. I win.'
  },

  // === Projekty ===
  projectsSectionTitle: { pl: 'Wybrane Projekty', en: 'Selected Projects' },
  project1Title: { pl: 'Program do Analizy Spólek GPW', en: 'Stock analyzer' },
  project1Desc: {
    pl: 'Program pobiera dane o wszystkich spółkach na GPW, analizuje ich wyniki, ocenia pod kątem inwestycyjnym, zbiera wiadomości pojawiające się w internecie i zapisuje do lokalnej bazy danych SQLite. Program jest w trakcie tworzenia.',
    en: 'The program collects data on all companies listed on the Warsaw Stock Exchange, analyzes their results, evaluates them from an investment perspective, collects news appearing on the Internet, and saves it to a local SQLite database. The program is under development.'
  },
  project1Button: { pl: 'Zobacz Case Study', en: 'View Case Study' },

  project2Title: {
    pl: 'Analiza zachowań użytkowników co robią na komputerze zbieranie danych',
    en: 'User behavior analysis and data collection, prediction '
  },
  project2Desc: {
    pl: 'x ',
    en: 'x'
  },
  project2Button: { pl: 'Zobacz Case Study', en: 'View Case Study' },

  // === Kontakt ===
  contactSectionTitle: { pl: 'Nawiążmy Kontakt', en: "Let's Get in Touch" },
  contactSubtitle: {
    pl: 'Masz problem z danymi lub szukasz kogoś do zespołu? Jestem otwarty na ciekawe wyzwania. <br />Napisz do mnie, a na pewno odpowiem.',
    en: 'Have a data problem or looking for a team member? I am open to interesting challenges. <br />Write to me, and I will definitely reply.'
  },
  contactButton: { pl: 'Napisz Wiadomość', en: 'Send a Message' },

  // === Strona Projektu GPW ===
  projectDetailHeroTitle: {
    pl: 'Analiza Rynku GPW',
    en: 'Stock Market Analyzer'
  },
  projectDetailHeroSubtitle: {
    pl: 'Narzędzie w trakcie tworzenia do analizy i wizualizacji wskaźników fundamentalnych oraz sentymentu dla spółek notowanych na GPW.',
    en: 'A tool under development for analyzing and visualizing fundamental indicators and sentiment for companies listed on the Warsaw Stock Exchange.'
  },
  projectMetaGoal: { pl: 'Cel Projektu', en: 'Project Goal' },
  projectMetaGoalDesc: {
    pl: 'Celem projektu jest stworzenie programu, który automatycznie zbiera dane rynkowe, raporty finansowe i newsy, analizuje fundamenty spółek oraz ich sentyment rynkowy, aby pomagać inwestorom w wyborze najlepszych spółek pod różne strategie inwestycyjne. Program jest obecnie w fazie tworzenia.',
    en: 'The goal of the project is to develop a program that automatically collects market data, financial reports, and news, analyzes company fundamentals and market sentiment, and assists investors in selecting the best companies for various investment strategies. The program is currently under development.'
  },
  projectArticleTitle: {
    pl: 'Proces i Wyzwania',
    en: 'Process and Challenges'
  },
  projectArticleP1: {
    pl: 'Projekt jest w fazie tworzenia. Rozpoczęto od określenia kluczowych funkcjonalności: automatycznego pobierania danych rynkowych, raportów finansowych spółek, analizy fundamentalnej, technicznej oraz sentymentu z newsów i komunikatów. Największym wyzwaniem będzie integracja danych z różnych źródeł oraz zapewnienie spójności historycznych rekordów spółek.',
    en: 'The project is currently under development. The key functionalities identified include automatic collection of market data, company financial reports, fundamental and technical analysis, as well as sentiment analysis from news and announcements. The biggest challenge will be integrating data from various sources and ensuring consistency of historical company records.'
  },
  projectArticleH1: {
    pl: '1. Zbieranie i Przygotowanie Danych',
    en: '1. Data Collection and Preparation'
  },
  projectArticleP2: {
    pl: 'Surowe dane rynkowe i finansowe wymagają standaryzacji. Planowane jest użycie bibliotek Pythonowych (np. Pandas, BeautifulSoup) do automatyzacji procesu pobierania i czyszczenia danych oraz przygotowania spójnego zbioru do dalszej analizy.',
    en: 'Raw market and financial data need standardization. Python libraries (e.g., Pandas, BeautifulSoup) will be used to automate the process of data collection and cleaning and to prepare a consistent dataset for further analysis.'
  },
  projectArticleH2: {
    pl: '2. Analiza Fundamentalna i Sentymentu',
    en: '2. Fundamental and Sentiment Analysis'
  },
  projectArticleP3: {
    pl: 'Program będzie automatycznie oceniać spółki pod kątem regularnego wzrostu przychodów, zysku operacyjnego, branży, skuteczności zarządu oraz prognoz rozwoju. Dodatkowo analizowany będzie sentyment z newsów, komunikatów ESPI/EBI i artykułów branżowych w celu wykrywania sygnałów przyspieszenia wzrostu.',
    en: 'The program will automatically evaluate companies based on regular revenue growth, operating profit, industry, management effectiveness, and growth forecasts. Additionally, sentiment from news, ESPI/EBI announcements, and industry articles will be analyzed to detect signals of accelerated growth.'
  },
  projectArticleH3: {
    pl: 'Wyniki i Wpływ na Biznes',
    en: 'Results and Business Impact'
  },
  projectArticleP4: {
    pl: 'Program jest w trakcie tworzenia, więc nie ma jeszcze gotowych wyników. Docelowo wdrożenie pozwoli inwestorom szybciej identyfikować spółki o wysokim potencjale wzrostu, co usprawni podejmowanie decyzji inwestycyjnych i może przyczynić się do zwiększenia efektywności portfela inwestycyjnego.',
    en: 'The program is under development, so there are no results yet. Ultimately, the implementation will allow investors to quickly identify high-potential growth companies, facilitating investment decisions and potentially increasing portfolio efficiency.'
  },
  projectNavBack: { pl: 'Wszystkie Projekty', en: 'All Projects' },

  // PROJEKT ANALIZA ZACHOWANIA
  project2DetailHeroTitle: {
    pl: 'Analiza Zachowania',
    en: 'Behaviour Analysis'
  },
  project2DetailHeroSubtitle: {
    pl: ' Analiza Zachowań użytkwoników co robią na komputerze itp, + rozwiązywanie ich problemów ze sprzętem za pomocą zdalnej kontrolii ',
    en: 'User Behavior Analysis, + solving their problems with remote control'
  },
  project2MetaGoalDesc: {
    pl: 'Program uruchamia połączenie z serwerem poprzez TORA i serwer pobiera dane o urzadzeniu dostaje dostep do zdalnej kontroli',
    en: 'The program starts a connection to the server via TOR and the server retrieves data on the device. You get access to remote control'
  }
};

type Language = 'pl' | 'en';
type TranslationKey = keyof typeof translations;

const langSwitcher = document.getElementById('lang-switcher');
const langToggleButton = document.getElementById('lang-toggle-btn');
const currentLangText = document.getElementById('current-lang-text');
const langMenu = document.getElementById('lang-menu');

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

    // Ustalamy pozycję i rozmiary, żeby nie zmieniały się w trakcie animacji
    const rect = element.getBoundingClientRect();
    const originalStyles = window.getComputedStyle(element);
    const originalPosition = originalStyles.position;
    const originalDisplay = originalStyles.display;

    // Przypisujemy elementowi stałą szerokość i wysokość
    element.style.position = 'absolute'; // Używamy absolutnej pozycji tylko dla animacji
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.width = `${rect.width}px`; // Szerokość elementu
    element.style.height = `${rect.height}px`; // Wysokość elementu

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

        // Przywracamy oryginalny styl i pozycję
        element.style.position = originalPosition;
        element.style.display = originalDisplay;
        element.style.width = '';
        element.style.height = '';
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
