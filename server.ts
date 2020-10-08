import express from 'express';
import routes from './routes';
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const app = express();

app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.listen(3333, () => {
  console.log("O servidor está rodando");
});
