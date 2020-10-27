import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = []; // list of products in cart
  subtotal: number; // total price of product in cart
  quantity = 0; // manage the quantity

  constructor() { }

  getItem() { return this.cartItems }

  addToCart(product: any) {
    var existingItem = this.getExistingItem(product.id);
    if(existingItem == null) {
      this.cartItems.push(
        { id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        });
    } else {
      existingItem.quantity++;
    }
    console.log(this.cartItems)
  }

  /**find out either products alrdy exist in cart or not */
  getExistingItem(id){
    for(var i=0; i < this.cartItems.length; i++) {
      if(this.cartItems[i].id === id){
        return this.cartItems[i];
      }
    }
    return null;
  }

  deleteFromCart(product: any) {
    for( var i = this.cartItems.length; i--;) {
      if (this.cartItems[i].name === product.name) { 
        if(this.cartItems[i].quantity == 1) {
          this.cartItems.splice(i, 1)
        } else {
          this.cartItems[i].quantity--;
        }
      };
    }
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  getTotalPrice() {
    this.subtotal = 0;
      for( var i = this.cartItems.length; i--;) {
        this.subtotal += (parseFloat(this.cartItems[i].price))*this.cartItems[i].quantity;
      }
    return this.subtotal;
  }
  
}
