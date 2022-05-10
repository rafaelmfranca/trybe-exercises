const fs2 = require('fs').promises;

(async () => {
  try {
    await fs2.writeFile('./meuArquivo.txt', 'Lorem ipsum dolor');
    console.log('Arquivo escrito com sucesso!');
  } catch (err: any) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
})();
