import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import { default as config } from "./config/config";
import { appRoute } from "./routes/app.route";

// Init middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(appRoute)

// Listen requests
app.listen(config.port, () => console.log(`Server running on port ${config.port}`))

