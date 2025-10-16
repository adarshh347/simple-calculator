// event delegation- adding a click listener to every button
const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

// diff between getElementbyId and querySelector
// getElementbyId - display element has unique id (selects single element)
// querySelector -  selects all elements having class buttons

let currentInput=""; 
// stores what user types


// eventlisteners - click(for mouse related inputs), keydown(for keyboard related inputs)

// handles clicks
buttons.addEventListener("click", (e) =>{
    if(!e.target.classList.contains("btn")) return;  // ignore non button clicks

    const value = e.target.textContent;
    handleInput(value);
});

// handles keyboard typing

document.addEventListener("keydown",(e)=>{
    const key =e.key;
    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
    handleInput(key);
  } else if (key === "Enter" || key === "=") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("⌫");
  } else if (key === "Escape") {
    handleInput("C");
  }
});

function handleInput(value){
    if(value === "C"){
        currentInput = "";
        display.textContent="0";
        return;
    }

    if (value === "⌫"){
        currentInput = currentInput.slice(0, -1);       //.slice is new thing to learn in js
        display.textContent = currentInput || "0";
        return;
    }

    if(value ==="="){
        try{
            if(/^[0-9+\-*/.]+$/.test(currentInput)){
                const result=eval(currentInput);
                display.textContent=result;
                currentInput=result.toString();
            } else{
                display.textContent = "Error";
            }
        } catch{
                display.textContent = "Error";
        }
        return;
    }

    if (isOperator(value) && isOperator(currentInput.slice(-1))) {
    return;
  }
  currentInput += value;
  display.textContent = currentInput;

}


function isOperator(char){
    return  ["+", "-", "*", "/"].includes(char);
}