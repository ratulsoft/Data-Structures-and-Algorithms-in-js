// function quickSort(arr) {
//   // Base case: if array has 0 or 1 element, it's already sorted
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Choose a pivot (here we take the last element)
//   let pivot = arr[arr.length - 1];

//   // Create arrays for elements less than and greater than pivot
//   let left = [];
//   let right = [];

//   // Loop through all elements except the pivot
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]); // put in left if smaller
//     } else {
//       right.push(arr[i]); // put in right if bigger
//     }
//   }

//   // Recursively sort left and right, and combine
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // Example usage
// let myArray = [5, 3, 8, 4, 2, 7, 1, 10];
// console.log("Sorted Array:", quickSort(myArray));




// function quickSort(arry){
//   if (arry.length <=1)  return arry;

//   let left = []
//   let right = []
//   let pivot = [arry.length - 1 ];

//   for(let i = 0; i < arry.length; i++){

//   }
  
// }

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[0]; // Choose the first element as the pivot
//   const lessThanPivot = [];
//   const greaterThanPivot = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) {
//       lessThanPivot.push(arr[i]);
//     } else {
//       greaterThanPivot.push(arr[i]);
//     }
//   }

//   return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
// }

// // Example usage:
// const myList = [5, 2, 8, 1, 9, 4, 7, 3];
// const sortedList = quickSort(myList);
// console.log("Original list:", myList);
// console.log("Sorted list:", sortedList);


function quicksort(arry){
 if(arry.length <= 1) return arry;

 let pivot = arry[0]
 let lowerbound = []
 let upperbound = []

 for(let i = 1; i < arry.length ; i++ ){
  if(pivot >= arry[i]){
    lowerbound.push(arry[i])
  } else{
    upperbound.push(arry[i])
  }
 }
   
  return [...quicksort(lowerbound),pivot , ...quicksort(upperbound)]

}

let arry =[10,31,24,21,5,621,1,345,12,57,432,42,12,13,31,5,63,42]

let orginalArry =arry;
console.log(orginalArry)
let sortedarry = quicksort(arry);
console.log(sortedarry)