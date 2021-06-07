//console.log(document.getElementsByClassName("menu__link"));

console.log(document.getElementsByTagName("a").item(0).closest(".menu"));
console.log(document.querySelector("ul a").className);
for(let index=0; index < document.querySelectorAll("ul a").length; index++ ) {
document.getElementsByClassName("menu__link").onclick = () => {
    document.getElementsByTagName("ul").closest("a");
    for(let index=0; index < document.querySelectorAll("ul a").length; index++ ) {
    document.querySelectorAll("ul a").item(index).className = "menu menu_sub menu_active";
    
   // return false
};
};
};