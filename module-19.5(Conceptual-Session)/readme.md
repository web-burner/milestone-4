conceptual session 
1. var - can redeclare and re-assign
2. let - can not redeclare but can re-assign
3. const - can not redeclare and re-assign
4. if variable declare by const then can change array and object value / properties but cannot change the whole array / object 
5. array is a collection of multiple value
6. array index 
7. change value in array using index 
8. push
9. pop 
10. shift 
11. unshift 
12. spread operator 
13. for loop to get element 
14. for of loop to get element from array easily
15. add something before value of array using loop and push method
const arr = ['Shaon','Sajjat','Rana']
const arr2= []
for(let i of arr){
arr2.push('Mr. '+ i)
}
console.log(arr2)
16. while loop 
17. reverse method 
18. reverse using for of loop and unshift
19. array length
20. sort 
21. array index value 
22. array mutation and non-mutation
23. array of object 
24. object value access 
25. dot notation 
26. bracket notation 
27. loop in array of object (for of)
28. template string/ template literal / backtick

 const students = [
  { name: "Shaon", age: 24 },
  { name: "Sajjat", age: 15 },
];
console.log(`${students[0].name} is ${students[0].age} years old`)

29. for in loop 
30. what is function ? 
32. function structure?
33. function type 
    1. traditional function
    2. arrow function 
    3. anonymous function 
    4. IIFE function
        (function () {
          console.log("hello Bangladesh");
        })(); 
34. parameters
35. arguments 
36. return value
37. different types of value
38. default parameter (=)
39. rest operator (...)

problems : 
1. cube numbers 
function cubeNumbers(num) {
  if(typeof num === 'number' && num >0){
    return num ** num;
  }else{
    return 'Invalid Number'
  }
}
const cube = cubeNumbers(3);
console.log(cube);

2. check one string includes in another string 
function includesStr(str1, str2) {
  if (str1.toLowerCase().includes(str2.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
console.log(includesStr("Md Shaon Rana", "rana"));

3. check the max value and min value from an array

