import express, { Request, Response } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import { default as config } from "./config/config";
import mongoose from "mongoose";
import morgan from "morgan";
import { appRoute } from "./routes/app.route";

// Init middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'))

// Connect DB
mongoose.set('useCreateIndex', true)
mongoose.connect(config.mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use(appRoute)

// Handling Route Errors
app.use((req: Request, res: Response) => {
  const error = new Error('Not found the requested url.');
  res.status(404 || 500);
  res.json({ error: error.message });
});

// Listen requests
app.listen(config.server.port, () => console.log(`Server running on http://localhost:${config.server.port}`))

