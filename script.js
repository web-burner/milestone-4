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
