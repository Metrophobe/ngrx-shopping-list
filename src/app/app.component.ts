import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, ShoppingActionTypes } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import {v4 as uuid} from 'uuid';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  newItem:ShoppingItem;

  shoppingItems$:Observable<Array<ShoppingItem>>;
  
  title = 'ngrx-shopping-list';
    
  constructor(private store:Store<AppState>){
    this.newItem = { id:'',name:''};
  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);
  }

  addItem(){
    this.newItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newItem));
    this.newItem = {id:'',name:''};
  }

  deleteItem(id){
    this.store.dispatch(new DeleteItemAction(id));
  }

}



  
  

  
