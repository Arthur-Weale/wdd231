import { formatLastModified } from './utils.js';
import { sayHello } from './utils.js';
document.addEventListener('DOMContentLoaded', () => {

    const dateMod = document.querySelector(".lastModified");
    dateMod.textContent = formatLastModified(document.lastModified);
    sayHello(); // Call the function from utils.js : Test Code.
    const container = document.querySelector('.thank-you-page');
    if (!container) return;                          // only run on pages with the thank‑you div :contentReference[oaicite:2]{index=2}
  
    const { name = 'Friend', email = '', message = '' } = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );
  
    container.innerHTML = `
      <h1>Thank you, ${name}!</h1>
      <p>We’ve received your message:</p>
      <blockquote>${message}</blockquote>
      <p>We’ll be in touch at <a href="mailto:${email}">${email}</a> soon.</p>
    `;
  });
  