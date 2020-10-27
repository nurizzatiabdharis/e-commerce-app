import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history = [];
  today: number = Date.now();

  constructor() { }

  getHistory() { return this.history; }

  addToHistory(shopping: any, subTotal: number) {
    this.history.push(
      { id: this.history.length+10210,
        date: this.today,
        totalPrice: subTotal,
        details: shopping,
      });
    console.log(this.history)
  }
}



