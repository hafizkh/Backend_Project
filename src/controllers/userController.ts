import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../helpers/apiError'
import Jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'
import userService from '../services/userService'
import User from '../models/User'

// To Register for a User
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstname, lastname, username, email, password, role } = req.body
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password,
      role,
    })
    await userService.createOne(newUser)
    return res.status(201).json({
      Success: true,
      'New User': newUser,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
//To login user
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = Jwt.sign(JSON.stringify(req.body), JWT_SECRET, {
    algorithm: 'HS256',
  })
  res.cookie('usercookie', token, {
    expires: new Date(Date.now() + 9000000),
    httpOnly: true,
  })
  return res.status(200).json({
    loginUser,
    Token: token,
  })
}
// To logout user
const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
  res.cookie('usercookie', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  })
  res.status(200).json({
    success: true,
    message: 'Logout Successfully',
  })
}
// To get single user
const getUserDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.findById(req.params.id)
    res.status(200).json({
      success: true,
      User: user,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To get all users
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.findAll()
    res.status(200).json({
      success: true,
      'All Users': user,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To delete USer
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const delUser = await userService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      'Deleted User': delUser,
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// To update userProfile
const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const upUser = await userService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      'Updated User': upUser,
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
  registerUser,
  loginUser,
  logoutUser,
  getUserDetail,
  deleteUser,
  getAllUsers,
  updateProfile,
}
