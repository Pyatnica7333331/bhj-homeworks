const slides = Array.from(document.getElementsByClassName("slider__item"));
const arrowNext = document.querySelector(".slider__arrow_next");
arrowNext.onclick = function () {
    const index =  slides.findIndex((element) => {return element.classList.contains("slider__item_active")});
    slides[index].classList.remove("slider__item_active"); 
    slides[index + 1] ? 
        slides[index + 1].classList.add("slider__item_active") : slides[0].classList.add("slider__item_active")    
};   

const arrowPrev = document.querySelector((".slider__arrow_prev"));
arrowPrev.onclick = function () {
    const index =  slides.findIndex((element) => {return element.classList.contains("slider__item_active")});
    slides[index].classList.remove("slider__item_active"); 
    slides[index - 1] ? 
        slides[index - 1].classList.add("slider__item_active") : slides[slides.length - 1].classList.add("slider__item_active")    
};   
