import express, { Application, Request, Response } from "express";
import config from "./config/config";

async function startServer() {
    const app: Application = express();

    // Loads App's dependencies
    await require("./loaders/loader").default({ expressApp: app });

    app.listen(config.port, () => console.log("Server running"));
}

startServer();
