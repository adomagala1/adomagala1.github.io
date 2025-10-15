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
    pl: 'Cześć, tu Adrian Domagała<br />Wszystko co interesujące poniżej ',
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
    pl: ' Szukam miejsca - firmy, która dostrzeże we mnie potencjał a przede wszystkim uwierzy we mnie oraz zapewni mi miejsce na rozwój tak aby to była sytuacja win-win dla obydwu stron. W co szczerze wierzę.',
    en: 'I am looking for a company that will notice and, above all, believe in my potential and provide me with a place for growth, so that after returning from technical school, I can work in a win-win situation for both parties. I sincerely believe in that.'
  },
  aboutMotto: {
    pl: 'Analizuję. Przewiduję. Wygrywam.',
    en: 'I analyze. I predict. I win.'
  },

  // === Projekty ===
  projectsSectionTitle: { pl: 'Projekty', en: 'Projects ' },
  project1Title: { pl: 'Stock playground', en: 'Stock playground' },
  project1Desc: {
    pl: 'Plac zabaw - pobieranie statystyk cenowych akcji w czasie rzeczywistym, mozliwosc zapisywania, to samo z newsami, watchlista spółek, system logowania podpięcie swoich baz danych',
    en: 'Playground - downloading real-time stock statistics, saving, the same with news, watchlist of companies, login system connection to your databases'
  },
  project1Button: { pl: 'Zobacz Case Study', en: 'View Case Study' },

  project2Title: {
    pl: 'Analiza zachowania użytkowników i zbieranie danych, predykcja zachowania',
    en: 'User behavior analysis and data collection, behavior prediction'
  },
  project2Desc: {
    pl: 'Dostępne od 20.10.2025 ',
    en: 'Available from 10.20.2025'
  },
  project2Button: { pl: 'Zobacz Case Study', en: 'View Case Study' },

  // === Kontakt ===
  contactSectionTitle: { pl: 'Nawiążmy Kontakt', en: "Let's Get in Touch" },
  contactSubtitle: {
    pl: 'Masz problem z danymi lub szukasz kogoś do zespołu? Jestem otwarty na ciekawe wyzwania. <br />Napisz do mnie, a na pewno odpowiem.',
    en: 'Have a data problem or looking for a team member? I am open to interesting challenges. <br />Write to me, and I will definitely reply.'
  },
  contactButton: { pl: 'Napisz Wiadomość', en: 'Send a Message' },

  // === Strona Projektu  ===
  projectDetailHeroTitle: {
    pl: 'Analiza Spólek NASDAQ',
    en: 'Stock NASDAQ Analyzer'
  },
  projectDetailHeroSubtitle: {
    pl: 'Aplikacja, pozwalająca pobierać, zapisywać analizować newsy, logowanie watchlista alerty cenowe, jest również model predykcyjny w dużej wersji beta, statystyki dotyczące firm udostepniająca zapisywanie do MongoDB bierzących newsow o spólkach na NASDAQ, do SUPABASE danych o statystykach',
    en: 'An application that allows you to download, save, and analyze news, log in, create watchlists, and set price alerts. It is also a predictive model in a large beta version, providing statistics on companies and allowing you to save current news about NASDAQ companies to MongoDB and statistics data to SUPABASE.'
  },
  projectMetaGoal: { pl: 'Cel Projektu', en: 'Project Goal' },
  projectMetaGoalDesc: {
    pl: 'Celem projektu było stworzenie platformy, gdzie użytkownikownik za jednym kliknięciem dostaje automatycznie zebrane dane rynkowe, newsy wraz z sentymentem dla społek wszystko w jednym miejscu + mozliwość podpięcia baz danych przez uzytkownika MongoDB oraz Supabase',
    en: 'The aim of the project was to create a platform where users can automatically receive collected market data, news, and sentiment analysis for companies, all in one place, with the option to connect MongoDB and Supabase databases.'
  },
  projectArticleTitle: {
    pl: 'Proces i Wyzwania',
    en: 'Process and Challenges'
  },
  projectArticleP1: {
    pl: 'Na początku miałem duże zakłopotanie dotyczące konfiguracji baz danych. Zastanawiałem się, czy wymagać od użytkownika zawsze własnej bazy, czy dać dostęp do testowej. Początkowo projekt miał działać jako wykonywalny .exe z lokalnymi bazami, ale chciałem użyć Streamlit Cloud, aby każdy mógł zobaczyć demo. Jest też tryb gościa bez logowania.',
    en: 'At first, I was confused about database configuration. I debated whether to always require a user database or provide access to a test one. Initially, the project was designed as a standalone .exe with local databases, but I wanted to use Streamlit Cloud so anyone could view it. There is also a guest mode without login.'
  },
  projectArticleH1: {
    pl: '1. Zbieranie i Przygotowanie Danych',
    en: '1. Data Collection and Preparation'
  },
  projectArticleP2: {
    pl: 'Aplikacja automatycznie pobiera dane giełdowe z Finviz oraz newsy z Google News. Biblioteki Python (np. Pandas, BeautifulSoup) standaryzują i czyszczą dane, tworząc spójny zbiór do analizy i dalszego przetwarzania.',
    en: 'The application automatically fetches stock data from Finviz and news from Google News. Python libraries (e.g., Pandas, BeautifulSoup) standardize and clean the data, producing a consistent dataset for analysis and further processing.'
  },
  projectArticleH2: {
    pl: '2. Analiza Fundamentalna i Sentymentu',
    en: '2. Fundamental and Sentiment Analysis'
  },
  projectArticleP3: {
    pl: 'Program analizuje spółki pod kątem ceny zachowania na rynku, P/E itp, branży.  Dodatkowo wykonuje analizę sentymentu newsów i artykułów branżowych, co pozwala wykrywać sygnały potencjalnego wzrostu.',
    en: 'The program analyzes companies in terms of market price, P/E, etc., and industry.  In addition, it analyzes the sentiment of news and industry articles, which allows it to detect signals of potential growth.'
  },
  projectArticleH3: {
    pl: '3. Model Predykcyjny i Wyniki',
    en: '3. Predictive Model and Results'
  },
  projectArticleP4: {
    pl: 'Aplikacja wykorzystuje dane historyczne z baz danych użytkownika i aktualne do generowania rankingu potencjału wzrostu spółek oraz analizy "na żywo" dla wybranych tickerów. Dzięki temu inwestorzy mogą szybciej podejmować decyzje i lepiej zarządzać portfelem.',
    en: 'The application uses historical and current data to generate a growth potential ranking of companies and live analysis for selected tickers. This enables investors to make faster decisions and better manage their portfolios.'
  },

  projectNavBack: { pl: 'Wszystkie Projekty', en: 'All Projects' },

  project2DetailHeroTitle: {
    pl: 'Analiza Zachowania',
    en: 'Behaviour Analysis'
  },
  project2DetailHeroSubtitle: {
    pl: ' Analiza Zachowań użytkwoników na komputerze, zbieranie danych i predykcyja ich zachowania',
    en: 'Analysis of user behavior on computers, data collection, and prediction of user behavior'
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
