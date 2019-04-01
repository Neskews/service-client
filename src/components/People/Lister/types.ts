import { IPerson } from '../../../api/reducers/views/types';

export interface IPeopleListerProps {
  get: () => void; // just adds people to store
  remove: (id: number | undefined) => void; // removes a person from store and on db
  increase: (id: number | undefined) => void;
  people: IPerson[];
  error: string;
}

export interface IPeopleListerState {
  people: IPerson[];
}
