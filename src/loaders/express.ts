import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import config from "../config/config";

export default ({ app }: { app: Application }) => {
  /**
   * Health Check endpoints
   */
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middlewares
  app.use(bodyParser.json());

  // API routes
  //   app.use(config.api.prefix, routes);
};
