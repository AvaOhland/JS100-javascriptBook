// Chapter 6 - Loops & Iterating
// Exercises 1-6


// Exercise 1
let rlSync = require('readline-sync');

let age = Number( rlSync.question('What is your age? '));
age = parseInt(age);

console.log(`You are ${age} years old.`);

for (let inTen = 10; inTen < 41; inTen += 10) {
  console.log(`In ${inTen} years, you will be ${age + inTen} years old.`);
}


// Exercise 2 
/* I wasn't able to figure this out on my own, so I am explaining how the code works.
The function accepts a number, let's say 5. The value of result is set to 1. The 'incrementor'
called 'count' is set to the same value as the input number. The value of count will be reduced
by 1 each time through the loop and that number will be mutiplied by the value of result and then
saved as the new value of result.
So, when the first loop executes, count is at 5 and result is at 1. On the second loop count is at
4 and result is at 5 (5 * 1). On the third loop count is 3 and result is 20 (5 * 4). On the fourth loop
count is 2 and result is 60 (20 * 3). On the fifth loop count is 1 and result is 120 (60 x 2).
On the next loop count is zero, which no longer meets the controlling condition of count > 0
so the program stops and the final result is 120 which is 5! or 5*4*3*2*1.
*/
function factorial(num) {
  let result = 1;
  for (let count = num; count > 0; count -= 1) {
    result *= count;
  }
  return result;
}

console.log(factorial(7));


// Exercise 3 
// Because counter = 1 evaluates as 'truthy', the loop never ends. 
// The conditional statement of the while loop 'resets' the value of counter to 1 each time
// the loop runs. The value of counter is never greater than 2 when it reaches line 7.


// Exercise 4 
// It doesn't cause an error becuase the components of the for loop are all optional.
// The increment statement is inside the block instead of the same line as the for, so
// the code still runs.


// Exercise 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0; 
let result;

do {
  result = randomNumberBetween(1, 100);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


// Exercise 6 
// I didn't get this one, either. I undertand how it works, but couldn't arrive at the
// solution just thinking about it on my own.
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(7));