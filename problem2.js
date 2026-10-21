//problem 2: Sum of a Range of Number (1 to N)
//without function 
let number = 7
let sum=0;
for( let i=1; i<=number; i++){
    sum=sum+i;
    // console.log(i);
}
console.log("Sum is", sum);


//with function
    function sumOfNumber(number){
    let sum=0;
    for( let i=1; i<=number; i++){
    sum=sum+i;
    // console.log(i);
}
    return sum;
}
console.log(sumOfNumber(10));