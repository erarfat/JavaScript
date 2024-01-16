// get = getter and set = setter note agar getter diye hoto setter de zaruri hai nahi to error aye ga

class User {
    constructor(username, email){
        this.username=username
        this.email=email
    }

    get username(){
        // get lagaya to ye alag method banta hai is ko bina ()ke use karte hai
        //console.log(`The user name is ${this.username}.`); should be return
        //return this.username;  wrong name should be change
        return this._username.toUpperCase()

    }

    set username(value){
        // this.username = value // Maximum call stack size exceeded  isko pata ni ke uppar wala lena hai ki niche wala lena hai
        this._username=value // ye save hoga khali
    }
}

const oneUser = new User("Arfat","sk@gmail.com")

// geting note () nahi lagaye hai
//console.log(oneUser.username);

// now using old tech 

function userOld(username, email){
    this._username=username
    this._email=email

    // now object se getter and setter banaye
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })
}

const newUser =new userOld("shaikh","er")

console.log(newUser.email);


 



