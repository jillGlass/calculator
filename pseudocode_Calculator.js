var decimalBtn = document.getElementById("dot");
var clear = document.getElementById("clear");
var on = document.getElementById("on");
var allNumbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var displayValElement = document.getElementById("display");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var equals = document.getElementById("equals");

// create empty array. This holds the values that will be calculated.
var evalStringArray = [];
// create a variable that is display number string.
var displayVal = 0;
// create a variable and assign it an empty string. This will hold the values of the buttons that have been pressed, showen on screen, then replaced with the next button press.
var pendingVal = "";

// when the a button is clicked, call a function that creates a variable and asigns it the text value of the id/button that was pressed.
for (var i = 0; i < allNumbers.length; i++) {
  allNumbers[i].addEventListener("click", updateNumDisplayVal, false);
}

function updateNumDisplayVal() {
  var buttonText = (document.getElementById(
    "display"
  ).innerHTML = this.getAttribute("data-key"));

  //get rid of 0 before pressed number
  if (displayVal === 0) {
    displayVal = "";
    //get rid of operator infront of numbers when entering numbers after pushing operator
  } else if (displayVal === "+") {
    displayVal = "";
  } else if (displayVal === "-") {
    displayVal = "";
  } else if (displayVal === "/") {
    displayVal = "";
  } else if (displayVal === "x") {
    displayVal = "";
  }
  displayVal += buttonText;
  pendingVal += displayVal;
  displayValElement.innerText = displayVal.substring(0, 9);
}
// decimal button can only be shown on display screen once.
decimalBtn.onclick = () => {
  if (!displayVal.includes(".")) displayVal += ".";
  displayValElement.innerText = displayVal;
};

//main clear button, clear out all pending values and set display back to 0
on.onclick = () => {
  pendingVal = "";
  evalStringArray = [];
  displayVal = 0;
  displayValElement.innerHTML = displayVal;
};

// clear button, clear last button press. If all numbers cleared then a zero will show. - update to clear last whole input?
clear.onclick = () => {
  displayVal = displayVal.substring(0, displayVal.length - 1);
  displayValElement.innerHTML = displayVal;
  if (displayVal === "") {
    displayVal = "0";
    displayValElement.innerHTML = displayVal;
  }
};
//  event listeners, once clicked they run through each number or operator until they get the number/operator that was clicked, then that value is displayed in the calculator.

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", updateOpDisplayVal, false);
}

function updateOpDisplayVal() {
  var buttonOpText = (document.getElementById(
    "display"
  ).innerHTML = this.getAttribute("data-key"));

  //loop through operators and get the button push to show on screen. eval?

  if (buttonOpText == "+") {
    pendingVal = displayVal; // move the displayed val onto pendingVal
    displayVal = buttonOpText; // displayVal will equal the symbol pushed
    displayValElement.innerText = displayVal; //screen/display will show symbol
    evalStringArray.push(pendingVal); // push the pendingVal to the array for calculation
    evalStringArray.push("+"); // push the operator to array for calculation
  } else if (buttonOpText == "-") {
    pendingVal = displayVal;
    displayVal = buttonOpText;
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push("-");
  } else if (buttonOpText == "x") {
    pendingVal = displayVal;
    displayVal = buttonOpText;
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push("*"); // send the programming operator
  } else if (buttonOpText == "/") {
    pendingVal = displayVal;
    displayVal = buttonOpText;
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push("/"); // send the programming operator
  } else if (buttonOpText == "=") {
    evalStringArray.push(displayVal); //push the = to the array so the calculation can take place
    var calculation = eval(evalStringArray.join(""));
    displayVal = calculation.toString().substring(0, 9);
    displayValElement.innerText = displayVal;
    if (displayVal.length > 8) {
      displayValElement.innerText = "too big soz";
    }
    displayVal = displayVal;
    evalStringArray.push(pendingVal); //clear out the pendingVal
    evalStringArray = []; //clear out the array
  }
}

//numbers run off screen if too long, how to fix?
//var calculation = eval(evalStringArray.join("")); //eval() runs the math between the brackets. join() thens joins the array values together. "" states an array with no space between each value.
//var rounded = calculation.toFixed(2);
//displayVal = rounded.toString().substring(0, 9);

//.toFixed(2)
