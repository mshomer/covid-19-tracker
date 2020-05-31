import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ICases } from '../models/cases.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://covid19.mathdro.id/api';

  constructor(private http: HttpClient) { }


  fetchData(country: string = null): Observable<ICases> {
    let url = this.baseUrl;
    if(country) {
      url = `${this.baseUrl}/countries/${country}`;
    }

    return this.http.get<any>(url).pipe(map(res => {
      return {
        confirmed: res.confirmed.value,
        recovered: res.recovered.value,
        deaths: res.deaths.value,
        lastUpdate: res.lastUpdate
      }
    }));
  }

  fetchDailyDate(): Observable<ICases[]> {
    return this.http.get<any>(`${this.baseUrl}/daily`).pipe(map(res => {
      return res.map(data => { return {
        confirmed: data.confirmed.total,
        recovered: data.recovered.total,
        deaths: data.deaths.total,
        lastUpdate: data.reportDate
      }});
    }));
  }

  fetchCountries(): Observable<string[]> {
    return this.http.get<any>(`${this.baseUrl}/countries`).pipe(map(res => {
      return res.countries.map(c => c.name)
    }));;
  }
}
