import { Mediator } from "tsmediator";
import { Controller, Get, Route } from "tsoa";
import { GetInfoByNeqHandler } from "../../domain/handlers/GetInfoByNeqHandler";
import { GetInfoByRbqHandler } from "../../domain/handlers/GetInfoByRbqHandler";
import { GetStatusByNeqHandler } from "../../domain/handlers/GetStatusByNeqHandler";
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
    @Get("/rbq/status/{rbqNum}")
    public async getStatusByRbq(rbqNum: string): Promise<BusinessStatusModel> {
        const businessStatus = await this.mediator.Send(GetStatusByRbqHandler.Type, rbqNum);

        this.setStatus(200);
        return businessStatus;
    }

    // "GET info of business given its RBQ number"
    @Get("/rbq/{rbqNum}")
    public async getInfoByRbq(rbqNum: string): Promise<BusinessModel> {
        const business = await this.mediator.Send(GetInfoByRbqHandler.Type, rbqNum);

        this.setStatus(200);
        return business;
    }

    // "GET license status of business given its NEQ ID"
    @Get("/neq/status/{neqId}")
    public async getStatusByNeq(neqId: number): Promise<BusinessStatusModel> {
        const businessStatus = await this.mediator.Send(GetStatusByNeqHandler.Type, neqId);

        this.setStatus(200);
        return businessStatus;
    }

    // "GET info of business given its NEQ ID"
    @Get("/neq/{neqId}")
    public async getInfoByNeq(neqId: number): Promise<BusinessModel> {
        const business = await this.mediator.Send(GetInfoByNeqHandler.Type, neqId);

        this.setStatus(200);
        return business;
    }
}
