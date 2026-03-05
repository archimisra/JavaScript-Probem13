// take a number n as input from user. create an array of numbers from 1 to n.
//use the reduce method to calculate sum of all numbers in teh array.
//use the reduce method to calculate product of all numbers in the array.

let n = prompt("enter a number:");
let Arra = [];
for(let i = 1; i<=n;i++){
   Arra[i-1]=i;
}
console.log(Arra);


let sum = Arra.reduce((res,curr)=>{
    return res+curr;
});

console.log("sum = ",sum);


let factorial = Arra.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial = ",factorial);