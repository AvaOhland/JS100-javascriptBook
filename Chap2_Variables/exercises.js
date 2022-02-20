// Chapter 2 - Variables
//  Exercises 1-6


// Exercise 1 - included here instead of a separate file called greeter.js
let name = 'Victor';
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);


// Exercise 2 - included here instead of a separate file called age.js
let age = 53
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);


// Exercise 3
// We get an error message that foo is undefined because the variable is not available outside of
// the sceop of the block it was declared in.


// Exercise 4
// Only the first three logs will run, then we get an error message becuase the variable
// NAME is a constant and cannot be reassigned.


// Exercise 5
// It logs 'foo' because the variable was declared in the global scope and can be changed inside
// the block scope. If you remove th e word 'let' within the block, this same code will log 'qux'.


// Exercise 6
// You won't get an error because the second variable declaration is in a different scope, but if you
// move the second const outside the brackets, you would get an error.
