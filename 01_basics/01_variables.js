// curley braces{} this is the scope in java script

const accountId = 122324 // const - not changeable
let accountEmail = "jainv1071@gmail.com" 
var accountPassword = "1222342345"    
/*
prefer not to use var because
of the issue in the block scope and functional scope
*/
accountCity = "Jaipur"// prefer not to use this method for declaring variable

// accountId = 2 // not allowed
let accountState
accountEmail ="hc@hc.com"
accountPassword = "21342351"
accountCity ="benguluru"

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])