import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ProductReviewDocument extends Document {
    reviewerId: ObjectId
    productId: ObjectId
    rate: 1|2|3|4|5
    comment: string

}

const ProductReviewSchema = new Schema<ProductReviewDocument>({
    reviewerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    rate: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true
    },
    comment: {
        type: String
    }
})

const ProductReview = mongoose.model<ProductReviewDocument>("ProductReview", ProductReviewSchema)
export default ProductReview