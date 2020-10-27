import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: '../main/main.module#MainPageModule'
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      {
        path: 'cart',
        loadChildren: '../cart/cart.module#CartPageModule'
      },
      {
        path: 'history',
        loadChildren: '../history/history.module#HistoryPageModule'
      },
      {
        path: 'food',
        loadChildren: '../food/food.module#FoodPageModule'
      },
      {
        path: 'kitchenware',
        loadChildren: '../kitchenware/kitchenware.module#KitchenwarePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ MenuPage ]
})
export class MenuPageModule { }