// Q.1
var date = new Date();
document.write(date)

// Q.2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var date2 = new Date();
var month = months[date.getMonth()]

alert("Current Mont: " + month)

// Q.3
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var getDay = days[date.getDay()].slice(0,3)

alert("Today is: " + getDay)

// Q.4
var days2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var getday2 = days2[date.getDay()]

if(getday2 === "Sunday" || getday2 === "Saturday"){
    alert("It's Fun Day")
}else{
    alert("Working Day")
}


// Q.5
var getdate2 = date.getDate()
if (getdate2 < 16) {
  console.log("First Fifteen Days of Month");
}else{
    console.log("Last Days Of month")
}
