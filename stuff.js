document.getElementById("clear");
document.getElementById("output").style.fontSize = '55px';




//create a display and use dom manipulation to put the answers 
function add(num1, num2){
    sum = num1 + num2;
    document.getElementById("output").innerHTML = sum;
    return sum; 
    
}

function subtract(num1, num2){
    difference = num1 - num2;
    document.getElementById("output").innerHTML = difference;
    return difference;
}

function divide(num1, num2){
    quotient = num1 / num2;
    document.getElementById("output").innerHTML = quotient;
    return quotient;
}

function multiply(num1, num2){
    product = num1 * num2;
    document.getElementById("output").innerHTML = product;
    return product;
}

clear.addEventListener("click", function(){
  document.getElementById("output").innerHTML = "";

})







function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };