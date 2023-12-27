// Primitive Datatype copy banate hai

// const name="Arfat"
// const secondName=name
// secondName="Shaikh"
// console.log(name);
// console.log(secondName);
// above mai mai kuch wrong kiya tha
let name="Arfat"
let secondName=name
secondName="Shaikh"
console.log(name);
console.log(secondName);
// is mai name ki copy secondname ko diya reference nahi

// Non primitive refernce banate hai

// let oneUser={
//     name="Arfat",
//     email="sk@google.com"
// } again mistake kiya hu
let oneUser={
    name:"Arfat",
    email:"sk@google.com"
}


let secondUser=oneUser

secondUser.email="arfat@gmail.com"
// now changes happend in both

console.log(oneUser.email);
console.log(secondUser.email);


