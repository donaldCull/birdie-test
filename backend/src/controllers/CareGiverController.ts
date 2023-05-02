import * as express from 'express';
import { CareGiver } from '../services/CareGiver';

export const CareGiverController = express.Router();
const cg = CareGiver();

CareGiverController.get('/careGiver/all', async (_req, res) => {
  try {
    const allCareRecipients = await cg.GetAllCareGivers();
    res.status(200).json(allCareRecipients);
  } catch (error) {
    res.status(500);
  }
});

CareGiverController.get('/careGiver/:id', async (req, res) => {
  try {
    if (req.params.id) {
      const careRecipient = await cg.GetCareGiver(req.params.id);
      res.status(200).json(careRecipient);
    } else {
      res.status(400).json({ Error: 'Id is not valid' });
    }
  } catch (error) {
    res.status(500);
  }
});
