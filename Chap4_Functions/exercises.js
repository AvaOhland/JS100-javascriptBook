// Chapter 4 - Input/Output
//  Exercises 1-5


// Exercise 1
// The code logs 1 to the console. Calling the foo() function doesn't affect the
// output of the console.log because the variable bar isn't changed outside the
// scope of the function. It is important to note that it is the use of 'let' that
// creates the inner scope and a second instace of the variable 'bar'. If the word
// let is removed from the code it would log 2 to the console, since the function 
// now changes the value of the global variable bar.


// Exercise 2 - included here instead of a separate file called greeter.js
// function getName(input) {
//   let readlineSync = require('readline-sync');
//   let name = readlineSync.question(input);
//   return name;
// };

// let fname = getName('What is your first name? ');
// let lname = getName('What is your last name? ');
// console.log(`Hello, ${fname} ${lname}!`);


// Exercise 3 - included here instead of a separate file called multiply.js
// function getNum(input) {
//   let readlineSync = require('readline-sync');
//   let num = Number(readlineSync.question(input));
//   return num;
// };

// function multiply(a,b) {
//   let result = num1 * num2;
//   return result;
// };

// let num1 = getNum('Enter a number: ');
// let num2 = getNum('Enter another number: ');
// let result = multiply(num1, num2);

// console.log(`${num1} * ${num2} = ${result}`);

// Exercise 3 - REFACTORED
function getNum(input) {
  let readlineSync = require('readline-sync');
  return Number(readlineSync.question(input));
  // The solution used parseFloat instead of Number. I believe this was in case
  // the user entered as part of the number. Number would return NaN if 2aaa was entered
  // by the user, wherease parseFloat would convert the value to 2.
  // return parseFloat(readlineSync.question(input));
};

function multiply(a, b) {
  return a * b;
};

let num1 = getNum('Enter a number: ');
let num2 = getNum('Enter another number: ');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);


// Exercise 4
// Nothing is logged to the console. The code stops running when it hits the return statement
// on line 3. If the return statement is removed it would log 'Yipeee!!!!'.


// Exercise 5 - included here instead of a separate file called age.js
// Nothing is logged to the console - console.log() is never called. The function returns a value
// of 'Yipeee!!!!' but nothing is done with it.