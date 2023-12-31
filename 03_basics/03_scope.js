// scope of let var let const
var a=10
let b=20
const c=30

function aboveValueChange(){
    var a=110
    let b=210
    const c=310 
    console.log("Done");
}

aboveValueChange()

// // note ye jo scope hai wo function ki nahi hai 
// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    var a=110
    let b=210
    const c=310  
}

// var value change hogayi
console.log(a);
console.log(b);
console.log(c);

// note In JavaScript, variables declared with var have function scope, which means they are only scoped to the function in which they are declared, not to blocks like if statements or loops. So, in your code, the var a inside the function aboveValueChange is actually a different variable than the one declared outside the function. shown above

