import { NotFoundError } from '../helpers/apiError'
import User, { UserDocument } from '../models/User'

const createOne = async (user: UserDocument) => {
  return await user.save()
}

const findAll = async () => {
  return await User.find()
}

const findById = async (userId: string) => {
  const foundOne = await User.findById(userId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (userId: string, update: Partial<UserDocument>) => {
  const foundOne = await User.findByIdAndUpdate(userId, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (userId: string) => {
  const foundOne = await User.findByIdAndDelete(userId)
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
