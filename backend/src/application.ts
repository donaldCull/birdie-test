import * as express from 'express';
import { CareRecipientController } from './controllers/CareRecipientController';
import { CareGiverController } from './controllers/CareGiverController';

const app = express();

app.use(CareRecipientController);
app.use(CareGiverController);

export default app;
