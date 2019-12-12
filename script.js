let navbar_height = document.getElementById("nav-links").offsetHeight;

window.addEventListener("resize", function() {
    navbar_height = document.getElementById("nav-links").offsetHeight;
});

document.getElementById("nav-drawer").addEventListener("click", function (){
    document.getElementById("nav-links").classList.toggle("nav-open");
})