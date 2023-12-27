//+=======> Numbers <=======
const number = 123
const num = new Number(123) //obj 
console.log(num);
console.log(num.toString());
const decm = 106.6239
console.log(decm.toFixed(2));// imp

console.log(decm.toPrecision(2));

const hund = 1000000
console.log(hund.toLocaleString('en-IN')); // add coma


// ++++++++++ Maths++++++++++++++

console.log(Math.random());

// some if we want in range then
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min);
