const menuToggle = document.getElementById('menu-toggle');
const dropDown = document.getElementById('dropdown-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    dropDown.classList.add('active');
})

closeMenu.addEventListener('click', () => {
    dropDown.classList.remove('active');
})