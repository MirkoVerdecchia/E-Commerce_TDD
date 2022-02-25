import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { IProduct } from "../interface/product";

@Injectable({
    providedIn: 'root'
})

export class CartService{

    private content = new Subject<IProduct>();
    private total: number = 0;
    private single: IProduct[] = [];
    private duplicate : IProduct[] = [];
    private cart: IProduct[] = [];

    cosntructor() {

    }


    updateCart(p: IProduct) {
        
        return this.single;
    }


    

    removeProduct(p: IProduct){

    }


    getTotal(){

    }


    getSingle() : IProduct[]{
        
        // @TODO add a real HTTP call to get product from cart
        return this.single;
    }


    getDuplicate() {

    }


    emptyCart() {

    }


    getNumberProduct(P: IProduct) {

    }


    cleanCart(){

    }






}