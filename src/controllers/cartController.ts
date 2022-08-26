import { NextFunction, Request, Response } from 'express'
import cartService from '../services/cartService'
import { BadRequestError } from '../helpers/apiError'
import Cart from '../models/Cart'

// To Create an Order
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, productId, quantity, status } = req.body
    const newOrder = new Cart({ userId, productId, quantity, status })
    await cartService.createOne(newOrder)
    res.status(201).json({
      success: true,
      'Order Created': newOrder,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To get all the Orders from Cart
const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allOrders = await cartService.findAll()
    res.status(200).json({
      success: true,
      'All Order': allOrders,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
//To get single Order
const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await cartService.findById(req.params.id)
    res.status(200).json({
      success: true,
      Order: order,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To Update the Order
const updatedOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const upOrder = await cartService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      'Updated Order': upOrder,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To delete the Order
const deletedOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const delOrder = await cartService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      'Deleted Order': delOrder,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
export default {
  createOrder,
  getAllProducts,
  getProduct,
  deletedOrder,
  updatedOrder,
}
