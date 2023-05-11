import { CareRecipientModel } from "./CareRecipientModel";

export interface CareRecipientDataFetch {
  isLoading: boolean;
  data: CareRecipientModel[] | null;
}
