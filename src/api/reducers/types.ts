export interface IPerson {
  first_name: string;
  last_name: string;
  points: number;
  age?: number;
  id?: number;
}

export type TViews = '' | 'add-offer' | 'add-person' | 'list-people';

export interface IState {
  people: IPerson[];
  isLoading: boolean;
  view: TViews;
  error?: string;
  success?: string;
  indicateAddedPerson?: boolean;
  indicateSuccessfullyRemovedPerson?: boolean;
}

export interface IAction {
  type: string;
  payload?: TViews | IPerson;
}
