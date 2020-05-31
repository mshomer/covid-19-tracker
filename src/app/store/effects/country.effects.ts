import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state';
import {ECountryActions, GetCountriesSuccess, GetCountrySuccess, GetCountry } from '../actions/country.action';
import { ApiService } from '../../services/api.service';
import { selectCountries } from '../selectors';
import { of } from 'rxjs';

@Injectable()
export class CountryEffects {
  constructor(
    private apiService: ApiService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getCountries$ = this.actions$.ofType(ECountryActions.GetCountries).
  pipe(
    switchMap(() => this.apiService.fetchCountries()),
    map((countries: []) => new GetCountriesSuccess(countries))
  );

  @Effect()
  getCountry$ = this.actions$.pipe(
    ofType<GetCountry>(ECountryActions.GetCountry),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectCountries))),
    switchMap(([country, countries]) => {
      const selectedCountry = countries.find(c => c === country);
      return of(new GetCountrySuccess(selectedCountry));
    })
  );
}
