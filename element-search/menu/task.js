let menuSub = document.getElementsByClassName("menu_sub");
for(let i=0; i < menuSub.length; i++ ) {
    menuSub[i].parentElement.onclick = function() {
        menuSub[i].className = "menu menu_sub menu_active";
        return false
    };
};
//console.log(document.querySelectorAll("a + ul"));
//let menuSub = document.querySelectorAll("a + ul");
//console.log(menuSub);
//for(let i=0; i < menuSub.length; i++ ) {
//    console.log(menuSub[i].parentElement);   
//        menuSub[i].parentElement.onclick = function() {
//            //console.log(menuSub[i]);   
//        menuSub[i].getElementsByClassName("menu_sub").className = "menu menu_sub menu_active";
//        return false
//    };
//};
