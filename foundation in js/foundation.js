//🟢 Basic JavaScript (Variables, Operators, Conditionals)
//1. Declare a variable and assign it a value. Then log it to the console.
// first problem solved 
let myVariable = " Hello,  World! "
console.log(myVariable);
// second problem
//2. Swap two variables without using a third variable.

let a = 5;
let b = 10;
console.log("Before swap: a = " + a + " b = " + b);
a = a + b;
b = a - b;
console.log("after swap: a + " + a + " b = " + b);

// third problem
// 3. Write a program that checks if a number is even or odd.								

function isevenodd(num) {
  if (num % 2 == 0) {
    return "even"

  } else {
    return "odd"
  }

}
console.log(isevenodd(4)) // even


// 4. Check if a year is a leap year or not.		
function isleepyear(year) {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return true;
  }
  else {
    return false
  }
}

console.log(isleepyear(2023)) // true

//  5. Write a program that checks if a number is positive, negative, or zero


function Checknumber(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(Checknumber(0)); // positive


// 6. Find the largest of three numbers using if...else.	

function largestnumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `largest number is num1: ${num1}`;
  } else if (num2 > num1 && num2 > num3) {
    return `largest number is num2: ${num2}`;
  } else {
    return `largest number is num3: ${num3}`;
  }

}
console.log(largestnumber(20, 50, 10));

//7. Convert Celsius to Fahrenheit.	
// problem number 7
function Celsiustofarenhight(Celsius) {
  let Fahrenheit = (Celsius * 9 / 5) + 32;
  return Fahrenheit;
}
console.log(Celsiustofarenhight(38)); // true

//8. Write a program to calculate simple interest.
// problem number 8
function simpleinterest(principle, rate, time) {
  let interest = (principle * rate * time) / 100;
  return interest;
}
console.log(simpleinterest(1000, 5.2, 5)); // 260.0


//  .....  🔁 Loops and Iteration	 ............/

// 9. Print numbers from 1 to 100 using a for loop.

for (let i = 0; i <= 100; i++) {
  console.log(i)
}
// 10. Print the multiplication table of a given number using a loop.	

function multiplicationtable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ` + number * i);
  }
}

multiplicationtable(50);

// 11. Find the sum of all even numbers between 1 and 50.	
  // problem number 1
function sumofevennumber(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers; i++) {
    if(i % 2 == 0){
     
      sum += i
    
    }
  }
  return sum;
}
console.log(sumofevennumber(50));
// 12. find factorial of a number using a loop.from(selector, 

function findfactorial(number){
  let factorial = 1;
  for(let i = number; i >= 1; i--){
    factorial *= i;
  }
  return factorial;
}
console.log(findfactorial(5)); // Output: 120


 // 13. Print a triangle pattern using nested loops.		
 function trianglePattern(rows) {
  for(let i = 0; i<=rows ; i++){
    let triane = "";
    for(let j = 0; j <= i; j++ ){
      triane = triane + " * "
    }
    console.log(triane)
  }
 }
trianglePattern(5);


// create circle using nasted loops in js

function drawCircle(radius) {
  for (let y = -radius; y <= radius; y++) {
    let line = '';
    for (let x = -radius; x <= radius; x++) {
      // Circle equation (with tolerance)
      if (Math.abs(x * x + y * y - radius * radius) < radius) {
        line += '8';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

drawCircle(5);

// 14. Reverse a string using a loop.	

function Reversestring(str){
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--){
  reversed = reversed + str[i]
  }
  return reversed;
}
console.log(Reversestring("yeasin")); //nisaey

// try another way to reverse a string using loop and best statagy;
function reverseString(str){
  let arry = str.split("");
  let reversed = [];
  for(let i = arry.length - 1; i>=0; i--){
    reversed.push(arry[i])
  }
  return reversed.join('');
}
let string =reverseString("fareya");  // ayeraf
console.log(string); // this approch is best version 

// 15. Count vowels and consonants in a string.								
            


