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
    if (i % 2 == 0) {

      sum += i

    }
  }
  return sum;
}
console.log(sumofevennumber(50));
// 12. find factorial of a number using a loop.from(selector, 

function findfactorial(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(findfactorial(5)); // Output: 120


// 13. Print a triangle pattern using nested loops.		
function trianglePattern(rows) {
  for (let i = 0; i <= rows; i++) {
    let triane = "";
    for (let j = 0; j <= i; j++) {
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

function Reversestring(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i]
  }
  return reversed;
}
console.log(Reversestring("yeasin")); //nisaey

// try another way to reverse a string using loop and best statagy;
function reverseString(str) {
  let arry = str.split("");
  let reversed = [];
  for (let i = arry.length - 1; i >= 0; i--) {
    reversed.push(arry[i])
  }
  return reversed.join('');
}
let string = reverseString("fareya");  // ayeraf
console.log(string); // this approch is best version 

// 15. Count vowels and consonants in a string.								

function CeeckvowelAndConsonat(str) {
  let countVowel = 0;
  let countConsonat = 0;
  let check = "aeiou";
  for (let i = 0; i < str.length; i++) {
    let lowercase = str[i].toLowerCase();
    if (/[a-z]/.test(lowercase)) {
      if (check.includes(lowercase)){
        countVowel++
      }else{
        countConsonat++
      }
   }
  }
  return{ countVowel,countConsonat , str }
}
let vowels= CeeckvowelAndConsonat("ptnqr")
console.log(vowels)

// 🧩 Functions and Logic		

// 16. Create a function that returns the square of a number.	

function findsquare(num){
  return num * num;
}

console.log(findsquare(10))
    
// 17. Write a function to check if a string is a palindrome.	

function isPalindrome(str) {
  // Step 1: Normalize the string (convert to lowercase and remove non-alphabetic characters)
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Step 2: Reverse the normalized string
  const reversedStr = normalizedStr.split('').reverse().join('');
  
  // Step 3: Compare the original and reversed strings
  return normalizedStr === reversedStr;
}

let is = isPalindrome("neen")

// try to another way to solved problem
function palendromechecker(str){
 let normalstring =str.toLowerCase().replace(/[^a-z0-9]/g,'');
 
 const reversee = normalstring.split("").reverse().join('');
 return normalstring === reversee

}
let pl = (palendromechecker("md yeasin shikh"))

///18. Create a function that checks whether a number is prime.
//............ solving problem .............

function primenumberchecker(number){
  if(number <= 1) return false // prime number

   for(let i = 2 ; i <= Math.sqrt(number); i++){
    if(number % 2 === 0) return false;
   }
    return true
}

 console.log(primenumberchecker(7))

  // 19. Write a function that returns the Fibonacci series up to n terms.								
      
  function GoldenRatio(limit) {
    let a = 0; // first number
    let b = 1; // second number
  
    for (let i = 1; i <= limit; i++) {
      console.log(a);
      let next = a + b;
      a = b;
      b = next;
    }
  }
  
  GoldenRatio(); // prints first 10 Fibonacci numbers
  
 // 20. Write a function that returns the sum of digits of a number.	

 function sumDigits(number) {
  let sum = 0;
  let st = number.toString();

  for (let i = 0; i < st.length; i++) {
    sum = sum + parseInt(st[i]);
  }

  return sum;
}

console.log(sumDigits(12314)); // Output: 11

//                                  
// 🧮 Arrays and Array Methods			
 // 21. Find the largest number in an array.	

const arry = [10, 23, 4, 5, 2, 3, 43, 45, 24, 90, 56,59,60,30,52,22,121,1];
let lnumber = arry[0];
let smallnum = arry[0]

for (let i = 0; i < arry.length; i++) {
  if (lnumber <= arry[i]) {
    lnumber = arry[i];
  }

  if(smallnum >= arry[i]){
    smallnum = arry[i]
  }
}

console.log(`largest number : ${lnumber}`);
console.log(`smallnum number : ${smallnum}`);

// 22. Find the sum of all elements in an array.
const arry1 = [10,20,40,50,50,50,502,2,52,2,52,523,2]

let sum1 = 0;
for(let i = 0; i < arry1.length; i++){
  sum1 += arry1[i]
}
				


// 23. Remove duplicates from an array.	
const array = [1, 2, 2, 3,3,3,3, 4, 4, 5,1,5,5,2 ,6,65,3,4,24,52,33,112,122,111,121,121,112];
const array1 = [1, 2, 2, 3,3,3,3, 4, 4, 5,1,5,5,2,2,53,52,212,23,23,323,231,45,45];
const uniqueArray = [...array,...array1];
const copyremove = [...new Set(uniqueArray)]

 // Output: [1, 2, 3, 4, 5]




// 24. Sort an array in ascending order without using .sort().	

const sortArry = [1, 2, 3, 521, 2, 13, 131, 44, 5255, 33, 21, 31, 2, 4365, 24, 34, 4365, 35, 75, 7, 97, 75, 35, 365, 679, 65353658, 8584, 78, 33, 362, 707];

let sortArray = [];

let copyArray = [...sortArry]; // Create a copy so we don’t modify the original

while (copyArray.length > 0) {
  let min = copyArray[0];
  let minIndex = 0;

  // Find the minimum element in the unsorted array
  for (let i = 1; i < copyArray.length; i++) {
    if (copyArray[i] < min) {
      min = copyArray[i];
      minIndex = i;
    }
  }

  // Push the minimum to the sorted array
  sortArray.push(min);

  // Remove the minimum from the original array
  copyArray.splice(minIndex, 1);
}

console.log(sortArray);
//  26. Merge two sorted arrays into a single sorted array.	

const onedimontionArry =[]