1. loop an array and get all element 
        const fruits = ["apple", "mango", "banana", "litchi", "watermelon"];
        for(let fruit of fruits){
          console.log(fruit)
        }
2. reversed an array by different ways 
    1. using loop and unshift method 
        const numbers = [1,2,3,4,5,6,7,8,9]
        const reversed = []
        for(let i of numbers){
          reversed.unshift(i)
        }
        console.log(reversed)
    2. using loop and push method 
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const reversed = [];
        for (let i = numbers.length - 1; i >= 0; i--) {
          reversed.push(numbers[i]);
        }
        console.log(reversed);
    3. using reverse method it's changed main array
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        numbers.reverse();
        console.log(numbers);

3. sorting an array 

        const numbers = [2,3,1,6,8,3,11,79,452,64]
        numbers.sort((a,b)=> a-b)
        console.log(numbers)

4. ascending : small to capital way sort 
5. descending : capital to small way sort 
6. array of object 
        const students = [
          { name: "Shaon", age: 24, isStudent: false },
          { name: "Sajjat", age: 15, isStudent: false },
          { name: "Rahim", age: 14, isStudent: true },
        ];
7. access an object from array 
        const students = [
          { name: "Shaon", age: 24, isStudent: false },
          { name: "Sajjat", age: 15, isStudent: false },
          { name: "Rahim", age: 14, isStudent: true },
        ];
        console.log(students[0].name)

8. array of array(2D array): 
        const arr = [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
        ];
9. access an array from 2D array:
        const arr = [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
        ];
        console.log(arr[0][3])
10. copy an array : 
    1. using array keyword 
        const arr1 = [1,2,3,4,5];
        const arr2 = Array.from(arr1)
        console.log(arr1)
        arr2.push(6)
        console.log(arr2)

    2. using concat method 
        const arr1 = [1,2,3,4,5];
        const arr2 = [].concat(arr1)
        console.log(arr1)
        arr2.push(6)
        console.log(arr2)

    3. using spread operator 
        const arr1 = [1,2,3,4,5];
        const arr2 = [...arr1]
        console.log(arr1)
        arr2.push(6)
        console.log(arr2)

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