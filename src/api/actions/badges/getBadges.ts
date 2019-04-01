import { genericFetch } from '../genericFetch';
import {
    GET_BADGES,
    GOT_BADGES_SUCCESSFULLY,
    GETTING_BADGES_FAILED
} from '../../types';
import { SERVER_URL } from '../../../constants';
import { store } from '../../../index';
import {GETTING_BADGES_FAILED_MESSAGE} from "../../types/error";


export const getBadges = () => {
    console.log('get badges!');
    if (typeof fetch === 'function') {
        const api = `${SERVER_URL}/badges`;
        store.dispatch({ type: GET_BADGES });

        genericFetch<{ title: string; message: string }>(api, 'GET')
            .then(badges => {
                store.dispatch({ type: GOT_BADGES_SUCCESSFULLY, payload: badges});
            })
            .catch(() => {
                store.dispatch({
                    type: GETTING_BADGES_FAILED,
                    payload: GETTING_BADGES_FAILED_MESSAGE
                });
            });
    }
};
