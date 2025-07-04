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
