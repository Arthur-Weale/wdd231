

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const tomorrow = 1;
const dayAfterTomorrow = 2;
const date = new Date();
let today = weekday[date.getDay()];
let dayTomorrow = weekday[date.getDay() + 1];
let dayAfter = weekday[date.getDay() + 2];
// console.log(today);
// console.log(dayTomorrow);
// console.log(dayAfter);

//I know i could use only one api for everything...but my assignment is late.

async function getForecastData (){
    const forecastData = await fetch ('https://api.openweathermap.org/data/2.5/forecast?lat=-26.164990&lon=27.873624&appid=c07581890cc044439d9c42431c5b22d0&units=metric');
    const forecastDataJson = await forecastData.json();
    //console.log(forecastDataJson);

    const dailyTemps = {}; // Creating an empty object
    let iconAppended = false;

    forecastDataJson.list.forEach(weatherEntry => {
        const date = weatherEntry.dt_txt.split(" ")[0];
        const time = weatherEntry.dt_txt.split(" ")[1];

        // if (time === "12:00:00" && !iconAppended){
        //     dailyTemps[date]= weatherEntry.main.temp;

        //     const iconCode = weatherEntry.weather[0].icon;
        //     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        //     const imgElement = document.createElement("img");
        //     imgElement.src = iconUrl;
        //     imgElement.alt = "Weather Icon";
        //     //.appendChild(imgElement);

        //     const weatherIcon = document.querySelector(".weather-type-icon")
        //     weatherIcon.appendChild(imgElement);

        //     iconAppended = true;
        // }

        if (time === "00:00:00" || time === "03:00:00" || time === "06:00:00" || 
            time === "09:00:00" || time === "12:00:00" || time === "15:00:00" || 
            time === "18:00:00" || time === "21:00:00") {
            dailyTemps[date] = weatherEntry.main.temp;
        
            if (!iconAppended) { // Append the icon only once
                const iconCode = weatherEntry.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
                const imgElement = document.createElement("img");
                imgElement.src = iconUrl;
                imgElement.alt = "Weather Icon";
        
                const weatherIcon = document.querySelector(".weather-type-icon");
                weatherIcon.appendChild(imgElement);
        
                iconAppended = true;
            }
        }
        

        console.log(dailyTemps)
    });

        
        const todayDate = new Date().toISOString().split("T")[0];
        const tomorrowDate = new Date(Date.now() + 86400000) .toISOString().split("T")[0];
        const dayAfterDate = new Date(Date.now() + (86400000 * 2)) .toISOString().split("T")[0];

        const forecastCardBottom = document.querySelector(".forecast-card-bottom");

        const todayParagraphContainer = document.createElement("p");
        const tomorrowParagraphContainer = document.createElement("p");
        const dayAfterParagraphContainer = document.createElement("p");

        //Create span unique for each data entry
        const todaySpanContainer = document.createElement("span");
        const tomorrowSpanContainer = document.createElement("span");
        const dayAfterSpanContainer = document.createElement("span");


        //First place into the span
        todaySpanContainer.textContent = `Today: ${dailyTemps[todayDate]|| "N/A"}°C`;
        tomorrowSpanContainer.textContent = `${dayTomorrow}: ${dailyTemps[tomorrowDate]|| "N/A"}°C`;
        dayAfterSpanContainer.textContent = `${dayAfter}: ${dailyTemps[dayAfterDate]|| "N/A"}°C`;

        //Place each span to the paragraph
        todayParagraphContainer.appendChild(todaySpanContainer);
        tomorrowParagraphContainer.appendChild(tomorrowSpanContainer);
        dayAfterParagraphContainer.appendChild(dayAfterSpanContainer);

        //Append each paragraph element to the forecast card bottom
        forecastCardBottom.appendChild(todayParagraphContainer);
        forecastCardBottom.appendChild(tomorrowParagraphContainer);
        forecastCardBottom.appendChild(dayAfterParagraphContainer)

        console.log(`${today}: ${dailyTemps[todayDate]}`);
        console.log(dailyTemps[tomorrowDate]);
        console.log(dailyTemps[dayAfterDate]);
        //console.log(`Today: ${todayDate}, Tomorrow: ${tomorrowDate}, Day After: ${dayAfterDate}`);
}

getForecastData();


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


//To be fixed.........
const wayFinding = document.querySelector(".wayfinding");
wayFinding.addEventListener("click", () => {
    wayFinding.classList.toggle("wayfinding.active");
})

const gridBtn = document.querySelector(".grid-btn");
const listBtn = document.querySelector(".list-btn");
const container = document.querySelector(".bottom-card-container");


gridBtn.addEventListener("click", () => {
    container.classList.remove("list-view"); // Switch to grid
});

listBtn.addEventListener("click", () => {
    container.classList.add("list-view"); // Switch to list
});

function member(memberCompany){
    const businessCard = document.createElement("div"); //set attribute class: business-card
    const businessCardTop = document.createElement("div"); //set attribute class: bizcard-top
    const header = document.createElement("h2"); //append into bizcard-top
    const tagLine = document.createElement("p"); //set att to tag
    const bottomBottomCard = document.createElement("div"); // set att to bottom card bottom
    const businessLogo = document.createElement("div"); //set att to business-logo ....append into bottom-card-bottom
    const businessInfo = document.createElement("div"); //set att to business-info....append into bottom-card-bottom
    const emailPara = document.createElement("p"); //set att to email ....append into business-info
    const phonePara = document.createElement("p"); //set att to phone ....append into business-info
    const urlPara = document.createElement("p"); //set att to url ....append into business-info
    

    businessCard.setAttribute("class", "business-card");
    businessCardTop.setAttribute("class", "bizcard-top");
    header.setAttribute("class", "business-card");
    tagLine.setAttribute("class", "tag");
    bottomBottomCard.setAttribute("class", "bottom-card-bottom");
    businessLogo.setAttribute("class", "business-logo");
    businessInfo.setAttribute("class", "business-info");
    emailPara.setAttribute("class", "email");
    phonePara.setAttribute("class", "phone");
    urlPara.setAttribute("class", "url");

    header.textContent = memberCompany.name;
    tagLine.textContent = memberCompany.tagline;
    emailPara.textContent = memberCompany.email;
    phonePara.textContent = memberCompany.phone;
    urlPara.textContent = memberCompany.website;

    // Build the hierarchy
    // Append header and tagline to the top section container
    businessCardTop.appendChild(header);
    businessCardTop.appendChild(tagLine);

    // Append email, phone, and url to the business info container
    businessInfo.appendChild(emailPara);
    businessInfo.appendChild(phonePara);
    businessInfo.appendChild(urlPara);

    // Append the business logo and info to the bottom section container
    bottomBottomCard.appendChild(businessLogo);
    bottomBottomCard.appendChild(businessInfo);

    // Append the top and bottom sections to the main business card container
    businessCard.appendChild(businessCardTop);
    businessCard.appendChild(bottomBottomCard);

    
    document.querySelector(".bottom-card-container").appendChild(businessCard);
}


function populateTable(item){
    
    //Toggled List ===================================

    const table = document.createElement("table");
    table.setAttribute("class", "listview-table");
    const tbody = document.createElement("tbody");
    const tableRow = document.createElement("tr");
    tbody.setAttribute("class", "table-body");

    const businessNameCell = document.createElement("td");
    const taglineCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    const websiteCell = document.createElement("td");

    businessNameCell.textContent = item.name;
    taglineCell.textContent = item.tagline;
    emailCell.textContent = item.email;
    phoneCell.textContent = item.phone;
    websiteCell.textContent = item.website;

     // Append cells to row
    tableRow.appendChild(businessNameCell);
    tableRow.appendChild(taglineCell);
    tableRow.appendChild(emailCell);
    tableRow.appendChild(phoneCell);
    tableRow.appendChild(websiteCell);

    tbody.appendChild(tableRow);
    table.appendChild(tbody);

    document.querySelector(".bottom-card-container").appendChild(table);
}
    


async function getData() {
    const data =  await fetch('data/members.json');
    const response = await data.json();
    response  .forEach((company) => {
        //console.log(company.name);

        function displayGridView() {
            container.innerHTML = ""; // Clear previous content
            response.forEach(member);
            gridBtn.classList.add("bottom-card-container.active");
            listBtn.classList.remove("active");
        }

        function displayListView() {
            container.innerHTML = ""; // Clear previous content
            response.forEach(populateTable);
            listBtn.classList.add("active");
            gridBtn.classList.remove("active");
        }

        // Assign event listeners once
        gridBtn.addEventListener("click", displayGridView);
        listBtn.addEventListener("click", displayListView);
    });
}

getData();

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".wayfinding");

    // Function to set active link
    function setActiveLink() {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    }

    // Attach event listeners
    navLinks.forEach(link => {
        link.addEventListener("click", setActiveLink);
    });

    // Set active link based on URL
    const currentPage = window.location.pathname;
    navLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase() === currentPage.replace("/", "").toLowerCase()) {
            link.classList.add("active");
        }
    });
});




async function getWeatherData (){
    const weatherData = await fetch ('https://api.openweathermap.org/data/2.5/weather?lat=-26.164990&lon=27.873624&appid=c07581890cc044439d9c42431c5b22d0&units=metric');
    const weatherDataJson = await weatherData.json();
    //console.log(weatherDataJson);
    populateWeatherCard (weatherDataJson)
}

getWeatherData();


function populateWeatherCard (weatherDataJson){
    const weatherInfor = document.querySelector(".weather-infor");
    const containerParagraph = document.createElement("p");

    const tempPara = document.createElement("p");
    const cloudTypePara = document.createElement("p");
    const highPara = document.createElement("p");
    const lowPara = document.createElement("p");


    const tempSpan = document.createElement("span");
    tempSpan.textContent = `${weatherDataJson.main.temp}°C`;
    const cloudTypeSpan = document.createElement("span");
    cloudTypeSpan.textContent = weatherDataJson.weather[0].description;
    const highSpan = document.createElement("span");
    highSpan.textContent = `High: ${weatherDataJson.main.temp_max}°C`;
    const lowSpan = document.createElement("span")
    lowSpan.textContent = `low: ${weatherDataJson.main.temp_min}°C`
    
    tempPara.appendChild(tempSpan);
    cloudTypePara.appendChild(cloudTypeSpan);
    highPara.appendChild(highSpan);
    lowPara.appendChild(lowSpan);


    weatherInfor.appendChild(tempPara);
    weatherInfor.appendChild(cloudTypePara);
    weatherInfor.appendChild(highPara);
    weatherInfor.append(lowPara);
}

populateWeatherCard();
