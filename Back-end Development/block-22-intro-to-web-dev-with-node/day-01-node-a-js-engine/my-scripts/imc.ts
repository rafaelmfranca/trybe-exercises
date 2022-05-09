const getIMC = (weight: number, height: number) => {
  return weight / Math.pow(height, 2);
};

console.log(getIMC(81, 1.7));
