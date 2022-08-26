import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ProductDocument extends Document {
  name: string
  price: number
  user: ObjectId
  images: string
  category: ObjectId[]
}

const productSchema = new Schema<ProductDocument>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  images: {
    type: String,
    required: true,
  },
  category: [
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
})
const Product = mongoose.model<ProductDocument>('Product', productSchema)
export default Product
