import { IPerson } from '../../../api/reducers/views/types';

export interface IPersonAdderProps {
  save: (person: IPerson) => void;
  change: (event: React.FormEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  indicateAddedPerson: boolean;
  success?: string;
  error?: string;
}

export interface IPersonState {
  first_name: string;
  last_name: string;
  points: number;
  [x: string]: string | number;
}

export type TPersonField = 'first_name' | 'last_name';
