import { formatLastModified } from './utils.js';
import { sayHello } from './utils.js';
document.addEventListener("DOMContentLoaded", () => {

    const dateMod = document.querySelector(".lastModified");
    dateMod.textContent = formatLastModified(document.lastModified);
    sayHello(); // Call the function from utils.js : Test Code.
    const hamburgerMenu = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");
    const latestCurrentYear = document.querySelector(".currentYear");
    
    
    latestCurrentYear.textContent = new Date().getFullYear();
    
    
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
    // Fetch data from JSON file
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            // Render Pricing Cards dynamically for the Pricing page
            const pricingSection = document.getElementById('pricing-section');
            const pricingCards = document.querySelector('.pricing-cards');
    
            data.pricing.forEach(pricing => {
            const card = document.createElement('div');
            card.classList.add('pricing-card');
            card.innerHTML = `
                <h4>${pricing.service}</h4>
                <p class="pricing-price">${pricing.price}</p>
                <button class="cta-button">Choose Plan</button>
            `;
            pricingCards.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});