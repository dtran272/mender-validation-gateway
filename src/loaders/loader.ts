import * as express from "express";
import expressLoader from "./express";

export default async ({ expressApp }: { expressApp: express.Express }) => {
    // Loads express dependencies
    await expressLoader({ app: expressApp });
};
