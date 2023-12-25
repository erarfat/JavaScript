// String All Method
const name = "Arfat"
const rank = 1;
//console.log(name+rank+"yes"); bad practice
console.log(`My name is ${name} and rank is ${rank}`);

// different method to inti
const myName= new String("Lala")

//anchor() Deprecated: This feature is no longer recommended.

// at() The at() method of String values takes an integer value and returns a new String
const sentence="My name is Khan"
const number=5
// console.log(`The Letter at ${number}th place is sentence.at(number)`); wrong
console.log(`The Letter at ${number}th place is ${sentence.at(number)}`);
console.log(`The Letter at ${number}th place is ${sentence.at(-2)}`);// -ve take from back
