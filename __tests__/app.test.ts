import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  test("API route", async () => {
    const res = await request(app).get("/api");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Welcome to RentCheck API test." });
  });
});
