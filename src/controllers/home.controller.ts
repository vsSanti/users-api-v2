import { Request, Response } from "express";

export default class HomeController {
  async welcome(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "Welcome to RentCheck API test." });
  }
}
