export interface ICountryState {
  countries: string[];
  selectedCountry: string
}

export const initialCountryState: ICountryState = {
  countries: null,
  selectedCountry: null
}
