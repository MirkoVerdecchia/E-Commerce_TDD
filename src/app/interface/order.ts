import { IProduct } from "./product"

export interface IOrder {
    id: string;
    phone: string;
    city: string;
    address: string;
    total: number;
    products: IProduct[];
    date: string;
}