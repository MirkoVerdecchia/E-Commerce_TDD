import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public users: IUser[] = [];

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.accountService.getUser();

    if (this.accountService.isLogged()) {
       this.router.navigateByUrl('account');
    }
  }

  logIn(email: string, password: string) {
    this.accountService.logIn(email, password);
  }
}
