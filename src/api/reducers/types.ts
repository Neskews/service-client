import { IPerson, TViews } from "./views/types";
import { IBadge } from "./badges";

export interface IReducerPayload {
  type: string;
  payload: TViews;
}
