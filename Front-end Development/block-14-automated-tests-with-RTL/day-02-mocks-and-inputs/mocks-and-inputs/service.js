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

async function fetchDogPictures() {
  try {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (err) {
    return err;
  }
}

module.exports = {
  generateRandomNumber,
  stringToUpperCase,
  firstLetterOfString,
  concatStrings,
  fetchDogPictures,
};
