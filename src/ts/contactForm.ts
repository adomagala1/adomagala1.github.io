// src/ts/contactForm.ts
import { showToast } from './toast';

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('.contact-form');
  if (!form) return;

  const submitBtn = form.querySelector<HTMLButtonElement>('.form-submit-btn');
  if (!submitBtn) return;

  const originalBtnText = submitBtn.textContent || 'Wyślij';
  submitBtn.innerHTML = '';


  const contentInitial = document.createElement('div');
  contentInitial.className = 'btn-content-wrapper is-initial';
  contentInitial.textContent = originalBtnText;

  const contentSending = document.createElement('div');
  contentSending.className = 'btn-content-wrapper is-sending-content';
  contentSending.innerHTML = `<div class="loader-dots"><span></span><span></span><span></span></div>`;

  const contentSent = document.createElement('div');
  contentSent.className = 'btn-content-wrapper is-sent-content';
  contentSent.innerHTML = `
    <svg class="icon-check" xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>Wysłane!</span>
  `;


  submitBtn.append(contentInitial, contentSending, contentSent);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitBtn.classList.contains('is-sending')) return;

    submitBtn.disabled = true;
    submitBtn.classList.add('is-sending');

    await new Promise((res) => setTimeout(res, 1500));

    submitBtn.classList.remove('is-sending');
    submitBtn.classList.add('is-sent');

    showToast('Wiadomość wysłana pomyślnie!', 'success');
    form.reset();

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-sent');
    }, 2500);
  });
}
