import { orderModel } from "../orders.model";
import { OrdersT } from "./orders.interface";



const createNewOrder = async(order : OrdersT) =>{
  const result =  await orderModel.create(order)
  return result;
}

const getAllOrders = async (email: unknown) => {
    if (typeof email === 'string') {
      const result = await orderModel.find({ email })
      return result
    }
    const result = await orderModel.find()
    return result
  }

export const orderService = {
    createNewOrder,
    getAllOrders
}