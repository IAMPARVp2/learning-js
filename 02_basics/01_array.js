// array

const myArr =[0,1,2,3,4,5,6, true];//after 7 index its undefined
const myHeros=["shktiman", "hanuman"]
const myHeros2=new Array(1,34,53,34)

// console.log(myArr);
// console.log(myArr[7]);

// console.log(myHeros[1]);
// console.log(myHeros2[1]);
myArr.push(45)
myArr.push(768)
// console.log("ARRAY AFTER PUSHING" + myArr);
myArr.pop()
// console.log("ARRAY AFTER POP" + myArr);


myArr.unshift(7);
// console.log("ARRAY AFTER USING UNSHIFT" + myArr);
myArr.shift();
// console.log("ARRAY AFTER USING SHIFT" + myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr)

//slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)

console.log("c", myArr);
console.log(myn2);



// the key difference between slice and splice in JavaScript is that 
// slice copies a portion of an array without modifying the original array, 
// while splice modifies the original array by adding or removing elements.

// slice()
// Non-destructive: It doesn't change the original array.
// Returns: A new array containing the extracted elements.
// Purpose: To extract a portion of an array or create a shallow copy of an array.
// Syntax: array.slice(startIndex, endIndex)
// startIndex: The index where the extraction begins (inclusive).
// endIndex: The index where the extraction ends (exclusive). If omitted, it extracts to the end of the array.

// Example:

// JavaScript
// const fruits = ['apple', 'banana', 'mango', 'orange'];
// const citrusFruits = fruits.slice(2, 4); // Extracts elements from index 2 up to (but not including) index 4
// console.log(citrusFruits); // Output: ['mango', 'orange']
// console.log(fruits);       // Output: ['apple', 'banana', 'mango', 'orange'] (original array is unchanged)



// splice()
// Destructive: It modifies the original array.
// Returns: An array of the removed elements.
// Purpose: To add, remove, or replace elements directly within an array
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the startIndex.
// item1, item2, ...: The elements to add to the array, starting at the startIndex.

// Example (Removing and Adding):
// JavaScript
// const fruits = ['apple', 'banana', 'mango', 'orange'];
// const removed = fruits.splice(1, 2, 'grape', 'kiwi'); // Removes 2 elements starting at index 1 and adds 'grape' and 'kiwi'
// console.log(removed); // Output: ['banana', 'mango'] (the removed elements)
// console.log(fruits);  // Output: ['apple', 'grape', 'kiwi', 'orange'] (the original array is modifie