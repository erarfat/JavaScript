// is mai check karrange ke ki agar prototype object ko add kiye to kya hoga and array,string etc ko add kiye to kya hoga

let obj = {
    // empty
}

Object.prototype.printMe = function () {
    console.log('Through object is printed');
}

obj.printMe()

// now creating array and checking Object printMe present hai ki nahi array mai

let arr = [1,2,3]
arr.printMe() // parent(Object) to childobj(Array) possible

Array.prototype.printArr = function () {
    console.log("Array is print");
}

arr.printArr()
//obj.printArr() // giving an error because paraent cannot access child property

// inharitence 

// old 

const oneUs = {
    username: "Arfat"
}

const twoUs = {
    email: "sk@gmail.com",
    // but a want one user also then use prototype
    __proto__: oneUs
}

console.log(twoUs.username); // accessing  different user property

const empty ={

}

empty.__proto__ = twoUs // differnt way to inharitated

console.log(empty.email);

// morden
 const emptyTwo = {

 }

 Object.setPrototypeOf(emptyTwo,empty)

 console.log(emptyTwo.email);

 // now creating method to trim space

 String.prototype.removeWhi = function () {
    console.log(`The true length is ${this.trim().length}`);
 }

 'Arfat   '.removeWhi()
