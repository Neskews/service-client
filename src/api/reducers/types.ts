export interface IPerson {
  name: string;
}

export interface IState {
  people: IPerson[];
  isLoading: boolean;
  error?: string;
}

export interface IAction {
  type: string;
  payload?: any;
}
