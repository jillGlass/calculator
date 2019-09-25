// create empty array. This holds the values that will be showen on the screen.
var enteredNumbers = [];
// create a variable  and set it to 0. Used when AC is pushed.
var total = 0;
// create a variable and assign it an empty string. This will hold the values of the buttons that have been pressed, without showing them on screen(entries does this).
var tempNumbers = "";
//take the text value of whatever button is pushed and assign it to variable val.
var valsElements = document.getElementsByClassName("button");
for (var i = 0; i < button.length; i++) {
  var vals = valsElements[i].innerText;

  //AKA when the a button is clicked, call an anonymous function that creates a variable called 'val' and asigns it the text value of the id/button that was pressed. Use this function for all buttons on calculator, therefore use if/else or switch statement.

  //if, val is a number (or not a NaN) or val is equal to a full stop '.'. Variable temp should have val added to it, then set the ID of the calculator screen to be the value of temp.
  if (vals != NaN(vals) || vals === ".") {
    var tempNumbers = tempNumbers + vals;
    var tempNumbers = document.getElementById("answer");
  }
  //if the variable val is equal to AC (the AC button has been pushed) entries should equal an empty array, temp should equal an empty string and total should equal 0. The screen) should equal an empty string using the val method.
  if (vals === AC) {
    var enteredNumbers = [];
    var tempNumbers = "";
    var total = 0;
    document.getElementById("answer").value = "";
  }

  // if val is equal to CE then clear temp using an empty string and the screen should equal an empty string using the val method. AKA clear last input.
  if (vals === CE) {
    var tempNumbers = "";
    document.getElementById("answer").value = "";
  }
  // if val is equal to x(multiply) push temp to entries. Push * to entries and set temp to an empty string. (change multiply symbol to work with eval)
  if (vals == "x") {
    enteredNumbers.push(tempNumbers);
    enteredNumbers.push("*");
    var tempNumbers = "";
  }

  //if val is equal to divide symbol push temp to entries. Push / to entries and set temp to an empty string.(Change divide symbol to work with eval)
  if (vals == "/") {
    enteredNumbers.push(tempNumbers);
    enteredNumbers.push("/");
    var tempNumbers = "";
  }

  // if val is equal to = then push temp to entries.(if equals signed is push, perform the calculation)
}
// create a variable to represent the numbers pushed, which is equal to the number that is the first index in entries.
// loop through the entries array.  Create variable nextNum that is equal to entries array item +1. This takes the next number (second one you pressed) and saves it.
/*function findButtonbyTextContent(text) {
    var buttons = document.querySelectorAll('button');
    for (var i=0, l=buttons.length; i<l; i++) {
      if (buttons[i].firstChild.nodeValue == text)
        return buttons[i];
    }  
  }*/
// create a variable to represent symbols. The value should be entries array item (var i from the loop)

//if symbol pushed is equal to +, then add nextNum to the pushed numbers variable.

// if symbol is equal to - then minus nextNum from the pushed numbers variable.

// if symbol is equal to * then add * nextNum with the pushed numbers variable.

// if symbol is equal to / then add / nextNum with the pushed numbers variable.

// then increment by one/check the next entry.

// Swap the '-' symbol (minus) so text input handles it correctly, so it's recognised as minus/negative number and not dash. AKA if pushed number variable is less than 0, then that variable is equal to the variable value + '-'. Use the Math.abs() function to do this.  (Math.abs(variable name) + "-";) Math.abs() function returns the absolute value of a number. The value of the pushed number variable should be pushed/placed to the screen, using ID. entries is set to an empty array and temp is an empty string

// else, push temp to entries and push val to entries and clear temp back to an empty string.

//////////
//functions that need to be covered off when building a calculator: AC button, CE button, Decimal and Number buttons. Evaluation of numbers.Update Display. Event listeners for clicks - both to update screen and perform operations.
