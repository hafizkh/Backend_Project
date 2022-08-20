import { NotFoundError } from "../helpers/apiError";
import Address, { AddressDocument } from "../models/Address";

const createOne = async (productReview: AddressDocument) => {
    return await productReview.save()
}

const findAll = async () => {
    return await Address.find()
}

const findById = async (id: string) => {
    const foundOne = await Address.findById(id)
    if (foundOne) {
        return foundOne
    } else {
        throw new NotFoundError()
    }
}

const updateOne = async (id: string, update: Partial<AddressDocument>) => {
    const foundOne = await Address.findByIdAndUpdate(id, update)
    if (foundOne) {
        return foundOne
    } else {
        throw new NotFoundError()
    }
}

const deleteOne = async (id: string) => {
    const foundOne = await Address.findByIdAndDelete(id)
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