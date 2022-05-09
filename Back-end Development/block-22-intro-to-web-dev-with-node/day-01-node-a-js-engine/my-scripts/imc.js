var getIMC = function (weight, height) {
    return weight / Math.pow(height, 2);
};
console.log(getIMC(81, 1.7));
