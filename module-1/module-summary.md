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