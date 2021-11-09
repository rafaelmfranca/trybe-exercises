let n = 5;

// 1) Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let output = '';

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) output += '*';
    output += '\n';
}

console.log(output);

// 2) Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let output2 = '';

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) output2 += '*';
    output2 += '\n';
}

console.log(output2);

// 3) Agora inverta o lado do triângulo. Por exemplo:

let output3 = '';

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) output3 += ' ';
    for (let k = 0; k < i; k++) output3 += '*';
    output3 += '\n';
}

console.log(output3);

// 4) Depois, faça uma pirâmide com n asteriscos de base:

let output4 = '';

for (let i = 1; i <= (n + 1) / 2; i++) {
    for (let j = 1; j <= n - i; j++) output4 += ' ';
    for (let k = 0; k < 2 * i - 1; k++) output4 += '*';
    output4 += '\n';
}

console.log(output4);

// 5) Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

n = 7;
let output5 = '';

for (let i = 1; i <= (n + 1) / 2; i++) {
    for (let j = 1; j <= n - i; j++) output5 += ' ';
    for (let k = 0; k < 2 * i - 1; k++) k === 0 || k === 2 * i - 2 || i === (n + 1) / 2 ? output5 += '*' : output5 += ' ';
    output5 += '\n';
}

console.log(output5);

// 6) Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

function isPrime(n) {
    if (n % 1 !== 0) return false;
    for (let i = 2; i < n; i++) if (n % i === 0) return false;
    return true;
}

console.log(isPrime(n))