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
    .then(() => res.status(200).send('cidade incluída com sucesso'))
    .catch(() => res.status(400).send('A cidade não pode ser inserida'));
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
    .then(() => res.status(200).send('Usuário inserido com sucesso!'))
    .catch(() => res.status(400).send('Não foi possível inserir o usuário'));

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
    deletaUsuario = await db('usuario').delete('*').where('usuario.id', '=', idUsuario)
      .then(response => {
        res.send('Usuário excluido com sucesso!');
      })
      .catch(response => {
        res.status(200).send('Não foi possível exlcuir o usuário');
      });
  } else {
    deletaUsuario = res.status(400).send('Tente preencher o campo id para deletar o usuário');
  }
  res.send(deletaUsuario);
});

routes.patch('/usuario', async (req, res) => {
  const idUsuario = req.query.id;
  const nomeUsario = req.query.nome;
  if (idUsuario && nomeUsario) {
    alteraNomeUsuario = await db('usuario').update('nome', `${nomeUsario}`).where('usuario.id', '=', idUsuario)
      .then(() => res.status(200).send('Nome editado com sucesso!'))
      .catch(() => res.status(400).send("Não foi possível editar o nome do usuário"));
  } else {
    res.status(400).send('Preencha o id e nome do usuário corretamente');
  }
});

export default routes;