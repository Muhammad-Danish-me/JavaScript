// Q.1

function currentDate(){
    var date = new Date();
    document.write(date)
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
function addtwoNumbers(){
    var firstNumber = +prompt("Enter First Number")
    var secondNumber = +prompt("Enter Second Number")
    var sum = firstNumber + secondNumber
    alert("The sum of two Numbers; " + sum)
}

// addtwoNumbers();