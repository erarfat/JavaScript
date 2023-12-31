// functions scope{}

function displayName(){
    console.log("A");
    console.log("R");
    console.log("F");
    console.log("A");
    console.log("T");
}

console.log(displayName); // just reference hai

displayName()// () ye main hai to fnction call hoga

function sumTowNum(num1,num2){
    // yaha data type check karna zaruri hai
    return num1+num2
}

// note agar return hai to usko store karna pare ga

// sumTowNum(1,2) this will show nothing

const twoSum = sumTowNum(1,3)
console.log(twoSum);

// inserting wrong data type
const wrongData = sumTowNum(1,"2")
console.log(wrongData);

//suppose there is no parameter insterted

const withoutPara = sumTowNum()
console.log(withoutPara);

// how to handel cases

if (undefined) {
    console.log("Print undefined");
}
if (!undefined) {
    console.log("Print !undefined");
}

// from above it is clear that undefined act as zero

function loginUserMessage(username){
    if (!username) {  // if (!undefined) { wrong
        return `please enter user name`  
    }
    return `The user name is ${username}`
}

console.log(loginUserMessage("Arfat")); // The user name is undefined
console.log(loginUserMessage()); // The user name is undefined if there is no if condition










