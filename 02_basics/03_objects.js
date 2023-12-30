// agar object construt se bana hai to singleton hoga  wo ase banta hai Object.create


// abhi ismai literals use kar rahi hai

const myObject = {
    name: "Arfat",
    "Full Name": "Shaikh Arfat",
    email: "arfat@amazon.com",
    age: 18,
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// There is two ways to access object element 

// 1 using . but its fail some time suppose key is String
// console.log(myObject."Full name"); faild here
console.log(myObject.email);

// 2 method using [] it is better

// console.log(myObject[email]); wrong because email is key key is always in string
console.log(myObject["email"]);
console.log(myObject["Full Name"]);

//symoble ko ase key use karna hai interview

const mySym = Symbol("key1")

// const jsUser = {
//     name: "Arfat",
//     "Full Name": "Shaikh Arfat",
//     email: "arfat@amazon.com",
//     mySym: "mykey2", // wrong way
//     age: 18,
//     location: "Mumbai",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Sunday"]
// }

// console.log(typeof jsUser.mySym); //string bataraha hai

const jsUser = {
    name: "Arfat",
    "Full Name": "Shaikh Arfat",
    email: "arfat@amazon.com",
    [mySym]: "mykey2", // right way ues []
    age: 18,
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(jsUser[mySym]);// note symbole mai "" nahi use karenge
console.log(jsUser); // now it is symbole

// update value
jsUser.email="arfat@google.com"
// freeze object mai change nahi hoga
// Object.freeze(jsUser)
// jsUser.email="arfat@gpt.com"

console.log(jsUser);
// adding element in object
jsUser.greeting = function(){
    console.log("The User is");
}
console.log(jsUser);
console.log(jsUser.greeting);
console.log(jsUser.greeting());

// accessing element from same object using this

jsUser.twoGreeting = function(){
    console.log(`The user name is ${this.name}` );
} // note jsuser se pahile const nahi hai

console.log(jsUser.twoGreeting());


 




