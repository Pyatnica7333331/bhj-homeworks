const list = document.getElementsByClassName("dropdown")
for (let item of list) {
    item.onclick = function () {
        item.querySelector("ul").classList.toggle("dropdown__list_active");
    };   
};

let elements = document.getElementsByClassName("dropdown__item");

for (let i=0; i < elements.length; i++ ) {
    elements[i].onclick = function() {
        let innerText = elements[i].querySelector(".dropdown__link").textContent;
        document.querySelector(".dropdown__value").textContent = innerText;
        return false
    };
}
