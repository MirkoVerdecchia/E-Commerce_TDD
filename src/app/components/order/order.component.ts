import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IOrder } from 'src/app/interface/order';
import { IProduct } from 'src/app/interface/product';
import { AccountService } from 'src/app/service/account.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  private cart: IProduct[] = [];

  constructor(
    private cartService: CartService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  //TESTED
  getCart(): IProduct[] {
    return this.cart;
  }

  //TESTED
  removeFromCart(p: IProduct): void {
    this.cartService.removeProduct(p);
  }

  //TESTED
  makeOrder(phone: string, city: string, address: string): void {
    if (this.checkAddressData(phone, city, address)) {
      let date = new Date();
      let order: IOrder = {
        id: '',
        user: this.accountService.getUserEmail,
        phone: phone,
        city: city,
        address: address,
        total: this.cartService.getTotal(),
        products: this.cartService.getDuplicate(),
        date: date.toLocaleDateString(),
      };
    }
    this.sendOrder();
  }

  sendOrder() {}

  //TESTED
  checkAddressData(phone: string, city: string, address: string): boolean {
    if (phone.length !== 10) {
      alert('Inserire un numero di telefono corretto.');
      return false;
    }
    if (city.length < 1) {
      alert('Inserire la città.');
      return false;
    }
    if (address.length < 1) {
      alert('Inserire la via e il civico.');
      return false;
    }
    return true;
  }

  //TESTED
  emptyCart(): boolean {
    return this.cartService.emptyCart();
  }

  //TESTED
  getTotal(): any {
    return this.cartService.getTotal();
  }

  //TESTED
  numberProduct(p: IProduct): number {
    return this.cartService.getNumberProduct(p);
  }
}
