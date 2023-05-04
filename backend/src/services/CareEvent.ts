import { birdieDB } from '../db/BirdieDB';
import { CareEventModel } from '../model/CareEventModel';

export interface CareEventInterface {
  GetCareEventVisit: (visitId: string) => Promise<CareEventModel[]>;
  GetCareEventsByCareGiver: (careGiverId: string) => Promise<CareEventModel[]>;
  GetCareEventsByCareRecipient: (
    careRecipientId: string
  ) => Promise<CareEventModel[]>;
}

export const CareEvent = (): CareEventInterface => {
  return {
    GetCareEventVisit: (visitId: string): Promise<CareEventModel[]> => {
      return birdieDB
        .raw('select * from events where visit_id = ?', [visitId])
        .then((rows) => {
          return rows[0];
        });
    },
    GetCareEventsByCareGiver: (
      careGiverId: string
    ): Promise<CareEventModel[]> => {
      return birdieDB
        .raw('select * from events where caregiver_id = ?', [careGiverId])
        .then((rows) => {
          return rows[0];
        });
    },
    GetCareEventsByCareRecipient: (
      careRecipientId: string
    ): Promise<CareEventModel[]> => {
      return birdieDB
        .raw('select * from events where care_recipient_id = ?', [
          careRecipientId,
        ])
        .then((rows) => {
          return rows[0];
        });
    },
  };
};
