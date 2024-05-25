// Q.1

function currentDate() {
  var date = new Date();
  document.write(date);
}
// currentDate();  // Calling function

// Q.2

function printName() {
  let firstName = prompt("Enter your first name");
  let lastName = prompt("Enter your last name");
  let fullName = firstName + " " + lastName;
  alert("Hello, " + fullName);
}

// printName();

// Q.3
function addtwoNumbers() {
  var firstNumber = +prompt("Enter First Number");
  var secondNumber = +prompt("Enter Second Number");
  var sum = firstNumber + secondNumber;
  alert("The sum of two Numbers: " + sum);
}

// addtwoNumbers();

// Q.4
function calculator(num1, num2, opr) {
  num1 = +prompt("Enter First Number");
  num2 = +prompt("Enter Second Number");
  opr = prompt("Enter Operator");

  var result;
  if (opr === "+") {
    result = num1 + num2;
  } else if (opr === "-") {
    result = num1 - num2;
  } else if (opr === "*") {
    result = num1 * num2;
  } else if (opr === "/") {
    result = num1 / num2;
  } else if (opr === "%") {
    result = num1 % num2;
  } else {
    result = "Invalid Operator";
  }

  alert("Result: " + result);
}

// calculator();


// Q.5
function square(sq) {
  sq = +prompt("Enter a number to find its square");
  var res = sq * sq;
  return res;
}

// var squareValue = square();
// alert("Square of given number is: " + squareValue);


// Q.6
function factorial(num) {
  num = +prompt("Enter a number to find it's factorial");
  var res = 1;
  for (var i = num; i >= 1; i--) {
    res = res * i;
  }
  return res;
}

// var factorialValue = factorial();
// alert("Factorial of given number is: " + factorialValue);

// Q.7
function counting(start, end) {
  start = +prompt("Enter starting number");
  end = +prompt("Enter ending number");
  for (var i = start; i <= end; i++) {
    document.write(i + "<br/>");
  }
  return;
}

// counting();

// Q.10
function palindrome(str) {
  if (str === str.split("").reverse().join("")) {
    alert("Given string is palindrome: " + str);
  } else {
    alert("Given string is not palindrome: " + str);
  }
}

var strValue = prompt("Enter a string to check if it is palindrome or not");
palindrome(strValue);
