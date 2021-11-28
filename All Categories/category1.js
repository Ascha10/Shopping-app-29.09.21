let categoryContainer = document.getElementById("categoryContainer");

for (let i = 0; i < Products.length; i++) {
    
    categoryies(Products[i],"laptops",categoryContainer);   
}

let filterOption = document.getElementById("filterOption");

filterByPrice(filterOption,"laptops",categoryContainer);


// const container = document.getElementById("container");
// const menuBtn = document.querySelector('.menuBtn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//   if(!menuOpen) {
//     menuBtn.classList.add('open');
//     container.style.display = "block";
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     container.style.display = "none";
//     menuOpen = false;
//   }
// });




