// Any dataTypes to Number
let inStr="33"
let inStrNum="331a"
let inBool=true
let inNull=null
let inUndefine=undefined
let inStrCon=Number(inStr)
let inStrNumCon=Number(inStrNum)
let inBoolCon=Number(inBool)
let inNullCon=Number(inNull)
let inUndefineCon=Number(undefined)
console.log("String only with number "+inStrCon);
console.log("String with both "+inStrNumCon);
console.log("BOOLEAN "+inBoolCon);
console.log("NULL "+inNullCon);
console.log("Undefined "+ inUndefine);

// Note koi bhi cheez convert karne se pahile chech karo 

// ==========> Operations <=============
// all same hai +,-,/,%,*,(m**n) m rase to n hai

// ye check karo
console.log("1"+2+2); //string se chalu kiya to append karega
console.log(2+2+"1");// number se kiya to add and string wala appende

//perefix and postfix
let a=10
let b=10
let c= ++a + (b++)
//      11 + 10 b++ ke bad jese he code console pe jaye ga to b increment hoga
console.log(c);