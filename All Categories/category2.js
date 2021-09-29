let categoryContainer = document.getElementById("categoryContainer");

for (let i = 0; i < Products.length; i++) {
    
    categoryies(Products[i],"smartphones",categoryContainer);   
}



let filterOption = document.getElementById("filterOption");





function sortByPrice(value){
   
    if(value = "fromHighPrice"){
        
        return categoryies(Products[i],"laptops").sort((a,b) => {return a.price - b.price })
    }

    if(value = "fromLowPrice"){
        
        return categoryies(Products[i],"laptops").sort((a,b) => {return b.price - a.price })
    }

    for (let i = 0; i < categoryies(Products[i],"laptops").length; i++) {
        
        categoryies(Products[i],"laptops",categoryContainer);  
        
    }
}

filterOption.addEventListener("change",() => {

    sortByPrice(filterOption.value)
})

