import {
  ADD_PERSON,
  ADDED_PERSON_SUCCESSFULLY,
  ADDING_PERSON_FAILED,
  REMOVE_ADDED_PERSON_HINT
} from './../types/index';
import { SERVER_URL } from './../../constants';
import { genericFetch } from './genericFetch';
import { IPerson } from '../reducers/types';
import { store } from '../..';
import { ADDING_PERSON_FAILED_MESSAGE } from '../types/error';
import { ADDED_PERSON_SUCCESSFULLY_MESSAGE } from '../types/success';

export function addPerson(person: IPerson) {
  store.dispatch({ type: ADD_PERSON });

  const { first_name, last_name } = person;

  genericFetch(
    `${SERVER_URL}/people/new?first_name=${first_name}&last_name=${last_name}`,
    'GET'
  )
    .then(() => {
      store.dispatch({
        type: ADDED_PERSON_SUCCESSFULLY,
        payload: ADDED_PERSON_SUCCESSFULLY_MESSAGE
      });

      setTimeout(() => {
        store.dispatch({ type: REMOVE_ADDED_PERSON_HINT });
      }, 2000);
    })
    .catch(error =>
      store.dispatch({
        type: ADDING_PERSON_FAILED,
        payload: ADDING_PERSON_FAILED_MESSAGE
      })
    );
}
