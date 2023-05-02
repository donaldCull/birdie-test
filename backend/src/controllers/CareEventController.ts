import * as express from 'express';
import { CareEvent } from '../services/CareEvent';

export const CareEventController = express.Router();
const ce = CareEvent();

CareEventController.get('/careEvent/visit/:visitId', async (req, res) => {
  try {
    if (req.params.visitId) {
      const careEvent = await ce.GetCareEventVisit(req.params.visitId);
      res.status(200).json(careEvent);
    }
  } catch (error) {
    res.status(500);
  }
});

CareEventController.get(
  '/careEvent/careGiver/:careGiverId',
  async (req, res) => {
    try {
      if (req.params.careGiverId) {
        const careEvent = await ce.GetCareEventsByCareGiver(
          req.params.careGiverId
        );
        res.status(200).json(careEvent);
      }
    } catch (error) {
      res.status(500);
    }
  }
);

CareEventController.get(
  '/careEvent/careRecipient/:careRecipientId',
  async (req, res) => {
    try {
      if (req.params.careRecipientId) {
        const careEvent = await ce.GetCareEventsByCareRecipient(
          req.params.careRecipientId
        );
        res.status(200).json(careEvent);
      }
    } catch (error) {
      res.status(500);
    }
  }
);
