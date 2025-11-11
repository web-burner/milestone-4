array traverse : loop এর মাধ্যমে এরে এর প্রতিটা value access করা এবং সেই value দিয়ে কিছু কাজ করা।

example: with for loop 
const fruits = ["Apple", "Mango", "Banana", "Watermelon", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log("I eat " + fruits[i]);
}


for loop এর মাধ্যমে array এর element কে এক্সেস করা হয়েছে। fruits.length এর মাধ্যমে array এর length পর্যন্ত loop টা চলবে। তবে array এর কোনও এলিমেন্ট খুঁজে না পেলে undefined return করবে

example : with for of loop

const numbers = [23, 34, 242, 552, 65, 132];
for (let number of numbers) {
  console.log(number);
}

এখানে number সরাসরি numbers array এর ভ্যালু দিবে numbers[number] এইভাবে দেওয়া লাগবে না। 

array reverse: 
// array reverse with loop

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversed = [];
for (let num of arr) {
  // console.log(num);
  reversed.unshift(num);
}
console.log(reversed);

reverse shortcut :
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversed = arr.reverse();
console.log(reversed);


sort : এর মাধ্যমে এরে এর এলিমেন্ট গুলোকে সাজিয়ে রাখা যায়। তবে এইটা মূল array কে সাজিয়ে রিটার্ন করে আবার চাইলে কোনও একটা নতুন ভ্যারিয়েবল এর মধ্যেও স্টোর করা যায়।

example : 
const friends = ["shaon", "abir", "poddo", "babu", "roman", "faysal"];
console.log(friends);
friends.sort();
console.log(friends);

তবে sort মূলত string আকারে compare করে। number এর ক্ষেত্রে একটু ঝামেলা করে number কেও string আকারে সাজিয়ে ফেলে। তাই number এর জন্য একটু extra কোড করা লাগে। 

example : ascending sort 
const numbers = [23, 34, 242, 552, 65, 132];
console.log(numbers);
numbers.sort() // without extra code 
console.log(numbers);
numbers.sort((a, b) => a - b); //with extra code 
console.log(numbers);

example :// descending sort
const numbers = [23, 34, 242, 552, 65, 132];
numbers.sort((a, b) => b - a);
console.log(numbers);


array of object 
যে array  এর element গুলো object হয় তাই array of object

example : 
const persons = [
  { name: "shaon", age: 23, salary: 20000 },
  { name: "sujon", age: 24, salary: 34000 },
  { name: "faysal", age: 25, salary: 23000 },
  { name: "poddo", age: 22, salary: 30000 },
];

access array of object element 

const persons = [
  { name: "shaon", age: 23, salary: 20000 },
  { name: "sujon", age: 24, salary: 34000 },
  { name: "faysal", age: 25, salary: 23000 },
  { name: "poddo", age: 22, salary: 30000 },
];

console.log(persons[1]);

এইভাবে array index দিয়ে element এক্সেস করলে প্রতিবার একটা করে object দিবে।

object এর properties access : 

console.log(persons[1]['salary'])

traverse array of object 

const persons = [
  { name: "shaon", age: 23, salary: 20000 },
  { name: "sujon", age: 24, salary: 34000 },
  { name: "faysal", age: 25, salary: 23000 },
  { name: "poddo", age: 22, salary: 30000 },
];

for (let person of persons) {
  console.log(person["name"],':', person["salary"]);
}

আবার চাইলে object properties এর value পরিবর্তন করা যায়।

example: 
persons[1].name = 'sajjat';
console.log(persons[1]);


2D Array = 2 Dymantional array ( array of array)

example : 
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

access element of 2D array : 

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr[1][1])

traverse 2D array 

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let num of arr){
    console.log(num[1]);
} 


value change : 


const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arr[1][1] = 10;
console.log(arr[1])

আবার এখানে চাইলে push , pop , shift, unshift use করা  যায়। 


copy array element to another array:
আমরা যখন কোনও ভ্যারিয়েবল থাকে ডাটা কপি করে অন্য ভ্যারিয়েবল তখন তার ভ্যালু তাঁকে কপি করি আর যখন এরে বা অবজেক্ট থেকে ডাটা কপি করি তবে তার রেফারেন্স কে কপি হয়। নিচে এরে এলিমেন্ট কপি করার way দেওয়া হলো। 

1. element push to another array 

const numbers = [12, 32, 432, 54];
const price = [];
for (number of numbers) {
  price.push(number);
}
numbers[3] = 10;
console.log(numbers);
price[3] = 20;
console.log(price);

example - ২ : use Array.from()
const numbers = [1, 2, 3, 4, 5, 6, 7];
const newArray = Array.from(numbers);
newArray[3] = 10;
console.log(newArray);
console.log(numbers);

example - 3 : concat array 
const arr = [1,2,3,4,5,6,7];
const arr2 = [].concat(arr,8,9);
console.log(arr);
console.log(arr2)

example -4 : spread operator 
const nums = [1, 2, 3, 4, 5, 6, 7];
const num2 = [...nums, 8, 9];
console.log(nums);
console.log(num2);

