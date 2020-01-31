import { Router } from "express";

const rootRouter = Router();

rootRouter.get('/', (req, res) => {
  res.status(200).send({ msg: 'Welcome to TS API' });
})

export { rootRouter }