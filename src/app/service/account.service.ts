import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private isLoggedIn = false;
  private correntUser: string = '';
  private admin = true;
  private users: IUser[] = [];
  private urlAccount = 'http://localhost:3000/account';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  ngOnInit(): void {}

  constructor(private httpClient: HttpClient, private router: Router) {
    this.fetchAllUser().subscribe(
      (data) => (this.users = data),
      (error) => console.log(error)
    );
  }

  fetchAllUser(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(this.urlAccount, { responseType: 'json' })
      .pipe(
        tap((_) => console.log('fetchAccount')),
        catchError(this.handleError<IUser[]>('error fetch account', []))
      );
  }

  public getUser(): IUser[] {
    return this.users;
  }

  logIn(email: string, password: string) {
    const user = this.users.find(
      (u) => u.email == email && u.password == password
    );
    if (user) {
      if (!this.isLoggedIn) {
        this.correntUser = email;
        this.isLoggedIn = true;

        if (email !== 'admin@gmail.it') {
          this.router.navigateByUrl('/account');
          this.admin = false;
        } else {
          this.router.navigateByUrl('/admin');
          this.admin = true;
        }
      } else {
        alert("SEI GIA' AUTENTICATO");
      }
    } else
      alert(
        "NON SEI ANCORA REGISTRATO, PER ENTRARE NELL'AREA UTENTI REGISTRATI"
      );
  }

  async logOut() {}

  isAdmin(): boolean {
    return this.admin;
  }

  isLogged(): boolean {
    return this.isLoggedIn;
  }

  public get getUserEmail(): string {
    return this.correntUser;
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
