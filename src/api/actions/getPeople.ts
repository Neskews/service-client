import { genericFetch } from './genericFetch';
import {
  GET_PEOPLE,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILED
} from './../types/index';
import { SERVER_URL } from '../../constants';
import { store } from '../../index';

export const getPeople = () => {
  if (typeof fetch === 'function') {
    const api = `${SERVER_URL}/people`;
    store.dispatch({ type: GET_PEOPLE });

    genericFetch<{ title: string; message: string }>(api, 'GET')
      .then(people => {
        store.dispatch({ type: GET_PEOPLE_SUCCESS, payload: people });
      })
      .catch(error => {
        store.dispatch({ type: GET_PEOPLE_FAILED, payload: error });
      });
  }
};
