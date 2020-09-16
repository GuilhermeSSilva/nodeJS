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

  const nome = req.query.nome as string;

  const buscaCidade = await db('cidade').select('*').where('cidade.nome', '=', nome);
  console.log(buscaCidade);
  res.json(buscaCidade);
});

export default routes;