import { Router } from "express";
import { userController } from "../controllers/user.controller";

const userRouter = Router();

// Routes

// GET all
userRouter.get('/user', userController.find)

// GET one
userRouter.get('/user/:name', userController.findOne)

// POST one
userRouter.post('/user', userController.insertOne)

// PUT one
userRouter.put('/user/:u_id', userController.updateOne)

// DELETE one
userRouter.delete('/user/:u_id', userController.deleteOne)

// Export
export { userRouter }