const fs = require('fs');

const nomeDoArquivo = 'meuArquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err: any) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
