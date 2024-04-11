
const display = document.getElementById("display");

function appendTodisplay(input){
  display.value += input;

}

function clearDisplay(){

  display.value = "";

}

function calculate(){
  try{
    display.value = eval(display.value);

  }catch(err){

    display.value = "Invalid Input";
    alert("Galat Chize Mat dal Bhai😔!")
  }

 
}