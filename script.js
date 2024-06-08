// code for the best that is for the scrolling...
// sliding or scrolling code...

var swiper = new Swiper(".mySwiper", {
     slidesPerView: 4,
     spaceBetween: 100,
     // loop: true,
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
     },
});

// working for the page 3 in nepal...
// for hover and transition effect...

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter", function () {
     fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
     fixed.style.display = "none";
});

// // for multiple we dont need to repeat:
var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
     e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image")
          fixed.style.backgroundImage = `url(${image})`
     })
})


//linking login to main...
const login= document.getElementById("login-btn");
login.addEventListener("click",()=>{
     window.location.href="login.html"
})

// linking trip cost to main...
const trip=document.getElementById("Trip-cost");
trip.addEventListener("click",()=>{
     window.location.href="trip cost.html"
});

//linking guide to main..
const guide=document.getElementById("Guide");
guide.addEventListener("click",()=>{
     window.location.href="guide.html"
});

// liking city to the main...
const city=document.getElementById("city");
city.addEventListener("click",()=>{
     window.location.href="city.html"
     // alert("This is the best city of Nepal.")
});

// linking dance to main....
let dance=document.getElementById("Dance");
dance.addEventListener("click",()=>{
     window.location.href="dance.html"
     alert("Click Ok  to see the best dances of Nepal.")
});