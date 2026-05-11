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


