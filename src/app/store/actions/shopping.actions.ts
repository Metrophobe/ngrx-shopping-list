import { Action } from "@ngrx/store";
import { ShoppingItem } from "../models/shopping-item.model";

export enum ShoppingActionTypes {
    LOAD_SHOPPING = '[Shopping] Load Items',
    LOAD_SHOPPING_SUCCESS = '[Shopping] Load Items - SUCCESS',
    LOAD_SHOPPING_FAILURE = '[Shopping] Load Items - FAILURE',
    ADD_ITEM = '[Shopping] Add Item',
    ADD_ITEM_SUCCESS = '[Shopping] ADD Item - SUCCESS',
    ADD_ITEM_FAILURE = '[Shopping] Add Item - FAILURE',
    DELETE_ITEM = '[Shopping] Delete Item',
    DELETE_ITEM_SUCCESS = '[Shopping] Delete Item - SUCCESS',
    DELETE_ITEM_FAILURE = '[Shopping] Delete Item - FAILURE',
}

//Load

export class LoadShoppingAction implements Action {
    readonly type: string = ShoppingActionTypes.LOAD_SHOPPING;
    constructor(public payload:string) {}
}

export class LoadShoppingSuccessAction implements Action {
    readonly type: string = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
    constructor(public payload:Array<ShoppingItem>) {}
}

export class LoadShoppingFailureAction implements Action {
    readonly type: string = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
    constructor(public payload:Error) {}
}

//ADD

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: ShoppingItem) {}
}

export class AddItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: ShoppingItem) { }
}

export class AddItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
    constructor(public payload:Error) { }
}

export class DeleteItemAction implements Action {
    readonly type: string = ShoppingActionTypes.DELETE_ITEM;
    constructor(public payload:string) {}
}

export class DeleteItemSuccessAction implements Action {
    readonly type: string = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
    constructor(public payload:string) {}
}

export class DeleteItemFailureAction implements Action {
    readonly type: string = ShoppingActionTypes.DELETE_ITEM_FAILURE;
    constructor(public payload:Error) {}
}

export type ShoppingAction = LoadShoppingAction | LoadShoppingSuccessAction | LoadShoppingFailureAction |
                             AddItemAction | AddItemSuccessAction | AddItemFailureAction |
                             DeleteItemAction | DeleteItemSuccessAction | DeleteItemFailureAction
