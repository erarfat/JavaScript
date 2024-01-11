// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// method one to create Promise

const promiseOne = new Promise( function(reslove,reject){
    // db call and async task
    setTimeout( ()=>{
        console.log("Arfat Shaikh");
        reslove() //then and niche wale promise ko connect keliyehai 
    },1000)
    // let num =100
    // return 100; jo bhi return karna hai wo reslove dalo
})

// till here is create ab niche consume kese karna hai then is use for response perpose 

promiseOne.then(function(){
    // jo uppar promise one se return aya hai wolega
    console.log("Joined");
})

// now same thing using parameter how to pass parameter

const promiseWithPara = new Promise( function(reslove,reject){
    // db call and async task
    setTimeout( ()=>{
        console.log("Arfat Shaikh");
        reslove("The DB is Connected") //then and niche wale promise ko connect keliyehai 
    },1000)
    
})

promiseWithPara.then(function(str){
    console.log(`${str}`);
})

// method Two to create Promise without variable

new Promise(function(reslove,reject){
    setTimeout(()=>{
        console.log("Same thing using variable");
        reslove()
    },1000)
}).then(function(){
    console.log("Arfat");
})

// method Three to create Promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Promise and chaining

const promiseFour = new Promise(function(reslove,reject){
    let valid = true
    setTimeout(()=>{
        if (!valid) {
            resolve({username:"Arfat", pass:"123"})
        }
        else{
            reject("error wrong")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username // ye jp hai next wale then mejayega
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(`error come from fourP ${err}`);
}).finally(()=>(console.log("Default either reslove or reject ye to run hogi")))

// promise and async  async await jo hai us same manullay karna hota hai

const promiseFive = new Promise(function(reslove,reject){
    let valid = true
    setTimeout(()=>{
        if (!valid) {
            resolve({username:"js", pass:"123"})
        }
        else{
            reject("javascript wrong")
        }
    },1000)
})

// async  consumePromiseFive(){

// } wrong

async function consumePromiseFive(){
    try {
        // const response = wait promiseFive wrong
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} 

consumePromiseFive() /// ye nahi kiye to erorr ayega


// api using async await

// async function getAllUser(){
//     try {
//         const response = await fetch("https://api.github.com/users/erarfat")
//         //console.log(response);
//         //let data = response.json() // ye jo convertion hai time leraha hai is lite error araha hai isko slove karne ke liye await laga oo
//         let data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('e',error);
//     }
// }

// getAllUser()

// now same thing using fetch

fetch("https://api.github.com/users/erarfat")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(()=> console.log('er'))



