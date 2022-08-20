import { Router } from 'express'
import productController from '../controllers/productController'

const productRoute = Router()

// Create a new Product(Admin Route)
productRoute.post('/product/new', productController.createProduct)
productRoute.get('/products', productController.getAllProducts)
productRoute.get('/product/:id', productController.getProduct)
productRoute.put('/product/:id', productController.updatedProduct)
productRoute.delete('/product/:id', productController.deletedProduct)

export default productRoute
