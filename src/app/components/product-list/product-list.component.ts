import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit(): void {

    this.products = this.dataService.getProduct();   
    
  }

  addProductToCart(product: IProduct) {
    this.cartService.updateCart(product);

  }

}
