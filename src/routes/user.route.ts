import { Router } from "express";
import { userController } from "../controllers/user.controller";

const userRouter = Router();

// Routes

// GET all
userRouter.get('/user', userController.find)

// GET one
userRouter.get('/user/:id', userController.findOne)

// POST one
userRouter.post('/user', userController.createOne)

// Export
export { userRouter }