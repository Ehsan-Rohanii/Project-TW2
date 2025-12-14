'use strict';
// Hamberger Menu
const hamberIcon = document.querySelector('.categories');
const hamberMenu = document.querySelector('.hambergeri');
hamberIcon.addEventListener('click', () => {
    hamberMenu.classList.toggle('active-menu');
});
