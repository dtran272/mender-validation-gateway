import { Handler, ICommandHandler } from "tsmediator";
import { Container } from "typedi";
import { BusinessInfoModel } from "../../api/models/businessInfo";
import { IWebCrawler } from "../../interfaces/services/IWebCrawler";
import { RbqWebCrawler } from "../../services/RbqWebCrawler";

@Handler(GetInfoByNeqHandler.Type)
export class GetInfoByNeqHandler implements ICommandHandler<number, Promise<BusinessInfoModel>> {
    private crawler: IWebCrawler<BusinessInfoModel>;

    constructor() {
        this.crawler = Container.get<RbqWebCrawler>("rbq.webCrawler");
    }

    public static get Type(): string {
        return "GetInfoByNeq";
    }

    public async Handle(neqId: number): Promise<BusinessInfoModel> {
        // Run the crawler to scrape info needed.
        await this.crawler.run(neqId);

        return this.crawler.getInfo();
    }
}
