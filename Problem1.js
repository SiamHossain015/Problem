// check Number Even or odd use function and without function
//whthout function
// let number=10;
// if(number%2===0){
//     console.log("Number is even");

// }
// else{console.log("Number is odd");

// }
//whith function 
function checkEvenOrOdd(number){
  if(number%2===0){
    return "Number is even";
}
else{
    return "Number is odd";
}  
}

console.log(checkEvenOrOdd(25));
console.log(checkEvenOrOdd(26));
console.log(checkEvenOrOdd(3));
console.log(checkEvenOrOdd(4));
