// Events

// Q.1
function displayAlert() {
  alert("Hello Sir How are you?");
}
//Q.2
function showAlert() {
  alert("Thanks For Purchasing a phone from us ");
}
// Q.3
function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}

// Q.4
function swapImage(type) {
  if (type == "over") {
    event.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSui31baHRlQ7kG9Oa_udoomRgONvhdmICdMhZ5U7_40A&s";
  } else {
    event.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkGhb9HYYqqIyNySCcQYTthS4scq3om-u7Ygsj5Tc_g&s";
  }
}

// Q.5
var display = document.getElementById("display");
var increament = document.getElementById("incre");
var decreament = document.getElementById("decre");


function increase() {
  display.innerText++;
}

function decrease() {
  display.innerText--;
}
function reset(){
    display.innerText = "0"
}