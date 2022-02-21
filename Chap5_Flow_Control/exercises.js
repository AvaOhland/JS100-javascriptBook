// Chapter 5 - Flow Control
// Exercises 1-8


// Exercise 1
/*
false     false || (true && false);
true      true || (1 + 2)

&& and || can both return truthy and falsy values, not just booleans; they also use
short-circuit evaluation
WRONG true      (1 + 2) || true     correct answer is 3; last evealuated operand is 3
WRONG true      true && (1 + 2)     correct answer is 3; last evealuated operand is 3

false     false && (1 + 2)
true      (1 + 2) && true
false     (32 * 4) >= 129
false     false !== !true
false     true === 4
true      false === (847 ==='847')
false     false === (847 == '847)
true      (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false
          (false || (!20 === 20)) || 82 === 82 || false
          (false || false) || true || false
*/


// Exercise 2 
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};


// Exercise 3 
function evenOrOdd(num) {
  if(!Number.isInteger(num)) {
    console.log('That is not a valid number.');
    return;
  }

  if (num % 2 === 0) {
      console.log('even');
  } else {
    console.log('odd');
  }
};


// Exercise 4 
// Code logs 'Product2', 'Product3' and 'Product not found!' to the console. The function
// first checks to see if the input value is equal to '123'; when it is not it checks to
// see if the input value is equal lto '113' which it is, so it console.log for that case runs,
// but since there is no 'break' statement the code 'falls through' to the next case and logs
// the remaining two phrases.


// Exercise 5
if (foo()) {
  return 'bar';
} else {
  return qux();
}


// Exercise 6 
// The output to the console is 'Not Empty'. Even though the array is empty, it does exist add
// arrays are truthy, so the code executes the first branch of the if statemnet.


// Exercise 7
// function longTextToCaps(text) {
//   if (text.length <= 10) {
//     console.log(text);
//   } else {
//     console.log(text.toUpperCase());
//   }
// }

// Exercise 7 - REFACTORED
// The instructions said to return, not log, the result. I also reversed the order.
function longTextToCaps(text) {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}


// Exercise 8
function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
};