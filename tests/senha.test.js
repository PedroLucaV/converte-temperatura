const confirmarSenha = require('../js/comparaSenha');

describe('Testa função de Comparar Senha', () => {
  test('confirmar se as senhas são iguais', () => {
    const senha = 'Pedro';
    const confirm = 'Pedro';
    const confirmaSenha = confirmarSenha(senha, confirm);
    expect(confirmaSenha).toBe('Sucesso ao confirmar senha!');
  });
});
