import { NextFunction, Request, Response } from 'express'
import productServices from '../services/productServices'
import { BadRequestError } from '../helpers/apiError'
import Product from '../models/Product'

// To Create a product by the admin
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price, images, category } = req.body
    const newProduct = new Product({ name, price, images, category })
    await productServices.createOne(newProduct)
    res.status(201).json({
      success: true,
      'New Product': newProduct,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To Update the product by the admin
const updatedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await productServices.updateOne(req.params.id, req.body))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To get all the products
const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await productServices.findAll(0, 5, 'category'))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
//To get single Product
const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await productServices.findById(req.params.id))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To delete the product
const deletedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await productServices.deleteOne(req.params.id)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export default {
  getAllProducts,
  getProduct,
  createProduct,
  updatedProduct,
  deletedProduct,
}
