
import { formatLastModified } from './utils.js';
import { sayHello } from './utils.js';
document.addEventListener('DOMContentLoaded', () => {

    const dateMod = document.querySelector(".lastModified");
    dateMod.textContent = formatLastModified(document.lastModified);
    sayHello(); // Call the function from utils.js : Test Code.
    const form = document.getElementById('contact-form');
    if (!form) return;                              // only run on pages with the form :contentReference[oaicite:0]{index=0}
  
    form.addEventListener('submit', e => {
      e.preventDefault();                           // stop normal submission
  
      // gather values
      const name    = form.name.value;
      const email   = form.email.value;
      const message = form.message.value;
  
      // save to localStorage
      const contactList = JSON.parse(localStorage.getItem('contacts')) || [];
      contactList.push({ name, email, message, timestamp: new Date().toISOString() });
      localStorage.setItem('contacts', JSON.stringify(contactList));
  
      // build querystring and redirect
      const params = new URLSearchParams({ name, email, message }).toString();
      window.location.href = `thankyou.html?${params}`;  // no inline scripts :contentReference[oaicite:1]{index=1}
    });
  });
  