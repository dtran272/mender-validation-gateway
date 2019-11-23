import { Application } from "express";
import expressLoader from "./express";

export default async ({ expressApp }: { expressApp: Application }) => {
  // Loads express dependencies
  await expressLoader({ app: expressApp });
};
