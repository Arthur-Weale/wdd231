const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');
const current = new Date().getFullYear();
const lastMod = document.lastModified;

currentYear.textContent = current;
lastModified.textContent = `last modified: ${lastMod.toLocaleString()}`;

