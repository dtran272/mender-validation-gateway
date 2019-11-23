import { Request, Response } from "express";

export class LicenseController {
    public getValidationByRbq(req: Request, res: Response) {
        // TODO call scrapper service to validate on RBQ website if the license number is valid.
        res.status(200).json({ message: "Not yet implemented." });
    }

    public getInfoByRbq(req: Request, res: Response) {
        // TODO call scrapper service to scrape all info based on rbq license number.
        res.status(200).json({ message: "Not yet implemented." });
    }

    public getValidationByNeq(req: Request, res: Response) {
        // TODO call scrapper service to validate on RBQ website if the NEQ ID is valid.
        res.status(200).json({ message: "Not yet implemented." });
    }

    public getInfoByNeq(req: Request, res: Response) {
        // TODO call scrapper service to scrape all info based on NEQ ID.
        res.status(200).json({ message: "Not yet implemented." });
    }
}
