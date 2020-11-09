import { pid } from 'process';
import { ShoppingService } from 'src/services/shopping.service';
import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingState } from '../models/shopping-state.model';

const initialState: ShoppingState = 
  {
    list:[],
    loading: false,
    error:undefined
  }
;

//So reducers actually help manage the state transition ... whenever it accors 
export function ShoppingReducer
  (
    state: ShoppingState = initialState,
    action: ShoppingAction
  ) {
  
  //ngrx entity is better than this (as an approach)
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
    case ShoppingActionTypes.ADD_ITEM:
    case ShoppingActionTypes.DELETE_ITEM:
          return {
            ...state, 
            loading: true 
          };
    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
    case ShoppingActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state, 
        loading:false,
        error: action.payload
      };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
            return {
              ...state,
              list:action.payload,
              loading: false 
            };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
            return {
              ...state,
              list: [...state.list, action.payload],
              loading: false 
            };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
          return {
            ...state, 
            list:state.list.filter(item => item.id !== action.payload),
            loading:false
          };
    
    default:
      return state;
  }
}