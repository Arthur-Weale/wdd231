
// document.addEventListener("DOMContentLoaded", () => {
//     const timeStamp = document.querySelector("#time-stamp");
//     if (timeStamp) {
//         timeStamp.value = new Date().toISOString();
//     }
// });
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


const uspData = new URLSearchParams(window.location.search);
const modalContent = document.querySelector(".thank-you-page");

// Check each parameter value and log it
console.log("First Name:", uspData.get("first"));
console.log("Last Name:", uspData.get("last"));
console.log("Title:", uspData.get("title"));
console.log("Email:", uspData.get("email"));
console.log("Phone:", uspData.get("phone"));
console.log("Organization:", uspData.get("organization"));
console.log("Business Description:", uspData.get("business-description"));
console.log("Membership Level:", uspData.get("membership-level"));
console.log("Timestamp:", uspData.get("timestamp"));

const fullName = document.createElement("p");
const appreciationMsg = document.createElement("p");
const submissionRecieved = document.createElement("p");
const quickSummary = document.createElement("p");
const nameReview = document.createElement("p");
const email = document.createElement("p");
const phoneNumber = document.createElement("p");
const organization = document.createElement("p");
const membership = document.createElement("p");
const thankYouMessage = document.createElement("p"); 
const timeSubmit = document.createElement("p");

fullName.textContent = `Thank you, ${uspData.get("first")} ${uspData.get("last")}! 🎉`;
appreciationMsg.textContent = "We appreciate you taking the time to share your details with us.";
submissionRecieved.textContent = "Your submission has been received, and we’re excited to continue this journey with you!";
quickSummary.textContent = `Here's a quick summary of what you submitted:`;
nameReview.textContent = `Name: ${uspData.get("first")} ${uspData.get("last")}`;
email.textContent = `Email: ${uspData.get("email")}`;
phoneNumber.textContent = `Phone Number: ${uspData.get("phone")}`;
organization.textContent = `Business Name: ${uspData.get("organization")}`;
membership.textContent = `Membership Level: ${uspData.get("membership-level")}`;
timeSubmit.textContent = `Submitted at: ${uspData.get("timestamp")}`;

    
// Set the main thank you message text content
thankYouMessage.textContent = "We will be reviewing your application shortly.🚀";

// Append each element to the modalContent
modalContent.appendChild(fullName);
modalContent.appendChild(appreciationMsg);
modalContent.appendChild(submissionRecieved);
modalContent.appendChild(quickSummary);
modalContent.appendChild(nameReview);
modalContent.appendChild(email);
modalContent.appendChild(phoneNumber);
modalContent.appendChild(organization);
modalContent.appendChild(membership);
modalContent.appendChild(timeSubmit);
modalContent.appendChild(thankYouMessage); 
