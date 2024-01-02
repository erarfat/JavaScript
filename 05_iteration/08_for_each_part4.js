// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

// mostly us for addition

// 1 on array

const arr = [1,2,3]

const total = arr.reduce( (acc,currentval) => (acc+currentval),0)

console.log(total);

arr.reduce( (acc,currentval) => {
    console.log(`acc ${acc} and curr ${currentval}`);
    return acc+currentval
},0)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const totalPrice = shoppingCart.reduce( (acc,item) => (acc+item.),0) wrong

const totalPrice = shoppingCart.reduce( (acc,item) => (acc+item.price),0)

console.log(totalPrice);


