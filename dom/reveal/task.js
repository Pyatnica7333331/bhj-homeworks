const revealElements = document.querySelectorAll(".reveal");

document.addEventListener("scroll", () => {
    for (let element of revealElements) {
        if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
            element.classList.add("reveal_active")
        } else element.classList.remove("reveal_active");
    }
});