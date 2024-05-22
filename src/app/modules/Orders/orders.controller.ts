import { Request, Response } from "express";
import { orderService } from "./orders.service";


const createNewOrder = async(req: Request, res: Response) =>{
    try{
        const {order} = req.body
        const result = await orderService.createNewOrder(order)
         
        res.status(200).json({
            success : true,
            message : 'new order created successfully',
            data : result
        })
    }catch(error){
      console.log(error)
    }
}


const getAllOrders = async (req: Request, res: Response) => {
    try {
      const { email } = req.query
      const result = await orderService.getAllOrders(email)
      if (email) {
        if (!result) {
          return res.status(500).json({
            success: false,
            message: 'Order not found',
          })
        } else {
          if (result.length === 0) {
            return res.json({
              success: false,
              message: 'no order found for this user email!',
              data: result,
            })
          }
          return res.json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: result,
          })
        }
      }
  
      res.json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        data: err,
      })
    }
  }

export const orderController = {
    createNewOrder,
    getAllOrders
}