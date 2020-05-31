import { Action } from '@ngrx/store';

export enum ECountryActions {
  GetCountries = '[Country] Get Countries',
  GetCountriesSuccess = '[Country] Get Countries Success',
  GetCountry = '[Country] Get Country',
  GetCountrySuccess = '[Country] Get Country Success'
}

export class GetCountries implements Action {
  public readonly type = ECountryActions.GetCountries
}

export class GetCountriesSuccess implements Action {
  public readonly type = ECountryActions.GetCountriesSuccess
  constructor(public payload: string[]) {}
}

export class GetCountry implements Action {
  public readonly type = ECountryActions.GetCountry
  constructor(public payload: string) {}
}

export class GetCountrySuccess implements Action {
  public readonly type = ECountryActions.GetCountrySuccess
  constructor(public payload: string) {}
}

export type CountryActions = GetCountries | GetCountriesSuccess | GetCountry | GetCountrySuccess;
