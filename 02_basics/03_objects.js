//singleton
//Object.create

//object literals

const mySym = Symbol("my key 1");

const JsUser = {
    name:"hitesh",
    age : 18,
    mySym : "key1",//it is now not used as a symbol
    [mySym] : "now its a symbol",
    "full_name" : "parv jain",
    email: "jainvwdieqwi@gffd",
    isLogged : false,
    loginDays:["monday ", "sunday"]

}


// console.log(JsUser.age);
// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser.loginDays);
// console.log(JsUser["email"]);
// console.log(JsUser.full_name);
// console.log( JsUser.mySym)
// console.log(typeof JsUser.mySym)
// console.log( JsUser[mySym])

JsUser.email =" jaINCVWVW"
// Object.freeze(JsUser)//after this changes will not be excepted

JsUser.email =" nahi hoga"
console.log( JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting);