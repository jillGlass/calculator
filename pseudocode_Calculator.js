// create empty array and name it 'entries'
// create a variable called 'total' and set it to 0
// create a variable called 'temp' and assign it an empty string

//Each comment relates to code below it!

//when the element with the ID of 'button' is clicked, call an anonymous function that creates a  variable called 'val' and asigns it the value of $'button'.text()
$("button").on("click", function() {
  var val = $(this).text();

  //use multiple conditional statements to create the below:

  //if, using the isNaN() function, whether 'val' is an illegal number or not. Or, whether 'val' is strictly equal to a full stop '.'. The block code should equate the variable 'temp' to equal 'temp' plus 'val'.  Block code should also set the value attribute for the id'answer' using substring method.
  // Shortened version: If value is a number or decimal, add the value to temp variable and reset the answer id/screen to be the value of temp, using substring method.
  if (!isNaN(val) || val === ".") {
    temp += val;
    $("#answer").val(temp.substring(0, 10));
    //if val variable is strictly equal to AC, entries should equal an empty array, temp should eual an empty string and total should equal 0.  $'#answer (the screen) should equal an empty string using the val method.
    //  Short version: Got some symbol other than equals, add temp to our entries then add our current symbol and clear temp.
  } else if (val === "AC") {
    entries = [];
    temp = "";
    total = 0;
    $("#answer").val("");
    // if val is equal to CE then clear temp using an empty string and $'#answer (the screen) should equal an empty string using the val method. AKA clear last input.
  } else if (val === "CE") {
    temp = "";
    $("#answer").val("");

    // Change multiply symbol to work with eval ==  if val is equal to x(multiply) push temp to entries. Push * to entries and set temp to an empty string.
  } else if (val === "x") {
    entries.push(temp);
    entries.push("*");
    temp = "";

    // Change divide symbol to work with eval ==  if val is equal to divide symbol push temp to entries. Push / to entries and set temp to an empty string.
  } else if (val === "÷") {
    entries.push(temp);
    entries.push("/");
    temp = "";

    // Got the equals sign, perform calculation == if val is equal to = then push temp to entries.
  } else if (val === "=") {
    entries.push(temp);

    // create a variable called nt which is equal to the first array index in 'entries'. Use the Number() constructor to work with the numerical values in entries.
    // loop through the entries array.  Create variable nextNum that is equal to entries array item +1.
    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i + 1]);
      var symbol = entries[i];
      // if symbol is equal to + then nt is equal to nt + nextNum
      if (symbol === "+") {
        nt += nextNum;
        // if symbol is equal to - then nt is equal to nt - nextNum
      } else if (symbol === "-") {
        nt -= nextNum;
        // if symbol is equal to * then nt is equal to nt * nextNum
      } else if (symbol === "*") {
        nt *= nextNum;
        // if symbol is equal to / then nt is equal to nt / nextNum
      } else if (symbol === "/") {
        nt /= nextNum;
      }
      // increment by one/check the next entry.
      i++;
    }

    // Swap the '-' symbol (minus) so text input handles it correctly == if nt is less than 0, then nt is equal to nt value + '-'. Use the Math.abs() function to do this.  (Math.abs(nt) + "-";) Math.abs() function returns the absolute value of a number.
    if (nt < 0) {
      nt = Math.abs(nt) + "-";
    }
    // #answer id val(nt), entries is an empty array and temp is an empty string
    $("#answer").val(nt);
    entries = [];
    temp = "";

    // else, push temp to entries and push val to entries and clear temp back to an empty string.
  } else {
    entries.push(temp);
    entries.push(val);
    temp = "";
  }
});
