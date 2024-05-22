import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/products/product.route'
const app : Application = express()


// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/products/api', productRoutes)

const getAController = (req : Request , res : Response) => {
    res.send('Hello World!')
  }

app.get('/', getAController)

export default app;



