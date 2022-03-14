import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show home button link', () => {
    expect(fixture.nativeElement.querySelector('.button1')).toBeTruthy();
  });

  it('should show product-list button link', () => {
    expect(fixture.nativeElement.querySelector('.button2')).toBeTruthy();
  });

  it('should show order button link', () => {
    expect(fixture.nativeElement.querySelector('.button3')).toBeTruthy();
  });

  it('should show login button link', () => {
    expect(fixture.nativeElement.querySelector('.button4')).toBeTruthy();
  });

  it('should show logOut button link', () => {
    expect(fixture.nativeElement.querySelector('.buttonLogout')).toBeTruthy();
  });

  it('should logOut button call logOut()', () => {
    let spy = spyOn(component, 'logOut');

    let button =
      fixture.debugElement.nativeElement.querySelector('.buttonLogout');
    button.click();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should show account button link', () => {
    expect(fixture.nativeElement.querySelector('.buttonAccount')).toBeTruthy();
  });
});
