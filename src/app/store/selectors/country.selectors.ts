import { createSelector } from '@ngrx/store';

import { IAppState, ICountryState } from '../state';

const selectCountryState = (state: IAppState) => state.countries;

export const selectCountries = createSelector(
  selectCountryState,
  (state: ICountryState) => state.countries
)

export const selectSelectedCountry = createSelector(
  selectCountryState,
  (state: ICountryState) => state.selectedCountry
)
