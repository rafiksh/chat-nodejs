import express, { Router } from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";

export const defaultRouter = function () {
  const router = Router();
  router.use(cors());
  router.use(urlencoded({ extended: true }));
  router.use(json());
  router.use(express.static("public"));

  return router;
};
