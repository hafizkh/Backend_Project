import { Router, Request, Response } from 'express'

const homeRoute = Router()

homeRoute.get('', (req: Request, res: Response) => {
  res.send({
    message: 'This is starting Route',
    status: 200,
  })
})
export default homeRoute
