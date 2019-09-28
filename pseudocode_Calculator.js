var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var zeroBtn = document.getElementById("zero");
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
// create a variable that is display number string
var displayVal = 0;

// create a variable and assign it an empty string. This will hold the values of the buttons that have been pressed, showed on screen, then replaced with the next button press.
var pendingVal = "";

// when the a button is clicked, call a function that creates a variable and asigns it the text value of the id/button that was pressed.

function updateDisplayVal() {
  var buttonText = (document.getElementById(
    "display"
  ).innerHTML = this.getAttribute("data-key"));

  //get rid of 0 before pressed number
  if (displayVal === 0) {
    displayVal = "";
  }
  displayVal += buttonText;
  pendingVal = displayVal;
  evalStringArray.push(pendingVal);
  displayValElement.innerText = displayVal.substring(0, 9);
}

//  event listeners, once clicked they run through each number or operator until they get the number/operator that was clicked, then that value is displayed in the calculator.
for (var i = 0; i < allNumbers.length; i++) {
  allNumbers[i].addEventListener("click", updateDisplayVal, false);
}
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", updateDisplayVal, false);
}

//main clear button, clear out all pending values and set display back to 0
on.onclick = () => {
  pendingVal = "";
  evalStringArray = [];
  displayVal = 0;
  displayValElement.innerHTML = displayVal;
};

// clear button, clear last button press
clear.onclick = () => {
  pendingVal = pendingVal.substring(0, pendingVal.length - 1);
  displayValElement.innerHTML = pendingVal;
};

var performEvaluation = () => {
  var operators = (document.getElementById(
    "display"
  ).innerHTML = this.getAttribute("data-key"));
  switch (operators) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0"; // will display as 0, need to change to stay as number last pushed
      displayValElement.innerText = displayVal; //displayValElement is our "answer" class. this states that what should show in the answer space is the displayVal variable, declared previously as 0
      evalStringArray.push(pendingVal); //push saved previous digits to the array
      evalStringArray.push("+"); //push the + button once pushed on to the array to be saved
      break;

    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;

    case "x":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*"); // use the js method of multiplication
      break;

    case "/":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;

    case "=":
      evalStringArray.push(displayVal); //get the array that will hold pending values and push the display value on to it
      var evaluation = eval(evalStringArray.join("")); //eval() runs the math between the brackets. join() thens the array values together into a string. "" states a string with a space between each value.
      displayVal = evaluation + ""; // evaluation variable will be displayed in the answer box
      displayValElement.innerText = displayVal; //the answer box will be equal to the displayVal (the answer)
      evalStringArray.push(pendingVal); //add all the pending values onto the array
      evalStringArray = [];
      break;
  }
};

/*
//loop through operators and get the button push to show on screen. eval?
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", updateDisplayVal, false);

  } //else if (operators[i] == "+") {
  //pendingVal = displayVal; // move the displayed val onto pending to make way for the symbol
  //updateDisplayVal(); // displayVal will equal the symbol pushed and screen/display will show symbol
  // evalStringArray.push(pendingVal);
  // evalStringArray.push("+");
}


  // create a variable to represent symbols. The value should be entries array item (var i from the loop)
  var symbolPress = enteredNumbers[i];
  //if symbol pushed is equal to +, then add nextNum to the pushed numbers variable.
  if (symbolPress == "+") {
    numPress = numPress + nextNumber;
  }
  // if symbol is equal to - then minus nextNum from the pushed numbers variable.
  else if (symbolPress == "-") {
    numPress = numPress - nextNumber;
  }
  // if symbol is equal to * then add * nextNum with the pushed numbers variable.
  else if (symbolPress == "*") {
    numPress = numPress * nextNumber;
  }
  // if symbol is equal to / then add / nextNum with the pushed numbers variable.
  else if (symbolPress == "/") {
    numPress = numPress / nextNumber;
  }
  // then increment by one/check the next entry.
  i++;
}
// Swap the '-' symbol (minus) so text input handles it correctly, so it's recognised as minus/negative number and not dash. AKA if pushed number variable is less than 0, then that variable is equal to the variable value + '-'. Use the Math.abs() function to do this.  (Math.abs(variable name) + "-";) Math.abs() function returns the absolute value of a number. The value of the pushed number variable should be pushed/placed to the screen, using ID. entries is set to an empty array and temp is an empty string

// else, push temp to entries and push val to entries and clear temp back to an empty string.
*/
