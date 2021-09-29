let cartCounter = document.getElementById("cartCounter");

let cartItems = [];

let addToCart = document.getElementsByClassName("addToCart");
let counter = 1;

for (let i = 0; i < addToCart.length; i++) {
    
    addToCart[i].addEventListener("click",() => {

        cartCounter.innerHTML = counter++ ;
        cartItems.push(Products[i]);
        
    })
}


console.log(cartItems);

let cartTable = document.getElementById("cartTable");
let addedItems = document.getElementById("addedItems");

console.log(cartTable);

for (let i = 0 ; i < 4  ; i++) {
    
    cartItems.push(Products[i]);
}


for (let i = 0; i < cartItems.length; i++) {
    
    addedItems.innerHTML += `<tr class="addedItem"><td><article id=sid${cartItems[i].id}> 
    <img src="${cartItems[i].pictures[0]}">
    <h1>${cartItems[i].name}</h1></td>
    <td><button class="minusBtn">- </button><input class="productQuentity" type="text" value="1"> <button class="plusBtn">+</button></td>
    <td><p> <span> Price: </span> <span class="priceTag"> ${cartItems[i].price} </span> $</p> <button class="removeBtn"> Remove Item</button></td 
    </article></tr>`;
}

let addedItem = document.getElementsByClassName("addedItem");

let productQuentity = document.getElementsByClassName("productQuentity");
let CurrentTotalAmount = document.getElementById("CurrentTotalAmount");

let minusBtn = document.getElementsByClassName("minusBtn");
let plusBtn = document.getElementsByClassName("plusBtn");



let sum = 0;

for (let i = 0; i < minusBtn.length; i++) {
     
    minusBtn[i].addEventListener("click",() => {
        
        productQuentity[i].value--
        sum -= parseInt(cartItems[i].price)
        CurrentTotalAmount.innerHTML = sum;     
    })
    
}

for (let i = 0; i < plusBtn.length; i++) {

    plusBtn[i].addEventListener("click",() => {
        
        productQuentity[i].value++
        sum += parseInt(cartItems[i].price) 
        CurrentTotalAmount.innerHTML = sum;
    })
    
}


function totalAmount(){
    
    for (let i = 0; i < cartItems.length; i++) {

        sum += parseInt(cartItems[i].price) * (productQuentity[i].value); 

    }
    return CurrentTotalAmount.innerHTML = sum;
}

totalAmount()


let priceTag = document.getElementsByClassName("priceTag");
let removeBtn = document.getElementsByClassName("removeBtn");

for (let i = 0; i < removeBtn.length; i++) {
    
    removeBtn[i].addEventListener("click",() => {
        addedItem[i].style.display = "none";
        sum -= (priceTag[i].innerHTML * productQuentity[i].value);
        CurrentTotalAmount.innerHTML = sum; 
    })
}








