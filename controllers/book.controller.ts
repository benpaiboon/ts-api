import { Request, Response } from "express";
import Book from "../models/book.model";

export const bookController = {
  find: async (req: Request, res: Response) => {
    try {
      const docs = await Book.find({});
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
      const docs = await Book.findOne({ _id: req.params._id })
      if (docs === null)
        throw new Error('No document found or something went wrong.');
      else
        res.status(200).json(docs);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  }
} 