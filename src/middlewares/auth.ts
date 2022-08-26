import { Request, Response, NextFunction } from 'express'
import { ForbiddenError, NotFoundError } from '../helpers/apiError'
import Jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies
  if (!token) {
    return next(new Error('Please login to access'))
  }
  const decodedData = Jwt.verify(token, JWT_SECRET)

  if (decodedData) {
    console.log('Decoded', decodedData)
    return res.json(decodedData)
  } else {
    throw new NotFoundError()
  }
}

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization || ''
    const token = auth.split(' ')[1]
    const user = Jwt.verify(token, JWT_SECRET)
    // console.log("USer",user)
    next()
  } catch (error) {
    console.log('error:', error)
    throw new ForbiddenError('You are not authorized to view this content')
  }
}
export default {
  isAuth,
  verifyAdmin,
}
