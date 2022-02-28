import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IOrder } from 'src/app/interface/order';
import { IProduct } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

private cart: IProduct[] = []
cartProducts : IProduct[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  this.cartProducts = this.cartService.getCart();
  
  }

  
  getCart() {
    
  }

  removeFromCart() {

  }


  makeOrder() {

  }


  sendOrder() {

  }


  checkAddressData(phone: string, city: string, address: string): boolean {

    return true;

  }


  emptyCart(): boolean {
    return false;
  }


  getTotal() {

    return this.cartService.getTotal();

  }


  //restituisce la quantità di un prodotto nel carrello
  numberProduct(p : IProduct) {

  }


}
