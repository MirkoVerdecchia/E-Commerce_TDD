import { CastExpr } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/service/cart.service';

import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let cartService: CartService;
  let td: HTMLElement; // help me to get the value of the text content present in the 'td' element  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      providers: [CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    cartService = TestBed.get(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    td = fixture.nativeElement.querySelector('td');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert value for "td" element to be value of componenet.product ',() => {
    let p = component.getCart();
    fixture.detectChanges();
    expect(td.textContent).toBe('test');


  });


});
