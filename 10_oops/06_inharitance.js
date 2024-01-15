// doing the same thing as done in call but call mai this tha yaha pe super hai 

class User {
    constructor(username){
        this.username=username
    }

    printMe(){
        console.log(`The User name is ${this.username}`);
    }
}

class Customer extends User{
    constructor(username, email, pass){
        super(username)
        this.email=email
        this.pass=pass
    }
    toPrint(){
        console.log(`The username is ${this.username}`);
    }
}

const oneUser = new Customer("Arfat","@gmail.com",'123')
oneUser.toPrint()
oneUser.printMe()
const twoUser = new User("Shaikh")
console.log(oneUser===twoUser);

console.log(twoUser instanceof User);

console.log(oneUser instanceof User);
