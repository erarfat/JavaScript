class User {
    constructor(username, email, pass){
        this.username=username
        this.email=email
        this.pass=pass
    }

    getUserName(){
        console.log(`The user name is ${this.username}`);
    }
}

const userOne = new  User('Arfat', 'sk@gmail.com', '123')
console.log(userOne);
userOne.getUserName()

// behind the seen jab class nahi thi

function UserUsingOld(username, email, pass) {
        this.username=username
        this.email=email
        this.pass=pass
}

UserUsingOld.prototype.getUs = function () {
    console.log(`from old school ${this.username}`);
}

const twoUser = new UserUsingOld("Shaikh","@gmail.com",'123')

twoUser.getUs()

