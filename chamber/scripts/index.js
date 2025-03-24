
// Fetch the members data (adjust the URL or file path as needed)
async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data;
}

// Function to randomly select a given number of items from an array
function getRandomMembers(array, count) {
    // Create a copy of the array and shuffle it randomly
    const shuffled = array.sort(() => 0.5 - Math.random());
    // Return the first 'count' elements
    return shuffled.slice(0, count);
}

// Function to display spotlight members on the home page
async function displaySpotlightMembers() {
    const members = await getMembersData();
    
    // Filter out only gold or silver members
    const filteredMembers = members.filter(member => {
        return member.membership_level.toLowerCase() === 'gold' ||
            member.membership_level.toLowerCase() === 'silver';
    });
    
    // Randomly pick 3 members from the filtered list
    const spotlightMembers = getRandomMembers(filteredMembers, 3);
    
    // Select the container where the spotlight members will be shown
    const container = document.querySelector('.home-bottom-card-container');
    container.innerHTML = ""; // Clear any existing content
    
    // Create a card for each spotlight member
    spotlightMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        
        // Create an image element if there's an image provided
        if (member.image) {
            const img = document.createElement('img');
            img.src = `images/${member.image}`; // Adjust the path as needed
            img.alt = `${member.name} logo`;
            card.appendChild(img);
        }
        
        // Create an element for the member name
        const nameEl = document.createElement('h3');
        nameEl.textContent = member.name;
        card.appendChild(nameEl);
        
        // Create an element for the membership level
        const statusEl = document.createElement('p');
        statusEl.textContent = `Membership: ${member.membership_level}`;
        card.appendChild(statusEl);
        
        // Optionally, create a button for more details
        const detailsBtn = document.createElement('button');
        detailsBtn.textContent = 'More Info';
        detailsBtn.addEventListener('click', () => {
            // For example, redirect to a member detail page:
            window.location.href = `member.html?id=${member.id || member.name}`;
        });
        card.appendChild(detailsBtn);
        
        // Append the card to the container
        container.appendChild(card);
    });
}

// Toggle view functions to switch between grid and list layouts
function toggleView(view) {
    const container = document.querySelector('.home-bottom-card-container');
    if (view === 'grid') {
        container.classList.add('grid-view');
        container.classList.remove('list-view');
    } else if (view === 'list') {
        container.classList.add('list-view');
        container.classList.remove('grid-view');
    }
}

// Assign event listeners to your toggle buttons
document.querySelector('.grid-btn').addEventListener('click', () => toggleView('grid'));
document.querySelector('.list-btn').addEventListener('click', () => toggleView('list'));

// Call the function to display spotlight members when the page loads
displaySpotlightMembers();



function displaySpotlightMember(memberCompany) {
    const businessCard = document.createElement("div");
    const businessCardTop = document.createElement("div");
    const header = document.createElement("h2");
    const tagLine = document.createElement("p");
    const bottomBottomCard = document.createElement("div");
    const businessLogo = document.createElement("div");
    const businessInfo = document.createElement("div");
    const emailPara = document.createElement("p");
    const phonePara = document.createElement("p");
    const urlPara = document.createElement("p");
    const addressPara = document.createElement("p");
    const membershipLevelPara = document.createElement("p");

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
    addressPara.setAttribute("class", "company-address");
    membershipLevelPara.setAttribute("class","membership-level");

    header.textContent = memberCompany.name;
    tagLine.textContent = memberCompany.tagline;
    emailPara.textContent =`Email: ${memberCompany.email}`;
    phonePara.textContent = `Phone: ${memberCompany.phone}`;
    urlPara.textContent =`Url: ${memberCompany.website}`;
    addressPara.textContent = `Address: ${memberCompany.address}`;
    membershipLevelPara.textContent = `Membership Level: ${memberCompany.membership_level}`;

    // Build the structure
    businessCardTop.appendChild(header);
    businessCardTop.appendChild(tagLine);
    businessInfo.appendChild(emailPara);
    businessInfo.appendChild(phonePara);
    businessInfo.appendChild(urlPara);
    businessInfo.appendChild(addressPara);
    businessInfo.appendChild(membershipLevelPara); 
    bottomBottomCard.appendChild(businessLogo);
    bottomBottomCard.appendChild(businessInfo);
    businessCard.appendChild(businessCardTop);
    businessCard.appendChild(bottomBottomCard);

    // Append to home page container instead of directory container
    document.querySelector(".home-bottom-card-container").appendChild(businessCard);
}


async function displaySpotlightMembers() {
    const members = await getMembersData('data/members.json');
    
    // Filter out only gold or silver members
    const filteredMembers = members.filter(member => {
        return member.membership_level.toLowerCase() === 'gold' ||
            member.membership_level.toLowerCase() === 'silver';
    });
    
    // Randomly pick 3 members from the filtered list
    const spotlightMembers = getRandomMembers(filteredMembers, 3);
    
    // Select the container where the spotlight members will be shown
    const container = document.querySelector('.home-bottom-card-container');
    container.innerHTML = ""; // Clear any existing content
    
    // For each spotlight member, call the new function
    spotlightMembers.forEach(member => {
        displaySpotlightMember(member);
    });
}


