const products = Array.from(document.querySelectorAll(".product"));
const quantityDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const quantityInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const cartProducts = document.querySelector(".cart__products");


function addProductInCart(id, item, image) {
    return `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-count">${item}</div>
            </div>`
}

products.forEach((elem) => 
    elem.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.classList.contains("product__add")) {
            let targetImage = event.target.closest(".product").querySelector(".product__image").getAttribute('src');
            let targetId = event.target.closest(".product").dataset.id;
            let targetValue = event.target.closest(".product").querySelector(".product__quantity-value").textContent;    
           
            if (cartProducts.children.length !== 0) {
                if (cartProducts.querySelector(`[data-id="${targetId}"]`)) {
                    cartProducts.querySelector(`[data-id="${targetId}"]`).querySelector(".cart__product-count").textContent = 
                        Number(cartProducts.querySelector(`[data-id="${targetId}"]`).querySelector(".cart__product-count").textContent) + Number(targetValue);
                } else {
                    cartProducts.insertAdjacentHTML("beforeEnd", addProductInCart(targetId, Number(targetValue), targetImage));
                }
            } else {
                cartProducts.insertAdjacentHTML("beforeEnd", addProductInCart(targetId, Number(targetValue), targetImage));
            }           
        }
    })
);
quantityDec.forEach((elem) => elem.addEventListener("click", (event) => {
    let cartValue = event.target.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent;
    let parseCartValue = parseInt(cartValue);
    if (parseCartValue > 1) {
        parseCartValue--;
        event.target.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent = parseCartValue;  
    };
}));
quantityInc.forEach((elem) => elem.addEventListener("click", (event) => {
    let cartValue = event.target.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent;
    let parseCartValue = parseInt(cartValue);
    parseCartValue++;
    event.target.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent = parseCartValue; 
    
}));
