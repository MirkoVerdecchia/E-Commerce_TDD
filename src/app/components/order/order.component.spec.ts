import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/service/cart.service';
import { spyOnClass } from 'jasmine-es6-spies';
import { OrderComponent } from './order.component';
import { IProduct } from 'src/app/interface/product';
import { DataService } from 'src/app/service/data.service';
import { of } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ppid } from 'process';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let cartService: jasmine.SpyObj<CartService>;

  const mockProduct1: IProduct = 
    {
      "id": "1",
      "name": "test",
      "price": 1.00,
      "quantity": 1
    };


  const p: IProduct[] = [
    {
      "id": "1",
      "name": "Pane",
      "price": 1.50,
      "quantity": 10
    },
    {
      "id": "2",
      "name": "Farina",
      "price": 2.50,
      "quantity": 20
    },
    {
      "id": "3",
      "name": "Spaghetti",
      "price": 3.50,
      "quantity": 30
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      providers: [CartService, {provide: CartService, useFactory: () => spyOnClass(CartService)}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    
  });

  beforeEach(() => {
    cartService = TestBed.get(CartService);
    cartService.getCart.and.returnValue(p);
    cartService.getTotal.and.returnValue(7.50);

    fixture.detectChanges(); //Detect the changes on the DOM in runtime

  })
  

  it('should create', () => {
    
    expect(component).toBeTruthy();
  
  });

  

  it('should show button for buy product', () => {

    expect(fixture.nativeElement.querySelector('[data-test="buttonBuy"]')).toBeTruthy();
  
  });

  it('should show the order input field', () => {

    expect(fixture.nativeElement.querySelector('[data-test="phone"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="city"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="address"]')).toBeTruthy();

  });

  it('should show total price ', () => { 

    expect(fixture.nativeElement.querySelector('[data-test="total"]')).toBeTruthy();

  });

  it('should show total price details ', () => { 

    const cart = fixture.nativeElement.querySelectorAll('[data-test="cart"]');

    expect(fixture.nativeElement.querySelector('[data-test="total"]').innerText).toEqual("IL TOTALE E'" + ' 7.50 €');

  });

  it('should show product inside cart', () => {

    expect(fixture.nativeElement.querySelectorAll('[data-test="cart"]').length).toBe(3);

  });

  it('should show productCart details ', () => {

    const cart = fixture.nativeElement.querySelectorAll('[data-test="cart"]');

    for( var i = 0; i < cart.length; i++) {

    expect(cart[i].querySelector('[data-test="name"]').innerText).toEqual(p[i].name);
    expect(cart[i].querySelector('[data-test="price"]').innerText).toEqual(p[i].price.toString() + ' €');
    expect(cart[i].querySelector('[data-test="quantity"]').innerText).toEqual(p[i].quantity.toString());
    
  }

  });
/*
  it('should refresh the cart', () => {

    const c = (cartService.getCart).length;

    cartService.updateCart(mockProduct1);


    expect((c)).toBe(c + 1);
  
  });
*/




  



});
