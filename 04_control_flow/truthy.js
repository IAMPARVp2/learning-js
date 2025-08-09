const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator
 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




//theory

// The Nullish Coalescing Operator (??) is used to provide a default value when a variable is null or undefined. It's a way of saying, "If this value is null or undefined, use this other value instead."

// Layman's Explanation
// Think of it like a safety net for your variables. Imagine you're building a website and you want to display a user's name.

// You have a variable for the user's name:

// let userName = userData.name;

// What if userData.name doesn't exist? The variable userName would be undefined, and your website might display a blank space or an error.

// With the ?? operator, you can set a default value:

// let userName = userData.name ?? "Guest";

// This code reads as: "Set userName to userData.name. But if userData.name is null or undefined, then use "Guest" instead."

// This is useful because it allows you to handle these specific "missing" values gracefully without the need for a longer if-else statement. It only cares about null and undefined, making it more precise than the || (OR) operator, which would also treat 0, "" (an empty string), and false as "missing" values.