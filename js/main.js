const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const dropDownMenu = document.querySelector('.dropdown_menu');
let width = screen.width;

hamburger.addEventListener('click', function(){
    if(width>900){
        this.classList.toggle('is-active')
        menu.classList.toggle('is-active')
    }else{
        this.classList.toggle('is-active')
        dropDownMenu.classList.toggle('open')
    }

});

var loader = document.getElementById("preloader");

   window.addEventListener("load", function(){
        loader.style.display = "none";
    
   })