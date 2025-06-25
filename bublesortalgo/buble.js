const arry = [10, 20, 3, 405, 53, 243, 442, 1, 141, 4, 12, 4, 11, 2, 1, 1, 4, 5, 22, 22, 4, 62, 421, 11, 3, 67, 74, 85, 35, 36, 3, 3, 5, 1, 6, 24, 21, 13, 52, 63, 242, 525, 25];

// buble sort algorithm to sort an array
for (let i = 0; i < arry.length - 1; i++) {
 //outer loop

    for (let j = 0; j < arry.length - 1 - i; j++) {

        //inner loop
        if (arry[j] > arry[j + 1]) {
            let temp = arry[j];
            arry[j] = arry[j + 1];
            arry[j + 1] = temp;
        }

     // inner loop end
     
    }

//outterlopp end

}


console.log(arry)

 // simple buble sort algoritham
const newarry =[8,12,4,12,3,52,67,4,5,13,31,734,34,13,1,12,3]

for(let i = 0 ; i < newarry.length-1; i++){
    for(let j = 0; j < newarry.length -1 - i; j++ ){
        if(newarry[j] >= newarry[j + 1]){
            let temp = newarry[j];
            newarry[j] = newarry[j+1];
            newarry[j + 1] = temp ;
        }
    }
}

console.log(newarry)



const NewArry = [10,41,31,34,12,13,53,143,52,52,52,23,42,5,63,7,85,90,56,3];
// buble sort

for(let i = 0; i < NewArry.length; i++){
    
}


//EnhancedpowerManagementEnabled

let array = [10,20,30,40,50,60,70,85,3,1,2,4,5,6,4,73,4,11,23,4,64,67,8,96];

for(let i = 0; i <= array.length; i++){
    console.log(array[i])
}