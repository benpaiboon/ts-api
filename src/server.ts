import express from "express";
import { routes } from './routers/routes.config'

const app = express();

routes.map(route => { app.use('/', route) })

app.listen(5000, () => console.log('Server running on port 5000'))