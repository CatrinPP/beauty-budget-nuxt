import type { ISettings } from "./settings";
import type { ITransaction } from "./transaction";

export interface IStorageState {
  transactions: ITransaction[];
  settings: ISettings;
}