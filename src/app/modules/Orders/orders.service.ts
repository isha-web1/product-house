import { orderModel } from "../orders.model";
import { OrdersT } from "./orders.interface";


// Create a New Order
const createNewOrder = async(order : OrdersT) =>{
  const result =  await orderModel.create(order)
  return result;
}
// Retrieve All Orders
const getAllOrders = async (email: unknown) => {
    if (typeof email === 'string') {
      const result = await orderModel.find({ email })
      return result
    }
    const result = await orderModel.find()
    return result
  }

  // Retrieve Orders by User Email

  const getOrdersByEmail = async(email: unknown) =>{
    const result = await orderModel.find({ email });
    return result;
  }

export const orderService = {
    createNewOrder,
    getAllOrders,
    getOrdersByEmail
}