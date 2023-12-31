// ===> how to handel multiple parameter 
// suppose shopping cart hai usme apne ko pata nahi kitne product aye ga 

// note ... are rest operator and spread operator

function calculateCartPrice1(num1){
    return num1
}
 
const totalPrice = calculateCartPrice1(100,200,300)//three item in cart

console.log(totalPrice);// op 100

function calculateCartPrice2(... num1){
    return num1
}
//... num1 array dega [ 10, 20, 30 ]


console.log(calculateCartPrice2(10,20,30))
// return array

// function with two paramereter and rest operator interview topic

function calculateCartPrice3(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice3(10,20,30,40,50));
// op [ 30, 40, 50 ] 0, 1 th value val1 and val2 lega

// passing object to function

const myObje = {
    username: "Arfat",
    email: "sk@gmail.com"
}

function Objecttake(tkobj){
    console.log(`The username is ${tkobj.username} and email is ${tkobj.email}`);
}

Objecttake(myObje)

// suppose there is email not present then it will show undefine

// Objecttake({
//     username:"Arfat sk"
// })

//console.log(myObje.hasOwnProperty('isLoggedIn'));

function objectTakeUpdate(tkobj){
    if (tkobj.hasOwnProperty('username') && tkobj.hasOwnProperty('email') ) {
        console.log(`The username is ${tkobj.username} and email is ${tkobj.email}`);
    }
    else if (tkobj.hasOwnProperty('username')) {
        console.log("Plese enter email");
    }
    else{
        console.log("Plese enter the username");
    }
    
}

console.log(objectTakeUpdate({
    username: "Lala",
    email: "lala@gmail.com"
}));

console.log(objectTakeUpdate({
    username: "Lala",
    //email: "lala@gmail.com"
}));

console.log(objectTakeUpdate({
    //username: "Lala",
    email: "lala@gmail.com"
}));

// takeing array

const arr = [10,20,30,40]

function printElementAtGnIndex(myArr,index){
        return myArr[index]
}

console.log(printElementAtGnIndex(arr,2)); //30

// inserting out value

console.log(printElementAtGnIndex(arr,10)); // undefined









