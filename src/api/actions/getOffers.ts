import { genericFetch } from './genericFetch';
import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILED
} from './../types/index';
import { SERVER_URL } from '../../constants';
import { store } from '../../index';
import { GET_OFFERS_FAILED_MESSAGE } from '../types/error';

export const getPeople = () => {
  if (typeof fetch === 'function') {
    const api = `${SERVER_URL}/OFFERS`;
    store.dispatch({ type: GET_OFFERS });

    genericFetch<{ title: string; message: string }>(api, 'GET')
      .then(offers => {
        store.dispatch({ type: GET_OFFERS_SUCCESS, payload: offers });
      })
      .catch(() => {
        store.dispatch({
          type: GET_OFFERS_FAILED,
          payload: GET_OFFERS_FAILED_MESSAGE
        });
      });
  }
};
