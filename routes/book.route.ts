import { Router } from "express";
import { bookController } from "../controllers/book.controller";

const bookRouter = Router();

// Routes

// GET all
bookRouter.get('/book', bookController.find)

// Export
export { bookRouter }