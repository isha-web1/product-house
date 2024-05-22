import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

// will call controller function
router.post('/products', productController.createProduct)

router.get('/products', productController.getAllProducts)

router.get('/:productId', productController.getProductById)

export const productRoutes = router;