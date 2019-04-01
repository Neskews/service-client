import {
    GET_BADGES,
    GOT_BADGES_SUCCESSFULLY,
    GETTING_BADGES_FAILED, GET_PEOPLE
} from "../../types";

export interface IBadge {
    name: string,
    score: number,
    id?: string | number
}

interface IBadgeReducerState {
    badges: IBadge[],
    isLoading: boolean,
    error?: string,
    success?: string,
}

interface IBadgeReducerAction {
    type: string,
    payload: IBadge[] | string
}

const initState: IBadgeReducerState= {
    badges: [],
    isLoading: false,
    error: undefined,
    success: undefined,
};

export default (
    state: IBadgeReducerState = initState,
    { type, payload }: any
) => {
    switch (type) {
        case GET_BADGES:
            return {
                ...state,
                isLoading: true,
                error: undefined,
                success: undefined,
            };
        case GOT_BADGES_SUCCESSFULLY:
            return {
                ...state,
                isLoading: false,
                badges: payload,
                error: undefined
            }
        case GETTING_BADGES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state;
    }
}
