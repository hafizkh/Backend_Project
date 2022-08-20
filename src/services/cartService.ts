import { NotFoundError } from "../helpers/apiError";
import Cart, { CartDocument } from "../models/Cart";

const createOne = async (productReview: CartDocument) => {
    return await productReview.save()
}

const findAll = async () => {
    return await Cart.find()
}

const findById = async (id: string) => {
    const foundOne = await Cart.findById(id)
    if (foundOne) {
        return foundOne
    } else {
        throw new NotFoundError()
    }
}

const updateOne = async (id: string, update: Partial<CartDocument>) => {
    const foundOne = await Cart.findByIdAndUpdate(id, update)
    if (foundOne) {
        return foundOne
    } else {
        throw new NotFoundError()
    }
}

const deleteOne = async (id: string) => {
    const foundOne = await Cart.findByIdAndDelete(id)
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
    deleteOne
}