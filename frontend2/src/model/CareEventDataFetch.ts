import { CareEventModel } from "./CareEventModel";

export interface CareEventDataFetch {
  isLoading: boolean;
  data: CareEventModel[] | null;
}
