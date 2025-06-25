// first solving problem solutaions
 // ..........problem 1
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n - 1)
}

console.log(factorial(5))


// let's try again to febonacci problem solving using recation cal itself
 
function febonacci(n){
if(n === 0 || n === 1){
    return n
}
return febonacci(n - 1) + febonacci(n - 2)
}

console.log(febonacci(6))

