
var icon = document.getElementById("icon");
var utsLight = document.getElementById("uts-light");
var utsDark = document.getElementById("uts-dark");

icon.onclick = function(event){
    event.stopPropagation();
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png"
        utsLight.style.display = "none";
        utsDark.style.display = "block";
    }else{
        icon.src = "images/moon.png"
        utsLight.style.display = "block";
        utsDark.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function () {
// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});
});


AOS.init();
