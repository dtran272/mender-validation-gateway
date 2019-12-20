import BusinessInfoModel from "../../src/api/models/businessInfo";
import IWebCrawler from "../../src/interfaces/services/IWebCrawler";

export default class MockWebCrawler implements IWebCrawler<BusinessInfoModel> {
    public run(id: string, searchType: import("../../src/common/enums/SearchType").SearchType): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public getInfo(): BusinessInfoModel {
        throw new Error("Method not implemented.");
    }
}
