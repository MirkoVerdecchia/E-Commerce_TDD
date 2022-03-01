import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../interface/product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  const p = {
    "id": "5",
    "name": "pippo",
    "price": 2.00,
    "quantity": 2
  };


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);


  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should add product to the cart', () => {
    let c = (service.getCart()).length;

    service.updateCart(p);
    
    expect(service.getCart().length).toBeGreaterThan(c);
  });

  
  it('should remove product from the cart', () => {

    service.updateCart(p);

    expect(service.getCart()).toContain(p);

    service.removeProduct(p);

    expect(service.getCart()).not.toContain(p);

  });


  it('should clean the cart', () => {

    service.updateCart(p);

    let a = (service.getCart()).length;

    service.cleanCart();

    let b = (service.getCart()).length;
    expect((b)).toBe(a - 1);

  });


});