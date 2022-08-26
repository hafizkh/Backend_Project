import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface CartDocument extends Document {
  userId: ObjectId
  productId: ObjectId
  quantity: number
  status: 'paid' | 'unpaid'
}

const CartSchema = new Schema<CartDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['paid', 'unpaid'],
  },
})

const Cart = mongoose.model<CartDocument>('Cart', CartSchema)
export default Cart
