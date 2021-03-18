import { Router } from "express";
import { partial } from "lodash";

import { getUser } from "../user/controller/get";

export const userRouter = (router: Router, db: any) => {
  router.get("/", partial(getUser, db));

  return router;
};
