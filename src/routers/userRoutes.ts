import express from "express";
import { userController } from "../controllers/userController";
const router = express.Router();

router.get('/users', userController.findOne)

module.exports = router;