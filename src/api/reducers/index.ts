import {
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE,
  GET_PEOPLE_FAILED,
  ADD_PERSON,
  ADDED_PERSON_SUCCESSFULLY,
  ADDING_PERSON_FAILED,
  REMOVE_ADDED_PERSON_SUCCESSFULLY_HINT,
  REMOVE_PERSON,
  REMOVED_PERSON_SUCCESSFULLY,
  REMOVING_PERSON_FAILED,
  REMOVE_REMOVED_PERSON_SUCCESSFULLY_HINT,
  CHANGE_VIEW
} from './../types/index';
import { IAction, IState } from './types';

const initState: IState = {
  people: [],
  isLoading: false,
  error: undefined,
  view: '',
  indicateSuccessfullyAddedPerson: false,
  indicateSuccessfullyRemovedPerson: false
};

export default (state: IState = initState, { type, payload }: IAction) => {
  switch (type) {
    case GET_PEOPLE:
      return {
        ...state,
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
        isLoading: false
      };
    case ADD_PERSON:
      return { ...state, isLoading: true };
    case ADDED_PERSON_SUCCESSFULLY:
      return {
        ...state,
        indicateSuccessfullyAddedPerson: true,
        isLoading: false
      };
    case ADDING_PERSON_FAILED:
      return { ...state, isLoading: false };
    case REMOVE_ADDED_PERSON_SUCCESSFULLY_HINT:
      return { ...state, indicateSuccessfullyAddedPerson: false };
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
    case CHANGE_VIEW:
      return {
        ...state,
        view: payload
      };
    default:
      return state;
  }
};
