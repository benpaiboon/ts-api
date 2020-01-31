import { Request, Response } from "express";
import { User } from "../models/userModel";

export const userController = {
  findOne: async (req: Request, res: Response) => {
    try {
      res.status(200).send(User);
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: error.message });
    }
  }
}