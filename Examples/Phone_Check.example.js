const phone_check = require('../Module/phone_check/phone_check')

let phone1 = new phone_check(09211234567)
// Get phone operator (This will be Rightel)
console.log(phone1.get_operator());
// Get phone operator location (This Will be global or (سراسری) because rightel is not location based)
console.log(phone1.get_location());


console.log("***************");


let phone2 = new phone_check(09180123456)
// Get phone operator (This will be Rightel)
console.log(phone2.get_operator());
// Get phone operator location (This Will be global or (سراسری) because rightel is not location based)
console.log(phone2.get_location());


console.log("*******Persian output in terminal or bash etc... will be damaged!********");