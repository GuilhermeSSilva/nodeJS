const crypto = require('crypto');
function gerarSalt(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, 16);
};

function sha512(senha, salt) {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(senha);
  hash = hash.digest('hex');
  return {
    salt,
    hash,
  };
};

function gerarSenha(senha) {
  let salt = gerarSalt(16);
  let senhaESalt = sha512(senha, salt);
  return senhaESalt;
}

module.exports = {
  gerarSalt,
  sha512,
  gerarSenha
};