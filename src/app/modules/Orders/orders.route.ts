import express from 'express';
import { orderController } from './orders.controller';

const router = express.Router();

router.post('/', orderController.createNewOrder);
router.get('/', orderController.getAllOrders);

export const OrderRoutes = router;
