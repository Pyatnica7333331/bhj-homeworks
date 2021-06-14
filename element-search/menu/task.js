let menuSub = document.getElementsByClassName("menu_sub");
for(let i=0; i < menuSub.length; i++ ) {
    const link = menuSub[i].closest(".menu_main > li").querySelector("a");
    link.onclick = function() {
        menuSub[i].classList.toggle("menu_active");
        let menuActive = document.getElementsByClassName("menu_active");
        if (menuActive.length > 1) {
            for(let index = 0; index < menuActive.length; index ++ ) {
                if (menuActive[index] !== menuSub[i])
                    menuActive[index].classList.remove("menu_active")
            };
        };
        return false
    };
};
