import { Action } from '@ngrx/store';

import { ICases } from '../../models/cases.model';

export enum ECasesActions {
  GetCasesByCountry = '[Cases] Get Cases By Country',
  GetCasesByCountrySuccess = '[Cases] Get Cases Success By Country',
  GetCases = '[Cases] Get Cases',
  GetCasesSuccess = '[Cases] Get Cases Success'
}

export class GetCasesByCountry implements Action {
  public readonly type = ECasesActions.GetCasesByCountry
  constructor(public payload: string) {}
}

export class GetCasesByCountrySuccess implements Action {
  public readonly type = ECasesActions.GetCasesByCountrySuccess
  constructor(public payload: ICases) {}
}

export class GetCases implements Action {
  public readonly type = ECasesActions.GetCases
}

export class GetCasesSuccess implements Action {
  public readonly type = ECasesActions.GetCasesSuccess
  constructor(public payload: ICases[]) {}
}

export type CasesActions = GetCasesByCountry | GetCasesByCountrySuccess | GetCases | GetCasesSuccess;
