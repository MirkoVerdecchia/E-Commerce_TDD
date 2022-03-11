import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../interface/product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let mockService: jasmine.SpyObj<CartService>;

  const p = {
    "id": "5",
    "name": "pippo",
    "price": 2.00,
    "description": ""
  };

  const p_1 = {
    "id": "6",
    "name": "pluto",
    "price": 3.00,
    "description": ""
  };


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    mockService = TestBed.get(CartService);



  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should add product to the cart', () => {
    let c = (mockService.getCart()).length;

    mockService.updateCart(p);

    expect(mockService.getCart().length).toBeGreaterThan(c);
  });


  it('should remove a product from the cart', () => {

    mockService.updateCart(p);
    mockService.removeProduct(p);

    expect(mockService.getCart()).not.toContain(p);

  });


  it('should clean the cart and duplicate_cart', () => {

    mockService.updateCart(p);
    mockService.updateCart(p);
    mockService.updateCart(p_1);
    mockService.cleanCart();

    expect(mockService.getCart()).toEqual([]);
    expect(mockService.getDuplicate()).toEqual([]);

  });


  it('should the cart be empty', () => {

    expect(mockService.emptyCart()).toBeTrue();
  });


  it('should get the number of product inside the cart', () => {
    mockService.updateCart(p);
    mockService.updateCart(p);
    mockService.updateCart(p_1);

    expect(mockService.getNumberProduct(p)).toBe(2);
    expect(mockService.getNumberProduct(p_1)).toBe(1);

  });


  it('should return the total of the order cart', () => {
    mockService.updateCart(p);
    mockService.updateCart(p);
    mockService.updateCart(p_1);

    expect(mockService.getTotal()).toBe((7).toFixed(2));

  });



});