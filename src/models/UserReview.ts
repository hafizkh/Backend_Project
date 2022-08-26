import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface UserReviewDocument extends Document {
  reviewerId: ObjectId
  rating: 1 | 2 | 3 | 4 | 5
  comment: string
}

const UserReviewSchema = new Schema<UserReviewDocument>({
  reviewerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  comment: {
    type: String,
  },
})

const UserReview = mongoose.model<UserReviewDocument>(
  'UserReview',
  UserReviewSchema
)
export default UserReview
