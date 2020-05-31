import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state';
import { ICard } from 'src/app/models';
import { selectCards } from 'src/app/store/selectors';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards$: Observable<ICard[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.cards$ = this.store.pipe(select(selectCards));
  }
}
