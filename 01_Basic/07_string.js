// Very Important topic 
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

// endsWith() The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

const end = "My Name Is Shaikh!"

console.log(end.endsWith('Shaikh!')); //return true if present

//suppose apne ko ! ko nahi count lenea hai to

console.log(end.endsWith('Shaikh',end.length-1));

// The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units. ye ascii value se char dega

const one = 65;// A
const two = 66; //B
const three = 67 //C

console.log(String.fromCharCode(one,two,three));// ABC

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

const present = "Khan"
console.log(`The name Khan is ${sentence.includes(present)? 'present' : 'not present'}`);

// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

const sentenceOne = "My Name is Khan Khan"
const indexOfValue = sentenceOne.indexOf('Khan')
const indexOfSecond = sentenceOne.indexOf('Khan',indexOfValue+1) 
console.log(indexOfValue);
console.log(indexOfSecond);


// String.prototype.lastIndexOf() give last index

// match() use regular exp









