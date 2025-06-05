// ----primitive datatype----

// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100     // datatype => number
const scoreValue = 100.3   // number

const isLoggedIn = false     // boolean
const outsideTemp = null     // object
let userEmail;      // undefined

const id = Symbol('123')  // return value is datatype "symbol"
const anotherId = Symbol('123')

console.log(id == anotherId);  // false


const bigNumber = 345566776736767347647n     // bigint

// Reference type (Non-Primitive)  // all non-primitive datatypes returns typs is object

// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"]

let myObj = {
    name: "Agya",
    age: 22
}

const myFunction = function(){              // its return datatype as Function but its a actually a  object function!!
    console.log("Hello world");
    
}

// console.log(typeof bigNumber);
console.log(typeof heros);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Stack memory (primitive - here we got a copy of a value from a memory), Heap memory(non-primitive - here we got a refernce of original value)


let myYoutubeName = "hiteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName);   // hiteshchoudharydotcom
console.log(anothername);    //chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Agya@google.com"

console.log(userOne.email);    // Agya@google.com
console.log(userTwo.email);    // Agya@google.com




