const accountId=144553
let accEmail="asmi@gmail.com"
var accPass="12345"
accCity="kolkata"
let accState;

// accountId=23 //not allowed
accEmail="rini@gmail.com"
accPass="4567"
accCity="Jaipur"

console.log(accountId)

/*
console.log(accEmail)
console.log(accPass)
console.log(accCity)
*/

console.table([accountId,accEmail,accPass,accCity,accState]);

/*
let is used for declaring variable
prefer not to use var
beacuse of issue in block scope and functional scope
*/