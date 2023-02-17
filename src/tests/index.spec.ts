import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe("Test endpoint responses in the app", () => {
  it("get the home page ", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    return;
  });

  it("get the api end point", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });

  it("It will return a 404 page Not found Eror", async () => {
    const response = await request.get("/*");
    expect(response.status).toBe(404);
  });
});
