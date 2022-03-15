import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/service/cart.service';
import { spyOnClass } from 'jasmine-es6-spies';
import { OrderComponent } from './order.component';
import { IProduct } from 'src/app/interface/product';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let cartService: jasmine.SpyObj<CartService>;

  const p: IProduct[] = [
    {
      id: '1',
      name: 'Pane',
      price: 1.5,
      description: '',
    },
    {
      id: '2',
      name: 'Farina',
      price: 2.5,
      description: '',
    },
    {
      id: '3',
      name: 'Spaghetti',
      price: 3.5,
      description: '',
    },
  ];

  const totOfP = (p[0].price + p[1].price + p[2].price).toFixed(2);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderComponent],
      providers: [
        CartService,
        { provide: CartService, useFactory: () => spyOnClass(CartService) },
        HttpClient,
        HttpHandler,
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginComponent },
        ]),
      ],
    }).compileComponents();
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show button for buy product', () => {
    expect(fixture.nativeElement.querySelector('.buttonBuy')).toBeTruthy();
  });

  it('should show button for delete product from the cart', () => {
    expect(fixture.nativeElement.querySelector('.removeButton')).toBeTruthy();
  });

  it('should show the order input text field', () => {
    expect(fixture.nativeElement.querySelector('.phone')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.city')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.address')).toBeTruthy();
  });

  it('should show total price details ', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="total"]').innerText
    ).toContain(' 7.50 €');
  });

  it('should show product inside cart', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="cart"]').length
    ).toBe(3);
  });

  it('should show productCart details ', () => {
    const cart = fixture.nativeElement.querySelectorAll('[data-test="cart"]');

    for (var i = 0; i < cart.length; i++) {
      expect(cart[i].querySelector('[data-test="name"]').innerText).toEqual(
        p[i].name
      );
      expect(cart[i].querySelector('[data-test="price"]').innerText).toEqual(
        p[i].price.toString() + ' €'
      );
      expect(cart[i].querySelector('[data-test="quantity"]').innerText).toEqual(
        p[i].description
      );
    }
  });

  it('should makeOrder() have been called in button Click', async () => {
    spyOn(component, 'makeOrder');

    let button = fixture.debugElement.nativeElement.querySelector('.buttonBuy');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.makeOrder).toHaveBeenCalled();
    });
  });

  it('should removeFromCart() have been called in button Click', async () => {
    spyOn(component, 'removeFromCart');

    let button =
      fixture.debugElement.nativeElement.querySelector('.removeButton');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.removeFromCart).toHaveBeenCalled();
    });
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

  it('should checkAddressData() have been called in makeOrder() ', () => {
    spyOn(component, 'checkAddressData');

    component.makeOrder('3921899677', 'Roma', 'Via Roma');

    expect(component.checkAddressData).toHaveBeenCalled();
  });

  it('should sendOrder() have been called in makeOrder() ', () => {
    spyOn(component, 'sendOrder');

    component.makeOrder('3921899677', 'Roma', 'Via Roma');

    expect(component.sendOrder).toHaveBeenCalled();
  });

});
