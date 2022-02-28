import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppPage } from 'e2e/src/app.po';
import { spyOnClass } from 'jasmine-es6-spies';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let cartService: jasmine.SpyObj<CartService>;


  const mockProduct: IProduct[] = [
    {
      "id": "1",
      "name": "Sugar",
      "price": 4.05,
      "quantity": 16
    },
    {
      "id": "2",
      "name": "Bread",
      "price": 1.13,
      "quantity": 60
    },
    {
      "id": "3",
      "name": "Rice",
      "price": 9.58,
      "quantity": 10
    }];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [
        { provide: DataService, useFactory: () => spyOnClass(DataService) }, //Use this to provide a mocked version of the dataService instead of the real versione, this will allow me to mock his methods
        { provide: CartService, useFactory: () => spyOnClass(CartService) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });


  //beforeEach with the mock obj passed to the mock method
  beforeEach(() => {
    dataService = TestBed.get(DataService);

    dataService.getProduct.and.returnValue((mockProduct));

    fixture.detectChanges(); //Detect the changes on the DOM in runtime
  });


  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should show products', () => {
  
    expect(fixture.nativeElement.querySelectorAll('[data-test="product"]').length).toBe(3);
    
  });

  it('should show add product to cart button', () => {

    expect(fixture.nativeElement.querySelector('[data-test="addButton"]')).toBeTruthy();

  })
  

it('should show product details ', () => {

  const products = fixture.nativeElement.querySelectorAll('[data-test="product"]');

  for( var i = 0; i < products.length; i++) {

    expect(products[i].querySelector('[data-test="name"]').innerText).toEqual(mockProduct[i].name);
    expect(products[i].querySelector('[data-test="price"]').innerText).toEqual(mockProduct[i].price.toString());
    expect(products[i].querySelector('[data-test="quantity"]').innerText).toEqual(mockProduct[i].quantity.toString());
    
  }


});





});


/*
  it('should show list title "listino"', () => {
    expect(fixture.nativeElement.querySelector('[data-test="product_list"]')).toBeTruthy();
  });


  it('should show the listBox ', () => {
    expect(fixture.nativeElement.querySelector('[id="ss_elem_list"]')).toBeTruthy();
  });


  it('should show the intestatio of the product details ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="thead"]')).toBeTruthy();
  });
*/