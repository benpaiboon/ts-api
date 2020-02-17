import { Router, Request, Response } from "express"

const indexRouter = Router()

indexRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({ msg: 'Welcome to TS API' })
})

export { indexRouter }