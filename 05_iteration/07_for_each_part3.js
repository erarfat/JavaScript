// map

// The map method is used for transforming each element of an array and creating a new array with the results. It applies a given function to each element of the array and returns a new array with the results.map sabpe kare ga

const arr = [10,20,30,40]

const ans=arr.map( (num) => (num+1) )

console.log(ans);

const res = arr.map( (num) => (num%2===0) )
console.log(res);

//multiple method join  called as chaning

const myArr =[1,2,3,4,5,6]

let join=myArr.map( (num) => (num*10)).map( (num) => num+1) 
console.log(join);

join=myArr.map( (num) => (num*10)).filter( (num) => num%3==0 )

console.log(join);