// // Array method 
const firstArr = [1,2,3,4,5,6]
const secondArr = [7,8,9,10]
// // push second arry to apne ko arr ke andar arr milega
// firstArr.push(secondArr)
// console.log(firstArr);
// // to access value
// console.log(firstArr[6][1]);

// to concate same as push
//  const thirdArray = firstArr.concat(secondArr)
//  console.log(thirdArray); 

// concate ... use karke bhi hota hai called seprate operater

// const thirdArray = [...firstArr, ...secondArr]
// console.log(thirdArray);
// console.log(thirdArray[thirdArray.length-1]);

// flat depth concept

// const forthArray = [1,2,3,4,[5,6],[7,8,[9,10]]]
// console.log(forthArray.flat(Infinity));

// data scraping mai kaam me ata hai uspose user se input aya but wo different formate mai hai us ko convert karna hai to Arrays class use karo

// checking array hai ki nahi

console.log(Array.isArray("Arfat")); //flase 

//converting any data types to array

console.log(Array.from("Arfat"));

// same thing using object interview topic

// console.log(Array.from({name:"arfat"})); // show empty object

// of 

const n1 = 100
const n2 = 200
const nm = "Arfat"

console.log(Array.of(n1,n2,nm));


// Array.from:
// Array.from is used to create a new array from an iterable object or array-like structure.
// It takes an iterable or array-like object as its first argument and an optional mapping function as its second argument.
// It returns a new array with elements derived from the iterable or array-like object.
// Example:


// const set = new Set([1, 2, 3]);
// const newArray = Array.from(set, x => x * 2);
// console.log(newArray); // Output: [2, 4, 6]

// Array.of:
// Array.of is used to create a new array with a variable number of arguments.
// It takes any number of arguments and creates a new array with those arguments as its elements.
// It is useful when you want to create an array without ambiguity, especially for cases where the number of arguments matters.
// Example:

// const newArray = Array.of(1, 2, 3, 4, 5);
// console.log(newArray); // Output: [1, 2, 3, 4, 5]









