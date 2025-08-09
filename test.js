// // console.log("parv");

// // console.log(Math.floor(Math.random()* (max - min +1 ))+min);
// //function declaration
// function entername(uname ) {
//     return`${uname} hello`
// }
// //function execution
// entername("parv");//it will not print any thing
// console.log(entername("parv"));//but this will give the out put



// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
} 

user.welcomeMessage(); // This will now print "hitesh , welcome to website"