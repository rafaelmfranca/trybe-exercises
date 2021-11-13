let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let num of numbers) console.log(num);

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let num of numbers) soma += num;
console.log(soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

console.log(soma / numbers.length - 1);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

soma / numbers.length - 1 >= 20 ? console.log('Valor maior que 20.') : console.log('Valor menor ou igual a 20.')

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;
for (let num of numbers) if (num > maiorValor) maiorValor = num;
console.log(maiorValor);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let odd = 0;
for (let num of numbers) if (num % 2 !== 0) odd++;
odd ? console.log(odd) : console.log('Nenhum valor impar encontrado.');

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];
for (let num of numbers) if (menorValor > num) menorValor = num
console.log(menorValor)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];
for (let i = 1; i <= 25; i++) array.push(i);
console.log(array)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . 

for (let i = 0; i < array.length; i++) console.log(array[i] / 2);

// BÔNUS : Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
// 1) Ordene o array numbers em ordem crescente e imprima seus valores;

for (let index = 1; index < numbers.length; index++)
    for (let secondIndex = 0; secondIndex < index; secondIndex++)
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }

console.log(numbers)

// 2) Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let index = 1; index < numbers.length; index++)
    for (let secondIndex = 0; secondIndex < index; secondIndex++)
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }

console.log(numbers)

// 3) Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i < numbers2.length; i++)
    i !== numbers2.length - 1 ? newNumbers.push(numbers2[i] * numbers2[i + 1]) : newNumbers.push(numbers2[i] * 2);

console.log(newNumbers);