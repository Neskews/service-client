import { IPerson } from '../../../api/reducers/types';

export interface IPeopleListerProps {
  get: () => void; // just adds people to store
  people: IPerson[];
}

export interface IPeopleListerState {
  people: IPerson[];
}
