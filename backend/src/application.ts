import * as express from 'express';
import { CareRecipientController } from './controllers/CareRecipientController';

const app = express();

app.use(CareRecipientController);

export default app;
