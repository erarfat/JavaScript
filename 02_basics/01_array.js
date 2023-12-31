// Arrays

const arrM1 = [1,2,3,4,"shaikh"]
console.log(arrM1);
const arrM2 = new Array(4,3,2,1,"Shaikh")
console.log(arrM2);


// Array Methods

arrM1.push("Khan") //add element at last
console.log(arrM1);

arrM1.pop()
console.log(arrM1);// remove element at last

arrM2.unshift(0)
console.log(arrM2); // add element at first and shifts

arrM2.shift() // remove first element and shifts
console.log(arrM2);

console.log(arrM1.includes(2)); //boolean
console.log(arrM1.indexOf(9)); // integer

const arrToString = arrM1.join()
// join using parameter
const arr1ToString = arrM1.join('=')
console.log(arrToString);
console.log(typeof arrToString);

// slice splice

// slice orignal arr remain same and endrange-1

// splice orignal arr change the splice part is remove and range is at end

// let arrA = [1,2,3,4,5];
// let arrB = arrA.slice(0,3);
// console.log(`The slice array is ${arrB} and orignal array is ${arrA}`);

// let arrC = [1,2,3,4,5];
// let arrD = arrA.splice(0,3);
// let arrSp = arrC
// console.log(`The splice array is ${arrD} and orignal array is ${arrSp}`); something is wrong

// let arrC = [1,2,3,4,5];
// let arrD = arrC.splice(0,3)
// console.log(`The splice array is ${arrD} and orignal array is ${arrC}`);

let myArr = [0,1,2,3,4,5]
console.log("myArr==> "+myArr);
let mySlice = myArr.slice(1,3)
console.log("Slice part ==> " + mySlice);
console.log("After Slice==> "+myArr);

let mySplice = myArr.splice(1,3)
console.log("Splice part ==> " + mySplice);
console.log(`${mySplice}`);






