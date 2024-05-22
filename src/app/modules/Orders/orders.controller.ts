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

export const orderController = {
    createNewOrder
}