import {
  GET_PEOPLE,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILED
} from './../types/index';
import { SERVER_URL } from '../../constants';

import { store } from '../../index';

// Implementation code where T is the returned data shape
function genericFetch<T>(url: string, method: string): Promise<T> {
  console.log(url, method);

  return fetch(url, { method }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export const deletePerson = (id: number) => {
  const api = `${SERVER_URL}/persons/1`;

  genericFetch(api, 'DELETE').then(response => {
    // console.log(response);
  });
};

export const getPeople = () => {
  if (typeof fetch === 'function') {
    const api = `${SERVER_URL}/persons`;
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
