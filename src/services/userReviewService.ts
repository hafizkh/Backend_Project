import { NotFoundError } from '../helpers/apiError'
import UserReview, { UserReviewDocument } from '../models/UserReview'

const createOne = async (userReview: UserReviewDocument) => {
  return await userReview.save()
}

const findAll = async () => {
  return await UserReview.find()
}

const findById = async (id: string) => {
  const foundOne = await UserReview.findById(id)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (id: string, update: Partial<UserReviewDocument>) => {
  const foundOne = await UserReview.findByIdAndUpdate(id, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (id: string) => {
  const foundOne = await UserReview.findByIdAndDelete(id)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

export default {
  createOne,
  findAll,
  findById,
  updateOne,
  deleteOne,
}
