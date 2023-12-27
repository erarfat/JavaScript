// Primitive data types copy bana ta  hai
// 7 ==> string number boolean null symbol undefine BigInt
// symbole id ko unqiue identify ke liye hai
const id = Symbol("123")
const nextId = Symbol("123")
console.table([id,nextId]);
console.log(id===nextId);
//const bigNumber=232142342543142n

// Reference (Non Primitive)

// Array object function

const array=["Arfat", "Shaikh"]

//object {} mai jobhi hai wo object hai
// object ke andar kuch bhi hosakta hai object array etc

const myObj={
    name:"lala",
    id:123
}

// const myFunction=function(
//     console.log("Arfat");
// ) wrong kiya hu

const myFunction=function(){
    console.log("Shaikh");
}

console.log(typeof myFunction);// is called object function

console.log(typeof array);
console.log(typeof myObj);



