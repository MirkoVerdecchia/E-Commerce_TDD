import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { AccountService } from 'src/app/service/account.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: AccountService,
          useFactory: () => spyOnClass(AccountService),
        },
        HttpClient,
        HttpHandler,
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login input text field', () => {
    expect(fixture.nativeElement.querySelector('.email')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.password')).toBeTruthy();
  });

  it('should show login button', () => {
    expect(fixture.nativeElement.querySelector('.buttonLog')).toBeTruthy();
  });

  it('should the login button call login() method', () => {
    spyOn(component, 'logIn');

    let button = fixture.debugElement.nativeElement.querySelector('.buttonLog');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.logIn).toHaveBeenCalled();
    });
  });
});
