import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType,  } from '@ngrx/effects';
import { ShoppingService } from 'src/services/shopping.service';
import { AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction, LoadShoppingAction, LoadShoppingFailureAction, LoadShoppingSuccessAction, ShoppingActionTypes } from '../actions/shopping.actions';


@Injectable()
export class ShoppingEffects{
    //this is how effects work
    @Effect() loadShopping$ = this.actions$ //we are listening to actions inside of the application 
    .pipe( //pipe is used to concatinate a number of tasks (rxjs)
        //If the Action Type is filtered based on the item in () <T> enforces the type compatibility 
        ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING), 
        mergeMap( //mergemap
            () => this.shoppingService.getShoppingItems()
                  .pipe(
                      map(data => new LoadShoppingSuccessAction(data)), 
                      catchError(error => of(new LoadShoppingFailureAction(error)))
                  )
        )
    )

          
    @Effect() addShoppingItem$ = this.actions$
    .pipe(
        ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
        mergeMap(
            (data) => this.shoppingService.addShoppingItem(data.payload)
            .pipe(
                map(() => new AddItemSuccessAction(data.payload)),
                catchError((error) => of(new AddItemFailureAction(error)))
            )
        )
    );

    @Effect() deleteShoppingItem$ = this.actions$.pipe(
        ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
        mergeMap(
            data => this.shoppingService.deleteShoppingItem(data.payload)
            .pipe(
                map(() => new DeleteItemSuccessAction(data.payload)),
                catchError((error) => of(new DeleteItemFailureAction(error)))
            )
        )
    );


    constructor(private actions$:Actions, private shoppingService:ShoppingService) {

    }
}