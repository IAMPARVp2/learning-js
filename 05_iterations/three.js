// for of

// [{},{},{}]
// ["","",""]

// const arr = [1, 2, 3, 4, 5, 6]

// for (const i of arr) {
//     console.log(i);   
// }

// const greetings = "hello world"

// for (const i of greetings) {
//     console.log(`each char is ${i}`);
// }

//maps => stores in key value pairs and alwys stores unique values

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")


console.log("printing the map"); 
for (const key of map) {
    //console.log("printing the map"); 
    console.log(key); 
}

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);  
}


const myObject ={ 
    game1 : 'nfs',
    game2 : 'gta'
}

// so its not woking for objects shows myObject is not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  
// }




//checking forin loop fro printing the map

// for (const key in map) {
//     console.log(`${key} is for ${map[key]}`);  
// }  

//so by checking we got to know that we are not getting any error but also its not printing as well so we cant use forin loop for printing map