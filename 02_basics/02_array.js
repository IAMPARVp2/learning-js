const marvel_heros = ["thor","IronMAN", "spiderman"]
const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros =marvel_heros.concat(dc_heros)
console.log(all_heros); 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//both concat and ... do the same work gives the same output

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"}))//interseting for interview, as it gives empty array, reason is that it doesnt know about...that we are asking for key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

