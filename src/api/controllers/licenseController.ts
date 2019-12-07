import { Mediator } from "tsmediator";
import { Controller, Get, Route } from "tsoa";
import { StatusType } from "../../common/enums/status";
import { GetInfoByRbqHandler } from "../../domain/handlers/GetInfoByRbqHandler";
import { GetStatusByRbqHandler } from "../../domain/handlers/GetStatusByRbqHandler";
import { BusinessModel } from "../models/business";
import { BusinessStatusModel } from "../models/businessStatus";

@Route("/license")
export class LicenseController extends Controller {
    private mediator: Mediator;

    constructor() {
        super();
        this.mediator = new Mediator();
    }

    // "GET license status of business given its RBQ number"
    @Get("/status/{rbqNum}")
    public async getStatusByRbq(rbqNum: string): Promise<BusinessStatusModel> {
        const businessStatus = await this.mediator.Send(GetStatusByRbqHandler.Type, rbqNum);

        this.setStatus(200);
        return businessStatus;
    }

    // "GET info of business given its RBQ number"
    @Get("/{rbqNum}")
    public async getInfoByRbq(rbqNum: string): Promise<BusinessModel> {
        // TODO call scrapper service to scrape all info based on rbq license number.
        const business = await this.mediator.Send(GetInfoByRbqHandler.Type, rbqNum);

        this.setStatus(200);
        return business;
    }

    // "GET license status of business given its NEQ ID"
    @Get("/status/{neqId}")
    public async getStatusByNeq(neqId: number): Promise<BusinessStatusModel> {
        // TODO call scrapper service to validate on RBQ website if the NEQ ID is valid.
        const businessStatus = new BusinessStatusModel("Home Depot", "5679-1213-01", StatusType.VALIDE);

        this.setStatus(200);
        return businessStatus;
    }

    // "GET info of business given its NEQ ID"
    @Get("/{neqId}")
    public async getInfoByNeq(neqId: number): Promise<BusinessModel> {
        // TODO call scrapper service to scrape all info based on NEQ ID.
        const business = new BusinessModel(
            "Home Depot",
            "Groupe Reno",
            "5679-1213-01",
            "Valide",
            new Date("2019-11-05"),
            new Date("2019-11-05"),
            1169504009,
            "123 short street",
            "asdb@sdv.com",
            "514-123-4567"
        );

        this.setStatus(200);
        return business;
    }
}
