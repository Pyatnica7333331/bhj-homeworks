const slides = document.getElementsByClassName("slider__item");
const arrowNext = document.getElementsByClassName("slider__arrow_next");
for (let item of arrowNext) {
    item.onclick = function () {
        const a = document.querySelector(".slider__item_active + .slider__item");
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains("slider__item_active")) {
                slides[i].classList.remove("slider__item_active"); 
                if (a) {
                    a.classList.add("slider__item_active") 
                } else slides[0].classList.add("slider__item_active");
                
            };
        };
    };   
};
const arrowPrev = document.getElementsByClassName("slider__arrow_prev");
for (let item of arrowPrev) {
    item.onclick = function () {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains("slider__item_active")) {
                slides[i].classList.remove("slider__item_active");
                if (slides[i -1]) {
                    slides[i -1].classList.add("slider__item_active")
                } else slides[slides.length - 1].classList.add("slider__item_active")
            };
        };
    };   
};