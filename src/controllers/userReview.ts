import { Request, Response, NextFunction } from 'express'
import userReviewService from '../services/userReviewService'
import UserReview from '../models/UserReview'
import { BadRequestError } from '../helpers/apiError'

// To get all userReviews
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userReview = await userReviewService.findAll()
    res.status(200).json({
      success: true,
      'All User Reviews': userReview,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To get userReview by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userReview = await userReviewService.findById(req.params.id)
    res.status(200).json({
      success: true,
      'User Review': userReview,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
//Update user Review
const createUserReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reviewerId, rating, comment } = req.body

    const userReview = new UserReview({
      reviewerId,
      rating,
      comment,
    })
    await userReviewService.createOne(userReview)
    return res.status(201).json({
      Success: true,
      'New User Review': userReview,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// Create a new user Review
const updateUserReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userReviewId = req.params.id
    const updatedUserReview = await userReviewService.updateOne(
      userReviewId,
      update
    )
    res.json({
      success: true,
      message: 'Updated Review has been done',
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To delete user Review
const deleteUserReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const delReview = await userReviewService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Deleted Review has been done',
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
  findAll,
  findById,
  updateUserReview,
  deleteUserReview,
  createUserReview,
}
