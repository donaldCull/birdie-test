import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { CareRecipientController } from './controllers/CareRecipientController';
import { CareGiverController } from './controllers/CareGiverController';
import { CareEventController } from './controllers/CareEventController';

const app = express();

app.use(morgan('combined'));
app.use(cors());

app.get('/', (_req, res) => {
  res.status(200).json('/');
});

app.use(CareRecipientController);
app.use(CareGiverController);
app.use(CareEventController);

export default app;
