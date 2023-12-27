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

console.log(arrM1.includes(2));
console.log(arrM1.indexOf(9));

const arrToString = arrM1.join()
console.log(arrToString);
console.log(typeof arrToString);

// slice splice

// slice orignal arr remain same and endrange-1

// splice orignal arr change the splice part is remove and range is at end


