import request from "supertest";

import app from "../../src/app";

describe("/api", () => {
  describe("GET /api", () => {
    describe("success", () => {
      it("should get correct result", async () => {
        const res = await request(app).get("/api");

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: "Welcome to RentCheck API test." });
      });
    });

    describe("error", () => {
      it("should throw if error query param is passed", async () => {
        const res = await request(app).get("/api").query({ error: true });

        expect(res.status).toBe(500);
        expect(res.body).toEqual({ errorMessage: "Test error" });
      });
    });
  });

  describe("GET /api/:id", () => {
    describe("success", () => {
      it("should get correct result", async () => {
        const res = await request(app).get("/api/some_id");

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: "Getting API by id." });
      });
    });

    describe("error", () => {
      it("should throw if error param is passed", async () => {
        const res = await request(app).get("/api/error");

        expect(res.status).toBe(500);
        expect(res.body).toEqual({ errorMessage: "Test error" });
      });
    });
  });
});
