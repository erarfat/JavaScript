
// falsy value

//false , 0, BigInt 0n, undefined, null, NaN , ""(empty string)

// truthy

//"0", " ", [], {}, function()

// Nullish coalescing Operator (??): null , undefined

let val;

val = 5 ?? 10

console.log(val);

val1 = null ?? 10

console.log( val1);

val2 = null ?? 10 ?? 20 // ?? ke baad first valid  value lega

console.log(val2);

val4 = undefined ?? null ?? 100
console.log(val4);

// note above same hai null and undefined ke liye

