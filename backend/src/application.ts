import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import helmet from "helmet";
import RateLimit from 'express-rate-limit';
import { CareRecipientController } from './controllers/CareRecipientController';
import { CareGiverController } from './controllers/CareGiverController';
import { CareEventController } from './controllers/CareEventController';
import { corsOrigin, nodeEnv } from './db/variables';

const app = express();
const loggingMode = nodeEnv === 'development' ? 'dev' : 'common';

app.disable('x-powered-by');
app.use(helmet());
app.use(morgan(loggingMode));
app.use(cors({
  origin: corsOrigin,
  optionsSuccessStatus: 200,
}));

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

app.get('/', (_req, res) => {
  res.status(200).json('/');
});

app.get('ping', (_req, res) => {
  res.status(200).json({ response: 'pong' });
});

app.use(CareRecipientController);
app.use(CareGiverController);
app.use(CareEventController);

export default app;
