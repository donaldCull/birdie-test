import { birdieDB } from '../db/BirdieDB';
import { CareRecipientModel } from '../model/CareRecipientModel';

export interface CareRecipientInterface {
  GetAllCareRecipients: () => Promise<CareRecipientModel[]>;
  GetCareRecipient: (id: string) => Promise<CareRecipientModel[]>;
}

export const CareRecipients = (): CareRecipientInterface => {
  return {
    GetAllCareRecipients: (): Promise<CareRecipientModel[]> => {
      return birdieDB.raw('select * from test_care_recipients').then((rows) => {
        return rows[0];
      });
    },
    GetCareRecipient: (id: string): Promise<CareRecipientModel[]> => {
      return birdieDB
        .raw('select * from test_care_recipients where id = ?', [id])
        .then((rows) => {
          return rows[0];
        });
    },
  };
};
