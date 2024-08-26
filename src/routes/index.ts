import { Application } from "express";
import apiRoutes from "./api.routes";
import usersRoutes from "./users.routes";

export default class Routes {
  constructor(app: Application) {
    // app.use("/api", apiRoutes);
    app.use("/users", usersRoutes);
  }
}
