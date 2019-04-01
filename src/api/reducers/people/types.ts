import { IPerson } from '../views/types';

export interface IPeopleReducerState {
    people: IPerson[],
    isLoading: boolean,
    error?: string,
    success?: string,
    indicateAddedPerson?: boolean,
    indicateSuccessfullyRemovedPerson?: boolean
}
