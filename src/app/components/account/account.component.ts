import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/interface/order';
import { AccountService } from 'src/app/service/account.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  public correntOrders: IOrder[] = [];

  constructor(
    private accountService: AccountService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.accountService.isAdmin()) {
      this.router.navigateByUrl('/admin');
    } else {
      this.dataService.fetchAllOrder().subscribe(
        (o) => (this.correntOrders = o),
        (error) => console.log(error)
      );      let o = this.dataService.getOrdersByUser(
        this.accountService.getUserEmail
      );
      this.correntOrders = o;
    }
  }

}
