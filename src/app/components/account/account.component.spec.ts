import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { AccountService } from 'src/app/service/account.service';

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
        HttpClient,
        HttpHandler
      ],
      imports: [RouterTestingModule],

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show order list box', () => {
    expect(fixture.nativeElement.querySelector('.orderList')).toBeTruthy();
  });

  it('should show order list title', () => {
    expect(fixture.nativeElement.querySelector('.orderTitle')).toBeTruthy();
  });

});
