import { Router } from "express";
import licenseRoutes from "./routes/license";

export default () => {
    const app: Router = Router();

    licenseRoutes(app);

    return app;
};
