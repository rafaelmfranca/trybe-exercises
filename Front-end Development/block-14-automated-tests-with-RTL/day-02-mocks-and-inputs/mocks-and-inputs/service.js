function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function stringToUpperCase(str) {
  return str.toUpperCase();
}

function firstLetterOfString(str) {
  return str.charAt(0);
}

function concatStrings(str1, str2) {
  return str1.concat(str2);
}

module.exports = {
  generateRandomNumber,
  stringToUpperCase,
  firstLetterOfString,
  concatStrings,
};
