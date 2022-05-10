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

// Example with async/await (ES7)
(async () => {
  try {
    const result = await doMath(1, 2, 3);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();

// Example with then/catch (ES6)
doMath(1, 2, 50)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
