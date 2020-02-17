import express from "express";

// Import routes
import { indexRouter } from "./index.route";
import { userRouter } from "./user.route";
import { bookRouter } from "./book.route";

// Init express
const appRoute = express();

// Init routes
appRoute.use(indexRouter)
appRoute.use(userRouter)
appRoute.use(bookRouter)

// Export routes to server.ts
export { appRoute }