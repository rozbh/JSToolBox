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
