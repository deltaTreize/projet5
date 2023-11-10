const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.getElementById("banner-img");

const slides = [
  {
    image: "./asset/images/slideshow/slide1.jpg",
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

// leftArrow.addEventListener("click", () => {

// })
rightArrow.addEventListener("click", rightClick);


function rightClick() {
  if (i <= slides.length, i++) {
    bannerImg.src = slides[i].image;
		console.log(i);
  }
	// if (i>slides.length){
	// 	i=0;
	// }
}
