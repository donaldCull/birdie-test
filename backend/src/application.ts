import * as express from 'express';
import { CareRecipientController } from './controllers/ping';

const app = express();

app.use(CareRecipientController);

export default app;
