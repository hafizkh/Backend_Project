import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import Jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

import { NotFoundError, UnauthorizedError } from '../helpers/apiError'

const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body
  const foundUser = await User.findOne({ email: email })
  if (foundUser) {
    const checkPassword = await foundUser.comparePassword(password)
    if (checkPassword) {
      req.body = foundUser
      next()
    } else {
      next(new UnauthorizedError('Wrong Password. Please try again', 401))
    }
  } else {
    next(new NotFoundError(`User *${email}* not found`, 404))
  }
}
