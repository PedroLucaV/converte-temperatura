const bitcoin = require('../js/converteBitcoins');

describe('Testa função de Converter Bitcoin', () => {
  test('verifica se o conversor de bitcoin está correto', () => {
    const bit = 5;
    const reais = bitcoin(bit);
    expect(reais).toBe(1489967.80);
  });
});
