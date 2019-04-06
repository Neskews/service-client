import {
  ADD_PERSON,
  ADDED_PERSON_SUCCESSFULLY,
  ADDING_PERSON_FAILED,
  GET_PEOPLE,
  GET_PEOPLE_FAILED,
  GET_PEOPLE_SUCCESS,
  REMOVE_ADDED_PERSON_HINT,
  REMOVE_PERSON,
  REMOVE_REMOVED_PERSON_SUCCESSFULLY_HINT,
  REMOVED_PERSON_SUCCESSFULLY,
  REMOVING_PERSON_FAILED
} from "../../types/";
import { IPeopleReducerState } from "./types";
import { IPerson } from "../views/types";

const initState: IPeopleReducerState = {
  people: [],
  isLoading: false,
  error: undefined,
  success: undefined,
  indicateAddedPerson: false,
  indicateSuccessfullyRemovedPerson: false
};

export default (
  state: any = initState,
  { type, payload }: { type: string; payload: string | boolean | IPerson }
) => {
  switch (type) {
    case GET_PEOPLE:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case GET_PEOPLE_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: payload,
        isLoading: false,
        error: undefined
      };
    case ADD_PERSON:
      return {
        ...state,
        isLoading: true,
        error: undefined,
        success: undefined
      };
    case ADDED_PERSON_SUCCESSFULLY:
      return {
        ...state,
        indicateAddedPerson: true,
        isLoading: false,
        success: payload,
        error: undefined
      };
    case ADDING_PERSON_FAILED:
      return {
        ...state,
        isLoading: false,
        indicateAddedPerson: true,
        error: payload
      };
    case REMOVE_ADDED_PERSON_HINT:
      return {
        ...state,
        indicateAddedPerson: false,
        success: undefined,
        error: undefined
      };
    case REMOVE_PERSON:
      return {
        ...state,
        isLoading: true
      };
    case REMOVED_PERSON_SUCCESSFULLY:
      return {
        ...state,
        isLoading: false,
        indicateSuccessfullyRemovedPerson: true
      };
    case REMOVING_PERSON_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case REMOVE_REMOVED_PERSON_SUCCESSFULLY_HINT:
      return {
        ...state,
        indicateSuccessfullyRemovedPerson: false
      };
    default:
      return state;
  }
};
