module-19(fundamentals of function)
1. what is function ?
  => function is a block of code. 
2. how to declare a function ?
    function myFunc() {
      console.log("hello, I'm from function");
    }
    myFunc();
[NOTE: to get output have to call the function]
3. function parameters 
    function sum (a,b){
        return (a+b)
    }
    const result = sum(5,7)
    console.log(result)

4. parameter : it is like a variable to get the value of arguments 
5. arguments : it is the way to transfer value for parameter to do some work when the function is called 

6. function return : its return the value from the function means function will stop its work here .

function doubleIt(num) {
  return num * 2;
}

7. set return value to a variable 

function doubleIt(num) {
  return num * 2;
}

const doubleValue = doubleIt(10);
console.log(doubleValue);

8. conditional return of odd and even
function evenOdd (a){
    if(a % 2 === 0){
        console.log('Even')
        return ;
    }else{
        console.log('Odd')
        return;
    }
}
evenOdd(6)

9. different type of parameters for a function 
    1. number 
    2. string 
    3. boolean 
    4. object 
    5. array 
10. sum of all numbers in an array using function 
let total = 0;
function sum(numbers) {
  for (let num of numbers) {
    total += num;
  }
  return;
}
const nums = [1, 2, 3, 4, 5, 6, 7];
sum(nums);
console.log(total);

11. Return All The Even Numbers Of An Array
function evenNumber(numbers) {
  const even = [];
  for (let num of numbers) {
    if (num % 2 !== 0) {
      even.push(num);
    }
  }
  return even;
}
const numbers = [23, 43, 54, 6, 476, 78, 67, 98];
const evenNum = evenNumber(numbers);
console.log(evenNum);