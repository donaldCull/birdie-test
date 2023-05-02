import * as express from 'express';
import { CareRecipientController } from './controllers/CareRecipientController';
import { CareGiverController } from './controllers/CareGiverController';
import { CareEventController } from './controllers/CareEventController';

const app = express();

app.use(CareRecipientController);
app.use(CareGiverController);
app.use(CareEventController);

export default app;
