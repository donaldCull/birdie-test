import { birdieDB } from '../db/BirdieDB';
import { CareRecipientModel } from '../model/CareRecipientModel';

export interface CareRecipientInterface {
  GetAllCareRecipients: () => Promise<CareRecipientModel[]>;
  GetCareRecipient: (id: string) => Promise<CareRecipientModel>;
}

export const CareRecipients = (): CareRecipientInterface => {
  const db = birdieDB({ tcr: 'test_care_recipients' });
  return {
    GetAllCareRecipients: (): Promise<CareRecipientModel[]> => {
      return db.select<CareRecipientModel[]>();
    },
    GetCareRecipient: (id: string): Promise<CareRecipientModel> => {
      return db.select<CareRecipientModel>().where({ id });
    },
  };
};
