import { ECountryActions, CountryActions } from '../actions/country.action';
import { initialCountryState, ICountryState } from '../state/country.state';

export const countryReducers = (
  state = initialCountryState,
  action: CountryActions
): ICountryState => {
  switch(action.type) {
    case ECountryActions.GetCountriesSuccess:
      return {
        ...state,
       countries: action.payload
      };
    case ECountryActions.GetCountrySuccess:
      return {
        ...state,
        selectedCountry: action.payload
      };
  default:
    return state;
  }
}
