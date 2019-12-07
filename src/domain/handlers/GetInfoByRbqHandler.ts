import { Handler, ICommandHandler } from "tsmediator";
import { Container } from "typedi";
import { BusinessModel } from "../../api/models/business";
import { IWebCrawler } from "../../interfaces/services/IWebCrawler";
import { RbqWebCrawler } from "../../services/RbqWebCrawler";

@Handler(GetInfoByRbqHandler.Type)
export class GetInfoByRbqHandler implements ICommandHandler<string, Promise<BusinessModel>> {
    private crawler: IWebCrawler<BusinessModel>;

    constructor() {
        this.crawler = Container.get<RbqWebCrawler>("rbq.webCrawler");
    }

    public static get Type(): string {
        return "GetInfoByRbq";
    }

    public async Handle(rbqNum: string): Promise<BusinessModel> {
        // Run the crawler to scrape info needed.
        await this.crawler.run(rbqNum);

        return this.crawler.getInfo();
    }
}
