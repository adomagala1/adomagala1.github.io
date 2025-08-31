// src/ts/toast.ts

let toastContainer: HTMLDivElement | null = null;

function createToastContainer() {
  if (document.getElementById('toast-container')) return;
  toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  document.body.appendChild(toastContainer);
}

const icons = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
};

type ToastType = 'success' | 'error';

export function showToast(
  message: string,
  type: ToastType = 'success',
  duration: number = 2500
) {
  if (!toastContainer) createToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;

  toast.innerHTML = `
    <div class="toast__icon">${icons[type]}</div>
    <p class="toast__message">${message}</p>
    <div class="toast__progress-bar"></div>
  `;

  toastContainer!.appendChild(toast);

  const progressBar = toast.querySelector<HTMLDivElement>(
    '.toast__progress-bar'
  );
  if (progressBar) {
    progressBar.style.animation = `progress ${duration}ms linear forwards`;
  }

  requestAnimationFrame(() => {
    toast.classList.add('toast--show');
  });

  setTimeout(() => {
    toast.classList.remove('toast--show');
    toast.addEventListener('transitionend', () => toast.remove(), {
      once: true
    });
  }, duration);
}
