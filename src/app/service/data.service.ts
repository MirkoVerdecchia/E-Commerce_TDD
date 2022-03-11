import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private urlProduct = 'http://localhost:3000/product';
  private product : IProduct[] = []

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private httpClient: HttpClient) { 
    this.fetchAllProduct().subscribe(data => this.product = data, errore => console.log(errore));

  }

  fetchAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.urlProduct, {responseType: "json"}).pipe(
      tap((_) => console.log('fetchproduct')),
      catchError(this.handleError<IProduct[]>("error fetch product", []))
    );
  }

  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getProduct(): IProduct[] {

    //@todo add a real http call to get products.
    return this.product;

  }
  

}
