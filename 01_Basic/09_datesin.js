//++++++++++++ Dates
//Creating Dates
let dates = new Date();
console.log(dates); //2023-12-27T07:24:18.619Z
console.log(dates.toString())// Wed Dec 27 2023 07:24:18 GMT+0000 (Coordinated Universal Time)
console.log(dates.toLocaleDateString()) //12/27/2023
console.log(dates.toLocaleString()); //12/27/2023, 7:24:18 AM

console.log(dates.toDateString()); //Wed Dec 27 2023

// note month index start with 0

let newDates = new Date('2023', '0', '1')
let newDatesAddPara = new Date('2023', '0', '1', '5', '12')
console.log(newDates.toDateString());



