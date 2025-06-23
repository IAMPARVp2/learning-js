
console.log("basic conversion")
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


// we should avoid all the below types of comparizons
console.log("comparing different types")
console.log("2" > 1); 
console.log("02" > 1);
//==========================================

console.log("comparing the null values")
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equality check and comparisons work differently 
// comparisons convert null to a number, treating at a 0 
// that's why null >= 0 is true and null > 0 is false.

//same case for undefined

console.log("comparing the undefined values")
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//=============================================

// ===
// it is a different type of equaltity check which ALSO COMPARES THE TYPES INSTED OF NUMBERS
console.log("2" === 2);