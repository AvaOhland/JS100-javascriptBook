/* Chapter 1 - The Basics
*  Exercises 1-12
*/

// Exercise 1
'Ava ' + 'Ohland';


// Exercise 2
num = 4936;
let ones = num % 10;
let tens = (num - ones) % 100 / 10;
let hundreds = ((num % 1000) - (num % 100)) / 100;
let thousands = (num -(num % 1000)) / 1000;


// Exercise 3
/*
*  'true' = String
*  false = Boolean
*  1.5 - Number
*  2 = Number
*  undefined = Undefined
* { foo: 'bar' } = Object
*/


// Exercise 4
/* 
*  Because Javascript treats any expression with the + operand and a
*  string in it as a string, and coherces any non-string values 
*  to the String data type and then concatenates the Strings.
*/

// Exercise 5
console.log(Number('5') + 10);


// Exercise 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);


// Exercise 7
// No, it just returns 'undefined'.


// Exercise 8
let names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];


// Exercise 9
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};


// Exercise 10
// Exercise 11
// Exercise 12
// Exercise 13
