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

constructor(private cartService: CartService) { }

  ngOnInit(): void {

  this.cart = this.cartService.getCart();
  
  }

  
  getCart(): IProduct[] {

    return this.cart;

  }

  removeFromCart(p: IProduct): void {

    this.cartService.removeProduct(p);
  
  }



  makeOrder(phone: string, city: string, address: string): void {
    if(this.checkAddressData(phone, city, address)) {
      let date = new Date();
      let order: IOrder = {id :'', phone: phone, city: city, address: address, total: this.cartService.getTotal(), products: this.cartService.getDuplicate(), date: date.toLocaleDateString()};
    }
    this.sendOrder();

  }


  sendOrder() {

  }


  checkAddressData(phone: string, city: string, address: string): boolean{
    if(phone.length !== 10) {
      alert("Inserire un numero di telefono corretto.");
      return false;
    }
    if(city.length<1) {
      alert("Inserire la città.");
      return false;
    }
    if(address.length < 1) {
      alert("Inserire la via e il civico.");
      return false;
    }
    return true;
    
  }


  emptyCart(): boolean {

    return this.cartService.emptyCart();

  }


  getTotal(): any {

    return this.cartService.getTotal();

  }


  //return number of multiple product with the same id in the cart
  numberProduct(p : IProduct):number {

    return this.cartService.getNumberProduct(p);

  }


}
