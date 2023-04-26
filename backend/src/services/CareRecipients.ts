import { birdieDB } from '../db/mysqlDB';
import { CareRecipientModel } from '../model/CareRecipientModel';

interface CareRecipientInterface {
  GetAllCareRecipients: () => Promise<CareRecipientModel[]>;
}

export const CareRecipients = (): CareRecipientInterface => {
  const db = birdieDB({ tcr: 'test_care_recipients' });
  return {
    GetAllCareRecipients: (): Promise<CareRecipientModel[]> => {
      return db.select<CareRecipientModel[]>();
    },
  };
};
