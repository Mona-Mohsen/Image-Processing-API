import app from "../../index";
import supertest from "supertest";

const request = supertest(app);

describe("Test routes responses in the app", () => {
  it("get route to the home page ", async (): Promise<void> => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    return;
  });

  it("get route to the api end point", async (): Promise<void> => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    return;
  });

  it("it returns status response 200 if all parameters values are valid", async (): Promise<void> => {
    const filename = "fjord";
    const width = 100;
    const height = 200;
    const response = await request.get(
      `/api/image?filename=${filename}&width=${width}&height=${height}`
    );
    expect(response.status).toBe(200);
  });
});
