📘 JavaScript Cheatsheet (Milestone 3 & 4)

🎯 Milestone 3: Hello JavaScript


Math Basics → প্রোগ্রামিংয়ে যোগ, বিয়োগ, গুণ, ভাগ, ভাগশেষ (% বা modulus) খুব দরকারি।


Variable → ডেটা স্টোর করার জন্য ভ্যারিয়েবল ব্যবহার করা হয়। ৫টি জিনিস লাগবে: keyword (let/const/var), variable name, assign operator (=), value, semicolon।
Var - var দিয়ে ভ্যারিয়েবল redeclare এবং reassign করা যায় এটি function স্কোপ 
Let - let দিয়ে ভ্যারিয়েবল redeclare করা যায় না কিন্তু value পরিবর্তন করা যায় 
Const - const দিয়ে ভ্যারিয়েবল redeclare বা reassign করা যায় না 
(let এবং const block স্কোপ)


Data Types →


Number → integer, float
String → টেক্সট "Hello"
Boolean → true/false



Naming Rules → reserved keyword ব্যবহার করা যাবে না, নাম meaningful হতে হবে, শুরুতে সংখ্যা দেয়া যাবে না, সাধারণত camelCase ব্যবহার করা হয়।

Check Types → console.log(typesof variableName)


Numbers → JavaScript এর number সবসময় 64-bit floating point। NaN, Infinity/-infinite  থাকতে পারে।


Operators →


Arithmetic → +, -, *, /, %


Shorthand → x += 5, x -= 2, x++, x--



Conditionals
Comparison Operators → >, <, >=, <=, == (value check), === (value + type check), !=, !==


If-Else → কোন শর্ত সত্য হলে এক কাজ করবে, মিথ্যা হলে অন্য কাজ করবে।
if (condition) {
   // যদি শর্ত সত্যি হয়, এই কোড চলবে
 } else {
   // যদি শর্ত মিথ্যা হয়, এই কোড চলবে
 }
Logical Operators →


&& (AND – সব শর্ত সত্য হতে হবে)
|| (OR – যেকোনো একটি সত্য হলেই চলবে)
! (NOT – বিপরীত ফলাফল দিবে)


Multi-level if-else → একাধিক শর্ত যাচাই।
if (condition1 && condition) {
   // condition1 true হলে এটা চলবে
 } else if (condition2 || condition) {
   // condition2 true হলে এটা চলবে
 } else if (condition3) {
   // condition3 true হলে এটা চলবে
 } else {
   // উপরের কোনোটাই না মিললে এটা চলবে
 }

Ternary Operator → ছোট শর্ত লিখতে: condition ? result1 : result2
Ternary operator এ শুধু if statement এর জন্য : condition && “output” 
শর্ত সত্য হলে আউটপুট দিবে । 
// condition ? expressionIfTrue : expressionIfFalse;
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

Loops
For Loop → নির্দিষ্ট সংখ্যকবার কোড রিপিট করার জন্য:

 for(let i=0; i<5; i++){ console.log(i); }

While Loop → শর্ত সত্য থাকা পর্যন্ত চলতে থাকবে।
Let i = 0;
while (i<10){
console.log(i);
i++}


Do-While Loop → একবার অবশ্যই চলবে, তারপর শর্ত পরীক্ষা করবে।


Break → লুপ হঠাৎ থামিয়ে দেয়।
Loop এর মধ্যে শর্ত চালিয়ে লুপ কে থামানোর জন্য break ব্যবহার করা হয় 
for (let i = 1; i <= 10; i++) {
   if (i === 5) {
     break;   // i == 5 হলে লুপ থেমে যাবে
   }
   console.log(i);}

Continue → বর্তমান iteration স্কিপ করে পরেরটায় চলে যায়। কন্ডিশন অনুসারে লুপ এর মধ্যে থেকে কোনও এলিমেন্ট কে skip করার কাজ করে .
for (let i = 1; i <= 10; i++) {
   if (i === 5) {
     continue;   // i == 5 হলে লুপ থেমে যাবে
   }
   console.log(i);
 }


Arrays
Array Basics → এক ভ্যারিয়েবলে একাধিক মান রাখতে পারি: let arr = [10,20,30]


Access → arr[0] (index 0 থেকে শুরু হয়)


Length → arr.length


Modify → arr[1] = 50


Add/Remove →


push() → শেষে যোগ
let fruits = ["Apple", "Mango", "Banana"];
fruits.push('orange');
console.log(fruits)


pop() → শেষ থেকে মুছে ফেলে
let fruits = ["Apple", "Mango", "Banana"];
fruits.pop();
console.log(fruits)

shift() → প্রথম থেকে মুছে ফেলে
let fruits = ["Apple", "Mango", "Banana"];
fruits.shift();
console.log(fruits)



unshift() → প্রথমে যোগ
let fruits = ["Apple", "Mango", "Banana"];
fruits.unshift('Orange');
console.log(fruits)



Check Array → Array.isArray(arr);



Strings & Objects
String vs Array → string immutable (পরিবর্তন করা যায় না), array mutable।


String Methods →


toLowerCase()
let text = "Hello World";
console.log(text.toLowerCase()); // hello world



toUpperCase() 
let text = "Hello World";
console.log(text.toUpperCase()); // HELLO WORLD

trim()
let text = "   Hello World    ";
console.log(text.trim()); // Hello World

length
let text = "Hello World";
console.log(text.length); // 11

slice(start,end)
let text = "Hello World";
console.log(text.slice(0,5)); // Hello

concat()
let text = "Hello";
let text2 = 'World'
console.log(text.concat(" ",text2)); // Hello World

includes()
let text = "Hello World";
console.log(text.includes('Hello')); // Hello World




Reverse → str.split('').reverse().join('')
let text = "Hello World";
console.log(text.split('').reverse().join('')); // dlroW olleH

Objects →
let person = { name:"Sami", age:21 };
Access → person.name / person["age"]


Modify → person.city = "Dhaka"


Delete → delete person.age

Keys/Values → Object.keys(obj), Object.values(obj)

Loop → for (let key in obj){}

🎯 Milestone 4: Problem Solving with JavaScript
More About Array
Traverse Array → for, while, for-of
Array traverse হলো লুপ use করে এরে এর সবগুলো এলিমেন্ট এক্সেস করা 
const arr = [1,2,3,4,5,6,7,8,9]
for(let val of arr){
   console.log(val)
}



Reverse → reverse() / loop দিয়ে
Example : 
let numbers = [100, 25, 3, 45, 8];
const reversed = numbers.reverse();
console.log(reversed)





Sort → sort() (string ভিত্তিক) অথবা compare function দিয়ে numeric sort।

Sort দিয়ে array এর element গুলোকে সাজিয়ে রাখার কাজ করা হয়।

এটি by default স্ট্রিং আকারে সাজায় (মানে সংখ্যা দিলেও স্ট্রিং এ কনভার্ট করে স্ট্রিং আকারে সাজায় )

Return type: Array 

Mutates: হ্যাঁ (original array টা বদলে ফেলে)

Return value: ওই একই array reference
Example:  manually ছোট থেকে বড় আকারে সাজানো হয়েছে 
Sort of number 
let numbers = [100, 25, 3, 45, 8];
numbers.sort((a, b) => a - b);
console.log(numbers);
output: [3, 8, 25, 45, 100];


Sort of string 
let fruits = ["banana", "apple", "mango", "cherry"];
fruits.sort();
console.log(fruits);
output: ["apple", "banana", "cherry", "mango"];



Copy Array → slice(), [...arr] shallow copy;এখানে slice এবং spread operator use করে নতুন array বানানো হয়েছে 
const arr = [1,2,3,4,5,6,7,8,9]
const arr2 = [...arr,10,11];
const arr3 = arr.slice(2,6);

 reference copy করলে আসল array বদলাবে।
const arr = [1,2,3,4,5,6,7,8,9]
const arr2 = arr;



Array of Objects → phones[0].price
যেই এরে এর প্রতিটা এলিমেন্ট একটি অবজেক্ট 
let students = [
 { id: 1, name: "Rahim", age: 20 },
 { id: 2, name: "Karim", age: 22 },
 { id: 3, name: "Hasan", age: 21 },
];
console.log(students[2].name);



2D Array → matrix[row][col]
let matrix = [
   [1, 2, 3],   // row 0
   [4, 5, 6],   // row 1
   [7, 8, 9]    // row 2
 ];
 console.log(matrix[0][2])




Functions
Definition → পুনঃব্যবহারযোগ্য কোড ব্লক।

 function add(a, b){ return a+b; }

Parameters vs Arguments → parameter হলো function এর ভেতরে placeholder, argument হলো বাইরে থেকে দেয়া value।
function myFunc (a,b){ //এখানে agrument কে parameter এর মাধ্যমে receive করা হয়েছে
   return a+b;
}


const result = myFunc(5,7); //এখানে argument পাস করা হয়েছে
console.log(result)
Return → function থেকে মান ফেরত দেয়া যায়।


Conditional Return → odd/even check এর মতো লজিক।


Example →


array এর সব সংখ্যা যোগ করা
function sumOfArray(nums) {
 let sum = 0;
 for (i of nums) {
   sum += i;
 }
 return sum;
}


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = sumOfArray(nums);
console.log(result);



array থেকে even সংখ্যা বের করা
function evenOdd (nums){
   for(n of nums ){
       if(n % 2 === 0){
           console.log(n)
   }
   }
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
evenOdd(nums)




Simple Coding Problems 
var, let, const → scope & re-assign rules আলাদা।
Unit Convert → inch→feet, mile→km।
const num = 12;
const feet = num / 12;
console.log(`${num}inch = ${feet}ft`)

const miles = 10;
const km = miles * 1.609;
console.log(`${miles} Mile = ${km}Km`)

Leap Year Check → divisible by 4 & not 100, or divisible by 400।
const year = 2022;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
 console.log(`${year} is a leap year`);
} else {
 console.log(`${year} is not a leap year`);}



Average of Odd Numbers → filter + sum / count।
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let count = 0;
for (let num of number) {
 if (num % 2 !== 0) {
   count++;
   sum += num;
 }
}
console.log(sum);
const average = sum / count;
console.log(average);





Remove Duplicates → new Set(arr) বা loop।
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(arr)];
console.log(uniqueArray)

এখানে প্রথমে এরে কে set এ convert then duplicate আইটেম গুলো set অটোমেটিক রিমুভ করে ইউনিক এরে টি সেট করেছে 


Math Methods → abs() কোনও সংখ্যার absolute ভ্যালু দেয় (Negative থাকলে positive করে দেয়) 
console.log(Math.abs(-50));

 

round() কোনও সংখ্যার কাছের সংখ্যায় round করে 
0.5 বা তার বেশি হলে উপরের দিকে যায়
0.4 বা তার কম হলে নিচের দিকে যায়
console.log(Math.round(4.4)); //4
console.log(Math.round(4.5)); //5
console.log(Math.round(4.6)); //5

ceil() কোনও সংখ্যাকে টেনে উপরের দিকে নিয়ে যায় (সবসময় উপরে round করে (ceiling → ছাদ এর দিকে))
console.log(Math.ceil(4.4)); //5
console.log(Math.ceil(0.1)); //1
console.log(Math.ceil(1.1)); //2

floor() সবসময় নিচে round করে (floor → মেঝের দিকে)
console.log(Math.floor(4.5)); //4
console.log(Math.floor(0.9)); //0
console.log(Math.ceil(1.1)); //1

random() 0 (inclusive) থেকে 1 (exclusive) এর মধ্যে random decimal number দেয়
console.log(Math.random()*10);

Date → new Date() → সময় ও তারিখ নেয়া যায়।
let today = new Date();


console.log(today.getFullYear()); // বছর
console.log(today.getMonth());    // মাস (0–11)
console.log(today.getDate());     // তারিখ (1–31)
console.log(today.getDay());      // সপ্তাহের দিন (0=Sunday, 6=Saturday)

const today = new Date()
console.log(today.getTime()); // মিলিসেকেন্ড Jan 1, 1970 থেকে
console.log(today.toDateString());   // "Fri Oct 03 2025"
console.log(today.toLocaleTimeString());   // "16:45:23 GMT+0800 ..."
console.log(today.toISOString());    // "2025-10-03T08:45:23.456Z"

Swap Variable → temp দিয়ে বা [a,b] = [b,a]।
let a = 5;
let b = 7;
[b, a] = [a, b];
console.log(a, b);

Max Reward / Tallest → Math.max(...arr) বা loop compare।
const arr = [22, 32, 13, 523, 45, 6, 23, 1645, 63];
// console.log(Math.max(...arr))
let max = arr[0];
let secMax = -Infinity;
for (let i of arr) {
 if (i > max) {
   secMax = max;
   max = i;
 }else if(i<max && i> secMax){
   secMax = i
 }
}
console.log(max, secMax);





Function Inside Function → simple calculator।


Error Handling → input এর type চেক করা।



🔑 Bonus Tips
Function লেখা → বারবার কোড রিপিট না করে function বানানো অভ্যাস করো।


Objects নিয়ে → search/filter দিয়ে প্র্যাকটিস করো।


Problem Solving Strategy → বড় সমস্যাকে ছোট টাস্কে ভাগ করে সমাধান করো।



