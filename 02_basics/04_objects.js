// object using constructor singleton
// const myObj = new Object() constructor

const jsUser = {}
//console.log(jsUser);
jsUser.id = "sk@gmail.com"
jsUser.name = "Arfat"
jsUser.isLoggedIn = true

//console.log(jsUser);

// nested object 

const myObj ={
    id: "sk@gmail.com",
    fullname: {
        username:{
            firstname: "Arfta",
            lastname: "Shaikh"
        }
    }
}

// how to access it
console.log(myObj.fullname.username.firstname);

// method to concate the object
const firstObject = {
    name: "Arfat",
    email: "arfat@google.com"
}

const secondObject = {
    id: 1,
    loggedIn: true
}

// const thirdObject ={firstObject,secondObject}// ye same hai array.push()

//const thirdObject = {...firstObject, ...secondObject} corret hai mostly used hai

const thirdObject = Object.assign({},firstObject,secondObject) // note {} first mai hai uska matlab ye hai all object usme dalo nahi lagaye to bhi chalega

console.log(thirdObject);

// suppose in array there is may object

const arr = [
    {
        name: "Arfat",
        email: "arfat@google.com"
    },
    {
        id: 1,
        loggedIn: true
    },
    {

    }
]

// how to accses is

console.log(arr[0].email);

// how retriview object key and values

// console.log(jsUser.keys()); wrong

console.log(Object.keys(jsUser));// returen array

console.log(Object.keys(myObj));// return two array number object = number array

console.log(Object.values(jsUser));// retuern values

console.log(Object.entries(jsUser));// return array in key-values pairs

console.log(Object.entries(myObj));// imp check


// how to check wether key isthere or not imp

console.log(myObj.hasOwnProperty('isLoggedIn'));

console.log(secondObject.hasOwnProperty('loggedIn'));




