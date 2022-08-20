import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface UserReviewDocument extends Document {
    reviewerId: ObjectId
    revieweeId: ObjectId
    rate: 1 | 2 | 3 | 4 | 5
    comment: string

}

const UserReviewSchema = new Schema<UserReviewDocument>({
    reviewerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    revieweeId: {
        type: Schema.Types.ObjectId,
        ref: "User",
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

const UserReview = mongoose.model<UserReviewDocument>("UserReview", UserReviewSchema)
export default UserReview