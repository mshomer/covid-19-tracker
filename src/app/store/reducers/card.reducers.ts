import { ECardActions, CardActions } from '../actions/card.action';
import { initialCardState, ICardState } from '../state/card.state';

export const cardReducers = (
  state = initialCardState,
  action: CardActions
): ICardState => {
  switch(action.type) {
    case ECardActions.GetCardsSuccess:
      return {
        ...state,
        cards: action.payload
      };
  default:
    return state;
  }
}
