import { Schema, model } from "mongoose";
import { OrdersT } from "./Orders/orders.interface";


const orderSchema = new Schema<OrdersT>({
    email: { type: String, required: true, trim: true },
    productId: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  });

  export const orderModel = model<OrdersT>("Order", orderSchema) 