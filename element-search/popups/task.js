document.getElementById("modal_main").className = "modal modal_active";
let arr = document.getElementsByClassName("modal__close_times");
for(let i=0; i < arr.length; i++) {
    arr[i].onclick = function() {
        arr[i].closest(".modal").className = "modal "
    };
};
let arr2 = document.getElementsByClassName("show-success");
for(let i=0; i < arr2.length; i++) {
    arr2[i].onclick = function() {
        document.getElementById("modal_success").className = "modal modal_active";
        document.getElementById("modal_main").className = "modal "
    };
};