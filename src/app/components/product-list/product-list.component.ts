import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];
  //cart$: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    //this.cart$ = this.cartService.getSingle$();
    /*this.cart$ = of([
      {
        name: "test1",
        price: 10,
        quantity: 1
      },
      {
        name: "test2",
        price: 20,
        quantity: 2
      },
      {
        name: "test3",
        price: 30,
        quantity: 3
      }
    ])*/
  }

  addProductToCart(Product: IProduct) {

  }

}
