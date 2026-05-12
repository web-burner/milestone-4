// const fruits = ["apple", "mango", "banana", "litchi", "watermelon"];
// for(let fruit of fruits){
//   console.log(fruit)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.reverse()
// console.log(numbers)
// const reversed = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversed.push(numbers[i]);
// }
// console.log(reversed);
// for(let i of numbers){
//   reversed.unshift(i)
// }
// console.log(reversed)

// const numbers = [2,3,1,6,8,3,11,79,452,64]
// numbers.sort((a,b)=> a-b)
// console.log(numbers)

// const students = [
//   { name: "Shaon", age: 24, isStudent: false },
//   { name: "Sajjat", age: 15, isStudent: false },
//   { name: "Rahim", age: 14, isStudent: true },
// ];
// // console.log(students[0].name)
// for(let student of students){
//   console.log(student.name)
// }

// const arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
// ];
// console.log(arr[0][3])

// const arr1 = [1,2,3,4,5];
// const arr2 = [...arr1]
// console.log(arr1)
// arr2.push(6)
// console.log(arr2)

// function myFunc() {
//   console.log("hello, I'm from function");
// }
// // myFunc();

// function sum (a,b){
//     return (a+b)
// }
// const result = sum(5,7)
// console.log(result)

// function square (a){
//     return a**2
// }
// const squareResult = square(20)
// console.log(squareResult)

// function doubleIt(num) {
//   return num * 2;
// }

// const doubleValue = doubleIt(10);
// console.log(doubleValue);

// function sum(a, b) {
//   const total = a + b;
//   return total;
// }
// const result = sum(5, 7);
// console.log(result);

// function evenOdd (a){
//     if(a % 2 === 0){
//         console.log('Even')
//         return ;
//     }else{
//         console.log('Odd')
//         return;
//     }
// }
// evenOdd(6)
// const evenArray = []
// function isEven(arr) {
//   for (let evenNumber of arr) {
//     if (evenNumber % 2 === 0) {
//       console.log(evenNumber)
//     }
//   }
// }
// const numbers = [2, 3, 5, 9, 7, 6];
// isEven(numbers);
// console.log(evenArray)

// function sum(numbers) {
// let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const result = sum(nums);
// console.log(result)

// function evenNumber(numbers) {
//   const even = [];
//   for (let num of numbers) {
//     if (num % 2 !== 0) {
//       even.push(num);
//     }
//   }
//   return even;
// }
// const numbers = [23, 43, 54, 6, 476, 78, 67, 98];
// const evenNum = evenNumber(numbers);
// console.log(evenNum);

// conceptual class

// const arr = ['Shaon','Sajjat','Rana']
// const arr2= []
// for(let i of arr){
// arr2.push('Mr. '+ i)
// }
// console.log(arr2)

// const students = [
//   { name: "Shaon", age: 24 },
//   { name: "Sajjat", age: 15 },
// ];
// console.log(`${students[0].name} is ${students[0].age} years old`)

// const str = 'I am a web developer';
// let reversed = '';
// for(let i = str.length-1; i>=0 ; i--){
//     reversed += str[i]
// }
// console.log(reversed)

// (function () {
//   console.log("hello Bangladesh");
// })();

// function cubeNumbers(num) {
//   if(typeof num === 'number' && num >0){
//     return num ** num;
//   }else{
//     return 'Invalid Number'
//   }
// }
// const cube = cubeNumbers(3);
// console.log(cube);

// function includesStr(str1, str2) {
//   if (str1.toLowerCase().includes(str2.toLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // console.log(includesStr("Md Shaon Rana", "rana"));

// function maxNum(arr) {
//   // console.log(arr)
//   let max = arr[0];
//   let min;
//   if (max < arr[1]) {
//     min = max;
//     max = arr[1];
//   }
//   return [max, min];
// }

// console.log(maxNum([4, 6]));

// module 20
// function inchToFeet(num) {
//   if (num <= 0) {
//     return "Invalid Number";
//   } else {
//     let feetInch = num / 12;
//     let feet = parseInt(feetInch);
//     let feetFloat = num % 12;

//     return `I'm ${feet}feet ${feetFloat}Inch tall`;
//   }
// }

// console.log(inchToFeet(70));

// function averageOdds(arr) {
//   // console.log(arr)
//   const odds = [];
//   for (let num of arr) {
//     if (num % 2 !== 0) {
//       // console.log(num)
//       odds.push(num);
//     }
//   }
//   // console.log(odds)
//   let sum = 0;
//   let count = 0;
//   for (let odd of odds) {
//     sum += odd;
//     count++;
//   }
//   // console.log(sum,count)
//   return sum / count;
// }

// const numbers = [
//   23, 42, 235, 567, 3, 2, 5, 47, 254, 45, 31, 656, 76, 34, 45, 66, 41,
// ];
// const average = averageOdds(numbers);
// console.log(average);

// const persons = ['shaon','sajjat','rahim','rana','shaon','rana']
// function checkDuplicates (names){
//   // console.log(names)
//   const validList = []
//   for(let name of names){
//     // console.log(name)
//     if(!validList.includes(name)){
//       validList.push(name)
//     }
//   }
//   console.log(validList)
// }

// checkDuplicates(persons)

// const min = Math.min(23,34,253,22,14,212,12,32)
// console.log(min)
// const min = Math.max(23,34,253,22,14,212,12,32)
// console.log(min)

// const absolute = Math.abs(5,10)
// console.log(absolute)

// const rounding = Math.round(1.4)
// console.log(rounding)
// const rounding = Math.floor(1.9)
// console.log(rounding)
// const rounding = Math.ceil(1.2)
// console.log(rounding)

// const randomNum = Math.random()*999999
// console.log(Math.round(randomNum))

// const today = new Date()
// console.log(today)
// console.log(today.getDay())
// console.log(today.getDate())
// console.log(today.getMonth())
// console.log(today.toLocaleDateString())
// console.log(today.toLocaleTimeString())
// console.log(today.toLocaleString())

// let x = 5;
// let y = 7;
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);

// const height = [65,35,67,78,49,70,80,71]
// let max = height[0]
// for(let h of height){
//   if(max < h){
//     max = h;
//   }
// }
// console.log(max)

const cart = [
  {
    productName: "Laptop",
    price: 1200,
    quantity: 2,
  },
  {
    productName: "Mouse",
    price: 25,
    quantity: 5,
  },
  {
    productName: "Keyboard",
    price: 75,
    quantity: 3,
  },
  {
    productName: "Monitor",
    price: 300,
    quantity: 2,
  },
  {
    productName: "Headphones",
    price: 150,
    quantity: 4,
  },
];

function totalCart(products) {
  //   console.log(products);
  let total = 0;
  for (let product of products) {
    const productTotal = product.price * product.quantity;
    total += productTotal;
  }
  return total;
}
console.log(totalCart(cart));
