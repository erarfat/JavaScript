// scope and basic closuer

// The console.log(one()); statement is logging undefined because the one function doesn't have an explicit return statement. In JavaScript, a function without a return statement implicitly returns undefined. When you call console.log(one());, it's effectively logging the result of the one function, which is undefined.

function one(){
    const usrename = "Arfat"
    function two(){
        const email = "sk@gmail.com"
        console.log(usrename);
        return
    } 
    //console.log(email);
    two()
    return 

}

// console.log(one()); //node 03_basics/04_scope.js 
// /workspaces/JavaScript/03_basics/04_scope.js:9
//     console.log(email);

console.log(one());

// ========= imp =====

// ====> difference betn function creation
// method one to create function

console.log(addone(2))
function addone(num1){
    return num1+1;
}

// console.log(addone(2)) ye function ke upar kiya to code work kare ga


// now using varible which called hoisting
// console.log(sum(10,20));
const sum = function sumofnumber(num1,num2){
    return num1+num2
}

//console.log(sum(10,20)); // ye function ke upar kiya to code work nahi kare ga





