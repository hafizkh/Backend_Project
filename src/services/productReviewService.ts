import { NotFoundError } from '../helpers/apiError'
import ProductReview, { ProductReviewDocument } from '../models/productReview'

const createOne = async (productReview: ProductReviewDocument) => {
  return await productReview.save()
}

const findAll = async () => {
  return await ProductReview.find()
}

const findById = async (id: string) => {
  const foundOne = await ProductReview.findById(id)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (
  id: string,
  update: Partial<ProductReviewDocument>
) => {
  const foundOne = await ProductReview.findByIdAndUpdate(id, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (id: string) => {
  const foundOne = await ProductReview.findByIdAndDelete(id)
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
