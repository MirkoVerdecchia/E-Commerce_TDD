import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
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
    expect(
      fixture.nativeElement.querySelector('[data-test="email"]')
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('[data-test="password"]')
    ).toBeTruthy();
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
