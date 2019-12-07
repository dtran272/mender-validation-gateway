import { Handler, ICommandHandler } from "tsmediator";
import { Container } from "typedi";
import { BusinessModel } from "../../api/models/business";
import { IWebCrawler } from "../../interfaces/services/IWebCrawler";
import { RbqWebCrawler } from "../../services/RbqWebCrawler";

@Handler(GetInfoByNeqHandler.Type)
export class GetInfoByNeqHandler implements ICommandHandler<number, Promise<BusinessModel>> {
    private crawler: IWebCrawler<BusinessModel>;

    constructor() {
        this.crawler = Container.get<RbqWebCrawler>("rbq.webCrawler");
    }

    public static get Type(): string {
        return "GetInfoByNeq";
    }

    public async Handle(neqId: number): Promise<BusinessModel> {
        // Run the crawler to scrape info needed.
        await this.crawler.run(neqId);

        return this.crawler.getInfo();
    }
}
