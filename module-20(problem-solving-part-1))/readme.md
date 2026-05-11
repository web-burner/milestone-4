module - 20 (problem solving part 1)

recap 
    1. variable 
        2. number 
        3. string 
        4. boolean 
        5. object 
        6. array 
    2. conditional 
        1. if else / else if
        2. operator
    3. array 
        1. array 
        2. array method 
    4. loop 
        1. for of loop 
        2. while loop 
        3. for loop 
        4. for in loop
    5. break
    6. continue 
    7. object 
        1. dot notation
        2. bracket notation 
    6. function 
        1. parameter 
        2. arguments 
        3. return 
    7. const 
    8. let 


problems 
1. Inch to Feet 
function inchToFeet(num) {
  if (num <= 0) {
    return "Invalid Number";
  } else {
    let feetInch = num / 12;
    let feet = parseInt(feetInch);
    let feetFloat = num % 12;

    return `I'm ${feet}feet ${feetFloat}Inch tall`;
  }
}

console.log(inchToFeet(70));
2. miles to kilometers 
3. check leap year 
4. average of odds numbers 
function averageOdds(arr) {
  // console.log(arr)
  const odds = [];
  for (let num of arr) {
    if (num % 2 !== 0) {
      // console.log(num)
      odds.push(num);
    }
  }
  // console.log(odds)
  let sum = 0;
  let count = 0;
  for (let odd of odds) {
    sum += odd;
    count++;
  }
  // console.log(sum,count)
  return sum / count;
}

const numbers = [
  23, 42, 235, 567, 3, 2, 5, 47, 254, 45, 31, 656, 76, 34, 45, 66, 41,
];
const average = averageOdds(numbers);
console.log(average);

5. remove duplicates from array 
const persons = ['shaon','sajjat','rahim','rana','shaon','rana']
function checkDuplicates (names){
  // console.log(names)
  const validList = []
  for(let name of names){
    // console.log(name)
    if(!validList.includes(name)){
      validList.push(name)
    }
  }
  console.log(validList)
}

checkDuplicates(persons)

6. min number using math method

const min = Math.min(23,34,253,22,14,212,12,32)
console.log(min)

7. max number using math method 
const min = Math.max(23,34,253,22,14,212,12,32)
console.log(min)

8. absolute number (gives the of gap between 2 given numbers)
const absolute = Math.abs(5,10)
console.log(absolute)
    
9. round 
const rounding = Math.round(1.4)
console.log(rounding)

10. floor 
const rounding = Math.floor(1.9)
console.log(rounding)

11. ceil 
const rounding = Math.ceil(1.2)
console.log(rounding)

12. random 

const randomNum = Math.random()*999999
console.log(Math.round(randomNum))

13. date and time 
const today = new Date()
console.log(today)
console.log(today.getDay())
console.log(today.getDate())
console.log(today.getMonth())
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())
console.log(today.toLocaleString())

14. swap variable and destructing 
let x = 5;
let y = 7;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
