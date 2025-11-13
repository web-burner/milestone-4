function : function হচ্ছে একটা block of code। যা বার বার ব্যবহার করা যায়।

syntax : 
function myFunc() {
  console.log("This is function");
}
myFunc(); // function call


function parameters : function এ ডাটা pass করার জন্য variable এর ন্যায় প্রথম বন্ধনীর মধ্যে যা লেখা হয় তাই parameter

example : function myFunc(parameter1, parameter2) {
  console.log(
    `${parameter1} and ${parameter2} multiply equal to ${
      parameter1 * parameter2
    }`
  );
}

myFunc(10, 5); // function call

function এর মধ্যে যতটা parameter ডিক্লেয়ার করা হবে function call করার সময় ঠিক ততটা ভ্যালু বা arguments pass করতে হবে। ভ্যালু খুঁজে না পেলে undefined দিবে। 
function এর parameter কে বাহির থেকে access করা যাবে না error দিবে।

square function :

function square(a) {
  console.log(a ** 2);
}
square(5);

এইভাবে আমরা চাইলে একাধিক প্যারামিটার নিয়ে ফাঙ্কশন এর মধ্যে কিছু কাজ করে তা আউটপুট বের করতে পারি 


arguments : function call করার সময় যেই ভ্যালু pass করছি তাই arguments 

example : 

function myFunc (para1,para2){
    do some work
}

myFunc(arguments,arguments)

এখানে আমরা চাইলে আলাদা ভ্যারিয়েবল declare করেও ওই ভ্যারিয়েবল arguments হিসাবে পাঠাতে পারি।

example: 
function multiply(a, b) {
  console.log(a * b);
}
const a = 5;
const b = 7;
multiply(a, b);

function return and set return value to a variable 

return from function 
// return a value from function 

function doubleIt (num) {
  const result = num * 2;
  return result;
}

doubleIt(5)

এইভাবে রিটার্ন করলে ভ্যালুটা নিয়ে কোনও কাজে লাগানো যায় না। 
তাই এই ভ্যালু কে কাজে লাগাতে চাইলে একটা ভ্যারিয়েবল এর মধ্যে রাখতে হবে। 

example : 
function doubleIt(num) {
  const result = num * 2;
  return result;
}

const output = doubleIt(5);
console.log(output);

example 2 : // check even odd number 
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return `${number} is Even number`;
  } else {
    return `${number} is Odd number`;
  }
}

const result = checkEvenOdd(10);
console.log(result);
