import { Request, Response } from "express";
import { orderService } from "./orders.service";
import { orderValidationSchema } from "./order.validation";

// create new order to DB
const createNewOrder = async(req: Request, res: Response) =>{
    try{
       
        // create zod validation through zod
        const zodParseData = orderValidationSchema.parse(req.body)
        const result = await orderService.createNewOrder(zodParseData)
         
        res.status(200).json({
            success : true,
            message : 'new order created successfully',
            data : result
        })
    }catch(error){
      console.log(error)
    }
}

// get all order to Db
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

  // Retrieve Orders by User Email

  // const getOrdersByEmail = async(req:Request, res:Response) =>{
  //   try{
  //      const orderEmail = req.query.email;
  //      if (!orderEmail) {
  //       const result = await orderService.getAllOrders();
  //       // console.log('first', result);
  //       // send response
  //       res.status(200).json({
  //         success: true,
  //         message: 'Orders fetched successfully!',
  //         data: result,
  //       });
  //     }else{
         
  //     const result = await orderService.getOrderByEmail(orderEmail);
  //     // console.log('return:', result);

  //     res.status(200).json({
  //       success: result.length === 0 ? false : true,
  //       message:
  //         result.length === 0
  //           ? 'Order not found'
  //           : 'Orders fetched successfully for user email!',
  //       data: result,
  //     });
    
  //     }
  //   }catch(err){

  //   }
  // }

export const orderController = {
    createNewOrder,
    getAllOrders
}