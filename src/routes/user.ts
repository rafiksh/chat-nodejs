import { Router } from "express";
import { partial } from "lodash";
import { Mongoose } from "mongoose";

import { getUser } from "../user/controller/get";

export const userRouter = (router: Router, db: Mongoose) => {
  router.get("/", partial(getUser, db));

  return router;
};
