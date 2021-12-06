const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNightTurn = (obj, key, value) => obj[key] = value;
addNightTurn(lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectKeys = (obj) => Object.keys(obj).join(', ');
console.log(listObjectKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.
const sizeOfObject = (obj) => Object.keys(obj).length;
console.log(sizeOfObject(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectValues = (obj) => Object.values(obj).join(', ');
console.log(listObjectValues(lesson3));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberOfStudents = (obj) => Object.keys(obj).map((key) => obj[key].numeroEstudantes).reduce((a, b) => a + b);
console.log(numberOfStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, index) => Object.values(obj)[index];
console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (obj, key, value) => Object.keys(obj).includes(key) && obj[key] === value;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Bônus
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const numberOfMathStudents = (obj) => Object.keys(obj).filter((key) => obj[key].materia === 'Matemática').map((key) => obj[key].numeroEstudantes).reduce((a, b) => a + b);
console.log(numberOfMathStudents(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (obj, teatcher) => {
  const newObj = {
    professor: teatcher,
    aulas: [],
    estudantes: 0
  };
  Object.keys(obj).filter((key) => obj[key].professor === teatcher).forEach((key) => {
    newObj.aulas.push(obj[key].materia);
    newObj.estudantes += obj[key].numeroEstudantes;
  });
  return newObj;
}

console.log(createReport(allLessons, 'Maria Clara'));