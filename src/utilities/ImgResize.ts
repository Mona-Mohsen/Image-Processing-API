import sharp from "sharp";
import path from "path";
import { promises as fspromises } from "fs";

//returns resize image
const imgResize = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const inputImage = path.resolve(`./assets/images/full/${filename}.jpg`);
    const outImg = path.resolve(
      `./assets/images/thumb/${filename}${width}-${height}.jpg`
    );

    const Width: number = width;
    const Height: number = height;

    const image = await fspromises.readFile(inputImage);
    await sharp(image).resize(Width, Height).toFile(outImg);

    return outImg;
  } catch {
    return "Error, image cannot be resized";
  }
};

export default imgResize;
