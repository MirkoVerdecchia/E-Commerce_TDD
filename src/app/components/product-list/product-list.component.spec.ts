import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let demoCart: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    demoCart = jasmine.createSpyObj('demoCart',
    [
      {
      "id": 1,
      "name": "test1",
      "price": 100,
      "quantity": 1,
      },
      {
      "id": 2,
      "name": "test2",
      "price": 200,
      "quantity": 2,
      }
    ]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show list title "listino"', () => {
    expect(fixture.nativeElement.querySelector('[data-test="product-list"]')).toBeTruthy();
  });


  it('should show the listBox ', () => {
    expect(fixture.nativeElement.querySelector('[id="ss_elem_list"]')).toBeTruthy();
  });


  it('should show the thead ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="productDetails"]')).toBeTruthy();
  });

/*
  it('should show product details ', () => {
    const product = fixture.nativeElement.querySelector('[data-test="product"]');
    expect(product.querySelector('[data.test="title"]').innerText).toEqual('test1')
  });
*/
  
});
