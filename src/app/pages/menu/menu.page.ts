import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Profile',
      url: '/menu/profile',
      icon: 'contact'
    },
    {
      title: 'Category',
      children: [
        {
          title: 'Food',
          url: '/menu/food',
          icon: ''
        },
        {
          title: 'Kitchenware',
          url: '/menu/kitchenware',
          icon: ''
        },
      ]
    },
    {
      title: 'Cart',
      url: '/menu/cart',
      icon: 'basket'
    },
    {
      title: 'History',
      url: '/menu/history',
      icon: 'cube'
    },
    {
      title: 'Log out',
      url: '/menu/main',
      icon: 'log-out'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}