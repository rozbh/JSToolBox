const toEnglishDigits = (number) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const converted = String(number)
    .split("")
    .map((item) => {
      const index = persianDigits.findIndex((perDigit) => perDigit === item);
      if (index === -1) return item;
      return englishDigits[index];
    })
    .join("");
  return converted;
};
