"use strict";

// Constanst of the buttons

const numberOne = document.querySelector(".number1");

const numberTwo = document.querySelector(".number2");

const numberThree = document.querySelector(".number3");

const numberFour = document.querySelector(".number4");

const numberFive = document.querySelector(".number5");

const numberSix = document.querySelector(".number6");

const numberSeven = document.querySelector(".number7");

const numberEight = document.querySelector(".number8");

const numberNine = document.querySelector(".number9");

const numberZero = document.querySelector(".number0");

const plusSign = document.querySelector(".plusSign");

const minusSign = document.querySelector(".minusSign");

const multiplySign = document.querySelector(".multiply");

const divisionSign = document.querySelector(".divide");

const clear = document.querySelector(".clear");

const equal = document.querySelector(".equal");

// let numOne = (numTwo = operator = null);

/////////////////////////////////////////////////
// 1. Basic math operations

function add(a, b) {
  // Basic function that adds
  let result = a + b;

  return result;
}

function subtract(a, b) {
  // Basic function that subtracts
  let result = a - b;

  return result;
}

function multiply(a, b) {
  // Basic function that multiplies
  let result = a * b;

  return result;
}

function divide(a, b) {
  // Basic function that divides
  let result = a / b;

  return result;
}

// 2. Operate function (in case of a operator and the presence of two numbers, aplly the operation)

function operate(a, operator, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  } else {
    return "Operator not found";
  }
}

// display function when you click number buttons (store the "display value" in a variable)

let displayVariable;

let variable;

const display = document.querySelector(".display");

function displayValue() {
  let CurrentValue = this.textContent;

  // Display cases for when user clicks numbers from 10 to 19

  if (variable == 1 && CurrentValue == 2) {
    display.textContent = 12;
    variable = 12;
    return;
  }

  if (variable == 1 && CurrentValue == 3) {
    display.textContent = 13;
    variable = 13;
    return;
  }

  if (variable == 1 && CurrentValue == 4) {
    display.textContent = 14;
    variable = 14;
    return;
  }

  if (variable == 1 && CurrentValue == 5) {
    display.textContent = 15;
    variable = 15;
    return;
  }

  if (variable == 1 && CurrentValue == 6) {
    display.textContent = 16;
    variable = 16;
    return;
  }

  if (variable == 1 && CurrentValue == 7) {
    display.textContent = 17;
    variable = 17;
    return;
  }

  if (variable == 1 && CurrentValue == 8) {
    display.textContent = 18;
    variable = 18;
    return;
  }

  if (variable == 1 && CurrentValue == 9) {
    display.textContent = 19;
    variable = 19;
    return;
  }

  if (variable == 1 && CurrentValue == 0) {
    display.textContent = 10;
    variable = 10;
    return;
  }

  // Display cases for when user clicks numbers from 20 to 29

  if (variable == 2 && CurrentValue == 3) {
    display.textContent = 23;
    variable = 23;
    return;
  }

  if (variable == 2 && CurrentValue == 1) {
    display.textContent = 21;
    variable = 21;
    return;
  }

  if (variable == 2 && CurrentValue == 4) {
    display.textContent = 24;
    variable = 24;
    return;
  }

  if (variable == 2 && CurrentValue == 5) {
    display.textContent = 25;
    variable = 25;
    return;
  }

  if (variable == 2 && CurrentValue == 6) {
    display.textContent = 26;
    variable = 26;
    return;
  }

  if (variable == 2 && CurrentValue == 7) {
    display.textContent = 27;
    variable = 27;
    return;
  }

  if (variable == 2 && CurrentValue == 8) {
    display.textContent = 28;
    variable = 28;
    return;
  }

  if (variable == 2 && CurrentValue == 9) {
    display.textContent = 29;
    variable = 29;
    return;
  }

  if (variable == 2 && CurrentValue == 0) {
    display.textContent = 20;
    variable = 20;
    return;
  }

  // Display cases for when user clicks numbers from 30 to 39

  if (variable == 3 && CurrentValue == 1) {
    display.textContent = 31;
    variable = 31;
    return;
  }

  if (variable == 3 && CurrentValue == 2) {
    display.textContent = 32;
    variable = 32;
    return;
  }

  if (variable == 3 && CurrentValue == 4) {
    display.textContent = 34;
    variable = 34;
    return;
  }

  if (variable == 3 && CurrentValue == 5) {
    display.textContent = 35;
    variable = 35;
    return;
  }

  if (variable == 3 && CurrentValue == 6) {
    display.textContent = 36;
    variable = 36;
    return;
  }

  if (variable == 3 && CurrentValue == 7) {
    display.textContent = 37;
    variable = 37;
    return;
  }

  if (variable == 3 && CurrentValue == 8) {
    display.textContent = 38;
    variable = 38;
    return;
  }

  if (variable == 3 && CurrentValue == 9) {
    display.textContent = 39;
    variable = 39;
    return;
  }

  if (variable == 3 && CurrentValue == 0) {
    display.textContent = 30;
    variable = 30;
    return;
  }

  // Display cases for when user clicks numbers from 40 to 49

  if (variable == 4 && CurrentValue == 1) {
    display.textContent = 41;
    variable = 41;
    return;
  }

  if (variable == 4 && CurrentValue == 2) {
    display.textContent = 42;
    variable = 42;
    return;
  }

  if (variable == 4 && CurrentValue == 3) {
    display.textContent = 43;
    variable = 43;
    return;
  }

  if (variable == 4 && CurrentValue == 5) {
    display.textContent = 45;
    variable = 45;
    return;
  }

  if (variable == 4 && CurrentValue == 6) {
    display.textContent = 46;
    variable = 46;
    return;
  }

  if (variable == 4 && CurrentValue == 7) {
    display.textContent = 47;
    variable = 47;
    return;
  }

  if (variable == 4 && CurrentValue == 8) {
    display.textContent = 48;
    variable = 48;
    return;
  }

  if (variable == 4 && CurrentValue == 9) {
    display.textContent = 49;
    variable = 49;
    return;
  }

  if (variable == 4 && CurrentValue == 0) {
    display.textContent = 40;
    variable = 40;
    return;
  }

  // Display cases for when user clicks numbers from 50 to 59

  if (variable == 5 && CurrentValue == 1) {
    display.textContent = 51;
    variable = 51;
    return;
  }

  if (variable == 5 && CurrentValue == 2) {
    display.textContent = 52;
    variable = 52;
    return;
  }

  if (variable == 5 && CurrentValue == 3) {
    display.textContent = 53;
    variable = 53;
    return;
  }

  if (variable == 5 && CurrentValue == 4) {
    display.textContent = 54;
    variable = 54;
    return;
  }

  if (variable == 5 && CurrentValue == 6) {
    display.textContent = 56;
    variable = 56;
    return;
  }

  if (variable == 5 && CurrentValue == 7) {
    display.textContent = 57;
    variable = 57;
    return;
  }

  if (variable == 5 && CurrentValue == 8) {
    display.textContent = 58;
    variable = 58;
    return;
  }

  if (variable == 5 && CurrentValue == 9) {
    display.textContent = 59;
    variable = 59;
    return;
  }

  if (variable == 5 && CurrentValue == 0) {
    display.textContent = 50;
    variable = 50;
    return;
  }

  // Display cases for when user clicks numbers from 60 to 69

  if (variable == 6 && CurrentValue == 1) {
    display.textContent = 61;
    variable = 61;
    return;
  }

  if (variable == 6 && CurrentValue == 2) {
    display.textContent = 62;
    variable = 62;
    return;
  }

  if (variable == 6 && CurrentValue == 3) {
    display.textContent = 63;
    variable = 63;
    return;
  }

  if (variable == 6 && CurrentValue == 4) {
    display.textContent = 64;
    variable = 64;
    return;
  }

  if (variable == 6 && CurrentValue == 5) {
    display.textContent = 65;
    variable = 65;
    return;
  }

  if (variable == 6 && CurrentValue == 7) {
    display.textContent = 67;
    variable = 67;
    return;
  }

  if (variable == 6 && CurrentValue == 8) {
    display.textContent = 68;
    variable = 68;
    return;
  }

  if (variable == 6 && CurrentValue == 9) {
    display.textContent = 69;
    variable = 69;
    return;
  }

  if (variable == 6 && CurrentValue == 0) {
    display.textContent = 60;
    variable = 60;
    return;
  }

  // Display cases for when user clicks numbers from 70 to 79

  if (variable == 7 && CurrentValue == 1) {
    display.textContent = 71;
    variable = 71;
    return;
  }

  if (variable == 7 && CurrentValue == 2) {
    display.textContent = 72;
    variable = 72;
    return;
  }

  if (variable == 7 && CurrentValue == 3) {
    display.textContent = 73;
    variable = 73;
    return;
  }

  if (variable == 7 && CurrentValue == 4) {
    display.textContent = 74;
    variable = 74;
    return;
  }

  if (variable == 7 && CurrentValue == 5) {
    display.textContent = 75;
    variable = 75;
    return;
  }

  if (variable == 7 && CurrentValue == 6) {
    display.textContent = 76;
    variable = 76;
    return;
  }

  if (variable == 7 && CurrentValue == 8) {
    display.textContent = 78;
    variable = 78;
    return;
  }

  if (variable == 7 && CurrentValue == 9) {
    display.textContent = 79;
    variable = 79;
    return;
  }

  if (variable == 7 && CurrentValue == 0) {
    display.textContent = 70;
    variable = 70;
    return;
  }

  // Display cases for when user clicks numbers from 80 to 89

  if (variable == 8 && CurrentValue == 1) {
    display.textContent = 81;
    variable = 81;
    return;
  }

  if (variable == 8 && CurrentValue == 2) {
    display.textContent = 82;
    variable = 82;
    return;
  }

  if (variable == 8 && CurrentValue == 3) {
    display.textContent = 83;
    variable = 83;
    return;
  }

  if (variable == 8 && CurrentValue == 4) {
    display.textContent = 84;
    variable = 84;
    return;
  }

  if (variable == 8 && CurrentValue == 5) {
    display.textContent = 85;
    variable = 85;
    return;
  }

  if (variable == 8 && CurrentValue == 6) {
    display.textContent = 86;
    variable = 86;
    return;
  }

  if (variable == 8 && CurrentValue == 7) {
    display.textContent = 87;
    variable = 87;
    return;
  }

  if (variable == 8 && CurrentValue == 9) {
    display.textContent = 89;
    variable = 89;
    return;
  }

  if (variable == 8 && CurrentValue == 0) {
    display.textContent = 80;
    variable = 80;
    return;
  }

  // Display cases for when user clicks numbers from 90 to 99

  if (variable == 9 && CurrentValue == 1) {
    display.textContent = 91;
    variable = 91;
    return;
  }

  if (variable == 9 && CurrentValue == 2) {
    display.textContent = 92;
    variable = 92;
    return;
  }

  if (variable == 9 && CurrentValue == 3) {
    display.textContent = 93;
    variable = 93;
    return;
  }

  if (variable == 9 && CurrentValue == 4) {
    display.textContent = 94;
    variable = 94;
    return;
  }

  if (variable == 9 && CurrentValue == 5) {
    display.textContent = 95;
    variable = 95;
    return;
  }

  if (variable == 9 && CurrentValue == 6) {
    display.textContent = 96;
    variable = 96;
    return;
  }

  if (variable == 9 && CurrentValue == 7) {
    display.textContent = 97;
    variable = 97;
    return;
  }

  if (variable == 9 && CurrentValue == 8) {
    display.textContent = 98;
    variable = 98;
    return;
  }

  if (variable == 9 && CurrentValue == 0) {
    display.textContent = 90;
    variable = 90;
    return;
  }

  // Numbers from 1 to 9

  if (CurrentValue == 1) {
    display.textContent = 1;
    if (variable !== 1) return (variable = 1);
  } else if (CurrentValue == 2) {
    display.textContent = 2;
    if (variable !== 2) return (variable = 2);
  } else if (CurrentValue == 3) {
    display.textContent = 3;
    if (variable !== 3) return (variable = 3);
  } else if (CurrentValue == 4) {
    display.textContent = 4;
    if (variable !== 4) return (variable = 4);
  } else if (CurrentValue == 5) {
    display.textContent = 5;
    if (variable !== 5) return (variable = 5);
  } else if (CurrentValue == 6) {
    display.textContent = 6;
    if (variable !== 6) return (variable = 6);
  } else if (CurrentValue == 7) {
    display.textContent = 7;
    if (variable !== 7) return (variable = 7);
  } else if (CurrentValue == 8) {
    display.textContent = 8;
    if (variable !== 8) return (variable = 8);
  } else if (CurrentValue == 9) {
    display.textContent = 9;
    if (variable !== 9) return (variable = 9);
  } else if (CurrentValue == 0) {
    display.textContent = 0;
    variable = 0;
  } else {
    return "No such number";
  }

  // Display numbers (11, 22, 33 ,44 ,55 ,66 ,77, 88, 99)

  if (variable == 1 && CurrentValue == 1) {
    display.textContent = 11;
    variable = 11;
    return;
  }
  if (variable == 2 && CurrentValue == 2) {
    display.textContent = 22;
    variable = 22;
    return;
  }
  if (variable == 3 && CurrentValue == 3) {
    display.textContent = 33;
    variable = 33;
    return;
  }
  if (variable == 4 && CurrentValue == 4) {
    display.textContent = 44;
    variable = 44;
    return;
  }
  if (variable == 5 && CurrentValue == 5) {
    display.textContent = 55;
    variable = 55;
    return;
  }
  if (variable == 6 && CurrentValue == 6) {
    display.textContent = 66;
    variable = 66;
    return;
  }
  if (variable == 7 && CurrentValue == 7) {
    display.textContent = 77;
    variable = 77;
    return;
  }
  if (variable == 8 && CurrentValue == 8) {
    display.textContent = 88;
    variable = 88;
    return;
  }
  if (variable == 9 && CurrentValue == 9) {
    display.textContent = 99;
    variable = 99;
    return;
  }
}

// Store the first number that is input into the calculator when a user presses an operator

let a;

let intermediateResult;

let operator;

function displayOperator() {
  if (this.textContent == "+") {
    a = variable;

    document.querySelector(".display").textContent = "+";

    intermediateResult = a;

    operator = "+";

    variable = null;

    return;
  } else if (this.textContent == "-") {
    a = variable;

    document.querySelector(".display").textContent = "-";

    intermediateResult = a;

    operator = "-";

    variable = null;

    return;
  } else if (this.textContent == "*") {
    a = variable;

    document.querySelector(".display").textContent = "*";

    intermediateResult = a;

    operator = "*";

    variable = null;

    return;
  } else if (this.textContent == "/") {
    a = variable;

    document.querySelector(".display").textContent = "/";

    intermediateResult = a;

    operator = "/";

    variable = null;

    return;
  }
}

let result;

function calculate() {
  if (intermediateResult && operator == "+") {
    result = operate(intermediateResult, "+", variable);

    display.textContent = result;

    operator = null;

    return;
  }
  if (intermediateResult && operator == "-") {
    result = operate(intermediateResult, "-", variable);

    display.textContent = result;

    operator = null;

    return;
  }

  if (intermediateResult && operator == "*") {
    result = operate(intermediateResult, "*", variable);

    display.textContent = result;

    operator = null;

    return;
  }
  if (intermediateResult && operator == "/") {
    result = operate(intermediateResult, "/", variable);

    display.textContent = result;

    operator = null;

    return;
  }
}

function Clear() {
  a = null;

  intermediateResult = null;

  operator = null;

  result = null;

  displayVariable = null;

  variable = null;

  display.textContent = "";
}

// Event Listener's
numberOne.addEventListener("click", displayValue);

numberTwo.addEventListener("click", displayValue);

numberThree.addEventListener("click", displayValue);

numberFour.addEventListener("click", displayValue);

numberFive.addEventListener("click", displayValue);

numberSix.addEventListener("click", displayValue);

numberSeven.addEventListener("click", displayValue);

numberEight.addEventListener("click", displayValue);

numberNine.addEventListener("click", displayValue);

numberZero.addEventListener("click", displayValue);

plusSign.addEventListener("click", displayOperator);

minusSign.addEventListener("click", displayOperator);

multiplySign.addEventListener("click", displayOperator);

divisionSign.addEventListener("click", displayOperator);

equal.addEventListener("click", calculate);

clear.addEventListener("click", Clear);

// save wich operation has been chosen and then operate() on them when the user presses the "=" key
