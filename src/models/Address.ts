import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface AddressDocument extends Document {
    name: string
    city: string
    country: string
    state: string
    street: string
    postal_code: string
}

const AddressSchema = new Schema<AddressDocument>({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    }
})

const Address = mongoose.model<AddressDocument>("Address", AddressSchema)
export default Address