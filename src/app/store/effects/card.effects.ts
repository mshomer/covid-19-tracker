import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { GetCardsSuccess, ECardActions, GetCards } from '../actions/card.action';
import { ApiService } from '../../services/api.service';
import { ICard, ICases } from 'src/app/models';

@Injectable()
export class CardEffects {

  constructor(
    private apiService: ApiService,
    private actions$: Actions
  ) {}

  @Effect()
  getCards$ = this.actions$.ofType<GetCards>(ECardActions.GetCards).
  pipe(
    switchMap((action) => this.apiService.fetchData(action.payload)),
    map((cases: ICases) => {
      const payload: ICard[] = [
        {
          title: 'Infected',
          data: cases.confirmed,
          date: cases.lastUpdate,
          body: 'Number of active cases of COVID-19',
          borderBottomColor: 'blue',
        },
        {
          title: 'Recoverd',
          data: cases.recovered,
          date: cases.lastUpdate,
          body: 'Number of recoveries from COVID-19',
          borderBottomColor: 'green',
        },
        {
          title: 'Deaths',
          data: cases.deaths,
          date: cases.lastUpdate,
          body: 'Number of deaths cases of COVID-19',
          borderBottomColor: 'red',
        },
      ];

      return new GetCardsSuccess(payload);
    })
  );
}
