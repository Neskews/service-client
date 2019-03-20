import {
  REMOVE_PERSON,
  REMOVED_PERSON_SUCCESSFULLY,
  REMOVING_PERSON_FAILED,
  REMOVE_REMOVED_PERSON_SUCCESSFULLY_HINT
} from './../types/index';
import { SERVER_URL } from './../../constants';
import { genericFetch } from './genericFetch';
import { IPerson } from '../reducers/types';
import { store } from '../..';

export function removePerson(id: number) {
  //   store.dispatch({ type: REMOVE_PERSON, payload: { name: 'Franz' } });
  //   genericFetch(`${SERVER_URL}/people/new?name=${person.name}`, 'GET')
  //     .then(() => {
  //       store.dispatch({ type: ADDED_PERSON_SUCCESSFULLY });
  //       setTimeout(() => {
  //         store.dispatch({ type: REMOVE_ADDED_PERSON_SUCCESSFULLY_HINT });
  //       }, 2000);
  //     })
  //     .catch(() => store.dispatch({ type: ADDING_PERSON_FAILED }));
}
