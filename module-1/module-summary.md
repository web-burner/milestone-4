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



🧠 Array Practice Tasks (Based on Your Notes)

🔹 1. Array Traverse
	1.	একটা array বানাও colors = ["red", "green", "blue", "yellow", "black"]
👉 for loop দিয়ে প্রতিটা element print করো — “Color name is: [color]”
	2.	একই array for of loop দিয়ে traverse করো।

⸻

🔹 2. Reverse Array
	1.	numbers = [10, 20, 30, 40, 50]
👉 loop ব্যবহার করে reverse array তৈরি করো।
	2.	reverse() method দিয়ে একই কাজটা করো।
	3.	দেখো loop দিয়ে reverse করলে original array অপরিবর্তিত থাকে কিনা, আর reverse() দিলে কী হয়।

⸻

🔹 3. Sort Array
	1.	নিচের array টা sort করো:
    const names = ["shaon", "babu", "roman", "faysal", "abir"];
    👉 alphabetically সাজাও।

	2.	নিচের number array টা ascending এবং descending দুইভাবে sort করো:
    const nums = [22, 5, 11, 44, 2, 99];

🔹 4. Array of Object
	1.	নিচের array of object টা traverse করে প্রতিটি ব্যক্তির নাম এবং বয়স print করো:
    const persons = [
  { name: "shaon", age: 23 },
  { name: "abir", age: 25 },
  { name: "poddo", age: 22 },
];

	2.	index ব্যবহার করে ২য় object এর name পরিবর্তন করে "babu" করো।
	3.	loop দিয়ে সব salary যোগ করে total বের করো:
    const persons = [
  { name: "shaon", salary: 20000 },
  { name: "faysal", salary: 25000 },
  { name: "sujon", salary: 30000 },
];

🔹 5. 2D Array
	1.	নিচের 2D array থেকে element [1][2] access করো:
    const arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

	2.	nested loop ব্যবহার করে প্রতিটি element print করো।
	3.	[2][1] position এর value পরিবর্তন করে 100 দাও এবং পুরো array print করো।

⸻

🔹 6. Copy Array Element
	1.	numbers = [5, 10, 15, 20]
👉 loop ব্যবহার করে আরেকটা নতুন array তে কপি করো।
	2.	Array.from() ব্যবহার করে কপি করো, তারপর দেখো original array পরিবর্তন হয় কিনা।
	3.	concat দিয়ে কপি করে নতুন element যোগ করো।
	4.	spread operator দিয়ে কপি করে শেষে 99, 100 যোগ করো।

⸻

🔹 7. Mixed Challenge 💥
	1.	একটা array বানাও marks = [45, 67, 89, 23, 56, 90]
👉 এটাকে descending sort করো, তারপর loop দিয়ে traverse করে প্রতিটা মান print করো।
	2.	একটা array of object বানাও students নামে, যেখানে name ও marks থাকবে।
👉 loop দিয়ে যাদের marks ৫০ এর বেশি তাদের নাম print করো।
	3.	একটা 2D array বানাও এবং সেটার সব element একত্রে যোগ করে total বের করো।
