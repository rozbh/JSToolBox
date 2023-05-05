export const validateBankCard = (cardNumber) => {
  if (!cardNumber) return true;
  const stringCardNumber = String(cardNumber);
  if (stringCardNumber.length !== 16) return "شماره کارت باید ۱۶ رقم باشد";
  let sum = 0;
  for (let i = 0; i < stringCardNumber.length; i++) {
    const number = stringCardNumber[i];
    let mult;
    if ((i + 1) % 2 === 0) mult = Number(number) * 1;
    else mult = Number(number) * 2;

    if (mult > 9) sum += mult - 9;
    else sum += mult;
  }
  if (sum % 10 === 0) return true;
  return "شماره کارت معتبر نمیباشد";
};

export const detectBank = (cardNumber) => {
  if (!cardNumber) return false;
  const bank = bankList.find((item) => {
    if (cardNumber.length === 6 && Number(cardNumber) === Number(item.first6digits)) return item;
    if (cardNumber.length > 6 && Number(cardNumber.slice(0, 6)) === Number(item.first6digits)) return item;
    return false;
  });
  return bank;
};

export const validateIBAN = (IBANNumber) => {
  if (!IBANNumber) return true;
  const stringIBANNumber = String(IBANNumber);
  if (stringIBANNumber.length !== 24) return "شماره شبا باید ۲۶ رقم باشد";
  const validateNumber = BigInt(`${stringIBANNumber.slice(2)}1827${stringIBANNumber.slice(0, 2)}`);
  if (validateNumber % BigInt(97) === BigInt(1)) return true;

  return "شماره شبا معتبر نمیباشد";
};

export const detectBankByIBAN = (IBAN) => {
  if (!IBAN) return false;
  const bankId = IBAN.slice(2, 5);
  const bank = bankList.find((item) => {
    if (bankId === item.bankId) return item;
    return false;
  });
  return bank;
};
