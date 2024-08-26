import { Router } from "express";

import ApiController from "../controllers/api.controller";
import { adaptRoute } from "../adapter/route-adapter";

class ApiRoutes {
  router = Router();
  controller = new ApiController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // This is the main API endpoint to simpy display message
    this.router.get("/", adaptRoute(this.controller.getAll));

    // This route contains a parameter to be checked
    this.router.get("/:id", adaptRoute(this.controller.getById));
  }
}

export default new ApiRoutes().router;
