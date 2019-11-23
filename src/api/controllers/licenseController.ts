import { Controller, Get, Route } from "tsoa";
import { BusinessModel } from "../../models/business";
import { BusinessStatusModel } from "../../models/businessStatus";

@Route("/license")
export class LicenseController extends Controller {
    // "GET license status of business given its RBQ number"
    @Get("/status/{rbqNum}")
    public async getStatusByRbq(rbqNum: string): Promise<BusinessStatusModel> {
        // TODO call scrapper service to validate on RBQ website if the license number is valid.
        const businessStatus = new BusinessStatusModel("Valide", true);

        this.setStatus(200);
        return businessStatus;
    }

    // "GET info of business given its RBQ number"
    @Get("/{rbqNum}")
    public async getInfoByRbq(rbqNum: string): Promise<BusinessModel> {
        // TODO call scrapper service to scrape all info based on rbq license number.
        const business = new BusinessModel(
            "Home Depot",
            "123 short street",
            "514-123-4567",
            "5679-1213-01",
            1169504009,
            "Valide"
        );

        this.setStatus(200);
        return business;
    }

    // "GET license status of business given its NEQ ID"
    @Get("/status/{neqId}")
    public async getStatusByNeq(neqId: number): Promise<BusinessStatusModel> {
        // TODO call scrapper service to validate on RBQ website if the NEQ ID is valid.
        const businessStatus = new BusinessStatusModel("Valide", true);

        this.setStatus(200);
        return businessStatus;
    }

    // "GET info of business given its NEQ ID"
    @Get("/{neqId}")
    public async getInfoByNeq(neqId: number): Promise<BusinessModel> {
        // TODO call scrapper service to scrape all info based on NEQ ID.
        const business = new BusinessModel(
            "Home Depot",
            "123 short street",
            "514-123-4567",
            "5679-1213-01",
            1169504009,
            "Valide"
        );

        this.setStatus(200);
        return business;
    }
}
