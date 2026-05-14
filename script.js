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

// const cart = [
//   {
//     productName: "Laptop",
//     price: 1200,
//     quantity: 2,
//   },
//   {
//     productName: "Mouse",
//     price: 25,
//     quantity: 5,
//   },
//   {
//     productName: "Keyboard",
//     price: 75,
//     quantity: 3,
//   },
//   {
//     productName: "Monitor",
//     price: 300,
//     quantity: 2,
//   },
//   {
//     productName: "Headphones",
//     price: 150,
//     quantity: 4,
//   },
// ];

// function totalCart(products) {
//   //   console.log(products);
//   let total = 0;
//   for (let product of products) {
//     const productTotal = product.price * product.quantity;
//     total += productTotal;
//   }
//   return total;
// }
// console.log(totalCart(cart));

// // Create an array of 8 favorite movies. Use a for...of loop to print each movie name in uppercase.
// const favoriteMovies = [
//   "Inception",
//   "Interstellar",
//   "The Dark Knight",
//   "Avengers: Endgame",
//   "Spider-Man: No Way Home",
//   "Titanic",
//   "The Shawshank Redemption",
//   "John Wick",
// ];

// for (let movie of favoriteMovies) {
//   console.log(movie.toUpperCase());
// }

// // Reverse the array manually using unshift()
// const numbers = [12, 45, 67, 89, 23];
// const reversed = [];
// for (let number of numbers) {
//   reversed.unshift(number);
// }
// console.log(reversed);

// // Use the built-in method to reverse
// const fruits = ["apple", "banana", "orange", "grape"];
// const reversedFruits = fruits.reverse();
// console.log(reversedFruits);

// // Sort the following names alphabetically
// const persons = ["Rahim", "Karim", "Anika", "Sakib", "Mim"];
// const sorted = persons.sort();
// console.log(sorted);

// // Sort this array in:

// // * ascending order
// const nums = [55, 12, 98, 3, 67, 41];
// const ascendingNums = nums.sort((a, b) => a - b);
// console.log(ascendingNums);

// // * descending order
// const descendingNums = nums.sort((a, b) => b - a);
// console.log(descendingNums);

// // Create an array of 5 students
// const students = [
//   {
//     name: "Rahim",
//     roll: 1,
//     marks: 85,
//   },
//   {
//     name: "Karim",
//     roll: 2,
//     marks: 78,
//   },
//   {
//     name: "Ayesha",
//     roll: 3,
//     marks: 92,
//   },
//   {
//     name: "Nusrat",
//     roll: 4,
//     marks: 88,
//   },
//   {
//     name: "Sakib",
//     roll: 5,
//     marks: 74,
//   },
// ];

// // From the students array, print:

// // * second student’s name
// console.log(students[1].name);

// // * fourth student’s marks
// console.log(students[3].marks);

// // Create a 2D array containing 3 rows of numbers.
// const array2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // From the 2D array:
// // * print the second row
// console.log(array2D[1]);
// // * print the last element of the third row
// console.log(array2D[2][array2D.length - 1]);

// // Copy one array into another variable and print both.
// const arrNums = [12, 45, 67, 89, 23];
// const copyArray = [...arrNums, 20, 35];
// console.log(arrNums);
// console.log(copyArray);

// // Create a duplicate array using Array.from().
// const dupArray = Array.from(arrNums);
// console.log(dupArray);

// // Copy this array using concat():
// const colors = ["red", "green", "blue"];
// const newColors = [].concat(colors);
// newColors.push("yellow");
// console.log(colors);
// console.log(newColors);

// // Create a copy using spread operator:
// const num = [100, 200, 300];
// const newNum = [...num];
// console.log(newNum);

// // Write a function that prints
// function printSrt() {
//   console.log("Learning JavaScript Functions");
// }
// printSrt();

// // Create a function named greet.
// function greet() {
//   console.log("Hello World");
// }
// greet();

// // Create a function that takes a name parameter and prints a welcome message.
// function greetGuest(name) {
//   console.log("Welcome", name);
// }
// greetGuest("Shaon");

// // Create a function that takes:

// // * product name
// // * quantity
// // * price
// function cart(name, quantity, price) {
//   let total = price * quantity;
//   console.log(name + " price is " + total + "tk");
// }
// cart("Shirt", 2, 500);

// // Call a function using different arguments 3 times.
// function multiTypeParams(value) {
//   console.log(value);
// }
// multiTypeParams("Shaon");
// multiTypeParams(24);
// multiTypeParams(true);

// // Create a function with 2 parameters and call it with 2 arguments.
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(5, 7);

// // Create a function that returns the square of a number.
// function square(n) {
//   return n ** 2;
// }
// console.log(square(4));

// // Store a returned value into a variable and print it.
// const result = square(5);
// console.log(result);

// // Create a function that returns:

// // * "Even" if number is even
// // * "Odd" if number is odd

// function isEven(x) {
//   if (x % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(isEven(5));

// // Create a function using:

// // * string parameter
// // * number parameter
// // * boolean parameter
// function multiPara(str, num, bool) {
//   console.log(str);
//   console.log(num);
//   console.log(bool);
// }
// multiPara("Shaon", 24, true);

// // Create a function that returns the total sum of:
// function sumOfNums(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   console.log(total);
// }
// sumOfNums([10, 20, 30, 40, 50]);

// // Create a function that returns all even numbers from:
// // [11, 24, 33, 46, 57, 68, 79]
// function allEvens(nums) {
//   const even = [];
//   for (let num of nums) {
//     if (num % 2 === 0) {
//       even.push(num);
//     }
//   }
//   return even;
// }
// const evens = allEvens([11, 24, 33, 46, 57, 68, 79]);
// console.log(evens)

// // Inch to Feet
// // 84 inches
// function inchToFeet (i){
//   return i/12;
// }
// console.log(inchToFeet(84))

// // Create a Date object and print current date and time.
// const currentDate = new Date()
// console.log(currentDate.toDateString())
// console.log(currentDate.toLocaleTimeString())

//     // today’s date
// console.log(currentDate.toLocaleDateString())

//     // 1 January 2030
//     console.log(new Date('1/1/2030'))

// currentDate.setDate(26)
// console.log(currentDate)
