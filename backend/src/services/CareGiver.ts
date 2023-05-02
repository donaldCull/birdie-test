import { birdieDB } from '../db/BirdieDB';
import { CareGiverModel } from '../model/CareGiverModel';

export interface CareGiverInterface {
  GetAllCareGivers: () => Promise<CareGiverModel[]>;
  GetCareGiver: (id: string) => Promise<CareGiverModel>;
}

export const CareGiver = (): CareGiverInterface => {
  const db = birdieDB({ tcg: 'test_caregivers' });
  return {
    GetAllCareGivers: (): Promise<CareGiverModel[]> => {
      return db.select<CareGiverModel[]>();
    },
    GetCareGiver: (id: string): Promise<CareGiverModel> => {
      return db.select<CareGiverModel>().where({ id });
    },
  };
};
