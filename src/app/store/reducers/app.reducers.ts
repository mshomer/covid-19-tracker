import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { cardReducers, countryReducers, casesReducers } from '../reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  cards: cardReducers,
  cases: casesReducers,
  countries: countryReducers
};
