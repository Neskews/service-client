import { getPeople } from './getPeople';
import { GET_PEOPLE } from './../types/index';
import { genericFetch } from './genericFetch';
import { SERVER_URL } from '../../constants';
import {
  INCREASE_PERSON_POINTS,
  INCREASED_PERSON_POINTS_SUCCESSFULLY,
  FAILED_INCREASING_PERSON_POINTS
} from '../types';
import { store } from '../..';

export const increasePersonPoints = (id: number | undefined, by: number) => {
  store.dispatch({ type: INCREASE_PERSON_POINTS });

  genericFetch(`${SERVER_URL}/people/increase_points/${id}?by=${by}`, 'POST')
    .then(() => {
      store.dispatch({
        type: INCREASED_PERSON_POINTS_SUCCESSFULLY
      });

      getPeople();
    })
    .catch(
      store.dispatch({
        type: FAILED_INCREASING_PERSON_POINTS
      })
    );
};
