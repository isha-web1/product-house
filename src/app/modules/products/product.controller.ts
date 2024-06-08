import { Request, Response } from 'express';
// import {product} from './products.interface'
import { productServices } from './product.service';
import ProductValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod

    const zodParseData = ProductValidationSchema.parse(req.body);

    // will call service function to send this data

    const result = await productServices.createProductIntoDb(zodParseData);
    console.log(result);

    // send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsFromDb();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// get product from Db through Id
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDb(productId);
    if (!result) {
      return res.status(401).json({
        success: false,
        message: 'Product not found',
        data: result,
      });
    }
    res.json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: error,
    });
  }
};

// update product information
const updateProductInfo = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body.product;
    console.log('updated', updateData);
    const result = await productServices.updateProductInfo(
      productId,
      updateData,
    );

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

// Delete product from Db
const deleteProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// Search a product
const SearchProduct = async (req: Request, res: Response) => {
  try {
    const SearchItem = req.query.searchTerm;
    if (!SearchItem) {
      const result = await productServices.getAllProductsFromDb();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    } else {
      const result = await productServices.searchProductFromDB(SearchItem);
      res.status(200).json({
        success: true,
        message: ` search term '${SearchItem}' fetched successfully!`,
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductInfo,
  deleteProductFromDB,
  SearchProduct,
};
