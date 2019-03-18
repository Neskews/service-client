import { IPerson } from './../../../api/reducers/types';

export interface IPersonAdderProps {
  save: (person: IPerson) => void;
  change: (event: React.ChangeEventHandler) => void;
  isLoading: boolean;
  indicateSuccessfullyAddedPerson: boolean;
}

export interface IPersonState {
  name: string;
}
