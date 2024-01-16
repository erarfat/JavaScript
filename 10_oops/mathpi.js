const dec = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(dec);

//   writable: false, cannot change it

console.log(Math.PI);
Math.PI=10
console.log(Math.PI); // not change because of above

const User = {
    name : 'Arfat',
    email : 'sk@gmail.com'
}

Object.defineProperty(User, 'name',{
    enumerable: false, // note able to iterate
})

for (const [key, value] of Object.entries(User)) {
    console.log(`${key}  ${value}`);
}

// note name is not showing