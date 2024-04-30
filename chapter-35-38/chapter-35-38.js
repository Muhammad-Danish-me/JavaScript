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
