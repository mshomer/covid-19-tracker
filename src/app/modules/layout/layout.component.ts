import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, filter, withLatestFrom } from 'rxjs/operators';

import { UnsubscribeOnDestroyAdapter } from '../unsubscribe-on-destroy-adapter.ts';
import { IAppState } from 'src/app/store/state';
import { GetCards } from 'src/app/store/actions/card.action';
import { selectCountries, selectCases, selectCasesByCountry, selectSelectedCountry } from 'src/app/store/selectors';
import { GetCountries, GetCountry } from 'src/app/store/actions/country.action';
import { GetCases, GetCasesByCountry } from 'src/app/store/actions/cases.action';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  public countries$: Observable<string[]>;
  public selectedCountry$: Observable<string>;
  public areaChartData$: Observable<any>;
  public columnChartData$: Observable<any>;

  constructor(private store: Store<IAppState>) {
    super();
  }

  ngOnInit(): void {
    this.countries$ = this.store.pipe(select(selectCountries));
    this.selectedCountry$ = this.store.pipe(select(selectSelectedCountry));

    this.areaChartData$ = this.store.pipe(select(selectCases)).pipe(
      filter(res => !!res),
      map ((res) => {
        return {
          categories: res.map((i) => i.lastUpdate),
          confirmed: res.map((i) => i.confirmed),
          deaths: res.map((i) => i.deaths),
          recovered: res.map((i) => i.recovered),
        };
      })
    )

    this.columnChartData$ = this.store.pipe(select(selectCasesByCountry)).pipe(
      filter(res => !!res),
      withLatestFrom(this.selectedCountry$),
      map (([res, selectedCountry]) => {
        return {
          categories: res.lastUpdate,
          confirmed: res.confirmed,
          deaths: res.deaths,
          recovered: res.recovered,
          country: selectedCountry
        };
      }),
    )

    this.store.dispatch(new GetCases());
    this.store.dispatch(new GetCards());
    this.store.dispatch(new GetCountries());
  }

  onCountryPickerChange(country: string) {
    this.store.dispatch(new GetCountry(country));
    this.store.dispatch(new GetCards(country));
    if (country) {
      this.store.dispatch(new GetCasesByCountry(country));
    }
  }
}
