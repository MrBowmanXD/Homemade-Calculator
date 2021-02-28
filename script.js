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
const display = document.querySelector(".display");

/////////////////////////////////////////////////
// 1. Basic math operations

function add(a, b) {
  // Basic function that adds
  let resultado = a + b;

  return resultado;
}

function subtract(a, b) {
  // Basic function that subtracts
  let resultado = a - b;

  return resultado;
}

function multiply(a, b) {
  // Basic function that multiplies
  let resultado = a * b;

  return resultado;
}

function divide(a, b) {
  // Basic function that divides
  let resultado = a / b;

  return resultado;
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

function displayValue() {
  let CurrentValue = this.textContent;

  if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "*" ||
    display.textContent === "/"
  ) {
    display.textContent = "";
  }

  display.textContent += CurrentValue;

  variable = display.textContent;
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

let anotherResult;

let anotherAnotherResult;

function calculate() {
  // Third piece of logic

  if (anotherResult && operator == "+") {
    anotherAnotherResult = operate(
      parseInt(anotherResult, 10),
      "+",
      parseInt(variable, 10)
    );
    display.textContent = anotherAnotherResult;
    operator = null;
    return;
  }

  if (anotherResult && operator == "-") {
    anotherAnotherResult = operate(
      parseInt(anotherResult, 10),
      "-",
      parseInt(variable, 10)
    );
    display.textContent = anotherAnotherResult;
    operator = null;
    return;
  }

  if (anotherResult && operator == "*") {
    anotherAnotherResult = operate(
      parseInt(anotherResult, 10),
      "*",
      parseInt(variable, 10)
    );
    display.textContent = anotherAnotherResult;
    operator = null;
    return;
  }

  if (anotherResult && operator == "/") {
    anotherAnotherResult = operate(
      parseInt(anotherResult, 10),
      "/",
      parseInt(variable, 10)
    );
    display.textContent = anotherAnotherResult;
    operator = null;
    return;
  }

  // Second piece of logic

  if (result && operator == "+") {
    anotherResult = operate(parseInt(result, 10), "+", parseInt(variable, 10));
    display.textContent = anotherResult;
    operator = null;
    return;
  }

  if (result && operator == "-") {
    anotherResult = operate(parseInt(result, 10), "-", parseInt(variable, 10));
    display.textContent = anotherResult;
    operator = null;
    return;
  }

  if (result && operator == "*") {
    anotherResult = operate(parseInt(result, 10), "*", parseInt(variable, 10));
    display.textContent = anotherResult;
    operator = null;
    return;
  }

  if (result && operator == "/") {
    anotherResult = operate(parseInt(result, 10), "/", parseInt(variable, 10));
    display.textContent = anotherResult;
    operator = null;
    return;
  }

  // First piece of logic
  if (intermediateResult && operator == "+") {
    result = operate(
      parseInt(intermediateResult, 10),
      "+",
      parseInt(variable, 10)
    );
    display.textContent = result;
    operator = null;
    return;
  }
  if (intermediateResult && operator == "-") {
    result = operate(
      parseInt(intermediateResult, 10),
      "-",
      parseInt(variable, 10)
    );
    display.textContent = result;
    operator = null;
    return;
  }

  if (intermediateResult && operator == "*") {
    result = operate(
      parseInt(intermediateResult, 10),
      "*",
      parseInt(variable, 10)
    );
    display.textContent = result;
    operator = null;
    return;
  }
  if (intermediateResult && operator == "/") {
    result = operate(
      parseInt(intermediateResult, 10),
      "/",
      parseInt(variable, 10)
    );
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
  anotherResult = null;
  anotherAnotherResult = null;
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
