import path from "path";
import imgResize from "../../utilities/ImgResize";

describe("Testing image resize function (ImgResize)", () => {
  const filename = "fjord";
  const width = 100;
  const height = 200;
  const outputFolder = path.resolve(
    `./assets/images/thumb/${filename}${width}-${height}.jpg`
  );

  it("imgResize function return resized image in output folder", async () => {
    expect(await imgResize("fjord", 100 as number, 200 as number)).toEqual(
      outputFolder
    );
  });
});
