import { Router } from 'express'
import userReview from '../controllers/userReview'

const userReviewRoute = Router()

userReviewRoute.post('/', userReview.createUserReview)
userReviewRoute.get('/', userReview.findAll)
userReviewRoute.get('/:id', userReview.findById)
userReviewRoute.put('/:id', userReview.updateUserReview)
userReviewRoute.delete('/:id', userReview.deleteUserReview)

export default userReviewRoute
