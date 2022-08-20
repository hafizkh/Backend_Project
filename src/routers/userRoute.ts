import { Router } from 'express'
import userController from '../controllers/userController'

const userRoute = Router()

userRoute.post('/register', userController.registerUser)
userRoute.post('/login', userController.loginUser)

export default userRoute
