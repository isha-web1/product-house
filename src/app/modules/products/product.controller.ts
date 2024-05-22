import { Request, Response } from "express";
// import {product} from './products.interface'
import { productServices } from "./product.service";

const createProduct = async(req : Request, res : Response) =>{

   try{
    const product = req.body.product;
    

    // will call service function to send this data

    const result = await productServices.createProductIntoDb(product)
    console.log(result)

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

// get all products
const getAllProducts = async(req: Request, res : Response) =>{
    try{
        const result = await productServices.getAllProductsFromDb()

        res.status(200).json({
            success : true,
            message : 'Products fetched successfully!',
            data : result
        })

    }catch(error){
        console.log(error)
    }
}
const getProductById = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params
      const result = await productServices.getSingleProductFromDb(productId)
      if (!result) {
        return res.status(401).json({
          success: false,
          message: 'Product not found',
          data: result,
        })
      }
      res.json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        data: error,
      })
    }
  }


  const updateProductInfo = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const updateData = req.body.product;
      console.log('updated', updateData);
      const result = await productServices.updateProductInfo(productId, updateData);
       
        if (!result) {
        return res.status(401).json({
          success: false,
          message: 'Product not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'Update Product Information successfully',
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductInfo
}