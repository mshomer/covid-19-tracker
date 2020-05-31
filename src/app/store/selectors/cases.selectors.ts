import { createSelector } from '@ngrx/store';

import { IAppState, ICasesState } from '../state';

const selectCasesState = (state: IAppState) => state.cases;

export const selectCases = createSelector(
  selectCasesState,
  (state: ICasesState) => state.cases
)

export const selectCasesByCountry = createSelector(
  selectCasesState,
  (state: ICasesState) => state.casesByCountry
)
