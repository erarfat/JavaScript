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

//The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

console.log("abc".padEnd(10));// "abc       "
// 10 -abc= 7 will append
console.log("abc".padEnd(10,"ar")); 

//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

console.log(sentence.slice(3)); //from front index is zero

console.log(sentence.slice(-4)); // from back index is 1

console.log(sentence.slice(-7,-5)); //range

// The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

const mobileNumber="123456789"
const endTwoDigit=mobileNumber.slice(-2)
const hiddenNumber=endTwoDigit.padStart(mobileNumber.length,'*')

console.log(`The Otp is send at this number ${hiddenNumber}`);

// note padStart(),padEnd() mai value include hogi

//The String.raw() static method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. It's used to get the raw string form of template literals — that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.
//use for / and //

console.log(String.raw`C\\windows`); // agar raw nahi liye to // escape hoga

//The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

console.log("Welcome! ".repeat(3));

//The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

console.log(sentence.replace("Khan" , "Shaikh"));

//The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

console.log(sentenceOne.replaceAll("Khan", "Shaikh"));

//note slice mai start and end dena hai but in subString mai nahi dena hai


//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

console.log(sentence.split(' '));

//The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

//startsWith(searchString)
//startsWith(searchString, position)

console.log(sentence.startsWith("My"));
console.log(sentence.startsWith("My" , 3));

console.log(sentence.startsWith("is", 3));
console.log(sentence.startsWith("name", 3));

// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

console.log(sentenceOne.substring(0,sentenceOne.length-5));

// The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"

// The toString() method of String values returns this string value.

const objectOfString = new String("Shaikh")
console.log(objectOfString);// "Shaikh" it is object
console.log(objectOfString.toString());// String hai

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const withWhiteSpace="    Khan   "
console.log(withWhiteSpace.trim());









