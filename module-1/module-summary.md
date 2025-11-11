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