import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'product-list', component: ProductListComponent},
{path: 'order', component: OrderComponent},
{path: 'admin', component: AdminComponent},
{path: 'account', component: AccountComponent},
{path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
