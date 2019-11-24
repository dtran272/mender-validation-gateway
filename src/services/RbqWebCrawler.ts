import { BusinessModel } from "../api/models/business";
import { BusinessStatusModel } from "../api/models/businessStatus";
import { IWebCrawler } from "../interfaces/services/IWebCrawler";

export class RbqCrawler implements IWebCrawler<BusinessModel> {
    public baseUrl: string;
    private model: BusinessModel;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.model = new BusinessModel();
    }

    public startCrawl(): void {
        // TODO implement headless crawler here
        this.model = new BusinessModel(
            "Home Depot",
            "123 short street",
            "514-123-4567",
            "5679-1213-01",
            1169504009,
            "Valide"
        );
    }

    public getInfo(): BusinessModel {
        return this.model;
    }

    public getLicenseStatus(): BusinessStatusModel {
        const businessStatus = new BusinessStatusModel(this.model.name, this.model.rbqNum, this.model.status);

        return businessStatus;
    }
}
