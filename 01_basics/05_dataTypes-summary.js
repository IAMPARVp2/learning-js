// The data is divided on the basis of two categories one is that how we access the data and another is that how the data is stored in the memory

// There are two types of data types one is primitive and another is non primitive 

// 🧱 Primitive Data Types
// These are the most basic data types in JavaScript. They are immutable (cannot be changed) and are stored directly in memory.

// Non-Primitive (Reference) Data Types
// These are more complex and are stored as references in memory. They are mutable, meaning their contents can be changed.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100//number
const scoreValue = 100.3//number

const isLoggedIn = false//boolean
const outsideTemp = null//null
let userEmail;//undefined

const id = Symbol('123')//symbol
const anotherId = Symbol('123')//symbol

console.log("printing primitive");
console.log(id === anotherId);
console.log(id);
console.log(anotherId);

// const bigNumber = 3456543576654356754n  //bigInt



// Reference (Non primitive)
//3 types

// Array, Objects, Functions
console.log("printing non primitive");
const heros = ["shaktiman", "naagraj", "doga"];//arrays
let myObj = {//obj are a declared like  this in parenthesis 
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// There are two types of memories 
// one is stack memory-- (primitive)  in this copy is passed
// another is heap memory--(non primitive) in this referrence is passed\

let myyoutubename = "parvjain"

let anothername = myyoutubename

anotherName = "chaiorcode"
 
console.log(myyoutubename);
console.log(anotherName);

let userOne= 
{
    email : "me@google.com",
    upi: "jksfosiv@oksnbi"
}

let userTwo = userOne

userTwo.email= "parv@segfes/cpm"

console.log(userOne.email);
console.log(userTwo.email);