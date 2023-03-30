const getStringLength = (string, num) => {
  if (string.length >= num) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
};

getStringLength ('значение по умолчанию.', 20);

const getNumber = (string) => {
  const newString = string.replace(/\D/g,'');
  console.log(newString);
};

getNumber('124jg45ioh67');

function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const newString = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[newString - i]) {
      console.log('Это не палиндром');
      return false;
    }
    console.log('Это палиндром');
    return true;
  }
}

isPalindrome('dog God');

function addString (str, count, addRow) {
  let strModify = str;
  const difference = count - str.length;
  const notEnoughLength = count - str.length - addRow.length;
  if (difference > 0) {
    strModify = addRow.slice(0, difference) + str;
    for (let i = 0; i < notEnoughLength; i++) {
      strModify = addRow[0] + strModify;
    }
  }
  return strModify;
}

console.log(addString('о00', 6, '$'));

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
export {getRandomInteger};


