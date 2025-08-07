let a = 10
const b = 20
var c = 30
var d = 60//thtas why we should avooid writing var
if (true){

    let a = 100
    const b = 200
    var c = 30
 
    
// console.log("Inner: ",a);
// console.log(b);
// console.log(c);
// console.log(d);// this is printing the value od which is not in the scope
//d is out of scope


}

// console.log("outer: ",a);

// console.log(b);
// console.log(c);
// console.log(d);




function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){
    return num + 2
}