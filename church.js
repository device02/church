const hamburger = document.getElementById("hamburger");
const topnav = document.getElementById("topnav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    topnav.classList.toggle("show");
});