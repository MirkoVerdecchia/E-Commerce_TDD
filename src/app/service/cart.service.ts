import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { IProduct } from "../interface/product";

@Injectable({
    providedIn: 'root'
})

export class CartService{

    private content = new Subject<IProduct>();
    public share = this.content.asObservable();
    private total: number = 0;
    public cart: IProduct[] = [];
    private duplicate : IProduct[] = [];

    constructor() {

        this.share.subscribe(product => {
            if (!this.cart.find(p => p.id === product.id)) {
              this.cart.push(product);
            }
            this.total += product.price;

          });
      
    }


    updateCart(p: IProduct) {
    //this.content.next(p);
    //this.cart.push(p);
    }


    

    removeProduct(p: IProduct){

    }


    getTotal(){ 

        return this.total.toFixed(2);

    }


    getCart() : IProduct[]{

        // @TODO add a real HTTP call to get product from cart
        return this.cart;
    }


    getDuplicate() {

    }


    emptyCart()/*: boolean*/ {

        //return this.cart.length === 0; 

    }


    getNumberProduct(P: IProduct) {

    }


    cleanCart(): void{
        this.cart = [];
    }






}