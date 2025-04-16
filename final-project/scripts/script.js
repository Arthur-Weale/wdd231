import { formatLastModified } from './utils.js';
import { sayHello } from './utils.js';


  


document.addEventListener('DOMContentLoaded', () => {

  const hamburgerMenu = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");
  const latestCurrentYear = document.querySelector(".currentYear");
  //const dateLastModified = document.lastModified;
  sayHello(); // Call the function from utils.js : Test Code.
  latestCurrentYear.textContent = new Date().getFullYear();


    const dateMod = document.querySelector(".lastModified");
    dateMod.textContent = formatLastModified(document.lastModified);
  
  
  hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");
      navMenu.classList.toggle("active");
  });
    // Fetch data from JSON file
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        // Render Service Cards dynamically for the Services page
        const serviceContainer = document.getElementById('service-cards-container');
        const serviceCards = document.querySelector('.service-cards');
  
        data.services.forEach(service => {
          const card = document.createElement('div');
          card.classList.add('service-card');
          card.innerHTML = `
            <h4>${service.name}</h4>
            <p class="service-desc">${service.desc}</p>
            <button class="cta-button" onclick="openModal('${service.id}')">Learn More</button>
          `;
          serviceCards.appendChild(card);
        });
  
        // Modal functionality
        const modal = document.getElementById('service-modal');
        const closeModalButton = document.getElementById('close-modal');
        
        window.openModal = (serviceId) => {
          const service = data.services.find(s => s.id === serviceId);
          document.getElementById('modal-service-title').textContent = service.name;
          document.getElementById('modal-service-desc').textContent = service.moreInfo;
          modal.showModal();
        };
  
        closeModalButton.addEventListener('click', () => {
          modal.close();
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  

  const navLinkAnchors = document.querySelectorAll(".nav-links li a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinkAnchors.forEach(linkAnchor => {
    if(linkAnchor.getAttribute("href") == currentPage){
      linkAnchor.classList.toggle("active");
    }
  })