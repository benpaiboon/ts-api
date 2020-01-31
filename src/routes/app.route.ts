import express from "express";

// Import routes
import { rootRouter } from "./root.route";
import { userRouter } from "./user.route";

// Init express
const appRoute = express();

// Init routes
appRoute.use(rootRouter)
appRoute.use(userRouter)

// Export routes to server.ts
export { appRoute }