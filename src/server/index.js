import express from 'express';
import bodyParser from 'body-parser';
import bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: 'node-express-app' });

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(express.static('dist'));
app.use('/assets', express.static('assets'));

app.listen(port, '0.0.0.0', () => logger.info(`App Skeleton is listening on ${port}!`));
