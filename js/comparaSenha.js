function comparaSenhas(senha, confirmaSenha) {
  if (senha === confirmaSenha) {
    return 'Sucesso ao confirmar senha!';
  }
  return 'As senhas estão diferentes!';
}

module.exports = comparaSenhas;
