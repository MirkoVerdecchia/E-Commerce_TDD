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

  this.cartProducts = this.cartService.getSingle();
  
  }

  
  getCart() {
    
  }

  removeFromCart(product: IProduct) {

  }


  makeOrder(phone: string, city: string, address: string) {

  }


  sendOrder(order: IOrder) {

  }


  checkAddressData(phone: string, city: string, via: string) {

  }


  emptyCart(): boolean {
    return false;
  }


  getTotal() {

  }


  //restituisce la quantità di un prodotto nel carrello
  numberProduct(p : IProduct) {

  }


}
