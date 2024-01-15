// Object
// collection of properties and methods
// toLowerCase
// why use OOP
// parts of OOP
// Object literal

// Constructor function
// Prototypes
// Classes
// Instances (new, this)

const objOne = {
    username: 'Arfat',
    email: "@gmail.com",
    greeting: function(){
        console.log(this); // this show current contextx
    }
}

//console.log(objOne);

// suppose meko dura object bana hai same thing uppar kejesa karna parega to usko over come karne ke liye constructor use karte hai

function User(username,email,isLogined) {
    // myusername = username ye best parctice nahi hai dono side same name hona chahiye
    this.username = username 
    this.email = email
    this.isLogined = isLogined
    return this // agar new use kiye to bydefault hota hai
}

// agar bina new ke use kiye to value over reide hogi

// const userOne = User('Arfat', 'sk@gmail', true)
// //console.log(userOne);
// const userTwo = User('Shaikh', 'shaikh@gm', false)
// console.log(userOne);// user one change here therefor use new to create new copy

const userOne = new User('Arfat', 'sk@gmail', true)
const userTwo = new User('Shaikh', 'shaikh@gm', false)
console.log(userOne);
console.log(userTwo);