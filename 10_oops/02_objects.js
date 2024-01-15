// Array ==> Object ==> null
// String ==> Object ==> null
// function ==> Object ==> null
// protoype mai method hota hai kese array hai to .map ect ke kudse bhi bana sakte hai 

function squar(num){
    return num*num
}

squar.map=2
console.log(squar(3));
console.log(squar.map);
console.log(squar.prototype); //empty object hai jodalna hai daloo

// how to create your own method

function creatUser(username,email) {
    this.username=username
    this.email=email
}

// now creating proto
creatUser.prototype.printEmail = function(){
    console.log(`The email is ${this.email}`);
}

// now creating user

// const userOne = creatUser("Arfat","ar@gmail.com")
// const userTwo = creatUser("Shaikh","sk@gmail.com")

// uppar new nahi use kiya hu error de raha hai

const userOne = new creatUser("Arfat","ar@gmail.com")
const userTwo = new creatUser("Shaikh","sk@gmail.com")


userOne.printEmail()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
