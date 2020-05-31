import { ICardState, initialCardState } from './card.state';
import { ICasesState, initialCasesState } from './cases.state';
import { ICountryState, initialCountryState } from './country.state';


export interface IAppState {
  cards: ICardState,
  cases: ICasesState,
  countries: ICountryState
}

export const initialAppState: IAppState = {
  cards: initialCardState,
  cases: initialCasesState,
  countries: initialCountryState
}

export function getInitailState(): IAppState {
  return initialAppState;
}
