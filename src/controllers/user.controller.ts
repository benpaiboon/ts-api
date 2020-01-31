import { Request, Response } from "express";
import { userService } from "../services/user.service";
import User from "../models/user.model";

export const userController = {
  find: async (req: Request, res: Response) => {
    try {
      await res.status(200).send({ msg: 'find all' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: error.message });
    }
  },
  findOne: async (req: Request, res: Response) => {
    try {
      await res.status(200).send({ msg: 'find one', params: req.params.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: error.message });
    }
  },
  createOne: async (req: Request, res: Response) => {
    try {
      const userId = userService.genId(10);
      await res.status(200).send({ msg: 'create one', userId });
      console.log(req.body)
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: error.message });
    }
  }
}