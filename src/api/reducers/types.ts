export interface IPerson {
  name: string;
}

export type TViews = '' | 'add-offer' | 'add-person';

export interface IState {
  people: IPerson[];
  isLoading: boolean;
  view: TViews;
  error?: string;
  indicateSuccessfullyAddedPerson?: boolean;
  indicateSuccessfullyRemovedPerson?: boolean;
}

export interface IAction {
  type: string;
  payload?: TViews | IPerson;
}
