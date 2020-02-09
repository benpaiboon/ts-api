import express, { Request, Response } from "express";

// Import routes
import { rootRouter } from "./root.route";
import { userRouter } from "./user.route";
import { bookRouter } from "./book.route";

// Init express
const appRoute = express();

// Init routes
appRoute.use(rootRouter)
appRoute.use(userRouter)
appRoute.use(bookRouter)

// Export routes to server.ts
export { appRoute }