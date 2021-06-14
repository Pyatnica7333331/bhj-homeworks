const list = Array.from(document.getElementsByClassName("tab"));
const content = Array.from(document.getElementsByClassName("tab__content"));
for (let item of list) {
    item.classList.remove("tab_active");
    item.addEventListener("click",function(){
        for (let part of content) {
            part.classList.remove("tab__content_active");
            item.classList.toggle("tab_active");
        };
        content[list.indexOf(item)].classList.toggle("tab__content_active")
    })
};

