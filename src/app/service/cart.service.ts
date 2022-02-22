import { Injectable } from "@angular/core";
import { IProduct } from "../interface/product";

@Injectable({
    providedIn: 'root'
})


export class CartService{

    private total: number = 0;
    private single: IProduct[] = [];
    private Duplicate : IProduct[] = [];

    cosntructor() {

    }



    removeProduct(p: IProduct){

    }


    getTotal(){

    }


    getSingle(){

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