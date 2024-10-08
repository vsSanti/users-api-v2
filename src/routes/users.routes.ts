import { Router } from "express";

import UsersController from "../controllers/users.controller";
import { adaptRoute } from "../adapter/route-adapter";

class UsersRoutes {
  router = Router();
  controller = new UsersController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new User
    this.router.post("/", adaptRoute(this.controller.create));

    // Retrieve all Users
    this.router.get("/", adaptRoute(this.controller.getAll));

    // Retrieve a single User with id
    this.router.get("/:id", adaptRoute(this.controller.getById));

    // Update a User with id
    this.router.put("/:id", adaptRoute(this.controller.update));

    // Delete a User with id
    this.router.delete("/:id", adaptRoute(this.controller.delete));
  }
}

export default new UsersRoutes().router;
