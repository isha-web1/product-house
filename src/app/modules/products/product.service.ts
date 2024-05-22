import { ProductModel } from "../products.model";
import { ProductT } from "./products.interface";


// POST all product to DB

const createProductIntoDb = async(product : ProductT) =>{

   const result = await ProductModel.create(product)
   return result

}

// get all product from DB

const getAllProductsFromDb = async()=>{
    const result = await ProductModel.find();
    return result
}

// get single product through id
const getSingleProductFromDb = async(id : string)=>{
    const result = await ProductModel.findById(id)
    return result
}

// Update Product Information through id

const updateProductInfo = async(id:string, updateData : Partial<ProductT>)=>{
    const result = await ProductModel.findByIdAndUpdate({_id:id},updateData,{new:true});
    return result;
}

export const productServices ={
    createProductIntoDb,
    getAllProductsFromDb,
    getSingleProductFromDb,
    updateProductInfo
}