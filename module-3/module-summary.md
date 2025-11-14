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


