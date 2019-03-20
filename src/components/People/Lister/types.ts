import { IPerson } from '../../../api/reducers/types';

export interface IPeopleListerProps {
  get: () => void; // just adds people to store
  remove: (id: number | undefined) => void; // removes a person from store and on db
  people: IPerson[];
}

export interface IPeopleListerState {
  people: IPerson[];
}
