const temperatura = require('../js/index');

describe('Testa função de Converter Temperatura', () => {
  test('verifica se o conversor de temperatura está funcionando', () => {
    const temp = 30;
    const temperaturaF = temperatura(temp);
    expect(temperaturaF).toBe(86);
  });
});
