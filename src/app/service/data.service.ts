import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IOrder } from '../interface/order';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private urlProduct = 'http://localhost:3000/product';
  private urlOrder = 'http://localhost:3000/order';
  private products: IProduct[] = [];
  private orders: IOrder[] = [];

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {
    this.fetchAllProduct().subscribe(
      (data) => (this.products = data),
      (errore) => console.log(errore)
    );
  }

  fetchAllProduct(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(this.urlProduct, { responseType: 'json' })
      .pipe(
        tap((_) => console.log('fetchproduct')),
        catchError(this.handleError<IProduct[]>('error fetch product', []))
      );
  }

  fetchAllOrder(): Observable<IOrder[]> {
    return this.httpClient
      .get<IOrder[]>(this.urlOrder, { responseType: 'json' })
      .pipe(
        tap((_) => console.log('fetch order')),
        catchError(this.handleError<IOrder[]>('errore fetch ordini', []))
      );
  }

  deleteProduct(p: IProduct): Observable<IProduct> {
    return this.httpClient
      .delete<IProduct>(this.urlProduct + '/' + p.id, this.httpOptions)
      .pipe(
        tap((_) => console.log('delete product' + p.id)),
        catchError(this.handleError<IProduct>('error delete product'))
      );
  }

  postProduct(p: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(this.urlProduct, p, this.httpOptions)
      .pipe(catchError(this.handleError<IProduct>('postProduct')));
  }

  postOrder(order: IOrder): Observable<IOrder> {
    return this.httpClient
      .post<IOrder>(this.urlOrder, order, this.httpOptions)
      .pipe(catchError(this.handleError<IOrder>('postOrder')));
  }

  getOrders(): IOrder[] {
    return this.orders;
  }

  getOrdersByUser(cUser: string): IOrder[] {
    const o = this.orders.filter((o) => o.user == cUser);
    if (o) {
    }
    return o;
  }

  getProduct(): IProduct[] {
    return this.products;
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
