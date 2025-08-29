// src/ts/preloader.ts

// --- NOWA KLASA DO OBSŁUGI EFEKTU SLOT MACHINE ---
class SlotMachineManager {
  private readonly element: HTMLElement;
  private readonly finalChar: string;
  private readonly chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@!';

  constructor(element: HTMLElement) {
    this.element = element;
    this.finalChar = element.dataset.char || 'A';
  }

  // Funkcja ease-out: zaczyna szybko, kończy wolno
  private easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
  }

  public start(duration: number): Promise<void> {
    return new Promise((resolve) => {
      const startTime = Date.now();
      const initialInterval = 40; // Startowe tempo (ms)
      const finalInterval = 250; // Końcowe tempo (ms)
      let lastUpdateTime = 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Używamy funkcji "ease-out", aby animacja zwalniała
        const easedProgress = this.easeOutCubic(progress);
        const currentInterval =
          initialInterval + (finalInterval - initialInterval) * easedProgress;

        if (Date.now() - lastUpdateTime > currentInterval) {
          const randomChar =
            this.chars[Math.floor(Math.random() * this.chars.length)];
          this.element.innerText = randomChar;
          lastUpdateTime = Date.now();
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.element.innerText = this.finalChar;
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }
}

// --- ScrambleManager bez większych zmian, ale dostosowany do async/await ---
class ScrambleManager {
  // ... (skopiuj tutaj całą klasę ScrambleManager z poprzedniej wersji)
  private readonly chars = '!<>-_\\/[]{}—=+*^?#_';
  private elements: HTMLElement[];
  private originalTexts: string[] = [];
  private animationFrameIds: (number | null)[] = [];

  constructor(elements: HTMLElement[]) {
    this.elements = elements;
    this.elements.forEach((el, index) => {
      this.originalTexts[index] = el.dataset.char || el.innerHTML;
      this.animationFrameIds[index] = null;
    });
  }

  private getRandomText(length: number): string {
    let text = '';
    for (let i = 0; i < length; i++) {
      text += this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return text;
  }

  private scramble(index: number) {
    const element = this.elements[index];
    const originalLength = this.originalTexts[index].length || 1;
    const SCRAMBLE_INTERVAL = 50;
    let lastUpdateTime = 0;

    const update = (currentTime: number) => {
      const deltaTime = currentTime - lastUpdateTime;
      if (deltaTime > SCRAMBLE_INTERVAL) {
        element.innerText = this.getRandomText(originalLength);
        lastUpdateTime = currentTime;
      }
      this.animationFrameIds[index] = requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  startAll() {
    this.elements.forEach((_, index) => this.scramble(index));
  }

  reveal(index: number) {
    if (this.animationFrameIds[index]) {
      cancelAnimationFrame(this.animationFrameIds[index] as number);
      this.animationFrameIds[index] = null;
    }
    this.elements[index].innerHTML = this.originalTexts[index];
  }

  // Nowa metoda do sterowania całą sekwencją odsłaniania
  public revealSequentially(delayPerChar: number): Promise<void> {
    return new Promise((resolve) => {
      this.startAll();
      this.elements.forEach((_, i) => {
        setTimeout(() => this.reveal(i), (i + 1) * delayPerChar);
      });
      // Rozwiązujemy obietnicę po zakończeniu odsłaniania ostatniej litery
      setTimeout(resolve, this.elements.length * delayPerChar);
    });
  }
}

export function initPreloader(): void {
  const preloader = document.getElementById('preloader') as HTMLDivElement;
  const pageContent = document.getElementById('page-content') as HTMLDivElement;
  const loaderLogo = document.getElementById('loader-logo');

  const showPageContent = () => {
    if (pageContent) {
      pageContent.classList.remove('hidden');
      pageContent.classList.add('visible');
    }
  };

  if (!preloader || !pageContent || !loaderLogo) {
    showPageContent();
    return;
  }

  if (sessionStorage.getItem('preloaderShown') === 'true') {
    preloader.style.display = 'none';
    showPageContent();
    return;
  }

  // --- NOWA SEKWENCJA Z ASYNC/AWAIT ---
  const startPreloaderSequence = async () => {
    // 1. Podział elementów i ustawienia
    const allSpans = Array.from(
      loaderLogo.querySelectorAll<HTMLElement>(':scope > span')
    );
    const slotMachineSpan = allSpans[0];
    const scrambleSpans = allSpans.slice(1);

    const SCRAMBLE_REVEAL_DELAY = 200;
    const SLOT_MACHINE_DURATION = 3000; // Wydłużamy, by efekt był bardziej widoczny
    const FADE_OUT_DURATION = 1000;
    const scrambleTotalTime = scrambleSpans.length * SCRAMBLE_REVEAL_DELAY;
    const TOTAL_DURATION =
      scrambleTotalTime + SLOT_MACHINE_DURATION + FADE_OUT_DURATION;

    // 2. Start animacji tła
    loaderLogo.style.animation = `shrinkAndFade ${
      TOTAL_DURATION / 1000
    }s ease-in-out forwards`;

    // 3. Inicjalizacja managerów
    const scrambleManager = new ScrambleManager(scrambleSpans);
    const slotMachineManager = new SlotMachineManager(slotMachineSpan);

    // 4. Uruchomienie sekwencji
    // Najpierw odsłaniamy nazwisko...
    await scrambleManager.revealSequentially(SCRAMBLE_REVEAL_DELAY);

    // ...a zaraz potem uruchamiamy maszynę losującą dla imienia
    await slotMachineManager.start(SLOT_MACHINE_DURATION);

    // 5. Krótka pauza na podziwianie efektu i płynne zniknięcie
    setTimeout(() => {
      preloader.classList.add('loaded');
      showPageContent();
      sessionStorage.setItem('preloaderShown', 'true');
    }, 500); // Stała, krótka pauza na koniec
  };

  window.addEventListener('load', startPreloaderSequence);
}
