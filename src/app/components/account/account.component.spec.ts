import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { IOrder } from 'src/app/interface/order';
import { AccountService } from 'src/app/service/account.service';
import { DataService } from 'src/app/service/data.service';
import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  const orders: IOrder[] = [
    {
      id: '1',
      user: 'user@gmail.it',
      phone: '3921899677',
      city: 'Roma',
      address: 'Via Dante Alighieri',
      total: 1.5,
      products: [
        {
          id: '1',
          name: 'Pasta',
          price: 1.5,
          description: 'Pacco di pasta',
        },
      ],
      date: '7/3/2022',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountComponent],
      providers: [
        {
          provide: AccountService,
          useFactory: () => spyOnClass(AccountService),
        },
        {
          provide: DataService,
          useFactory: () => spyOnClass(DataService),
        },
        HttpClient,
        HttpHandler,
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
  });

  //beforeEach with the mock obj passed to the mock method
  beforeEach(() => {
    dataService = TestBed.get(DataService);

    dataService.getOrdersByUser.and.returnValue(orders);

    fixture.detectChanges(); //Detect the changes on the DOM in runtime
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the order list box', () => {
    expect(fixture.nativeElement.querySelector('.orderList')).toBeTruthy();
  });

  it('should show the order list title', () => {
    expect(fixture.nativeElement.querySelector('.orderTitle')).toBeTruthy();
  });

  it('should show order', () => {
    expect(
      fixture.nativeElement.querySelectorAll('.orders').length
    ).toBe(1);
  });

  // it('should show the order details', () => {
  //   const o = fixture.nativeElement.querySelectorAll('.orders');
  //   for (var i = 0; i < o.length; i++) {
  //     expect(o[i].querySelector('.id').innerText).toEqual(orders[i].id);
  //     expect(o[i].querySelector('.total').innerText).toEqual(orders[i].total);
  //     expect(o[i].querySelector('.date').innerText).toEqual(orders[i].date);
  //     expect(o[i].querySelector('.numberP').innerText).toEqual(
  //       orders[i].products
  //     );
  //   }
  // });

});
