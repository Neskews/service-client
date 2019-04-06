import { CHANGE_VIEW } from "../../types";
import { IViewReducer } from "./types";
import {IReducerPayload} from "../types";

const initState: IViewReducer = {
  view: "list-badges"
};

export default (
  state: IViewReducer = initState,
  { type, payload }: IReducerPayload
) => {
  switch (type) {
    case CHANGE_VIEW:
      return {
        ...state,
        view: payload
      };
    default:
      return state;
  }
};
