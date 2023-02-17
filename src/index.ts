import express, { Application } from "express";
import routes from "./routes/route";

//Create instance server
const app: Application = express();
const port = 3000;

//add routing for path
app.get("/", (req: express.Request, res: express.Response): void => {
  res.send(
    `<html><body background:baby blue><center><h1>Home Page of Image Resizing API</h1></center>
    <h3><p>The name of the available images to be resized are:</p></h3>
    <ul>
    <li>encenadaport</li>
    <li>fjord</li>
    <li>icelandwaterfall</li>
    <li>palmtunnel</li>
    <li>santamonic</li>
    </ul>
    
    <p>Use the following Url to pass the name of image file and define the required hight and width.</p> 
    <p><a>http://localhost:3000/api/image/</a></p>
    
    <p>Example:
    http://localhost:3000/api/image?filename=fjord&width=200&height=200
    </p></body></html>`
  );
});

app.use("/api", routes);

app.get("/*", (req: express.Request, res: express.Response): void => {
  res.status(404).send("Page is Not Found");
});

//start express server
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});

export default app;
