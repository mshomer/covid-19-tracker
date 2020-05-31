import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import { IAppState } from '../state';
import {
  ECasesActions,
  GetCasesSuccess,
  GetCasesByCountrySuccess,
  GetCasesByCountry,
} from '../actions/cases.action';
import { ApiService } from '../../services/api.service';
import { ICases } from 'src/app/models';

@Injectable()
export class CasesEffects {
  constructor(
    private apiService: ApiService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getCasesList$ = this.actions$.ofType(ECasesActions.GetCases).pipe(
    switchMap(() => this.apiService.fetchDailyDate()),
    map((casesList: ICases[]) => new GetCasesSuccess(casesList))
  );

  @Effect()
  getCasesByCountry$ = this.actions$.pipe(
    ofType<GetCasesByCountry>(ECasesActions.GetCasesByCountry),
    switchMap((action) => this.apiService.fetchData(action.payload)),
    map((cases: ICases) => new GetCasesByCountrySuccess(cases))
  );
}
