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
  const db = birdieDB({ e: 'events' });
  return {
    GetCareEventVisit: (visitId: string): Promise<CareEventModel[]> => {
      return db.select<CareEventModel[]>().where({ visit_id: visitId });
    },
    GetCareEventsByCareGiver: (
      careGiverId: string
    ): Promise<CareEventModel[]> => {
      return db.select<CareEventModel[]>().where({ caregiver_id: careGiverId });
    },
    GetCareEventsByCareRecipient(
      careRecipientId: string
    ): Promise<CareEventModel[]> {
      return db
        .select<CareEventModel[]>()
        .where({ care_recipient_id: careRecipientId });
    },
  };
};
