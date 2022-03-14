import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { AccountService } from 'src/app/service/account.service';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
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
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the table title', () => {
    expect(fixture.nativeElement.querySelector('.tableTitle')).toBeTruthy();
  });

  it('should show the deletable products ', () => {
    expect(fixture.nativeElement.querySelector('.listBox')).toBeTruthy();
  });

  it('should show the details input text to create a product ', () => {
    expect(fixture.nativeElement.querySelector('.name')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.price')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.description')).toBeTruthy();
  });

  it('should show the button to create a product', () => {
    expect(fixture.nativeElement.querySelector('.buttonCreate')).toBeTruthy();
  });

  it('should the button to create a product call createProduct()', () => {
    let spy = spyOn(component, 'createProduct');

    let button = fixture.debugElement.nativeElement.querySelector('.buttonCreate');
    button.click();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should check the product data work', () => {
    var p1 = 'Sale';
    var c1 = 10.00;
    var a1 = 'Pacco di sale';

    var p2 = '';
    var c2 = -1;
    var a2 = '';
    expect(component.checkDataProduct(p1, c1, a1)).toBeTrue();
    expect(component.checkDataProduct(p2, c2, a2)).toBeFalse();

  });

});
