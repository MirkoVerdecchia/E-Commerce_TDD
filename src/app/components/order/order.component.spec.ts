import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/service/cart.service';
import { spyOnClass } from 'jasmine-es6-spies';
import { OrderComponent } from './order.component';
import { IProduct } from 'src/app/interface/product';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let cartService: jasmine.SpyObj<CartService>;
  let mySpy;

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

  const totOfP = (p[0].price + p[1].price + p[2].price).toFixed(2);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderComponent],
      providers: [CartService, { provide: CartService, useFactory: () => spyOnClass(CartService) }]
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
    cartService.getTotal.and.returnValue(totOfP);

    fixture.detectChanges(); //Detect the changes on the DOM in runtime

  })


  it('should create', () => {

    expect(component).toBeTruthy();

  });



  it('should show button for buy product', () => {

    expect(fixture.nativeElement.querySelector('[data-test="buttonBuy"]')).toBeTruthy();

  });

  it('should show the order input text field', () => {

    expect(fixture.nativeElement.querySelector('[data-test="phone"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="city"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="address"]')).toBeTruthy();

  });

  it('should show total price details ', () => {     

    expect(fixture.nativeElement.querySelector('[data-test="total"]').innerText).toContain(' 7.50 €');

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


  it('should makeOrder have been called in button Click', async () => {
    spyOn(component, 'makeOrder')

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.makeOrder).toHaveBeenCalled();
    });
  });


  it('should make the order', () => {
    

    
  });

  it('should check the address data', () => {

    var p1 = '0123456789';
    var c1 = 'Roma';
    var a1 = 'Via Trieste 1';

    var p2 = '012345678910';
    var c2 = '';
    var a2 = '';    
    expect(component.checkAddressData(p1, c1, a1)).toBeTrue();
    expect(component.checkAddressData(p2, c2, a2)).toBeFalse();


  });


  it('should sendOrder() and checkAddressData() have been called in makeOrder() ', () => {
    spyOn(component, 'checkAddressData')
    spyOn(component, 'sendOrder')
    
    component.makeOrder('','','');

    expect(component.checkAddressData).toHaveBeenCalled();
    expect(component.sendOrder).toHaveBeenCalled();
  });
});


