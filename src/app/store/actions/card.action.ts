import { Action } from '@ngrx/store';

import { ICard } from '../../models/card.model';

export enum ECardActions {
  GetCards = '[Card] Get Cards',
  GetCardsSuccess = '[Card] Get Cards Success',
}

export class GetCards implements Action {
  public readonly type = ECardActions.GetCards
  constructor(public payload: string = null) {}
}

export class GetCardsSuccess implements Action {
  public readonly type = ECardActions.GetCardsSuccess
  constructor(public payload: ICard[]) {}
}

export type CardActions = GetCards | GetCardsSuccess;
