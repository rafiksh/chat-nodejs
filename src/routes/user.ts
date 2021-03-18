import { Router, Request, Response } from "express";

export const userRouter = (router: Router) => {
  router.get("/", (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send("user");
    res.end();
  });

  return router;
};
