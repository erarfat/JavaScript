// ===> how to handel multiple parameter 
// suppose shopping cart hai usme apne ko pata nahi kitne product aye ga 

// note ... are rest operator and spread operator

function calculateCartPrice1(num1){
    return num1
}
 
const totalPrice = calculateCartPrice1(100,200,300)//three item in cart

console.log(totalPrice);// op 100

function calculateCartPrice2(... num1){
    return num1
}
//... num1 array dega [ 10, 20, 30 ]


console.log(calculateCartPrice2(10,20,30))
// return array

// function with two paramereter and rest operator interview topic

function calculateCartPrice3(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice3(10,20,30,40,50));
// op [ 30, 40, 50 ] 0, 1 th value val1 and val2 lega



