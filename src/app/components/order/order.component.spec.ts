import { CastExpr } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/service/cart.service';

import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  //let cartService: CartService;
  //let td: HTMLElement; // help me to get the value of the text content present in the 'td' element  
  //let demoCart: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      providers: [/*CartService*/]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    //cartService = TestBed.get(CartService);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    //td = fixture.nativeElement.querySelector('td');

    

    // code for jasmine.createSpyObj

    /*demoCart = jasmine.createSpyObj('demoCart',
    [
      {
      "id": 1,
      "name": "test1",
      "price": 100,
      "quantity": 1,
      },
      {
      "id": 2,
      "name": "test2",
      "price": 200,
      "quantity": 2,
      }
    ]);
    //demoCart.removeFromCart();
    demoCart.getTotal();
    */
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('[spyOn] should chek getCart is called in order.component.html', () => {
    let mockSpy = spyOn(cartService,'getTotal')
    component.ngOnInit();
    expect(mockSpy).toHaveBeenCalled();
  });
  */

  /*it('should assert value for "td" element to be value of componenet.product ',() => {
    const productMock = {
      "name": "test",
      "price": 100,
      "quantity": 1
    }
    let cartSpy = spyOn(cartService, 'getSingle');
    fixture.detectChanges();
    expect(td.textContent).toEqual('test');

 
  });
  */


  it('should show list title "carrello"', () => {
    expect(fixture.nativeElement.querySelector('[data-test="carrello"]')).toBeTruthy();
  });


  it('should show list box area', () => {
    expect(fixture.nativeElement.querySelector('[data-test="listBox"]')).toBeTruthy();
  });


  it('should show button for buy product', () => {
    expect(fixture.nativeElement.querySelector('[data-test="buttonBuy"]')).toBeTruthy();
  });


  it('should show button for buy product', () => {
    expect(fixture.nativeElement.querySelector('[data-test="buttonBuy"]')).toBeTruthy();
  });

});
