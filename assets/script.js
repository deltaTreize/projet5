const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.getElementById("banner-img");
const bannerP = document.querySelector(".banner p");
const dots = document.querySelectorAll(".dot");
const dotsArray = Array.from(dots);
let i = 0; 
const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

function handleChange(count) {
  dotsArray[i].classList.remove("dot_selected");
  i = i + count;
  if (i >= slides.length) { i = 0};
  if (i < 0) { i= slides.length -1};
  dotsArray[i].classList.add("dot_selected");
  bannerImg.src = slides[i].image;
  bannerP.innerHTML = slides[i].tagLine;
}