import { combineReducers } from 'redux';
import {
  CHANGE_VIEW
} from '../../types';
import {IViewReducer} from './types';
import people from '../people';

const initState: IViewReducer= {
  view: 'list-people'
};

const view = (state: IViewReducer = initState, { type, payload }: any) => {
  switch (type) {
    case CHANGE_VIEW:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  people,
  view
})
