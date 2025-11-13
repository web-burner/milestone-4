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



sum of all number in an array 
    using function 

function sumOfArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = sumOfArray(arr);
console.log(result);


// return all even numbers of an array

function evenNumbers(numbers) {
  const even = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onlyEven = evenNumbers(numbers);
console.log(onlyEven);


🧠 Function Practice Tasks (No New Topics)

🔹 1. Basic Function
	1.	একটা function বানাও sayHello() নামে — console.log করবে "Hello from Function!"
	2.	একটা function বানাও printName() — তোমার নাম console.log করবে এবং function call করো।

⸻

🔹 2. Function with Parameters
	1.	addNumbers(a, b) নামে একটা function বানাও যা দুই সংখ্যার যোগফল console.log করবে।
	2.	subtract(a, b) নামে function বানাও যা বিয়োগফল console.log করবে।
	3.	introduce(name, age) নামে function বানাও যা console.log করবে "My name is [name] and I am [age] years old."

⸻

🔹 3. Function with Arguments
	1.	multiply(a, b) নামে function বানাও এবং arguments হিসেবে দুইটা ভ্যারিয়েবল পাঠাও।
	2.	divide(a, b) নামে function বানাও এবং result console.log করো।
	3.	showCountry(name, country) function বানাও এবং call করার সময় variable দিয়ে arguments পাঠাও।

⸻

🔹 4. Return from Function
	1.	square(num) নামে function বানাও যা সংখ্যা square করে return করবে।
👉 return value একটি variable এ রেখে console.log করো।
	2.	cube(num) নামে function বানাও যা cube return করবে।
	3.	addAndReturn(a, b) নামে function বানাও যা দুই সংখ্যার যোগফল return করবে।

⸻

🔹 5. Return Based Condition
	1.	checkEvenOdd(number) নামে function বানাও — যদি even হয় "Even", না হলে "Odd" return করবে।
	2.	positiveOrNegative(number) নামে function বানাও — positive হলে "Positive" না হলে "Negative" return করবে।

⸻

🔹 6. Function with Array
	1.	sumOfArray(numbers) নামে function বানাও যা array এর সব সংখ্যার যোগফল return করবে।
	2.	evenNumbers(numbers) নামে function বানাও যা শুধুমাত্র even number গুলো return করবে।
	3.	oddNumbers(numbers) নামে function বানাও যা শুধুমাত্র odd number গুলো return করবে।

⸻

🔹 7. Mixed Function Practice 💥
	1.	findMax(numbers) নামে function বানাও — array এর মধ্যে সবচেয়ে বড় সংখ্যা return করবে।
	2.	findMin(numbers) নামে function বানাও — সবচেয়ে ছোট সংখ্যা return করবে।
	3.	doubleArray(numbers) নামে function বানাও — প্রতিটি সংখ্যা দ্বিগুণ করে নতুন array return করবে।
	4.	countEven(numbers) নামে function বানাও — even সংখ্যা কয়টা আছে তা return করবে।
	5.	checkArraySum(numbers) নামে function বানাও — যদি sum > 50 হয় "Large", না হলে "Small" return করবে।