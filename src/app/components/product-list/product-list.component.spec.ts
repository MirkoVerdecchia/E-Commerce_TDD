import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { DataService } from 'src/app/service/data.service';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  //let demoCart: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [
        { provide: DataService, useFactory: () => spyOnClass(DataService) }  //use this to provide a mocked version of the dataService instead of the real versione, this will allow me to mock his methods
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });


  beforeEach(() => {
    dataService = TestBed.get(DataService);

    dataService.getProduct$.and.returnValue(of([
        {
          "id": 1,
          "name": "Sugar",
          "price": "€4,05",
          "quantity": 16
        },
        {
          "id": 2,
          "name": "Bread",
          "price": "€1,13",
          "quantity": 60
        },
        {
          "id": 3,
          "name": "Rice",
          "price": "€9,58",
          "quantity": 10
        }
      ]));

    fixture.detectChanges();
  });


  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should show products', () => {
  
    expect(fixture.nativeElement.querySelectorAll('[data-test="product"]').length).toBe(3);
    
  });
  


  it('should show product details ', () => {
    fixture.detectChanges();

    const product = fixture.nativeElement.querySelector('[data-test="product"]');
    expect(product.querySelector('[data-test="name"]').innerText).toEqual('Sugar');
    expect(product.querySelector('[data-test="price"]').innerText).toEqual('€4,05');
    expect(product.querySelector('[data-test="quantity"]').innerText).toEqual('16');


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



  
});
