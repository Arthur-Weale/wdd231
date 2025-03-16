

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
    ctaBtn.classList.toggle("active");
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

    // Finally, append the business card to the container in your HTML (e.g., a div with the class "bottom-card-container")
    document.querySelector(".bottom-card-container").appendChild(businessCard);

}

    


async function getData() {
    const data =  await fetch('data/members.json');
    const response = await data.json();
    response  .forEach((company) => {
        console.log(company.name);
        member(company);
    });
    console.table(response.name);
    
}

getData();