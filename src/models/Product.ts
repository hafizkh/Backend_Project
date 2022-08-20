import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ProductDocument extends Document {
  name: string
  price: number
  sellerId: ObjectId,
  images: string[]
  category: ObjectId[]
  reviews: ObjectId[]
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
},
  images: [
    {
      type: String,
      required: true,
    },
  ],
  category: [
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
})

const Product = mongoose.model<ProductDocument>('Product', productSchema)
export default Product
