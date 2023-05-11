import { CareEventModel } from "./CareEventModel";

export interface CareRecipientDataFetch {
  isLoading: boolean;
  data: CareEventModel[];
}
