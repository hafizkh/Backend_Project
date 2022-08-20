import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../helpers/apiError'
import User from '../models/User'
import Jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'
import { COOKIE_EXPIRE } from '../util/secrets'

// To Register for a User
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstname, lastname, username, email, password } = req.body
    const newUser = await User.create({
      firstname,
      lastname,
      username,
      email,
      password,
    })
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
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true,
  })
  return res.status(200).json({
    loginUser,
    Token: token,
  })
}

export default {
  registerUser,
  loginUser,
}
