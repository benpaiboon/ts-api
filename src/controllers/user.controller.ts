import { Request, Response } from "express";
import { userService } from "../services/user.service";
import User from "../models/user.model";

export const userController = {
  find: async (req: Request, res: Response) => {
    try {
      const docs = await User.find({});
      if (docs.length === 0)
        throw new Error('No data in collection.');
      else
        res.status(200).json(docs);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  },
  findOne: async (req: Request, res: Response) => {
    try {
      const docs = await User.findOne({ name: req.params.name })
      if (docs === null)
        throw new Error('No document found or something went wrong.');
      else
        res.status(200).json(docs);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  },
  insertOne: async (req: Request, res: Response) => {
    try {
      const newDoc = {
        u_id: userService.genId(10),
        name: req.body.name,
        email: req.body.email,
        address: {
          stress: req.body.address.stress
        }
      }
      await new User(newDoc).save();
      res.status(200).json(newDoc);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  },
  updateOne: async (req: Request, res: Response) => {
    try {
      await User.findOneAndUpdate({ u_id: req.params.u_id }, { name: req.body.name, email: req.body.email })
      const docs = await User.findOne({ u_id: req.params.u_id })
      res.status(200).json(docs);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  },
  deleteOne: async (req: Request, res: Response) => {
    try {
      const docs = await User.findOneAndDelete({ u_id: req.params.u_id })
      res.status(200).json(docs);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  }
} 