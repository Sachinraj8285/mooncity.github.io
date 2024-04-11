let  moon = document.getElementById('moon');
let  cityleft=document.getElementById('cityleft');
let  cityright=document.getElementById('cityright');
let  herotext = document.querySelector('.hero p');

window.addEventListener("scroll",()=>{
    let scrollvalue = window.scrollY;
    moon.style.top = scrollvalue * 8 + "px";
    herotext.style.margintop = scrollvalue * 4 + 'px';
    cityleft.style.left = scrollvalue * 2 + "px";
    cityright.style.right = scrollvalue * 2 + "px";
})