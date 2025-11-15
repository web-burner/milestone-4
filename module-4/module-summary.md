
get max number in an array 
function getMax(heights) {
  let max = heights[1];
  for (let height of heights) {
    if (max < height) {
      max = height;
    }
  }
  return max;
}
const heights = [65, 66, 68, 72, 78, 60, 65, 66];
const max = getMax(heights);
console.log(max);


// get second max in an array 

function getMax(heights) {
  let max = heights[1];
  let secondMax;
  for (let height of heights) {
    if (max < height) {
        secondMax = max;
      max = height;
    }
  }
  return [max,secondMax];
}
const heights = [65, 66, 68, 72, 78, 60, 65, 66];
const max = getMax(heights);
console.log(max);

// const heights = [65, 66, 68, 72, 78, 60, 65, 66];
// const max = getMax(heights);
// console.log(max);


// use add and multiplication to calculate 
//     wood requirements 

// find the cheapest phone from an array of object 

// Calculate The Total Cost Of The Products In A Shopping Cart

// multi-layer discount price calculation 


🧠 Practice Tasks (Based on Your Listed Topics Only)

⸻

===============================
   ARRAY + FUNCTION PRACTICE
===============================

--------------------------------------------------
1. GET MAX NUMBER FROM AN ARRAY
--------------------------------------------------

Task 1:
Given array:
[12, 45, 67, 23, 89, 34]
→ Use getMax() to find the maximum number.

Task 2:
Given array:
[5, 9, 1, 99, 23, 75]
→ Find the maximum number.


--------------------------------------------------
2. GET SECOND MAX NUMBER FROM AN ARRAY
--------------------------------------------------

Task 1:
Find the second highest number from:
[10, 20, 35, 40, 25, 50, 45]

Task 2:
Find the second highest number from:
[100, 99, 80, 70, 60]


--------------------------------------------------
3. WOOD REQUIREMENT CALCULATION
(Use addition + multiplication)
--------------------------------------------------

Task 1:
Table = 2 pcs → 5 cubic feet each
Chair = 4 pcs → 3 cubic feet each
Bed   = 1 pc  → 10 cubic feet each

→ Calculate total wood required.

Task 2:
Table = 1
Chair = 6
Bed   = 2

→ Calculate total wood required.


--------------------------------------------------
4. FIND CHEAPEST PHONE (ARRAY OF OBJECT)
--------------------------------------------------

Task 1:
Find the cheapest phone from:
[
  {name: "Xiaomi", price: 22000},
  {name: "Samsung", price: 30000},
  {name: "Oppo", price: 18000},
  {name: "iPhone", price: 80000}
]

Task 2:
Find the cheapest phone from:
[
  {name: "Vivo", price: 15000},
  {name: "Realme", price: 17000},
  {name: "Tecno", price: 12000}
]


--------------------------------------------------
5. SHOPPING CART TOTAL COST
--------------------------------------------------

Task 1:
Calculate total cost:
[
  {name: "shirt", price: 500, quantity: 2},
  {name: "pant", price: 800, quantity: 1},
  {name: "shoe", price: 1200, quantity: 1}
]

Task 2:
Calculate total cost:
[
  {name: "pen", price: 10, quantity: 10},
  {name: "book", price: 120, quantity: 5},
  {name: "bag", price: 700, quantity: 1}
]


--------------------------------------------------
6. MULTI-LAYER DISCOUNT CALCULATION
--------------------------------------------------

Task 1:
Product price = 1000
- First discount = 10%
- Second discount = 5%
→ Calculate final price.

Task 2:
Product price = 5000
- First discount = 20%
- Second discount = 10%
→ Calculate final price.