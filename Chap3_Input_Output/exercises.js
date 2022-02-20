// Chapter 3 - Input/Output
//  Exercises 1-3


// you can only run one of these exercises at a time - comment out the two that 
// you don't want to run, otherwise you will get errors


// Exercise 1 - included here instead of a separate file called greeter.js
let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');
console.log(`Hello, ${name}!`);


// Exercise 2 - included here instead of a separate file called greeter.js
let rlSync = require('readline-sync');

let fname = rlSync.question('What is your first name? ');
let lname = rlSync.question('What is your last name? ');
console.log(`Hello, ${fname} ${lname}!`);


// Exercise 3 - included here instead of a separate file called age.js
let rlSync = require('readline-sync');

let age = Number( rlSync.question('What is your age? '));

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);


