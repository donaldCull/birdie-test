import { birdieDB } from '../db/BirdieDB';
import { CareGiverModel } from '../model/CareGiverModel';

export interface CareGiverInterface {
  GetAllCareGivers: () => Promise<CareGiverModel[]>;
  GetCareGiver: (id: string) => Promise<CareGiverModel[]>;
}

export const CareGiver = (): CareGiverInterface => {
  return {
    GetAllCareGivers: (): Promise<CareGiverModel[]> => {
      return birdieDB.raw('select * from test_caregivers').then((rows) => {
        return rows[0];
      });
    },
    GetCareGiver: (id: string): Promise<CareGiverModel[]> => {
      return birdieDB
        .raw('select * from test_caregivers where id = ?', [id])
        .then((rows) => {
          return rows[0];
        });
    },
  };
};
