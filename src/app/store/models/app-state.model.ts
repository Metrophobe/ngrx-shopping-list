import { ShoppingItem } from './shopping-item.model';
import { ShoppingState } from './shopping-state.model';

export interface AppState {
  readonly shopping: ShoppingState
}