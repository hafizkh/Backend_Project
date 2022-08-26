import { Router } from 'express'
import auth from '../middlewares/auth'
import productController from '../controllers/productController'

const productRoute = Router()

productRoute.post('', auth.verifyAdmin, productController.createProduct)
productRoute.get('', productController.getAllProducts)
productRoute.get('/:id', productController.getProduct)
productRoute.put('/:id', auth.verifyAdmin, productController.updatedProduct)
productRoute.delete('/:id', auth.verifyAdmin, productController.deletedProduct)

export default productRoute
