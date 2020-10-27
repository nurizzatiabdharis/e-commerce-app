import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(
    private customerService: CustomerService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
  }

  login(form) {
    this.customerService.createCustomer();
    console.log(form.value);
  }

  // clearStorage() {
  //   this.storageService.clear();
  // }

}
