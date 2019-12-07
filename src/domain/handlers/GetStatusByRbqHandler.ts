import { Handler, ICommandHandler } from "tsmediator";
import { Container } from "typedi";
import { BusinessModel } from "../../api/models/business";
import { IWebCrawler } from "../../interfaces/services/IWebCrawler";
import { RbqWebCrawler } from "../../services/RbqWebCrawler";
import { BusinessStatusModel } from "./../../api/models/businessStatus";

@Handler(GetStatusByRbqHandler.Type)
export class GetStatusByRbqHandler implements ICommandHandler<string, Promise<BusinessStatusModel>> {
    private crawler: IWebCrawler<BusinessModel>;

    constructor() {
        this.crawler = Container.get<RbqWebCrawler>("rbq.webCrawler");
    }

    public static get Type(): string {
        return "GetStatusByRbq";
    }

    public async Handle(rbqNum: string): Promise<BusinessStatusModel> {
        // Run the crawler to scrape info needed.
        await this.crawler.run(rbqNum);

        const businessInfo = this.crawler.getInfo();

        return new BusinessStatusModel(businessInfo.name, businessInfo.rbqNum, businessInfo.status);
    }
}
