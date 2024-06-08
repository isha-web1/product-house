import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/product.route';
import { OrderRoutes } from './app/modules/Orders/orders.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', productRoutes);
app.use('/api/orders', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!!');
};

app.get('/', getAController);

export default app;
