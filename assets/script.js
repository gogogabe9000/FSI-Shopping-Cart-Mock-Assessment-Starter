let decreaseBtn = document.querySelector("#quantity-down")
let increaseBtn = document.querySelector("#quantity-up")

function updateQuantity(displayQuantity){
    let quantity = document.querySelector(".total-quantity")
    quantity.innerHTML = displayQuantity
}

let quantity = 1

