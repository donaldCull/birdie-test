import * as express from 'express';
import { CareRecipients } from '../services/CareRecipients';

export const CareRecipientController = express.Router();
const cr = CareRecipients();

CareRecipientController.get('/careRecipient/all', async (_req, res) => {
  try {
    const allCareRecipients = await cr.GetAllCareRecipients();
    res.status(200).json(allCareRecipients);
  } catch (error) {
    res.status(500);
  }
});

CareRecipientController.get('/careRecipient/:id', async (req, res) => {
  try {
    if (req.params.id) {
      const careRecipient = await cr.GetCareRecipient(req.params.id);
      res.status(200).json(careRecipient);
    } else {
      res.status(400).json({ Error: 'Id is not valid' });
    }
  } catch (error) {
    res.status(500);
  }
});
