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

  
  it('should add product to the cart', () => {
    let c = (service.getCart()).length;

    service.updateCart({
      "id": "5",
      "name": "pippo",
      "price": 2.00,
      "quantity": 2
    });
    
    expect(service.getCart().length).toBeGreaterThan(c);
  });

  
  it('should remove product from the cart', () => {
  });


  it('should clean the cart', () => {

    let a = (service.getCart()).length;

    service.cleanCart();

    let b = (service.getCart()).length;
    expect((b)).toBe(a - 1);

  });


});