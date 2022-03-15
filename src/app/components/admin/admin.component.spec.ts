import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { IProduct } from 'src/app/interface/product';
import { AccountService } from 'src/app/service/account.service';
import { DataService } from 'src/app/service/data.service';
import { AccountComponent } from '../account/account.component';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  const mockProduct: IProduct[] = [
    {
      id: '1',
      name: 'Sugar',
      price: 4.05,
      description: '',
    },
    {
      id: '2',
      name: 'Bread',
      price: 1.13,
      description: '',
    },
    {
      id: '3',
      name: 'Rice',
      price: 9.58,
      description: '',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
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
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'account', component: AccountComponent },
        ]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });

  //beforeEach with the mock obj passed to the mock method
  beforeEach(() => {
    dataService = TestBed.get(DataService);

    dataService.getProduct.and.returnValue(mockProduct);

    fixture.detectChanges(); //Detect the changes on the DOM in runtime
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

  it('should show the button to delete product from the list ', () => {
    expect(fixture.nativeElement.querySelector('.buttonDelete')).toBeTruthy();
  });

  it('should show the details input text to create a product ', () => {
    expect(fixture.nativeElement.querySelector('.nameI')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.priceI')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.descriptionI')).toBeTruthy();
  });

  it('should show the button to create a product', () => {
    expect(fixture.nativeElement.querySelector('.buttonCreate')).toBeTruthy();
  });

  it('should the button to create a product call createProduct()', () => {
    spyOn(component, 'createProduct');

    let button =
      fixture.debugElement.nativeElement.querySelector('.buttonCreate');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.createProduct).toHaveBeenCalled();
    });
  });

  it('should check the product data work', () => {
    var p1 = 'Sale';
    var c1 = 10.0;
    var a1 = 'Pacco di sale';

    var p2 = '';
    var c2 = -1;
    var a2 = '';
    expect(component.checkDataProduct(p1, c1, a1)).toBeTrue();
    expect(component.checkDataProduct(p2, c2, a2)).toBeFalse();
  });

  it('should show product to eliminate', () => {

    expect(fixture.nativeElement.querySelectorAll('[data-test="product"]').length).toBe(3);
  });

  it('should show product details to eliminate ', () => {
    const products = fixture.nativeElement.querySelectorAll('[data-test="product"]');

    for (var i = 0; i < products.length; i++) {
      expect(products[i].querySelector('.name').innerText).toEqual(mockProduct[i].name);
      expect(products[i].querySelector('.price').innerText).toEqual(mockProduct[i].price.toString() + ' €');
      expect(products[i].querySelector('.description').innerText).toEqual(mockProduct[i].description);
    }
  });
});
