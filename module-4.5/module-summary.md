what i can do with javascript object 
1. i can store number , string , boolean , object , array , function etc.

const student = {
    name: 'Shaon',
    id: 632,
    address : 'movie cinema',
    isSingle : true,
    friends : ['poddo','sujon','faysal'],
    movies : [{name: 'no-1',year:2015},{name:'king khan',year: 2018}],
    act: function(){
        return ('act like sakib khan')
    } ,
    car : {
        brand : 'Tesla',
        price : 3500000,
        made : 2025,
        manufacturer : {
            name : 'Tesla',
            ceo : 'Elon Mask',
            country : 'USA'
        }
    }
}

console.log(student)



what i can do with javascript object 
1. i can store number , string , boolean , object , array , function etc.


function getArguments (a,b){
    console.log(arguments);
    
}

getArguments(1,2,3,4,5,6,7)


function থেকে আমরা pass করা আর্গুমেন্টস গুলো পেটে পারি একটা array লাইক object এর মতো। 




====================================
   JAVASCRIPT OBJECT PRACTICE
====================================

--------------------------------------------------
1. BASIC OBJECT READING TASKS
--------------------------------------------------

Task 1:
Given object:
{
  name: "Hero",
  age: 25,
  hobby: "coding"
}
→ Print:
- name
- age
- hobby

Task 2:
Given object:
{
  title: "JavaScript",
  level: "Beginner",
  duration: 30
}
→ Update duration to 45.


--------------------------------------------------
2. NESTED OBJECT TASKS
--------------------------------------------------

Task 1:
Given object:
{
  user: {
    id: 101,
    info: {
      email: "test@gmail.com",
      country: "BD"
    }
  }
}
→ Print email and country.

Task 2:
Add a new property:
user.info.city = "Dhaka"


--------------------------------------------------
3. ARRAY INSIDE OBJECT TASKS
--------------------------------------------------

Task 1:
{
  student: "Shaon",
  marks: [80, 75, 90]
}
→ Print the highest mark.

Task 2:
{
  player: "Messi",
  clubs: ["Barcelona", "PSG", "Inter Miami"]
}
→ Print total number of clubs.


--------------------------------------------------
4. OBJECT INSIDE ARRAY TASKS
--------------------------------------------------

Task 1:
Given:
[
  {name: "A", age: 20},
  {name: "B", age: 22},
  {name: "C", age: 18}
]
→ Find the person with the highest age.

Task 2:
Given:
[
  {product: "Book", price: 200},
  {product: "Pen", price: 20},
  {product: "Bag", price: 800}
]
→ Calculate total price of all products.


--------------------------------------------------
5. FUNCTION INSIDE OBJECT TASKS
--------------------------------------------------

Task 1:
Create an object person with a function greet()  
→ greet() returns: "Hello, I am learning JS".

Task 2:
Create an object maths with a function add(a,b)  
→ add(5,8) gives 13.


--------------------------------------------------
6. NESTED FUNCTION + OBJECT TASKS
--------------------------------------------------

Task 1:
Create an object:
{
  car: {
    brand: "BMW",
    engine: {
      start: function() {
         return "Engine started!";
      }
    }
  }
}
→ Call engine.start() and print the result.

Task 2:
Create an object:
{
  user: {
    name: "Shaon",
    skills: {
       coding: function() { return "JavaScript Master!" }
    }
  }
}
→ Call user.skills.coding().


====================================
       ARGUMENTS OBJECT PRACTICE
====================================

--------------------------------------------------
7. ARGUMENTS OBJECT TASKS
--------------------------------------------------

Task 1:
Write a function logAll()  
→ It prints every argument passed using arguments object.

Task 2:
Write a function sumAll()  
→ Add all arguments passed and return the total.


--------------------------------------------------
8. ARRAY-LIKE ARGUMENTS TASKS
--------------------------------------------------

Task 1:
Write a function findMax()  
→ Return the maximum number from arguments.

Example call:
findMax(3, 9, 2, 11, 7)

Task 2:
Write a function countArgs()  
→ Return how many arguments were passed.


--------------------------------------------------
9. MIX OBJECT + ARGUMENTS TASKS
--------------------------------------------------

Task 1:
Write a function storeArgsInObject()  
→ Return an object like:
{
   totalArgs: number,
   args: [ ...all arguments ]
}

Task 2:
Write a function makePerson()  
Call example:
makePerson("Shaon", 22, "Dhaka")

→ Return:
{
   name: "Shaon",
   age: 22,
   city: "Dhaka"
}
using arguments object (not parameters).