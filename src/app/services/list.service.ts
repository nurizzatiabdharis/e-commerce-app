import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ShoppingList } from '../shopping-list';
import { FOODLIST, KITCHENWARELIST } from '../mock-list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl: string = "/src/assets/data.json";

  constructor() { } 

  getFoodList(): Observable<ShoppingList[]> {
    return of(FOODLIST);
  }

  getKitchenwareList(): Observable<ShoppingList[]> {
    return of(KITCHENWARELIST);
  }
  
}
