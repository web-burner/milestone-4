// convert inch to feet , miles to kilometer 

function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}

const height = inchToFeet(73);
console.log(height);


function mileToKilometer (mile) {
    const kilometer =  1.609344 * mile;
    return kilometer;
}

const kilo = mileToKilometer(10);
console.log(kilo)


// leap year

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is leap year`;
  }
}

const year = 2040;
const leapYear = checkLeapYear(year);
console.log(leapYear);


// calculate the average number of
// the odd numbers in an array

function oddAverage(numbers) {
  let oddNumbers = 0;
  let count = 0;
  for (let number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers += number;
      count++;

    }
  }
  const average = oddNumbers / count;
  return average;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
const avg = oddAverage(numbers);
console.log(avg);



// remove duplicate item from array

function noDuplicate(arr) {
  const uniqueArray = [];
  for (const item of arr) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
}

const arr = [
  "abul",
  "chabul",
  "nabul",
  "dabul",
  "abul",
  "bulbul",
  "chabul",
  "nabul",
];
const duplicate = noDuplicate(arr);
console.log(duplicate);


math.max : একাধিক নাম্বার এর মধ্যে বড় সংখ্যা বের করে।

example : 
// max number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const max = Math.max(...arr);
console.log(max);


math.min : একাধিক নাম্বার এর মধ্যে ছোট সংখ্যা বের করে। 

example : 
// min number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const min = Math.min(...arr);
console.log(min); 

math.abs : ২টি সংখ্যার gap টা দেয়।

example : // absolute number : 
console.log(Math.abs(5-15))

math.round : দশমিক সংখ্যা কে পূর্ণ সংখ্যা করে দেয় । (.1-.4) পর্যন্ত হলে .0 করে দিবে। 
(.5-.9) হলে পরের সংখ্যা করে দিবে। 

example : 

// round number 
console.log(Math.round(5.4));
console.log(Math.round(5.5));


math.ceil : কোনও সংখ্যা দশমিক আকারে থাকলে তা টেনে পরের সংখ্যা করে দেয়। মানে টেনে উপরে নিয়ে যায়।

exmaple : // ceiling number 
console.log(Math.ceil(0.1));


math.random : random নাম্বার জেনারেট করে।

example : // random number :
console.log(Math.random()*10);