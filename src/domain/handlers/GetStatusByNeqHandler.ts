import { Handler, ICommandHandler } from "tsmediator";
import { Container } from "typedi";
import { BusinessModel } from "../../api/models/business";
import { BusinessStatusModel } from "../../api/models/businessStatus";
import { IWebCrawler } from "../../interfaces/services/IWebCrawler";
import { RbqWebCrawler } from "../../services/RbqWebCrawler";

@Handler(GetStatusByNeqHandler.Type)
export class GetStatusByNeqHandler implements ICommandHandler<number, Promise<BusinessStatusModel>> {
    private crawler: IWebCrawler<BusinessModel>;

    constructor() {
        this.crawler = Container.get<RbqWebCrawler>("rbq.webCrawler");
    }

    public static get Type() {
        return "GetStatusByNeq";
    }

    public async Handle(neqId: number): Promise<BusinessStatusModel> {
        // Run the crawler to scrape info needed.
        await this.crawler.run(neqId);

        const businessInfo = this.crawler.getInfo();

        return new BusinessStatusModel(
            businessInfo.name,
            businessInfo.rbqNum,
            businessInfo.neqId,
            businessInfo.status
        );
    }
}
