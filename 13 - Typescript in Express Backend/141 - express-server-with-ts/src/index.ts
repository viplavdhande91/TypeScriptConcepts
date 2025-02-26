import express from "express";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("This is Typescript + Express server V4");
});

app.listen(3000, () => {
  console.log("Server started");
});
