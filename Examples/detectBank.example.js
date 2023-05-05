const bankCardNumber = 6219861943564453;
const bankIBAN = "062960000000100324200001";

validateBankCard(bankCardNumber); // => true / false
validateIBAN(bankIBAN); // => true / false

detectBank(bankCardNumber); // example:   { name: "ایران زمین", first6digits: [505785], bankId: "069", icon: "iran-zamin.svg" }
detectBankByIBAN(bankIBAN); // example:   { name: "ایران زمین", first6digits: [505785], bankId: "069", icon: "iran-zamin.svg" }
