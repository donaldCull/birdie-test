import * as express from 'express';
import { CareRecipients } from '../services/CareRecipients';

export const CareRecipientController = express.Router();

CareRecipientController.get('/hello', async (_req, res): Promise<void> => {
  try {
    const cr = CareRecipients();
    const allRecipients = await cr.GetAllCareRecipients();
    res.status(200).json(allRecipients);
  } catch (error) {
    res.status(500);
  }
});
