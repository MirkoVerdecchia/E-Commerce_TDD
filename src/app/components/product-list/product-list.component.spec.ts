import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { IProduct } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
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
      declarations: [ProductListComponent],
      providers: [
        { provide: DataService, useFactory: () => spyOnClass(DataService) }, //Use this to provide a mocked version of the dataService instead of the real versione, this will allow me to mock his methods
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
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

  it('should show products', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="product"]').length
    ).toBe(3);
  });

  it('should show add product to cart button', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="addButton"]')
    ).toBeTruthy();
  });

  it('should show product details ', () => {
    const products = fixture.nativeElement.querySelectorAll(
      '[data-test="product"]'
    );

    for (var i = 0; i < products.length; i++) {
      expect(products[i].querySelector('[data-test="name"]').innerText).toEqual(
        mockProduct[i].name
      );
      expect(
        products[i].querySelector('[data-test="price"]').innerText
      ).toEqual(mockProduct[i].price.toString());
      expect(
        products[i].querySelector('[data-test="description"]').innerText
      ).toEqual(mockProduct[i].description);
    }
  });

  it('should addProductToCart have been called in button Click', async () => {
    spyOn(component, 'addProductToCart');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.addProductToCart).toHaveBeenCalled();
    });
  });
});