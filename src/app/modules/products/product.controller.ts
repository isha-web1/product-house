import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async(req : Request, res : Response) =>{

   try{
    const product = req.body

    // will call service function to send this data

    const result = await productServices.createProductIntoDb(product)

    // send response
    res.status(200).json({
        success : true,
        message : 'Product created successfully!',
        data : result
    })

   }catch(error){
    console.log(error)
   }
}

export const productController = {
    createProduct
}