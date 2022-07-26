function add(num1, num2){
    sum = num1 + num2;
    return sum; 
}

function subtract(num1, num2){
    difference = num1 - num2;
    return difference;
}

function divide(num1, num2){
    quotient = num1 / num2;
    return quotient;
}

function multiply(num1, num2){
    product = num1 * num2;
    return product;
}

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