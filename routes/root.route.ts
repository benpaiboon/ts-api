import { Router, Request, Response } from "express"

const rootRouter = Router()

rootRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({ msg: 'Welcome to TS API' })
})

export { rootRouter }