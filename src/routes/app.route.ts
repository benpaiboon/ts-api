import express from "express";

// Init middleware
const appRoute = express();

// Import routes
import { rootRouter } from "./root.route";
import { userRouter } from "./user.route";

// Init routes
appRoute.use(rootRouter)
appRoute.use(userRouter)

// Export routes to server.ts
export { appRoute }