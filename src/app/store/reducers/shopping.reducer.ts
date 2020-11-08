import { pid } from 'process';
import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
  {
    id: "1775935f-36fd-467e-a667-09f95b917f6d",
    name: 'Diet Coke',
  }
];

//So reducers actually help manage the state transition ... whenever it accors 
export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      console.log(action.type + "-" + action.payload);  
      return [...state, action.payload];
    case ShoppingActionTypes.DELETE_ITEM:
      console.log(action.type + "-" + action.payload);  
      return state.filter(si => si.id !== action.payload);
    default:
      return state;
  }
}