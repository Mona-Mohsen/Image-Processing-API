import app from "../../index";
import supertest from "supertest";

const request = supertest(app);

describe("Testing to check validity of passing url parameters", () => {
  //const filename:string='fjord';

  it("it returns an error message if image name does not exist", async (): Promise<void> => {
    const response = await request.get(
      "/api/image?filename=fff&width=200&height=100"
    );
    expect(response.text).toEqual(
      "Filename is Not Valid or Empty!,Please enter a valide value"
    );
    //expect(response.text).toBe('Page is Not Found');
  });

  it("return error message when hieght is not a number", async (): Promise<void> => {
    const height = "b";
    const response = await request.get(
      `/api/image?filename=fjord&width=200&height=${height}`
    );
    expect(response.text).toEqual(
      "hight is Not Valid!,Please enter a valide value"
    );
    return;
  });
  const empty = "";
  it("it returns an error message if height parameters is missed", async () => {
    const response = await request.get(
      `/api/image?filename=fjord&width=200&height=${empty}`
    );
    return expect(response.text).toEqual(
      "hight is Not Valid!,Please enter a valide value"
    );
  });

  it("it returns an error message if width parameters is missed", async () => {
    const empty = "";
    const response = await request.get(
      `/api/image?filename=fjord&width=${empty}&height=200`
    );
    return expect(response.text).toEqual(
      "Width is Not Valid or Empty!,Please enter a valide value"
    );
  });

  it("it returns an error message if filename parameters is missed", async () => {
    const empty = "";
    const response = await request.get(
      `/api/image?filename=${empty}&width=200&height=200`
    );
    return expect(response.text).toEqual(
      "Filename is Not Valid or Empty!,Please enter a valide value"
    );
  });
});
