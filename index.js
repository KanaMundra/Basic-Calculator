const display = document.getElementById('display');
let firstNumber = null;
let operator = null;
let secondNumber = null;

function updateDisplay(value) {
  display.innerText = value;
}




function addNumber(number) {
  if (secondNumber !== null) {
    clearCalculator(); 
  }
  updateDisplay(display.innerText + number);
}

function clearCalculator() {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  updateDisplay("");
}