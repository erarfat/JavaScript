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
const number=2

// console.log(`The Letter at ${number}th place is sentence.at(number)`); wrong

console.log(`The Letter at ${number}th place is ${sentence.at(number)}`);

console.log(`The Letter at ${number}th place is ${sentence.at(-2)}`);// -ve take from back

// charAt() same at()

console.log(sentence.charAt());

// charCodeAt()

console.log("ABC".charCodeAt(0));// return ascii value

// codePointAt()

"😍".codePointAt(0); // 128525

// concat() to join

const str1 = "Arfat"
const str2 = "Shaikh"
console.log(str1.concat(' ', str2));
console.log(str1.concat(',, ', str2));
console.log(str1.concat(str2));

//



