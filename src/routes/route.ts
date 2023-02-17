import express from "express";
import CheckParams from "../utilities/CheckParams";
import imgResize from "../utilities/ImgResize";

const routes = express.Router();
//API route
routes.get("/", (req: express.Request, res: express.Response): void => {
  res.send(
    `<center><h1>Image Resizing API</h1></center>
    <h3><p>The name of the available images to be resized are:</p></h3>
    <h4><ul>
    <li>encenadaport</li> 
    <li>fjord</li>
    <li>icelandwaterfall</li>
    <li>palmtunnel</li>
    <li>santamonic</li>
    </ul></h4>
    
    <h3><p>Use the following Url to pass the name of image file and define the required hight and width.</p> 
    <p><a>http://localhost:3000/api/image/</a></p>
    
    <p>Example:</p>
    <p>http://localhost:3000/api/image?filename=fjord&width=200&height=200
    </p></h3>`
  );
});

//Resizing Route
routes.get(
  "/image",
  CheckParams,
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const FileName = req.query.filename as string;
      const width = parseInt(req.query.width as string);
      const height = parseInt(req.query.height as string);
      const imageResized = await imgResize(FileName, width, height);
      res.status(200).sendFile(imageResized);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

export default routes;
