// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dica:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

const roman = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
};

function romanToDecimal(str) {
    arrStr = str.split('');
    let output = 0;

    for (let i = 0; i < arrStr.length; i++) {
        curr = roman[arrStr[i]];
        next = roman[arrStr[i + 1]];

        curr < next ? output -= curr : output += curr;
    }

    return output;
};

console.log(romanToDecimal('IX'));

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// using for loops
function arrayOfNumbers(vector) {
    let evenArr = [];
    for (const arrNumber of vector) for (const number of arrNumber) if (number % 2 === 0) evenArr.push(number);
    return evenArr;
};
console.log(arrayOfNumbers(vector));

// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

let amountOfFruits = {};
basket.forEach((fruit) => amountOfFruits[fruit] ? amountOfFruits[fruit]++ : amountOfFruits[fruit] = 1);

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates..
// I looked at the template to see the output pattern that wasn't clear
let output = [];
for (const fruit in amountOfFruits) {
    let pattern = `${amountOfFruits[fruit]} ${fruit}`;
    if (amountOfFruits[fruit] > 1) pattern += 's';
    output.push(pattern);
}
console.log(`Sua cesta possui: ${output.join(', ')}.`);

// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
    blocoUm: [
        {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
        },
        {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
        },
    ],
    blocoDois: [
        {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
        },
        {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
        },
    ],
};

// 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

let morador = moradores.blocoDois[1];
console.log(`O morador do bloco 2 de nome ${morador.nome} ${morador.sobrenome} mora no ${morador.andar}º andar, apartamento ${morador.apartamento}.`);

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

for (const morador in moradores.blocoUm) console.log(`${moradores.blocoUm[morador].nome} ${moradores.blocoUm[morador].sobrenome}`);

for (const morador in moradores.blocoDois) console.log(`${moradores.blocoDois[morador].nome} ${moradores.blocoDois[morador].sobrenome}`);