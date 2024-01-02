// for of loop gives value

// for (const iterator of object) {
    
// }

// 1 ==> for of in array (working)

const numbers = [1,2,3,4,5]

for (const num of numbers ) {
    console.log(num);
}

// 2 ==> for of in String (working)

const string = "Arfat Shaikh"

for (const str of string) {
    console.log(str);
}

// 3 for of in Map (working)

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

//  create const map1 = new Map();

const map = new Map()

map.set("Ar", "Arfat")
map.set("Sh", "Shaikh")
map.set("Kh", "Khan")

// console.log(map);

// for (const access of map) {
//     console.log(access);
// }  return array 

// access ko [] is me dalo

// for (const [access] of map) {
//     console.log(access);
// }  it will return nothing

for (const [key, value] of map) {
    console.log(key + ":="+ value );
}

// 4  ==> for of in object (not working)

const myObj = {
    name: "Arfat",
    lastName: "Shaikh"
}

// for (const val of myObj) {
//     console.log(val);
// } error

// for (const [key, val] of myObj) {
//     console.log(val);
// } error







