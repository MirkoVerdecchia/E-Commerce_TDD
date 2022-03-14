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


});
