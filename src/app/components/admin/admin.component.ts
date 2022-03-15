import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { AccountService } from 'src/app/service/account.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(
    private accountService: AccountService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.dataService.getProduct();

    if (!this.accountService.isAdmin()) {
      this.router.navigateByUrl('account');
    }
  }

  public deleteProduct(product: IProduct): void {
    this.dataService.deleteProduct(product).subscribe(
      () => console.log('Prodotto ' + product.id + ' eliminato'),
      (error) => console.log(error)
    );
  }

  public createProduct( name: string, price: string, description: string ): void {
    var p: number =+ price;
    if (this.checkDataProduct(name, p, description)) {
      let product: IProduct = { id: '', name: name, price: p, description: description};
      this.dataService.postProduct(product).subscribe(() => console.log('Prodotto inserito'), error => console.log(error))
    }
  }

  public checkDataProduct( name: string, price: number, description: string ): boolean {
    if (name.length <= 1) {
      console.log('inserisci un numero corretto');
      return false;
    }
    if (price < 0) {
      console.log('Inserisci un prezzo corretto');
      return false;
    }
    if (description.length <= 10) {
      console.log('Inserisci almeno 10 caratteri di descrizione');
      return false;
    }
    return true;
  }
}
