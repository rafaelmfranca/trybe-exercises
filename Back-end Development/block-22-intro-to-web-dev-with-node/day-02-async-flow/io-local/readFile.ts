const fsp = require('fs').promises;

const nomeDoArquivo2 = 'meuArquivo.txt';

fsp
  .readFile(nomeDoArquivo2, 'utf8')
  .then((data: string) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err: unknown) => {
    console.error(
      `Não foi possível ler o arquivo ${nomeDoArquivo2}\n Erro: ${err}`
    );
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });
