import { Request, Response } from "express";
import { Mongoose } from "mongoose";

export const getUser = (db: Mongoose, req: Request, res: Response) => {
  try {
    res.statusCode = 200;

    res.send("user");
    res.end();
  } catch (error) {
    res.statusCode = 500;
    res.send((error.message, 500));
  }
};
