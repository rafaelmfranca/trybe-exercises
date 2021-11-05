const a = 50;
const b = 50;
const c = 10;

/* 1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: */

const adicao = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;
const modulo = (a, b) => a % b;
console.log(adicao(a, b), subtracao(a, b), multiplicacao(a, b), divisao(a, b), modulo(a, b))

/* 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

const maiorDeDois = (a, b) => a > b ? a : b;
console.log(maiorDeDois(a, b))

/* 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const maiorDeTres = (a, b, c) => Math.max(a, b, c);
console.log(maiorDeTres(a, b, c))

/* 4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

function trueOrFalse(a) {
    if (a > 0) return 'positive';
    else if (a < 0) return 'negative';
    else return 'zero';
}
console.log(trueOrFalse(a))

/* 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

function isValidTriangle(a, b, c) {
    if ((a && b && c) > 0) {
        if ((a + b + c) === 180) return true;
        else return false;
    } else return 'Erro! Ângulo inválido';
}
console.log(isValidTriangle(a, b, c))

/* 6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

const peca = 'BIsPo';

function movimentoXadrez(peca) {
    let movimento = '';
    const pecaLowerCase = peca.toLowerCase();

    switch (pecaLowerCase) {
        case 'rei':
            movimento = 'move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.';
            break;
        case 'rainha':
            movimento = 'é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor.';
            break;
        case 'cavalo':
            movimento = 'movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.';
            break;
        case 'torre':
            movimento = 'movimenta-se em direção reta pelas colunas ou fileiras.';
            break;
        case 'peao':
            movimento = 'movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.';
            break;
        case 'bispo':
            movimento = 'movimenta-se na diagonal, quantas casas desejar.';
            break;
        default:
            movimento = 'Erro!';
            break;
    }

    return movimento;
}
console.log(movimentoXadrez(peca))

/* 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: */

function conceitoNota(a) {
    let conceito = '';

    switch (true) {
        case a < 0 || a > 100:
            conceito = 'Erro!'
            break;
        case a >= 90:
            conceito = 'A';
            break;
        case a >= 80:
            conceito = 'B';
            break;
        case a >= 70:
            conceito = 'C';
            break;
        case a >= 60:
            conceito = 'D';
            break;
        case a >= 50:
            conceito = 'E';
            break;
        case a < 50:
            conceito = 'F';
            break;
    }

    return conceito;
}
console.log(conceitoNota(a))

/* 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . */

const isEven = (a, b, c) => a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ? true : false;
console.log(isEven(a, b, c))

/* 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
 */

const isOdd = (a, b, c) => a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0 ? true : false;
console.log(isOdd(a, b, c))

/* 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. */

const custoProduto = 10;
const valorDeVenda = 25;

function lucroLiquido(custoProduto, valorDeVenda) {
    const custoTotal = custoProduto * 1.2;
    return (valorDeVenda - custoTotal) * 1000
}
console.log(lucroLiquido(custoProduto, valorDeVenda))

/* 11) Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

const salarioBruto = 3892.37;

function salarioLiquido(salarioBruto) {
    let aliqINSS = 0;
    let aliqIR = 0;

    if (salarioBruto <= 1556.94)
        aliqINSS = salarioBruto * 0.08;
    else if (salarioBruto <= 2594.92)
        aliqINSS = salarioBruto * 0.09;
    else if (salarioBruto <= 5189.82)
        aliqINSS = salarioBruto * 0.11;
    else
        aliqINSS = 570.88;

    const salarioBase = salarioBruto - aliqINSS;

    if (salarioBase <= 1903.98)
        aliqIR = 0;
    else if (salarioBase <= 2826.65)
        aliqIR = (salarioBase * 0.075) - 142.80;
    else if (salarioBase <= 3751.05)
        aliqIR = (salarioBase * 0.15) - 354.80;
    else if (salarioBase <= 4664.68)
        aliqIR = (salarioBase * 0.225) - 636.13;
    else
        aliqIR = (salarioBase * 0.275) - 869.36;

    return salarioBase - aliqIR;
}
console.log(salarioLiquido(salarioBruto))