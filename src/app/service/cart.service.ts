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
            if (!this.duplicate.find(p => p.id === product.id)) {
              this.cart.push(product);
            }
            this.duplicate.push(product);
            this.total += product.price;

          });
      
    }


    //TESTED
    updateCart(p: IProduct): void {

        this.content.next(p);
    
    }


    //TESTED
    removeProduct(p: IProduct): void{
        
        const pos: number = this.cart.indexOf(p);
        if (pos !== -1) {
            this.cart.splice(pos,1);
            this.total -= p.price;
            if (!this.duplicate.includes(p)) {
                this.cart.slice(this.cart.indexOf(p), 1);
            }
        }

    }


    //TESTED DOM
    getTotal(){ 

        return this.total.toFixed(2);

    }


    //TESTED DOM
    getCart() : IProduct[]{

        // @TODO add a real HTTP call to get product from cart
        return this.cart;
    }


    getDuplicate() {

        return this.duplicate;

    }


    emptyCart(): boolean {

        return this.cart.length === 0; 

    }


    getNumberProduct(P: IProduct) {

    }


    //TESTED
    cleanCart(): void{
        this.cart = [];
    }






}