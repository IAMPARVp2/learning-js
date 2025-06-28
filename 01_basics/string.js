const name = "parv" //declaring the string
const repoCount =50;

console.log(name + repoCount + "value"); //its out dated not mordern we should not use them


//new and prefered syntax
//use backticks- here we use string interpolation
// and we make placeholders here in which we inject the variables directly

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//second method to declare the string is given below

// const gameName = new String ("parv-jain")
const gameName = new String ("parv-jain");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4);//last value is not included while printing the subString only 0123 indices included
console.log(newString);

const anotherString = gameName.slice(-8, 3);

console.log(gameName);
console.log(anotherString);

const newStringOne ="   parvv   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://parvjnaini.com%20smbhjbfhs";

console.log(url.replace('%20','-'));
console.log(url.includes('parv'));
console.log(url.includes('jain'));
console.log(gameName.split('-'));


