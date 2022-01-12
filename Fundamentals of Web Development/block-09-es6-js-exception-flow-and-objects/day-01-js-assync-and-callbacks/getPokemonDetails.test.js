// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./getPokemonDetails');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    getPokemonDetails(
      ({ name }) => name === 'Pikachu',
      (error, _) => {
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
        done();
      }
    );
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    getPokemonDetails(
      ({ name }) => name === 'Squirtle',
      (_, message) => {
        expect(message).toBe(
          'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun'
        );
        done();
      }
    );
  });
});
