import express, { Application } from "express";

const app: Application = express();

import { defaultRouter } from "&routers/default";
import { userRouter } from "&routes/user";

app.use("/", userRouter(defaultRouter()));

app.listen(5000, () => console.log("Server running, listing ar port: 5000"));
