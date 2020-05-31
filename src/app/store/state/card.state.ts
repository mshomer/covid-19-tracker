import { ICard } from '../../models/card.model';

export interface ICardState {
  cards: ICard[];
}

export const initialCardState: ICardState = {
  cards: null
}
