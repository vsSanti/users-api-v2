import { Request, Response } from "express";

import { Controller, HttpRequest } from "../types/modules";

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
      };

      const httpResponse = await controller(httpRequest);

      if (httpResponse.statusCode >= 200 && httpResponse.statusCode < 300) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        res.status(httpResponse.statusCode).json({
          error: httpResponse.body.message,
        });
      }
    } catch (error: any) {
      res.status(500).json({ errorMessage: error.message });
    }
  };
};
