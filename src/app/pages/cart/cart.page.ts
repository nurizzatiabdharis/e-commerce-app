import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { HistoryService } from 'src/app/services/history.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems = [];
  subtotal = 0;
  isConfirm: boolean;

  constructor(
    private cartService: CartService,
    private historyService: HistoryService,
    private localNotifications: LocalNotifications
    ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItem();
    this.subtotal = this.cartService.getTotalPrice();
  }

  deleteFromCart(product) {
    this.cartService.deleteFromCart(product);
    this.subtotal = this.cartService.getTotalPrice(); // to update the value of total after delete
    console.log(product.name+" is deleted");
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.subtotal = this.cartService.getTotalPrice(); // to update the value of total after add
    console.log(product.name+" is added");
  }
  
  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }

  addToHistory() {
    this.historyService.addToHistory(this.cartItems, this.subtotal);
    this.clearCart();
    this.isConfirm = true;
    this.sendMultiNotification();
  }

  sendNotification() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Payment accepted, view your history',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    });
  }

  sendMultiNotification() {
    // Schedule multiple notifications
    this.localNotifications.schedule([{
      id: 1,
      text: 'Payment accepted! Total price: '+ this.subtotal+"£"  ,
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    }, {
      id: 2,
      // title: 'View your history for details',
      text: 'View your history for details',
    }]);
  }
}
