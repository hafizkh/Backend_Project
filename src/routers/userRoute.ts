import { Router } from 'express'
import auth from '../middlewares/auth'
import userController from '../controllers/userController'
import authenticateUser from '../middlewares/userMiddleware'

const userRoute = Router()

userRoute.post('', userController.registerUser)
userRoute.post('/login', authenticateUser, userController.loginUser)
userRoute.get('/logout', userController.logoutUser)
userRoute.get('/:id', userController.getUserDetail)
userRoute.delete('/:id', auth.verifyAdmin, userController.deleteUser)
userRoute.get('', userController.getAllUsers)
userRoute.put('/:id', auth.verifyAdmin, userController.updateProfile)

export default userRoute
