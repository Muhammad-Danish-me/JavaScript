//  Q.1

var positiveInteger = +prompt("Enter a positive integer number");

var roundOff = Math.round(positiveInteger);
var floor = Math.floor(positiveInteger);
var ceil = Math.ceil(positiveInteger);

console.log("number:" + positiveInteger)
console.log("Round Off:" + roundOff)
console.log("Floor:" + floor)
console.log("Ceil:" + ceil)


// Q.2
var negativeInteger = +prompt("Enter a Negative floating point number");

var roundOff2 = Math.round(negativeInteger);
var floor2 = Math.floor(negativeInteger);
var ceil2 = Math.ceil(negativeInteger);

console.log("Number:" + negativeInteger)
console.log("Round off:" + roundOff2)
console.log("Floor:" + floor2)
console.log("Ceil:" + ceil2)


//  Q.3



// Q.4
 var dice = Math.floor(Math.random() * 6 + 1) 

 console.log("Random Dice Value: " + dice)


//  Q.5
var coinsValue = Math.floor(Math.random() * 2 + 1)

if (coinsValue === 1){
    console.log(coinsValue)
    console.log("Random Coin Value: Tails")
}else if(coinsValue === 2){
    console.log(coinsValue)
    console.log("Random Coin Value: Heads")
}else{
    console.log("Error the number is not 1 or 2")
}



// Q.6
var randomNumber = Math.floor(Math.random() * 100)

console.log("Random number between 1 and 100: " + randomNumber)



// Q.7
var userWeight = prompt("Enter your weight in kilograms");

var convertToNumber = parseFloat(userWeight);

if(!isNaN(convertToNumber)){
    console.log("The weight of user is " + convertToNumber + " kilograms");
}else{
    console.log("Error: Please enter a number");

}


// Q.8
var userInput = +prompt("guess Number between 1 to 10")
var secretNum = Math.floor(Math.random() * 10)

if (userInput === secretNum){
    console.log("congratulate for Correct guess")
}else{
    console.log(secretNum)
    console.log("Wrong! Better luck Next time.")
}