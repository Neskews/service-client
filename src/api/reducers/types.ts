export interface IPerson {
  name: string;
}

export type TViews = '' | 'add-offer';

export interface IState {
  people: IPerson[];
  isLoading: boolean;
  view: TViews;
  error?: string;
  indicateSuccessfullyAddedPerson?: boolean;
}

export interface IAction {
  type: string;
  payload?: TViews;
}
