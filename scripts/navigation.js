const hamButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-list');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(navLink => navLink.addEventListener('click', () => {
    hamButton.classList.remove('active');
    navMenu.classList.remove('active');
}))