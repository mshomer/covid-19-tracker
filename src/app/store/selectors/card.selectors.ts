import { createSelector } from '@ngrx/store';

import { IAppState, ICardState } from '../state';

const selectCardsState = (state: IAppState) => state.cards;

export const selectCards = createSelector(
  selectCardsState,
  (state: ICardState) => state.cards
)
