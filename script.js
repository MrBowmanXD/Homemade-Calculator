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

  // Display cases for when user clicks numbers from 200 to 209

  if (variable == 20 && CurrentValue == 0) {
    display.textContent = 200;
    variable = 200;
    return;
  }

  if (variable == 20 && CurrentValue == 1) {
    display.textContent = 201;
    variable = 201;
    return;
  }

  if (variable == 20 && CurrentValue == 2) {
    display.textContent = 202;
    variable = 202;
    return;
  }

  if (variable == 20 && CurrentValue == 3) {
    display.textContent = 203;
    variable = 203;
    return;
  }

  if (variable == 20 && CurrentValue == 4) {
    display.textContent = 204;
    variable = 204;
    return;
  }

  if (variable == 20 && CurrentValue == 5) {
    display.textContent = 205;
    variable = 205;
    return;
  }

  if (variable == 20 && CurrentValue == 6) {
    display.textContent = 206;
    variable = 206;
    return;
  }

  if (variable == 20 && CurrentValue == 7) {
    display.textContent = 207;
    variable = 207;
    return;
  }

  if (variable == 20 && CurrentValue == 8) {
    display.textContent = 208;
    variable = 208;
    return;
  }

  if (variable == 20 && CurrentValue == 9) {
    display.textContent = 209;
    variable = 209;
    return;
  }

  // Display cases for when user clicks numbers from 120 to 129

  if (variable == 21 && CurrentValue == 0) {
    display.textContent = 210;
    variable = 210;
    return;
  }

  if (variable == 21 && CurrentValue == 1) {
    display.textContent = 211;
    variable = 211;
    return;
  }

  if (variable == 21 && CurrentValue == 2) {
    display.textContent = 212;
    variable = 212;
    return;
  }

  if (variable == 21 && CurrentValue == 3) {
    display.textContent = 213;
    variable = 213;
    return;
  }

  if (variable == 21 && CurrentValue == 4) {
    display.textContent = 214;
    variable = 214;
    return;
  }

  if (variable == 21 && CurrentValue == 5) {
    display.textContent = 215;
    variable = 215;
    return;
  }

  if (variable == 21 && CurrentValue == 6) {
    display.textContent = 216;
    variable = 216;
    return;
  }

  if (variable == 21 && CurrentValue == 7) {
    display.textContent = 217;
    variable = 217;
    return;
  }

  if (variable == 21 && CurrentValue == 8) {
    display.textContent = 218;
    variable = 218;
    return;
  }

  if (variable == 21 && CurrentValue == 9) {
    display.textContent = 219;
    variable = 219;
    return;
  }

  // Display cases for when user clicks numbers from 220 to 229

  if (variable == 22 && CurrentValue == 0) {
    display.textContent = 220;
    variable = 220;
    return;
  }

  if (variable == 22 && CurrentValue == 1) {
    display.textContent = 221;
    variable = 221;
    return;
  }

  if (variable == 22 && CurrentValue == 2) {
    display.textContent = 222;
    variable = 222;
    return;
  }

  if (variable == 22 && CurrentValue == 3) {
    display.textContent = 223;
    variable = 223;
    return;
  }

  if (variable == 22 && CurrentValue == 4) {
    display.textContent = 224;
    variable = 224;
    return;
  }

  if (variable == 22 && CurrentValue == 5) {
    display.textContent = 225;
    variable = 225;
    return;
  }

  if (variable == 22 && CurrentValue == 6) {
    display.textContent = 226;
    variable = 226;
    return;
  }

  if (variable == 22 && CurrentValue == 7) {
    display.textContent = 227;
    variable = 227;
    return;
  }

  if (variable == 22 && CurrentValue == 8) {
    display.textContent = 228;
    variable = 228;
    return;
  }

  if (variable == 22 && CurrentValue == 9) {
    display.textContent = 229;
    variable = 229;
    return;
  }

  // Display cases for when user clicks numbers from 230 to 239

  if (variable == 23 && CurrentValue == 0) {
    display.textContent = 230;
    variable = 230;
    return;
  }

  if (variable == 23 && CurrentValue == 1) {
    display.textContent = 231;
    variable = 231;
    return;
  }

  if (variable == 23 && CurrentValue == 2) {
    display.textContent = 232;
    variable = 232;
    return;
  }

  if (variable == 23 && CurrentValue == 3) {
    display.textContent = 233;
    variable = 233;
    return;
  }

  if (variable == 23 && CurrentValue == 4) {
    display.textContent = 234;
    variable = 234;
    return;
  }

  if (variable == 23 && CurrentValue == 5) {
    display.textContent = 235;
    variable = 235;
    return;
  }

  if (variable == 23 && CurrentValue == 6) {
    display.textContent = 236;
    variable = 236;
    return;
  }

  if (variable == 23 && CurrentValue == 7) {
    display.textContent = 237;
    variable = 237;
    return;
  }

  if (variable == 23 && CurrentValue == 8) {
    display.textContent = 238;
    variable = 238;
    return;
  }

  if (variable == 23 && CurrentValue == 9) {
    display.textContent = 239;
    variable = 239;
    return;
  }

  // Display cases for when user clicks numbers from 240 to 249

  if (variable == 24 && CurrentValue == 0) {
    display.textContent = 240;
    variable = 240;
    return;
  }

  if (variable == 24 && CurrentValue == 1) {
    display.textContent = 241;
    variable = 241;
    return;
  }

  if (variable == 24 && CurrentValue == 2) {
    display.textContent = 242;
    variable = 242;
    return;
  }

  if (variable == 24 && CurrentValue == 3) {
    display.textContent = 243;
    variable = 243;
    return;
  }

  if (variable == 24 && CurrentValue == 4) {
    display.textContent = 244;
    variable = 244;
    return;
  }

  if (variable == 24 && CurrentValue == 5) {
    display.textContent = 245;
    variable = 245;
    return;
  }

  if (variable == 24 && CurrentValue == 6) {
    display.textContent = 246;
    variable = 246;
    return;
  }

  if (variable == 24 && CurrentValue == 7) {
    display.textContent = 247;
    variable = 247;
    return;
  }

  if (variable == 24 && CurrentValue == 8) {
    display.textContent = 248;
    variable = 248;
    return;
  }

  if (variable == 24 && CurrentValue == 9) {
    display.textContent = 249;
    variable = 249;
    return;
  }

  // Display cases for when user clicks numbers from 250 to 259

  if (variable == 25 && CurrentValue == 0) {
    display.textContent = 250;
    variable = 250;
    return;
  }

  if (variable == 25 && CurrentValue == 1) {
    display.textContent = 251;
    variable = 251;
    return;
  }

  if (variable == 25 && CurrentValue == 2) {
    display.textContent = 252;
    variable = 252;
    return;
  }

  if (variable == 25 && CurrentValue == 3) {
    display.textContent = 253;
    variable = 253;
    return;
  }

  if (variable == 25 && CurrentValue == 4) {
    display.textContent = 254;
    variable = 254;
    return;
  }

  if (variable == 25 && CurrentValue == 5) {
    display.textContent = 255;
    variable = 255;
    return;
  }

  if (variable == 25 && CurrentValue == 6) {
    display.textContent = 256;
    variable = 256;
    return;
  }

  if (variable == 25 && CurrentValue == 7) {
    display.textContent = 257;
    variable = 257;
    return;
  }

  if (variable == 25 && CurrentValue == 8) {
    display.textContent = 258;
    variable = 258;
    return;
  }

  if (variable == 25 && CurrentValue == 9) {
    display.textContent = 259;
    variable = 259;
    return;
  }

  // Display cases for when user clicks numbers from 260 to 269

  if (variable == 26 && CurrentValue == 0) {
    display.textContent = 260;
    variable = 260;
    return;
  }

  if (variable == 26 && CurrentValue == 1) {
    display.textContent = 261;
    variable = 261;
    return;
  }

  if (variable == 26 && CurrentValue == 2) {
    display.textContent = 262;
    variable = 262;
    return;
  }

  if (variable == 26 && CurrentValue == 3) {
    display.textContent = 263;
    variable = 263;
    return;
  }

  if (variable == 26 && CurrentValue == 4) {
    display.textContent = 264;
    variable = 264;
    return;
  }

  if (variable == 26 && CurrentValue == 5) {
    display.textContent = 265;
    variable = 265;
    return;
  }

  if (variable == 26 && CurrentValue == 6) {
    display.textContent = 266;
    variable = 266;
    return;
  }

  if (variable == 26 && CurrentValue == 7) {
    display.textContent = 267;
    variable = 267;
    return;
  }

  if (variable == 26 && CurrentValue == 8) {
    display.textContent = 268;
    variable = 268;
    return;
  }

  if (variable == 26 && CurrentValue == 9) {
    display.textContent = 269;
    variable = 269;
    return;
  }

  // Display cases for when user clicks numbers from 270 to 279

  if (variable == 27 && CurrentValue == 0) {
    display.textContent = 270;
    variable = 270;
    return;
  }

  if (variable == 27 && CurrentValue == 1) {
    display.textContent = 271;
    variable = 271;
    return;
  }

  if (variable == 27 && CurrentValue == 2) {
    display.textContent = 272;
    variable = 272;
    return;
  }

  if (variable == 27 && CurrentValue == 3) {
    display.textContent = 273;
    variable = 273;
    return;
  }

  if (variable == 27 && CurrentValue == 4) {
    display.textContent = 274;
    variable = 274;
    return;
  }

  if (variable == 27 && CurrentValue == 5) {
    display.textContent = 275;
    variable = 275;
    return;
  }

  if (variable == 27 && CurrentValue == 6) {
    display.textContent = 276;
    variable = 276;
    return;
  }

  if (variable == 27 && CurrentValue == 7) {
    display.textContent = 277;
    variable = 277;
    return;
  }

  if (variable == 27 && CurrentValue == 8) {
    display.textContent = 278;
    variable = 278;
    return;
  }

  if (variable == 27 && CurrentValue == 9) {
    display.textContent = 279;
    variable = 279;
    return;
  }

  // Display cases for when user clicks numbers from 280 to 289

  if (variable == 28 && CurrentValue == 0) {
    display.textContent = 280;
    variable = 280;
    return;
  }

  if (variable == 28 && CurrentValue == 1) {
    display.textContent = 281;
    variable = 281;
    return;
  }

  if (variable == 28 && CurrentValue == 2) {
    display.textContent = 282;
    variable = 282;
    return;
  }

  if (variable == 28 && CurrentValue == 3) {
    display.textContent = 283;
    variable = 283;
    return;
  }

  if (variable == 28 && CurrentValue == 4) {
    display.textContent = 284;
    variable = 284;
    return;
  }

  if (variable == 28 && CurrentValue == 5) {
    display.textContent = 285;
    variable = 285;
    return;
  }

  if (variable == 28 && CurrentValue == 6) {
    display.textContent = 286;
    variable = 286;
    return;
  }

  if (variable == 28 && CurrentValue == 7) {
    display.textContent = 287;
    variable = 287;
    return;
  }

  if (variable == 28 && CurrentValue == 8) {
    display.textContent = 288;
    variable = 288;
    return;
  }

  if (variable == 28 && CurrentValue == 9) {
    display.textContent = 289;
    variable = 289;
    return;
  }

  // Display cases for when user clicks numbers from 290 to 299

  if (variable == 29 && CurrentValue == 0) {
    display.textContent = 290;
    variable = 290;
    return;
  }

  if (variable == 29 && CurrentValue == 1) {
    display.textContent = 291;
    variable = 291;
    return;
  }

  if (variable == 29 && CurrentValue == 2) {
    display.textContent = 292;
    variable = 292;
    return;
  }

  if (variable == 29 && CurrentValue == 3) {
    display.textContent = 293;
    variable = 293;
    return;
  }

  if (variable == 29 && CurrentValue == 4) {
    display.textContent = 294;
    variable = 294;
    return;
  }

  if (variable == 29 && CurrentValue == 5) {
    display.textContent = 295;
    variable = 295;
    return;
  }

  if (variable == 29 && CurrentValue == 6) {
    display.textContent = 296;
    variable = 296;
    return;
  }

  if (variable == 29 && CurrentValue == 7) {
    display.textContent = 297;
    variable = 297;
    return;
  }

  if (variable == 29 && CurrentValue == 8) {
    display.textContent = 298;
    variable = 298;
    return;
  }

  if (variable == 29 && CurrentValue == 9) {
    display.textContent = 299;
    variable = 299;
    return;
  }

  // Display cases for when user clicks numbers from 100 to 109

  if (variable == 10 && CurrentValue == 0) {
    display.textContent = 100;
    variable = 100;
    return;
  }

  if (variable == 10 && CurrentValue == 1) {
    display.textContent = 101;
    variable = 101;
    return;
  }

  if (variable == 10 && CurrentValue == 2) {
    display.textContent = 102;
    variable = 102;
    return;
  }

  if (variable == 10 && CurrentValue == 3) {
    display.textContent = 103;
    variable = 103;
    return;
  }

  if (variable == 10 && CurrentValue == 4) {
    display.textContent = 104;
    variable = 104;
    return;
  }

  if (variable == 10 && CurrentValue == 5) {
    display.textContent = 105;
    variable = 105;
    return;
  }

  if (variable == 10 && CurrentValue == 6) {
    display.textContent = 106;
    variable = 106;
    return;
  }

  if (variable == 10 && CurrentValue == 7) {
    display.textContent = 107;
    variable = 107;
    return;
  }

  if (variable == 10 && CurrentValue == 8) {
    display.textContent = 108;
    variable = 108;
    return;
  }

  if (variable == 10 && CurrentValue == 9) {
    display.textContent = 109;
    variable = 109;
    return;
  }

  // Display cases for when user clicks numbers from 110 to 119

  if (variable == 11 && CurrentValue == 0) {
    display.textContent = 110;
    variable = 110;
    return;
  }

  if (variable == 11 && CurrentValue == 1) {
    display.textContent = 111;
    variable = 111;
    return;
  }

  if (variable == 11 && CurrentValue == 2) {
    display.textContent = 112;
    variable = 112;
    return;
  }

  if (variable == 11 && CurrentValue == 3) {
    display.textContent = 113;
    variable = 113;
    return;
  }

  if (variable == 11 && CurrentValue == 4) {
    display.textContent = 114;
    variable = 114;
    return;
  }

  if (variable == 11 && CurrentValue == 5) {
    display.textContent = 115;
    variable = 115;
    return;
  }

  if (variable == 11 && CurrentValue == 6) {
    display.textContent = 116;
    variable = 116;
    return;
  }

  if (variable == 11 && CurrentValue == 7) {
    display.textContent = 117;
    variable = 117;
    return;
  }

  if (variable == 11 && CurrentValue == 8) {
    display.textContent = 118;
    variable = 118;
    return;
  }

  if (variable == 11 && CurrentValue == 9) {
    display.textContent = 119;
    variable = 119;
    return;
  }

  // Display cases for when user clicks numbers from 120 to 129

  if (variable == 12 && CurrentValue == 0) {
    display.textContent = 120;
    variable = 120;
    return;
  }

  if (variable == 12 && CurrentValue == 1) {
    display.textContent = 121;
    variable = 121;
    return;
  }

  if (variable == 12 && CurrentValue == 2) {
    display.textContent = 122;
    variable = 122;
    return;
  }

  if (variable == 12 && CurrentValue == 3) {
    display.textContent = 123;
    variable = 123;
    return;
  }

  if (variable == 12 && CurrentValue == 4) {
    display.textContent = 124;
    variable = 124;
    return;
  }

  if (variable == 12 && CurrentValue == 5) {
    display.textContent = 125;
    variable = 125;
    return;
  }

  if (variable == 12 && CurrentValue == 6) {
    display.textContent = 126;
    variable = 126;
    return;
  }

  if (variable == 12 && CurrentValue == 7) {
    display.textContent = 127;
    variable = 127;
    return;
  }

  if (variable == 12 && CurrentValue == 8) {
    display.textContent = 128;
    variable = 128;
    return;
  }

  if (variable == 12 && CurrentValue == 9) {
    display.textContent = 129;
    variable = 129;
    return;
  }

  // Display cases for when user clicks numbers from 130 to 139

  if (variable == 13 && CurrentValue == 0) {
    display.textContent = 130;
    variable = 130;
    return;
  }

  if (variable == 13 && CurrentValue == 1) {
    display.textContent = 131;
    variable = 131;
    return;
  }

  if (variable == 13 && CurrentValue == 2) {
    display.textContent = 132;
    variable = 132;
    return;
  }

  if (variable == 13 && CurrentValue == 3) {
    display.textContent = 133;
    variable = 133;
    return;
  }

  if (variable == 13 && CurrentValue == 4) {
    display.textContent = 134;
    variable = 134;
    return;
  }

  if (variable == 13 && CurrentValue == 5) {
    display.textContent = 135;
    variable = 135;
    return;
  }

  if (variable == 13 && CurrentValue == 6) {
    display.textContent = 136;
    variable = 136;
    return;
  }

  if (variable == 13 && CurrentValue == 7) {
    display.textContent = 137;
    variable = 137;
    return;
  }

  if (variable == 13 && CurrentValue == 8) {
    display.textContent = 138;
    variable = 138;
    return;
  }

  if (variable == 13 && CurrentValue == 9) {
    display.textContent = 139;
    variable = 139;
    return;
  }

  // Display cases for when user clicks numbers from 140 to 149

  if (variable == 14 && CurrentValue == 0) {
    display.textContent = 140;
    variable = 140;
    return;
  }

  if (variable == 14 && CurrentValue == 1) {
    display.textContent = 141;
    variable = 141;
    return;
  }

  if (variable == 14 && CurrentValue == 2) {
    display.textContent = 142;
    variable = 142;
    return;
  }

  if (variable == 14 && CurrentValue == 3) {
    display.textContent = 143;
    variable = 143;
    return;
  }

  if (variable == 14 && CurrentValue == 4) {
    display.textContent = 144;
    variable = 144;
    return;
  }

  if (variable == 14 && CurrentValue == 5) {
    display.textContent = 145;
    variable = 145;
    return;
  }

  if (variable == 14 && CurrentValue == 6) {
    display.textContent = 146;
    variable = 146;
    return;
  }

  if (variable == 14 && CurrentValue == 7) {
    display.textContent = 147;
    variable = 147;
    return;
  }

  if (variable == 14 && CurrentValue == 8) {
    display.textContent = 148;
    variable = 148;
    return;
  }

  if (variable == 14 && CurrentValue == 9) {
    display.textContent = 149;
    variable = 149;
    return;
  }

  // Display cases for when user clicks numbers from 150 to 159

  if (variable == 15 && CurrentValue == 0) {
    display.textContent = 150;
    variable = 150;
    return;
  }

  if (variable == 15 && CurrentValue == 1) {
    display.textContent = 151;
    variable = 151;
    return;
  }

  if (variable == 15 && CurrentValue == 2) {
    display.textContent = 152;
    variable = 152;
    return;
  }

  if (variable == 15 && CurrentValue == 3) {
    display.textContent = 153;
    variable = 153;
    return;
  }

  if (variable == 15 && CurrentValue == 4) {
    display.textContent = 154;
    variable = 154;
    return;
  }

  if (variable == 15 && CurrentValue == 5) {
    display.textContent = 155;
    variable = 155;
    return;
  }

  if (variable == 15 && CurrentValue == 6) {
    display.textContent = 156;
    variable = 156;
    return;
  }

  if (variable == 15 && CurrentValue == 7) {
    display.textContent = 157;
    variable = 157;
    return;
  }

  if (variable == 15 && CurrentValue == 8) {
    display.textContent = 158;
    variable = 158;
    return;
  }

  if (variable == 15 && CurrentValue == 9) {
    display.textContent = 159;
    variable = 159;
    return;
  }

  // Display cases for when user clicks numbers from 160 to 169

  if (variable == 16 && CurrentValue == 0) {
    display.textContent = 160;
    variable = 160;
    return;
  }

  if (variable == 16 && CurrentValue == 1) {
    display.textContent = 161;
    variable = 161;
    return;
  }

  if (variable == 16 && CurrentValue == 2) {
    display.textContent = 162;
    variable = 162;
    return;
  }

  if (variable == 16 && CurrentValue == 3) {
    display.textContent = 163;
    variable = 163;
    return;
  }

  if (variable == 16 && CurrentValue == 4) {
    display.textContent = 164;
    variable = 164;
    return;
  }

  if (variable == 16 && CurrentValue == 5) {
    display.textContent = 165;
    variable = 165;
    return;
  }

  if (variable == 16 && CurrentValue == 6) {
    display.textContent = 166;
    variable = 166;
    return;
  }

  if (variable == 16 && CurrentValue == 7) {
    display.textContent = 167;
    variable = 167;
    return;
  }

  if (variable == 16 && CurrentValue == 8) {
    display.textContent = 168;
    variable = 168;
    return;
  }

  if (variable == 16 && CurrentValue == 9) {
    display.textContent = 169;
    variable = 169;
    return;
  }

  // Display cases for when user clicks numbers from 170 to 179

  if (variable == 17 && CurrentValue == 0) {
    display.textContent = 170;
    variable = 170;
    return;
  }

  if (variable == 17 && CurrentValue == 1) {
    display.textContent = 171;
    variable = 171;
    return;
  }

  if (variable == 17 && CurrentValue == 2) {
    display.textContent = 172;
    variable = 172;
    return;
  }

  if (variable == 17 && CurrentValue == 3) {
    display.textContent = 173;
    variable = 173;
    return;
  }

  if (variable == 17 && CurrentValue == 4) {
    display.textContent = 174;
    variable = 174;
    return;
  }

  if (variable == 17 && CurrentValue == 5) {
    display.textContent = 175;
    variable = 175;
    return;
  }

  if (variable == 17 && CurrentValue == 6) {
    display.textContent = 176;
    variable = 176;
    return;
  }

  if (variable == 17 && CurrentValue == 7) {
    display.textContent = 177;
    variable = 177;
    return;
  }

  if (variable == 17 && CurrentValue == 8) {
    display.textContent = 178;
    variable = 178;
    return;
  }

  if (variable == 17 && CurrentValue == 9) {
    display.textContent = 179;
    variable = 179;
    return;
  }

  // Display cases for when user clicks numbers from 180 to 189

  if (variable == 18 && CurrentValue == 0) {
    display.textContent = 180;
    variable = 180;
    return;
  }

  if (variable == 18 && CurrentValue == 1) {
    display.textContent = 181;
    variable = 181;
    return;
  }

  if (variable == 18 && CurrentValue == 2) {
    display.textContent = 182;
    variable = 182;
    return;
  }

  if (variable == 18 && CurrentValue == 3) {
    display.textContent = 183;
    variable = 183;
    return;
  }

  if (variable == 18 && CurrentValue == 4) {
    display.textContent = 184;
    variable = 184;
    return;
  }

  if (variable == 18 && CurrentValue == 5) {
    display.textContent = 185;
    variable = 185;
    return;
  }

  if (variable == 18 && CurrentValue == 6) {
    display.textContent = 186;
    variable = 186;
    return;
  }

  if (variable == 18 && CurrentValue == 7) {
    display.textContent = 187;
    variable = 187;
    return;
  }

  if (variable == 18 && CurrentValue == 8) {
    display.textContent = 188;
    variable = 188;
    return;
  }

  if (variable == 18 && CurrentValue == 9) {
    display.textContent = 189;
    variable = 189;
    return;
  }

  // Display cases for when user clicks numbers from 190 to 199

  if (variable == 19 && CurrentValue == 0) {
    display.textContent = 190;
    variable = 190;
    return;
  }

  if (variable == 19 && CurrentValue == 1) {
    display.textContent = 191;
    variable = 191;
    return;
  }

  if (variable == 19 && CurrentValue == 2) {
    display.textContent = 192;
    variable = 192;
    return;
  }

  if (variable == 19 && CurrentValue == 3) {
    display.textContent = 193;
    variable = 193;
    return;
  }

  if (variable == 19 && CurrentValue == 4) {
    display.textContent = 194;
    variable = 194;
    return;
  }

  if (variable == 19 && CurrentValue == 5) {
    display.textContent = 195;
    variable = 195;
    return;
  }

  if (variable == 19 && CurrentValue == 6) {
    display.textContent = 196;
    variable = 196;
    return;
  }

  if (variable == 19 && CurrentValue == 7) {
    display.textContent = 197;
    variable = 197;
    return;
  }

  if (variable == 19 && CurrentValue == 8) {
    display.textContent = 198;
    variable = 198;
    return;
  }

  if (variable == 19 && CurrentValue == 9) {
    display.textContent = 199;
    variable = 199;
    return;
  }

  // Display cases for when user clicks numbers from 300 to 309

  if (variable == 30 && CurrentValue == 0) {
    display.textContent = 300;
    variable = 300;
    return;
  }

  if (variable == 30 && CurrentValue == 1) {
    display.textContent = 301;
    variable = 301;
    return;
  }

  if (variable == 30 && CurrentValue == 2) {
    display.textContent = 302;
    variable = 302;
    return;
  }

  if (variable == 30 && CurrentValue == 3) {
    display.textContent = 303;
    variable = 303;
    return;
  }

  if (variable == 30 && CurrentValue == 4) {
    display.textContent = 304;
    variable = 304;
    return;
  }

  if (variable == 30 && CurrentValue == 5) {
    display.textContent = 305;
    variable = 305;
    return;
  }

  if (variable == 30 && CurrentValue == 6) {
    display.textContent = 306;
    variable = 306;
    return;
  }

  if (variable == 30 && CurrentValue == 7) {
    display.textContent = 307;
    variable = 307;
    return;
  }

  if (variable == 30 && CurrentValue == 8) {
    display.textContent = 308;
    variable = 308;
    return;
  }

  if (variable == 30 && CurrentValue == 9) {
    display.textContent = 309;
    variable = 309;
    return;
  }

  // Display cases for when user clicks numbers from 110 to 119

  if (variable == 31 && CurrentValue == 0) {
    display.textContent = 310;
    variable = 310;
    return;
  }

  if (variable == 31 && CurrentValue == 1) {
    display.textContent = 311;
    variable = 311;
    return;
  }

  if (variable == 31 && CurrentValue == 2) {
    display.textContent = 312;
    variable = 312;
    return;
  }

  if (variable == 31 && CurrentValue == 3) {
    display.textContent = 313;
    variable = 313;
    return;
  }

  if (variable == 31 && CurrentValue == 4) {
    display.textContent = 314;
    variable = 314;
    return;
  }

  if (variable == 31 && CurrentValue == 5) {
    display.textContent = 315;
    variable = 315;
    return;
  }

  if (variable == 31 && CurrentValue == 6) {
    display.textContent = 316;
    variable = 316;
    return;
  }

  if (variable == 31 && CurrentValue == 7) {
    display.textContent = 317;
    variable = 317;
    return;
  }

  if (variable == 31 && CurrentValue == 8) {
    display.textContent = 318;
    variable = 318;
    return;
  }

  if (variable == 31 && CurrentValue == 9) {
    display.textContent = 319;
    variable = 319;
    return;
  }

  // Display cases for when user clicks numbers from 320 to 329

  if (variable == 32 && CurrentValue == 0) {
    display.textContent = 320;
    variable = 320;
    return;
  }

  if (variable == 32 && CurrentValue == 1) {
    display.textContent = 321;
    variable = 321;
    return;
  }

  if (variable == 32 && CurrentValue == 2) {
    display.textContent = 322;
    variable = 322;
    return;
  }

  if (variable == 32 && CurrentValue == 3) {
    display.textContent = 323;
    variable = 323;
    return;
  }

  if (variable == 32 && CurrentValue == 4) {
    display.textContent = 324;
    variable = 324;
    return;
  }

  if (variable == 32 && CurrentValue == 5) {
    display.textContent = 325;
    variable = 325;
    return;
  }

  if (variable == 32 && CurrentValue == 6) {
    display.textContent = 326;
    variable = 326;
    return;
  }

  if (variable == 32 && CurrentValue == 7) {
    display.textContent = 327;
    variable = 327;
    return;
  }

  if (variable == 32 && CurrentValue == 8) {
    display.textContent = 328;
    variable = 328;
    return;
  }

  if (variable == 32 && CurrentValue == 9) {
    display.textContent = 329;
    variable = 329;
    return;
  }

  // Display cases for when user clicks numbers from 330 to 339

  if (variable == 33 && CurrentValue == 0) {
    display.textContent = 330;
    variable = 330;
    return;
  }

  if (variable == 33 && CurrentValue == 1) {
    display.textContent = 331;
    variable = 331;
    return;
  }

  if (variable == 33 && CurrentValue == 2) {
    display.textContent = 332;
    variable = 332;
    return;
  }

  if (variable == 33 && CurrentValue == 3) {
    display.textContent = 333;
    variable = 333;
    return;
  }

  if (variable == 33 && CurrentValue == 4) {
    display.textContent = 334;
    variable = 334;
    return;
  }

  if (variable == 33 && CurrentValue == 5) {
    display.textContent = 335;
    variable = 335;
    return;
  }

  if (variable == 33 && CurrentValue == 6) {
    display.textContent = 336;
    variable = 336;
    return;
  }

  if (variable == 33 && CurrentValue == 7) {
    display.textContent = 337;
    variable = 337;
    return;
  }

  if (variable == 33 && CurrentValue == 8) {
    display.textContent = 338;
    variable = 338;
    return;
  }

  if (variable == 33 && CurrentValue == 9) {
    display.textContent = 339;
    variable = 339;
    return;
  }

  // Display cases for when user clicks numbers from 340 to 349

  if (variable == 34 && CurrentValue == 0) {
    display.textContent = 340;
    variable = 340;
    return;
  }

  if (variable == 34 && CurrentValue == 1) {
    display.textContent = 341;
    variable = 341;
    return;
  }

  if (variable == 34 && CurrentValue == 2) {
    display.textContent = 342;
    variable = 342;
    return;
  }

  if (variable == 34 && CurrentValue == 3) {
    display.textContent = 343;
    variable = 343;
    return;
  }

  if (variable == 34 && CurrentValue == 4) {
    display.textContent = 344;
    variable = 344;
    return;
  }

  if (variable == 34 && CurrentValue == 5) {
    display.textContent = 345;
    variable = 345;
    return;
  }

  if (variable == 34 && CurrentValue == 6) {
    display.textContent = 346;
    variable = 346;
    return;
  }

  if (variable == 34 && CurrentValue == 7) {
    display.textContent = 347;
    variable = 347;
    return;
  }

  if (variable == 34 && CurrentValue == 8) {
    display.textContent = 348;
    variable = 348;
    return;
  }

  if (variable == 34 && CurrentValue == 9) {
    display.textContent = 349;
    variable = 349;
    return;
  }

  // Display cases for when user clicks numbers from 350 to 359

  if (variable == 35 && CurrentValue == 0) {
    display.textContent = 350;
    variable = 350;
    return;
  }

  if (variable == 35 && CurrentValue == 1) {
    display.textContent = 351;
    variable = 351;
    return;
  }

  if (variable == 35 && CurrentValue == 2) {
    display.textContent = 352;
    variable = 352;
    return;
  }

  if (variable == 35 && CurrentValue == 3) {
    display.textContent = 353;
    variable = 353;
    return;
  }

  if (variable == 35 && CurrentValue == 4) {
    display.textContent = 354;
    variable = 354;
    return;
  }

  if (variable == 35 && CurrentValue == 5) {
    display.textContent = 355;
    variable = 355;
    return;
  }

  if (variable == 35 && CurrentValue == 6) {
    display.textContent = 356;
    variable = 356;
    return;
  }

  if (variable == 35 && CurrentValue == 7) {
    display.textContent = 357;
    variable = 357;
    return;
  }

  if (variable == 35 && CurrentValue == 8) {
    display.textContent = 358;
    variable = 358;
    return;
  }

  if (variable == 35 && CurrentValue == 9) {
    display.textContent = 359;
    variable = 359;
    return;
  }

  // Display cases for when user clicks numbers from 360 to 369

  if (variable == 36 && CurrentValue == 0) {
    display.textContent = 360;
    variable = 360;
    return;
  }

  if (variable == 36 && CurrentValue == 1) {
    display.textContent = 361;
    variable = 361;
    return;
  }

  if (variable == 36 && CurrentValue == 2) {
    display.textContent = 362;
    variable = 362;
    return;
  }

  if (variable == 36 && CurrentValue == 3) {
    display.textContent = 363;
    variable = 363;
    return;
  }

  if (variable == 36 && CurrentValue == 4) {
    display.textContent = 364;
    variable = 364;
    return;
  }

  if (variable == 36 && CurrentValue == 5) {
    display.textContent = 365;
    variable = 365;
    return;
  }

  if (variable == 36 && CurrentValue == 6) {
    display.textContent = 366;
    variable = 366;
    return;
  }

  if (variable == 36 && CurrentValue == 7) {
    display.textContent = 367;
    variable = 367;
    return;
  }

  if (variable == 36 && CurrentValue == 8) {
    display.textContent = 368;
    variable = 368;
    return;
  }

  if (variable == 36 && CurrentValue == 9) {
    display.textContent = 369;
    variable = 369;
    return;
  }

  // Display cases for when user clicks numbers from 370 to 379

  if (variable == 37 && CurrentValue == 0) {
    display.textContent = 370;
    variable = 370;
    return;
  }

  if (variable == 37 && CurrentValue == 1) {
    display.textContent = 371;
    variable = 371;
    return;
  }

  if (variable == 37 && CurrentValue == 2) {
    display.textContent = 372;
    variable = 372;
    return;
  }

  if (variable == 37 && CurrentValue == 3) {
    display.textContent = 373;
    variable = 373;
    return;
  }

  if (variable == 37 && CurrentValue == 4) {
    display.textContent = 374;
    variable = 374;
    return;
  }

  if (variable == 37 && CurrentValue == 5) {
    display.textContent = 375;
    variable = 375;
    return;
  }

  if (variable == 37 && CurrentValue == 6) {
    display.textContent = 376;
    variable = 376;
    return;
  }

  if (variable == 37 && CurrentValue == 7) {
    display.textContent = 377;
    variable = 377;
    return;
  }

  if (variable == 37 && CurrentValue == 8) {
    display.textContent = 378;
    variable = 378;
    return;
  }

  if (variable == 37 && CurrentValue == 9) {
    display.textContent = 379;
    variable = 379;
    return;
  }

  // Display cases for when user clicks numbers from 380 to 389

  if (variable == 38 && CurrentValue == 0) {
    display.textContent = 380;
    variable = 380;
    return;
  }

  if (variable == 38 && CurrentValue == 1) {
    display.textContent = 381;
    variable = 381;
    return;
  }

  if (variable == 38 && CurrentValue == 2) {
    display.textContent = 382;
    variable = 382;
    return;
  }

  if (variable == 38 && CurrentValue == 3) {
    display.textContent = 383;
    variable = 383;
    return;
  }

  if (variable == 38 && CurrentValue == 4) {
    display.textContent = 384;
    variable = 384;
    return;
  }

  if (variable == 38 && CurrentValue == 5) {
    display.textContent = 385;
    variable = 385;
    return;
  }

  if (variable == 38 && CurrentValue == 6) {
    display.textContent = 386;
    variable = 386;
    return;
  }

  if (variable == 38 && CurrentValue == 7) {
    display.textContent = 387;
    variable = 387;
    return;
  }

  if (variable == 38 && CurrentValue == 8) {
    display.textContent = 388;
    variable = 388;
    return;
  }

  if (variable == 38 && CurrentValue == 9) {
    display.textContent = 389;
    variable = 389;
    return;
  }

  // Display cases for when user clicks numbers from 390 to 399

  if (variable == 39 && CurrentValue == 0) {
    display.textContent = 390;
    variable = 390;
    return;
  }

  if (variable == 39 && CurrentValue == 1) {
    display.textContent = 391;
    variable = 391;
    return;
  }

  if (variable == 39 && CurrentValue == 2) {
    display.textContent = 392;
    variable = 392;
    return;
  }

  if (variable == 39 && CurrentValue == 3) {
    display.textContent = 393;
    variable = 393;
    return;
  }

  if (variable == 39 && CurrentValue == 4) {
    display.textContent = 394;
    variable = 394;
    return;
  }

  if (variable == 39 && CurrentValue == 5) {
    display.textContent = 395;
    variable = 395;
    return;
  }

  if (variable == 39 && CurrentValue == 6) {
    display.textContent = 396;
    variable = 396;
    return;
  }

  if (variable == 39 && CurrentValue == 7) {
    display.textContent = 397;
    variable = 397;
    return;
  }

  if (variable == 39 && CurrentValue == 8) {
    display.textContent = 398;
    variable = 398;
    return;
  }

  if (variable == 39 && CurrentValue == 9) {
    display.textContent = 399;
    variable = 399;
    return;
  }
  // Display cases for when user clicks numbers from 400 to 409

  if (variable == 40 && CurrentValue == 0) {
    display.textContent = 400;
    variable = 400;
    return;
  }

  if (variable == 40 && CurrentValue == 1) {
    display.textContent = 401;
    variable = 401;
    return;
  }

  if (variable == 40 && CurrentValue == 2) {
    display.textContent = 402;
    variable = 402;
    return;
  }

  if (variable == 40 && CurrentValue == 3) {
    display.textContent = 403;
    variable = 403;
    return;
  }

  if (variable == 40 && CurrentValue == 4) {
    display.textContent = 404;
    variable = 404;
    return;
  }

  if (variable == 40 && CurrentValue == 5) {
    display.textContent = 405;
    variable = 405;
    return;
  }

  if (variable == 40 && CurrentValue == 6) {
    display.textContent = 406;
    variable = 406;
    return;
  }

  if (variable == 40 && CurrentValue == 7) {
    display.textContent = 407;
    variable = 407;
    return;
  }

  if (variable == 40 && CurrentValue == 8) {
    display.textContent = 408;
    variable = 408;
    return;
  }

  if (variable == 40 && CurrentValue == 9) {
    display.textContent = 409;
    variable = 409;
    return;
  }

  // Display cases for when user clicks numbers from 410 to 419

  if (variable == 41 && CurrentValue == 0) {
    display.textContent = 410;
    variable = 410;
    return;
  }

  if (variable == 41 && CurrentValue == 1) {
    display.textContent = 411;
    variable = 411;
    return;
  }

  if (variable == 41 && CurrentValue == 2) {
    display.textContent = 412;
    variable = 412;
    return;
  }

  if (variable == 41 && CurrentValue == 3) {
    display.textContent = 413;
    variable = 413;
    return;
  }

  if (variable == 41 && CurrentValue == 4) {
    display.textContent = 414;
    variable = 414;
    return;
  }

  if (variable == 41 && CurrentValue == 5) {
    display.textContent = 415;
    variable = 415;
    return;
  }

  if (variable == 41 && CurrentValue == 6) {
    display.textContent = 416;
    variable = 416;
    return;
  }

  if (variable == 41 && CurrentValue == 7) {
    display.textContent = 417;
    variable = 417;
    return;
  }

  if (variable == 41 && CurrentValue == 8) {
    display.textContent = 418;
    variable = 418;
    return;
  }

  if (variable == 41 && CurrentValue == 9) {
    display.textContent = 419;
    variable = 419;
    return;
  }

  // Display cases for when user clicks numbers from 420 to 429

  if (variable == 42 && CurrentValue == 0) {
    display.textContent = 420;
    variable = 420;
    return;
  }

  if (variable == 42 && CurrentValue == 1) {
    display.textContent = 421;
    variable = 421;
    return;
  }

  if (variable == 42 && CurrentValue == 2) {
    display.textContent = 422;
    variable = 422;
    return;
  }

  if (variable == 42 && CurrentValue == 3) {
    display.textContent = 423;
    variable = 423;
    return;
  }

  if (variable == 42 && CurrentValue == 4) {
    display.textContent = 424;
    variable = 424;
    return;
  }

  if (variable == 42 && CurrentValue == 5) {
    display.textContent = 425;
    variable = 425;
    return;
  }

  if (variable == 42 && CurrentValue == 6) {
    display.textContent = 426;
    variable = 426;
    return;
  }

  if (variable == 42 && CurrentValue == 7) {
    display.textContent = 427;
    variable = 427;
    return;
  }

  if (variable == 42 && CurrentValue == 8) {
    display.textContent = 428;
    variable = 428;
    return;
  }

  if (variable == 42 && CurrentValue == 9) {
    display.textContent = 429;
    variable = 429;
    return;
  }

  // Display cases for when user clicks numbers from 430 to 439

  if (variable == 43 && CurrentValue == 0) {
    display.textContent = 430;
    variable = 430;
    return;
  }

  if (variable == 43 && CurrentValue == 1) {
    display.textContent = 431;
    variable = 431;
    return;
  }

  if (variable == 43 && CurrentValue == 2) {
    display.textContent = 432;
    variable = 432;
    return;
  }

  if (variable == 43 && CurrentValue == 3) {
    display.textContent = 433;
    variable = 433;
    return;
  }

  if (variable == 43 && CurrentValue == 4) {
    display.textContent = 434;
    variable = 434;
    return;
  }

  if (variable == 43 && CurrentValue == 5) {
    display.textContent = 435;
    variable = 435;
    return;
  }

  if (variable == 43 && CurrentValue == 6) {
    display.textContent = 436;
    variable = 436;
    return;
  }

  if (variable == 43 && CurrentValue == 7) {
    display.textContent = 437;
    variable = 437;
    return;
  }

  if (variable == 43 && CurrentValue == 8) {
    display.textContent = 438;
    variable = 438;
    return;
  }

  if (variable == 43 && CurrentValue == 9) {
    display.textContent = 439;
    variable = 439;
    return;
  }

  // Display cases for when user clicks numbers from 440 to 449

  if (variable == 44 && CurrentValue == 0) {
    display.textContent = 440;
    variable = 440;
    return;
  }

  if (variable == 44 && CurrentValue == 1) {
    display.textContent = 441;
    variable = 441;
    return;
  }

  if (variable == 44 && CurrentValue == 2) {
    display.textContent = 442;
    variable = 442;
    return;
  }

  if (variable == 44 && CurrentValue == 3) {
    display.textContent = 443;
    variable = 443;
    return;
  }

  if (variable == 44 && CurrentValue == 4) {
    display.textContent = 444;
    variable = 444;
    return;
  }

  if (variable == 44 && CurrentValue == 5) {
    display.textContent = 445;
    variable = 445;
    return;
  }

  if (variable == 44 && CurrentValue == 6) {
    display.textContent = 446;
    variable = 446;
    return;
  }

  if (variable == 44 && CurrentValue == 7) {
    display.textContent = 447;
    variable = 447;
    return;
  }

  if (variable == 44 && CurrentValue == 8) {
    display.textContent = 448;
    variable = 448;
    return;
  }

  if (variable == 44 && CurrentValue == 9) {
    display.textContent = 449;
    variable = 449;
    return;
  }

  // Display cases for when user clicks numbers from 450 to 459

  if (variable == 45 && CurrentValue == 0) {
    display.textContent = 450;
    variable = 450;
    return;
  }

  if (variable == 45 && CurrentValue == 1) {
    display.textContent = 451;
    variable = 451;
    return;
  }

  if (variable == 45 && CurrentValue == 2) {
    display.textContent = 452;
    variable = 452;
    return;
  }

  if (variable == 45 && CurrentValue == 3) {
    display.textContent = 453;
    variable = 453;
    return;
  }

  if (variable == 45 && CurrentValue == 4) {
    display.textContent = 454;
    variable = 454;
    return;
  }

  if (variable == 45 && CurrentValue == 5) {
    display.textContent = 455;
    variable = 455;
    return;
  }

  if (variable == 45 && CurrentValue == 6) {
    display.textContent = 456;
    variable = 456;
    return;
  }

  if (variable == 45 && CurrentValue == 7) {
    display.textContent = 457;
    variable = 457;
    return;
  }

  if (variable == 45 && CurrentValue == 8) {
    display.textContent = 458;
    variable = 458;
    return;
  }

  if (variable == 45 && CurrentValue == 9) {
    display.textContent = 459;
    variable = 459;
    return;
  }

  // Display cases for when user clicks numbers from 460 to 469

  if (variable == 46 && CurrentValue == 0) {
    display.textContent = 460;
    variable = 460;
    return;
  }

  if (variable == 46 && CurrentValue == 1) {
    display.textContent = 461;
    variable = 461;
    return;
  }

  if (variable == 46 && CurrentValue == 2) {
    display.textContent = 462;
    variable = 462;
    return;
  }

  if (variable == 46 && CurrentValue == 3) {
    display.textContent = 463;
    variable = 463;
    return;
  }

  if (variable == 46 && CurrentValue == 4) {
    display.textContent = 464;
    variable = 464;
    return;
  }

  if (variable == 46 && CurrentValue == 5) {
    display.textContent = 465;
    variable = 465;
    return;
  }

  if (variable == 46 && CurrentValue == 6) {
    display.textContent = 466;
    variable = 466;
    return;
  }

  if (variable == 46 && CurrentValue == 7) {
    display.textContent = 467;
    variable = 467;
    return;
  }

  if (variable == 46 && CurrentValue == 8) {
    display.textContent = 468;
    variable = 468;
    return;
  }

  if (variable == 46 && CurrentValue == 9) {
    display.textContent = 469;
    variable = 469;
    return;
  }

  // Display cases for when user clicks numbers from 470 to 479

  if (variable == 47 && CurrentValue == 0) {
    display.textContent = 470;
    variable = 470;
    return;
  }

  if (variable == 47 && CurrentValue == 1) {
    display.textContent = 471;
    variable = 471;
    return;
  }

  if (variable == 47 && CurrentValue == 2) {
    display.textContent = 472;
    variable = 472;
    return;
  }

  if (variable == 47 && CurrentValue == 3) {
    display.textContent = 473;
    variable = 473;
    return;
  }

  if (variable == 47 && CurrentValue == 4) {
    display.textContent = 474;
    variable = 474;
    return;
  }

  if (variable == 47 && CurrentValue == 5) {
    display.textContent = 475;
    variable = 475;
    return;
  }

  if (variable == 47 && CurrentValue == 6) {
    display.textContent = 476;
    variable = 476;
    return;
  }

  if (variable == 47 && CurrentValue == 7) {
    display.textContent = 477;
    variable = 477;
    return;
  }

  if (variable == 47 && CurrentValue == 8) {
    display.textContent = 478;
    variable = 478;
    return;
  }

  if (variable == 47 && CurrentValue == 9) {
    display.textContent = 479;
    variable = 479;
    return;
  }

  // Display cases for when user clicks numbers from 480 to 489

  if (variable == 48 && CurrentValue == 0) {
    display.textContent = 480;
    variable = 480;
    return;
  }

  if (variable == 48 && CurrentValue == 1) {
    display.textContent = 481;
    variable = 481;
    return;
  }

  if (variable == 48 && CurrentValue == 2) {
    display.textContent = 482;
    variable = 482;
    return;
  }

  if (variable == 48 && CurrentValue == 3) {
    display.textContent = 483;
    variable = 483;
    return;
  }

  if (variable == 48 && CurrentValue == 4) {
    display.textContent = 484;
    variable = 484;
    return;
  }

  if (variable == 48 && CurrentValue == 5) {
    display.textContent = 485;
    variable = 485;
    return;
  }

  if (variable == 48 && CurrentValue == 6) {
    display.textContent = 486;
    variable = 486;
    return;
  }

  if (variable == 48 && CurrentValue == 7) {
    display.textContent = 487;
    variable = 487;
    return;
  }

  if (variable == 48 && CurrentValue == 8) {
    display.textContent = 488;
    variable = 488;
    return;
  }

  if (variable == 48 && CurrentValue == 9) {
    display.textContent = 489;
    variable = 489;
    return;
  }

  // Display cases for when user clicks numbers from 490 to 499

  if (variable == 49 && CurrentValue == 0) {
    display.textContent = 490;
    variable = 490;
    return;
  }

  if (variable == 49 && CurrentValue == 1) {
    display.textContent = 491;
    variable = 491;
    return;
  }

  if (variable == 49 && CurrentValue == 2) {
    display.textContent = 492;
    variable = 492;
    return;
  }

  if (variable == 49 && CurrentValue == 3) {
    display.textContent = 493;
    variable = 493;
    return;
  }

  if (variable == 49 && CurrentValue == 4) {
    display.textContent = 494;
    variable = 494;
    return;
  }

  if (variable == 49 && CurrentValue == 5) {
    display.textContent = 495;
    variable = 495;
    return;
  }

  if (variable == 49 && CurrentValue == 6) {
    display.textContent = 496;
    variable = 496;
    return;
  }

  if (variable == 49 && CurrentValue == 7) {
    display.textContent = 497;
    variable = 497;
    return;
  }

  if (variable == 49 && CurrentValue == 8) {
    display.textContent = 498;
    variable = 498;
    return;
  }

  if (variable == 49 && CurrentValue == 9) {
    display.textContent = 499;
    variable = 499;
    return;
  }

  // Display cases for when user clicks numbers from 500 to 509

  if (variable == 50 && CurrentValue == 0) {
    display.textContent = 500;
    variable = 500;
    return;
  }

  if (variable == 50 && CurrentValue == 1) {
    display.textContent = 501;
    variable = 501;
    return;
  }

  if (variable == 50 && CurrentValue == 2) {
    display.textContent = 502;
    variable = 502;
    return;
  }

  if (variable == 50 && CurrentValue == 3) {
    display.textContent = 503;
    variable = 503;
    return;
  }

  if (variable == 50 && CurrentValue == 4) {
    display.textContent = 504;
    variable = 504;
    return;
  }

  if (variable == 50 && CurrentValue == 5) {
    display.textContent = 505;
    variable = 505;
    return;
  }

  if (variable == 50 && CurrentValue == 6) {
    display.textContent = 506;
    variable = 506;
    return;
  }

  if (variable == 50 && CurrentValue == 7) {
    display.textContent = 507;
    variable = 507;
    return;
  }

  if (variable == 50 && CurrentValue == 8) {
    display.textContent = 508;
    variable = 508;
    return;
  }

  if (variable == 50 && CurrentValue == 9) {
    display.textContent = 509;
    variable = 509;
    return;
  }

  // Display cases for when user clicks numbers from 510 to 519

  if (variable == 51 && CurrentValue == 0) {
    display.textContent = 510;
    variable = 510;
    return;
  }

  if (variable == 51 && CurrentValue == 1) {
    display.textContent = 511;
    variable = 511;
    return;
  }

  if (variable == 51 && CurrentValue == 2) {
    display.textContent = 512;
    variable = 512;
    return;
  }

  if (variable == 51 && CurrentValue == 3) {
    display.textContent = 513;
    variable = 513;
    return;
  }

  if (variable == 51 && CurrentValue == 4) {
    display.textContent = 514;
    variable = 514;
    return;
  }

  if (variable == 51 && CurrentValue == 5) {
    display.textContent = 515;
    variable = 515;
    return;
  }

  if (variable == 51 && CurrentValue == 6) {
    display.textContent = 516;
    variable = 516;
    return;
  }

  if (variable == 51 && CurrentValue == 7) {
    display.textContent = 517;
    variable = 517;
    return;
  }

  if (variable == 51 && CurrentValue == 8) {
    display.textContent = 518;
    variable = 518;
    return;
  }

  if (variable == 51 && CurrentValue == 9) {
    display.textContent = 519;
    variable = 519;
    return;
  }

  // Display cases for when user clicks numbers from 520 to 529

  if (variable == 52 && CurrentValue == 0) {
    display.textContent = 520;
    variable = 520;
    return;
  }

  if (variable == 52 && CurrentValue == 1) {
    display.textContent = 521;
    variable = 521;
    return;
  }

  if (variable == 52 && CurrentValue == 2) {
    display.textContent = 522;
    variable = 522;
    return;
  }

  if (variable == 52 && CurrentValue == 3) {
    display.textContent = 523;
    variable = 523;
    return;
  }

  if (variable == 52 && CurrentValue == 4) {
    display.textContent = 524;
    variable = 524;
    return;
  }

  if (variable == 52 && CurrentValue == 5) {
    display.textContent = 525;
    variable = 525;
    return;
  }

  if (variable == 52 && CurrentValue == 6) {
    display.textContent = 526;
    variable = 526;
    return;
  }

  if (variable == 52 && CurrentValue == 7) {
    display.textContent = 527;
    variable = 527;
    return;
  }

  if (variable == 52 && CurrentValue == 8) {
    display.textContent = 528;
    variable = 528;
    return;
  }

  if (variable == 52 && CurrentValue == 9) {
    display.textContent = 529;
    variable = 529;
    return;
  }

  // Display cases for when user clicks numbers from 530 to 539

  if (variable == 53 && CurrentValue == 0) {
    display.textContent = 530;
    variable = 530;
    return;
  }

  if (variable == 53 && CurrentValue == 1) {
    display.textContent = 531;
    variable = 531;
    return;
  }

  if (variable == 53 && CurrentValue == 2) {
    display.textContent = 532;
    variable = 532;
    return;
  }

  if (variable == 53 && CurrentValue == 3) {
    display.textContent = 533;
    variable = 533;
    return;
  }

  if (variable == 53 && CurrentValue == 4) {
    display.textContent = 534;
    variable = 534;
    return;
  }

  if (variable == 53 && CurrentValue == 5) {
    display.textContent = 535;
    variable = 535;
    return;
  }

  if (variable == 53 && CurrentValue == 6) {
    display.textContent = 536;
    variable = 536;
    return;
  }

  if (variable == 53 && CurrentValue == 7) {
    display.textContent = 537;
    variable = 537;
    return;
  }

  if (variable == 53 && CurrentValue == 8) {
    display.textContent = 538;
    variable = 538;
    return;
  }

  if (variable == 53 && CurrentValue == 9) {
    display.textContent = 539;
    variable = 539;
    return;
  }

  // Display cases for when user clicks numbers from 540 to 549

  if (variable == 54 && CurrentValue == 0) {
    display.textContent = 540;
    variable = 540;
    return;
  }

  if (variable == 54 && CurrentValue == 1) {
    display.textContent = 541;
    variable = 541;
    return;
  }

  if (variable == 54 && CurrentValue == 2) {
    display.textContent = 542;
    variable = 542;
    return;
  }

  if (variable == 54 && CurrentValue == 3) {
    display.textContent = 543;
    variable = 543;
    return;
  }

  if (variable == 54 && CurrentValue == 4) {
    display.textContent = 544;
    variable = 544;
    return;
  }

  if (variable == 54 && CurrentValue == 5) {
    display.textContent = 545;
    variable = 545;
    return;
  }

  if (variable == 54 && CurrentValue == 6) {
    display.textContent = 546;
    variable = 546;
    return;
  }

  if (variable == 54 && CurrentValue == 7) {
    display.textContent = 547;
    variable = 547;
    return;
  }

  if (variable == 54 && CurrentValue == 8) {
    display.textContent = 548;
    variable = 548;
    return;
  }

  if (variable == 54 && CurrentValue == 9) {
    display.textContent = 549;
    variable = 549;
    return;
  }

  // Display cases for when user clicks numbers from 550 to 559

  if (variable == 55 && CurrentValue == 0) {
    display.textContent = 550;
    variable = 550;
    return;
  }

  if (variable == 55 && CurrentValue == 1) {
    display.textContent = 551;
    variable = 551;
    return;
  }

  if (variable == 55 && CurrentValue == 2) {
    display.textContent = 552;
    variable = 552;
    return;
  }

  if (variable == 55 && CurrentValue == 3) {
    display.textContent = 553;
    variable = 553;
    return;
  }

  if (variable == 55 && CurrentValue == 4) {
    display.textContent = 554;
    variable = 554;
    return;
  }

  if (variable == 55 && CurrentValue == 5) {
    display.textContent = 555;
    variable = 555;
    return;
  }

  if (variable == 55 && CurrentValue == 6) {
    display.textContent = 556;
    variable = 556;
    return;
  }

  if (variable == 55 && CurrentValue == 7) {
    display.textContent = 557;
    variable = 557;
    return;
  }

  if (variable == 55 && CurrentValue == 8) {
    display.textContent = 558;
    variable = 558;
    return;
  }

  if (variable == 55 && CurrentValue == 9) {
    display.textContent = 559;
    variable = 559;
    return;
  }

  // Display cases for when user clicks numbers from 560 to 569

  if (variable == 56 && CurrentValue == 0) {
    display.textContent = 560;
    variable = 560;
    return;
  }

  if (variable == 56 && CurrentValue == 1) {
    display.textContent = 561;
    variable = 561;
    return;
  }

  if (variable == 56 && CurrentValue == 2) {
    display.textContent = 562;
    variable = 562;
    return;
  }

  if (variable == 56 && CurrentValue == 3) {
    display.textContent = 563;
    variable = 563;
    return;
  }

  if (variable == 56 && CurrentValue == 4) {
    display.textContent = 564;
    variable = 564;
    return;
  }

  if (variable == 56 && CurrentValue == 5) {
    display.textContent = 565;
    variable = 565;
    return;
  }

  if (variable == 56 && CurrentValue == 6) {
    display.textContent = 566;
    variable = 566;
    return;
  }

  if (variable == 56 && CurrentValue == 7) {
    display.textContent = 567;
    variable = 567;
    return;
  }

  if (variable == 56 && CurrentValue == 8) {
    display.textContent = 568;
    variable = 568;
    return;
  }

  if (variable == 56 && CurrentValue == 9) {
    display.textContent = 569;
    variable = 569;
    return;
  }

  // Display cases for when user clicks numbers from 570 to 579

  if (variable == 57 && CurrentValue == 0) {
    display.textContent = 570;
    variable = 570;
    return;
  }

  if (variable == 57 && CurrentValue == 1) {
    display.textContent = 571;
    variable = 571;
    return;
  }

  if (variable == 57 && CurrentValue == 2) {
    display.textContent = 572;
    variable = 572;
    return;
  }

  if (variable == 57 && CurrentValue == 3) {
    display.textContent = 573;
    variable = 573;
    return;
  }

  if (variable == 57 && CurrentValue == 4) {
    display.textContent = 574;
    variable = 574;
    return;
  }

  if (variable == 57 && CurrentValue == 5) {
    display.textContent = 575;
    variable = 575;
    return;
  }

  if (variable == 57 && CurrentValue == 6) {
    display.textContent = 576;
    variable = 576;
    return;
  }

  if (variable == 57 && CurrentValue == 7) {
    display.textContent = 577;
    variable = 577;
    return;
  }

  if (variable == 57 && CurrentValue == 8) {
    display.textContent = 578;
    variable = 578;
    return;
  }

  if (variable == 57 && CurrentValue == 9) {
    display.textContent = 579;
    variable = 579;
    return;
  }

  // Display cases for when user clicks numbers from 580 to 589

  if (variable == 58 && CurrentValue == 0) {
    display.textContent = 580;
    variable = 580;
    return;
  }

  if (variable == 58 && CurrentValue == 1) {
    display.textContent = 581;
    variable = 581;
    return;
  }

  if (variable == 58 && CurrentValue == 2) {
    display.textContent = 582;
    variable = 582;
    return;
  }

  if (variable == 58 && CurrentValue == 3) {
    display.textContent = 583;
    variable = 583;
    return;
  }

  if (variable == 58 && CurrentValue == 4) {
    display.textContent = 584;
    variable = 584;
    return;
  }

  if (variable == 58 && CurrentValue == 5) {
    display.textContent = 585;
    variable = 585;
    return;
  }

  if (variable == 58 && CurrentValue == 6) {
    display.textContent = 586;
    variable = 586;
    return;
  }

  if (variable == 58 && CurrentValue == 7) {
    display.textContent = 587;
    variable = 587;
    return;
  }

  if (variable == 58 && CurrentValue == 8) {
    display.textContent = 588;
    variable = 588;
    return;
  }

  if (variable == 58 && CurrentValue == 9) {
    display.textContent = 589;
    variable = 589;
    return;
  }

  // Display cases for when user clicks numbers from 590 to 599

  if (variable == 59 && CurrentValue == 0) {
    display.textContent = 590;
    variable = 590;
    return;
  }

  if (variable == 59 && CurrentValue == 1) {
    display.textContent = 591;
    variable = 591;
    return;
  }

  if (variable == 59 && CurrentValue == 2) {
    display.textContent = 592;
    variable = 592;
    return;
  }

  if (variable == 59 && CurrentValue == 3) {
    display.textContent = 593;
    variable = 593;
    return;
  }

  if (variable == 59 && CurrentValue == 4) {
    display.textContent = 594;
    variable = 594;
    return;
  }

  if (variable == 59 && CurrentValue == 5) {
    display.textContent = 595;
    variable = 595;
    return;
  }

  if (variable == 59 && CurrentValue == 6) {
    display.textContent = 596;
    variable = 596;
    return;
  }

  if (variable == 59 && CurrentValue == 7) {
    display.textContent = 597;
    variable = 597;
    return;
  }

  if (variable == 59 && CurrentValue == 8) {
    display.textContent = 598;
    variable = 598;
    return;
  }

  if (variable == 59 && CurrentValue == 9) {
    display.textContent = 599;
    variable = 599;
    return;
  }

  // Display cases for when user clicks numbers from 600 to 609

  if (variable == 60 && CurrentValue == 0) {
    display.textContent = 600;
    variable = 600;
    return;
  }

  if (variable == 60 && CurrentValue == 1) {
    display.textContent = 601;
    variable = 601;
    return;
  }

  if (variable == 60 && CurrentValue == 2) {
    display.textContent = 602;
    variable = 602;
    return;
  }

  if (variable == 60 && CurrentValue == 3) {
    display.textContent = 603;
    variable = 603;
    return;
  }

  if (variable == 60 && CurrentValue == 4) {
    display.textContent = 604;
    variable = 604;
    return;
  }

  if (variable == 60 && CurrentValue == 5) {
    display.textContent = 605;
    variable = 605;
    return;
  }

  if (variable == 60 && CurrentValue == 6) {
    display.textContent = 606;
    variable = 606;
    return;
  }

  if (variable == 60 && CurrentValue == 7) {
    display.textContent = 607;
    variable = 607;
    return;
  }

  if (variable == 60 && CurrentValue == 8) {
    display.textContent = 608;
    variable = 608;
    return;
  }

  if (variable == 60 && CurrentValue == 9) {
    display.textContent = 609;
    variable = 609;
    return;
  }

  // Display cases for when user clicks numbers from 610 to 619

  if (variable == 61 && CurrentValue == 0) {
    display.textContent = 610;
    variable = 610;
    return;
  }

  if (variable == 61 && CurrentValue == 1) {
    display.textContent = 611;
    variable = 611;
    return;
  }

  if (variable == 61 && CurrentValue == 2) {
    display.textContent = 612;
    variable = 612;
    return;
  }

  if (variable == 61 && CurrentValue == 3) {
    display.textContent = 613;
    variable = 613;
    return;
  }

  if (variable == 61 && CurrentValue == 4) {
    display.textContent = 614;
    variable = 614;
    return;
  }

  if (variable == 61 && CurrentValue == 5) {
    display.textContent = 615;
    variable = 615;
    return;
  }

  if (variable == 61 && CurrentValue == 6) {
    display.textContent = 616;
    variable = 616;
    return;
  }

  if (variable == 61 && CurrentValue == 7) {
    display.textContent = 617;
    variable = 617;
    return;
  }

  if (variable == 61 && CurrentValue == 8) {
    display.textContent = 618;
    variable = 618;
    return;
  }

  if (variable == 61 && CurrentValue == 9) {
    display.textContent = 619;
    variable = 619;
    return;
  }

  // Display cases for when user clicks numbers from 620 to 629

  if (variable == 62 && CurrentValue == 0) {
    display.textContent = 620;
    variable = 620;
    return;
  }

  if (variable == 62 && CurrentValue == 1) {
    display.textContent = 621;
    variable = 621;
    return;
  }

  if (variable == 62 && CurrentValue == 2) {
    display.textContent = 622;
    variable = 622;
    return;
  }

  if (variable == 62 && CurrentValue == 3) {
    display.textContent = 623;
    variable = 623;
    return;
  }

  if (variable == 62 && CurrentValue == 4) {
    display.textContent = 624;
    variable = 624;
    return;
  }

  if (variable == 62 && CurrentValue == 5) {
    display.textContent = 625;
    variable = 625;
    return;
  }

  if (variable == 62 && CurrentValue == 6) {
    display.textContent = 626;
    variable = 626;
    return;
  }

  if (variable == 62 && CurrentValue == 7) {
    display.textContent = 627;
    variable = 627;
    return;
  }

  if (variable == 62 && CurrentValue == 8) {
    display.textContent = 628;
    variable = 628;
    return;
  }

  if (variable == 62 && CurrentValue == 9) {
    display.textContent = 629;
    variable = 629;
    return;
  }

  // Display cases for when user clicks numbers from 630 to 639

  if (variable == 63 && CurrentValue == 0) {
    display.textContent = 630;
    variable = 630;
    return;
  }

  if (variable == 63 && CurrentValue == 1) {
    display.textContent = 631;
    variable = 631;
    return;
  }

  if (variable == 63 && CurrentValue == 2) {
    display.textContent = 632;
    variable = 632;
    return;
  }

  if (variable == 63 && CurrentValue == 3) {
    display.textContent = 633;
    variable = 633;
    return;
  }

  if (variable == 63 && CurrentValue == 4) {
    display.textContent = 634;
    variable = 634;
    return;
  }

  if (variable == 63 && CurrentValue == 5) {
    display.textContent = 635;
    variable = 635;
    return;
  }

  if (variable == 63 && CurrentValue == 6) {
    display.textContent = 636;
    variable = 636;
    return;
  }

  if (variable == 63 && CurrentValue == 7) {
    display.textContent = 637;
    variable = 637;
    return;
  }

  if (variable == 63 && CurrentValue == 8) {
    display.textContent = 638;
    variable = 638;
    return;
  }

  if (variable == 63 && CurrentValue == 9) {
    display.textContent = 639;
    variable = 639;
    return;
  }

  // Display cases for when user clicks numbers from 640 to 649

  if (variable == 64 && CurrentValue == 0) {
    display.textContent = 640;
    variable = 640;
    return;
  }

  if (variable == 64 && CurrentValue == 1) {
    display.textContent = 641;
    variable = 641;
    return;
  }

  if (variable == 64 && CurrentValue == 2) {
    display.textContent = 642;
    variable = 642;
    return;
  }

  if (variable == 64 && CurrentValue == 3) {
    display.textContent = 643;
    variable = 643;
    return;
  }

  if (variable == 64 && CurrentValue == 4) {
    display.textContent = 644;
    variable = 644;
    return;
  }

  if (variable == 64 && CurrentValue == 5) {
    display.textContent = 645;
    variable = 645;
    return;
  }

  if (variable == 64 && CurrentValue == 6) {
    display.textContent = 646;
    variable = 646;
    return;
  }

  if (variable == 64 && CurrentValue == 7) {
    display.textContent = 647;
    variable = 647;
    return;
  }

  if (variable == 64 && CurrentValue == 8) {
    display.textContent = 648;
    variable = 648;
    return;
  }

  if (variable == 64 && CurrentValue == 9) {
    display.textContent = 649;
    variable = 649;
    return;
  }

  // Display cases for when user clicks numbers from 650 to 659

  if (variable == 65 && CurrentValue == 0) {
    display.textContent = 650;
    variable = 650;
    return;
  }

  if (variable == 65 && CurrentValue == 1) {
    display.textContent = 651;
    variable = 651;
    return;
  }

  if (variable == 65 && CurrentValue == 2) {
    display.textContent = 652;
    variable = 652;
    return;
  }

  if (variable == 65 && CurrentValue == 3) {
    display.textContent = 653;
    variable = 653;
    return;
  }

  if (variable == 65 && CurrentValue == 4) {
    display.textContent = 654;
    variable = 654;
    return;
  }

  if (variable == 65 && CurrentValue == 5) {
    display.textContent = 655;
    variable = 655;
    return;
  }

  if (variable == 65 && CurrentValue == 6) {
    display.textContent = 656;
    variable = 656;
    return;
  }

  if (variable == 65 && CurrentValue == 7) {
    display.textContent = 657;
    variable = 657;
    return;
  }

  if (variable == 65 && CurrentValue == 8) {
    display.textContent = 658;
    variable = 658;
    return;
  }

  if (variable == 65 && CurrentValue == 9) {
    display.textContent = 659;
    variable = 659;
    return;
  }

  // Display cases for when user clicks numbers from 660 to 669

  if (variable == 66 && CurrentValue == 0) {
    display.textContent = 660;
    variable = 660;
    return;
  }

  if (variable == 66 && CurrentValue == 1) {
    display.textContent = 661;
    variable = 661;
    return;
  }

  if (variable == 66 && CurrentValue == 2) {
    display.textContent = 662;
    variable = 662;
    return;
  }

  if (variable == 66 && CurrentValue == 3) {
    display.textContent = 663;
    variable = 663;
    return;
  }

  if (variable == 66 && CurrentValue == 4) {
    display.textContent = 664;
    variable = 664;
    return;
  }

  if (variable == 66 && CurrentValue == 5) {
    display.textContent = 665;
    variable = 665;
    return;
  }

  if (variable == 66 && CurrentValue == 6) {
    display.textContent = 666;
    variable = 666;
    return;
  }

  if (variable == 66 && CurrentValue == 7) {
    display.textContent = 667;
    variable = 667;
    return;
  }

  if (variable == 66 && CurrentValue == 8) {
    display.textContent = 668;
    variable = 668;
    return;
  }

  if (variable == 66 && CurrentValue == 9) {
    display.textContent = 669;
    variable = 669;
    return;
  }

  // Display cases for when user clicks numbers from 670 to 679

  if (variable == 67 && CurrentValue == 0) {
    display.textContent = 670;
    variable = 670;
    return;
  }

  if (variable == 67 && CurrentValue == 1) {
    display.textContent = 671;
    variable = 671;
    return;
  }

  if (variable == 67 && CurrentValue == 2) {
    display.textContent = 672;
    variable = 672;
    return;
  }

  if (variable == 67 && CurrentValue == 3) {
    display.textContent = 673;
    variable = 673;
    return;
  }

  if (variable == 67 && CurrentValue == 4) {
    display.textContent = 674;
    variable = 674;
    return;
  }

  if (variable == 67 && CurrentValue == 5) {
    display.textContent = 675;
    variable = 675;
    return;
  }

  if (variable == 67 && CurrentValue == 6) {
    display.textContent = 676;
    variable = 676;
    return;
  }

  if (variable == 67 && CurrentValue == 7) {
    display.textContent = 677;
    variable = 677;
    return;
  }

  if (variable == 67 && CurrentValue == 8) {
    display.textContent = 678;
    variable = 678;
    return;
  }

  if (variable == 67 && CurrentValue == 9) {
    display.textContent = 679;
    variable = 679;
    return;
  }

  // Display cases for when user clicks numbers from 680 to 689

  if (variable == 68 && CurrentValue == 0) {
    display.textContent = 680;
    variable = 680;
    return;
  }

  if (variable == 68 && CurrentValue == 1) {
    display.textContent = 681;
    variable = 681;
    return;
  }

  if (variable == 68 && CurrentValue == 2) {
    display.textContent = 682;
    variable = 682;
    return;
  }

  if (variable == 68 && CurrentValue == 3) {
    display.textContent = 683;
    variable = 683;
    return;
  }

  if (variable == 68 && CurrentValue == 4) {
    display.textContent = 684;
    variable = 684;
    return;
  }

  if (variable == 68 && CurrentValue == 5) {
    display.textContent = 685;
    variable = 685;
    return;
  }

  if (variable == 68 && CurrentValue == 6) {
    display.textContent = 686;
    variable = 686;
    return;
  }

  if (variable == 68 && CurrentValue == 7) {
    display.textContent = 687;
    variable = 687;
    return;
  }

  if (variable == 68 && CurrentValue == 8) {
    display.textContent = 688;
    variable = 688;
    return;
  }

  if (variable == 68 && CurrentValue == 9) {
    display.textContent = 689;
    variable = 689;
    return;
  }

  // Display cases for when user clicks numbers from 690 to 699

  if (variable == 69 && CurrentValue == 0) {
    display.textContent = 690;
    variable = 690;
    return;
  }

  if (variable == 69 && CurrentValue == 1) {
    display.textContent = 691;
    variable = 691;
    return;
  }

  if (variable == 69 && CurrentValue == 2) {
    display.textContent = 692;
    variable = 692;
    return;
  }

  if (variable == 69 && CurrentValue == 3) {
    display.textContent = 693;
    variable = 693;
    return;
  }

  if (variable == 69 && CurrentValue == 4) {
    display.textContent = 694;
    variable = 694;
    return;
  }

  if (variable == 69 && CurrentValue == 5) {
    display.textContent = 695;
    variable = 695;
    return;
  }

  if (variable == 69 && CurrentValue == 6) {
    display.textContent = 696;
    variable = 696;
    return;
  }

  if (variable == 69 && CurrentValue == 7) {
    display.textContent = 697;
    variable = 697;
    return;
  }

  if (variable == 69 && CurrentValue == 8) {
    display.textContent = 698;
    variable = 698;
    return;
  }

  if (variable == 69 && CurrentValue == 9) {
    display.textContent = 699;
    variable = 699;
    return;
  }

  // Display cases for when user clicks numbers from 700 to 709

  if (variable == 70 && CurrentValue == 0) {
    display.textContent = 700;
    variable = 700;
    return;
  }

  if (variable == 70 && CurrentValue == 1) {
    display.textContent = 701;
    variable = 701;
    return;
  }

  if (variable == 70 && CurrentValue == 2) {
    display.textContent = 702;
    variable = 702;
    return;
  }

  if (variable == 70 && CurrentValue == 3) {
    display.textContent = 703;
    variable = 703;
    return;
  }

  if (variable == 70 && CurrentValue == 4) {
    display.textContent = 704;
    variable = 704;
    return;
  }

  if (variable == 70 && CurrentValue == 5) {
    display.textContent = 705;
    variable = 705;
    return;
  }

  if (variable == 70 && CurrentValue == 6) {
    display.textContent = 706;
    variable = 706;
    return;
  }

  if (variable == 70 && CurrentValue == 7) {
    display.textContent = 707;
    variable = 707;
    return;
  }

  if (variable == 70 && CurrentValue == 8) {
    display.textContent = 708;
    variable = 708;
    return;
  }

  if (variable == 70 && CurrentValue == 9) {
    display.textContent = 709;
    variable = 709;
    return;
  }

  // Display cases for when user clicks numbers from 710 to 719

  if (variable == 71 && CurrentValue == 0) {
    display.textContent = 710;
    variable = 710;
    return;
  }

  if (variable == 71 && CurrentValue == 1) {
    display.textContent = 711;
    variable = 711;
    return;
  }

  if (variable == 71 && CurrentValue == 2) {
    display.textContent = 712;
    variable = 712;
    return;
  }

  if (variable == 71 && CurrentValue == 3) {
    display.textContent = 713;
    variable = 713;
    return;
  }

  if (variable == 71 && CurrentValue == 4) {
    display.textContent = 714;
    variable = 714;
    return;
  }

  if (variable == 71 && CurrentValue == 5) {
    display.textContent = 715;
    variable = 715;
    return;
  }

  if (variable == 71 && CurrentValue == 6) {
    display.textContent = 716;
    variable = 716;
    return;
  }

  if (variable == 71 && CurrentValue == 7) {
    display.textContent = 717;
    variable = 717;
    return;
  }

  if (variable == 71 && CurrentValue == 8) {
    display.textContent = 718;
    variable = 718;
    return;
  }

  if (variable == 71 && CurrentValue == 9) {
    display.textContent = 719;
    variable = 719;
    return;
  }

  // Display cases for when user clicks numbers from 720 to 729

  if (variable == 72 && CurrentValue == 0) {
    display.textContent = 720;
    variable = 720;
    return;
  }

  if (variable == 72 && CurrentValue == 1) {
    display.textContent = 721;
    variable = 721;
    return;
  }

  if (variable == 72 && CurrentValue == 2) {
    display.textContent = 722;
    variable = 722;
    return;
  }

  if (variable == 72 && CurrentValue == 3) {
    display.textContent = 723;
    variable = 723;
    return;
  }

  if (variable == 72 && CurrentValue == 4) {
    display.textContent = 724;
    variable = 724;
    return;
  }

  if (variable == 72 && CurrentValue == 5) {
    display.textContent = 725;
    variable = 725;
    return;
  }

  if (variable == 72 && CurrentValue == 6) {
    display.textContent = 726;
    variable = 726;
    return;
  }

  if (variable == 72 && CurrentValue == 7) {
    display.textContent = 727;
    variable = 727;
    return;
  }

  if (variable == 72 && CurrentValue == 8) {
    display.textContent = 728;
    variable = 728;
    return;
  }

  if (variable == 72 && CurrentValue == 9) {
    display.textContent = 729;
    variable = 729;
    return;
  }

  // Display cases for when user clicks numbers from 730 to 739

  if (variable == 73 && CurrentValue == 0) {
    display.textContent = 730;
    variable = 730;
    return;
  }

  if (variable == 73 && CurrentValue == 1) {
    display.textContent = 731;
    variable = 731;
    return;
  }

  if (variable == 73 && CurrentValue == 2) {
    display.textContent = 732;
    variable = 732;
    return;
  }

  if (variable == 73 && CurrentValue == 3) {
    display.textContent = 733;
    variable = 733;
    return;
  }

  if (variable == 73 && CurrentValue == 4) {
    display.textContent = 734;
    variable = 734;
    return;
  }

  if (variable == 73 && CurrentValue == 5) {
    display.textContent = 735;
    variable = 735;
    return;
  }

  if (variable == 73 && CurrentValue == 6) {
    display.textContent = 736;
    variable = 736;
    return;
  }

  if (variable == 73 && CurrentValue == 7) {
    display.textContent = 737;
    variable = 737;
    return;
  }

  if (variable == 73 && CurrentValue == 8) {
    display.textContent = 738;
    variable = 738;
    return;
  }

  if (variable == 73 && CurrentValue == 9) {
    display.textContent = 739;
    variable = 739;
    return;
  }

  // Display cases for when user clicks numbers from 740 to 749

  if (variable == 74 && CurrentValue == 0) {
    display.textContent = 740;
    variable = 740;
    return;
  }

  if (variable == 74 && CurrentValue == 1) {
    display.textContent = 741;
    variable = 741;
    return;
  }

  if (variable == 74 && CurrentValue == 2) {
    display.textContent = 742;
    variable = 742;
    return;
  }

  if (variable == 74 && CurrentValue == 3) {
    display.textContent = 743;
    variable = 743;
    return;
  }

  if (variable == 74 && CurrentValue == 4) {
    display.textContent = 744;
    variable = 744;
    return;
  }

  if (variable == 74 && CurrentValue == 5) {
    display.textContent = 745;
    variable = 745;
    return;
  }

  if (variable == 74 && CurrentValue == 6) {
    display.textContent = 746;
    variable = 746;
    return;
  }

  if (variable == 74 && CurrentValue == 7) {
    display.textContent = 747;
    variable = 747;
    return;
  }

  if (variable == 74 && CurrentValue == 8) {
    display.textContent = 748;
    variable = 748;
    return;
  }

  if (variable == 74 && CurrentValue == 9) {
    display.textContent = 749;
    variable = 749;
    return;
  }

  // Display cases for when user clicks numbers from 750 to 759

  if (variable == 75 && CurrentValue == 0) {
    display.textContent = 750;
    variable = 750;
    return;
  }

  if (variable == 75 && CurrentValue == 1) {
    display.textContent = 751;
    variable = 751;
    return;
  }

  if (variable == 75 && CurrentValue == 2) {
    display.textContent = 752;
    variable = 752;
    return;
  }

  if (variable == 75 && CurrentValue == 3) {
    display.textContent = 753;
    variable = 753;
    return;
  }

  if (variable == 75 && CurrentValue == 4) {
    display.textContent = 754;
    variable = 754;
    return;
  }

  if (variable == 75 && CurrentValue == 5) {
    display.textContent = 755;
    variable = 755;
    return;
  }

  if (variable == 75 && CurrentValue == 6) {
    display.textContent = 756;
    variable = 756;
    return;
  }

  if (variable == 75 && CurrentValue == 7) {
    display.textContent = 757;
    variable = 757;
    return;
  }

  if (variable == 75 && CurrentValue == 8) {
    display.textContent = 758;
    variable = 758;
    return;
  }

  if (variable == 75 && CurrentValue == 9) {
    display.textContent = 759;
    variable = 759;
    return;
  }

  // Display cases for when user clicks numbers from 760 to 769

  if (variable == 76 && CurrentValue == 0) {
    display.textContent = 760;
    variable = 760;
    return;
  }

  if (variable == 76 && CurrentValue == 1) {
    display.textContent = 761;
    variable = 761;
    return;
  }

  if (variable == 76 && CurrentValue == 2) {
    display.textContent = 762;
    variable = 762;
    return;
  }

  if (variable == 76 && CurrentValue == 3) {
    display.textContent = 763;
    variable = 763;
    return;
  }

  if (variable == 76 && CurrentValue == 4) {
    display.textContent = 764;
    variable = 764;
    return;
  }

  if (variable == 76 && CurrentValue == 5) {
    display.textContent = 765;
    variable = 765;
    return;
  }

  if (variable == 76 && CurrentValue == 6) {
    display.textContent = 766;
    variable = 766;
    return;
  }

  if (variable == 76 && CurrentValue == 7) {
    display.textContent = 767;
    variable = 767;
    return;
  }

  if (variable == 76 && CurrentValue == 8) {
    display.textContent = 768;
    variable = 768;
    return;
  }

  if (variable == 76 && CurrentValue == 9) {
    display.textContent = 769;
    variable = 769;
    return;
  }

  // Display cases for when user clicks numbers from 770 to 779

  if (variable == 77 && CurrentValue == 0) {
    display.textContent = 770;
    variable = 770;
    return;
  }

  if (variable == 77 && CurrentValue == 1) {
    display.textContent = 771;
    variable = 771;
    return;
  }

  if (variable == 77 && CurrentValue == 2) {
    display.textContent = 772;
    variable = 772;
    return;
  }

  if (variable == 77 && CurrentValue == 3) {
    display.textContent = 773;
    variable = 773;
    return;
  }

  if (variable == 77 && CurrentValue == 4) {
    display.textContent = 774;
    variable = 774;
    return;
  }

  if (variable == 77 && CurrentValue == 5) {
    display.textContent = 775;
    variable = 775;
    return;
  }

  if (variable == 77 && CurrentValue == 6) {
    display.textContent = 776;
    variable = 776;
    return;
  }

  if (variable == 77 && CurrentValue == 7) {
    display.textContent = 777;
    variable = 777;
    return;
  }

  if (variable == 77 && CurrentValue == 8) {
    display.textContent = 778;
    variable = 778;
    return;
  }

  if (variable == 77 && CurrentValue == 9) {
    display.textContent = 779;
    variable = 779;
    return;
  }

  // Display cases for when user clicks numbers from 780 to 789

  if (variable == 78 && CurrentValue == 0) {
    display.textContent = 780;
    variable = 780;
    return;
  }

  if (variable == 78 && CurrentValue == 1) {
    display.textContent = 781;
    variable = 781;
    return;
  }

  if (variable == 78 && CurrentValue == 2) {
    display.textContent = 782;
    variable = 782;
    return;
  }

  if (variable == 78 && CurrentValue == 3) {
    display.textContent = 783;
    variable = 783;
    return;
  }

  if (variable == 78 && CurrentValue == 4) {
    display.textContent = 784;
    variable = 784;
    return;
  }

  if (variable == 78 && CurrentValue == 5) {
    display.textContent = 785;
    variable = 785;
    return;
  }

  if (variable == 78 && CurrentValue == 6) {
    display.textContent = 786;
    variable = 786;
    return;
  }

  if (variable == 78 && CurrentValue == 7) {
    display.textContent = 787;
    variable = 787;
    return;
  }

  if (variable == 78 && CurrentValue == 8) {
    display.textContent = 788;
    variable = 788;
    return;
  }

  if (variable == 78 && CurrentValue == 9) {
    display.textContent = 789;
    variable = 789;
    return;
  }

  // Display cases for when user clicks numbers from 790 to 799

  if (variable == 79 && CurrentValue == 0) {
    display.textContent = 790;
    variable = 790;
    return;
  }

  if (variable == 79 && CurrentValue == 1) {
    display.textContent = 791;
    variable = 791;
    return;
  }

  if (variable == 79 && CurrentValue == 2) {
    display.textContent = 792;
    variable = 792;
    return;
  }

  if (variable == 79 && CurrentValue == 3) {
    display.textContent = 793;
    variable = 793;
    return;
  }

  if (variable == 79 && CurrentValue == 4) {
    display.textContent = 794;
    variable = 794;
    return;
  }

  if (variable == 79 && CurrentValue == 5) {
    display.textContent = 795;
    variable = 795;
    return;
  }

  if (variable == 79 && CurrentValue == 6) {
    display.textContent = 796;
    variable = 796;
    return;
  }

  if (variable == 79 && CurrentValue == 7) {
    display.textContent = 797;
    variable = 797;
    return;
  }

  if (variable == 79 && CurrentValue == 8) {
    display.textContent = 798;
    variable = 798;
    return;
  }

  if (variable == 79 && CurrentValue == 9) {
    display.textContent = 799;
    variable = 799;
    return;
  }

  // Display cases for when user clicks numbers from 800 to 809

  if (variable == 80 && CurrentValue == 0) {
    display.textContent = 800;
    variable = 800;
    return;
  }

  if (variable == 80 && CurrentValue == 1) {
    display.textContent = 801;
    variable = 801;
    return;
  }

  if (variable == 80 && CurrentValue == 2) {
    display.textContent = 802;
    variable = 802;
    return;
  }

  if (variable == 80 && CurrentValue == 3) {
    display.textContent = 803;
    variable = 803;
    return;
  }

  if (variable == 80 && CurrentValue == 4) {
    display.textContent = 804;
    variable = 804;
    return;
  }

  if (variable == 80 && CurrentValue == 5) {
    display.textContent = 805;
    variable = 805;
    return;
  }

  if (variable == 80 && CurrentValue == 6) {
    display.textContent = 806;
    variable = 806;
    return;
  }

  if (variable == 80 && CurrentValue == 7) {
    display.textContent = 807;
    variable = 807;
    return;
  }

  if (variable == 80 && CurrentValue == 8) {
    display.textContent = 808;
    variable = 808;
    return;
  }

  if (variable == 80 && CurrentValue == 9) {
    display.textContent = 809;
    variable = 809;
    return;
  }

  // Display cases for when user clicks numbers from 810 to 819

  if (variable == 81 && CurrentValue == 0) {
    display.textContent = 810;
    variable = 810;
    return;
  }

  if (variable == 81 && CurrentValue == 1) {
    display.textContent = 811;
    variable = 811;
    return;
  }

  if (variable == 81 && CurrentValue == 2) {
    display.textContent = 812;
    variable = 812;
    return;
  }

  if (variable == 81 && CurrentValue == 3) {
    display.textContent = 813;
    variable = 813;
    return;
  }

  if (variable == 81 && CurrentValue == 4) {
    display.textContent = 814;
    variable = 814;
    return;
  }

  if (variable == 81 && CurrentValue == 5) {
    display.textContent = 815;
    variable = 815;
    return;
  }

  if (variable == 81 && CurrentValue == 6) {
    display.textContent = 816;
    variable = 816;
    return;
  }

  if (variable == 81 && CurrentValue == 7) {
    display.textContent = 817;
    variable = 817;
    return;
  }

  if (variable == 81 && CurrentValue == 8) {
    display.textContent = 818;
    variable = 818;
    return;
  }

  if (variable == 81 && CurrentValue == 9) {
    display.textContent = 819;
    variable = 819;
    return;
  }

  // Display cases for when user clicks numbers from 820 to 829

  if (variable == 82 && CurrentValue == 0) {
    display.textContent = 820;
    variable = 820;
    return;
  }

  if (variable == 82 && CurrentValue == 1) {
    display.textContent = 821;
    variable = 821;
    return;
  }

  if (variable == 82 && CurrentValue == 2) {
    display.textContent = 822;
    variable = 822;
    return;
  }

  if (variable == 82 && CurrentValue == 3) {
    display.textContent = 823;
    variable = 823;
    return;
  }

  if (variable == 82 && CurrentValue == 4) {
    display.textContent = 824;
    variable = 824;
    return;
  }

  if (variable == 82 && CurrentValue == 5) {
    display.textContent = 825;
    variable = 825;
    return;
  }

  if (variable == 82 && CurrentValue == 6) {
    display.textContent = 826;
    variable = 826;
    return;
  }

  if (variable == 82 && CurrentValue == 7) {
    display.textContent = 827;
    variable = 827;
    return;
  }

  if (variable == 82 && CurrentValue == 8) {
    display.textContent = 828;
    variable = 828;
    return;
  }

  if (variable == 82 && CurrentValue == 9) {
    display.textContent = 829;
    variable = 829;
    return;
  }

  // Display cases for when user clicks numbers from 830 to 839

  if (variable == 83 && CurrentValue == 0) {
    display.textContent = 830;
    variable = 830;
    return;
  }

  if (variable == 83 && CurrentValue == 1) {
    display.textContent = 831;
    variable = 831;
    return;
  }

  if (variable == 83 && CurrentValue == 2) {
    display.textContent = 832;
    variable = 832;
    return;
  }

  if (variable == 83 && CurrentValue == 3) {
    display.textContent = 833;
    variable = 833;
    return;
  }

  if (variable == 83 && CurrentValue == 4) {
    display.textContent = 834;
    variable = 834;
    return;
  }

  if (variable == 83 && CurrentValue == 5) {
    display.textContent = 835;
    variable = 835;
    return;
  }

  if (variable == 83 && CurrentValue == 6) {
    display.textContent = 836;
    variable = 836;
    return;
  }

  if (variable == 83 && CurrentValue == 7) {
    display.textContent = 837;
    variable = 837;
    return;
  }

  if (variable == 83 && CurrentValue == 8) {
    display.textContent = 838;
    variable = 838;
    return;
  }

  if (variable == 83 && CurrentValue == 9) {
    display.textContent = 839;
    variable = 839;
    return;
  }

  // Display cases for when user clicks numbers from 840 to 849

  if (variable == 84 && CurrentValue == 0) {
    display.textContent = 840;
    variable = 840;
    return;
  }

  if (variable == 84 && CurrentValue == 1) {
    display.textContent = 841;
    variable = 841;
    return;
  }

  if (variable == 84 && CurrentValue == 2) {
    display.textContent = 842;
    variable = 842;
    return;
  }

  if (variable == 84 && CurrentValue == 3) {
    display.textContent = 843;
    variable = 843;
    return;
  }

  if (variable == 84 && CurrentValue == 4) {
    display.textContent = 844;
    variable = 844;
    return;
  }

  if (variable == 84 && CurrentValue == 5) {
    display.textContent = 845;
    variable = 845;
    return;
  }

  if (variable == 84 && CurrentValue == 6) {
    display.textContent = 846;
    variable = 846;
    return;
  }

  if (variable == 84 && CurrentValue == 7) {
    display.textContent = 847;
    variable = 847;
    return;
  }

  if (variable == 84 && CurrentValue == 8) {
    display.textContent = 848;
    variable = 848;
    return;
  }

  if (variable == 84 && CurrentValue == 9) {
    display.textContent = 849;
    variable = 849;
    return;
  }

  // Display cases for when user clicks numbers from 850 to 859

  if (variable == 85 && CurrentValue == 0) {
    display.textContent = 850;
    variable = 850;
    return;
  }

  if (variable == 85 && CurrentValue == 1) {
    display.textContent = 851;
    variable = 851;
    return;
  }

  if (variable == 85 && CurrentValue == 2) {
    display.textContent = 852;
    variable = 852;
    return;
  }

  if (variable == 85 && CurrentValue == 3) {
    display.textContent = 853;
    variable = 853;
    return;
  }

  if (variable == 85 && CurrentValue == 4) {
    display.textContent = 854;
    variable = 854;
    return;
  }

  if (variable == 85 && CurrentValue == 5) {
    display.textContent = 855;
    variable = 855;
    return;
  }

  if (variable == 85 && CurrentValue == 6) {
    display.textContent = 856;
    variable = 856;
    return;
  }

  if (variable == 85 && CurrentValue == 7) {
    display.textContent = 857;
    variable = 857;
    return;
  }

  if (variable == 85 && CurrentValue == 8) {
    display.textContent = 858;
    variable = 858;
    return;
  }

  if (variable == 85 && CurrentValue == 9) {
    display.textContent = 859;
    variable = 859;
    return;
  }

  // Display cases for when user clicks numbers from 860 to 869

  if (variable == 86 && CurrentValue == 0) {
    display.textContent = 860;
    variable = 860;
    return;
  }

  if (variable == 86 && CurrentValue == 1) {
    display.textContent = 861;
    variable = 861;
    return;
  }

  if (variable == 86 && CurrentValue == 2) {
    display.textContent = 862;
    variable = 862;
    return;
  }

  if (variable == 86 && CurrentValue == 3) {
    display.textContent = 863;
    variable = 863;
    return;
  }

  if (variable == 86 && CurrentValue == 4) {
    display.textContent = 864;
    variable = 864;
    return;
  }

  if (variable == 86 && CurrentValue == 5) {
    display.textContent = 865;
    variable = 865;
    return;
  }

  if (variable == 86 && CurrentValue == 6) {
    display.textContent = 866;
    variable = 866;
    return;
  }

  if (variable == 86 && CurrentValue == 7) {
    display.textContent = 867;
    variable = 867;
    return;
  }

  if (variable == 86 && CurrentValue == 8) {
    display.textContent = 868;
    variable = 868;
    return;
  }

  if (variable == 86 && CurrentValue == 9) {
    display.textContent = 869;
    variable = 869;
    return;
  }

  // Display cases for when user clicks numbers from 870 to 879

  if (variable == 87 && CurrentValue == 0) {
    display.textContent = 870;
    variable = 870;
    return;
  }

  if (variable == 87 && CurrentValue == 1) {
    display.textContent = 871;
    variable = 871;
    return;
  }

  if (variable == 87 && CurrentValue == 2) {
    display.textContent = 872;
    variable = 872;
    return;
  }

  if (variable == 87 && CurrentValue == 3) {
    display.textContent = 873;
    variable = 873;
    return;
  }

  if (variable == 87 && CurrentValue == 4) {
    display.textContent = 874;
    variable = 874;
    return;
  }

  if (variable == 87 && CurrentValue == 5) {
    display.textContent = 875;
    variable = 875;
    return;
  }

  if (variable == 87 && CurrentValue == 6) {
    display.textContent = 876;
    variable = 876;
    return;
  }

  if (variable == 87 && CurrentValue == 7) {
    display.textContent = 877;
    variable = 877;
    return;
  }

  if (variable == 87 && CurrentValue == 8) {
    display.textContent = 878;
    variable = 878;
    return;
  }

  if (variable == 87 && CurrentValue == 9) {
    display.textContent = 879;
    variable = 879;
    return;
  }

  // Display cases for when user clicks numbers from 880 to 889

  if (variable == 88 && CurrentValue == 0) {
    display.textContent = 880;
    variable = 880;
    return;
  }

  if (variable == 88 && CurrentValue == 1) {
    display.textContent = 881;
    variable = 881;
    return;
  }

  if (variable == 88 && CurrentValue == 2) {
    display.textContent = 882;
    variable = 882;
    return;
  }

  if (variable == 88 && CurrentValue == 3) {
    display.textContent = 883;
    variable = 883;
    return;
  }

  if (variable == 88 && CurrentValue == 4) {
    display.textContent = 884;
    variable = 884;
    return;
  }

  if (variable == 88 && CurrentValue == 5) {
    display.textContent = 885;
    variable = 885;
    return;
  }

  if (variable == 88 && CurrentValue == 6) {
    display.textContent = 886;
    variable = 886;
    return;
  }

  if (variable == 88 && CurrentValue == 7) {
    display.textContent = 887;
    variable = 887;
    return;
  }

  if (variable == 88 && CurrentValue == 8) {
    display.textContent = 888;
    variable = 888;
    return;
  }

  if (variable == 88 && CurrentValue == 9) {
    display.textContent = 889;
    variable = 889;
    return;
  }

  // Display cases for when user clicks numbers from 890 to 899

  if (variable == 89 && CurrentValue == 0) {
    display.textContent = 890;
    variable = 890;
    return;
  }

  if (variable == 89 && CurrentValue == 1) {
    display.textContent = 891;
    variable = 891;
    return;
  }

  if (variable == 89 && CurrentValue == 2) {
    display.textContent = 892;
    variable = 892;
    return;
  }

  if (variable == 89 && CurrentValue == 3) {
    display.textContent = 893;
    variable = 893;
    return;
  }

  if (variable == 89 && CurrentValue == 4) {
    display.textContent = 894;
    variable = 894;
    return;
  }

  if (variable == 89 && CurrentValue == 5) {
    display.textContent = 895;
    variable = 895;
    return;
  }

  if (variable == 89 && CurrentValue == 6) {
    display.textContent = 896;
    variable = 896;
    return;
  }

  if (variable == 89 && CurrentValue == 7) {
    display.textContent = 897;
    variable = 897;
    return;
  }

  if (variable == 89 && CurrentValue == 8) {
    display.textContent = 898;
    variable = 898;
    return;
  }

  if (variable == 89 && CurrentValue == 9) {
    display.textContent = 899;
    variable = 899;
    return;
  }

  // Display cases for when user clicks numbers from 900 to 909

  if (variable == 90 && CurrentValue == 0) {
    display.textContent = 900;
    variable = 900;
    return;
  }

  if (variable == 90 && CurrentValue == 1) {
    display.textContent = 901;
    variable = 901;
    return;
  }

  if (variable == 90 && CurrentValue == 2) {
    display.textContent = 902;
    variable = 902;
    return;
  }

  if (variable == 90 && CurrentValue == 3) {
    display.textContent = 903;
    variable = 903;
    return;
  }

  if (variable == 90 && CurrentValue == 4) {
    display.textContent = 904;
    variable = 904;
    return;
  }

  if (variable == 90 && CurrentValue == 5) {
    display.textContent = 905;
    variable = 905;
    return;
  }

  if (variable == 90 && CurrentValue == 6) {
    display.textContent = 906;
    variable = 906;
    return;
  }

  if (variable == 90 && CurrentValue == 7) {
    display.textContent = 907;
    variable = 907;
    return;
  }

  if (variable == 90 && CurrentValue == 8) {
    display.textContent = 908;
    variable = 908;
    return;
  }

  if (variable == 90 && CurrentValue == 9) {
    display.textContent = 909;
    variable = 909;
    return;
  }

  // Display cases for when user clicks numbers from 910 to 919

  if (variable == 91 && CurrentValue == 0) {
    display.textContent = 910;
    variable = 910;
    return;
  }

  if (variable == 91 && CurrentValue == 1) {
    display.textContent = 911;
    variable = 911;
    return;
  }

  if (variable == 91 && CurrentValue == 2) {
    display.textContent = 912;
    variable = 912;
    return;
  }

  if (variable == 91 && CurrentValue == 3) {
    display.textContent = 913;
    variable = 913;
    return;
  }

  if (variable == 91 && CurrentValue == 4) {
    display.textContent = 914;
    variable = 914;
    return;
  }

  if (variable == 91 && CurrentValue == 5) {
    display.textContent = 915;
    variable = 915;
    return;
  }

  if (variable == 91 && CurrentValue == 6) {
    display.textContent = 916;
    variable = 916;
    return;
  }

  if (variable == 91 && CurrentValue == 7) {
    display.textContent = 917;
    variable = 917;
    return;
  }

  if (variable == 91 && CurrentValue == 8) {
    display.textContent = 918;
    variable = 918;
    return;
  }

  if (variable == 91 && CurrentValue == 9) {
    display.textContent = 919;
    variable = 919;
    return;
  }

  // Display cases for when user clicks numbers from 920 to 929

  if (variable == 92 && CurrentValue == 0) {
    display.textContent = 920;
    variable = 920;
    return;
  }

  if (variable == 92 && CurrentValue == 1) {
    display.textContent = 921;
    variable = 921;
    return;
  }

  if (variable == 92 && CurrentValue == 2) {
    display.textContent = 922;
    variable = 922;
    return;
  }

  if (variable == 92 && CurrentValue == 3) {
    display.textContent = 923;
    variable = 923;
    return;
  }

  if (variable == 92 && CurrentValue == 4) {
    display.textContent = 924;
    variable = 924;
    return;
  }

  if (variable == 92 && CurrentValue == 5) {
    display.textContent = 925;
    variable = 925;
    return;
  }

  if (variable == 92 && CurrentValue == 6) {
    display.textContent = 926;
    variable = 926;
    return;
  }

  if (variable == 92 && CurrentValue == 7) {
    display.textContent = 927;
    variable = 927;
    return;
  }

  if (variable == 92 && CurrentValue == 8) {
    display.textContent = 928;
    variable = 928;
    return;
  }

  if (variable == 92 && CurrentValue == 9) {
    display.textContent = 929;
    variable = 929;
    return;
  }

  // Display cases for when user clicks numbers from 930 to 939

  if (variable == 93 && CurrentValue == 0) {
    display.textContent = 930;
    variable = 930;
    return;
  }

  if (variable == 93 && CurrentValue == 1) {
    display.textContent = 931;
    variable = 931;
    return;
  }

  if (variable == 93 && CurrentValue == 2) {
    display.textContent = 932;
    variable = 932;
    return;
  }

  if (variable == 93 && CurrentValue == 3) {
    display.textContent = 933;
    variable = 933;
    return;
  }

  if (variable == 93 && CurrentValue == 4) {
    display.textContent = 934;
    variable = 934;
    return;
  }

  if (variable == 93 && CurrentValue == 5) {
    display.textContent = 935;
    variable = 935;
    return;
  }

  if (variable == 93 && CurrentValue == 6) {
    display.textContent = 936;
    variable = 936;
    return;
  }

  if (variable == 93 && CurrentValue == 7) {
    display.textContent = 937;
    variable = 937;
    return;
  }

  if (variable == 93 && CurrentValue == 8) {
    display.textContent = 938;
    variable = 938;
    return;
  }

  if (variable == 93 && CurrentValue == 9) {
    display.textContent = 939;
    variable = 939;
    return;
  }

  // Display cases for when user clicks numbers from 940 to 949

  if (variable == 94 && CurrentValue == 0) {
    display.textContent = 940;
    variable = 940;
    return;
  }

  if (variable == 94 && CurrentValue == 1) {
    display.textContent = 941;
    variable = 941;
    return;
  }

  if (variable == 94 && CurrentValue == 2) {
    display.textContent = 942;
    variable = 942;
    return;
  }

  if (variable == 94 && CurrentValue == 3) {
    display.textContent = 943;
    variable = 943;
    return;
  }

  if (variable == 94 && CurrentValue == 4) {
    display.textContent = 944;
    variable = 944;
    return;
  }

  if (variable == 94 && CurrentValue == 5) {
    display.textContent = 945;
    variable = 945;
    return;
  }

  if (variable == 94 && CurrentValue == 6) {
    display.textContent = 946;
    variable = 946;
    return;
  }

  if (variable == 94 && CurrentValue == 7) {
    display.textContent = 947;
    variable = 947;
    return;
  }

  if (variable == 94 && CurrentValue == 8) {
    display.textContent = 948;
    variable = 948;
    return;
  }

  if (variable == 94 && CurrentValue == 9) {
    display.textContent = 949;
    variable = 949;
    return;
  }

  // Display cases for when user clicks numbers from 950 to 959

  if (variable == 95 && CurrentValue == 0) {
    display.textContent = 950;
    variable = 950;
    return;
  }

  if (variable == 95 && CurrentValue == 1) {
    display.textContent = 951;
    variable = 951;
    return;
  }

  if (variable == 95 && CurrentValue == 2) {
    display.textContent = 952;
    variable = 952;
    return;
  }

  if (variable == 95 && CurrentValue == 3) {
    display.textContent = 953;
    variable = 953;
    return;
  }

  if (variable == 95 && CurrentValue == 4) {
    display.textContent = 954;
    variable = 954;
    return;
  }

  if (variable == 95 && CurrentValue == 5) {
    display.textContent = 955;
    variable = 955;
    return;
  }

  if (variable == 95 && CurrentValue == 6) {
    display.textContent = 956;
    variable = 956;
    return;
  }

  if (variable == 95 && CurrentValue == 7) {
    display.textContent = 957;
    variable = 957;
    return;
  }

  if (variable == 95 && CurrentValue == 8) {
    display.textContent = 958;
    variable = 958;
    return;
  }

  if (variable == 95 && CurrentValue == 9) {
    display.textContent = 959;
    variable = 959;
    return;
  }

  // Display cases for when user clicks numbers from 960 to 969

  if (variable == 96 && CurrentValue == 0) {
    display.textContent = 960;
    variable = 960;
    return;
  }

  if (variable == 96 && CurrentValue == 1) {
    display.textContent = 961;
    variable = 961;
    return;
  }

  if (variable == 96 && CurrentValue == 2) {
    display.textContent = 962;
    variable = 962;
    return;
  }

  if (variable == 96 && CurrentValue == 3) {
    display.textContent = 963;
    variable = 963;
    return;
  }

  if (variable == 96 && CurrentValue == 4) {
    display.textContent = 964;
    variable = 964;
    return;
  }

  if (variable == 96 && CurrentValue == 5) {
    display.textContent = 965;
    variable = 965;
    return;
  }

  if (variable == 96 && CurrentValue == 6) {
    display.textContent = 966;
    variable = 966;
    return;
  }

  if (variable == 96 && CurrentValue == 7) {
    display.textContent = 967;
    variable = 967;
    return;
  }

  if (variable == 96 && CurrentValue == 8) {
    display.textContent = 968;
    variable = 968;
    return;
  }

  if (variable == 96 && CurrentValue == 9) {
    display.textContent = 969;
    variable = 969;
    return;
  }

  // Display cases for when user clicks numbers from 970 to 979

  if (variable == 97 && CurrentValue == 0) {
    display.textContent = 970;
    variable = 970;
    return;
  }

  if (variable == 97 && CurrentValue == 1) {
    display.textContent = 971;
    variable = 971;
    return;
  }

  if (variable == 97 && CurrentValue == 2) {
    display.textContent = 972;
    variable = 972;
    return;
  }

  if (variable == 97 && CurrentValue == 3) {
    display.textContent = 973;
    variable = 973;
    return;
  }

  if (variable == 97 && CurrentValue == 4) {
    display.textContent = 974;
    variable = 974;
    return;
  }

  if (variable == 97 && CurrentValue == 5) {
    display.textContent = 975;
    variable = 975;
    return;
  }

  if (variable == 97 && CurrentValue == 6) {
    display.textContent = 976;
    variable = 976;
    return;
  }

  if (variable == 97 && CurrentValue == 7) {
    display.textContent = 977;
    variable = 977;
    return;
  }

  if (variable == 97 && CurrentValue == 8) {
    display.textContent = 978;
    variable = 978;
    return;
  }

  if (variable == 97 && CurrentValue == 9) {
    display.textContent = 979;
    variable = 979;
    return;
  }

  // Display cases for when user clicks numbers from 980 to 989

  if (variable == 98 && CurrentValue == 0) {
    display.textContent = 980;
    variable = 980;
    return;
  }

  if (variable == 98 && CurrentValue == 1) {
    display.textContent = 981;
    variable = 981;
    return;
  }

  if (variable == 98 && CurrentValue == 2) {
    display.textContent = 982;
    variable = 982;
    return;
  }

  if (variable == 98 && CurrentValue == 3) {
    display.textContent = 983;
    variable = 983;
    return;
  }

  if (variable == 98 && CurrentValue == 4) {
    display.textContent = 984;
    variable = 984;
    return;
  }

  if (variable == 98 && CurrentValue == 5) {
    display.textContent = 985;
    variable = 985;
    return;
  }

  if (variable == 98 && CurrentValue == 6) {
    display.textContent = 986;
    variable = 986;
    return;
  }

  if (variable == 98 && CurrentValue == 7) {
    display.textContent = 987;
    variable = 987;
    return;
  }

  if (variable == 98 && CurrentValue == 8) {
    display.textContent = 988;
    variable = 988;
    return;
  }

  if (variable == 98 && CurrentValue == 9) {
    display.textContent = 989;
    variable = 989;
    return;
  }

  // Display cases for when user clicks numbers from 990 to 999

  if (variable == 99 && CurrentValue == 0) {
    display.textContent = 990;
    variable = 990;
    return;
  }

  if (variable == 99 && CurrentValue == 1) {
    display.textContent = 991;
    variable = 991;
    return;
  }

  if (variable == 99 && CurrentValue == 2) {
    display.textContent = 992;
    variable = 992;
    return;
  }

  if (variable == 99 && CurrentValue == 3) {
    display.textContent = 993;
    variable = 993;
    return;
  }

  if (variable == 99 && CurrentValue == 4) {
    display.textContent = 994;
    variable = 994;
    return;
  }

  if (variable == 99 && CurrentValue == 5) {
    display.textContent = 995;
    variable = 995;
    return;
  }

  if (variable == 99 && CurrentValue == 6) {
    display.textContent = 996;
    variable = 996;
    return;
  }

  if (variable == 99 && CurrentValue == 7) {
    display.textContent = 997;
    variable = 997;
    return;
  }

  if (variable == 99 && CurrentValue == 8) {
    display.textContent = 998;
    variable = 998;
    return;
  }

  if (variable == 99 && CurrentValue == 9) {
    display.textContent = 999;
    variable = 999;
    return;
  }

  // Numbers from 0 to 9

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
