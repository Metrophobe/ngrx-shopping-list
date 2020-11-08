import { Action } from "@ngrx/store";
import { ShoppingItem } from "../models/shopping-item.model";

export enum ShoppingActionTypes {
    ADD_ITEM = '[Shopping] Add Item',
    DELETE_ITEM = '[Shopping] Delete Item'
}

export class AddItemAction implements Action {
    //Actions have two fundamantal components 
    
    //type 
    readonly type = ShoppingActionTypes.ADD_ITEM;
    //payload 
    constructor(public payload: ShoppingItem) { }
}

export class DeleteItemAction implements Action {
    readonly type: string = ShoppingActionTypes.DELETE_ITEM;
    constructor(public payload:string) {}
}

export type ShoppingAction = AddItemAction | DeleteItemAction;