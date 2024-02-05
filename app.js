var icon = document.getElementById("icon");
icon.onclick = function(event){
    event.stopPropagation();
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png"
    }else{
        icon.src = "images/moon.png"
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