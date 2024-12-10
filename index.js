/**1. How would you define a function that takes two numbers as parameters and returns their sum? 
function sumOfTwo(a,b){
    console.log(`Sum of two numbers:${a+b}`)
}
sumOfTwo(30,40);

2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
function toUppercase(str){
    console.log(`To upper case : ${str.toUpperCase()}`);
}
toUppercase('Anuradha');

3.In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
If you explicitly pass undefined as an argument to a function, the corresponding parameter will be assigned the value undefined.
function uDefined(a){
    console.log(`the function stores : ${a}`);
}
uDefined(undefined);

4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
function emtyArray(arr){
    if(arr.length === 0){
        console.log('Array is Empty []');
    }
    else{
        console.log(`Array is not Empty : ${arr}`);
    }
}
emtyArray([]);
emtyArray([1,2,3,4]);

5.write a function that takes two numbers as parameters and returns their difference.
function diffOfTwo(a,b){
    console.log(`Difference of two numbers : ${a-b}`);
}
diffOfTwo(30,10);
diffOfTwo(10,60);

6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
function greet(name,age){
    console.log(`Hello ${name}! You are ${age} years old`);
}
greet('Vamsi', 20);

7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.*/
function evenNumber(num){
    if(num%2==0){
        console.log(`Even number : ${num}`);
    }
    else{
        console.log(`Not a Even number : ${num}`);
    }
}
evenNumber(10);
evenNumber(5);
