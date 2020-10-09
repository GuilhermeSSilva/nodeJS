import express from 'express';
import routes from './routes.js';
import swaggerUi from 'swagger-ui-express';
const swaggerFile = './swagger_output.json';

console.log(express);

const app = express();

app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.listen(3333, () => console.log("O servidor está rodando"));
