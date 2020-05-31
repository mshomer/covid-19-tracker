import { ECasesActions, CasesActions } from '../actions/cases.action';
import { initialCasesState, ICasesState } from '../state/cases.state';

export const casesReducers = (
  state = initialCasesState,
  action: CasesActions
): ICasesState => {
  switch(action.type) {
    case ECasesActions.GetCasesSuccess:
      return {
        ...state,
       cases: action.payload
      };
    case ECasesActions.GetCasesByCountrySuccess:
      return {
        ...state,
        casesByCountry: action.payload
      };
  default:
    return state;
  }
}
