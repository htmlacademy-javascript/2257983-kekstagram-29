// Проверка длины строки
const testLenght = function (stringLenght, maxSymbol) {
  if (stringLenght <= maxSymbol) {
    return true;
  }
  return false;
};

testLenght(10, 20);

// Проверка на палиндром
const checkPalindrome = function (palindrome) {
  const textClean = palindrome.toLowerCase().replaceAll(' ', '');

  const lastIndex = textClean.length - 1;
  for (let i = 0; i <= textClean.length / 2; i++) {
    if (textClean[i] === textClean[lastIndex - i]) {
      return true;
    }
    return false;
  }
};

checkPalindrome ('ТеСт На ПаЛиНдРоМ');
