// *Variables*
// Create a variable and console log the value
let myAge = 26;
console.log(myAge);


// Create a variable, add 10 to it, and alert the value

let myBirthYear = 1998;
myBirthYear += 10;
alert(myBirthYear)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracFourNumbers(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}

// Create a function that divides one number by another and returns the remainder
function divides(num1, num2) {
  return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function isNumberGreaterThanFifty(num1, num2) {
  if (num1 + num2 > 50) {
    alert("jumanji");
  }
  alert("not jumanji");
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function isNumberDivisible(num1, num2, num3) {
  if ((num1 * num2 * num3) % 3 === 0) {
    alert("ZEBRA");
  }
  alert("not ZEBRA");
}
