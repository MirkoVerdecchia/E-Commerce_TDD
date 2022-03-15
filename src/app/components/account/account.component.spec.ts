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


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the order list box', () => {
    expect(fixture.nativeElement.querySelector('.orderList')).toBeTruthy();
  });

  it('should show the order list title', () => {
    expect(fixture.nativeElement.querySelector('.orderTitle')).toBeTruthy();
  });

});
