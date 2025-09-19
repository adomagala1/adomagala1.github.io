// Plik: src/preloader.ts

class SlotMachineManager {
  private readonly element: HTMLElement;
  private readonly finalChar: string;
  private readonly chars = 'BCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(element: HTMLElement) {
    this.element = element;
    this.finalChar = element.dataset.char || 'A';
  }

  private async finalReveal(): Promise<void> {
    const slowInterval = 200;
    const revealSteps = 4;

    for (let i = 0; i < revealSteps; i++) {
      const prevChar =
        this.chars[Math.floor(Math.random() * this.chars.length)];
      const currentChar =
        this.chars[Math.floor(Math.random() * this.chars.length)];
      const nextChar =
        this.chars[Math.floor(Math.random() * this.chars.length)];

      this.element.innerText = currentChar;
      this.element.style.setProperty('--char-before', `"${prevChar}"`);
      this.element.style.setProperty('--char-after', `"${nextChar}"`);

      await new Promise((res) => setTimeout(res, slowInterval + i * 20));
    }

    this.element.innerText = this.finalChar;
    this.element.classList.add('is-final');
    this.element.style.setProperty('--char-before', '""');
    this.element.style.setProperty('--char-after', '""');
  }

  public async start(duration: number): Promise<void> {
    const finalRevealDuration = 1100;
    const fastSpinDuration = duration - finalRevealDuration;

    await new Promise<void>((resolve) => {
      const startTime = Date.now();
      const spinInterval = 100;
      let lastUpdateTime = 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= fastSpinDuration) {
          resolve();
          return;
        }

        if (Date.now() - lastUpdateTime > spinInterval) {
          const prevChar =
            this.chars[Math.floor(Math.random() * this.chars.length)];
          const currentChar =
            this.chars[Math.floor(Math.random() * this.chars.length)];
          const nextChar =
            this.chars[Math.floor(Math.random() * this.chars.length)];

          this.element.innerText = currentChar;
          this.element.style.setProperty('--char-before', `"${prevChar}"`);
          this.element.style.setProperty('--char-after', `"${nextChar}"`);
          lastUpdateTime = Date.now();
        }
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });

    await this.finalReveal();
  }
}

class ScrambleManager {
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
    const SCRAMBLE_INTERVAL = 75;
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

  public startAll() {
    this.elements.forEach((_, index) => this.scramble(index));
  }

  public reveal(index: number) {
    if (this.animationFrameIds[index]) {
      cancelAnimationFrame(this.animationFrameIds[index] as number);
      this.animationFrameIds[index] = null;
    }
    this.elements[index].innerHTML = this.originalTexts[index];
  }

  public revealSequentially(delayPerChar: number): Promise<void> {
    return new Promise((resolve) => {
      this.startAll();
      this.elements.forEach((_, i) => {
        setTimeout(() => this.reveal(i), (i + 1) * delayPerChar);
      });
      setTimeout(resolve, this.elements.length * delayPerChar);
    });
  }
}

// --- POPRAWIONA FUNKCJA `initPreloader` ---
export function initPreloader(): void {
  const preloader = document.getElementById('preloader') as HTMLDivElement;
  const pageContent = document.getElementById('page-content') as HTMLDivElement;
  const loaderLogo = document.getElementById('loader-logo');
  const padlock = document.getElementById('padlock');

  const showPageContent = () => {
    if (pageContent) {
      pageContent.classList.remove('hidden');
      pageContent.classList.add('visible');
    }
  };

  if (!preloader || !loaderLogo || !pageContent || !padlock) {
    showPageContent();
    return;
  }
  if (sessionStorage.getItem('preloaderShown') === 'true') {
    preloader.style.display = 'none';
    showPageContent();
    return;
  }

  const startPreloaderSequence = async () => {
    if (loaderLogo) loaderLogo.style.opacity = '1';
    const allSpans = Array.from(
      loaderLogo.querySelectorAll<HTMLElement>(':scope > span')
    );
    const slotMachineSpan = allSpans[0];
    const scrambleSpans = allSpans.slice(1);

    const SCRAMBLE_REVEAL_DELAY = 200;
    const SLOT_MACHINE_DURATION = 1800;
    const FADE_OUT_DURATION = 800;
    const scrambleTotalTime = scrambleSpans.length * SCRAMBLE_REVEAL_DELAY;
    const TOTAL_DURATION =
      scrambleTotalTime + SLOT_MACHINE_DURATION + FADE_OUT_DURATION;

    // Ta animacja nie jest zdefiniowana w CSS, który podałeś,
    // ale zostawiam ją, zakładając, że istnieje w innym pliku
    loaderLogo.style.animation = `shrinkAndFade ${
      TOTAL_DURATION / 1000
    }s ease-in-out forwards`;

    const scrambleManager = new ScrambleManager(scrambleSpans);
    const slotMachineManager = new SlotMachineManager(slotMachineSpan);

    await scrambleManager.revealSequentially(SCRAMBLE_REVEAL_DELAY);
    await slotMachineManager.start(SLOT_MACHINE_DURATION);

    padlock.classList.add('is-visible');

    await new Promise((res) => setTimeout(res, 300));
    padlock.classList.add('is-unlocked');

    setTimeout(() => {
      preloader.classList.add('loaded');
      showPageContent();
      sessionStorage.setItem('preloaderShown', 'true');
    }, 800);
  };

  // Użyj 'load', aby upewnić się, że wszystkie zasoby (np. czcionki) są załadowane,
  // co jest ważne dla preloaderów, by uniknąć "mignięcia" nieostylowanej treści.
  window.addEventListener('load', startPreloaderSequence);
}
