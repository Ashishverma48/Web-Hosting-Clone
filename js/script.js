const menu = document.getElementById('nav-menu');
const navLink = document.getElementById('nav-link');
menu.addEventListener('click', () =>{
    navLink.classList.toggle('active');
} )