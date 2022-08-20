import { NextFunction, query, Request, Response } from 'express'
import { BadRequestError } from '../helpers/apiError'
import Product from '../models/Product'

// To Create a product by the admin
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await Product.create(req.body))
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
    res.json(
      await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    )
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
    res.json(await Product.find())
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
    res.json(await Product.findById(req.params.id))
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
    await Product.findByIdAndDelete(req.params.id)
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
