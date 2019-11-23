import { NextFunction, Request, Response, Router } from "express";
import { LicenseController } from "../controller/licenseController";

const route = Router();
const licenseController: LicenseController = new LicenseController();

export default (app: Router) => {
    app.use("/license", route);

    // GET License info with RBQ number
    route.get("/:rbqNumber", licenseController.getInfoByRbq);

    // GET License info with NEQ ID
    route.get("/:neqId", licenseController.getInfoByNeq);

    // GET Validation with RBQ number
    route.get("/validate/:rbqNumber", licenseController.getValidationByRbq);

    // GET Validation with NEQ ID
    route.get("/validate/:neqId", licenseController.getValidationByNeq);
};
