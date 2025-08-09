const score = 40
console.log(score);

const balance = new Number(100) 
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));//noumber of decimal places u want 1 = .0,2=.45


const otherNumber = 123.94589

console.log(otherNumber.toPrecision(4))

const hundreads = 101010100
console.log(hundreads.toLocaleString('en-IN'))

//==============================Maths=========================
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,2,5,6,5));
// console.log(Math.max(4,4,6,78,2));


console.log(Math.random());
console.log(Math.random()*10+1);

console.log(Math.floor(Math.random()*10 +1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max - min +1 ))+min);

