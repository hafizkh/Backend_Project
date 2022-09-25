import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import cookieParser from 'cookie-parser'
// import cors from 'cors'
import product from './routers/productRoute'
import user from './routers/userRoute'
import order from './routers/orderRoute'
import userReviewRoute from './routers/userReviewRoute'
import cors from 'cors'
import passport, { session } from 'passport'
import { jwtStrategy } from './config/passport'
import homeRoute from './routers/homeRoute'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

/// Passport configuration

app.use(passport.initialize())
// app.use(passport.session())
passport.use(jwtStrategy)

// Global middleware
app.use(apiContentType)
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Set up routers
app.use('/api/v1', homeRoute)
app.use('/api/v1/products', product)
app.use('/api/v1/users', user)
app.use('/api/v1/orders', order)
app.use('/api/v1/userReviews', userReviewRoute)

// Custom API error handler
app.use(apiErrorHandler)

export default app
