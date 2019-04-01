export interface IPerson {
  [x: string]: number | string | never[] | undefined;
  first_name: string;
  last_name: string;
  points: number;
  age?: number;
  id?: number;
}

export type TViews = ''
    | 'add-offer'
    | 'add-person'
    | 'list-people'
    | 'list-badges';

export interface IViewReducer {
  view: TViews;
}
