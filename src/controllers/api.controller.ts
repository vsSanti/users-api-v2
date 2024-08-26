import { Controller } from "../types/modules";

export default class ApiController {
  getAll: Controller = async (httpRequest) => {
    if (httpRequest.query.error) {
      throw new Error("Test error");
    }

    return {
      statusCode: 200,
      body: { message: "Welcome to RentCheck API test." },
    };
  };

  getById: Controller = async (httpRequest) => {
    if (httpRequest.params.id === "error") {
      throw new Error("Test error");
    }

    return {
      statusCode: 200,
      body: { message: "Getting API by id." },
    };
  };
}
