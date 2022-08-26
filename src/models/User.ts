import mongoose, { Document, ObjectId, Schema } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

export type UserRole = 'admin' | 'user'

export interface UserDocument extends Document {
  firstname: string
  lastname: string
  username: string
  email: string
  password: string
  comparePassword(password: string): Promise<boolean>
  role: UserRole
  address: ObjectId[]
  reviews: ObjectId[]
}
const UserSchema = new Schema<UserDocument>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value: string) {
      if (!validator.isEmail(value)) {
        throw new Error('not valid email')
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
      unique: true,
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'UserReview',
      required: true,
    },
  ],
})
// Hashing the password
UserSchema.pre<UserDocument>(
  'save',
  { document: true, query: false },
  async function (next) {
    if (!this.isModified('password')) {
      next()
    }
    this.password = await bcrypt.hash(this.password, 10)
  }
)
// Cpmpare Password
UserSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password)
}

const User = mongoose.model<UserDocument>('User', UserSchema)
export default User
