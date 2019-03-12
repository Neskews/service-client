export interface IPerson {
  name: string;
  id: number;
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
