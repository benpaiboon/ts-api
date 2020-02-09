import { Router } from "express";
import { bookController } from "../controllers/book.controller";

const bookRouter = Router();

// Routes

// GET all
bookRouter.get('/book', bookController.find)

// GET one
bookRouter.get('/book/:_id', bookController.findOne)

// Export
export { bookRouter }