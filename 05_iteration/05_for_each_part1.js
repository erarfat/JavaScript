// for each loop High order Array loops 
// note array ki property hai ye

// 1 for each loop in arr

const numbers = [100,200,300,400]
// (method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void  
// callbackfn dena hai matlop function without function name


// arr.forEach( function name () {

// }) name nahi dena hai

// numbers.forEach( function (num) {
//     console.log(num);
// }) normal function 

// now usin arrow function

// numbers.forEach(const name = () => {

// }) no name 

numbers.forEach( (num) => {
    console.log(num);
})

numbers.forEach( (num,index,arr) => {
    console.log(num+' '+ index+ ' '+ arr);
})

 // passing external function

 function printtheelement(num){
    console.log(num);
 }

 numbers.forEach(printtheelement)

 // mow array with object vv imp for database

 const object =[
    {
        name: "Arfat",
        lastName: "Shaikh"
    },
    {
        name: "Rehan",
        lastName: "Khan"
    },
    {
        name: "Majid",
        lastName: "Tam"
    }
 ]

 object.forEach( (key) => {
    console.log(key.name);
 })




