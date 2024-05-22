import { orderModel } from "../orders.model";
import { OrdersT } from "./orders.interface";



const createNewOrder = async(order : OrdersT) =>{
  const result =  await orderModel.create(order)
  return result;
}

export const orderService = {
    createNewOrder
}