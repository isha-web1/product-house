import { Schema, model, connect } from 'mongoose';

export type OrdersT = {
    email : string;
    productId : string;
    price : number;
    quantity : number
}