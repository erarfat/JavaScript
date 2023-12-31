// Immediately Invoked function Expression (IIFE)
// hamari application gesehi start ho wesehi connection hojaye or global scope ke varible ki probelm se bachen ke liye

// function dbConnection(){
//     console.log("DB Connectted");
// }

// dbConnection()

// now same thing using iife

(function dbConnection(){
    console.log("DB Connectted");
})(); // ; is very imp ye invoke to hogay hai but usko rokna kha hai ye pata nahi

// ()()

//  now iifie using arrow

( () => {
    console.log("DB Connected using iife");
})();

// note vvvery imp agar aap iife use karrahe ho to 1st iffe ke baad ; do nahi to error dega 

// now using parameter

// ( () => {
//     console.log(`DB Connected by ${user}`);
// })(user) wrong mai () mai parameter nahi liya

( (user) => {
    console.log(`DB Connected by ${user}`);
})("Arfat")

