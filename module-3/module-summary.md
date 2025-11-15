// convert inch to feet , miles to kilometer

function inchToFeet (inch) {
const feet = inch / 12;
return feet;
}

const height = inchToFeet(73);
console.log(height);

function mileToKilometer (mile) {
const kilometer = 1.609344 \* mile;
return kilometer;
}

const kilo = mileToKilometer(10);
console.log(kilo)

// leap year

function checkLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
return `${year} is leap year`;
}
}

const year = 2040;
const leapYear = checkLeapYear(year);
console.log(leapYear);

// calculate the average number of
// the odd numbers in an array

function oddAverage(numbers) {
let oddNumbers = 0;
let count = 0;
for (let number of numbers) {
if (number % 2 !== 0) {
oddNumbers += number;
count++;

    }

}
const average = oddNumbers / count;
return average;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
const avg = oddAverage(numbers);
console.log(avg);

// remove duplicate item from array

function noDuplicate(arr) {
const uniqueArray = [];
for (const item of arr) {
if (!uniqueArray.includes(item)) {
uniqueArray.push(item);
}
}
return uniqueArray;
}

const arr = [
"abul",
"chabul",
"nabul",
"dabul",
"abul",
"bulbul",
"chabul",
"nabul",
];
const duplicate = noDuplicate(arr);
console.log(duplicate);

math.max : একাধিক নাম্বার এর মধ্যে বড় সংখ্যা বের করে।

example :
// max number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const max = Math.max(...arr);
console.log(max);

math.min : একাধিক নাম্বার এর মধ্যে ছোট সংখ্যা বের করে।

example :
// min number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const min = Math.min(...arr);
console.log(min);

math.abs : ২টি সংখ্যার gap টা দেয়।

example : // absolute number :
console.log(Math.abs(5-15))

math.round : দশমিক সংখ্যা কে পূর্ণ সংখ্যা করে দেয় । (.1-.4) পর্যন্ত হলে .0 করে দিবে।
(.5-.9) হলে পরের সংখ্যা করে দিবে।

example :

// round number
console.log(Math.round(5.4));
console.log(Math.round(5.5));

math.ceil : কোনও সংখ্যা দশমিক আকারে থাকলে তা টেনে পরের সংখ্যা করে দেয়। মানে টেনে উপরে নিয়ে যায়।

exmaple : // ceiling number
console.log(Math.ceil(0.1));

math.random : random নাম্বার জেনারেট করে।

example : // random number :
console.log(Math.random()\*10);

date and time :

today : আজকের দিন তারিখ ও সালের জন্য
const today = new Date(); এইটা আজকের দিন তারিখ দিবে।

specific date : একটা নির্দিষ্ট দিন তারিখ

const date = new Date('2062-10-26');
console.log(date);

এখানে date থেকে getMonth ও setMonth করার ক্ষেত্রে month index follow করে। index শুরু হয় ০ থেকে ১১ পর্যন্ত।

example :
getMonth :
const date = new Date("2062-10-09");
or const date = new Date(2062,9,8)
console.log(date.getMonth());

setMonth/setDate :
এর মাধ্যমে month আর date সেট করে দেওয়া যায়।
const date = new Date();
date.setMonth(10)
console.log(date)


toString : এর মাধ্যমে লোকাল date এবং month and time পাওয়া যায়।

const date = new Date();
console.log(date.toString())


toLocaleString : এর মাধ্যমে local time এবং date তো পাওয়া যায় তবে চাইলে date time এর ফরম্যাট বলে দেওয়া যায়। 

const date = new Date();
console.log(date.toLocaleString())

with format : 

const date = new Date();
console.log(date.toLocaleString('en-GB'))

unix epoc : কোনও একটা নির্দিষ্ট ডেট থেকে এখন পর্যন্ত সময় কে compare ব্যবহার করা হয় ।

// swap variable
let a = 5;
let b = 7;
const temp = a;
a = b;
b = temp;

console.log(a,b)

// destructing 

let x = 5;
let y = 7;
[x,y] = [y,x];



🧠 Practice Tasks (Based on Your Topics Only)

⸻

🔹 1. Inch → Feet
	1.	inchToFeet() ফাংশন ব্যবহার করে 144 inch কত feet হয়?
	2.	95 inch কত feet হয় তা বের করো।

⸻

🔹 2. Mile → Kilometer
	1.	5 mile → kilometer
	2.	27 mile → kilometer

⸻

🔹 3. Leap Year Function
	1.	checkLeapYear() দিয়ে 1900 কি leap year?
	2.	2000 কি leap year?
	3.	2028 কি leap year?

⸻

🔹 4. Average of Odd Numbers
	1.	oddAverage() দিয়ে নিচের array এর odd average বের করো:[5, 10, 15, 20, 25, 30]

    2.	আরেকটি array:[11, 22, 33, 44, 55]
    এর odd average বের করো।


🔹 5. Remove Duplicates
	1.	নিচের array এর duplicate remove করো:["a", "b", "c", "a", "d", "b", "e"]

    2.	আরও একটি:[10, 20, 30, 10, 40, 20, 50]

🔹 6. Math.max & Math.min
	1.	Math.max দিয়ে সবচেয়ে বড় সংখ্যা বের করো:[23, 5, 77, 12, 90, 3]
    2.	Math.min দিয়ে সবচেয়ে ছোট সংখ্যা বের করো:[44, 1, 55, 92, 13]

🔹 7. Math.abs
	1.	|10 - 50|
	2.	|100 - 250|

⸻

🔹 8. Math.round / Math.ceil
	1.	7.2 কে round করো
	2.	7.7 কে round করো
	3.	5.1 কে ceil করো
	4.	9.0001 কে ceil করো

⸻

🔹 9. Math.random
	1.	Math.random() ব্যবহার করে 0–100 এর মধ্যে একটি random সংখ্যা জেনারেট করো
	2.	1–6 এর মধ্যে dice number random করো

⸻

🔹 10. Date & Time
	1.	আজকের তারিখ বের করো (new Date())
	2.	নতুন Date তৈরি করো: "2050-05-20"
	3.	getMonth() ব্যবহার করে কোন month index তা বের করো
	4.	চলতি মাসকে setMonth ব্যবহার করে 11 সেট করো

⸻

🔹 11. toString / toLocaleString
	1.	আজকের সময় toString() দিয়ে দেখাও
	2.	আজকের সময় toLocaleString("en-GB") দিয়ে দেখাও

⸻

🔹 12. Swap Variables
	1.	temp variable ব্যবহার করে a=50, b=100 swap করো
	2.	destructuring ব্যবহার করে x=9, y=3 swap করো

⸻

🔥 Bonus (তোমার দেওয়া টপিকের ভেতরেই)
	1.	একটি array নাও:[1, 3, 5, 7, 9, 11]

    → oddAverage ব্যবহার করো

	2.	একই array এর max ও min বের করো
