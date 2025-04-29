//🟢 Basic JavaScript (Variables, Operators, Conditionals)
//1. Declare a variable and assign it a value. Then log it to the console.
  // first problem solved 
let myVariable = " Hello,  World! "
console.log(myVariable);
// second problem
//2. Swap two variables without using a third variable.

let a = 5;
let b = 10;
console.log("Before swap: a = " + a + " b = "+ b);
a = a + b;
b = a - b;
console.log("after swap: a + " + a + " b = " + b);

// third problem
// 3. Write a program that checks if a number is even or odd.								
   
 function isevenodd(num){
if(num % 2 == 0){
  return "even"

}else{
  return "odd"
}

 }
 console.log(isevenodd(4)) // even


// 4. Check if a year is a leap year or not.		
function isleepyear(year){
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    return true;
  }
  else{
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

function largestnumber(num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    return `largest number is num1: ${num1}`;
  } else if(num2 > num1 && num2 > num3){
    return `largest number is num2: ${num2}`;
  }else{
    return `largest number is num3: ${num3}`;
  }

}
console.log( largestnumber(20,50,10));

//7. Convert Celsius to Fahrenheit.	
// problem number 7
function Celsiustofarenhight(){
  
}