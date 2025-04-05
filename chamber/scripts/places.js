document.addEventListener("DOMContentLoaded",() => {

    const placesData = async () => {
        const placesData = await fetch("data/places.json");
        console.log(placesData);
        const response = await placesData.json();
        response.forEach(place => {
            console.log(place);
            populateCards(place);
        });
    }

    placesData();

    const mainGridContainer = document.querySelector(".main-grid-container");

    const populateCards = (place) => {
        const mainCard = document.createElement("div");
        const inforImgContainer = document.createElement("div");
        const imageContainer = document.createElement("figure");
        const infoContainer = document.createElement("div");
        const btnContainer = document.createElement("div");

        mainCard.setAttribute("class", "main-card");
        inforImgContainer.setAttribute("id", "infor-image");
        infoContainer.setAttribute("id", "discover-info");
        btnContainer.setAttribute("class", "dic-btn-container")

        const placeName = document.createElement("h2");
        const placeInfor = document.createElement("p");
        const placeAddress = document.createElement("address");
        const learnMoreButton = document.createElement("button");
        const image = document.createElement("img");

        placeName.setAttribute("class", "cardh2");
        image.setAttribute("loading", "lazy");


        placeName.textContent = place.name;
        image.src = place.image;
        placeInfor.textContent = place.description;
        placeAddress.textContent = place.address;
        learnMoreButton.textContent = "Learn More";

        imageContainer.append(image);
        infoContainer.append(placeInfor);
        infoContainer.append(placeAddress);

        inforImgContainer.append(imageContainer)
        inforImgContainer.append(infoContainer);

        btnContainer.append(learnMoreButton);

        mainCard.append(placeName);
        mainCard.append(inforImgContainer);
        mainCard.append(btnContainer);

        mainGridContainer.append(mainCard);
    };
})

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
