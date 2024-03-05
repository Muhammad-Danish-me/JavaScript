// Q.1
var a = 10;
document.write("The value of a is: " + a + "<br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
a++;
document.write("The value of a++ is: " + a + "<br>");
--a;
document.write("The value of --a is: " + a + "<br>");
a--;
document.write("The value of a-- is: " + a + "<br>");


// Q.2
var a = 2
var b = 1
var result = --a - --b + ++b + b--
//            1  -   0  +  1  +  1

// -- a  = 1
//  --a - --b  =  0
// --a - --b + ++b  =  1
// --a - --b + ++b + b--  =  1

document.write("your result is " + result )  // Result is 3


// Q.3
var userName = prompt("Enter your Name")

alert("Assalam u alaikum " + userName )
