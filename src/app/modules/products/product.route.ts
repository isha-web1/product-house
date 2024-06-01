import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

// will call controller function
router.post('/', productController.createProduct)

router.get('/', productController.getAllProducts)

router.get('/:productId', productController.getProductById)

router.put('/:productId', productController.updateProductInfo)

router.delete('/:productId', productController.deleteProductFromDB)

router.get('/', productController.SearchProduct)

export const productRoutes = router;