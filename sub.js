let categoryOneContainer = document.getElementById("categoryOneContainer");
let categoryTwoContainer = document.getElementById("categoryTwoContainer");
let categoryThreeContainer = document.getElementById("categoryThreeContainer");
let categoryFourContainer = document.getElementById("categoryFourContainer");

function categoryies(categoryData , categoryName, ElementContainer){

    if (categoryData.category == categoryName){

        ElementContainer.innerHTML += `<article id=sid${categoryData.id}> 
        <img class="imgs" src="${categoryData.pictures[0]}">
        <input class="radioInputsOne" type="radio" value="1" name="imgGroup${categoryData.id}" checked>
        <input class="radioInputsTwo" type="radio" value="2" name="imgGroup${categoryData.id}">
        <h1>${categoryData.name}</h1>
        <p> <span> Price: </span> ${categoryData.price}$</p>
        <p> <span> Desctiption: </span> ${categoryData.desciption}</p>
        <button class="addToCart">Add to <i class="fas fa-cart-plus"></i></button>
        </article>`  
    }
    
}

for (let i = 0; i < Products.length; i++) {
    
    categoryies(Products[i],"laptops",categoryOneContainer);
    categoryies(Products[i],"smartphones",categoryTwoContainer);
    categoryies(Products[i],"headsets",categoryThreeContainer);
    categoryies(Products[i],"Accessories",categoryFourContainer);
  
}

let radioInputsOne = document.getElementsByClassName("radioInputsOne");
let radioInputsTwo = document.getElementsByClassName("radioInputsTwo");

let arrayOfImages = document.getElementsByClassName("imgs")

for (let i = 0; i < radioInputsOne.length; i++) {

    radioInputsOne[i].addEventListener("click",() => {

        arrayOfImages[i].src = `${Products[i].pictures[0]}`

    })
    
}
for (let i = 0; i < radioInputsTwo.length; i++) {

    radioInputsTwo[i].addEventListener("click",() => {

        
        arrayOfImages[i].src = `${Products[i].pictures[1]}`   
    })
    
}



let startingPointLeftCategoryOneContainer = categoryOneContainer.style.marginRight = "0px";
let startingPointLeftCategoryTwoContainer = categoryTwoContainer.style.marginLeft = "0px";
let startingPointLeftCategoryThreeContainer = categoryThreeContainer.style.marginLeft = "0px";
let startingPointLeftCategoryFourContainer = categoryFourContainer.style.marginLeft = "0px";

let arrowRight = document.getElementsByClassName("arrowRight");
let arrowLeft = document.getElementsByClassName("arrowLeft");


function slideProducts(Element,arrowOne,arrowTwo){

    currentState = parseInt(Element.style.marginLeft);
    
     arrowOne.addEventListener("click",() => {
     
         currentState += 100;
         Element.style.marginLeft = currentState + "px";
         console.log(currentState);
         
     })
     
     arrowTwo.addEventListener("click",() => {
         
         currentState -= 100;
         Element.style.marginLeft = currentState + "px";
         console.log(currentState);

     })   
}

slideProducts(categoryOneContainer,arrowRight[0],arrowLeft[0]);
slideProducts(categoryTwoContainer,arrowRight[1],arrowLeft[1]);
slideProducts(categoryThreeContainer,arrowRight[2],arrowLeft[2]);
slideProducts(categoryFourContainer,arrowRight[3],arrowLeft[3]);






/**********************************************************************/
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








