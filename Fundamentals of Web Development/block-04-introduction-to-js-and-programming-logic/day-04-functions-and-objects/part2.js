// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

const isPalindrome = (str) => str.split('').reverse().join('') === str ? true : false;
console.log(isPalindrome('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

const highestValue = (arr) => arr.reduce((a, b) => a > b ? a : b);
//or
const highestValue2 = (arr) => Math.max(...arr);
console.log(highestValue2([2, 3, 6, 7, 10, 1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

const lowerValue = (arr) => arr.reduce((a, b) => a < b ? a : b);
//or
const lowerValue2 = (arr) => Math.min(...arr);
console.log(lowerValue2([2, 3, 6, 7, 10, 1]))

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

const biggestName = (names) => names.reduce((a, b) => a.length > b.length ? a : b);
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function mostRepeated(numbers) {
    let obj = {};
    numbers.forEach((number) => obj[number] ? obj[number]++ : obj[number] = 1);
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}
console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function numSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) sum += i;
    return sum;
};
//or (After read about Gauss)
const numSum2 = (n) => n * (n + 1) / 2;
console.log(numSum2(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

const checkEndWord = (word, ending) => word.endsWith(ending);
console.log(checkEndWord('trybe', 'be'));
console.log(checkEndWord('joaofernando', 'fernan'));

