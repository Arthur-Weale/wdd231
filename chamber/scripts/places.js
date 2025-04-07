document.addEventListener("DOMContentLoaded",() => {

    const placesData = async function (){
        const placesData = await fetch("data/places.json");
        console.log(placesData);
        const response = await placesData.json();
        response.forEach(place => {
            //console.log(place);
            populateCards(place);
        });
    }

    placesData();

    const mainGridContainer = document.querySelector(".main-grid-container");

    const populateCards = (place) => {
        const mainCard = document.createElement("div");
        const imageContainer = document.createElement("figure");
        const btnContainer = document.createElement("div");

        mainCard.setAttribute("class", "main-card");
        btnContainer.setAttribute("class", "dic-btn-container")

        const placeName = document.createElement("h2");
        const placeInfor = document.createElement("p");
        const placeAddress = document.createElement("address");
        const learnMoreButton = document.createElement("button");
        const image = document.createElement("img");

        placeName.setAttribute("class", "cardh2");
        image.setAttribute("loading", "lazy");
        image.setAttribute("alt", "Image of the most fascinating part of Johannesburg");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");
        placeAddress.setAttribute("class", "address");
        placeInfor.setAttribute("class","place-para")
        btnContainer.setAttribute("class", "button-cont")
        imageContainer.setAttribute("class", "fig-image")

        placeName.textContent = place.name;
        image.src = place.image;
        placeInfor.textContent = place.description;
        placeAddress.textContent = place.address;
        learnMoreButton.textContent = "Learn More";

        imageContainer.append(image);
        btnContainer.append(learnMoreButton);

        mainCard.append(placeName);
        mainCard.append(imageContainer);
        mainCard.append(placeInfor);
        mainCard.append(placeAddress);
        mainCard.append(btnContainer);

        mainGridContainer.append(mainCard);
    };

})

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-menu ul li a');

// Get the current page's URL
const currentPage = window.location.pathname.split('/').pop();

// Loop through each navigation link
navLinks.forEach(link => {
    // Check if the link's href matches the current page
    if (link.getAttribute('href') === currentPage) {
        // Add the 'active' class to the matching link
        link.classList.add('active');
    }
});


const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu ul");
const ctaBtn = document.querySelector(".btn");
const latestCurrentYear = document.querySelector(".currentYear");
const dateLastModified = document.lastModified;

latestCurrentYear.textContent = new Date().getFullYear();
const dateMod = document.querySelector(".lastModified");
dateMod.textContent = `Last Modified ${dateLastModified}`;

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    ctaBtn.classList.toggle("active1");
});
