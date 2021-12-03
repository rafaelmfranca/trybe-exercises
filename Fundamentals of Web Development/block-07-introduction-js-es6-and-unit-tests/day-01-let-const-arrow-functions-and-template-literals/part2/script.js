/* Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */

const factorial = (n) => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(5));

/* Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = (str) => {
    let longest = '';
    str.split(' ').forEach((word) => { if (word.length > longest.length) longest = word; });
    return longest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/* Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

const button = document.querySelector('#click');
const span = document.querySelector('#count');
button.addEventListener('click', () => { span.innerText = +span.innerText + 1; });

/* Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!" */

const function1 = (string) => {
    let str = 'Tryber x aqui!';
    return str.replace(/x/g, string);
}
const result = function1('Rafael');
console.log(result);

const arr = ['JavaScript' , 'HTML' , 'CSS' , 'Git', 'ES6'];
const function2 = (string) => {
    return `${result} Minhas cinco principais habilidades são:
    ${arr[0]};
    ${arr[1]};
    ${arr[2]};
    ${arr[3]};
    ${arr[4]};
    #goTrybe 
    `
}
console.log(function2(result));


