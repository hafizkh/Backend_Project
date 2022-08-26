import mongoose, { Document, Schema } from 'mongoose'

export interface CategoryDocument extends Document {
  name: string
  image: string
}

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const Category = mongoose.model<CategoryDocument>('Category', CategorySchema)
export default Category
