const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.getElementById("banner-img");
const bannerP = document.querySelector(".banner p");
const dots = document.querySelectorAll(".dot");
const dotsArray = Array.from(dots);
let i = 0;

/*************** script fourni *******************/
const slides = [
    {
        image: "./assets/images/slideshow/slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
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
/*************** script fourni *******************/

function handleChangeArrow(count) {
    dotsArray[i].classList.remove("dot_selected");
    i = i + count;
    if (i >= slides.length) {
        i = 0;
    }
    if (i < 0) {
        i = slides.length - 1;
    }
    dotsArray[i].classList.add("dot_selected");
    bannerImg.src = slides[i].image;
    bannerP.innerHTML = slides[i].tagLine;
}

function handleChangeDot(count) {
    dotsArray[i].classList.remove("dot_selected");
    i = count;
    dotsArray[i].classList.add("dot_selected");
    bannerImg.src = slides[i].image;
    bannerP.innerHTML = slides[i].tagLine;
}

leftArrow.addEventListener("click", () => {
    handleChangeArrow(-1);
});
rightArrow.addEventListener("click", () => {
    handleChangeArrow(1);
});

dotsArray.forEach((dot) =>
    dot.addEventListener("click", () => {
        handleChangeDot(Number(dot.id));
    })
);