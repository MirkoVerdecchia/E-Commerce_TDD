import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private product : IProduct[] = []

  constructor() { }


  
  getProduct(): IProduct[] {

    //@todo add a real http call to get products.
    return this.product;

  }
  

}
