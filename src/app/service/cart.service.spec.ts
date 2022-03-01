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

  const p_1 = {
    "id": "6",
    "name": "pluto",
    "price": 3.00,
    "quantity": 3
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
    service.removeProduct(p);

    expect(service.getCart()).not.toContain(p);

  });


  it('should clean the cart', () => {

    service.updateCart(p);
    service.cleanCart();

    let b = (service.getCart()).length;
    expect((b)).toBe(0);

  });


  it('should the cart be empty', () => {
    expect(service.emptyCart()).toBeTrue();
  });


  it('should get the number of product inside the cart', () => {
    service.updateCart(p);
    service.updateCart(p);
    service.updateCart(p_1);

    expect(service.getNumberProduct(p)).toBe(2);
    expect(service.getNumberProduct(p_1)).toBe(1);

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });



});