import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/cidade', async (req, res) => {
  const {
    id,
    nome
  } = req.body;
  const fetch = require('node-fetch');
  const estado = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${nome}`)
    .then((res: any) => res.json())
    .then((json: any) => json.UF.nome);

  console.log(estado);
  // await db('cidade').insert({
  //   id,
  //   nome,
  //   estado
  // });

  res.send();
});

export default routes;