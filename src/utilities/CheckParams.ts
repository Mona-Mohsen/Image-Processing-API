import express, { NextFunction } from "express";
import path from "path";
import * as fs from "fs";

//to check the value validity of all parameters
const CheckParams = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): Promise<void> => {
  try {
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    const inputImage = path.resolve(`./assets/images/full/${filename}.jpg`);
    const cachedImg = path.resolve(
      `./assets/images/thumb/${filename}${width}-${height}.jpg`
    );

    if (!fs.existsSync(inputImage)) {
      res
        .status(400)
        .send("Filename is Not Valid or Empty!,Please enter a valide value");
      return;
    }

    if (fs.existsSync(cachedImg)) {
      return res.status(200).sendFile(cachedImg);
    }

    if (!filename) {
      res
        .status(400)
        .send("Filename is Not Valid or Empty!,Please enter a valide value");
      return;
    }

    if (!width) {
      res
        .status(400)
        .send("Width is Not Valid or Empty!,Please enter a valide value");
      return;
    }

    if (!height) {
      res.status(400).send("hight is Not Valid!,Please enter a valide value");
      return;
    }

    next();
  } catch (err) {
    res.status(400).send(err);
    return;
  }
};

export default CheckParams;
