import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/shopping-list';
import { ListService } from 'src/app/services/list.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-kitchenware',
  templateUrl: './kitchenware.page.html',
  styleUrls: ['./kitchenware.page.scss'],
})
export class KitchenwarePage implements OnInit {
  kitchenwareList: ShoppingList[];

  constructor(
    private listService: ListService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
   this.getKitchenware(); 
  }

  getKitchenware(): void {
    this.listService.getKitchenwareList()
        .subscribe((res : ShoppingList[]) => {
          // console.log(res);
          this.kitchenwareList = res});
  }

  addToCart(product: any) {
    this.cartService.addToCart(product)
  }
}
