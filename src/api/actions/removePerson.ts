import {
  REMOVE_PERSON,
  REMOVED_PERSON_SUCCESSFULLY,
  REMOVING_PERSON_FAILED,
  REMOVE_REMOVED_PERSON_SUCCESSFULLY_HINT,
  GET_PEOPLE
} from './../types/index';
import { SERVER_URL } from './../../constants';
import { genericFetch } from './genericFetch';
import { IPerson } from '../reducers/views/types';
import { store } from '../..';
import { getPeople } from './getPeople';

export function removePerson(id: number | undefined) {
  store.dispatch({ type: REMOVE_PERSON });

  if (!id)
    store.dispatch({
      type: REMOVING_PERSON_FAILED,
      payload: 'No person found that could be deleted.'
    });

  genericFetch(`${SERVER_URL}/people/remove/${id}`, 'GET')
    .then(() => {
      store.dispatch({ type: REMOVED_PERSON_SUCCESSFULLY });
      setTimeout(() => {
        store.dispatch({ type: REMOVE_REMOVED_PERSON_SUCCESSFULLY_HINT });
      }, 2000);
    })
    .then(getPeople)
    .catch(() => store.dispatch({ type: REMOVING_PERSON_FAILED }));
}
