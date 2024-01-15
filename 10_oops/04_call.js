// call is liye use karte hai ki function ke andar function but wo top of stack hoga top wale ko kon bataye ga ye kis ka call hai

// function setUser(username) {
//     this.username=username
// }

// function createUser(username,email,pass) {
//     setUser(username) // ye jab topof stack hoga to isko pata nahi chalega ki me createUser ke andar call hua hu
//     this.email=email
//     this.pass=pass
// }

// const user = new createUser("Arfat","sk@gmail.com",'123')
// console.log(user);  // createUser { email: 'sk@gmail.com', pass: '123' } not showing username

function setUser(username) {
    this.username=username
}

function createUser(username,email,pass) {
    setUser.call(this, username) // mera wala userlo kyu ki setUser wala gayeb hojayega
    this.email=email
    this.pass=pass
}

const user = new createUser("Arfat","sk@gmail.com",'123')
console.log(user);

