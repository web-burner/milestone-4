function : function হচ্ছে একটা block of code। যা বার বার ব্যবহার করা যায়।

syntax : 
function myFunc() {
  console.log("This is function");
}
myFunc(); // function call


function parameters : function এ ডাটা pass করার জন্য variable এর ন্যায় প্রথম বন্ধনীর মধ্যে যা লেখা হয় তাই parameter

example : function myFunc(parameter1, parameter2) {
  console.log(
    `${parameter1} and ${parameter2} multiply equal to ${
      parameter1 * parameter2
    }`
  );
}

myFunc(10, 5); // function call

function এর মধ্যে যতটা parameter ডিক্লেয়ার করা হবে function call করার সময় ঠিক ততটা ভ্যালু বা arguments pass করতে হবে। ভ্যালু খুঁজে না পেলে undefined দিবে। 
function এর parameter কে বাহির থেকে access করা যাবে না error দিবে।

square function :

function square(a) {
  console.log(a ** 2);
}
square(5);

এইভাবে আমরা চাইলে একাধিক প্যারামিটার নিয়ে ফাঙ্কশন এর মধ্যে কিছু কাজ করে তা আউটপুট বের করতে পারি 