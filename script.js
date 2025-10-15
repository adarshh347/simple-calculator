// event delegation- adding a click listener to every button
const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

// diff between getElementbyId and querySelector
// getElementbyId - display element has unique id (selects single element)
// querySelector -  selects all elements having class buttons

let currentInput=""; 
// stores what user types

buttons.addEventListener("click", (e) =>{
    if(!e.target.classList.contains("btn")) return;  // ignore non button clicks

    const value = e.target.textContent;
    handleInput(value);
});