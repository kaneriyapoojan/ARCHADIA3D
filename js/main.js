const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active')
    // menu.style.display = "flex";
});