//  Q.1

var firstName = prompt("Enter your First Name")
var lastName = prompt("Enter your Last Name")

var fullName = firstName + " " + lastName 

console.log("Hello " + fullName)


// Q.2
var favoriteMobileModel = prompt("Enter your favorite Mobile Model")
var favoriteMobileLenght = favoriteMobileModel.length

document.write("My Favorite Phone is " + favoriteMobileModel + "<br>" +"Length of string: " + favoriteMobileLenght)


// Q.3
var Country = "Pakistani"
var findIndex = Country.indexOf("n")

document.write("String " + Country + "<br>" +" index of n:" + findIndex )


// Q.4
var word = "Hello world"
var findLastIndex = word.lastIndexOf("l")

document.write("String: " + word + "<br>" + "Last index of l: " + findLastIndex )


// Q.5
var myCountry = "Pakistani"
var findThirdIndex = myCountry.charAt("3")

document.write("String: " + myCountry + "<br>" + "character at index 3: " + findThirdIndex )


// Q.6
var firstName2 = prompt("Enter your first name");
var lastName2 = prompt("Enter your last name");

var fullName2 = firstName2.concat(" " + lastName2); // concat() method is used to join two or more strings.

console.log("Hello, " + fullName2);


// Q.7
var cityName = "Hyderabad"
var replaceCityName = cityName.replace("Hyder", "Islam")

document.write("City:  " + cityName + "<br>" + "After Replacement: " + replaceCityName)


// Q.8
var message = "Ali and Sami are best friends. They play cricket and football together"
var replaceMessage = message.replaceAll("and", "&")

document.write("Message: Ali and Sami are best friends. They play cricket and football together" + "<br>" + "After Replacement:  " + replaceMessage)


// Q.9
var originalString = "472";
console.log(originalString + " " + (typeof originalString));

var convertNumber = Number(originalString);
console.log(convertNumber + " " + (typeof convertNumber));


// Q.10
var userInput = prompt("Inter anything")

console.log(userInput.toUpperCase())


// Q.11
var userInput1 = prompt("Inter anthing")

var titleCase = userInput1.charAt(0).toUpperCase() + userInput1.slice(1, userInput1.length);

console.log("User Input: " + userInput1 + "\nTitle Case: " + titleCase);


// Q.12
var num = 35.36;
var convertNum = num.toFixed(0);

console.log("Number: " + num + "\nResult: " + convertNum);