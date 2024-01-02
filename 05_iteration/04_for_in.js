// for in give key 

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// 1 ==> for_in  in array (working) 

const arr = [100,200,300]

// for (const key in arr) {
//     console.log(key);
// } it will give index 

for (const key in arr) {
    console.log(arr[key]);
} // gives value

// 2 ==> for_in  in object (working) but no working in for of loop

const myObj = {
    name: "Arfat",
    lastName: "Shaikh"
}

// for (const key in myObj) {
//     console.log(key);
// } give key 

// // console.log(myObject[email]); wrong because email is key key is always in string
// console.log(myObject["name"]);
// console.log(myObject["lastName"]);


for (const key in myObj) {
    console.log(`The key is ${key} and value is ${myObj[key]}`);
}

// 3 ==> for_in  in map (working) but show nothing

const map = new Map()

map.set("Ar", "Arfat")
map.set("Sh", "Shaikh")
map.set("Kh", "Khan")

// for (const key in map) {
//    console.log(key);
// } show nothing

// for (const [key] in map) {
//     console.log(key);
//  } show nothing

