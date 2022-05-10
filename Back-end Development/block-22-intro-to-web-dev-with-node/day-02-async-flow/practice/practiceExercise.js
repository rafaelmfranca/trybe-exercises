function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number'
    ) {
      return reject(new Error('Only numbers are allowed'));
    }

    const result = (a + b) * c;

    result < 50 ? reject(new Error('Very low value')) : resolve(result);
  });
}

function generateRandomNumber() {
  return Math.round(Math.random() * 100 + 1);
}

function main() {
  const randomNumbers = Array.from({ length: 3 }, () => generateRandomNumber());

  doMath(...randomNumbers)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}

main();
