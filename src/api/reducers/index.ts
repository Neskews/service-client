import {
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE,
  GET_PEOPLE_FAILED
} from './../types/index';
import { IAction, IState } from './types';

const initState: IState = {
  people: [],
  isLoading: false,
  error: undefined
};

export default (state: IState = initState, { type, payload }: IAction) => {
  switch (type) {
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
    case GET_PEOPLE:
      return state;
    default:
      return state;
  }
};
