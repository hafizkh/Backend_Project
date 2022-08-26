import { Router } from 'express'
import auth from '../middlewares/auth'
import cartController from '../controllers/cartController'
import authenticateUser from '../middlewares/userMiddleware'

const orderRoute = Router()

orderRoute.post('', auth.verifyAdmin, cartController.createOrder)
orderRoute.get('/', cartController.getAllProducts)
orderRoute.get('/:id', cartController.getProduct)
orderRoute.put('/:id', auth.verifyAdmin, cartController.updatedOrder)
orderRoute.delete('/:id', auth.verifyAdmin, cartController.deletedOrder)

export default orderRoute
