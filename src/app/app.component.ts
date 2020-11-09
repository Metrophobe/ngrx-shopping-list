import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, LoadShoppingAction, LoadShoppingSuccessAction, ShoppingActionTypes } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import {v4 as uuid} from 'uuid';
import { ShoppingItem } from './store/models/shopping-item.model';
import { ShoppingState } from './store/models/shopping-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //fields
  newShoppingItem:ShoppingItem;
  title:string = 'ngrx-shopping-list';
    
  //observables
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  shoppingItems$:Observable<ShoppingItem[]>;
  
    
  constructor(private store:Store<AppState>){
    this.newShoppingItem = { id:'',name:''};
  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);
    this.store.dispatch(new LoadShoppingAction(""));
  }

  addItem(){
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id:'',name:''};
  }

  deleteItem(id){
    this.store.dispatch(new DeleteItemAction(id));
  }

}



  
  

  
