let decreaseBtn = document.querySelector("#quantity-down") //assigns variable to "quantity-down"
let increaseBtn = document.querySelector("#quantity-up") // assigns variable to "quantity-up"

function updateQuantity(displayQuantity){ 
    let quantity = document.querySelector(".total-quantity") //selects the total quantity
    quantity.innerHTML = displayQuantity
}


let quantity = 1 //sets inital quantity to 1

decreaseBtn.addEventListener("click", function(e){ //listens for a click on the "-" button
    if(quantity > 0){
        quantity-- // decreases value, but doesn't let it fall below zero
    }else {
        window.alert("Nothing in the cart, dummy! (luv u)") // pulls up a window alerting the user that there is nothing in the cart
    }
    updateQuantity(`Quantity: ${quantity}`) //interpolates into a number
})

increaseBtn.addEventListener("click", function(e){ //listens for a click on the "+" button
    quantity++ // increases value
    updateQuantity(`Quantity: ${quantity}`) //interpolates into a number
})