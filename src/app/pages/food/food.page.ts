import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/shopping-list';
import { ListService } from 'src/app/services/list.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  foodList: ShoppingList[];

  constructor(
    private listService: ListService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
   this.getFood(); 
  }

  getFood(): void {
    this.listService.getFoodList()
        .subscribe((res : ShoppingList[]) => {
          // console.log(res);
          this.foodList = res});
  }

  addToCart(product: any) {
    this.cartService.addToCart(product)
  }

}
