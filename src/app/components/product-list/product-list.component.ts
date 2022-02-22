import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(Product: IProduct) {

  }

}
