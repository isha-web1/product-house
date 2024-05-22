import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

// will call controller function
router.post('/products', productController.createProduct)

export const productRoutes = router;