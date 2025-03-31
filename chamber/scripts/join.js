document.addEventListener("DOMContentLoaded", () => {
    // Select buttons
    const npoCardBtn = document.querySelector(".npo");
    const bronzeCardBtn = document.querySelector(".bronze");
    const silverCardBtn = document.querySelector(".silver");
    const goldCardBtn = document.querySelector(".gold");
    const closeCardBtn = document.querySelector("#closeBtn");
    const modalPopup = document.querySelector("#pricing-modal");
    document.getElementById("time-stamp").value = new Date().toUTCString();
    // Modal content
    const membershipLevel = document.getElementById("membership-level-type");
    const cardContextPara = document.getElementById("type-context");
    const cardList = document.getElementById("list-container");

    const memberships = {
        "Non-Profit": {
            title: "Non-Profit Membership (Free)",
            description: "Ideal for charities, NGOs, and non-profit organizations.",
            benefits: [
                "Free membership for verified non-profits",
                "Access to networking events and workshops",
                "Promotion in our community directory",
                "Eligibility for sponsorship opportunities",
                "Collaboration with local businesses"
            ]
        },
        "Bronze": {
            title: "Bronze Membership ($10/month)",
            description: "Great for small businesses looking to expand their network.",
            benefits: [
                "Basic directory listing",
                "Invitations to networking events",
                "Discounted advertising rates",
                "Quarterly business growth tips"
            ]
        },
        "Silver": {
            title: "Silver Membership ($25/month)",
            description: "Perfect for growing businesses seeking increased visibility.",
            benefits: [
                "Enhanced directory listing with logo",
                "Priority event invitations",
                "Feature in monthly newsletter",
                "SEO and marketing consultation"
            ]
        },
        "Gold": {
            title: "Gold Membership ($50/month)",
            description: "Best for established businesses wanting premium exposure.",
            benefits: [
                "Premium directory listing with social media links",
                "VIP access to events and seminars",
                "Featured business spotlight on homepage",
                "Personalized business consultation"
            ]
        }
    };

    function showMembershipDetails(type) {
        const membership = memberships[type];
        if (membership) {
            modalPopup.showModal();
            membershipLevel.textContent = membership.title;
            cardContextPara.textContent = membership.description;
            cardList.innerHTML = ""; // Clear old benefits
            membership.benefits.forEach(benefit => {
                const listItem = document.createElement("li");
                listItem.textContent = benefit;
                cardList.appendChild(listItem);
            });
        }
    }

    // Attach event listeners
    npoCardBtn.addEventListener("click", () => showMembershipDetails("Non-Profit"));
    bronzeCardBtn.addEventListener("click", () => showMembershipDetails("Bronze"));
    silverCardBtn.addEventListener("click", () => showMembershipDetails("Silver"));
    goldCardBtn.addEventListener("click", () => showMembershipDetails("Gold"));

    // Close button
    closeCardBtn.addEventListener("click", () => {
        modalPopup.close();
    });
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


