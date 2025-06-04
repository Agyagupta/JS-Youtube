const accountId = 144553
let accountEmail = "agyaa@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"     /* js is safe so it consider this type of variable dec. but this is wrong way so plz do not use!! */
let accountState;   /* it gives undefined as an output */

// accountId = 2 // not allowed

accountEmail = "krish@ag.com"
accountPassword = "456789"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functinal scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
