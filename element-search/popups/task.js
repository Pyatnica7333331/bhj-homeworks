document.getElementById("modal_main").className = "modal modal_active";
document.getElementsByClassName("modal__close")[0].onclick = () => {
    document.getElementsByClassName("modal_active")[0].className = "modal ";
};
document.getElementsByClassName("show-success")[0].onclick = () => {
    document.getElementById("modal_success").className = "modal modal_active";
    document.getElementsByClassName("modal modal_active")[0].className = "modal ";
};