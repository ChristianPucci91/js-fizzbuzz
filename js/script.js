// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// STEP 1 create a cycle that gives numbers from 1 to 100.

/*STEP 2 Inside the cycle put a condition if a number is divisible by 3
has to show "Fizz" instead of the number.
if is divisible by 5 has to show "Buzz" and if is divisible by both has to
show "FizzBuzz".
So we'll have an if & else condition inside a while/for cycle*/

// creating variable to link with html

list = document.getElementById('stampa');

// creating a variable for the numbers & to print
var number = "";
var toPrint = "";

for (var i = 1; i < 101; i++) {
   // in this exercise we'll write a variable with same value of the counter
   // so every cycle the value will be +1
   number = i;
       // check if the number is divisible by 3 & 5 using modules
       if (number % 3 === 0 && number % 5 ===0 ) {
         toPrint += "<li>FizzBuzz</li>";
         // if number is divisible by 3 & 5 in console we'll have "FizzBuzz"
         // console.log(toPrint);
       } else if (number % 5 === 0) {
         toPrint += "<li>Buzz</li>";
         // if number is divisible by 5 in console we'll have "Buzz"
         // console.log(toPrint);
       } else if (number % 3 === 0 ) {
         toPrint += "<li>Fizz</li>";
         // if number is divisible by 3 in console we'll have "Fizz"
         // console.log(toPrint);
       }else {
         // if number is not divisible by 5 or 3 or both in console we'll have normal number
         toPrint += "<li>" + number + "</li>"
         // console.log(toPrint);
       }
       // if condition end
}
// cycle for end

// Taking "list" variable and tell him to use "toPrint" variable as an innerHTML cotent
// to print every <li> tag inside <ol> in html.

list.innerHTML = toPrint;
