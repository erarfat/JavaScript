// Arrow and This 

// This object ke liye use hota hai or is mai check karenge ki arga function ke sath use kiye to kya hoga

const myObj  = {
    username: "Arfat",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
    
}

// myObj.welcomemessage()

// // change the object
// myObj.username = "Shaikh"
// myObj.welcomemessage()

//this in object function is called current object element

// now for global what happen check

console.log(this); // empty object

// agar yahi cheez browser ke console mai kiye to empty obj ki jaga windows dega interview

// what happen if i use this in function

// function one(){
//     console.log(this);
// }

// one() // this give many thing

// now Arrow function 

// const one = () => {
//     console.log(this);
// }

// one() // now arrow function one show {} object

// now how to write arrow function in different type ye react mai bohot use hota hai

//1

// const one = () => {

// }

// 2 

const one = (num1,num2) => {
    // explicit return
    return num1+num2
}

console.log(one(10,20))

// note arrow function mai bina return ke bhi kar sakte hai which is called implicit return

const withoutReturn = (num,num1) => num+num1

console.log(withoutReturn(10,100));

const withoutReturnObj = (num,num1) => { name:"arfat"}

console.log(withoutReturnObj(10,20)); // iundefined

// to over come this problem use ()

const withoutReturnObjUsing = (num,num1) => ({ name:"arfat"}) // react mai bohot use hoga 

console.log(withoutReturnObjUsing(10,200));






