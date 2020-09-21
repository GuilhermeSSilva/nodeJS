import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/cidade', async (req, res) => {
  const {
    nome,
    estado
  } = req.body;

  const insereCidade = await db('cidade').insert({
    nome,
    estado
  })
    .then(() => console.log("cidade incluída com sucesso")
    )
    .catch(() => console.log("A cidade não pode ser inserida"));

  res.send();
});

routes.post('/usuario', async (req, res) => {

  const {
    nome,
    sexo,
    data_de_nascimento,
    idade,
    cidade
  } = req.body;

  const insereUsuario = await db('usuario').insert({
    nome,
    sexo,
    data_de_nascimento,
    idade,
    cidade
  })
    .then(() => console.log("Usuário inserido com sucesso!"))
    .catch(() => console.log("Não foi possível inserir o usuário"));

  res.send();
});

routes.get('/cidade', async (req, res) => {
  let buscaCidade = "";
  if (req.query.nomeCidade) {
    const nomeCidade = req.query.nomeCidade;
    buscaCidade = await db('cidade').select('*').where('cidade.nome', '=', nomeCidade);
  }
  else if (req.query.nomeEstado) {
    const nomeEstado = req.query.nomeEstado;
    buscaCidade = await db('cidade').select('*').where('cidade.estado', '=', nomeEstado);
  } else {
    buscaCidade = res.status(400).send("Tente passar uma informação como nomeCidade ou nomeEstado");
  }


  console.log(buscaCidade);
  res.json(buscaCidade);
});

routes.get('/usuario', async (req, res) => {
  let buscaUsuario;
  const nomeUsuario = req.query.nomeUsuario;
  const idUsuario = req.query.id;
  if (nomeUsuario) {
    buscaUsuario = await db('usuario').select('*').where('usuario.nome', '=', nomeUsuario);
  } else if (idUsuario) {
    buscaUsuario = await db('usuario').select('*').where('usuario.id', '=', idUsuario);
  }
  else {
    buscaUsuario = res.status(400).send("Tente passar alguma informação como nomeUsuario ou id por exemplo");
  }

  res.send(buscaUsuario);
});

routes.delete('/usuario', async (req, res) => {
  const idUsuario = req.query.id;
  let deletaUsuario;
  if (idUsuario) {
    deletaUsuario = await db('usuario').delete('*').where('usuario.id', '=', idUsuario);
  } else {
    deletaUsuario = res.status(400).send('Tente preencher o campo id para deletar o usuário');
  }
  res.send(deletaUsuario);
});

export default routes;