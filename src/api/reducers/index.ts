import {
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE,
  GET_PEOPLE_FAILED,
  ADD_PERSON,
  ADDED_PERSON_SUCCESSFULLY,
  ADDING_PERSON_FAILED,
  CHANGE_VIEW,
  REMOVE_ADDED_PERSON_SUCCESSFULLY_HINT
} from './../types/index';
import { IAction, IState } from './types';

const initState: IState = {
  people: [],
  isLoading: false,
  error: undefined,
  view: '',
  indicateSuccessfullyAddedPerson: false
};

export default (state: IState = initState, { type, payload }: IAction) => {
  switch (type) {
    case GET_PEOPLE:
      return {
        ...state
      };
    case GET_PEOPLE_FAILED:
      return {
        ...state,
        error: payload
      };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: payload
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
    case CHANGE_VIEW:
      return {
        ...state,
        view: payload
      };
    default:
      return state;
  }
};
