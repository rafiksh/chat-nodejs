import express, { Router } from "express";
import { json, urlencoded } from "body-parser";

export const defaultRouter = function () {
  const router = Router();
  router.use(urlencoded({ extended: true }));
  router.use(json());
  router.use(express.static("public"));

  return router;
};
