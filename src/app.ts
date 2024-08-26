import express, { Application } from "express";

import Server from "./server";

const app: Application = express();
new Server(app);

export default app;
