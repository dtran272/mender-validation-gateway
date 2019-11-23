import express, { Application, Request, Response } from "express";
import config from "./config/env";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(config.port, () => console.log("Server running"));
