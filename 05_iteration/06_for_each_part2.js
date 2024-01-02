// for each map fillter

// for each does not return any thing

const arr = [1,2,3,4,5,6]

// let res = arr.forEach( (values) => {
//     return values
// })
// console.log(res); // undefined

// filter The filter method is used for creating a new array with elements that satisfy a given condition. It returns a new array containing only the elements that pass the specified test.
//                              () {}= agar ye hai to return 
const res = arr.filter( (num) => num>2 )
console.log(res);

const ans = arr.filter( (num) => {
    return num%2==0 // complusory hai
} )
console.log(ans);

// same thing using for each loop

const newArr = []
arr.forEach( (key) => {
    if (key%2!=0) {
        newArr.push(key)
    }
})

console.log(newArr);

// filter in object 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const bk=books.filter( (bk) => (bk.genre === "Science"))

  console.log(bk);


