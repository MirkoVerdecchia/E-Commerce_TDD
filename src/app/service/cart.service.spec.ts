import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../interface/product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);

    service.cart = [{
      "id": "4",
      "name": "test",
      "price": 1.00,
      "quantity": 1
    }];

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should clean the cart', () => {

    let a = (service.getCart()).length;

    service.cleanCart();

    let b = (service.getCart()).length;
    expect((b)).toBe(a - 1);

  });

});