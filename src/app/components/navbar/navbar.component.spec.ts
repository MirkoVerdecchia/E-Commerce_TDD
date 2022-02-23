import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
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
    expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy();
  });


  it('should show product-list button link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="product-list"]')).toBeTruthy();
  });


  it('should show order button link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="order"]')).toBeTruthy();
  });


});
