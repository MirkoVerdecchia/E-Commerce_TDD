import { IProduct } from "./product"

export interface IOrder {
    ID: string;
    user: string;
    phone: string;
    city: string;
    address: string;
    total: number;
    products: IProduct[];
    date: string;
}