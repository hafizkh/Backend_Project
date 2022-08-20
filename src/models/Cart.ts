import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface CartDocument extends Document {
    userId: ObjectId
    products: [{
        productId: ObjectId,
        quantity: number
    }],
    status: "paid"|"unpaid"
}

const CartSchema = new Schema<CartDocument>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    products: [{
        productId: Schema.Types.ObjectId,
        ref: "Product",
        quantity: Number
    }],
    status: {
        type: String,
        enum: ["paid", "unpaid"]
    }
})

const Cart = mongoose.model<CartDocument>("Cart", CartSchema)
export default Cart