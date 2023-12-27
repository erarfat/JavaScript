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
let newDatesAddPara = new Date('2023', '0', '1', '5', '3')
console.log(newDates.toDateString());//Sun Jan 01 2023
console.log(newDatesAddPara.toLocaleString());//1/1/2023, 5:03:00 AM

 //let indianDate = new Date("27-01-2024") //invalid
 // above Note : The date string "27-01-2024" is in the format "dd-mm-yyyy," and while humans can interpret it easily, the JavaScript Date object expects date strings in either "mm-dd-yyyy" or "yyyy-mm-dd" formats.

let indianDate = new Date("2024-01-14")// month in these formate start from one not zero
console.log(indianDate.toLocaleString());

// let timeStamp = indianDate.now() wrong
let timeStamp = Date.now()
console.log(timeStamp); // in millisecond count from January 1, 1970, 

let dateAssTime = indianDate.getTime();

console.log(dateAssTime);

console.log(dateAssTime-timeStamp);

// converting millisecond into second

console.log(Math.floor(Date.now()/1000));

console.log(`The Day is ${dates.getDay()}`);

// imp hai 

console.log(dates.toLocaleString("default", {
    weekday:"long",
    month:"long"
}));



